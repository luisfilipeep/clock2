function clock () {
const areaDoRelogio = document.querySelector(".relogio");
const horaAgora = new Date ();
const horas = horaAgora.getHours ();
const minutes = horaAgora.getMinutes ();
const seconds = horaAgora.getSeconds ();
const formatoHoras = horas.toString ().padStart (2, "0"); 
const formatoMinutes = minutes.toString ().padStart (2, "0");
const formatoSeconds = seconds.toString ().padStart (2, "0");

areaDoRelogio.textContent = `${formatoHoras}:${formatoMinutes}:${formatoSeconds}` 

const frase = document.querySelector('.frase')
//Array é um arranjo, ou estrutura de dados onde armazenamos uma coleção de elementos.
dia = new Array ("domingo","segunda-feira", "terça-feira","Quarta-feira","quinta-feira","sexta-feira","sábado");
mes = new Array ("janeiro","fevereiro", "março","abril","maio","junho","julho","agosto","setembro", "outubro","novembro","dezembro");
hoje = new Date ();

frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate(). toString().padStart(2, 0)} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}`








} 

setInterval(clock, 1000)
