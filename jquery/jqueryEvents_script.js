//Lets cover one of the most basic event which is click. 
//To handle a click event in jquery, what we need to do is: 

//Lets say we want to add an event to h1 upon clicking it. 
$("h1").click(function(){
    console.log("H1 has been clicked!")
});

//This is just a separator for the output
console.log("=========================================================");

//What if we grabbed multiple item? 
//Well, then the click events will be applied to every selected element. 
//For example, lets grab the li tag. We know that there are multiple of them. So, when--
//-- we click any of the li tag, it will trigger the event. 

$("li").click(function(){
    console.log("Any of the li tag has been clicked!");
})





//=====================================================================================================================





//If we want to affect the method or the property of an element, we either use that elements name of the "this" keyword

$("h1").click(function(){
    $(this).text("I have been changed!");

    //Or what we can use is:
    //$("h1").text("I have been changed!");
})

//Lets try another event. Lets say that we want to change the content of an element that has id #sampleText1 when we double click it.

$("#sampleText1").dblclick(function(){
    $(this).html("<strong><em>I have been double clicked!</em></strong>");
});





//=====================================================================================================================





//Events in jquery/javascript is not limitted to mouse press only. 
//We can also have keypress (keyboard press) for as an event.

//Lets say we want to toggle class of h3 as we type something on the keyboard. What we can do is

//First, we need to grab the input(text) tag. 
//Since we only concern about the text input tag which is the first input tag, we are going to access it with eq(0).


//THIS IS SUPPOSED TO BE UNCOMMENTED.
// $("input").eq(0).keypress(function(){
//     $("h4").toggleClass("turnBlue");
// })

//There is a special keyword called event as we pass it through the function to handle the anonymuous function above. 
//This event is an object that has lots of information about an action. 
//Each symbols, characters, numbers, and keys in our keyboard has their own number code. We can utilize this as a trigger to an action. 
//Lets say that we want to change the class of h3 tag when we press enter after we typing in the input box. 
//The number code for the enter button is 13.

//But first, lets just see the event object itself. 

$("#btn_seeEventObject").click(function(ev){
    console.log(ev);
});

//Now, lets get back to the experiment above. If we want to utilze the number code to trigger an action, what we can do is:
//THIS IS SUPPOSED TO BE UNCOMMENTED
// $("input").eq(0).keypress(function(ev){
//     if(ev.which === 13){
//         $("h3").toggleClass("turnRed");
//         //So the toggleClass will only occur if I press enter when my cursor is inside the text input tag
//         console.log(ev);
//     }
// });

//Lets explore someting a little bit. In the event object, there are keys that called "key". 
//This represents the symbol that we just typed. 
//Lets say that we want to print out the letter that we just typed directly into a paragraph tag that has id #res_liveTyping

var str_keyPressedList = "";
$("input").eq(0).keypress(function(ev){
    str_keyPressedList += ev.key
    $("#res_liveTyping").text(str_keyPressedList);
    //Now, everytime we type something, it will be printed in the paragraph tag #res_liveTyping
});





//=====================================================================================================================





//We can also use the 'on' method that has function the same like the addEventListener method in vanilla javascript

$("h1").on("mouseenter", function(){
    $(this).toggleClass("turnBlue");
});





//=====================================================================================================================




//We can also perform animation with jquery!
//Lets say we want to make the container "fade" if we click the submit button. What we can do is: 
$("input").eq(1).on("click", function(){
    $(".container").fadeOut(3000);
});


