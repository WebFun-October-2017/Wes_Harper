console.log("hello!");
$(document).ready(function() {
	// pull api endpoint from html
	var basePeopleUrl = $('#name_form').attr('action');
	// console.log(basePeopleUrl);

	$('#name_form').submit(function(event) {
		// prevent redirect
		event.preventDefault();
		// grab user input value
		var query = $('#name_form input[type=text]').val();
		// clear input for good UI
		$('#name_form input[type=text]').val('');
		// console.log(query);
		// create full api url
		var queryUrl = basePeopleUrl + "/?search=" + query + "&format=json";

		// ajax request for query
		$.get(queryUrl, function(people) {
			// console.log(people.results[0]);
			// save first result in returned query list
			var person = people.results[0];
			// create resulting html
			var result = `
				<div class="person">
					<h3>${person.name}</h3>
					<p>Hair Color: ${person.hair_color}</p>
					<p>Eye Color: ${person.eye_color}</p>
					<p>Skin Color: ${person.skin_color}</p>
					<p>Height: ${person.height}cm</p>
					<p>Gender: ${person.gender}</p>
					<a href='${person.homeworld}'>View Homeworld Info</a>
				</div
			`
			// append html to results div
			$("#results").append(result);
		}, 'json');

		// ATTEMPTING TO WORK WITH CORS COMPATIBILITY
		// $.ajax({
		// 	url: queryUrl,
		// 	type: "GET",
		// 	crossDomain = true,
		// 	success: function(response) {
		// 		console.log(response);
		// 	},
		// 	error: function(xhr, status) {
		// 		console.log(xhr, status);
		// 	}
		// })
		// return false;
	});

	$(document).on("click", ".person a", function(event) {
		// prevent redirect
		event.preventDefault();
		// pull api endpoint from <a> tag
		var homeworldQueryUrl = $(this).attr("href");
		// hide button
		$(this).hide();
		// save parent element in context so it can be appended to later
		var that = $(this).parent();

		//ajax request for query
		$.get(homeworldQueryUrl, function(home) {
			// console.log(home);
			// create resulting html
			var result = `
				<div class="homeworld">
					<h4>${home.name}</h4>
					<p>Climate: ${home.climate}</p>
				</div>
			`
			// append html to desired element
			that.append(result);
		});
	});
});