const mongoose = require('mongoose');
const Employee = require('./employee');

const uri =  "mongodb://root:yliwBIpealuGivJBIh10z6dv@172.21.190.83:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })