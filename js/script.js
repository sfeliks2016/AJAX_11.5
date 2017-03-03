//Zadanie: Aplikacja losująca cytaty

//$(function(){

    //link do wysyłania tweetów na Twittera - narazie brakuje treści tweeta, którą będziemy dodawać na końcu po znaku = za pomocą kodu JavaScript.
    
   var tweetLink = "https://twitter.com/intent/tweet?text=";
    
    
    //Drugi URL to link do API Forismatic, które pozwala nam pobierać losowe cytaty ze swojej bazy
    
    
    var quoteUrl = "http://api.forismatic.com/api/1.0/?method=getQuote&key=867576&format=jsonp&lang=en&jsonp=?";
    
    //Pobieranie cytatu
    
    //Kolejnym krokiem będzie napisanie logiki, która pobierze nam losowy cytat za pomocą API. Użyjemy trochę uproszczonej wersji $.ajax(), czyli metody $.getJSON().
    

    function getQuote() {
	   $.getJSON(quoteUrl, createTweet);
    }
        
    //Tworzenie tweeta
    
    function createTweet(input) {
        if (!input.quoteAuthor.length) { 
            input.quoteAuthor = "Unknown author";
        }
        
        // wygenerowanie treści tweeta 
        var tweetText = "Quote of the day - " + input.quoteText + " Author: " + input.quoteAuthor;
        
        // warunki 
        if (tweetText.length > 140) {
            getQuote();
        } else {
            
            
            var tweet = tweetLink + encodeURIComponent(tweetText);
            $('.quote').text(input.quoteText);
            $('.author').text("Author: " + input.quoteAuthor);
            
            //Wybieramy element z klasą .tweet i modyfikujemy zawartość atrybutu href na URL tweeta, który trzymany jest w zmiennej tweet.
            
            $('.tweet').attr('href', tweet);
        }
    }  
    
    //generowanie nowego tweeta po wejściu na stronę oraz po kliknięciu w przycisk z napisem Random quote:
    
    getQuote();
	$('.trigger').click(function() {
		getQuote();
	})
    
//});


    
