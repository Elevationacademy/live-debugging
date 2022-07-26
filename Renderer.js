
class Renderer {
  constructor(data) {
    this.data = data;
  }

  renderResults() {
    const ourData = this.data;

    $(".user-container").empty();

    var sourceForUser = $('#user-template').html();
    var templateForUser = Handlebars.compile(sourceForUser);
    var newHTMLforUser = templateForUser(ourData);
    $('.user-container').append(newHTMLforUser);


    $(".friends-container").empty();
    
    var sourceForFriends = $('#friends-template').html();
    var templateForFriends = Handlebars.compile(sourceForFriends);
    var newHTMLforFriends = templateForFriends(ourData);
    $('.friends-container').append(newHTMLforFriends);

    
    $(".quote-container").empty();
    
    var sourceForQuote = $('#quote-template').html();
    var templateForQuote = Handlebars.compile(sourceForQuote);
    var newHTMLForQuote = templateForQuote(ourData); 
    $('.quote-container').append(newHTMLForQuote);


    $(".pokemon-container").empty();
    
    var sourceAboutPokemon = $('#pokemon-template').html();
    var templateAboutPokemon = Handlebars.compile(sourceAboutPokemon);
    var newHTMLAboutPokemon = templateAboutPokemon(ourData); 
    $(".pokemon-container").append(newHTMLAboutPokemon);


    $(".meat-container").empty();
    
    var sourceAboutMeat = $('#aboutMe-template').html();
    var templateAboutMeat = Handlebars.compile(sourceAboutMeat);
    var newHTMLAboutMeat = templateAboutMeat(ourData); 
    $(".meat-container").append(newHTMLAboutMeat);
  }
}