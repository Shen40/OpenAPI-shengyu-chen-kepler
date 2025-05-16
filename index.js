fetch('https://api.open-meteo.com/v1/forecast?latitude=40.4862&longitude=-74.4518&hourly=temperature_2m,precipitation_probability&temperature_unit=fahrenheit')
    .then(response => {
        return response.text(); 
  })
    .then(text => {
    console.log(text)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  