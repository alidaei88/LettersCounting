
window.addEventListener("load", () => {

    const calculateBtn = document.querySelector(".calculateBtn")
    const countBox = document.querySelector(".count")
    const inputBox = document.querySelector(".input-box")

    calculateBtn.addEventListener("click", () => {

        if (!inputBox.value) {
            countBox.classList.add("count")
            countBox.classList.remove("counter")
            alert("your input is empty!")

        } else {

            countBox.innerHTML = `<h1>${inputBox.value.length}</h1>`
            countBox.classList.remove("count")
            countBox.classList.add("counter")

        }

    })

})

