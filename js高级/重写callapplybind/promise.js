class LjPromise {
    constructor(call) {
        this.status = 'pending'
        let resolve = (value) => {
            if (this.status === 'pending') {
                queueMicrotask(() => {
                    this.status = 'resolve'
                    this.value = value
                    this.resolve && this.resolve(this.value)
                })
            }
        }

        let reject = () => {
            if (this.status === 'pending') {
                queueMicrotask(() => {
                    this.status = 'reject'
                    this.reject && this.reject()
                })
            }
        }
        call(resolve, reject)
    }
    then(resolve, reject) {
        if (this.status === 'resolve') {
            resolve()
        }
        if (this.status === 'reject') {
            reject()
        }
        if (this.status === 'pending') {
            this.resolve = resolve
            this.reject = reject
        }
    }
}



let ljp = new LjPromise((resolve, reject) => {
    resolve('1111')
})
setTimeout(() => {
    ljp.then((res) => {
        console.log('成功了哈哈哈', res)
    }, () => {
        console.log('失败率哈哈哈哈')
    })
}, 1000);