var LISTFOOD = JSON.parse(localStorage.getItem('foodStore')) || [];
var LISTEXP = JSON.parse(localStorage.getItem('expStore')) || [];
var LISTDELETED = JSON.parse(localStorage.getItem('deletedStore')) || [];
function bubbleSort(a, b) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i] > a[i+1])
            {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                
                var temp = b[i];
                b[i] = b[i+1];
                b[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}  

function spawnNotification(theBody,theIcon,theTitle){
	var options = {body: theBody, icon: theIcon}
	var n = new Notification(theTitle,options);
}

// The following function adds the input food item to the list
function addDiv(i){
	var img = randomImage();
	bubbleSort(LISTEXP, LISTFOOD);
	var food = JSON.parse(localStorage.getItem('foodStore'));
	var date = JSON.parse(localStorage.getItem('expStore'));
	if(daysLeft(date[i])<=2)
	{
			$("#initialDiv").append('<div class="wellRed"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><div class="deleteDiv" align="center" style="float: center; position: relative;"><a class="btn btn-primary btn-lg" onclick="deleteFood('+i+')">Remove</a></div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
	}
	else if(daysLeft(date[i])<=5 && daysLeft(date[i])>2){
			$("#initialDiv").append('<div class="wellYellow"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><div class="deleteDiv" align="center" style="float: center; position: relative;"><a class="btn btn-primary btn-lg" onclick="deleteFood('+i+')">Remove</a></div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
	}
	else
	{
			$("#initialDiv").append('<div class="well"><div class="row-picture"><div class="least-content" align="right" style="float: right; position: relative; top: +12px;">'+ daysLeft(date[i]) +' </div><div class="deleteDiv" align="center" style="float: center; position: relative;"><a class="btn btn-primary btn-lg" onclick="deleteFood('+i+')">Remove</a></div><img class="circle" src="'+ img +'" alt="icon"></div>' + food[i] +'</div>')
	}
	$(".deleteDiv").hide();
	return;
	
}
// The following function adds all elements in localStorage to food list
function addAll(){
	var food = JSON.parse(localStorage.getItem('foodStore'));
	//sort the list
	bubbleSort(LISTEXP, LISTFOOD);
	var i = 0;
	// Iterate through 
	for (i ; i< food.length; i++){
		addDiv(i);
	}
}
// The following function calculates the days left until a food item expires
function daysLeft(expDate){
	var date1 = new Date();
	var date2 = new Date(expDate);
	var timeDiff = date2.getTime() - date1.getTime();
	var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
	return diffDays;
}
// The following function clears all data in food list
function clearAll(){
	localStorage.clear();
	location.reload();
}
function edit(){
	$(".deleteDiv").show();
}
function shoppingList(foodName){
	LISTDELETED.push(foodName);
	localStorage.setItem('deletedStore', JSON.stringify(LISTDELETED));	
}
function shoppingAddAll(){
	alert("in shoppingAddAll");
	var shoppingList = JSON.parse(localStorage.getItem('deletedStore'));
	var i = 0;
	// Iterate through 
	for (i ; i< shoppingList.length; i++){
		addShoppingDiv(i);
	}
}
function addShoppingDiv(i){
	alert("in addShopping Div");
	var shoppingList = JSON.parse(localStorage.getItem('deletedStore'));
	alert(shoppingList[i]);
	//$("#listOfFood").append("I put stuff here!!")
	$("#listOfFood").append('<div class="well"><div class="row"><div class="deleteShoppingDiv" align="center" style="float: center; position: relative;"><a class="btn btn-primary btn-lg" onclick="deleteShopping()">Remove</a></div>'+ shoppingList[i]+'</div>')
	$(".deleteShoppingDiv").hide();
	return;
	
}
function deleteFood(i){
	var foodName = LISTFOOD[i];
	LISTFOOD.splice(i, 1);
	LISTEXP.splice(i, 1);
	localStorage.removeItem('foodStore');
	localStorage.removeItem('expStore');
	localStorage.setItem('foodStore', JSON.stringify(LISTFOOD));
	localStorage.setItem('expStore', JSON.stringify(LISTEXP));
	
	if (confirm("Would you like to add this item to your shopping list?") == true) {
        shoppingList(foodName);
    } else {
    }
	//window.confirm("Would you like to add this item to your shopping list?");
	//navigator.notification.alert('Would you like to add this item to the shopping list?', shoppingList, 'Shopping List', 'Yes')
	location.reload();
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
	window.location.assign('index.html');
	alert("Added " + name);
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
	//$.mobile.changePage('index.html');
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

function randomImage(){
 return "images/"+ Math.floor((Math.random() * 83) + 2) +".png";
}
function submitButton(){
	var name = document.getElementById("inputFood").value;
	var dateEntered = document.getElementById("expireDate").value;
	//alert(dateEntered);
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

	window.location.assign('index.html');
	alert("");
	//window.location='index.html';
	//location.href = 'index.html';
	//$.mobile.changePage('index.html');
}
