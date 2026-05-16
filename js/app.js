document.addEventListener('DOMContentLoaded', () => {
    
    const boton = document.getElementById('btn-resultados');
    
    boton.addEventListener('click', () => {
        
        // 1. Mapear valores del bloque 1 (Animales -> Prioridades)
        document.getElementById('res_carrera').value = document.getElementById('vaca').value;
        document.getElementById('res_orgullo').value = document.getElementById('tigre').value;
        document.getElementById('res_amor').value    = document.getElementById('oveja').value;
        document.getElementById('res_familia').value  = document.getElementById('caballo').value;
        document.getElementById('res_dinero').value   = document.getElementById('mono').value;

        // 2. Mapear valores del bloque 2 (Conceptos -> Significado Vida)
        document.getElementById('res_yo_soy').value  = document.getElementById('perro').value;
        document.getElementById('res_pareja').value  = document.getElementById('gato').value;
        document.getElementById('res_odio').value    = document.getElementById('rata').value;
        document.getElementById('res_sexo').value    = document.getElementById('cafe').value;
        document.getElementById('res_vida').value    = document.getElementById('mar').value;

        // 3. Mapear valores del bloque 3 (Colores -> Personas)
        document.getElementById('res_nunca').value   = document.getElementById('amarillo').value;
        document.getElementById('res_amigo').value   = document.getElementById('naranja').value;
        document.getElementById('res_alma').value    = document.getElementById('blanco').value;
        document.getElementById('res_amas').value    = document.getElementById('rojo').value;
        document.getElementById('res_memoria').value = document.getElementById('verde').value;

        // 4. Cambiar la estructura de la cuadrícula para dar cabida a 3 columnas en pantallas grandes
        // (45% Formulario, 10% Flecha, 45% Resultados)
        const contenedor = document.getElementById('contenedor-principal');
        contenedor.classList.remove('grid-cols-1');
        contenedor.classList.add('md:grid-cols-[1fr_auto_1fr]');

        // 5. Mostrar la flecha intermedia removiendo la clase 'hidden'
        const bloqueFlecha = document.getElementById('bloque-flecha');
        bloqueFlecha.classList.remove('hidden');
        bloqueFlecha.classList.add('flex');

        // 6. Mostrar la sección de resultados
        const seccionResultados = document.getElementById('seccion-resultados');
        seccionResultados.classList.remove('hidden');
    });
});
