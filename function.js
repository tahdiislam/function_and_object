// 1st function 

function bringSingara(money, quentity){
    let money1 = money;
    let quentity1 = quentity;
    let singaraPrice = 10;
    let singaratotalPrice = singaraPrice * quentity;
    let returnMoney = money1 - singaratotalPrice;
    let returnItems = "Here your return money " + returnMoney + "৳ and your " + quentity1 + " Singara";
    return returnItems;
}

let singara = bringSingara(200, 15);

console.log(singara)
