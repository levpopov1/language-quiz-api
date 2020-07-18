// PM2 in Docker config
module.exports = {
    apps : [{
      name: 'api',
      script: './src/server.js',
      watch: true,
      ignore_watch : ['node_modules', 'docker-data'],
    }]
};