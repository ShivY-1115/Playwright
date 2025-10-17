enum role {
    "Jon",
    "Snow",
    "Stark"
}

let name1: role = role.Stark
console.log(name1)

enum role2 {
    name="Stark Stark Stark",
    number_specific_role = 1234,
    Adress = "123 St, Brusells"
}

let values1: role2 = role2.Adress;
console.log(values1)
console.log(role2['1234'])

enum Browser
{
    edge,
    firefox,
    chrome= getbrowser("chrome")
}

function getbrowser(browsername: string):number {
    if(browsername==="chrome")
    {
        return 139
    }return -1;
}

let val:Browser = Browser.chrome;
console.log(val);

//1800 896 9999
