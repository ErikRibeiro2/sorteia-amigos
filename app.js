//armazena os valores dos nomes digitados
let listaAmigos = [];
let botao = false;



//pega o valor digitado no input e adiciona na lista de amigos
function adicionarAmigo()
{
   let entradaNomeAmigo = document.querySelector("#amigo").value; //pega o valor digitado no campo

   if (entradaNomeAmigo.length <= 0) { //verifica se o valor é válido
      alert("O campo 'Nome do amigo' deve estar preenchido!");
   }
   else {
      listaAmigos.push(entradaNomeAmigo); // atribui o valor a lista de amigos
      console.log(listaAmigos);
      document.getElementById("amigo").value = ""; //limpa o campo de entrada
      adicionaLista(entradaNomeAmigo);

      if (!botao) {
         document.getElementById("botaoSorteio").removeAttribute("disabled");
         botao = true;
      }
   }
}

function adicionaLista(nomeAmigo)
{
   let li = document.createElement("li");
   let ul = document.querySelector("#listaAmigos");
   let nome = document.createTextNode(nomeAmigo);
   li.appendChild(nome);
   ul.appendChild(li);
}

function sortearAmigo()
{
   if (listaAmigos.length < 2) {
      alert("É preciso ter no minimo 2 participantes.");
   } else {
      let indice = Math.floor(Math.random() * listaAmigos.length);
      

      document.getElementById("listaAmigos").innerHTML = "";
      document.getElementById("resultado").innerHTML = "";

      let liResultado = document.createElement("li");
      let textoResultado = document.createTextNode(`Sorteado: ${listaAmigos[indice]}`);
      let ul = document.getElementById("resultado");
      liResultado.appendChild(textoResultado);
      ul.appendChild(liResultado);
   }
   
}