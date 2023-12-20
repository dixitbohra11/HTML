document.getElementById("menu");
var subme = document.getElementById("c1");

function sub()
{
    if(subme.style.display=="none")
    {
        subme.style.display="block";
      
    }
    else
    {
        subme.style.display="none";
        
    }
}


// slider
 var slide1 = document.getElementById("i1");

 function sliding()
 {
    if(slide1.src.match('img/slider-img-1.png'))
    {
        slide1.src = "img/slider-img-2.png";
    }
    else if(slide1.src.match('img/slider-img-2.png'))
    {
        slide1.src = "img/slider-img-3.png";
    }
    else
    {
        slide1.src = "img/slider-img-1.png";
    }
    setTimeout ("sliding()",1500)
 }
 sliding();