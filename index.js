
// handles all drum interactions
function handleBtnClick() {
    let targetHtml = this.innerHTML
    makeSound(targetHtml)
    btnAnimation(targetHtml)

}


// when drum is clicked
let btn_len = document.querySelectorAll('.drum').length

for (let i = 0; i < btn_len; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', handleBtnClick)
}


function makeSound (key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break
        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break
        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break
        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break
        case 'j':
            let snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break
        case 'k':
            let crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break
        case 'l':
            let kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break
        default:
            console.log(targetHtml)

    }
}


// detecting keyboard press

document.addEventListener('keydown', function (event){
    makeSound(event.key)
    btnAnimation(event.key)
})



// drum animation
function btnAnimation (currentkey) {
    let activeBtn = document.querySelector('.' + currentkey)
    activeBtn.classList.add('pressed')
    setTimeout(function (){
        activeBtn.classList.remove('pressed')},
        100)
    activeBtn.classList.toggle('pressssed')
}