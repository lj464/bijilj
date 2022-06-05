// 迭代器是一个对象，对象有next方法，调用next方法可以获得容器内容，第二次调用获得容器中的第二个内容
let name = [1,2,3,45,6,48]

let index = 0

IterableNmae = {
    next(){
        if(index < name.length){
            return {done:false,value:name[index++]}
        }else {
            return {done:true,value:undefined}
        }
    }
}

// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// console.log(IterableNmae.next())
// IterableNmae就是一个迭代器
// 如果我们把它放到一个对象里这个对象就是可迭代对象
 let obj = {
     name:[1,2,3,45,6,48],
    [Symbol.iterator]:function(){
        let index = 0 
        return {
            next:()=>{
                if(index < this.name.length){
                    return {done:false,value:this.name[index++]}
                }else {
                    return {done:true,value:undefined}
                } 
            }
        }
    }
 }
let dir = obj[Symbol.iterator]()

// console.log(dir.next())
// console.log(dir.next())
// console.log(dir.next())
// console.log(dir.next())
// console.log(dir.next())

// obj之所以不能迭代是因为obj不是可迭代的
