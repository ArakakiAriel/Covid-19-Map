
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseNumber(number) {
    if(number >= 1000000){
        return (number/1000000).toFixed(2) + "M";
    }else if(number >= 1000){
        return (number/1000).toFixed(2) + "K";
    }
    return number;
}