
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-hudong'].styles;

            config.favicon = config.favicon;

            return config;
        }
    }
};


