console.log("hello!");
$(document).ready(function() {
	var basePeopleUrl = $('#name_form').attr('action');
	console.log(basePeopleUrl);

	$('#name_form').submit(function(event) {
		event.preventDefault();
		var query = $('#name_form input').val();
		console.log(query);
		var queryUrl = basePeopleUrl + "/?search=" + query + "&format=json";

		$.get(queryUrl, function(response) {
			$("#results").html(response);
		});
	});
});