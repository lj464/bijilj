const obj = {
      'a': {
            'b': {
                  'c': [{
                        d:[8]
                  }]
            }
      }
}

function getVal(obj, str) {
      let result = obj
      let currenti 
      for (let i = 0; i < str.length; i++) {
            // 如果不是【开头就是对象
            if (str[i] !== '[' && str[i] !== '.' && str[i] !== ']') {
                  if (result[str[i]] && currenti !== i) {
                        currenti = i
                        result = result[str[i]]
                  }
            } else if (str[i] === '[' && currenti !== i) {
                  if (result[str[i + 1]]) {
                        currenti = i +1
                        result = result[str[i + 1]]
                  }
            }
            // 如果是[开头则下一个用数组表示

      }
      return result
}
console.log(getVal(obj, 'a.b.c[0].d[0]'));