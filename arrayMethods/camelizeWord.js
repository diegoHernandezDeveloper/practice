//changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
function camelizeWord() {
    let arr = camelizeInput.value.split('-')
    let resutl = arr.map((item, index) => {
        if(index == 0) {
           return item.toLowerCase()
        } else {
            return capitalizeWord(item)
        }
    }).join('')
    camelizeSpan.innerText = resutl
    return resutl
}
