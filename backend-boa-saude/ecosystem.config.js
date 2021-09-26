module.exports = {
    apps: [{
        "name"      : "BoaSaudeCluster",
        "script"    : "./src/main/server.js",// name of the startup file
        "instances" : 2,          // number of workers you want to run
        "exec_mode" : "cluster",  // to turn on cluster mode; defaults to 'fork' mode 
       // "env": {
         // "PORT"      : "3000" // the port on which the app should listen
       // }
        // for more options refer : http://pm2.keymetrics.io/docs/usage/application-declaration/#process-file
      }]
  }
  