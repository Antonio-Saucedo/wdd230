const DATA_URL =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector(".cards");
const page = document.body.dataset.page;
const template = document.querySelector("#prophet-card");

function buildProphetCards(info) {
  document.querySelector(".loading")?.remove();

  let cardData =
    page === "home"
      ? info.prophets
      : info.prophets.filter((p) =>
          page === "Utah" ? p.birthplace === "Utah" : p.birthplace !== "Utah",
        );

  cardData.forEach((prophet) => {
    let fullName = `${prophet.name} ${prophet.lastname}`;
    let clone = template.content.cloneNode(true);

    clone.querySelector("img").src = prophet.imageurl;
    clone.querySelector("img").alt = `Picture of President ${fullName}`;
    clone.querySelector("h2").textContent = fullName;
    clone.querySelector(".birthdate strong").textContent = prophet.birthdate;
    clone.querySelector(".birthplace strong").textContent = prophet.birthplace;

    cards.append(clone);
  });
}

async function getProphets() {
  try {
    let response = await fetch(DATA_URL);
    if (!response.ok) throw Error(response.statusText);
    let data = await response.json();
    buildProphetCards(data);
  } catch (error) {
    console.error("Failed to load prophets:", error);
  }
}

getProphets();
