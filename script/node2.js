//노드관계연습(형제)
//nextSibling, nextElementSibling
//previousSibling, previousElementSibling
const p = document.querySelectorAll('p') //4

console.log(p[0].nextSibling) // 공백포함
console.log(p[0].nextSibling.nextSibling) //p[1]
console.log(p[0].nextElementSibling) //요소만 인식

p[1].nextElementSibling.style.color ='red'

console.log(p[1].previousElementSibling)
console.log(p[2].previousElementSibling.previousElementSibling)

p[2].previousElementSibling.style.borderBottom = '5px dashed red'
p[1].previousElementSibling.style.borderTop = '5px dotted blue'
p[2].previousElementSibling.style.transform = 'skewX(30deg)'

let clone1 = p[1].previousElementSibling.cloneNode(true)
console.log(clone1)
let clone2 = p[2].previousElementSibling.cloneNode(true)

p[3].appendChild(clone1)
p[3].appendChild(clone2)