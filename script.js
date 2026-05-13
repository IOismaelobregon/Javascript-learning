/* ==========================================
   LÓGICA JAVASCRIPT PARA EL CONTADOR
   ========================================== */

// 1. DECLARAR LA VARIABLE QUE GUARDA EL NÚMERO
// "let" permite crear una variable que puede cambiar
// contador empieza en 0
let contador = 0;

// 2. OBTENER LOS ELEMENTOS DEL HTML
// document.getElementById() busca elementos por su "id"
// Guardamos las referencias para usarlas después

const numeroDisplay = document.getElementById('numero');
// Esto obtiene el elemento donde mostramos el número

const btnSumar = document.getElementById('btnSumar');
// Obtiene el botón de sumar

const btnRestar = document.getElementById('btnRestar');
// Obtiene el botón de restar

const btnReiniciar = document.getElementById('btnReiniciar');
// Obtiene el botón de reiniciar

// ==========================================
// 3. CREAR LAS FUNCIONES
// ==========================================

// FUNCIÓN 1: SUMAR
// Esta función aumenta el contador en 1
function sumar() {
    contador = contador + 1;  // O podríamos escribir: contador++
    actualizarPantalla();     // Llamamos a la función para actualizar lo que se ve
    console.log('Sumaste! Contador ahora es:', contador); // Mensaje en consola
}

// FUNCIÓN 2: RESTAR
// Esta función disminuye el contador en 1
// PERO solo si el contador es mayor que 0
function restar() {
    if (contador > 0) {
        // "if" significa "si" - solo ejecuta si es verdadero
        contador = contador - 1;  // O podríamos escribir: contador--
        actualizarPantalla();
        console.log('Restaste! Contador ahora es:', contador);
    } else {
        // "else" significa "si no" - si contador NO es mayor que 0
        console.log('No puedes restar más! Ya estamos en 0');
        alert('¡El contador no puede ser negativo! 🚫');
    }
}

// FUNCIÓN 3: REINICIAR
// Esta función vuelve el contador a 0
function reiniciar() {
    contador = 0;  // Vuelve a 0
    actualizarPantalla();
    console.log('Reiniciaste! Contador vuelto a 0');
}

// FUNCIÓN 4: ACTUALIZAR PANTALLA
// Esta es la función MÁS IMPORTANTE
// Se encarga de mostrar el número actualizado y cambiar los colores
function actualizarPantalla() {
    // Actualizar el número en la pantalla
    numeroDisplay.textContent = contador;
    // .textContent = cambia el texto que se ve en el HTML
    
    // CAMBIAR EL COLOR según el valor del contador
    if (contador > 0) {
        // Si es positivo, verde
        numeroDisplay.style.color = '#38ef7d';
        // .style.color = cambia el color del texto
    } else if (contador < 0) {
        // Si es negativo, rojo
        numeroDisplay.style.color = '#f45c43';
    } else {
        // Si es cero, blanco
        numeroDisplay.style.color = 'white';
    }
}

// ==========================================
// 4. CONECTAR LOS BOTONES CON LAS FUNCIONES
// ==========================================

// Esto significa: "Cuando hagas click en btnSumar, ejecuta la función sumar()"
btnSumar.addEventListener('click', sumar);
// addEventListener = "escucha" cuando algo sucede
// 'click' = cuando haces click
// sumar = la función que se ejecuta

// Lo mismo para restar
btnRestar.addEventListener('click', restar);

// Y lo mismo para reiniciar
btnReiniciar.addEventListener('click', reiniciar);

// ==========================================
// 5. CONSOLA PARA DEPURACIÓN
// ==========================================

console.log('✅ Script cargado correctamente!');
console.log('Contador inicial:', contador);
console.log('Haz click en los botones y mira la consola (F12)');

/* 
RESUMEN DE LO QUE APRENDIMOS:
================================

1. VARIABLES (let contador = 0)
   - Guardan datos que pueden cambiar

2. FUNCIONES (function sumar())
   - Son bloques de código reutilizables
   - Se ejecutan cuando las llamamos

3. CONDICIONALES (if, else)
   - if: "si se cumple esto, haz esto"
   - else: "si no se cumple, haz esto otro"

4. DOM (document.getElementById())
   - Acceder a elementos HTML desde JavaScript
   - Cambiar su contenido (.textContent)
   - Cambiar sus estilos (.style.color)

5. EVENTOS (addEventListener)
   - Escuchar cuando el usuario hace algo
   - Ejecutar una función cuando sucede

¡FELICIDADES! Ya entiendes los fundamentos de JavaScript! 🎉
*/
