//노드생성, 제거
//DOM.creatElement(노드생성)
//DOM.remove()
//DOM.removeCHild(자식노드)
const p = document.querySelectorAll('p')
const box = document.querySelector('#box')

p[2].remove()
box.removeChild(p[0]) //태그가 중복되어도 혼선되지 않게 부모를 지정하고 속성씀.

let img = document.createElement('img')
img.alt = '연습 이미지'
// img.src = './image/test.jpg'
console.log(img)

let pTag = document.createElement('p') //무언가를 새로 생성할 때
pTag.classList.add('a')
pTag.innerHTML = 'p태그 생성'
console.log(pTag)

box.appendChild(pTag)