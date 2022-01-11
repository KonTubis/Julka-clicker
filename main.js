// Kamil Konefke 11.01.2022
var score = 0;
var multiplier = 1;

function AddPoint()
{
    score += 1 * multiplier;
    console.log(score);
    document.getElementById("counter").innerHTML = score;
}

function BuyMultiplier(price, addMultiplier)
{
    if (score >= price)
    {
        multiplier += addMultiplier;
        score -= price;
        document.getElementById("counter").innerHTML = score;
        document.getElementById("multiplierCounter").innerHTML = multiplier;
    }
}

function LoadGame()
{
    score = +(localStorage.getItem("counter"));
    document.getElementById("counter").innerHTML = score;

    multiplier = +(localStorage.getItem("multiplier"));
    document.getElementById("multiplierCounter").innerHTML = multiplier;
}

function SaveGame()
{
    localStorage.setItem("counter", score);
    document.getElementById("counter").innerHTML = score;

    localStorage.setItem("multiplier", multiplier);
    document.getElementById("multiplierCounter").innerHTML = multiplier;
}

function Reset()
{
    score = +0;
    document.getElementById("counter").innerHTML = score;
    multiplier = +1;
    document.getElementById("multiplierCounter").innerHTML = multiplier;
    SaveGame();
}

// Open Window
window.onload = function() {
    LoadGame();
};

// Close Window
window.addEventListener("unload", function() {
    SaveGame();
});