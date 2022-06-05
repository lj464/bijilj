function* addRect(data){
    console.log('11111111',data)
    const res =  yield 111
    console.log('222222222',res )
}
let add = addRect('22222222')
console.log(add.next())
add.next('1111111')