console.log("hello!");
$(document).ready(function() {
	var basePeopleUrl = $('#name_form').attr('action');
	console.log(basePeopleUrl);

	$('#name_form').submit(function(event) {
		event.preventDefault();
		var query = $('#name_form input').val();
		console.log(query);
		var queryUrl = basePeopleUrl + "/?search=" + query + "&format=json";

		// $.get(queryUrl, function(people) {
		// 	console.log(people.results[0]);
		// 	var person = people.results[0];
		// 	var result = `<h3>${person.name}</h3>`;
		// 	result += ``
		// }, 'json');

		$.ajax({
			url: queryUrl,
			type: "GET",
			crossDomain = true,
			success: function(response) {
				console.log(response);
			},
			error: function(xhr, status) {
				console.log(xhr, status);
			}
		})
		return false;
	});
});