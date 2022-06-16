const URL = "https://antonio-saucedo.github.io/wdd230/chamber/json/data.json";
const cards = document.querySelector(".cards");

function buildBusinessCards(info) {
  let data = info.businesses;
  data.forEach((business) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let img = document.createElement("img");

    img.setAttribute("src", `${business.imageurl}`);
    h2.innerHTML = `${business.name}`;
    p.innerHTML = `${business.website}`;
    img.setAttribute("loading", "lazy");

    card.append(img);
    card.append(h2);
    card.appendChild(p);

    cards.append(card);
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

document.addEventListener("click", getBusinesses);