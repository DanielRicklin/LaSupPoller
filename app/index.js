'use strict'
 
const ping = require('ping')
const dotenv = require('dotenv')
const color = require('colors')
const connectDB = require('./config/db.js')
const Equipment = require('./models/equipmentModel')
const Ping = require('./models/pingModel')

dotenv.config()
connectDB()
 
setInterval(function(){
    Equipment.find({}).then((hosts)=>{
        hosts.forEach(function(host){
            ping.promise.probe(host.ip)
                .then(function (res) {
                    if(res.alive != "false"){
                        new Ping({
                            equipment: host,
                            ip: res.host,
                            alive: res.alive,
                            latency: res.avg,
                        }).save(function(err, res){
                            if(err) console.log(err)
                        })
                    }
                });
        });
    })
}, 10000)