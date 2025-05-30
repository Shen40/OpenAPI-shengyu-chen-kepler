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

    const date = document.querySelector("#date");
    let today = document.createElement("h1");
    today.innerText = `Today's Date: ${times[0].substring(0,10)}`; 
    date.appendChild(today);//today's date


    for(let i=0;i<temp.length;i++){ 
    let display = document.createElement("li"); 
    display.innerText = `Time: ${times[i].substring(11,times[i].length)}, Temp: ${temp[i]}°F`; 
    tempList.appendChild(display);
    }

  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=precipitation_probability&forecast_days=1")
    .then(response => {
        return response.json(); 
  })
    .then(data => {
    console.log(data);
    if (!data.hourly || !data.hourly.precipitation_probability || !data.hourly.time) {
      throw new Error("Missing precipitation data");
    }
    const pre = data.hourly.precipitation_probability;
    const times = data.hourly.time;

    const precipSection = document.querySelector("#precipitation");
    const precipList = precipSection.querySelector("ul");
    
    for(let i =0; i<pre.length;i++){
      let display = document.createElement("li"); 
      display.innerText = `Time: ${times[i].substring(11,times[i].length)}, Probability: ${pre[i]}%`; 
      precipList.appendChild(display);
    }
    })
   .catch(error => {
    console.error('Error fetching data:', error);
  });