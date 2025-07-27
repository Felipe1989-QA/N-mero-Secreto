alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 5000

//Guarda a informação do número secreto
let numerosecreto = parseInt(Math.random() * 100+1);
//exibe prompt para usuário inserir o seu chute
let chute 
let Tentativas = 2;

//Enquanto o chute não for igual ao número secreto
while(chute != numerosecreto){
    
    chute = prompt (`Digite um número de 1 á ${numeroMaximo}`);
    //Exibe uma mensagem caso o usuário tenha acertado
if (chute == numerosecreto) {
    break;
} else{

    if (chute > numerosecreto){alert(`O número secreto é menor  que ${chute}`);
} else
    alert(`O número secreto é maior  que ${chute}`);
    Tentativas++;
}

}

let palavratentativa = Tentativas >1? "Tentativas" : "Tentativa";
alert(`Isso aí, você descobriu o número secreto ${numerosecreto} com ${Tentativas} ${palavratentativa}`)
//if(Tentativas > 1){
//alert(`Isso aí, você descobriu o número secreto ${numerosecreto} com ${Tentativas} Tentativas.`)

//}else{
    //alert(`Isso aí, você descobriu o número secreto ${numerosecreto} com ${Tentativas} Tentativa.`)




