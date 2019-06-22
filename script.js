const contactos = [
  {nombre:"Wences", telefono: "55555555"},
  {nombre:"Cesar", telefono: "222222222"},
  {nombre:"Monse", telefono: "55555555"},
  {nombre:"Efrain", telefono: "222222222"},
  {nombre:"Gaby", telefono: "55555555"},
  {nombre:"Uriel", telefono: "222222222"},
];

const buscador = document.querySelector('.buscador');
buscador.addEventListener('change', function(e){
  console.log(e.target.value);
  const contactosFiltrados = contactos.filter(contacto => {
    return contacto.nombre.toLowerCase().includes(e.target.value.toLowerCase());
  });
  const contactosLista = document.querySelector('.contactos');
const contactosLi = contactosFiltrados.map(contacto => {
    return `<li>${contacto.nombre} - ${contacto.telefono}</li>`;
  });
  contactosLista.innerHTML = contactosLi;
});

const contactosLista = document.querySelector('.contactos');
const contactosLi = contactos.map(contacto => {
    return `<li>${contacto.nombre} - ${contacto.telefono}</li>`;
  });
  contactosLista.innerHTML = contactosLi;

const formulario = document.querySelector('.nuevo_contacto');
formulario.addEventListener('submit', function(e){
  e.preventDefault();
  contactos.push({
    nombre: e.target.nombre.value, 
    telefono: e.target.telefono.value
  });
  const contactosLista = document.querySelector('.contactos');
  /*let contactosItems = '';
  contactos.forEach(contacto => {
    contactosItems += `<li>${contacto.nombre} - ${contacto.telefono}</li>`
  })*/
  const contactosLi = contactos.map(contacto => {
    return `<li>${contacto.nombre} - ${contacto.telefono}</li>`;
  });
  contactosLista.innerHTML = contactosLi;
});
