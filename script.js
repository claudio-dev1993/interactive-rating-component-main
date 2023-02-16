
function activeButton(id) {
    const button = document.getElementById(id)
    button.style.backgroundColor = 'hsl(216, 12%, 54%)'
    button.style.color = 'hsl(0, 0%, 100%)'
}

function inactiveButton(id) {
    const button = document.getElementById(id)
    button.style.backgroundColor = ''
    button.style.color = ''
}

function getRate(id) {
    const value = document.getElementById(id).innerText
    localStorage.setItem('valueRate', value)
}

function insertRate() {
    document.querySelector('p > #value-rate').innerText = localStorage.getItem('valueRate')
}

document.getElementById('value-rate').onload = insertRate()

