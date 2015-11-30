// The following function gets food items from input and calls function to add to list
var addFoods = function(){
	var name = document.getElementById("inputFood").value;
	var date = document.getElementById("expireDate").value;
	if (daysLeft(date[i]) == NaN)
	{
		location.href = 'addFood.html';
		return false;
	}
	else{
		var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
		var expList = JSON.parse(localStorage.getItem('expStore')) || [];
		foodList.push(namefood);
		expList.push(date);
		localStorage.setItem('foodStore', JSON.stringify(foodList));
		localStorage.setItem('expStore', JSON.stringify(expList));
		location.href ='main.html';
		//spawnNotification("bodyTest","iconTest","titleTest");
		alert();
	}
	sortList();
}
function spawnNotification(theBody,theIcon,theTitle){
	var options = {body: theBody, icon: theIcon}
	var n = new Notification(theTitle,options);
}

// The following function adds the input food item to the list
function addDiv(i){
	var img = randomImage();
	//sortList();
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var date = JSON.parse(localStorage.getItem('expStore'));
	$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
	return;
}
function addDivWithDelete(i){
	alert("in addDivWithDelete");
	var img = "images/9.png";
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var date = JSON.parse(localStorage.getItem('expStore'));
	alert("before jquery");
	
	$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px; right: 30%">'+ daysLeft(date[i]) +'</div><div><a class="btn btn-primary btn-lg" onclick="test()" align="center" style="float: right; position: relative">Delete</a></div><img class="circle" src="'+ img +'" alt="icon"></div>'+ food[i] +'</div>')
	alert("after jquery");
	return;
}

// The following function adds all elements in localStorage to food list
function addAll(){
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var i = 0;
	// Iterate through 
	for (i ; i< food.length; i++){
		addDiv(i);
	}
	sortList();
}

// The following function calculates the days left until a food item expires
function daysLeft(expDate){
	//This function performs the calculation
	Date.daysBetween = function(date1, date2) {
		//Get 1 day in milliseconds
		var one_day=1000*60*60*24;
		
		// Convert both dates to milliseconds
		var date1_ms = date1.getTime();
		var date2_ms = date2.getTime();
		
		// Calculate the difference in milliseconds
		var difference_ms = date2_ms - date1_ms;
			
		// Convert back to days and return
		return Math.round(difference_ms/one_day); 
	}
	//Set the two dates
	var today = new Date();
	var expiry = new Date(expDate);

	return Date.daysBetween(today, expiry);	
}

// The following function clears all data in food list
function clearAll(){
	localStorage.clear();
	location.reload();
}

// The following function validates the input field
/*function checkDate(field) {
	var allowBlank = true;
	var minYear = 2014;
	var maxYear = (new Date()).getFullYear()+2;
	
	var errorMsg = "";
	
	// regular expression to match required date format
	re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
	
	if(field.value != '') {
		if(regs = field.value.match(re)) {
		if(regs[2] < 1 || regs[2] > 31) {
			errorMsg = "Invalid value for day: " + regs[2];
		} else if(regs[1] < 1 || regs[1] > 12) {
			errorMsg = "Invalid value for month: " + regs[1];
		} else if(regs[3] < minYear || regs[3] > maxYear) {
			errorMsg = "Invalid value for year: " + regs[3] + " - must be between " + minYear + " and " + maxYear;
		}
		} else {
		errorMsg = "Invalid date format: " + field.value;
		}
	} else if(!allowBlank) {
		errorMsg = "Empty date not allowed!";
	}
	
	if(errorMsg != "") {
		alert(errorMsg);
		field.focus();
		return false;
	}
	return true;
}*/

function edit(){
		$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
}
function deleteFood(){
	
}
function test(){
	alert("button has been pressed");
}
function oneWeek(){
	var name = document.getElementById("inputFood").value;
	var today = new Date();
	var future = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
	var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
	var expList = JSON.parse(localStorage.getItem('expStore')) || [];
	var list = [];
	foodList.push(name);
	expList.push(future);

	for (var j=0; j<foodList.length; j++)
		list.push({'namedfood': foodList[j], 'exp': expList[j]});

	list.sort(function(a, b) {
		return ((a.exp < b.exp) ? -1 : ((a.exp == b.exp) ? 0 : 1));
	});

	for (var k=0; k<list.length; k++) {
		foodList[k] = list[k].namedfood;
		expList[k] = list[k].exp;
	}	

	localStorage.setItem('foodStore', JSON.stringify(foodList));
	localStorage.setItem('expStore', JSON.stringify(expList));
	//location.href = 'index.html';
	window.location.replace('index.html');
	//$.mobile.changePage('index.html');
	//spawnNotification("bodyTest","iconTest","titleTest");
	alert("Added " + name);
	//window.location.href = 'index.html';
}
function twoWeeks(){
	var name = document.getElementById("inputFood").value;
	var today = new Date();
	var future = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
	var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
	var expList = JSON.parse(localStorage.getItem('expStore')) || [];
	var list = [];
	foodList.push(name);
	expList.push(future);

	for (var j=0; j<foodList.length; j++)
		list.push({'namedfood': foodList[j], 'exp': expList[j]});

	list.sort(function(a, b) {
		return ((a.exp < b.exp) ? -1 : ((a.exp == b.exp) ? 0 : 1));
	});

	for (var k=0; k<list.length; k++) {
		foodList[k] = list[k].namedfood;
		expList[k] = list[k].exp;
	}	

	localStorage.setItem('foodStore', JSON.stringify(foodList));
	localStorage.setItem('expStore', JSON.stringify(expList));
	//location.href = 'index.html';
	//$.mobile.changePage('index.html');
	window.location.replace('index.html');
	alert("Added " + name);
	//window.location.href ='index.html';
	//spawnNotification("bodyTest","iconTest","titleTest");
}
function oneMonth(){
	var name = document.getElementById("inputFood").value;
	var today = new Date();
	var future = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
	var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
	var expList = JSON.parse(localStorage.getItem('expStore')) || [];
	var list = [];
	foodList.push(name);
	expList.push(future);

	for (var j=0; j<foodList.length; j++)
		list.push({'namedfood': foodList[j], 'exp': expList[j]});

	list.sort(function(a, b) {
		return ((a.exp < b.exp) ? -1 : ((a.exp == b.exp) ? 0 : 1));
	});

	for (var k=0; k<list.length; k++) {
		foodList[k] = list[k].namedfood;
		expList[k] = list[k].exp;
	}	

	localStorage.setItem('foodStore', JSON.stringify(foodList));
	localStorage.setItem('expStore', JSON.stringify(expList));
	//window.location='index.html';
	//location.href = 'index.html';
	$.mobile.changePage('index.html');
	window.location.assign('index.html');
	alert("Added " + name);
	//window.location.href ='index.html';
	//spawnNotification("bodyTest","iconTest","titleTest");
}
function sortList(){
	var B = JSON.parse(localStorage.getItem('foodStore')) || [];
	var A = JSON.parse(localStorage.getItem('expStore')) || [];
	var all = [];

	for (var i = 0; i < B.length; i++) {
	    all.push({ 'A': A[i], 'B': B[i] });
	}

	all.sort(function(a, b) {
	  return a.A - b.A;
	});

	A = [];
	B = [];

	for (var i = 0; i < all.length; i++) {
	   A.push(all[i].A);
	   B.push(all[i].B);
	}    
}
function bSort(){
	var foods = JSON.parse(localStorage.getItem('foodStore')) || [];
	var dates = JSON.parse(localStorage.getItem('expStore')) || [];
	var both = [];
	
	for (var i = 0; i<foods.length;i++){
		if(foods.length==0){
			foods.push
		}
		if (dates[i]<=dates[i-1]){
			
		}
		both.push({'Name':foods[i], 'Date':dates[i]});
	}
	
}
function randomImage(){
 return "images/"+ Math.floor((Math.random() * 83) + 2) +".png";
}
function submitButton(){
	var name = document.getElementById("inputFood").value;
	var dateEntered = document.getElementById("expireDate").value;
	//var today = new Date();
	//var future = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
	var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
	var expList = JSON.parse(localStorage.getItem('expStore')) || [];
	var list = [];
	foodList.push(name);
	expList.push(dateEntered);

	for (var j=0; j<foodList.length; j++)
		list.push({'namedfood': foodList[j], 'exp': expList[j]});
	list.sort(function(a, b) {
		return ((a.exp < b.exp) ? -1 : ((a.exp == b.exp) ? 0 : 1));
	});
	for (var k=0; k<list.length; k++) {
		foodList[k] = list[k].namedfood;
		expList[k] = list[k].exp;
	}	
	localStorage.setItem('foodStore', JSON.stringify(foodList));
	localStorage.setItem('expStore', JSON.stringify(expList));
	//window.location='index.html';
	//location.href = 'index.html';
	//$.mobile.changePage('index.html');
	window.location.assign('index.html');
	alert("");
}
