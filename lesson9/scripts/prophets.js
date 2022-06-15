const URL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";
const cards = document.querySelector(".cards");

function buildProphetCards(info) {
  let nonUtah = info.prophets.filter((p) => p.birthplace != "Utah");
  nonUtah.forEach((prophet) => {
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let img = document.createElement("img");
    let fullname = `${prophet.name} ${prophet.lastname}`;

    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    p.innerHTML = `Date of birth: <strong>${prophet.birthdate}</strong>`;
    p2.innerHTML = `Place of birth: <strong>${prophet.birthplace}</strong>`;
    img.setAttribute("src", `${prophet.imageurl}`);
    img.setAttribute("alt", `Picture of President ${fullname}`);
    img.setAttribute("loading", "lazy");

    card.append(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.append(img);

    cards.append(card);
  });
}

async function getProphets() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildProphetCards(data);
  } else {
    throw Error(response.statusText);
  }
}

getProphets();
