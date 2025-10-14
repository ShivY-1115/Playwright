let values2: string[] = ["Vamsi","Srikar","Jogi"];

console.log(values2);

let array:Array<Object> = [123,"Vamsi","Srikar","Jogi"];
let array1:Array<any> = [123,"Vamsi","Srikar","Jogi"];


console.log(array)

console.log(array);

let names:(string | number)[] = ['Vamsi','Srikar','Jogi',23];
let array2:Array<string | number> = ['Vamsi','Srikar','Jogi',23,47];
array2.push('Vamsi');
for(let i=0;i<array2.length;i++){
    console.log(array2[i]);
    console.log("This the End");
}

