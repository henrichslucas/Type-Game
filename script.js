let mainContainer = document.querySelector(".mainContainer")
let displayType = document.querySelector(".displayType")
let displayWord = document.querySelector(".displayWord")
let missCounter = document.querySelector(".missCount")
let retryBtn = document.querySelector(".retryBtn")
let i = 0
let miss = 0
let timeleft = 10;
let ready = 0
let words = [
    "Pá", "Pé", "Batata", "Sapo", "Casa", "Papel", "Robô", "Laço", "Floresta", "Paralelepipedo", "Hipopótamo", "Desfibrilador", "Eletromagnetismo"
]

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

displayWord.innerHTML = words[i]
displayType.addEventListener("click", function () {
    ready = 1
    displayWord.setAttribute("show", "visible")
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
