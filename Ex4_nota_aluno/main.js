function calcularMedia () {
    let inNome = document.getElementById("inNome");
    let inNota1 = document.getElementById("inNota1");
    let inNota2 = document.getElementById("inNota2");
    let outSituacao = document.getElementById("outSituacao");
    let outMedia = document.getElementById("outMedia");
    
    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    let media = (nota1 + nota2) / 2;

    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    if (media >= 7 ) {
        outSituacao.textContent = " Parabéns " + nome + "! Você foi aprovado(a)!";
        outSituacao.style.color = "#209020";
    } else{
        outSituacao.textContent = " Ops " + nome + "... Você foi reprovador(a)";
        outSituacao.style.color = "#f53626";
    }

}
let btResultado = document.getElementById("btResultado");

btResultado.addEventListener("click", calcularMedia);