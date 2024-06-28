const today = new Date();
const yearElement = document.querySelector("#year");

// Update the content of the element
yearElement.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;
const lastModified = new Date(document.lastModified);

// Format the last modified date as desired (e.g., using toLocaleDateString)
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModified.toLocaleDateString('en-US', options);

// Update the content of the element with id="lastModified"
document.getElementById('lastmod').textContent = formattedDate;

let temperature= 88;
let wind=11;
let condition="Mostly sunny";
let windChill=0;

document.querySelector("#temperature").innerHTML = ` <b>Temperature:</b> ${temperature}º F`;
document.querySelector("#conditions").innerHTML = `<b> Conditions:</b> ${condition}`;
document.querySelector("#wind").innerHTML=`<b> Wind:</b> ${wind}mph`;

function calculateWindChill(temperature, windSeep){
    if (temperature> 50 || windSeep<=30){
        return "Wind chill calculation is not <br> valid for the given conditions.";
    }
    const windChill=35.74+(0.6215*temperature)-(35.75* Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
    return windChill.toFixed(2);
}

document.querySelector("#windchill").innerHTML= ` <b>Wind Chill:</b>  ${calculateWindChill(temperature,wind)}`;
