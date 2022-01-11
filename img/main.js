// Kamil Konefke 11.01.2022
var score = 0;
var multiplier = 1;

function AddPoint()
{
    score += 1 * multiplier;
    console.log(score);
    document.getElementById("counter").innerHTML = score;
}