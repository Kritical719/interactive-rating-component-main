function select(colorChange) {
    const existingElement = document.querySelector('.afterClick');
    if (existingElement && existingElement !== colorChange) {
        existingElement.classList.remove('afterClick');
    }
    colorChange.classList.toggle('afterClick');
}


function show(resultado){
    if(resultado === document.getElementsByClassName('afterClick')){
       document.getElementById('result').innerHTML = "5 out of 5";
    }else{

   
    document.getElementById('result').innerHTML = "5 out of 5";
}

}

/* HELP ME FIX IT PLEASE GOT STUCK PLEASE WILL POST IT AND HOPEFULLY ONE OF 
YOU MIGHT BE ABLE TO GIVE ME A HAND ON HOW TO FIX IT OR IMPROVE I NEVER GOT IT TO SHOW
THE RATING FROM ONE INDEX TO THE OTHER FEELSBADMAN*/