const key = "e0283766cee7e7e70be7e75409ae8042"

function DadosNaTela(dados){ 

    console.log(dados)
    document.querySelector(".titulo-cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".icone-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    // Ou: const img = document.querySelector(".icone-previsao")
    // const img_icon = dados.weather[0].icon 
    // img.setAttribute('src',`https://openweathermap.org/img/wn/${img_icon}.png`)

    document.querySelector(".previsao-texto").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = `Umidade Relativa do Ar: ${dados.main.humidity}%`
}

async function BuscarDados(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(Response => Response.json())
    DadosNaTela(dados)
}

function CliqueBotao(){

    const cidade  = document.querySelector(".input-cidade").value
    BuscarDados(cidade)
}