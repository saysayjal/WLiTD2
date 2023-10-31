//generation of random number
console.log("testing");

var n= 4;

const y= Math.floor((Math.random()*10)+1);


function validateForm()
{
    n = n - 1;
    if (n == 1) {
      alert("Final Try Left!");
    }


    //accessing form by its name
    var form=document.forms["sample"];

    //accessing the input from the html
    var numValue=form.elements["num"].value;

    //parsing numValue as an integer
    const x=parseInt(numValue);


    let guess=1;


    if (x == y) {
        alert("Yay! You guessed the coreect number!!");
    } else if (x > y) {
        guess++;
        alert("Guess a lesser number");
    } else {
        guess++;
        alert("Guess a bigger number");
    }

    if (n == 0) {
        location.reload();
    }

}