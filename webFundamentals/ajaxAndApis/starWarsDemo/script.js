$(document).ready(function() {
	$('#character-form').submit(function(event) {
		// prevent default submit action
		event.preventDefault();
		var basePersonUrl = $('#character-form').attr("action");
		// console.log(basePersonUrl);

		var userInput = $('input[name="character-name"]').val();
		// console.log(userInput);

		$('input[name="character-name"]').val("")

		var queryUrl = basePersonUrl + userInput;

		$.get(queryUrl, function(people) {
			var person = people.results[0];

			// var result = "<h2>" + person.name + "</h2>";
			var result = `
				<div class="person">
					<h2>${person.name}</h2>
					<p>Hair Color: ${person.hair_color}</p>
					<p>Eye Color: ${person.eye_color}</p>
					<p>Skin Color: ${person.skin_color}</p>
					<p>Gender: ${person.gender}</p>
					<a class="button" href="${person.homeworld}">Display Homeworld Info</a>
				</div>
			`
			$('#people').append(result);
		}, 'json');
	});

	$(document).on('click', 'a', function(event) {
		event.preventDefault();
		var homeworldUrl = $(this).attr('href');
		var parentDiv = $(this).parent();

		$.get(homeworldUrl, function(planet) {
			var result = `
				<div class="homeworld">
					<h4>${planet.name}</h4>
					<p>Climate: ${planet.climate}</p>
				</div>
			`
			parentDiv.append(result);
		})
		$(this).hide();
	})
});