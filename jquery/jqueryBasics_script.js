/*Jquery is like a bootstrap. It's just bootstrap is for css while jquery is for javascript. 
With jquery, we don't have to bother writing a very long code. However,--
-- we can simplify things by using the dollar ($) sign for this. 
Before using jquery, make sure to have a script in the head tag that connect to jquery's CDN or--
-- you can just download the jquery and then connect in locally*/

//Now remember, jquery uses a lot of dollar signs so prepare yourself. 
//But anyway, to check that if we successfully connected to jquery, just open console in the browser and type a dollar sign.
//After you press enter, there should be some function popping out in the console. 

//Jquery simplify things very much. It's like working with querySelectorAll. 
//So for example, if we want to grab all of the li tag, we can just say

var allListItem = $("li");

//And when we print this:
console.log(allListItem);
//We will see all of the list item available. 

//This is just separator of ouputs. 
console.log("==========================================================");

//Lets say we want to modify the h1 tag. First, we need to grab the h1 tag by: 
var header1 = $("h1");

//After that, with jquery, when we want to modify the css properties, all we need to do is: 
header1.css("color", "red");

//The first parameter is the property name that we want to set.
//The second property is the new value from the first property that we want to set. 





//============================================================================================================================





//Oftenly, we want to affect multiple properties at once. Rather than just pass in one property at a time,--
//-- what we can do is passing an object. 
//This object will have elements. These elements is the key value pair of properties that we want to set. 

var newCss = {
    "color":"white",
    "background-color": "black",
    "border": "10px solid lightblue"
}

//And then we can pass it like the previous example.
header1.css(newCss);

//Now lets get back to the topic where we grab multiple elements. 
//If we do this: 

allListItem = $("li");
allListItem.css("color", "blue");

//Then this will affect all of the li tag existed.

//Now remember, allListItem behaved like an array (although technically it is not an array).
//Meaning we can grab the elements by index. To do that, we need the eq method. 

//Lets say we want to grab the first list item (which located at inde 0)

allListItem.eq(0).css("color", "red");
//Now the very first list item is changed to red color.

//This also applies with negative indexing. Meaning if we want to grab the last item,--
//-- we can just pass -1 as an index position. 

allListItem.eq(-1).css("color", "red");









//============================================================================================================================










//Now previously at vanilla javascript, we have to use textContent or innerHTML to change the value of a text. 
//With jquery, it's a little bit easier.

//Let's say we want to modify the text in h2 tag. All we need to do is: 

$("h4").text("This is a new text");

//If we wan to just grab the text, we can use the same method as above. It's just we need make sure--
//-- that the parameter inside 'text' is empty. 

var newText = $("h4").text();

console.log(newText)

//This is just separator of ouputs. 
console.log("==========================================================");

//Now remember, it is the same as the textContent and innerHTML context. 
//The textContent is for the pure text, while innerHTML is for the pure tag. 
//To give a similar result as the innerHTML in jquery, we will use: 

$("h4").html("<strong><em>This is a new text modified using method similar to innerHTML</em></strong>");










//============================================================================================================================












//Lets say we want to affect an attribute of an element.
//For this case, we will affect the attribute of submit button. 
//Lets change it to have type from submit to checkbox. We should see a checkbox right beside the textbox in the end of html. 

$("input").eq(1).attr("type", "checkbox");
//We know that there are only 2 input tag. The text input and the submit input. 
//Because the input text is occured first, we know that the submit button is the second input tag which located in the index 1.


//Now notice that inside of the textbox, there are values in it (a string). 
//Lets say we want to affect that attribute. What we can do is: 

$("input").eq(0).attr("value", "I have been modified!");
//There is another way that equal to the method above which is:
//$("input").eq(0).val("I have been modified!");

//The same as when we edit the css with jquery,--
//-- we can affect multiple attributes using an object. 

var newAtt = {
    "value" : "",
    "placeholder" : "Replacing value with placeholder"
}

$("input").eq(0).attr(newAtt);








//============================================================================================================================










//Remember at the html page we have 2 classes? It is the turnRed and turnBlue class. 
//Let's say for some reason we want to add or remove class from an element. 
//To demonstrate this, take a look at the last 2 paragraph tag that has id in them. 

//Lets say we want to remove the class from the second last paragraph. What we can do is: 
$("p").eq(-2).removeClass("turnRed");

//Next, lets say that we want to add a class to the last paragraph. What we can do is: 
$("p").eq(-1).addClass("turnBlue");

//Now this is the interesting part. 
//We can use toggleClass to invert the class state. So if an element has a class, then with toggleClass, we will remove the class.-
//-- However, if a class doesn't has that particular class, then with toggleClass, we will add the class into that element. 

//Notice that h6 doesn't have a class by default. Now, it wield the class turnRed.
$("h6").toggleClass("turnRed");
//Copy the code above and then run it in your browser's console. 
//You should see the inverse of the current result. 