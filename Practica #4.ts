class Persona {
  constructor(public nombre: string, public fechaNacimiento: Date) {}
}

function calcularEdad(fechaNacimiento: Date): number {
  const hoy = new Date();
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const mes = hoy.getMonth() - fechaNacimiento.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }
  return edad;
}

const personas = [
  new Persona("Shadow", new Date("2001-06-19")),
  new Persona("Silver", new Date("2002-04-05")),
  new Persona("Sonic", new Date("1991-06-23"))
];



