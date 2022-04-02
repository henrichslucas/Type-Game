let mainContainer = document.querySelector(".mainContainer")
let displayType = document.querySelector(".displayType")
let displayWord = document.querySelector(".displayWord")
let missCounter = document.querySelector(".missCount")
let retryBtn = document.querySelector(".retryBtn")
let easyBtn = document.querySelector(".easyBtn")
let hardBtn = document.querySelector(".hardBtn")
let menuContainer = document.querySelector(".diffMenu")
let i = 0
let miss = 0
let timeleft = 10;
let ready = 0
let words = ["a"]
let hardWords = ["Floresta", "Paralelepipedo", "Hipopótamo", "Desfibrilador", "Eletromagnetismo"]
let easyWords = ["Pá", "Pé", "Batata", "Sapo", "Casa", "Papel", "Robô", "Laço"]

let countDown = setInterval(function () {
    if (ready == 1) {
        if (timeleft <= 0) {
            clearInterval(countDown)
            document.querySelector(".countdown").innerHTML = "Tempo esgotado"
            displayWord.innerHTML = "Você Perdeu :("
            mainContainer.removeChild(displayType)
            retryBtn.setAttribute("show", "visible")
        } else {
            document.querySelector(".countdown").innerHTML = `${timeleft} segundos restantes`
        }
        timeleft--
    }
}, 900);

easyBtn.addEventListener("click", function(){
    words = [...easyWords]
    displayWord.innerHTML = words[i]
    ready = 1
    mainContainer.removeChild(menuContainer)
    displayWord.setAttribute("show", "visible")
    displayType.setAttribute("show", "visible")
    displayType.placeholder = " "
})

hardBtn.addEventListener("click", function(){
    words = [...hardWords]
    displayWord.innerHTML = words[i]
    ready = 1
    mainContainer.removeChild(menuContainer)
    displayWord.setAttribute("show", "visible")
    displayType.setAttribute("show", "visible")
    displayType.placeholder = " "
})

displayType.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        if (displayType.value === displayWord.innerHTML) {
            i++
            timeleft = 10
            displayWord.innerHTML = words[i]
            displayType.value = ""

            if (i == words.length) {
                displayWord.innerHTML = "Você ganhou!!!"
                clearInterval(countDown);
                mainContainer.removeChild(displayType)
                retryBtn.setAttribute("show", "visible")
            }

        } else {
            miss++
            timeleft--
            missCounter.innerHTML = `Erros: ${miss}`
        }
    }
})

retryBtn.addEventListener("click", function(){
    location.reload(true)
})

easyBtn.addEventListener("mouseenter", function(){
    easyBtn.innerHTML = "&#9656;Fácil"
})

easyBtn.addEventListener("mouseleave", function(){
    easyBtn.innerHTML = "Fácil"
})

hardBtn.addEventListener("mouseenter", function(){
    hardBtn.innerHTML = "&#9656;Difícil"
})

hardBtn.addEventListener("mouseleave", function(){
    hardBtn.innerHTML = "Difícil"
})


