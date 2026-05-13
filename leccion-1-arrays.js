/* ==========================================
   LÓGICA INTERACTIVA - LECCIÓN 1: ARRAYS
   ========================================== */

// Función para agregar líneas a la consola personalizada
function agregarConsola(texto, tipo = 'info') {
    const consola = document.getElementById('consola');
    const linea = document.createElement('div');
    linea.className = `consola-linea consola-${tipo}`;
    linea.textContent = texto;
    consola.appendChild(linea);
    consola.scrollTop = consola.scrollHeight; // Auto-scroll hacia abajo
}

// Función para limpiar la consola
function limpiarConsola() {
    document.getElementById('consola').innerHTML = '';
}

/* ==========================================
   EJEMPLO 1: ¿QUÉ ES UN ARRAY?
   ========================================== */
function ejemplo1() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 1: ¿QUÉ ES UN ARRAY? ===', 'warning');
    agregarConsola('');
    
    // Crear un array de frutas
    let frutas = ['manzana', 'plátano', 'naranja'];
    
    agregarConsola('let frutas = ["manzana", "plátano", "naranja"];', 'info');
    agregarConsola('');
    agregarConsola('Un array es una lista guardada en una variable.', 'info');
    agregarConsola('');
    agregarConsola('Array frutas:', 'info');
    agregarConsola(JSON.stringify(frutas), 'info');
    agregarConsola('');
    agregarConsola('Índices:');
    agregarConsola('frutas[0] = "' + frutas[0] + '"', 'info');
    agregarConsola('frutas[1] = "' + frutas[1] + '"', 'info');
    agregarConsola('frutas[2] = "' + frutas[2] + '"', 'info');
    agregarConsola('');
    agregarConsola('✅ Los índices empiezan en 0, no en 1!', 'warning');
}

/* ==========================================
   EJEMPLO 2: CREAR ARRAYS
   ========================================== */
function ejemplo2() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 2: CREAR ARRAYS ===', 'warning');
    agregarConsola('');
    
    agregarConsola('// Forma 1: Usar corchetes [ ]', 'info');
    let forma1 = ['manzana', 'plátano', 'naranja'];
    agregarConsola('let forma1 = ["manzana", "plátano", "naranja"];', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(forma1), 'info');
    agregarConsola('');
    
    agregarConsola('// Forma 2: Usar new Array()', 'info');
    let forma2 = new Array(1, 2, 3, 4, 5);
    agregarConsola('let forma2 = new Array(1, 2, 3, 4, 5);', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(forma2), 'info');
    agregarConsola('');
    
    agregarConsola('// Forma 3: Array vacío y agregar elementos', 'info');
    let forma3 = [];
    forma3[0] = 'primero';
    forma3[1] = 'segundo';
    agregarConsola('let forma3 = [];', 'info');
    agregarConsola('forma3[0] = "primero";', 'info');
    agregarConsola('forma3[1] = "segundo";', 'info');
    agregarConsola('Resultado: ' + JSON.stringify(forma3), 'info');
}

/* ==========================================
   EJEMPLO 3: ACCEDER A ELEMENTOS
   ========================================== */
function ejemplo3() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 3: ACCEDER A ELEMENTOS ===', 'warning');
    agregarConsola('');
    
    let frutas = ['manzana', 'plátano', 'naranja'];
    agregarConsola('let frutas = ["manzana", "plátano", "naranja"];', 'info');
    agregarConsola('');
    
    agregarConsola('frutas[0] = "' + frutas[0] + '"', 'info');
    agregarConsola('frutas[1] = "' + frutas[1] + '"', 'info');
    agregarConsola('frutas[2] = "' + frutas[2] + '"', 'info');
    agregarConsola('');
    
    agregarConsola('// Cambiar un valor:', 'info');
    frutas[0] = 'piña';
    agregarConsola('frutas[0] = "piña";', 'info');
    agregarConsola('Ahora el array es: ' + JSON.stringify(frutas), 'info');
}

/* ==========================================
   EJEMPLO 4: PROPIEDAD .length
   ========================================== */
function ejemplo4() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 4: PROPIEDAD .length ===', 'warning');
    agregarConsola('');
    
    let frutas = ['manzana', 'plátano', 'naranja'];
    agregarConsola('let frutas = ["manzana", "plátano", "naranja"];', 'info');
    agregarConsola('');
    
    agregarConsola('frutas.length;', 'info');
    agregarConsola('Resultado: ' + frutas.length, 'info');
    agregarConsola('');
    
    agregarConsola('.length nos dice cuántos elementos hay en el array', 'warning');
}

/* ==========================================
   EJEMPLO 5: MÉTODO .push()
   ========================================== */
function ejemplo5() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 5: MÉTODO .push() ===', 'warning');
    agregarConsola('');
    
    let frutas = ['manzana', 'plátano'];
    agregarConsola('let frutas = ["manzana", "plátano"];', 'info');
    agregarConsola('Array actual: ' + JSON.stringify(frutas), 'info');
    agregarConsola('');
    
    agregarConsola('frutas.push("naranja");', 'info');
    frutas.push('naranja');
    agregarConsola('Array después de push: ' + JSON.stringify(frutas), 'info');
    agregarConsola('');
    
    agregarConsola('✅ .push() agrega un elemento al FINAL del array', 'warning');
}

/* ==========================================
   EJEMPLO 6: MÉTODO .pop()
   ========================================== */
function ejemplo6() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 6: MÉTODO .pop() ===', 'warning');
    agregarConsola('');
    
    let frutas = ['manzana', 'plátano', 'naranja'];
    agregarConsola('let frutas = ["manzana", "plátano", "naranja"];', 'info');
    agregarConsola('Array actual: ' + JSON.stringify(frutas), 'info');
    agregarConsola('');
    
    let eliminada = frutas.pop();
    agregarConsola('frutas.pop();', 'info');
    agregarConsola('Elemento eliminado: "' + eliminada + '"', 'info');
    agregarConsola('Array después de pop: ' + JSON.stringify(frutas), 'info');
    agregarConsola('');
    
    agregarConsola('✅ .pop() quita el ÚLTIMO elemento del array', 'warning');
}

/* ==========================================
   EJEMPLO 7: MÉTODO .forEach()
   ========================================== */
function ejemplo7() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 7: MÉTODO .forEach() ===', 'warning');
    agregarConsola('');
    
    let frutas = ['manzana', 'plátano', 'naranja'];
    agregarConsola('let frutas = ["manzana", "plátano", "naranja"];', 'info');
    agregarConsola('');
    
    agregarConsola('frutas.forEach(function(fruta) {', 'info');
    agregarConsola('    console.log("Fruta: " + fruta);', 'info');
    agregarConsola('});', 'info');
    agregarConsola('');
    
    agregarConsola('Resultado:', 'warning');
    frutas.forEach(function(fruta) {
        agregarConsola('Fruta: ' + fruta, 'info');
    });
    agregarConsola('');
    
    agregarConsola('✅ .forEach() ejecuta una función para CADA elemento', 'warning');
}

/* ==========================================
   EJEMPLO 8: MÉTODO .map()
   ========================================== */
function ejemplo8() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 8: MÉTODO .map() ===', 'warning');
    agregarConsola('');
    
    let numeros = [1, 2, 3, 4, 5];
    agregarConsola('let numeros = [1, 2, 3, 4, 5];', 'info');
    agregarConsola('Array original: ' + JSON.stringify(numeros), 'info');
    agregarConsola('');
    
    agregarConsola('// Crear un nuevo array multiplicando cada número por 2', 'info');
    agregarConsola('let duplicados = numeros.map(function(num) {', 'info');
    agregarConsola('    return num * 2;', 'info');
    agregarConsola('});', 'info');
    agregarConsola('');
    
    let duplicados = numeros.map(function(num) {
        return num * 2;
    });
    
    agregarConsola('Array nuevo (duplicados): ' + JSON.stringify(duplicados), 'info');
    agregarConsola('');
    
    agregarConsola('✅ .map() TRANSFORMA cada elemento y crea un nuevo array', 'warning');
}

/* ==========================================
   EJEMPLO 9: MÉTODO .filter()
   ========================================== */
function ejemplo9() {
    limpiarConsola();
    agregarConsola('=== EJEMPLO 9: MÉTODO .filter() ===', 'warning');
    agregarConsola('');
    
    let numeros = [1, 2, 3, 4, 5, 6];
    agregarConsola('let numeros = [1, 2, 3, 4, 5, 6];', 'info');
    agregarConsola('Array original: ' + JSON.stringify(numeros), 'info');
    agregarConsola('');
    
    agregarConsola('// Filtrar solo números mayores a 3', 'info');
    agregarConsola('let mayoresA3 = numeros.filter(function(num) {', 'info');
    agregarConsola('    return num > 3;', 'info');
    agregarConsola('});', 'info');
    agregarConsola('');
    
    let mayoresA3 = numeros.filter(function(num) {
        return num > 3;
    });
    
    agregarConsola('Array filtrado: ' + JSON.stringify(mayoresA3), 'info');
    agregarConsola('');
    
    agregarConsola('✅ .filter() SELECCIONA elementos que cumplen una condición', 'warning');
}

/* ==========================================
   DESAFÍO
   ========================================== */
function desafio1() {
    limpiarConsola();
    agregarConsola('=== DESAFÍO: COMBINA LO APRENDIDO ===', 'warning');
    agregarConsola('');
    
    agregarConsola('let edades = [15, 20, 25, 18, 30, 22];', 'info');
    let edades = [15, 20, 25, 18, 30, 22];
    agregarConsola('Array original: ' + JSON.stringify(edades), 'info');
    agregarConsola('');
    
    agregarConsola('let mayoresDeEdad = edades.filter(function(edad) {', 'info');
    agregarConsola('    return edad >= 18;', 'info');
    agregarConsola('});', 'info');
    agregarConsola('');
    
    let mayoresDeEdad = edades.filter(function(edad) {
        return edad >= 18;
    });
    
    agregarConsola('Resultado:', 'warning');
    agregarConsola(JSON.stringify(mayoresDeEdad), 'info');
    agregarConsola('');
    
    agregarConsola('✅ EXPLICACIÓN:', 'warning');
    agregarConsola('- Tenemos un array con edades', 'info');
    agregarConsola('- Usamos .filter() para seleccionar solo mayores de 18', 'info');
    agregarConsola('- El resultado es un nuevo array solo con los válidos', 'info');
    agregarConsola('');
    agregarConsola('¡FELICIDADES! ¡Ya entiendes Arrays! 🎉', 'warning');
}

/* ==========================================
   INICIALIZACIÓN
   ========================================== */
console.log('✅ Script de lección 1 cargado correctamente');
agregarConsola('Haz click en los botones para ver ejemplos', 'info');
