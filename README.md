# FoodApp
Expiree - An app that tracks food inventory and expiration
Brian Gill & Christina Matera

Our app should be accessed through the main.html file in the "FoodApp" folder.

Initial Proposal:
This app will allow users to create a list of the perishable foods that they 
have and will remind the user before an item expires.

In many houses, the refrigerator quickly becomes cluttered with food of questionable
status, especially as the number of people using it grows.  Keeping track of the owner 
and expiration date of food can be difficult, especially for college students, 
and is a problem that our app aims to mitigate.  Our app will help save users 
money replacing expired perishable goods, and will simplify the experience of 
cooking at home.	

A user simply enters in the items that they have and the app 
lists the food in order of when it will expire, as well as giving notifications 
before food goes bad.  The exact layout of the app is still to be determined, 
but it will include a barcode scanner using the Scandit API and UPC Databases.  
If an item didn’t have a barcode, the user can manually add the item.  In 
addition to the list of food, there is a community aspect that allows multiple 
people to have individual lists of food on multiple devices as a single fridge. 
 For getting the actual expiration, we will reference a free database of 
expiration dates of foods whose barcodes are scanned, as well as letting users 
manually enter dates. An additional functionality to consider would be 
suggesting recipes based on the ingredients recorded in the app.

This app would be able to be completed within the span of the quarter because it is 
comprised of a few simple parts: a list, camera, notifications and sharing.  Each one of 
these parts individually is not overly difficult to complete but would come 
together into a cohesive product.

There are several other apps in the Google Play store that offer similar functionality,
but the majority of them are old and have an outdated UI that makes them difficult to use.
Two Android apps, called “Food expiration – Saver” and “Food Expiration Track,” aim to track 
grocery expiration, but the interfaces are tedious and non-intuitive. There is 
an app for iOS called “Fresh Pantry” that aims to do similar things, but with 
less functionality than our app. In addition, our app will offer a level of 
sharing that the other apps just don’t have.



In order to create the app, we will implement the following itemized pieces:
	1. List of food - Inventory
		i. Status: Implemented
		ii. Time required: 6 hours
		iii. Notes: We used the Material Design theme for Bootstrap 3 in order to use
					the iconic Google Material Design look throughout our app. We used the
					provided "wells" to store each food element in the list.
					We still need to add support for individual icons representing each food - 
					we have a folder with icons, but no support for automatic icon selection yet.
					We also plan to display the list sorted by fewest "days left".
					We also plan to fix the top nav bar (quick fix).
	2. Input field for adding food
		i. Status: Implemented
		ii. Time required: 3 hours
		iii. Notes: We are able to record input food elements to the device's localStorage. These
					items are presented in the main.html page in the form of a list. 
					The food elements record the item name and the item's expiration.
					The "days left" until expiration field is automatically calculated.
					We still need to add date validation to enforce MM/DD/YYYY format, or find a workaround.
					We can clear all elements from the device's localStorage to clear the inventory.
					We plan to add support for editing/removing elements from the inventory using the
					floating green edit button, which scrolls with the window.
	3. Menu bar (slides out from side)
		i. Status: Pending
		ii. Time requirement expectation: 2 hours
		iii. Notes: We plan to add a menu which slides out from the left side to offer
					users easy navigation within the app. Menu items will be added as 
					we implement new features. We have experimented with open-source
					solutions, such as the Blueprint slide and push menus*, but have not yet
					successfully implemented this feature.
					*(http://tympanus.net/Blueprints/SlidePushMenus/)
	4. Barcode scanner
		i. Status: Pending
		ii. Time requirement expectation: 6 hours
		iii. Notes: We have not yet implemented this feature.
					We plan to allow users to scan barcodes and determine the item's details
					(i.e. name and expiration date) automatically using the item's UPC.
	5. Recipe suggestion
		i. Status: Pending
		ii. Time requirement expectation: 2 hours
		iii. Notes: We have not yet implemented this feature. 
					We plan to allow users to select items from their inventory and quickly search
					for recipes including those ingredients. 
	6. Sharing ingredient lists with friends
		i. Status: Possible implementation later
		ii. Time requirement expectation: 8 hours
		iii. Notes: We are considering implementing this feature after we implement everything else.
					This feature would allow users to share their lists among housemates or friends
					for keeping track of shared spaces and recipe collaboration.
					
We have referenced the following open-source components:
	1. Material Design for Bootstrap 3
		i. Source: https://github.com/FezVrasta/bootstrap-material-design
		ii. Notes: We used the Material Design theme for Bootstrap 3 to emulate the
					official Google Material Design theme used in Google applications.					
	2. Icons
		i. Source: http://www.smashingmagazine.com/2013/06/foodie-icons/
		ii. Notes: We use these icons to represent food items in the inventory.
	3. jQuery
		i. Source: https://jquery.com/
		ii. Notes: We use jQuery throughout the app.