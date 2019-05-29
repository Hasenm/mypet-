const petButton = document.querySelector("#petButton")
const feedButton = document.querySelector("#feedButton")
const status = document.querySelector('#status')
const foodstatus = document.querySelector('#foodstatus')
const imageDiv = document.querySelector('#image-container')
console.log(foodstatus.innerHTML)
console.log(status.innerHTML)
console.log(petButton)
console.log(feedButton)


let count = 0
petButton.addEventListener('click', (e) => {
    console.log('Button pressed!')
    count += 1
    console.log(count)
    console.log(`Button pressed ${count} times!`)
    status.innerHTML = `<h3>You pet the blobfish ${count} times! </h3>`
    if (count > 10) {
        status.innerHTML = `Okay, no more pets, I'm tired. Feed me!`
        imageDiv.innerHTML = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5To8RPzval78iC94KjAjifhZqI6Y3nfcOx9PVjUxRiWcDm2E">'
    }
})

let countfeed = 0
feedButton.addEventListener('click', e => {
    console.log('Button pressed!')
    countfeed += 1
    console.log(countfeed)
    console.log(`Button pressed ${countfeed} times!`)
    foodstatus.innerHTML = `<h3> You fed the blobfish ${countfeed} times! </h3>`
    if (countfeed > 5) {
        foodstatus.innerHTML = `I'm stuffed, I'm going to sleep now.`
        imageDiv.innerHTML = `<img src="SleepyBlobfish.png" />`
    }
})
