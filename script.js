const newClock = document.querySelector('.numberClock')
let minHtml = newClock.children[0]
let secHtml = newClock.children[1]

const secundHandle = document.querySelector('.s')
const minutesHandle = document.querySelector('.m')
const hoursHandle = document.querySelector('.h')

setInterval(() => {
    const time = new Date
    let min = time.getMinutes()
    let secunds = time.getSeconds()

    let clsecundes = time.getSeconds() * 6;
    let clMinutes = time.getMinutes() * 6;
    let clHours = time.getHours() * 30;
    secundHandle.style.transform = `rotate(${clsecundes}deg)`
    minutesHandle.style.transform = `rotate(${clMinutes}deg)`
    hoursHandle.style.transform = `rotate(${clHours}deg)`

    minHtml.innerHTML = min < 10 ? '0' + min : min
    secHtml.innerHTML = secunds < 10 ? '0' + secunds : secunds
}, 1000)


const clockDiv = document.querySelector('.clock')
const tabs = document.querySelectorAll('.tabsItem')
const timerDiv = document.querySelector('.stopwatch')


tabs.forEach(prev => prev.children[0].addEventListener('change', () => {
    console.log(prev);
    for (const iterator of tabs) {
        if (iterator.children[0].checked) {
            iterator.classList.add('active')
        } else {
            iterator.classList.remove('active')
        }
    }
    if (tabs[1].children[0].checked) {
        clockDiv.classList.remove('active')
        timerDiv.classList.add('active')
    } else {
        clockDiv.classList.add('active')
        timerDiv.classList.remove('active')
    }
}))


const swButtons = document.querySelectorAll('.stopwatch__clock-description div')
let swHours = swButtons[0]
let swMinsutes = swButtons[1]
let swSecunds = swButtons[2]

let myInterval
let secundsSt = 0
let minutesSt = 0
let hoursSt = 0

const activeSpan = document.querySelector('.tabsLink__span')
const start = document.querySelector('.stopwatch__btn').addEventListener('click', () => {
    startTime()
    activeSpan.classList.remove('active_clear')
    activeSpan.classList.add('active')
})

const stop = document.querySelector('.stopwatch__stop').addEventListener('click', () => {
    if (secundsSt > 1) {
        stopTime()
        activeSpan.classList.remove('active')
        activeSpan.classList.add('active_clear')
    }
})

const recet = document.querySelector('.stopwatch__recet').addEventListener('click', () => {
    recetTime()
    activeSpan.classList.remove('active')
    activeSpan.classList.remove('active_clear')
})

function startTime() {
    myInterval = setInterval(() => {
        secundsSt++
        if (secundsSt == 60) {
            secundsSt = 0
            minutesSt++
        }
        if (minutesSt == 60) {
            minutesSt = 0
            hoursSt++
        }
        swSecunds.innerHTML = secundsSt
        swMinsutes.innerHTML = minutesSt
        swHours.innerHTML = hoursSt
    }, 1000)
}

function stopTime() {
    clearInterval(myInterval)
}

function recetTime() {
    swHours.innerHTML = '0'
    swMinsutes.innerHTML = '0'
    swSecunds.innerHTML = '0'
    secundsSt = 0
    minutesSt = 0
    hoursSt = 0
    stopTime()
}