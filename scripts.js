
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function parseCurrencyToNumber(value) {
    let numberString = value.replace(/[^\d,]/g, ""); // Remove tudo que não seja dígito ou vírgula
    numberString = numberString.replace(",", "."); // Troca vírgula por ponto
    return parseFloat(numberString);
}

function convertValues() {
    const inputCurrencyValueRaw = document.querySelector(".input-currency").value;
    const inputCurrencyValue = parseCurrencyToNumber(inputCurrencyValueRaw);

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // valor a converter
    const currencyValueConverted = document.querySelector(".currency-value"); // valor convertido

    const dolarToday = 5.2;
    const euroToday = 6.2;

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday);

        console.log("dolar");
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday);

        console.log("euro");
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);
}

//mascara do input que transforma os numeros em valor monetario
function formatarMoeda(input) {
    // Remove tudo o que não for dígito
    let valor = input.value.replace(/\D/g, "");
    
    // Transforma em centavos (ex: 150 vira 1.50)
    valor = (valor / 100).toFixed(2) + "";
    
    // Substitui o ponto pela vírgula e adiciona os pontos de milhar
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    
    // Retorna o valor com o cifrão
    input.value = "R$ " + valor;
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const converterDe = document.querySelector(".converter-de")
    const currencyFromImg = document.querySelector(".currency-from-img")
    const currencyFromName = document.querySelector(".currency-from-name")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (converterDe.value == "real") {
        currencyFromName.innerHTML = "Real"
        currencyFromImg.src = "./assets/brasil 2.png"
    }

    if (converterDe.value == "dolar") {
        currencyFromName.innerHTML = "Dólar americano"
        currencyFromImg.src = "./assets/dolar.png"
    }

    if (converterDe.value == "bitcoin") {
        currencyFromName.innerHTML = "Bitcoin"
        currencyFromImg.src = "./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
const converterDe = document.querySelector(".converter-de")
converterDe.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)