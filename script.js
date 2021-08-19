let quiz = [ 
{ 
	question:"what's the full form of HTML?",
	option:["Hyper Text Makeup Language", "Hypertext Markup Language", "Hyptext Markup Language", "None of the above" ],
	answer: 2,
},
{ 
	question:"Why is it Java and JavaScript have similar names?",
	option:["JavaScript is a stripped-down version of Java. ",
	 "JavaScript's syntax is loosely basedd on Java.",
	 "They both were originated by a person with surname Java.",
	 "None of above." ],
	answer: 2,
},
{	
	question:"HTML 1.0 ______ of HTML introduced in ______.",
	option:["edition, '95",
	 "languange, '99",
     "design, '95",
	 "version, '93" ],
	answer: 4,
},
{	
	question:"Inside which HTML elelment do we put the JavaScript?",
	option:["<scripting>", "<javascript>", "<script>", "<js>" ],
	answer: 3,
},
{	
	question:"Where is the correct place to insert a JavaScript?",
	option:["Both the <head> section and the <body> section are correct",
    "The <body> section.", 
    "The <head> section.", 
    "Out of the boiler plate." ],
	answer: 1,
},
{	
	question:"Which galaxy is nearest to milky way?",
	option:["Canis Major Dwarf Galaxy", "Draco II", "Segue 1", "Hydrus 1" ],
	answer: 1,
},
{	
	question:"Considering the equinoxes and solstices, the sun shines in September on?",
	option:["northern hemisphere", "eastern hemisphere", "southern and northern hemisphere", "southern hemisphere" ],
	answer: 4,
},
{	
	question:"The firstever JavaScript was created by?",
	option:["Brendan Eich", "Satya Nadela", "Jeff Bezos", "Bill Gates" ],
	answer: 2,
},
{	
	question:"CSS is an acronym for?",
	option:["Custom Style Sheet", "Cascading Style Sheet", "Cascading System Style", "None" ],
	answer: 3,
},
{	
	question:"Which of the following protocol isn't used in internet?",
	option:["Telnet", "HTTPS", "HTTP", "WRL" ],
	answer: 2,
}];



//timer begis

let totalTime=120;
let minTaken=0;
let secTaken=0;
let timeTaken=0;                          //120 sec == 2 min for timer to stop
let min=0;
let sec=0;
let counter=0;
let index=0;
let attempt=0;
let right=0;
let wrong=0;
let questions=quiz.sort(function(){
	return 0.5- Math.random();
});

$(function(){
	let timer=setInterval(function(){
	counter++;
	// showResult(counter);
	min= Math.floor((totalTime-counter)/60); //min left
	sec=totalTime-min*60-counter;

	if(sec>9){
		$(".timerBox span").text("0"+min+":"+sec);
	}
	else{
		$(".timerBox span").text("0"+min+":"+"0"+sec);
	}

	if(counter == totalTime)
	{
		alert("Time's up!! Press ok to see the result.");
		result(2,0);
		clearInterval(timer);
	}
},1000);                                     //timer set for 1 sec interval

printQn(index);                              //printing the qn
$(".scoreBox span").text(right);
$("#resultscreen").hide();


});

function printQn(index){
	 //console.log(questions[0]);
	$(".questionBox").text(questions[index].question);
	$(".optionBox span").eq(0).text(questions[index].option[0]);
	$(".optionBox span").eq(1).text(questions[index].option[1]);
	$(".optionBox span").eq(2).text(questions[index].option[2]);
	$(".optionBox span").eq(3).text(questions[index].option[3]);
	$(".optionBox span").attr("onclick","checkAns(this)");
	
}

function checkAns(option)
{
	attempt++;
	let optClicked = $(option).data("opt");
	console.log(questions[index]);
	if(optClicked == questions[index].answer)
	{
		$(option).addClass("right");
		right++;
	}
	else
	{
		$(option).addClass("wrong");
		wrong++;
	}
	next();
	//$(".optionBox span").attr("onclick"," ");
	$(".scoreBox span").text(right);

}

function next()
{
	if( index < (questions.length -1) )
	{
		index++;
	    $(".optionBox span").removeClass();
	    //$(".optionBox span").attr("onclick","checkAns(this)");
	    printQn(index);
	}
	else 
	{
		showResult(1);
		return;
	}
}

function showResult(j)
{
	if (j==1) {
		minTaken=Math.floor(counter/60);
		secTaken=counter-minTaken*60;
		confirm("You still have "+min+" minutes and "+sec+" seconds left!! Do you really want to submit?");
		result(minTaken,secTaken);
		}
}

function result(minTaken,secTaken)
{
	if(secTaken>9)
	{
		$("#timetaken").text("0"+minTaken+":"+secTaken);
	}
	else
	{
		$("#timetaken").text("0"+minTaken+":"+"0"+secTaken);

	}
	$("#attemptedQns").text(attempt);
	$("#correctQns").text(right);
	$("#incorrectQns").text(wrong);
	$("#questionScreen").hide();
	$("#resultscreen").show();
	return;
}
