var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var akanMaleNames =['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame',];
var akanFemaleNames=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama',];

function getName (){
    var day = parseInt(document.getElementById('day').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);
    var male = document.getElementById('male').value);
    var female = document.getElementById('female').value);

    if (day<=0||day>31)
    alert('Please enter a valid day');
    else 
    if (month<0||month>12 ||month ==2 && day>29)
    alert('Please enter a valid month');

    var day = new Date(year + '/' + month + '/' + day);
    var birthDay = day.getDay();
    if (male.checked==true){
    alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + akanMaleNames[birthDay])
    }

    else 
    if (female.checked==true){
        alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + akanFemaleNames[birthDay])
     }
     }
     var formValues = {};
     function inputObj(formNR, defaultValues) { 
     var inputs = formNR.getElementsByTagName('input');
     for ( var i = 0; i < inputs.length; i++) {
     if(inputs[i].type === 'text' || inputs[i].type === 'password') {
     formValues[inputs[i].name] = defaultValues[i]; 
     }
     inputs[i].value = defaultValues[i]; 
     inputs[i].addEventListener('keyup', function() { 
      formValues[this.name] = this.value;
    }, false);
  }
}
   var defValues =['defaultdateOfBirth','defaulmonthBirth','defaultyearOfBirth',];
   inputObj(document.forms[0], defValues); 
   console.log(formValues.firstname); 


