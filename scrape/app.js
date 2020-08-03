
function getScrape() {
    var linkedin = 'https://www.linkedin.com/post-inspector/inspect/';
    var facebook = 'https://developers.facebook.com/tools/debug/?q=';
    var twitter = 'https://cards-dev.twitter.com/validator/';
    var telegram = 'https://telegram.me/webpagebot/';

    var urlPath = document.getElementById('urlSel').value;    
    var urlLink = document.getElementById('url').value;
    

    
    var newLinkedinLink = urlLink.replace(/\//g, '%2F');
    
    if (urlPath === "1") {
        urlPath = linkedin;
        window.open(urlPath+newLinkedinLink);
    }
    else if
        (urlPath === "2") {
        urlPath = facebook;
        window.open(urlPath+newLinkedinLink);
    }
    else if
        (urlPath === "3") {
        urlPath = twitter;
        window.open(urlPath);
    }
    else if
        (urlPath === "4") {
        urlPath = telegram;
        window.open(urlPath);
    } else {
        alert('Seleziona un social poffarbacco!!');
    }

    


console.log(urlPath);

}
