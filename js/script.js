// console.log("Soy el script")

document.onscroll = () => {
  let depth = window.scrollY

  // menu collapse effect
  if (depth > 150) {
    document.querySelector(".navigation").classList.add("thin")
  } else {
    document.querySelector(".navigation").classList.remove("thin")
  }

  // parallax element
  document.querySelectorAll(".parallax").forEach(elem => {
    let speed = elem.dataset.speed
    let diff = elem.getBoundingClientRect().top
    let axis = elem.dataset.axis

    let horizontalSum = diff * speed
    let verticalSum = diff * speed

    if (axis === "horizontal") {
      verticalSum = 0;
    }
    if (axis === "vertical") {
      horizontalSum = 0;
    }

    elem.style.transform = `translate(${horizontalSum}px, ${verticalSum}px)`
  })
}

document.querySelector(".contact").onmousemove = (e) => {
  let {x, y} = e
  console.log(x)

  document.querySelectorAll(".mobile-inertia").forEach(elem => {
    let speed = elem.dataset.speed
    elem.style.transform = `translate(${x * speed}px, ${y * speed}px)`
  })
}