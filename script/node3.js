//자식 노드
//nth-child(n), first-child, last-child CSS 비슷
const box = document.querySelector('#box')
const result = document.querySelector('#result')

console.log(box.firstChild.firstChild) /* 첫 번째 자식의 첫번째 자식이라는 게 말이 안 됨 */ //공백 포함
console.log(box.firstElementChild) // 요소 인식
console.log(box.lastChild)
console.log(box.lastElementChild)

box.firstElementChild.style.transform = 'scaleX(1.5)'
box.firstElementChild.style.transition = 'all 0.5s'
box.lastElementChild.classList.add('a')

let clone1 = box.lastElementChild.cloneNode(true)
let clone2 = box.firstElementChild.cloneNode(true)
let clone3 = box.parentNode.cloneNode()
console.log(clone1, clone2, clone3)
//result.appendChild(clone1) //마지막 자식 추가

//DOM.insertBefor(복제대상, 기준위치)
result.insertBefore(clone1, result.firstChild/* 공백에 붙여넣기 하려고 element 안씀*/) //첫번째 자식에 추가
result.appendChild(clone3)
box.insertBefore(clone2, box.firstChild)