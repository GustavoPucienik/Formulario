//my script

const mudaTemaBtn = document.querySelector("#muda-tema")

mudaTemaBtn.addEventListener("change", function(){

    document.body.classList.toggle("dark")
})