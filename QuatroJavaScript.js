function inserirDados() {


    var vetor = []; // cria um vetor vazio

    for (var i = 0; i < 5; i++) {
      // solicita cinco números e adiciona no vetor
      var numero = prompt("Digite um número:");
      vetor.push(numero);
    }

    document.getElementById("resultado").innerHTML = "O valor inserido na terceira posição deste vetor é: " + vetor[2] + ".";
   
}


