// 自动柯里化函数的实现
function LJCurring(fn) {
    let Curring = function (...args) {
        if (args.length >= fn.length) {
            fn.apply(this, args)
        } else {
            function Currings(...args2) {
               return Curring.apply(this, [...args, ...args2])
            }
            return Currings
        }

    }
    return Curring
}
let fm = (x, y, z) => {
    console.log(x + y + z);
}

let target = LJCurring(fm)
let target2 = target(1)(2)
target2(10)
console.log(target2(10));
console.log(target2(20));