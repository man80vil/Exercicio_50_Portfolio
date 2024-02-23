/* CREAMOS OBJETO dioses____ "clave":"valor"*/

let dioses = {
 "Lunes":
 {
"deus":" Wellcome to the Jungle.",
"descrición":"Hola, soy Manuel, estás en mi portfolio",
"wellcome" : "Soy frontend-developper. Trabajo con HTML, CSS, Js.",
"vacio" : " No quiero que mi foto pulule por internet.Si me quieres ver, me llamas."
 },
 // Os outros dias van aquí
 "Martes":
 {
    "deus":"MANUEL VILANOVA CASAL",
    "descrición": "Vivo en Brión, a las afueras de Santiago de Compostela",
    "estado" : "Estado civil: Felizmente soltero",
    "edad" : " Edad: No te lo digo."
 },
 "Miércoles":
 {
    "deus": "Curso de:",
    "descrición": " CONFECCION E PUBLICACION DE PAXINAS WEB .",
    "duracion":"(Septiembre 2023-Abril 2024)",
    "nivel" : "Nivel real: Básico, estoy empezando."
    },
 "Jueves":
 {
    "deus": " trabajos, meritos, premios",
    "segundo":"1º:La página web del buscador de peliculas: movieApps-Exercicio_37",
    "tercero":" 2º:La página web de coches-Proba E1-UF1305",
    "cuarto":" 3º:La página  web Mike fotografia-Proba UF1306 "
 },
 "Viernes":
 {
"deus": "Correo: manuelvilanova4@gmail.com ",
"descrición": "Telefono Movil: 607949379 ",
"redesSociales" : "Adress: Avenida Santa Minia nº 62-BRIÓN  c.p:15865",
"otraRed" : `no estoy en facefook<a href="#"><img src="../assets/facebook.png" alt="icono de facebook" width="30px"></a>`,
"otraRedGithub" : `estoy en Github:pulsa:<a href="https://github.com/man80vil"><img src="../assets/github.png" alt="icono de github" width="30px"></a>`,
"otraRedLinkedin": `este enlace no está util<a href="#"><img src="../assets/linkedin.png" alt="icono de linkedin" width="30px"></a>`,
},
"Sábado":
{
"deus": " Sábado ",
"teleMañana": " mañana-dibujos animados: Tom y Jerry  ",
"teleTarde": "tarde: Los bingueros (Pajares y Esteso) ",
"teleNoche": "noche: El diablo sobre ruedas-Steven Spilberg"
},
"Domingo":
{
    "deus": " Domingo ",
    "mañana":"Por la mañana__levantarme ",
    "mediodia":"mediodía__comer ",
    "tarde":"a la tarde__pasear"
 }

}

//----------------------------------------------------------------------------------

let diosesH3 = document.getElementById("diosesH3");
let diosesP = document.getElementById("diosesP");
let diosesQ = document.getElementById("diosesQ");
let diosesR = document.getElementById("diosesR");



//----------------------------------------------------------------------------------

function resultado(dia){
switch (dia) {
 case "Lunes":
 diosesH3.textContent = dioses.Lunes.deus;
 diosesP.textContent = dioses.Lunes.descrición;
 diosesQ.textContent = dioses.Lunes.wellcome;
 diosesR.textContent = dioses.Lunes.vacio;
 break;
 case "Martes":
 diosesH3.textContent = dioses.Martes.deus; /*Martes-funciona-comprobado*/
 diosesP.textContent = dioses.Martes.descrición;
 diosesQ.textContent = dioses.Martes.estado;
 diosesR.textContent = dioses.Martes.edad;
 break;
 case "Miercoles":
 diosesH3.textContent = dioses.Miércoles.deus; /*Miercoles-funciona-comprobado*/
 diosesP.textContent = dioses.Miércoles.descrición;
 diosesQ.textContent = dioses.Miércoles.duracion;
 diosesR.textContent = dioses.Miércoles.nivel;
 break;
 case "Jueves":
 diosesH3.textContent = dioses.Jueves.deus; /*Jueves-funciona-comprobado*/
 diosesP.textContent = dioses.Jueves.segundo;
 diosesQ.textContent = dioses.Jueves.tercero;
 diosesR.textContent = dioses.Jueves.cuarto;
 break;
 case "Viernes":
 diosesH3.textContent = dioses.Viernes.deus; /*Viernes-funciona-comprobado*/
 diosesP.textContent = dioses.Viernes.descrición;
 diosesQ.textContent = dioses.Viernes.redesSociales;
 diosesR.innerHTML = dioses.Viernes.otraRed + dioses.Viernes.otraRedGithub + dioses.Viernes.otraRedLinkedin ;
 /*recordar lo anterior para ver como introducimos las imágenes en el codigo */ 
 break;
 case "Sábado":
 diosesH3.textContent = dioses.Sábado.deus; /*Sabado-funciona-comprobado*/
 diosesP.textContent = dioses.Sábado.teleMañana;
 diosesQ.textContent = dioses.Sábado.teleTarde;
 diosesR.textContent = dioses.Sábado.teleNoche;

 break;
 case "Domingo":
 diosesH3.textContent = dioses.Domingo.deus; /*domingo-funciona-comprobado*/
 diosesP.textContent = dioses.Domingo.mañana;
 diosesQ.textContent = dioses.Domingo.mediodia;
 diosesR.textContent = dioses.Domingo.tarde;
 

}
}
