class APIManager {
  constructor() {
    this.data = {};
  }

  geenrateRandomPeople() {
    let length = 7;
    $.ajax({
      method: "POST",
      url: `https://randomuser.me/api/results=${length()}`,
      success: function (response) {
        let users = response.results.map((p) => {
          return {
            photo: p.picture.medium,
            firstName: p.name.first,
            lastName: p.name.last,
            city: p.city,
            state: p.location.state
          };
        });

        this.data.mainUser = users[0];
        this.data.friends = users.slice(1, 6);
      },
      error: function (xhr, text, error) {
        console.log(text);
      }
    });
  }

  generateQuote() {
    $.ajax({
      method: "GET",
      url: "https://api.kanye.rest",
      success: (response) => {
        this.data.quote = response.quote;
      },
      error: function (xhr, text, error) {
        console.log(text);
      }
    });
  }

  generatePokemon() {
    let randomNum = Math.floor(Math.random() * 387);

    $.ajax({
      method: "GET",
      url: `https://pokeapi.co/api/v2/pokemon/${randomNum}`,
      success: (response) => {
        this.data.pokemonName =
          response.forms[0].name[0].toUpperCase() +
          response.forms[0].name.slice(1);
        const pokemonUrl = response.forms[0].url;

        $.ajax({
          method: "GET",
          url: `${pokemonUrl}`,
          success: (response) => {
            this.data.pokemonURL = response.sprites.front_default;
          },
          error: function () {
            console.log("error");
          }
        });
      },
      error: function (xhr, text, error) {
        console.log(text);
      }
    });
  }

  generateText() {
    $.ajax({
      method: "GET",
      url: "https://baconipsum.com/api/?type=meat-and-filler",
      success: (response) => {
        this.data.text = response[0];
      },
      error: function (xhr, text, error) {
        console.log(text);
      }
    });
  }
}
