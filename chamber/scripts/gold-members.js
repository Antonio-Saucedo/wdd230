const URL = "https://antonio-saucedo.github.io/wdd230/chamber/json/data.json";

const display = document.querySelector(".spots");

function buildBusinessCards(info) {
  let data = info.businesses.filter((p) => p.membership == "Gold");
  let num = 1;
  data.forEach((business) => {
    let card = document.createElement("div");
    let h2 = document.createElement("h2");
    let picture = document.createElement("picture");
    let source = document.createElement("source");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
    let p = document.createElement("p");

    card.setAttribute("class", `section spot${num}`);
    h2.innerHTML = `${business.name}`;

    h3.innerHTML = `${business.moto}`;
    a.innerHTML = `${business.site}`;
    p.innerHTML = `${business.phone}`;

    a.setAttribute("href", `${business.website}`);
    img.setAttribute("src", `${business.imageurl}`);
    img.setAttribute("alt", `${business.name}`);
    img.setAttribute("loading", "lazy");
    card.append(img);

    card.appendChild(h2);
    card.appendChild(picture);
    card.appendChild(source);

    display.append(card);
    num += 1;
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