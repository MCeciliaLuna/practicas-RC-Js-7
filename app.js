const proyectName = 'Js 7'
console.log(proyectName)

const persona = {
  altura: '180cm',
  edad: 27,
  sexo: 'Masculino',
  esMayorDeEdad: true
}

const lista = [
  {
    nombre: 'Nicolás',
    edad: 27
  },
  {
    nombre: 'Ceci',
    edad: 24
  },
  {
    nombre: 'Luis Mi',
    edad: 29
  }
]

console.log(lista)

//---------------------

const saludoIndividual = (lista) => {
  const alumnoLista = lista.find(alumno => alumno.nombre === 'Ceci')
  const saludando = `Hola ${alumnoLista.nombre}, tenés ${alumnoLista.edad} años<br>`
  document.write(saludando)
}
saludoIndividual(lista)


// const edad = parseInt(prompt('Ingrese la edad buscada'))
// const saludoAlumnos = (lista,edad) => {
//   const alumnosBuscados = lista.filter(lista => lista.edad === edad)
//   alumnosBuscados.map(alumnoEncontrado => document.write(alumnosBuscados.nombre, alumnosBuscados.apellido, alumnoEncontrado.edad))
// }
// saludoAlumnos(lista,edad)

const edad = parseInt(prompt('Ingrese la edad'))

const saludoAlumnos = (lista, edad) => {
  const alumnosBuscados = lista.filter(lista => lista.edad === edad)
  alumnosBuscados.map(alumnoEncontrado => document.write('Nombre alumno:', alumnoEncontrado.nombre, '<br>'))
}
saludoAlumnos(lista, edad)

//---------------------


const listaFiltradaFilter = lista.filter(item => item.edad > 25)
console.log('Filtro mayores de 25:', listaFiltradaFilter)

const listaFiltradaFind = lista.find(item => item.edad === 24)
console.log('Filtro personas de 24:', listaFiltradaFind)

const listaFiltradaSome = lista.some(item => item.nombre === 'Luis Mi' && item.apellido === item.apellido === 'Barthaburu')
console.log(listaFiltradaSome)

const listaFiltradaSort = lista.sort((b,a) => a.edad - b.edad)
console.log(listaFiltradaSort)


//FUNCION NORMAL
function saludo () {
  const saludar = 'Hola comisión'
  console.log(saludar)
}
saludo()

//FUNCIÓN FLECHA
const saludo2 = () => {
  const saludar2 = 'Hola comisión función flecha'
   console.log(saludar2)
 } 
saludo2()

const saludo3 = (nombre,edad) => {
  const saludarr = `Hola comisión, soy ${nombre} y tengo ${edad} años`
  console.log(saludarr)
}
saludo3(27, 'Nicolás')


const persona1 = {
  nombre: 'Nicolás',
  edad: 27
}

const saludo4 = (persona1) => {
  const saludarrr = `Hola comisión 24i, soy ${persona1.nombre} y tengo ${persona1.edad} años`
  console.log(saludarrr)
}
saludo4(persona1)

const saludo5 = (persona1) => {
  const saludarrrr = `Hola comisión 24i, soy ${persona1.nombre} y tengo ${persona1.edad} años`
  return saludarrrr
}
saludo5(persona1)
const resultadoSaludo = saludo5(persona1)
console.log(resultadoSaludo)

const saludo6 = (persona1) => {
  const saludarrrr = `Hola comisión 24i, soy ${persona1.nombre} y tengo ${persona1.edad} años`
  document.write(saludarrrr)
}
saludo6(persona1)

const saludo7 = (persona1) => {
  const saludarrrrr = `Hola comisión 24i, soy ${persona1.nombre} y tengo ${persona1.edad} años`
  return saludarrrrr
}
const returnSaludo7 = saludo7(persona1)
document.write('<br>', returnSaludo7)

//

const sumar = () => {
  const resultado = 123 + 456
  console.log(resultado)
}
sumar()

const sumar2 = (num1,num2) => {
  const resultado = num1 + num2
  console.log(resultado)
}
sumar2(100,500)

//

const persona2 = {
  nombre: 'Yo',
  edad: 27
}

const saludar7 = (persona2) => {
  if(!persona2.nombre){
  return alert('El nombre es obligatorio')
  }
  const saludar7 = `<br>Hola comisión 24i, soy ${persona2.nombre} y tengo ${persona2.edad} años`
  return saludar7
}

const returnSaludo = saludar7(persona2)
document.write(returnSaludo)