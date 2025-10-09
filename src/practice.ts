let name2:string = "Hello! World";

let name3:string ="";

for(let i = name2.length-1; i>=0; i--){
    name3 += name2.charAt(i);
}


console.log(name3);

let names1:string[] = name2.split(" ");

for(let i=0;i<names1.length;i++){
    console.log(names1[i]);
}

let num23:number = 23;

for(let j=1;j<100;j++){
    let count=0;
    for(let i=1;i<j;i++){
        if(j%i==0)
        {
            count++;
        }
    }
    if(count==1){
        console.log(j," is a Prime Number");
    }else{
        //console.log(j," is Not a Prime Number");
    }
}

let array323:Array<any> = [1,2,3,4,2,3,3,2];
let array324:Array<any> = [];

for(let i=0;i<array323.length;i++){
    if(!array324.includes(array323[i])){
        array324.push(array323[i]);
    }
}
console.log(array324);


let array523:Array<any> = [1,23,32,3,4,2,6];
for(let i=0;i<array523.length;i++){
    for(let j=i;j<array523.length;j++){
        if(i!=j)
        {
            if(array523[i]>array523[j]){
                let temp = array523[i];
                array523[i]=array523[j];
                array523[j]=temp;
            }

        }
    }
}
console.log(array523);


let array623:Array<any> = [1,23,32,3,4,2,6];
let start = 0;
let end = array623.length-1;
while(start<end){
    let temp = array623[start];
    array623[start] = array623[end];
    array623[end]=temp;
    start++;
    end--;
}
console.log(array623);


let sten:string = "Helllllooo Worrrldddd Vamasisi Srrrrrrrrikaaaaaaar";
let new_Sten = "";
for(let item of sten.split(" "))
{
    let numbers12334:Set<string> = new Set();
    for(let jtem of item){
        numbers12334.add(jtem);
    }
    for(let ktem of numbers12334){
        new_Sten += ktem;
    }
    new_Sten += " ";
     //numbers12334;
}
console.log(new_Sten);

console.log(array623);
array623.sort((a,b) => a-b);
console.log(array623);

let star = 0;
let sum= 1;
for(let i=0;i<10;i++)
{
    let temp = sum+star;
    console.log(star);
    star = sum;
    sum = temp;

}













