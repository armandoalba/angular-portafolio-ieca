// AÑADIENDO MIEMBROS A LOS GRUPOS Y MOSTRANDO RESUMEN
// Completa el código del prototipo "Grupo"

/*
    1. Utilizando un constructor de objetos "Grupo"
    2. Completa el constructor "Grupo" con las propiedades:
        nombre   -> Nombre del grupo        -> String "..."
        personas -> Arreglo de Personas     -> Array["...", "...", "..."]
    3. Agrega un prototipo llamado `agregarPersona` que sea una función para agregar una persona
    4. Agrega un prototipo llamado `mostrarResumen` utilizando **interpolación** para mostrar el siguiente mensaje:
        "El grupo <propiedad_grupo> tienen <total_personas> miembros"
*/

// Constructor de Objetos "Grupo"
function Grupo(nombre, personas) {
    this.nombre = nombre;
    this.personas = personas;
}

// Prototipo para agregar una persona al grupo
Grupo.prototype.agregarPersona = function(persona) {
    this.personas.push(persona);
}

// Prototipo para mostrar el resumen del grupo
Grupo.prototype.mostrarResumen = function() {
    const totalPersonas = this.personas.length;
    console.log(`El grupo ${this.nombre} tiene ${totalPersonas} miembros`);
}

const magios = new Grupo("Magios", ["Eduardo", "Carla", "Marcos", "Emmanuel", "Samara", "Paulina", "María", "Julio", "Alex", "Pedro", "Guillermo", "Hernán", "Eliot", "Israel", "Lucía"]);

magios.mostrarResumen();
magios.agregarPersona("Manuel");
magios.agregarPersona("Irma");
magios.agregarPersona("Carlos");
magios.mostrarResumen();
