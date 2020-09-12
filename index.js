let baseCurrency = document.getElementById('baseCurrency');
let comparisonCurrency = document.getElementById('baseCurrency');
const baseCurrencyDrop = document.getElementById('baseCurrencyDrop');
const comparisonCurrencyDrop = document.getElementById('comparisonCurrencyDrop');
const submitButton = document.getElementById('submitButton');
const currencyInfo = get(`https://api.exchangeratesapi.io/latest?base=USD`);

function get(url) {
    //Step1: fetch data
    return fetch(url)
        //Step2: Run the json() method from the server response
        .then(function(response) {
            return response.json();
        })
        //Step3: Return the data from the response.json() method
        .then(function(data) {
        return data;
        })
}


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    currencyInfo.then((response) => {
        console.log(response);
        console.log(response.base);
    })
})

