//create an array of off the tips

var tips=["Start an Emergency fund for yourself and add a little each time you get paid!",
"Use SMART goals to set some long term and short term goals for youself",
"It's tax season! Use this website to help yourself: https://www.canada.ca/en/services/taxes/income-tax/personal-income-tax/get-ready-taxes.html"
]
// function newTip(){
    var randomNum= Math.floor(Math.random()*(tips.length));
    document.getElementById("tipDisplay").innerText=tips[randomNum];
//}