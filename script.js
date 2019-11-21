
var category = '';
var apiKey = '9973533';

var randomMealsURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/random.php';
var categoryMealURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/filter.php?c=' + category;


var alcoholType = '';
var randomDrinksURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/random.php';
var alcoholTypeURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/search.php?i=' + alcoholType;

function searchDrinkName() {
    event.preventDefault()

    var drinkName = document.getElementById('userInput').value;
    var drinkNameURL = 'https://www.thecocktaildb.com/api/json/v2/' + apiKey + '/search.php?s=' + drinkName;

    $('#mainContent').empty();

    $.ajax({
        url: drinkNameURL,
        method: 'GET'

    }).then(function (response) {

        var mainContent = $('#mainContent');
        var displayInfo = $("<p id='drinkName'>").text(JSON.stringify(response.drinks));

        for (i = 0; i < response.drinks.length; i++) {
            var allDrinks = $("<p id='allDrinks'>").text(JSON.stringify(response.drinks[i].strIngredient1));
            console.log(response.drinks[i])
            mainContent.append(allDrinks)
        }
        // for (i = 0; i < response.drinks.strIngredient.length; i++){
        //     var drinkIngredients = $("<p id='allIngredients'>").text(JSON.stringify(response.drinks.strIngredient[i]))
        //     mainContent.append(drinkIngredients)
        //     console.log(drinkIngredients[i])

        // }


        // mainContent.append(displayInfo);


        console.log(response.drinks[i])

    })

}

function randomRecomendation() {
    event.preventDefault();

    $('#mainContent').empty();

    $.ajax({
        url: randomDrinksURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        var mainContent = $('#mainContent');
        let html = `
        <img src='${response.drinks[0].strDrinkThumb}'>
        <p>${response.drinks[0].strDrink}</p>
        `

for (var i = 1; i<= 15; i++) {
  let ingredient= "strIngredient" + i;
  let measure= "strMeasure" + i;
  if (response.drinks[0][measure] && response.drinks[0][ingredient]) {
    html += `<p>${response.drinks[0][measure]} of ${response.drinks[0][ingredient]}</p>`
  }
}

html += `<p> ${response.drinks[0].strInstructions}</p>`

mainContent.append(html)
    //     mainContent.append(`
    //     <img src='${response.drinks[0].strDrinkThumb}'>
    //     <h2>${response.drinks[0].strDrink}</h2>
    //     <p>${response.drinks[0].strMeasure1} of ${response.drinks[0].strIngredient1}</p>
    //     <p> ${response.drinks[0].strInstructions}</p>`);
    })


    $.ajax({
        url: randomMealsURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response);
        var mainContent = $('#mainContent');
        mainContent.append(`
            < img src = '${response.meals[0].strMealThumb}' >
            <h2>${response.meals[0].strMeal}</h2>
            <p>${response.meals[0].strMeasure1} of ${response.meals[0].streIngredient1}</p>
            <p>${response.meals[0].strInstructions}</p>
        `)
    });
}

function searchMealName() {
    event.preventDefault();

    var mealSpaceName = document.getElementById('userInput').value;
    var mealName = mealSpaceName.replace(/ /g, '_');
    var mealNameURL = 'https://www.themealdb.com/api/json/v2/' + apiKey + '/search.php?s=' + mealName;

    $('#mainContent').empty();

    $.ajax({
        url: mealNameURL,
        method: 'GET'
    }).then(function (response) {
        console.log(response.meals[0]);
        var mainContent = $('#mainContent');
        var displayInfo = $("<p id='test'>").text(JSON.stringify(response.meals[0], null, 2));
        mainContent.append(displayInfo);
    })
    console.log(mealName);
}

$(document).ready(function () {

    event.preventDefault();
    $(".button-collapse").sideNav();
});

$('#randomButton').on('click', randomRecomendation)
$('#searchButton').on('click', function () {
    var optionValue = document.getElementById('dropDownBar').value;
    if (optionValue === '1') {
        searchMealName();
    } else if (optionValue === '2') {
        searchDrinkName();
    }
})