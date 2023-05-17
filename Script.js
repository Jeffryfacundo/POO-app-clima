//Variaveis e seleção de elementos:
const apiKey ="23fda6e778ddde79bc89cf428df674ec";

const apiCountryURL = "https://flagsapi.com/.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

//funções
const showWeatherData = (city) => {
    console.log();
}

//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;
    
    console.log("city");

});


function novaDiv() {
    let btnDiv = document.createElement("div");
    let botao = document.createElement("button");
    let paragrafo = document.createElement("p");
  
    paragrafo.innerText = "Deseja salvar essa localização? ";
  
    btnDiv.id = "btnDiv";
    btnDiv.className = "divDinamica";
    botao.id = "botaoSalvar";
    botao.innerText = "Salvar";
  
    btnDiv.appendChild(paragrafo);
    btnDiv.appendChild(botao);
  
    document.body.append(btnDiv);
    document.getElementById("search").disabled = true;
  
    botao.addEventListener("click", function () {
      alert("Endereço Salvo!");
      botao.disabled = true;
    });
  }