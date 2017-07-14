var num = 1;
document.getElementById("text").placeholder = "Escreva um texto com no máximo 140 carctéres"
function putText(){
	const name = document.getElementById("name").value;
	const texto = document.getElementById("text").value;
	const textoExistente = document.getElementById("texto").innerHTML;
	const c = document.getElementById('checkBox');
	var textoPadrao = textoExistente + "<span class='label label-default'>"+name+":</span>'"+texto+"'</br>";
	if (c.checked) {
    	num = num+1;
    	document.getElementById("texto").innerHTML = textoPadrao + "<h1>Texto "+num+"</h1></br>" 

  } else { 
    document.getElementById("texto").innerHTML = textoPadrao;
  }
}

function clearText(){
	const texto = document.getElementById("text").value = "";
}

function countChars(countfrom,displayto) {
  var len = document.getElementById(countfrom).value.length;
  document.getElementById(displayto).innerHTML = len;
}