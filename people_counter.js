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

function increment() {
    //console.log("!Button was clicked")
    count = count + 1
    //console.log(count)
    countEl.innerText = count

    save(count)
}

function save(count) {
    console.log(count)
}


