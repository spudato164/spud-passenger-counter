// document.getElementById('count-el').innerText = 5;

// initialise the count as 0
// listen for clicks on the increment button
// increment the count variable as button is clicked
//  change the count-el in the HTML to refelct the new count


// use camelcase fro javascript
let countEl = document.getElementById('count-el')
console.log(countEl)
let incBtn = document.getElementById('increment-btn')
let count = 0
let stopCount = 0
let saveEl = document.getElementById('save-el')

function increment() {
    //console.log("!Button was clicked")
    count += 1
    //console.log(count)
    countEl.textContent = count
}

function save() {
    stopCount += 1
    console.log('Stop Count ' + stopCount + ' : ' + count)
    countStr = ' ' + count + ' - '
    saveEl.innerHTML += countStr
    countEl.textContent = 0
    count = 0
}


