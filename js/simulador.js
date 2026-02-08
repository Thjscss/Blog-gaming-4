// ========================================
// VARIABLES Y CONSTANTES GLOBALES
// ========================================

// Arrays de juegos por categoría
const juegosAccion = ["Call of Duty", "God of War", "Devil May Cry", "Doom Eternal", "Halo Infinite"];
const juegosAventura = ["The Legend of Zelda", "Uncharted", "Tomb Raider", "Horizon Zero Dawn", "Assassin's Creed"];
const juegosRPG = ["The Witcher 3", "Elden Ring", "Final Fantasy XVI", "Skyrim", "Cyberpunk 2077"];
const juegosDeportes = ["FIFA 24", "NBA 2K24", "F1 23", "Rocket League", "Madden NFL"];
const juegosEstrategia = ["Civilization VI", "Age of Empires IV", "Starcraft II", "XCOM 2", "Total War"];

// Variables para almacenar datos del usuario
let nombreUsuario = "";
let edadUsuario = 0;
let presupuesto = 0;
let generoPreferido = "";
let plataforma = "";

// Variable para controlar cancelación
let simuladorCancelado = false;

// Constante para descuento
const DESCUENTO_ESTUDIANTE = 0.15;

// ========================================
// FUNCIÓN PARA MANEJAR CANCELACIÓN
// ========================================

function cancelarSimulador() {
    simuladorCancelado = true;
    console.log("\n❌ SIMULADOR CANCELADO POR EL USUARIO");
    console.log("=".repeat(50));
    alert("❌ Has cancelado el simulador.\n\n¡Vuelve cuando quieras!");
}

// ========================================
// FUNCIÓN PRINCIPAL
// ========================================

function iniciarSimulador() {
    // Reiniciar estado de cancelación
    simuladorCancelado = false;
    
    console.log("=".repeat(50));
    console.log("🎮 SIMULADOR DE RECOMENDACIÓN DE VIDEOJUEGOS 🎮");
    console.log("=".repeat(50));
    
    // Llamada a las funciones con verificación de cancelación
    if (!obtenerDatosUsuario()) return;
    if (!procesarPreferencias()) return;
    if (!mostrarRecomendaciones()) return;
    calcularPresupuesto();
}

// ========================================
// FUNCIÓN 1: OBTENER DATOS DEL USUARIO (ENTRADA)
// ========================================

function obtenerDatosUsuario() {
    console.log("\n--- PASO 1: Recopilación de Datos ---");
    
    // Obtener nombre
    nombreUsuario = prompt("¡Bienvenido! ¿Cuál es tu nombre?");
    
    // Verificar si el usuario canceló
    if (nombreUsuario === null) {
        cancelarSimulador();
        return false;
    }
    
    // Validar que se ingresó un nombre
    while (!nombreUsuario || nombreUsuario.trim() === "") {
        alert("⚠️ Por favor, ingresa tu nombre para continuar");
        nombreUsuario = prompt("¿Cuál es tu nombre?");
        
        // Verificar cancelación en el loop
        if (nombreUsuario === null) {
            cancelarSimulador();
            return false;
        }
    }
    
    console.log(`Usuario registrado: ${nombreUsuario}`);
    
    // Obtener edad
    let edadInput = prompt("¿Cuántos años tienes?");
    
    // Verificar cancelación
    if (edadInput === null) {
        cancelarSimulador();
        return false;
    }
    
    edadUsuario = parseInt(edadInput);
    
    // Validar edad
    while (isNaN(edadUsuario) || edadUsuario < 1 || edadUsuario > 120) {
        alert("⚠️ Por favor, ingresa una edad válida");
        edadInput = prompt("¿Cuántos años tienes?");
        
        // Verificar cancelación en el loop
        if (edadInput === null) {
            cancelarSimulador();
            return false;
        }
        
        edadUsuario = parseInt(edadInput);
    }
    
    console.log(`Edad: ${edadUsuario} años`);
    
    // Mensaje de bienvenida personalizado
    if (edadUsuario < 13) {
        alert(`Hola ${nombreUsuario}! Recuerda jugar con supervisión de un adulto 👨‍👩‍👧`);
    } else if (edadUsuario >= 13 && edadUsuario < 18) {
        alert(`Bienvenido ${nombreUsuario}! Algunos juegos pueden requerir autorización parental 🎮`);
    } else {
        alert(`Bienvenido ${nombreUsuario}! Explora todo nuestro catálogo 🚀`);
    }
    
    return true;
}

// ========================================
// FUNCIÓN 2: PROCESAR PREFERENCIAS (PROCESAMIENTO)
// ========================================

function procesarPreferencias() {
    console.log("\n--- PASO 2: Procesamiento de Preferencias ---");
    
    // Selección de género
    let opcionGenero = prompt(
        "Selecciona tu género de juego favorito:\n\n" +
        "1 - Acción\n" +
        "2 - Aventura\n" +
        "3 - RPG\n" +
        "4 - Deportes\n" +
        "5 - Estrategia\n\n" +
        "Ingresa el número de tu opción:"
    );
    
    // Verificar cancelación
    if (opcionGenero === null) {
        cancelarSimulador();
        return false;
    }
    
    // Convertir a número y validar
    opcionGenero = parseInt(opcionGenero);
    
    // Condicionales para asignar género
    if (opcionGenero === 1) {
        generoPreferido = "Acción";
    } else if (opcionGenero === 2) {
        generoPreferido = "Aventura";
    } else if (opcionGenero === 3) {
        generoPreferido = "RPG";
    } else if (opcionGenero === 4) {
        generoPreferido = "Deportes";
    } else if (opcionGenero === 5) {
        generoPreferido = "Estrategia";
    } else {
        alert("⚠️ Opción no válida. Se asignará Aventura por defecto.");
        generoPreferido = "Aventura";
    }
    
    console.log(`Género preferido: ${generoPreferido}`);
    
    // Selección de plataforma
    let opcionPlataforma = prompt(
        "¿En qué plataforma juegas?\n\n" +
        "1 - PC\n" +
        "2 - PlayStation\n" +
        "3 - Xbox\n" +
        "4 - Nintendo Switch\n\n" +
        "Ingresa el número:"
    );
    
    // Verificar cancelación
    if (opcionPlataforma === null) {
        cancelarSimulador();
        return false;
    }
    
    // Switch para plataforma
    switch (parseInt(opcionPlataforma)) {
        case 1:
            plataforma = "PC";
            break;
        case 2:
            plataforma = "PlayStation";
            break;
        case 3:
            plataforma = "Xbox";
            break;
        case 4:
            plataforma = "Nintendo Switch";
            break;
        default:
            plataforma = "PC";
            alert("⚠️ Opción no válida. Se asignará PC por defecto.");
    }
    
    console.log(`Plataforma: ${plataforma}`);
    return true;
}

// ========================================
// FUNCIÓN 3: MOSTRAR RECOMENDACIONES (SALIDA)
// ========================================

function mostrarRecomendaciones() {
    console.log("\n--- PASO 3: Recomendaciones Personalizadas ---");
    
    let juegosRecomendados = [];
    
    // Seleccionar array según el género preferido
    if (generoPreferido === "Acción") {
        juegosRecomendados = juegosAccion;
    } else if (generoPreferido === "Aventura") {
        juegosRecomendados = juegosAventura;
    } else if (generoPreferido === "RPG") {
        juegosRecomendados = juegosRPG;
    } else if (generoPreferido === "Deportes") {
        juegosRecomendados = juegosDeportes;
    } else if (generoPreferido === "Estrategia") {
        juegosRecomendados = juegosEstrategia;
    }
    
    // Mostrar recomendaciones en consola
    console.log(`\n🎯 Recomendaciones de ${generoPreferido} para ${plataforma}:`);
    console.log("-".repeat(50));
    
    // Ciclo FOR para mostrar cada juego
    for (let i = 0; i < juegosRecomendados.length; i++) {
        console.log(`${i + 1}. ${juegosRecomendados[i]}`);
    }
    
    // Crear mensaje para alert
    let mensajeRecomendaciones = `🎮 ${nombreUsuario}, basándonos en tus preferencias:\n\n`;
    mensajeRecomendaciones += `Género: ${generoPreferido}\n`;
    mensajeRecomendaciones += `Plataforma: ${plataforma}\n\n`;
    mensajeRecomendaciones += `Te recomendamos estos juegos:\n\n`;
    
    // Ciclo WHILE para agregar juegos al mensaje
    let contador = 0;
    while (contador < juegosRecomendados.length) {
        mensajeRecomendaciones += `⭐ ${juegosRecomendados[contador]}\n`;
        contador++;
    }
    
    // Mostrar en alert
    alert(mensajeRecomendaciones);
    return true;
}

// ========================================
// FUNCIÓN 4: CALCULAR PRESUPUESTO
// ========================================

function calcularPresupuesto() {
    console.log("\n--- PASO 4: Cálculo de Presupuesto ---");
    
    let deseaCalcular = confirm("¿Deseas calcular tu presupuesto para juegos?");
    
    if (deseaCalcular) {
        let presupuestoInput = prompt("¿Cuál es tu presupuesto mensual para juegos? (en $)");
        
        // Verificar cancelación
        if (presupuestoInput === null) {
            cancelarSimulador();
            return;
        }
        
        presupuesto = parseFloat(presupuestoInput);
        
        // Validar presupuesto
        while (isNaN(presupuesto) || presupuesto < 0) {
            alert("⚠️ Por favor, ingresa un monto válido");
            presupuestoInput = prompt("¿Cuál es tu presupuesto mensual? (en $)");
            
            // Verificar cancelación en el loop
            if (presupuestoInput === null) {
                cancelarSimulador();
                return;
            }
            
            presupuesto = parseFloat(presupuestoInput);
        }
        
        console.log(`Presupuesto ingresado: $${presupuesto}`);
        
        // Verificar si es estudiante para aplicar descuento
        let esEstudiante = confirm("¿Eres estudiante? (Obtendrás 15% de descuento)");
        
        let presupuestoFinal = presupuesto;
        
        if (esEstudiante) {
            let descuento = presupuesto * DESCUENTO_ESTUDIANTE;
            presupuestoFinal = presupuesto + descuento;
            
            console.log(`¡Descuento estudiantil aplicado!`);
            console.log(`Descuento: $${descuento.toFixed(2)}`);
            console.log(`Presupuesto con descuento: $${presupuestoFinal.toFixed(2)}`);
            
            alert(
                `🎓 ¡Descuento estudiantil aplicado!\n\n` +
                `Presupuesto original: $${presupuesto.toFixed(2)}\n` +
                `Descuento (15%): $${descuento.toFixed(2)}\n` +
                `Presupuesto final: $${presupuestoFinal.toFixed(2)}`
            );
        } else {
            console.log(`Presupuesto final: $${presupuestoFinal.toFixed(2)}`);
        }
        
        // Calcular cantidad de juegos que puede comprar
        const PRECIO_PROMEDIO_JUEGO = 60;
        let cantidadJuegos = Math.floor(presupuestoFinal / PRECIO_PROMEDIO_JUEGO);
        
        console.log(`Juegos que puedes comprar (aprox.): ${cantidadJuegos}`);
        
        if (cantidadJuegos === 0) {
            alert("💡 Consejo: Considera ahorrar un poco más o buscar juegos en oferta!");
        } else if (cantidadJuegos === 1) {
            alert(`Con tu presupuesto podrías comprar aproximadamente ${cantidadJuegos} juego AAA`);
        } else {
            alert(`Con tu presupuesto podrías comprar aproximadamente ${cantidadJuegos} juegos AAA`);
        }
    } else {
        console.log("Usuario decidió no calcular presupuesto");
        alert("¡No hay problema! Puedes volver cuando quieras 😊");
    }
    
    // Mensaje final (solo si no se canceló)
    if (!simuladorCancelado) {
        console.log("\n" + "=".repeat(50));
        console.log("✅ SIMULADOR FINALIZADO");
        console.log("=".repeat(50));
        console.log(`Gracias ${nombreUsuario} por usar nuestro simulador!`);
        
        alert(`¡Gracias ${nombreUsuario}! 🎮\n\n¡Diviértete jugando!`);
    }
}

// ========================================
// EVENTO CLICK PARA INICIAR EL SIMULADOR
// ========================================

// Esperar a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    const btnIniciar = document.getElementById("btnIniciar");
    
    if (btnIniciar) {
        btnIniciar.addEventListener("click", iniciarSimulador);
    }
    
    console.log("✅ Simulador cargado. Presiona el botón 'Iniciar Simulador' para comenzar.");
});
