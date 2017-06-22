var buildConfig = (env) => require(`./webpack_config/webpack.config.${env || 'dev'}`)()

module.exports = buildConfig
