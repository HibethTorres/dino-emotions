/*
async function fetchWeatherData (latitude, longitude){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json(); //parseamos a objeto de js
    console.log(data);
    console.log(data.elevation);
    console.log(data.current_weather);
    console.log(data.current_weather.temperature);
    return data.current_weather;
} 
*/

async function handleFetchClick() {
    const btn = document.getElementById("fetch-btn");
    const loading = document.getElementById("loading-message");
    const img = document.getElementById("emotionImage");
    btn.disabled = true;
    loading.style.display = "block";


let getEmotion = document.getElementById("emotion");
let value = getEmotion.value;
let text = getEmotion.options[getEmotion.selectedIndex].text;


    try {
        if (getEmotion.value === "happy") {
            img.src = "happy.jpg";  
        } else {
            img.src = "sad.png";   
        }

    } catch (error) {
        console.error("Error:", error);
    } finally {
        btn.disabled = false;
        loading.style.display = "none";
    }
}

