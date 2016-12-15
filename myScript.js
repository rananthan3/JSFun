function myFunction(){
	document.getElementById("demo").innerHTML = document.getElementById("input1").value;
}

var jsonTest = '{"girls":['+
'{"firstname":"Latanya","lastname":"Smith","phone":"(939)828-2828"},'+
'{"firstname":"Jacqueline","lastname":"Turner","phone":"(222)000-1111"},'+
'{"firstname":"Janell","lastname":"Maalku","phone":"(222)920-1931"},'+
'{"firstname":"Kraaya","lastname":"Yuzfza","phone":"(209)000-1111"},'+
'{"firstname":"Nikki","lastname":"Zdkheckov","phone":"(222)231-1111"}'+
']}';

obj = JSON.parse(jsonTest);
//document.write(obj.girls[0].firstname);
//document.getElementById("girls").innerHTML = obj.girls[0].firstname + obj.girls[0].lastname + obj.girls[0].phone;

function myFunction2(){
	var selector = parseInt(document.getElementById("input2").value);
	document.getElementById("girls").innerHTML = obj.girls[selector].firstname + ' ' + obj.girls[selector].lastname + ' ' + obj.girls[selector].phone;
}
