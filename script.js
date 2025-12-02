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

    try {
        if (Happy) {
            img.src = "happy.jpg";  
        } else {
            img.src = "sad.jpg";   
        }

    } catch (error) {
        console.error("Error:", error);
    } finally {
        btn.disabled = false;
        loading.style.display = "none";
    }
}

