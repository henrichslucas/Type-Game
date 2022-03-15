let displayType = document.querySelector(".displayType")
let displayWord = document.querySelector(".displayWord")
let missCounter = document.querySelector(".missCount")
let words = [
    "Pá", "Pé", "Batata", "Sapo", "Casa", "Papel", "Robô", "Laço", "Floresta", "Paralelepipedo", "Hipopótamo", "Desfibrilador", "Eletromagnetismo"
]
let i = 0
let miss = 0


displayWord.innerHTML = words[i]

displayType.addEventListener("change", function(){
    if (displayType.value === displayWord.innerHTML) {
        i++
        displayWord.innerHTML = words[i]
        displayType.value = ""

        if (i == words.length) {
            displayWord.innerHTML = "Ganhou!!!"
            document.querySelector(".mainContainer").removeChild(displayType)
        }
    } else {
        miss++
        missCounter.innerHTML = `Erros: ${miss}`
    }
})


