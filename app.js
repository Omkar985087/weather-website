let city = document.getElementById("city");
 let type = document.getElementById("type");
 let temp = document.getElementById("temp");
 let image = document.getElementById("img");
 let input = document.getElementById("inp") ;
let API_key = "823b43a42517ce25d8060bdc3fafa62d";


console.log("chevk");
 const data = async function(search){
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    console.log(getData);
    let jsonData =await getData.json();
    console.log(jsonData);
    console.log(jsonData.name);

    city.innerHTML=jsonData.name;
    temp.innerHTML=Math.floor(jsonData.main.temp)+"&deg;C";
    type.innerHTML=jsonData.weather[0].main;

    
 }

 function myFun(){
    search=input.value;
    data(search)
 }