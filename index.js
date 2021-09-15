// Write your solution in this file!
const employee = {
name: "Ram",
streetAddress: "3343 woodside NY,11373"
};

function updateEmployeeWithKeyAndValue(employee,key,value){
const newEmployee={...employee};
newEmployee.name="Sam";
newEmployee.streetAddress="11 Broadway";
return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.name="Sam";
    employee.streetAddress = "12 Broadway"

    return employee;
}
function deleteFromEmployeeByKey(employee,key){
    const newEmployee={...employee};
    delete newEmployee.streetAddress;
    delete newEmployee.name;

    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(){
    delete employee.streetAddress;
    delete employee.name;

    return employee;
}