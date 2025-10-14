let values2: string[] = ["Stark","Jon","Snow"];

console.log(values2);

let array:Array<Object> = [123,"Stark","Jon","Snow"];
let array1:Array<any> = [123,"Stark","Jon","Snow"];


console.log(array)

console.log(array);

let names:(string | number)[] = ["Stark","Jon","Snow",23];
let array2:Array<string | number> = ["Stark","Jon","Snow",23,47];
array2.push('Vamsi');
for(let i=0;i<array2.length;i++){
    console.log(array2[i]);
    console.log("This the End");
}

