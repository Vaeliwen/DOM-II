// Your code goes here
const navBar = document.querySelector('nav')
let navArray = Array.from(navBar.children)
navArray.forEach(nava => nava.addEventListener('click', function() {
    nava.style.color = 'green';
}))

navArray.forEach(nava => nava.addEventListener('mousedown', function() {
    nava.style.color = 'red';
}))

const introArea = document.querySelector('.intro')

introArea.children[2].addEventListener('mouseover', function() {
    introArea.children[2].textContent = 'Lol';
    introArea.children[1].textContent = 'git rekt';
})

introArea.children[1].addEventListener('click', function() {
    introArea.children[2].textContent = `You aren't that clever.`
    introArea.children[1].textContent = 'You know,'
})

introArea.children[1].addEventListener('copy', function() {
    introArea.children[1].style.background = 'purple';
    introArea.children[2].style.background = 'purple';
    introArea.children[1].textContent = 'Now look what you did.';
    introArea.children[2].textContent = '';
})

const btn = document.querySelectorAll('.btn')
btn.forEach(bitn => bitn.addEventListener('mouseover', function() {
    bitn.textContent = 'Click meeeeeee!';
}))
btn.forEach(bitn => bitn.addEventListener('mouseleave', function() {
    bitn.textContent = 'Sign Me Up!';
}))

const pictures = document.querySelectorAll('.img-content')
const txtCntnt = document.querySelectorAll('.text-content')
pictures.forEach(pic => pic.addEventListener('mouseover', function() {
    txtCntnt[0].remove()
    txtCntnt[1].remove()
}))

txtCntnt.forEach(txt => txt.addEventListener('mouseover', function() {
    pictures[0].remove()
    pictures[1].remove()
}))

txtCntnt.forEach(txt => txt.addEventListener('click', function() {
    txtCntnt[0].children[0].textContent = 'WHY'
    txtCntnt[0].children[1].textContent = 'WOULD'
    txtCntnt[0].children[2].textContent = 'YOU'
    txtCntnt[1].children[0].textContent = 'DO'
    txtCntnt[1].children[1].textContent = 'THIS'
    txtCntnt[1].children[2].textContent = 'YOU FOOL!!!!!!!!!!!'
    txtCntnt[0].style.background = 'green';
    txtCntnt[1].style.background = 'blue';
}))