//pega o botão do html
var btnEnviar = document.querySelector('#enviar');

//adiciona um evento ao objeto, passando o tipo de evento e o callback
btnEnviar.addEventListener("click", function(event) {

  //getting values
  var conta = {
    nome: document.querySelector('#nomeDaConta').value,
    valor: document.querySelector('#valorDaConta').value,
    tipo: document.querySelector('#tipoConta').value
  }

  //check wich is the best option in the table.
  if (conta.tipo == 'credito') {
    var tabela = document.querySelector('#ativos');
    console.log(tabela);
  } else {
    if (conta.tipo == 'debito') {
      var tabela = document.querySelector('#passivos');
      console.log(tabela);
    } else {
      var tabela = document.querySelector('#patrimonioLiquido');
      console.log(tabela);
    }
  }

  //create td's tag on the table
  var tdNome = document.createElement('td');
  tdNome.textContent = conta.nome;
  var tdValor = document.createElement('td');
  tdValor.textContent = conta.valor;
  var tdTipoConta = document.createElement('td');
  tdTipoConta.textContent = conta.tipo;
  console.log(tdTipoConta);

  //create tr's tag on the table
  var trConta = document.createElement('tr');
  trConta.appendChild(tdNome);
  trConta.appendChild(tdValor);
  //trConta.appendChild(tdTipoConta);

  //insert into correct table
  tabelaBody = tabela.querySelector('tbody');
  tabelaBody.appendChild(trConta);

  //insert partial value on parcial field
  var valorParcial = tabela.querySelector('#parcial');
  valorParcial.textContent = parseFloat(valorParcial.textContent) + parseFloat(conta.valor);



});
