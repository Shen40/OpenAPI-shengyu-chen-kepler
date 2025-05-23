fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1&temperature_unit=fahrenheit')
    .then(response => {
        return response.json(); 
  })
    .then(data => {
    console.log(data);

    if (!data.hourly || !data.hourly.temperature_2m || !data.hourly.time) {
      throw new Error("Missing temperature data");
    }

    const temp = data.hourly.temperature_2m;
    const times = data.hourly.time;

    const tempSection = document.querySelector("#temperature");
    const tempList = tempSection.querySelector("ul");

    for(let i=0;i<temp.length;i++){ 
    let display = document.createElement("li"); 
    display.innerText = `Time: ${times[i]}, Temp: ${temp[i]}°F`; 
    tempList.appendChild(display);
    }

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  