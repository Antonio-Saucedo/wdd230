const URL = "https://antonio-saucedo.github.io/wdd230/chamber/json/data.json";

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.getElementById("cards");

function buildBusinessCards(info) {
  let data = info.businesses;
  data.forEach((business) => {
    let card = document.createElement("section");
    let img = document.createElement("img");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");

    img.setAttribute("src", `${business.imageurl}`);
    p.innerHTML = `${business.address}`;
    p2.innerHTML = `${business.phone}`;
    p3.innerHTML = `${business.website}`;
    img.setAttribute("loading", "lazy");

    card.append(img);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);

    display.classList.add("grid");
    display.append(card);
  });
}

async function getBusinesses() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildBusinessCards(data);
  } else {
    throw Error(response.statusText);
  }
}

getBusinesses();

gridbutton.addEventListener("click", () => {
  if (display.classList.value == "cards list") {
    display.classList.add("grid");
    display.classList.remove("list");
    data.forEach((business) => {
      let img = document.createElement("img");

      img.setAttribute("src", `${business.imageurl}`);
      img.setAttribute("loading", "lazy");

      card.append(img);

      display.append(card);
    })
  };
});

listbutton.addEventListener("click", () => {
  if (display.classList.value == "cards grid") {
    display.classList.add("list");
    display.classList.remove("grid");
    data.forEach((business) => {
      let h2 = document.createElement("h2");

      h2.innerHTML = `${business.name}`;

      card.append(h2);

      display.append(card);
    });
  };
});