var numofsq=9;
var divs=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var button=document.querySelector("#change");
var colors=generatecolor(numofsq);
var clrpicked=pickcolor();
var ans=document.querySelector("#correct");
var span=document.querySelector("#rgb");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var medium=document.querySelector("#medium");
h1.style.backgroundColor="steelblue";
var numofatt=0;
easy.addEventListener("click",function()
{   
	numofsq=3;
	ans.textContent="";
	this.classList.add("selected");
	hard.classList.remove("selected");
    medium.classList.remove("selected");
	colors=generatecolor(numofsq);
    clrpicked=pickcolor();
    for(var i=0;i<9;i++)
       {
	    if(colors[i])
	       {
		     divs[i].style.backgroundColor=colors[i];
	       }
	    else
	       {
	        divs[i].style.display="none";
	       }
       }
    span.textContent=clrpicked;
	
});
hard.addEventListener("click",function()
{   
	numofsq=9;
    ans.textContent="";
    h1.style.backgroundColor="steelblue";
	this.classList.add("selected");
	easy.classList.remove("selected");
	medium.classList.remove("selected");
	colors=generatecolor(numofsq);
	clrpicked=pickcolor();
	for(var i=0;i<9;i++)
	{  
		divs[i].style.display="block";
	 	divs[i].style.backgroundColor=colors[i];
	}
    span.textContent=clrpicked;
});
medium.addEventListener("click",function()
{   
	numofsq=6;
    ans.textContent="";
    h1.style.backgroundColor="steelblue";
	this.classList.add("selected");
	easy.classList.remove("selected");
	hard.classList.remove("selected");
	colors=generatecolor(numofsq);
	clrpicked=pickcolor();
	for(var i=0;i<6;i++)
	{  
		divs[i].style.display="block";
	 	divs[i].style.backgroundColor=colors[i];
	}
	for(var i=6;i<9;i++)
	{
	 	divs[i].style.display="none";
	}
	span.textContent=clrpicked;
});
span.textContent=clrpicked;
for(var i=0; i < divs.length; i++)
{
	divs[i].style.backgroundColor=colors[i];
    divs[i].addEventListener("click",function(){
    if(this.style.backgroundColor==clrpicked)
	{
		for(var i=0; i < divs.length; i++)
		{
			divs[i].style.backgroundColor=clrpicked;
		}
		numofatt+=1;
		if(numofatt<numofsq)
		{
	     ans.textContent="YOU HAVE TAKEN "+numofatt+" CHANCES TO GUESS THE COLOR";
	    }
	    else
	    {
	   	ans.textContent="YOU HAVE TAKEN MAXIMUM CHANCES TO GUESS THE COLOR";
	    }
	    numofatt=0;	
	    h1.style.backgroundColor=clrpicked;
	    button.textContent="PLAY AGAIN?";
	}
    else
	{
		this.style.backgroundColor="#232323";
        ans.textContent="TRY AGAIN";
        numofatt+=1;
    }
});
}
function pickcolor()
{
	var random=Math.floor(Math.random()*colors.length)
	return colors[random];
}
function generatecolor(num)
{
	var arr=[];
	for(var i=0; i < num; i++)
	{
     arr.push(randomcolor());
	}
	return arr;
}
function randomcolor()
{
	var r= Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +","+" "+ g +","+" "+ b +")";
}

button.addEventListener("click",function()
{
   colors=generatecolor(numofsq);
   clrpicked=pickcolor();
   span.textContent=clrpicked;
   for(var i=0; i < numofsq; i++)
      {
 	   divs[i].style.backgroundColor=colors[i];
 	  }
   h1.style.backgroundColor="steelblue";
   button.textContent="NEW COLORS";
   ans.textContent="";
});