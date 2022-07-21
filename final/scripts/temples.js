const URL = "https://antonio-saucedo.github.io/wdd230/final/json/temples.json";

const display = document.getElementById("temple-cards");

function buildTempleCards(info) {
  let data = info.temples;
  data.forEach((temple) => {
    let card = document.createElement("div");
    let pic = document.createElement("picture");
    let img = document.createElement("img");
    let h21 = document.createElement("h2");
    let h22 = document.createElement("h2");
    let h23 = document.createElement("h2");
    let h24 = document.createElement("h2");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let a = document.createElement("a");

    img.setAttribute("src", `${temple.imageurl}`);
    img.setAttribute("alt", `Visit The ${temple.name} Temple`);
    img.setAttribute("loading", "lazy");
    h21.innerHTML = `${temple.name}`;
    h22.innerHTML = "Services";
    h23.innerHTML = "History";
    h24.innerHTML = "Schedule";
    p.innerHTML = `${temple.address}`;
    p2.innerHTML = `${temple.phone}`;
    p3.innerHTML = `${temple.email}`;
    p4.innerHTML = `${temple.ordinance-schedule}`;
    p5.innerHTML = `${temple.session-schedule}`;
    a.innerHTML = `${temple.site}`;
    a.setAttribute("href", `${temple.website}`);

    card.appendChild(pic);
    pic.appendChild(img);
    card.appendChild(h21);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(a);

    card.appendChild(h22);
    temple.services.forEach((service) => {
        let p = document.createElement("p");
        p.innerHTML = `${service}`;
        card.appendChild(p);
    });

    card.appendChild(h23);
    temple.history.forEach((item) => {
      let p = document.createElement("p");
      p.innerHTML = `${item}`;
      card.appendChild(p);
    });

    card.appendChild(h24);
    card.appendChild(p4);
    card.appendChild(p5);
    temple.closure-schedule[0].forEach((item) => {
      let p = document.createElement("p");
      p.innerHTML = `${item}`;
      card.appendChild(p);
    });
    temple.closure-schedule[1].forEach((item) => {
        let p = document.createElement("p");
        p.innerHTML = `${item}`;
        card.appendChild(p);
      });

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
