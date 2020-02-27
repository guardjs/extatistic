const config = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ]
}

if (!process.env["ENV"] || process.env["ENV"].indexOf("test") === -1) {
  config["ignore"] = [
    "**/*.test.js",
    "babel.config.js",
    "node_modules/",
    "node_modules/**/*.js"
  ]
}

module.exports = config 
