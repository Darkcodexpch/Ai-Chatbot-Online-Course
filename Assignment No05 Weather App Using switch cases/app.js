// main function
let Check = () => {

    // getting user input
    let city = document.getElementById("cityname").value;
    let result = document.querySelector('.result');

    // Calling Api 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1b29476f7564ed9c54a1082995f8552d&units=metric`)
        .then(function (response) {
            // handle success
            let weatherData = response.data
            console.log(weatherData);
            let temp = Number(weatherData?.main?.temp);
            let min_temp = Number(weatherData?.main?.temp_min);
            let max_temp = Number(weatherData?.main?.temp_max);
            let weatherCondition = weatherData?.weather[0].main;
            let name = weatherData?.name;
            // Your code goes here
            switch (true) {
                case (temp <= -10) || (max_temp <= -10):
                    result.innerHTML = `Dont Go out side its to cold`

                    break;

                case ((temp > 35) || (max_temp > 35)):
                    result.innerHTML = `Dont Go out side its too hot`

                    break;

                case ((temp >= -10 && temp <= 5) || (min_temp >= -10 && min_temp <= 5)):
                    result.innerHTML = `Carry coat and be carefull`

                    break;

                case ((temp > 5 && temp <= 20) || (min_temp > 5 && min_temp <= 20)):
                    result.innerHTML = `carry jacket with you`

                    break;

                case (temp > 20 && temp <= 35):
                    result.innerHTML = result.innerHTML = `Dont carry jacket`

                    break;

            }
            result.innerText += ` ${name} curent temprature is ${temp}'C and its going to be ${min_temp}'C at minimum and current weather condition is ${weatherCondition}`
            document.getElementById("myForm").reset();

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })



}

