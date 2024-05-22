export const obtenerData = async () => {
	// @TODO Completar
};

export const obtenerGatoPorId = async (id) => {
	// @TODO Completar
};

export class Cat {
	// @TODO Completar
}







// Función para obtener personajes de la API
async function getCharacters() {
    const response = await fetch("https://rickandmortyapi.com/api/character"); // Llamada a la API
    const data = await response.json(); // Conversión de la respuesta a JSON
    let characters = data.results.map(parseJsonToCharacter); // Conversión de cada resultado a una instancia de Character
    renderAllCharacters(characters); // Renderización de todos los personajes
}

// Función para convertir JSON a instancias de Character
function parseJsonToCharacter(element) {
    return new Character(element.id, element.name, element.image, element.status, element.species, element.location.name);
}

// Función para renderizar todos los personajes
function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml(); // Agregación del HTML generado al contenedor
    });
}

// Función para manejar el clic en el botón "Ver más"
function viewDetails(characterId) {
    window.location.href = `character-details.html?id=${characterId}`; // Redirección a la página de detalles con el ID del personaje en la URL
}

getCharacters(); // Llamada inicial para obtener y mostrar los personajes
