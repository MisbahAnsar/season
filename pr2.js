function checkSeason() {
    const season = parseInt(document.getElementById('seasonInput').value);
    const resultElement = document.getElementById('seasonResult');
    
    switch (season) {
        case 2:
        case 3:
        case 4:
        case 5:
            resultElement.innerText = "It's Summer season";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
            resultElement.innerText = "It's Monsoon season";
            break;
        case 10:
        case 11:
        case 12:
        case 1:
            resultElement.innerText = "It's Winter season";
            break;
        default:
            resultElement.innerText = "Enter a valid number between 1-12";
    }
}

