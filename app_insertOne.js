const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./employee');

const uri =  "mongodb://root:yliwBIpealuGivJBIh10z6dv@172.21.190.83:27017";

mongoose.connect(uri,{'dbName':'employeeDB'});

//insertOne record into employee
let newEmployee = new Employee({
    emp_name: 'John Cook',
    age: 37,
    location: "Illinois",
    email: "johncook@mail..com"
});
newEmployee.save().then(function(){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments in employees collection after insertOne")
        console.log(data);
        console.log("Data of the `employee` collection.");
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error)
});