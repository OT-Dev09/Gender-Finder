function search() {
    const userInput = document.getElementById('gender').value
    const displayArea = document.getElementById('display')

    if (userInput.toLowerCase() === 'male') {
        displayArea.innerHTML = `<p>Gender is Valid ✅: You're a Male 👦🏻</p>`
    } else if (userInput.toLowerCase() === 'female') {
        displayArea.innerHTML = `<p>Gender is Valid ✅: You're a Female 👧🏻</p>`
    } else {
        displayArea.innerHTML = `<p>🚨 Invalid Gender!  You wan Enter Fire? 😂</p>`
    }
}