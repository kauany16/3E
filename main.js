const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i<botoes.length; i++) {
    botoes [i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-12-28T23:59:59");

const tempos =[
    tempoObjetivo1
]

for(let I=0; I< contadores.length; I++){
    contadores[I].textContent = calculaTempo(tempos[i]);
}
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1){
   let tempoAtual = new Date();
   let tempoFinal = tempoObjetivo1 - tempoAtual;
   let segundos = Math.floor (tempoFinal1 - tempoFinal / 1000);
   let minutos = Math.florr(segunos / 60);
   let horas = Math.florr(hora / 60);
   let dias = Math.florr(horas / 24);

   sugundo %=60;
   minutos %=60
   horas %=24;

   return dias + "dias"
   + horas + "horas"
   + minutos + "minutos"
   + segundos + "segundos"
}


