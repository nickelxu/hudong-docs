#! /usr/bin/env node

const CWD = process.cwd();

const path = require('path');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const packageJSON = require('../package.json');
const fs = require('fs');
const unlink = promisify(fs.unlink);
const copyFile = promisify(fs.copyFile);
const glob = promisify(require('glob'));
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const { name, version } = packageJSON;

const bundleName = `${name}-${version}.tgz`;

async function main() {

    try {

        const tarballs = await glob('./*.tgz');

        await Promise.all(tarballs.map(async (file) => {
            return await unlink(file);
        }));

        const packResult = await exec('npm pack');

        console.log(packResult.stdout);

        console.log(packResult.stderr);

        return await updateDependents(name, bundleName);

    } catch (err) {

        throw err;

    }
}

async function getDependents(packageName) {
    const packageFiles = await glob('../*/package.json');
    const dependents = packageFiles.filter((file) => {
        const relPath = path.relative(__dirname, file);
        const packageJSON = require(relPath);
        const existed = packageJSON['dependencies'][packageName];
        return existed;
    });
    return dependents;
}

async function updateDependents(packageName, bundle) {

    const relativePath = `file:../${packageName}/${bundle}`;

    const dependents = await getDependents(packageName);

    const promises = Promise.all(dependents.map(async (file) => {

        const packageJSON = JSON.parse(await readFile(file, 'utf8'));

        packageJSON.dependencies[packageName] = relativePath;


        await writeFile(file, JSON.stringify(packageJSON, null, 2));

        const cwd = path.resolve(path.dirname(file));

        const updateResult = await exec(`echo "UPDATING ${file}: " && npm install ${packageName}`, { cwd });

        console.log(updateResult.stdout);

        console.log(updateResult.stderr);

        return;

    }));

    return await promises;

}

main()
    .then(async () => {

    })
    .catch(console.error);
