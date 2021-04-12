const btnscroll= document.getElementById("przycisk")
const punkt=document.getElementById("punkt")
btnscroll.addEventListener('click', function (e) {
    const s1=punkt.getBoundingClientRect()
//     console.log(s1)
//     console.log(window.pageYOffset)

//     console.log(e.target.getBoundingClientRect())
// console.log('wartosc wysokosci', window, pageXOffset, pageYOffset)
// window.scrollTo({
//     left: s1.left+ window.pageXOffset,
//     top: s1.top+window.pageYOffset,
//      behavior: 'smooth',})
     punkt.scrollIntoView({ behavior: 'smooth'})
})