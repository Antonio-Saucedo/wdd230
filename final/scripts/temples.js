const URL = "https://antonio-saucedo.github.io/wdd230/final/json/temples.json";

const display = document.getElementById("temple-cards");

function buildTempleCards(info) {
  let data = info.temples;
  data.forEach((temple) => {
    let card = document.createElement("div");
    let pic = document.createElement("picture");
    let img = document.createElement("img");
    let h2 = document.createElement("h2");
    let h31 = document.createElement("h3");
    let h32 = document.createElement("h3");
    let h33 = document.createElement("h3");
    let h34 = document.createElement("h3");
    let h35 = document.createElement("h3");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    let p7 = document.createElement("p");
    let a = document.createElement("a");

    img.setAttribute("src", `${temple.imageurl}`);
    img.setAttribute("alt", `Visit The ${temple.name} Temple`);
    img.setAttribute("loading", "lazy");
    h2.innerHTML = `${temple.name}`;
    h31.innerHTML = "Services";
    h32.innerHTML = "History";
    h33.innerHTML = "Schedule";
    h34.innerHTML = "Closures 2022";
    h35.innerHTML = "Closures 2023";
    p.innerHTML = `${temple.street}`;
    p2.innerHTML = `${temple.city}`;
    p3.innerHTML = `${temple.country}`;
    p4.innerHTML = `${temple.phone}`;
    p5.innerHTML = `${temple.email}`;
    p6.innerHTML = `Ordinance: ${temple.ordinance}`;
    p7.innerHTML = `Session: ${temple.session}`;
    a.innerHTML = `${temple.site}`;
    a.setAttribute("href", `${temple.website}`);

    card.appendChild(pic);
    pic.appendChild(img);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(a);

    card.appendChild(h31);
    for (let i = 0; i < temple.services.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${temple.services[i]}`;
      card.appendChild(p);
    }

    card.appendChild(h32);
    for (let i = 0; i < temple.history.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${temple.history[i]}`;
      card.appendChild(p);
    }

    card.appendChild(h33);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(h34);
    for (let i = 0; i < temple.closure22.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${temple.closure22[i]}`;
      card.appendChild(p);
    }

    card.appendChild(h35);
    for (let i = 0; i < temple.closure23.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = `${temple.closure23[i]}`;
      card.appendChild(p);
    }

    card.classList.add("temple-section")
    display.append(card);
  });
}

async function getTemples() {
  let response = await fetch(URL);
  if (response.ok) {
    let data = await response.json();
    buildTempleCards(data);
  } else {
    throw Error(response.statusText);
  }
}

getTemples();