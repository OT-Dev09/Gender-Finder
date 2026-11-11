function search() {
    const userInput = document.getElementById('gender').value
    const displayArea = document.getElementById('display')

    if (userInput.trim().toLowerCase() === 'male') {
        displayArea.innerHTML = `<p>Gender is Valid ✅: You're Male 👦🏻</p>`
    } else if (userInput.trim().toLowerCase() === 'female') {
        displayArea.innerHTML = `<p>Gender is Valid ✅: You're Female 👧🏻</p>`
    }else if (userInput == ""){
        displayArea.innerHTML = `<p>🚨 What's Your Gender?</p>`
    }else {
        displayArea.innerHTML = `<p>🚨 Invalid Gender!  You wan Enter Fire? 😂</p>`
    }
}