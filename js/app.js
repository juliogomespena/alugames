function alterarStatus(numero)
{
    let gameBtn = document.getElementById("game-" + numero).querySelector("a");
    let gameImg = document.getElementById("game-" + numero).querySelector("div");

    if(gameBtn.classList.contains("dashboard__item__button--return"))
    {
        gameBtn.classList.remove("dashboard__item__button", "dashboard__item__button--return");
        gameBtn.classList.add("dashboard__item__button");

        gameImg.classList.remove("dashboard__item__img", "dashboard__item__img--rented");
        gameImg.classList.add("dashboard__item__img");

        gameBtn.innerText = "Alugar";
    }
    else if(gameBtn.classList.contains("dashboard__item__button"))
    {
        gameBtn.classList.remove("dashboard__item__button");
        gameBtn.classList.add("dashboard__item__button", "dashboard__item__button--return");

        gameImg.classList.add("dashboard__item__img", "dashboard__item__img--rented");
        gameImg.classList.remove("dashboard__item__img");
        
        gameBtn.innerText = "Devolver";
    }
}