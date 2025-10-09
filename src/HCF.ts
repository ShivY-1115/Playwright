
gcf(100,80);
function gcf( num1:number,  num2:number): void{
    let set1:Set<number> = new Set<number>();
    let set2:Set<number> = new Set<number>();
    let arr2:Array<number> = [];

    for(let i=1;i<num1;i++){
        if(num1%i==0){
            set1.add(i);
        }
    }

    for(let i=1;i<num2;i++){
        if(num2%i==0){
            set2.add(i);
        }
    }

    for(let item of set1){
        if(set2.has(item)){
            arr2.push(item);
        }
    }

    arr2.sort((a,b) => b-a);

    console.log(arr2[0]);


}