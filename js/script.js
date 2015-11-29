// The following function gets food items from input and calls function to add to list
var addFoods = function(){
	var name = document.getElementById("inputFood").value;
	var date = document.getElementById("expireDate").value;
	if (!checkDate(document.getElementById("expireDate")))
	{
		location.href = 'addFood.html';
		return false;
	}
	else{
		var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
		var expList = JSON.parse(localStorage.getItem('expStore')) || [];
		foodList.push(name);
		expList.push(date);
		localStorage.setItem('foodStore', JSON.stringify(foodList));
		localStorage.setItem('expStore', JSON.stringify(expList));
		location.href ='main.html';
		//spawnNotification("bodyTest","iconTest","titleTest");
		alert();
	}
}
function spawnNotification(theBody,theIcon,theTitle){
	var options = {body: theBody, icon: theIcon}
	var n = new Notification(theTitle,options);
}
/*
var addFoods2 = function(){
	var name = document.getElementById("inputFood").value;
	var date = document.getElementById("expireDate").value;
	var foodList = JSON.parse(localStorage.getItem('foodStore')) || [];
	var expList = JSON.parse(localStorage.getItem('expStore')) || [];
	var both = [];
	var i=both.length;
	both.push({num:i,foodName:name,foodDate:date});
	localStorage.setItem('foodStore', JSON.stringify(foodList));
	localStorage.setItem('expStore', JSON.stringify(expList));
	localStorage.setItem('bothStore',JSON.stringify(both));
}
*/
// The following function adds the input food item to the list
function addDiv(i){
	var img = "images/9.png";
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
	
	$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px; right: 30%">'+ daysLeft(date[i]) +'</div><div><a class="btn btn-primary btn-lg" onclick="test()" align="right" style="float: right;position: relative; right: -5%">Delete</a></div><img class="circle" src="'+ img +'" alt="icon"></div>'+ food[i] +'</div>')
	alert("after jquery");
	return;
}
/*
function addDiv2(i){
	var img = "images/9.png";
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var date = JSON.parse(localStorage.getItem('expStore'));
	$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
	return;
}
*/
// The following function adds all elements in localStorage to food list
function addAll(){
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var i = 0;
	// Iterate through 
	for (i ; i< food.length; i++){
		addDiv(i);
	}
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
function checkDate(field) {
	var allowBlank = true;
	var minYear = 2014;
	var maxYear = (new Date()).getFullYear()+1;
	
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
}
function byDate(){
	
	
}
function edit(){
		$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
}
function deleteFood(){
	
}
function test(){
	alert("before other stuff");
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var i = 0;
	// Iterate through 
	for (i ; i< food.length; i++){
		addDivWithDelete(i);
	}
	alert("button has been pressed");
}
function oneWeek(){
	
}