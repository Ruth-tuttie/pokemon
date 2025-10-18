


//fetch data
fetchData()
async function fetchData() {
  try {
    let input = document.querySelector('.search-input').value;
    const searchResults = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);

    if (!searchResults.ok) {
      throw new Error('couldnt fetch data');
    }
    const data = await searchResults.json();
console.log(data)
    const pokemon = document.querySelector('.search-results-image');
    const pokename = document.querySelector('.search-results-name');
    const pokemonImage = data.sprites.front_default;

    pokemon.src = pokemonImage
    

    /*pokemon.innerHTML= `<img src="${data.sprites.front_default}" width="50%vw" height="50%vh">`*/

  }
  catch (error) {
    alert(error)
  }
}

function displayData() {

}