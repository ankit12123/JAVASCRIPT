document.getElementById("cel").addEventListener("keyup",tempcel);
document.getElementById("Fa").addEventListener("keyup",tempFah);
document.getElementById("kel").addEventListener("keyup",tempkel);

function tempcel(){
    let tempc=Number(document.getElementById("cel").value);
    let Fahrenheit = (tempc * 9/5)+ 32;
    let kelvin= (tempc+273.15);
    console.log(Fahrenheit);
    console.log(document.getElementById("Fa").value=(Fahrenheit));
    console.log(document.getElementById("kel").value=(kelvin));
}

function tempFah(){
                let tempF=Number(document.getElementById('Fa').value); 
                let celcius=(tempF-32) * 5/9; 
                let kelvin=(tempF-32)*5/9+273.15;
                console.log(celcius);   
             console.log(document.getElementById("cel").value=(celcius)); 
               console.log(document.getElementById("kel").value=(kelvin));
        }

function tempkel(){
    let kelvin=Number(document.getElementById('kel').value); 
    let  celcius=(kelvin-273.15);
    let Fahrenheit=(kelvin-273.15)*9/5 +32;
console.log(document.getElementById("cel").value=(celcius)); 
console.log(document.getElementById("Fa").value=(Fahrenheit));

}

     
    


        
        
     
