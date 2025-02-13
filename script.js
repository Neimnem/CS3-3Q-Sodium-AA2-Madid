function callFunction() {
    let initialPop = parseFloat(prompt("Enter value for initial population: "));
    let rateGrowth = parseFloat(prompt("Enter value for its rate of growth: "));
    let time = parseFloat(prompt("Enter value for the time in hours: "));

    let finalPop = initialPop * Math.pow(Math.E, rateGrowth * time);
    finalPop = Math.round(finalPop);        

    let regionMons = prompt("Enter the region/location of the monster:");
    let nameMons = prompt("Enter the name of the monster:");

    let monsInfo = regionMons.concat(" ", nameMons).toUpperCase();

    let words = "After " + time + " hours, the population of " + monsInfo + " has increased to " + finalPop + "!";
    document.getElementById("result").innerText = words;
}