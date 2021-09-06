let jokeParagraph = document.getElementById("joke");
let fetchJokeBtn = document.getElementById("fetch-joke");

fetchJokeBtn.addEventListener("click", getJoke);

async function getJoke() {
  const jokeData = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });
  let jokeObj = await jokeData.json();
  jokeParagraph.innerHTML = jokeObj.joke;
  document.body.appendChild("img").src =
    "https://icanhazdadjoke.com/j/R7UfaahVfFd.png";
}
