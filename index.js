var DEFAULT_RATE = 0.10;
var rate = 0.05;

function getRate(){
    if(rate > 0.01){
        let rate = DEFAULT_RATE;
        console.log(rate);
        //return rate;
    }
    return rate;
}

console.log("Your rate is ", getRate());