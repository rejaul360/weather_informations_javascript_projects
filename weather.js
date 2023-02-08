const srchBtn = document.getElementById('src-btn');
const cityNames = document.getElementById('input-btn').addEventListener('keypress', (event) => {
    if(event.key === 'Enter'){
        srchBtn.click(); 
    }
})




const srcBtn =document.getElementById("src-btn").addEventListener("click", ()=>{
    const inputBtn = document.getElementById("input-btn").value;
    // console.log(inputBtn)
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputBtn+'&appid=36ef9f8e7a0353c9a0750a36182ee461')
    .then(response => response.json())
    .then(data => { 
        const cityName = data.name;
        const tem = data.main.temp;
        const temp = tem -273.15;
        const discription = data.weather[0].description;




        document.getElementById('city').innerText = cityName;
        document.getElementById('tem').innerText = temp.toFixed(2);
        document.getElementById('des').innerText = discription;

        
    })
    .catch(response => alert('The city name is not match'))
})