function calculation(){
         let x=prompt("Enter First Number");
        let num1=Number(x);
        console.log(num1);

        let y=prompt("Enter Second Number");
        let num2=Number(y)
        console.log(num2);
        
        
        let z=prompt("Enter Symbol");
        if(z=='+'){
            sum=num1+num2;
            console.log(sum);
            alert(sum);
      }
         else if(z=='-'){
            sub=num1-num2;
            console.log(sub);
            alert(sub);
      }
         else if(z=='*'){
            multi=num1*num2;
            console.log(multi);
            alert(multi);
      }
         else if(z=='/'){
            division=num1/num2;
            console.log(division);
            alert(division);
      }
      else{
        let error='Not Valid';
        console.log(error);
        document.write(error);
        alert(error);
      }
}
function Getstarted(){
   alert("Let's start The Css");
}









