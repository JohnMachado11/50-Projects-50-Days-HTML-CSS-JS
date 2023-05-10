const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

next.addEventListener("click", () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    
    console.log(currentActive)
    update()

})

prev.addEventListener("click", () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add("active")
            // console.log(circle.classList)
        } else {
            circle.classList.remove("active")
        }
    })

    const actives = document.querySelectorAll(".active")
    
    // circles is always 4, actives changes to match that upon each click of next
    // console.log(actives.length, circles.length) 
    
    // the way to update the progress bar based off percentage
    // console.log((actives.length / circles.length) * 100)
    
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"
    // console.log(progress.style.width)

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}