// https://github.com/hosainabid/JS_Assignment


// First Problem: Kilometer To Meter Conversion

function kilometerToMeter(kilo){
    var conversion = kilo * 1000; // Multiplies the input kilometer by 1000 meters

    if (kilo > 0) {
        return conversion;
    }
    else if (kilo < 0) {
        return "This is an invalid output";
    }
    else if (kilo == 0) {
        return "DIM DISE, DIM?";
    }
    else{
        return "Something is wrong"
    }
}

var convertedResult = kilometerToMeter(100);
console.log(convertedResult);


// Second Problem: Calculating Budget

function budgetCalculator(watch, phone, laptop){
    watchPrice = watch * 50; // Counts total price of all watches
    phonePrice = phone * 100; // Counts total price of all phones
    laptopPrice = laptop * 500; // Counts total price of all laptops
    totalPrice = watchPrice + phonePrice + laptopPrice; // Combines all the price and gives total budget

    if (watch > 0 && phone > 0 && laptop > 0) {
        return totalPrice;
    }
    else if (watch < 0 || phone < 0 || laptop < 0) {
        return "Some values are invalid";
    }
    else if (watch == 0 && phone == 0 && laptop == 0) {
        return "DIM DISE, DIM?";
    }
    else{
        return "Something is wrong"
    }
}

var myBudget = budgetCalculator(10, 10, 2);
console.log(myBudget);


// Third Problem: Calculating Hotel Cost

function hotelCost(days){
    if (days <= 10 && days > 0) {
        var totalRent = days * 100; // Defines total rent for all the days
        return totalRent;
    }
    else if (days <= 20 && days > 0) {
        var rent10Days = 10 * 100; // Defines the rent for first 10 days
        var remainingDays = days - 10; // Counts remaining days after 10 days
        var rent20Days = remainingDays * 80; // Defines the rent after 10 days
        totalRent = rent10Days + rent20Days; // Defines total rent for all days
        return totalRent;
    }
    else if (days > 20) {
        var rent10Days = 10 * 100; // Defines the rent for first 10 days
        var rent20Days = 10 * 80; // Defines the rent for second 10 days
        var lastDays = days - 20; // Counts remaining days after 20 days
        var rentLastDays = lastDays * 50; // Defines total rent after 20 days
        totalRent = rent10Days + rent20Days + rentLastDays; // Defines total rent for all days
        return totalRent;
    }
    else if (days == 0) {
        return "DIM DISE, DIM?";
    }
    else{
        return "Something is wrong"
    }
}

var fullHotelCost = hotelCost(20);
console.log(fullHotelCost);

// Fourth Problem: Finding the largets Name

function megaFriend(friendsName){
    var nameLength = 0;
  
    for (var i = 0; i < friendsName.length; i++) {
      if (friendsName[i].length > nameLength) {
        var nameLength = friendsName[i].length;
        var longestName = friendsName[i];
      }
    }
    return longestName;
}

var bigFatFriend = megaFriend(['HTML Khan CSS', 'Javascript Khatun (Java)', 'MongoDB Hossain SQL', 'Abdul PHP']);
console.log(bigFatFriend);