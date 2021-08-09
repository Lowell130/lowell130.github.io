var btnState = '';
function pr() {
  title = document.getElementById('titleInter').value.replace(/[^a-zA-Z0-9]/g, "");

  var urlPath = document.getElementById('allegatoPt');
  var textUrl = urlPath.options[urlPath.selectedIndex].text;

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
  newContent += '<a title="Apertura in nuova scheda" href="' + textUrl + url.trim() + '" target="_blank" rel="noopener" aria-label="' + title + ' (PDF, ' + size.trim() + ') - Apertura in nuova scheda">' + title.trim() + '</a>';
  newContent += '<br />';
  newContent += start.trim() + '<br />';
  newContent += end.trim();
  newContent += '</li>';



  var el = document.getElementById('result');
  el.textContent = newContent;


}



// pr();
