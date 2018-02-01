$(document).ready(function() {
	console.log('loaded javascript');
	var baseURL = 'https://swapi.co/api/';
	
	$('#character-form').submit(function(e) {
		e.preventDefault();
		console.log("submitted form");
		var searchParam = $('input[name="character-name"]').val();
		var searchPeople = baseURL + 'people/?search=' + searchParam;
		// $.get(searchPeople, function(data) {
		// 	// console.log('data:', data);
		// 	var person = data.results[0];
		// 	var htmlString = `
		// 		<div class="person">
		// 			<h2>${person.name}</h2>
		// 			<ul>
		// 				<li>Hair Color: ${person.hair_color}</li>
		// 				<li>Eye Color: ${person.climatecolor}</li>
		// 				<li>Gender: ${person.gender}</li>
		// 				<li>Skin Color: ${person.skin_color}</li>
		// 			</ul>
		// 			<a class='button homeworld-link' href='${person.homeworld}'>Display Homeworld Info</a>
		// 		</div>
		// 	`;
		// 	$('#people').append(htmlString);
		// 	$('input[name="character-name"]').val('');
		// })

		$.ajax({
			url: searchPeople,
			type: 'get',
			success: function(data) {
				console.log('data:', data);
				var person = data.results[0];
				var htmlString = `
					<div class="person">
						<h2>${person.name}</h2>
						<ul>
							<li>Hair Color: ${person.hair_color}</li>
							<li>Eye Color: ${person.climatecolor}</li>
							<li>Gender: ${person.gender}</li>
							<li>Skin Color: ${person.skin_color}</li>
						</ul>
						<a class='button homeworld-link' href='${person.homeworld}'>Display Homeworld Info</a>
					</div>
				`;
				$("#people").append(htmlString);
				$('input[name="character-name"]').val("");
			},
			error: function() {
				console.log('there was some sort of error');
			}
		})
	});

	$(document).on('click', '.homeworld-link', function(e) {
		e.preventDefault();
		console.log('clicked');
		var homeLink = $(this).attr('href');
		var that = $(this);
		$.get(homeLink, function(home) {
			console.log(home);
			var htmlString = `
				<div class='homeworld'>
					<h3>${home.name}</h3>
					<ul>
						<li>Rotation Period: ${home.rotation_period}</li>
						<li>Climate: ${home.climate}</li>
						<li>Population: ${home.population}</li>
					</ul>
				</div>
			`;
			that.parent().append(htmlString);
			that.remove();
		})
	})
});