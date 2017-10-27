$(document).ready(function() {
	var apiBase = "https://pokeapi.co/api/v2/pokemon/";
	var imageBase = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

	for(var i = 1; i <= 151; i++) {
		console.log(i);
		var result = `<img id='${i}' src="${imageBase}${i}.png">`;

		$('#pokemon').append(result);
	}
	$(document).on("click", "img", function(){
		var url = apiBase + $(this).attr('id') + "/";
		var img = $(this).attr('src');
		console.log(url);
		$.get(url, function(pokemon){
			console.log(pokemon);
			var result = `
				<h1>${pokemon.name}</h1>
				<img src="${img}">
				<h3>Types</h3>
				<ul>
			`;
			for(var i = 0; i < pokemon.types.length; i++) {
				result += `<li>${pokemon.types[i].type.name}</li>`
			};
			result += `
				</ul>
				<h3>Height</h3>
				<p>${pokemon.height}</p>
				<h3>Weight</h3>
				<p>${pokemon.weight}</p>
			`;
			$("#pokedex").html(result);
			$("#pokedex").css("border", "10px solid red");
		}, 'json')
	})
})