// Write your solution inlet

const employee ={
    name:"Nour",
    StreetAddres:"Jounieh"
}



function updateEmployeeWithKeyAndValue(obj,key,value){
    
    const newObj = { ...obj };

    newObj[key] = value;
  
    return newObj;
}

function  deleteFromEmployeeByKey(obj,key){

    return delete obj.key;

}

