var btnState = '';
function pr() {
  title = document.getElementById('titleInter').value;
  url = document.getElementById('allegato').value;
  size = document.getElementById('pesoAllegato').value;
  start = document.getElementById('start').value;
  end = document.getElementById('end').value;
  btnState = document.getElementById('btn');
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
 
 

  // Example starter JavaScript for disabling form submissions if there are invalid fields


  var newContent = '';
  //  variabili per la costruzione
  newContent += '<li class="pb-3">';
  newContent += '<a title="Apertura in nuova scheda" href="' + url + '" target="_blank" rel="noopener" aria-label="' + title + ' (PDF, ' + size + ') - Apertura in nuova scheda">' + title + '</a>';
  newContent += '<br />';
  newContent += 'Data di pubblicazione: ' + start + '<br />';
  newContent += 'Data scadenza: ' + end;
  newContent += '</li>';



  var el = document.getElementById('result');
  el.textContent = newContent;

  
}



// pr();
