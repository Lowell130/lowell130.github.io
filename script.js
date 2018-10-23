    /* GET GOOGLE SHEET DATA */
    // ID of the Google Spreadsheet
    var spreadsheetID = "1jmXKA6WCECNBTA9_zF22ZppJpQ28MHuJiu5-kvpYrB0";
    // Make sure it is public or set to Anyone with link can view 
    var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/1/public/values?alt=json"; //this is the part that's changed
    var acronimi = [];
    var titles = [];
    $.getJSON(url, function (data) {
      var entry = data.feed.entry;
      $(entry).each(function () {
        acronimi.push(this.gsx$acronimo.$t);
      });
      $(entry).each(function () {
        titles.push(this.gsx$title.$t);
      });
      converter(acronimi, titles);
    });
    /* CONVERTER */
    function converter(acronimi, titles) {
      var element = "textarea";
      var button = "button";
      var len = acronimi.length;
      var el = document.querySelector(element);
      button = document.querySelector(button);
      button.addEventListener("click", function () {
        var html = el.value;
        for (var i = 0; i < len; i++) {
			
			acronimi[i].replace(".", "\\.");
			console.log(acronimi[i]);
          var re = new RegExp('(?<!<[^>]*)\\b(' + acronimi[i] + ')\\b', 'i');
          html = html.replace(re, '<abbr title="' + titles[i] + '">$1</abbr>');
        }
        el.value = html;
      })
    }
	$('#acronymAddTag').click(function() {
		$(this).prop('disabled', true);
	});
	
	$('#acronymReset').click(function() {
		$('#acronymAddTag').prop('disabled', false);
	});
