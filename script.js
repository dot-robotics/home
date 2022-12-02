let holder = document.getElementById("holder")

let gs = 38.1;

window.onload = () => {
    for (let i = 0; i < gs; i++) {
        for (let j = 0; j < gs; j++) {
            let dot = document.createElement("div")
            dot.classList.add("dot")
            dot.style.animationDelay = `${Math.sin(i * j)/3}s`
            holder.appendChild(dot)
        }
    }
}