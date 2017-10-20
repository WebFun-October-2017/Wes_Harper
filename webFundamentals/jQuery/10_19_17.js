$(document).ready(function() {
	$("#hello").click(function() {
		$('p').toggle();
		$('ul:first').show();
		console.log("class", $("#hello").attr("class"));
		$("h1").removeClass("green")
	});

	$("ul:first").hide();
	// $("ul:last").remove();

	$("p").on("click", function() {
		$("#hello").toggleClass("green" "thin");
	});

	// $("selector").getter-setter("first", "second");
})


// function callbackCaller(callback) {
// 	// wait for click
// 	// if(clicked){
// 	callback();
// }

// function otherFunction() {
// 	console.log("I am a callback");
// }

// callbackCaller(function() {
// 	console.log("I am another callback");
// });