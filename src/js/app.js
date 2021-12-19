// import { data } from "autoprefixer";
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  // let pokemonCount = 10


  const ul = document.querySelector("ul");
  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`).then(res => res.json()).then(data => {
      console.log(data);
      creator(data);
      return data.results;
    })

  }
  getData();
  function creator(names) {
    console.log(names.results);
    names.results.forEach((element, i) => {
      const lis = document.createElement("li");
      lis.innerText = `${element.name}`
      ul.appendChild(lis);

    });
  }





});
