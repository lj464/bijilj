Function.prototype.LJCall = function (targethis, ...args) {
    let fn = this
    targethis = targethis === null || targethis === undefined ? window : Object(targethis)
    targethis.fn = fn
    let result
    result = targethis.fn(...args)
    delete targethis.fn
    return result
}

function ceshi() {
    console.log('1111111111',this);
    return 111
}

Function.prototype.LJBild = function (targethis,...arg1){
    let fn = this
    targethis = targethis === null || targethis === undefined ? window : Object(targethis)
    console.log('targethis',targethis);
    function procythis(...arg2){
        let data =  [...arg1,...arg2]
        targethis.fn = fn
        let result = targethis.fn(...data)
        delete targethis.fn
        return result
    }
    return procythis
}
let newC = ceshi.LJBild('asda')
newC()