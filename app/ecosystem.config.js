module.exports = {
    apps : [
        {
          name: "LaSupPoller",
          script: "index.js",
          increment_var : 'INSTANCE_ID',
          env: {
              "PORT": 6000
          }
        }
    ]
  }
  