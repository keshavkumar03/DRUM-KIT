/*here additional anonymous function is used instead of direct function (make sound) 
Because audio playback only occurs when a specific key is pressed,
it's not possible to share 
the entire event handler between both the click and keydown events.*/

for(var k = 0;k<=1;k++)
{
    document.addEventListener('keyup',function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});
} /*the keydown(keypress is fired) listener is added to the document rather than the button to 
ensure key based playback is responsive to all key events 
that occur in the browser. */ 


var buttonKey = document.querySelectorAll(".drum").length;

for(i=0;i<=buttonKey;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
 
     var buttonWord = this.innerHTML;
     makeSound(buttonWord);
     buttonAnimation(buttonWord);
 });
}
  

function makeSound(key){
    
 switch(key)
 {
        case "w" :
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

         case "a" :
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;         

         case "s":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break; 

         case "d":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

         case "j":
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

         case "k" :
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;

         case "l" :
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        default:
            console.log("buttonWord");
            break;
}
}

function buttonAnimation(letter){

 document.querySelector("."+ letter).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+ letter).classList.remove("pressed");},100);


}

