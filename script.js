function BMI(weight ,height ){

    return weight / (height * height)
    console.log(BMI);


}

function status(BMI){

    if (BMI<=18.5){

        return("You're underweight")
    } else if (BMI >= 18.5 && BMI <25){


        return("Your weight is healthy")
    }else if  (BMI>25){

        return("You're overweight")

    }
    
 
}



function calculate(){
    let weight=document.getElementById("weight").value;
    let height=document.getElementById("height").value;
    let bmiresult = BMI(weight ,height );
    let desc = Status(bmiresult)
    document.getElementById("result").innerText=bmiresult ":" + desc;
}







