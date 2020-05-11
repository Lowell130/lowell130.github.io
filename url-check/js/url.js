"use strict";
function metaExtract() {
	var grabUrl
	grabUrl = document.getElementById('url').value;
	var url
	url = grabUrl;
	if (!url.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)) {

		$(document).ready(function () {
			document.getElementById('alert').innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
			<h4 class="alert-heading">Ops URL not correct!!!!</h4>
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
				that you can see how spacing within an alert works with this kind of content.</p>
			<hr>
			<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
		</div>`;
			setTimeout(function () {
				$(".alert").alert('close');
			}, 2000);
		});

	

	} else {
		$.ajax({
			url: 'https://api.codetabs.com/v1/proxy?quest=' + grabUrl,
			type: "GET",
			cache: false,
			dataType: "html",
			async: true,
			success: function (data) {


				var title
				// var description				
				var author



				var fbogImage				
				var fbTitle
				var ogDescription
				var ogUrl
				


				var checkImg

				// estrae nome dominio
				var urlCheck = grabUrl;
				var urlParts = urlCheck.replace('http://', '').replace('https://', '').split(/[/?#]/);
				var domain = urlParts[0];



				document.getElementById('domain').innerHTML = domain;

				title = data.match("<title>(.*?)</title>")[1];
				if (title == null) {
					document.getElementById('tit').innerHTML = 'Non è possibile recuperare il titolo';
				} else {
					document.getElementById('tit').innerHTML = title;
				}



				ogUrl = $(data).filter('meta[property="og:url"]').attr("content");
				if (ogUrl == null) {
					document.getElementById('ogurl').innerHTML = 'Non è possibile recuperare la descrizione';

				} else {
					document.getElementById('ogurl').innerHTML = `<a href="`+ogUrl+`">`+ogUrl+`</a>`;
					
				}











				fbTitle = $(data).filter('meta[property="og:title"]').attr("content");
				if (fbTitle == null) {
					document.getElementById('ogtitle').innerHTML = 'Non è possibile recuperare la descrizione';

				} else {
					document.getElementById('ogtitle').innerHTML = fbTitle;
				}


			


				ogDescription = $(data).filter('meta[property="og:description"]').attr("content");
				if (ogDescription == null) {
					document.getElementById('ogdesc').innerHTML = 'Non è possibile recuperare la descrizione';

				} else {
					document.getElementById('ogdesc').innerHTML = ogDescription;
				}

			


				author = $(data).filter('meta[name="author"]').attr("content");
				if (author == null) {
					document.getElementById('auth').innerHTML = 'Non è possibile recuperare nome autore';
				} else {
					document.getElementById('auth').innerHTML = author;
				}



				var tinyimg = 'https://tineye.com/search?pluginver=bookmark_1.0&url=';

				fbogImage = $(data).filter('meta[property="og:image"]').attr("content");
				if (fbogImage == null) {
					document.getElementById('img').innerHTML = 'Impossibile recuperare l\'immagine';
					checkImg = document.getElementById('checkimg').innerHTML = '';
				} else {
					document.getElementById('img').innerHTML = '<img width="250" src="' + fbogImage + '">';
					checkImg = document.getElementById('checkimg').innerHTML = '<small><a target="_blank" href="' + tinyimg + fbogImage + '">Verifica attendibilità immagine</a></small>';
				}

				


				var $progress = $('.progress');
				var $progressBar = $('.progress-bar');
				//$progress.css('display', 'block');
				
				
				setTimeout(function() {
					document.getElementById("progbar").className =
								document.getElementById("progbar").className.replace
									(/(?:^|\s)d-none(?!\S)/g, '')
				
				
					$progressBar.css('width', '10%');
					setTimeout(function() {
						$progressBar.css('width', '30%');
						setTimeout(function() {
							$progressBar.css('width', '100%');
							setTimeout(function() {
								$progress.css('display', 'none');
								document.getElementById("my-table").className =
								document.getElementById("my-table").className.replace
									(/(?:^|\s)d-none(?!\S)/g, '')
							}, 500); // WAIT 5 milliseconds
						}, 2000); // WAIT 2 seconds
					}, 1000); // WAIT 1 seconds
				}, 1000); // WAIT 1 second


				
							
								
				


				


			},
			fail: function () {
				console.log("Encountered an error");
			}
		});
	}
}

$('#send').click(metaExtract);
















	// var viewport = $(data).filter('meta[name="viewport"]').attr("content");
			// if (viewport == null) {
			// 	console.log('N/P');
			//  }

			// var docsearchLanguage = $(data).filter('meta[name="docsearch:language"]').attr("content");
			// if (docsearchLanguage == null) {
			// 	console.log('N/P');
			//  }

			//social twitter
			// var twitterCard = $(data).filter('meta[name="twitter:card"]').attr("content");
			// if (twitterCard == null) {
			// 	console.log('N/P');
			// }
			// var twitterSite = $(data).filter('meta[name="twitter:site"]').attr("content");
			// if (twitterSite == null) {
			// 	console.log('N/P');
			// }
			// var twitterCreator = $(data).filter('meta[name="twitter:creator"]').attr("content");
			// if (twitterCreator == null) {
			// 	console.log('N/P');
			// }
			// var twitterTitle = $(data).filter('meta[name="twitter:title"]').attr("content");
			// if (twitterTitle == null) {
			// 	console.log('N/P');
			// }
			// var twitterDescription = $(data).filter('meta[name="twitter:description"]').attr("content");
			// if (twitterDescription == null) {
			// 	console.log('N/P');
			// }
			// var twitterImage = $(data).filter('meta[name="twitter:image"]').attr("content");
			// if (twitterImage == null) {
			// 	console.log('N/P');
			// }
			// // 			// //social facebook
			// var ogUrl = $(data).filter('meta[property="og:url"]').attr("content");
			// if (ogUrl == null) {
			// 	console.log('N/P');
			// }
			// var ogTitle = $(data).filter('meta[property="og:title"]').attr("content");
			// if (ogTitle == null) {
			// 	console.log('N/P');
			// }
			// var ogDescription = $(data).filter('meta[property="og:description"]').attr("content");
			// if (ogDescription == null) {
			// 	console.log('N/P');
			// }
			// var ogType = $(data).filter('meta[property="og:type"]').attr("content");
			// if (ogType == null) {
			// 	console.log('N/P');
			// }
			// var ogImage = $(data).filter('meta[property="og:image"]').attr("content");
			// if (ogImage == null) {
			// 	console.log('N/P');
			// }
			// var ogImageSecure = $(data).filter('meta[property="og:image:secure_url"]').attr("content");
			// if (ogImageSecure == null) {
			// 	console.log('N/P');
			// }
			// var ogImageType = $(data).filter('meta[property="og:image:type"]').attr("content");
			// if (ogImageType == null) {
			// 	console.log('N/P');
			// }
			// var ogImgWidth = $(data).filter('meta[property="og:image:width"]').attr("content");
			// if (ogImgWidth == null) {
			// 	console.log('N/P');
			// }
			// var ogImgHeight = $(data).filter('meta[property="og:image:height"]').attr("content");
			// if (ogImgHeight == null) {
			// 	console.log('N/P');
			// }
			//console.log(title);
			// console.log(docsearchLanguage);
			// console.log(twitterCard);
			// console.log(twitterSite);
			// console.log(twitterCreator);
			// console.log(twitterTitle);
			// console.log(twitterDescription);
			// console.log(twitterImage);
			// console.log(ogUrl);
			// console.log(ogTitle);
			// console.log(ogDescription);
