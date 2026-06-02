/* ==========================================
   LÓGICA INTERACTIVA - LECCIÓN 2: OBJETOS
   ========================================== */

// Función para agregar líneas a la consola personalizada
function agregarConsola(texto, tipo = 'info') {
    const consola = document.getElementById('consola');
    const linea = document.createElement('div');
    linea.className = `consola-linea consola-${tipo}`;
    linea.textContent = texto;
    consola.appendChild(linea);
    consola.scrollTop = consola.scrollHeight;
}

// Función para limpiar la consola
function limpiarConsola() {
    document.getElementById('consola').innerHTML = '';
}

/* ==========================================
   EJEMPLO 1: ¿QUÉ ES UN OBJETO?
   ========================================== */
function ejemplo1() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 1: ¿QUÉ ES UN OBJETO? ===', 'warning');
    agregarConsola('');
    
    agregarConsola('// Un array sin etiquetas:', 'info');
    let arrayPersona = ['Juan', 25, 'México'];
    agregarConsola('let arrayPersona = ["Juan", 25, "México"];', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(arrayPersona), 'info');
    agregarConsola('¿Qué significa cada valor? 🤷', 'warning');
    agregarConsola('');
    
    agregarConsola('// Un objeto CON etiquetas:', 'info');
    let objetoPersona = {
        nombre: 'Juan',
        edad: 25,
        pais: 'México'
    };
    agregarConsola('let objetoPersona = {', 'info');
    agregarConsola('    nombre: "Juan",', 'info');
    agregarConsola('    edad: 25,', 'info');
    agregarConsola('    pais: "México"', 'info');
    agregarConsola('};', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(objetoPersona), 'info');
    agregarConsola('¡Ahora está claro qué es cada valor! ✅', 'warning');
}

/* ==========================================
   EJEMPLO 2: CREAR OBJETOS
   ========================================== */
function ejemplo2() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 2: CREAR OBJETOS ===', 'warning');
    agregarConsola('');
    
    agregarConsola('// Forma 1: Usando llaves { }', 'info');
    let persona = {
        nombre: 'Juan',
        edad: 25,
        pais: 'México'
    };
    agregarConsola('let persona = {', 'info');
    agregarConsola('    nombre: "Juan",', 'info');
    agregarConsola('    edad: 25,', 'info');
    agregarConsola('    pais: "México"', 'info');
    agregarConsola('};', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(persona), 'info');
    agregarConsola('');
    
    agregarConsola('// Forma 2: Objeto vacío + agregar propiedades', 'info');
    let carro = {};
    carro.marca = 'Toyota';
    carro.modelo = 'Corolla';
    agregarConsola('let carro = {};', 'info');
    agregarConsola('carro.marca = "Toyota";', 'info');
    agregarConsola('carro.modelo = "Corolla";', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(carro), 'info');
}

/* ==========================================
   EJEMPLO 3: ACCEDER A PROPIEDADES
   ========================================== */
function ejemplo3() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 3: ACCEDER A PROPIEDADES ===', 'warning');
    agregarConsola('');
    
    let persona = {
        nombre: 'Juan',
        edad: 25,
        pais: 'México'
    };
    agregarConsola('let persona = {nombre: "Juan", edad: 25, pais: "México"};', 'info');
    agregarConsola('');
    
    agregarConsola('// Forma 1: Usando punto (.)', 'info');
    agregarConsola('persona.nombre;', 'info');
    agregarConsola('Resultado: "' + persona.nombre + '"', 'info');
    agregarConsola('');
    
    agregarConsola('// Forma 2: Usando corchetes ([])', 'info');
    agregarConsola('persona["edad"];', 'info');
    agregarConsola('Resultado: ' + persona['edad'], 'info');
    agregarConsola('');
    
    agregarConsola('// Acceder a todas las propiedades:', 'info');
    agregarConsola('persona.nombre = "' + persona.nombre + '"', 'info');
    agregarConsola('persona.edad = ' + persona.edad, 'info');
    agregarConsola('persona.pais = "' + persona.pais + '"', 'info');
}

/* ==========================================
   EJEMPLO 4: MODIFICAR PROPIEDADES
   ========================================== */
function ejemplo4() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 4: MODIFICAR PROPIEDADES ===', 'warning');
    agregarConsola('');
    
    let persona = {
        nombre: 'Juan',
        edad: 25
    };
    agregarConsola('let persona = {nombre: "Juan", edad: 25};', 'info');
    agregarConsola('Objeto original: ' + JSON.stringify(persona), 'info');
    agregarConsola('');
    
    agregarConsola('// Cambiar un valor existente:', 'info');
    persona.edad = 26;
    agregarConsola('persona.edad = 26;', 'info');
    agregarConsola('Objeto actualizado: ' + JSON.stringify(persona), 'info');
    agregarConsola('');
    
    agregarConsola('// Agregar una nueva propiedad:', 'info');
    persona.email = 'juan@email.com';
    agregarConsola('persona.email = "juan@email.com";', 'info');
    agregarConsola('Objeto final: ' + JSON.stringify(persona), 'info');
}

/* ==========================================
   EJEMPLO 5: MÉTODOS (FUNCIONES EN OBJETOS)
   ========================================== */
function ejemplo5() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 5: MÉTODOS ===', 'warning');
    agregarConsola('');
    
    let persona = {
        nombre: 'Juan',
        edad: 25,
        saludar: function() {
            return 'Hola, soy ' + this.nombre;
        }
    };
    
    agregarConsola('let persona = {', 'info');
    agregarConsola('    nombre: "Juan",', 'info');
    agregarConsola('    edad: 25,', 'info');
    agregarConsola('    saludar: function() {', 'info');
    agregarConsola('        return "Hola, soy " + this.nombre;', 'info');
    agregarConsola('    }', 'info');
    agregarConsola('};', 'info');
    agregarConsola('');
    
    agregarConsola('persona.saludar();', 'info');
    let resultado = persona.saludar();
    agregarConsola('Resultado: "' + resultado + '"', 'info');
    agregarConsola('');
    
    agregarConsola('✅ "this" se refiere al objeto mismo', 'warning');
}

/* ==========================================
   EJEMPLO 6: RECORRER OBJETOS CON for...in
   ========================================== */
function ejemplo6() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 6: RECORRER OBJETOS CON for...in ===', 'warning');
    agregarConsola('');
    
    let persona = {
        nombre: 'Juan',
        edad: 25,
        pais: 'México'
    };
    agregarConsola('let persona = {nombre: "Juan", edad: 25, pais: "México"};', 'info');
    agregarConsola('');
    
    agregarConsola('for (let clave in persona) {', 'info');
    agregarConsola('    console.log(clave + ": " + persona[clave]);', 'info');
    agregarConsola('}', 'info');
    agregarConsola('');
    
    agregarConsola('Resultado:', 'warning');
    for (let clave in persona) {
        agregarConsola(clave + ': ' + persona[clave], 'info');
    }
}

/* ==========================================
   EJEMPLO 7: ARRAY DE OBJETOS
   ========================================== */
function ejemplo7() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 7: ARRAY DE OBJETOS ===', 'warning');
    agregarConsola('');
    
    let personas = [
        {nombre: 'Juan', edad: 25},
        {nombre: 'María', edad: 30},
        {nombre: 'Pedro', edad: 28}
    ];
    
    agregarConsola('let personas = [', 'info');
    agregarConsola('    {nombre: "Juan", edad: 25},', 'info');
    agregarConsola('    {nombre: "María", edad: 30},', 'info');
    agregarConsola('    {nombre: "Pedro", edad: 28}', 'info');
    agregarConsola('];', 'info');
    agregarConsola('');
    
    agregarConsola('// Acceder al primer objeto:', 'info');
    agregarConsola('personas[0].nombre;', 'info');
    agregarConsola('Resultado: "' + personas[0].nombre + '"', 'info');
    agregarConsola('');
    
    agregarConsola('// Recorrer todos los objetos:', 'info');
    agregarConsola('personas.forEach(function(persona) {', 'info');
    agregarConsola('    console.log(persona.nombre);', 'info');
    agregarConsola('});', 'info');
    agregarConsola('');
    
    agregarConsola('Resultado:', 'warning');
    personas.forEach(function(persona) {
        agregarConsola(persona.nombre, 'info');
    });
}

/* ==========================================
   EJEMPLO 8: DESTRUCTURING
   ========================================== */
function ejemplo8() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 8: DESTRUCTURING ===', 'warning');
    agregarConsola('');
    
    let persona = {
        nombre: 'Juan',
        edad: 25,
        pais: 'México'
    };
    
    agregarConsola('let persona = {nombre: "Juan", edad: 25, pais: "México"};', 'info');
    agregarConsola('');
    
    agregarConsola('// SIN destructuring (forma antigua):', 'info');
    agregarConsola('let nombre = persona.nombre;', 'info');
    agregarConsola('let edad = persona.edad;', 'info');
    agregarConsola('');
    
    agregarConsola('// CON destructuring (forma moderna):', 'info');
    let {nombre, edad} = persona;
    agregarConsola('let {nombre, edad} = persona;', 'info');
    agregarConsola('');
    
    agregarConsola('console.log(nombre);  // "' + nombre + '"', 'info');
    agregarConsola('console.log(edad);    // ' + edad, 'info');
    agregarConsola('');
    
    agregarConsola('✅ Destructuring es más rápido y limpio', 'warning');
}

/* ==========================================
   EJEMPLO 9: SPREAD OPERATOR
   ========================================== */
function ejemplo9() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 9: SPREAD OPERATOR (...) ===', 'warning');
    agregarConsola('');
    
    let persona = {nombre: 'Juan', edad: 25};
    
    agregarConsola('let persona = {nombre: "Juan", edad: 25};', 'info');
    agregarConsola('');
    
    agregarConsola('// Copiar un objeto:', 'info');
    let copia = {...persona};
    agregarConsola('let copia = {...persona};', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(copia), 'info');
    agregarConsola('');
    
    agregarConsola('// Mezclar objetos:', 'info');
    let trabajador = {
        ...persona,
        puesto: 'Desarrollador',
        edad: 26
    };
    agregarConsola('let trabajador = {', 'info');
    agregarConsola('    ...persona,', 'info');
    agregarConsola('    puesto: "Desarrollador",', 'info');
    agregarConsola('    edad: 26', 'info');
    agregarConsola('};', 'info');
    agregarConsola('');
    
    agregarConsola('Resultado: ' + JSON.stringify(trabajador), 'info');
    agregarConsola('');
    
    agregarConsola('✅ El spread operator (...) copia/mezcla propiedades', 'warning');
}

/* ==========================================
   DESAFÍO
   ========================================== */
function desafio1() {
    limpiarConsola();
    agregarConsola('=== DESAFÍO: CARRITO DE COMPRAS ===', 'warning');
    agregarConsola('');
    
    let carrito = {
        productos: ['laptop', 'mouse', 'teclado'],
        total: 1500,
        resumen: function() {
            return 'Total: $' + this.total + 
                   ' (' + this.productos.length + ' productos)';
        }
    };
    
    agregarConsola('let carrito = {', 'info');
    agregarConsola('    productos: ["laptop", "mouse", "teclado"],', 'info');
    agregarConsola('    total: 1500,', 'info');
    agregarConsola('    resumen: function() {', 'info');
    agregarConsola('        return "Total: $" + this.total +', 'info');
    agregarConsola('               " (" + this.productos.length + " productos)";', 'info');
    agregarConsola('    }', 'info');
    agregarConsola('};', 'info');
    agregarConsola('');
    
    agregarConsola('carrito.resumen();', 'info');
    let resultado = carrito.resumen();
    agregarConsola('Resultado: "' + resultado + '"', 'info');
    agregarConsola('');
    
    agregarConsola('✅ EXPLICACIÓN:', 'warning');
    agregarConsola('- carrito es un objeto con productos, total y un método', 'info');
    agregarConsola('- El método resumen() usa "this" para acceder a propiedades', 'info');
    agregarConsola('- Combinamos el total y la cantidad de productos', 'info');
    agregarConsola('');
    agregarConsola('¡FELICIDADES! ¡Ya entiendes Objetos! 🎉', 'warning');
}

/* ==========================================
   INICIALIZACIÓN
   ========================================== */
console.log('✅ Script de lección 2 cargado correctamente');
agregarConsola('Haz click en los botones para ver ejemplos', 'info');
