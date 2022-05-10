const apiManager = new APIManager();
let loadUsersCounter = 0
let wasAPICalled = false


$("#loadData").on("click", function () {
  wasAPICalled = true
  apiManager.geenrateRandomPeople();
  apiManager.generateQuote();
  apiManager.generatePokemon();
  apiManager.generateText();

});


$("#displayData").on("click", function () {
  if(wasAPICalled == true) {
    const render = new Renderer(apiManager.data);
    render.renderResults();
  }
  else{
    alert("Please press the 'Load User Data' Button first")
  }
});


$("#saveUserPage").on("click", function () {
  if(loadUsersCounter < 7) {
    loadUsersCounter++

    let userToSave = JSON.stringify(apiManager.data)
    localStorage[`${loadUsersCounter}`] = userToSave;
    let userToLoad = JSON.parse(localStorage[`${loadUsersCounter}`])

    let personNameToSave = userToLoad.mainUser.firstName
    let pokemonNameToSave = userToLoad.pokemonName

    $('.dropup-content').append(`<a><button class="savedUser" id="${loadUsersCounter}" onclick="getSavedUser(${loadUsersCounter})">${personNameToSave} - ${pokemonNameToSave}</button></a>`)
  }
  else {
    alert("You can only save up to 7 users. Refresh the page to start again")
  }
});

function getSavedUser(id) {
  let userToLoad = JSON.parse(localStorage[`${id}`])
  const render = new Renderer(userToLoad);
  render.renderResults();
}