//CheckWinner() Which incidentally will also handle the cash flow or robbery
//DoSpin()


function DoSpin()
{
	if(parseInt(document.getElementById("Money").value) === 0)
	{
		document.getElementById("Result").value = "You're Broke!!";
		return;
	}
	
	var randomNumber1 = Math.floor((Math.random() * 4) +1); //Random Integer between 1 and 4
	var randomNumber2 = Math.floor((Math.random() * 4) +1); 
	var randomNumber3 = Math.floor((Math.random() * 4) +1); 
	
	//1=bar.jpg, 2=donut.jpg, 3=cherry.jpg, 4=lemon.jpg
	
	////////////////////////////////First Slot///////////////////////////////
	if (parseInt(randomNumber1) === 1)
	{
		document.getElementById("slot1").src = "img/bar.jpg";
	}
	
	if (parseInt(randomNumber1) === 2)
	{
		document.getElementById("slot1").src = "img/donut.jpg";
	}
	
	if (parseInt(randomNumber1) === 3)
	{
		document.getElementById("slot1").src = "img/cherry.jpg";
	}
	
	if (parseInt(randomNumber1) === 4)
	{
		document.getElementById("slot1").src = "img/lemon.jpg";
	}
	////////////////////////////////Second Slot///////////////////////////////
	if (parseInt(randomNumber2) === 1)
	{
		document.getElementById("slot2").src = "img/bar.jpg";
	}
	
	if (parseInt(randomNumber2) === 2)
	{
		document.getElementById("slot2").src = "img/donut.jpg";
	}
	
	if (parseInt(randomNumber2) === 3)
	{
		document.getElementById("slot2").src = "img/cherry.jpg";
	}
	
	if (parseInt(randomNumber2) === 4)
	{
		document.getElementById("slot2").src = "img/lemon.jpg";
	}
	
	////////////////////////////////Third Slot///////////////////////////////
	if (parseInt(randomNumber3) === 1)
	{
		document.getElementById("slot3").src = "img/bar.jpg";
	}
	
	if (parseInt(randomNumber3) === 2)
	{
		document.getElementById("slot3").src = "img/donut.jpg";
	}
	
	if (parseInt(randomNumber3) === 3)
	{
		document.getElementById("slot3").src = "img/cherry.jpg";
	}
	
	if (parseInt(randomNumber3) === 4)
	{
		document.getElementById("slot3").src = "img/lemon.jpg";
	}
	
	CheckWinner(randomNumber1,randomNumber2,randomNumber3);
}

function CheckWinner(firstResult,secondResult,thirdResult) //These are ints (supposed to be)
{
	var currentCash=parseInt(document.getElementById("Money").value);
	
	if((firstResult === secondResult) && (firstResult === thirdResult) && (secondResult === thirdResult))
	{
		//You've won!
		var earnings = parseInt(document.getElementById("Bet").value) *13;
		document.getElementById("Money").value = earnings+currentCash;
		document.getElementById("Result").value = "You Won!!!!!!";

	}
	else
	{
		//You've lost!
		var amountGambled = parseInt(document.getElementById("Bet").value);
		document.getElementById("Money").value = currentCash-amountGambled;
		
		if(currentCash-amountGambled <0)
		{
			document.getElementById("Money").value=0;
		}
		
		document.getElementById("Result").value = "You Lost!!!!!!";
	}

}

