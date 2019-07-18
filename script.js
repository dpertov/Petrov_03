
var age = +prompt('Привет! Сколько тебе лет?');
if((typeof(age) !="number") ||  (age!=age) ){
	alert("Введите  возраст числом!");
}
else {
	var rezult_age=(age%10);
	if(age<=0 || age >=150) {
	alert('У тебя очень интересный возраст: ' + age + ' Такое бывает?');
	}
	else if( (age===1) ||  ((age!=11) && (age!=111) && rezult_age===1)){
		alert ('Тебе: '+age + ' год')
	}
	else if(age!=12 && age!=13 && age!=14 && age!=112 && age!=113 && age!=114 &&rezult_age>=2 && rezult_age<=4){
		alert ('Тебе: '+ age + ' года')
	}
	else alert ('Тебе: '+ age + ' лет');	
}

