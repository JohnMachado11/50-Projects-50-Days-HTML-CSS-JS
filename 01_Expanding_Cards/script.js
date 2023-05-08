const panels = document.querySelectorAll(".panel")

// console.log(panels[1])

panels.forEach((panel) => {
    // console.log(panel)
    panel.addEventListener("click", () => {
        // console.log("Clicked!")
        removeActiveClasses()
        panel.classList.add("active")
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}