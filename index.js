function display(){const heightValue=document.querySelector('#height').value;
const weightValue=document.querySelector('#weight').value;
const height=parseFloat(heightValue);
const weight=parseFloat(weightValue);
const bmi=weight/(height*height);
 if (!height || !weight) {
        document.getElementById('output').textContent = "Please enter valid height and weight.";
        return;
    }
document.querySelector('#output').innerText=`The BMI of the person is${bmi.toFixed(2)}`;}

