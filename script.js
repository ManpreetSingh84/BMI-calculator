let form = document.querySelector("form");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let result = document.querySelector("#name");
    if(weight == "" || weight < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid weight";
    } else if (height == "" || height < 0 || isNaN(height)){
        result.innerHTML = "Please give a valid height";
    } else{
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `${BMI}`;
    }
});


// color change 
// function colorChangeFunction(){
//     let body = document.querySelector('#main');  
//     setInterval(()=>{
//         let randomColor = Math.floor(Math.random()* 250);
//         // body.style.backgroundColor= "red";
//         body.style.backgroundColor = `rgb(${randomColor},${randomColor},${randomColor})`
//         // body.style.color = `rgb(${randomColor},${randomColor},${randomColor})`

//     },1000)
// }
// colorChangeFunction()
