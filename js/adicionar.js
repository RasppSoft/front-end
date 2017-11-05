var _valor;

window.onload = function() {
	_valor = parseInt(document.getElementById("valor").value || "0");
}

function adicionaValor() {
	var radios = document.getElementsByName("valor");
	
	for (var i=0, length=radios.length; i<length; i++) {
		if (radios[i].checked) {
			var somar = parseInt(radios[i].value);
			_valor += somar;
			
			document.getElementById("valor").innerHTML = _valor;
			
			var newElement = document.createElement("tr");
			newElement.innerHTML = "<td>R$ "+somar+",00</td><td>1</td>";
			document.getElementById("itens_compra").appendChild(newElement);
			
			document.getElementById("valor2").innerHTML = _valor;
			
			break;
		}
	}
}