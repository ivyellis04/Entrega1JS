  // Función preguntar de nombre

  alert('Hola, hola, te damos la bienvenida a este sitio blanco en el internet');

  let nombre;
  
  do {
    nombre = prompt('¿Cuál es tu nombre?');
  
    if (!esNombreValido(nombre)) {
      alert('Por favor, ingresa un nombre válido que solo contenga letras.');
    }
  } while (!esNombreValido(nombre));
  
  obtenerInformacionAdicional(nombre);

  
  // Función para obtener información adicional
  function obtenerInformacionAdicional(nombre) {
    let autoSuenos = prompt(nombre + '! Cuéntame, ¿cuál es el auto de tus sueños?');
    let trabajo = prompt('Además, ¿en qué industria trabajas?');
    let salario = parseFloat(prompt('¿Cuánto ganas al mes en tu trabajo?'));
    console.log('Tu salario aproximado es de:', salario);
}
  
    if (isNaN(salario)) {
      alert('Por favor, ingresa un salario válido.');
      obtenerInformacionAdicional(nombre);
      return;
    }
  
    let tipoAuto = esAutoEconomico(autoSuenos);
    if (esSalarioSuficiente(salario)) {
        console.log('El salario es suficiente para comprar el auto.');
        alert('¡Genial, ' + nombre + '! Trabajas en una industria que te permite alcanzar tu sueño de tener un auto ' + tipoAuto + '. ¡Felicidades!');
      } else {
        console.log('El salario no es suficiente para comprar el auto.');
        alert('Lo siento, ' + nombre + '. Con un salario de ' + salario + ' al mes, puede que sea difícil comprar tu auto de ensueño. ¡Sigue trabajando duro!');
      }
  


////Inicio con pregunta del nombre (solo letras)
function esNombreValido(nombre) {
    return /^[a-zA-Z]+$/.test(nombre);
  }
  
  // Función para validar si el salario es suficiente 
  function esSalarioSuficiente(salario) {
    return salario > 2000;
  }
  
  // Función para determinar si el modelo de auto es económico o caro
  function esAutoEconomico(auto) {
    // Lista autos económicos
    let modelosEconomicos = ['Toyota', 'Honda Civic', 'Volkswagen', 'Ford', 'Hyundai'];
  
    // Lista autos caros 
    let modelosCaros = ['Tesla', 'Mercedes Benz', 'BMW', 'Audi', 'Porsche'];
  
    // Verificar el resultado 
    if (modelosEconomicos.includes(auto)) {
      return 'económico';
    } else if (modelosCaros.includes(auto)) {
      return 'caro';
    } else {
      return 'desconocido';
    }
  }


  