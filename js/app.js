function alterarStatus(numero)
{
    let gameBtn = document.getElementById("game-" + numero).querySelector("a");
    let gameImg = document.getElementById("game-" + numero).querySelector("div");

    if(gameBtn.classList.contains("dashboard__item__button--return"))
    {
        gameBtn.classList.remove("dashboard__item__button--return");

        gameImg.classList.remove("dashboard__item__img--rented");

        gameBtn.innerText = "Alugar";
    }
    else if(gameBtn.classList.contains("dashboard__item__button"))
    {
        gameBtn.classList.add("dashboard__item__button--return");

        gameImg.classList.add("dashboard__item__img--rented");
        
        gameBtn.innerText = "Devolver";
    }
}