function isRange(min, max, ip) {
    if(ip == null) return false;
    else if(ip >= min && ip <= max) {
        return true;
    }   
    return false ;
}

console.log(isRange(1, 10, 5));