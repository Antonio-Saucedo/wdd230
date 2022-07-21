const URL = "https://antonio-saucedo.github.io/wdd230/final/json/temples.json";

const display = document.getElementById("temple-cards");

let count = 1;
const likeItems = [""];
likeItems.push(localStorage.getItem("likenauvoo"));
likeItems.push(localStorage.getItem("likewinterquarters"));
likeItems.push(localStorage.getItem("likechicago"));
likeItems.push(localStorage.getItem("likekansas"));

function buildTempleCards(info) {
  let data = info.temples;
  data.forEach((temple) => {
    let card = document.createElement("div");
    let div = document.createElement("div");
    let pic = document.createElement("picture");
    let img = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let button = document.createElement("button");
    let button2 = document.createElement("button");
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

    img.setAttribute("src", `${temple.imageurl}`);
    img.setAttribute("alt", `Visit The ${temple.name} Temple`);
    img.setAttribute("loading", "lazy");
    img2.setAttribute("src", `images/like-button.png`);
    img2.setAttribute("alt", `Heart`);
    img2.setAttribute("id", `heart${count}`);
    img3.setAttribute("src", `images/like-button-clicked.png`);
    img3.setAttribute("alt", `Red Heart`);
    img3.setAttribute("id", `redheart${count}`);
    button.setAttribute("onclick", `hideHeart(${count})`);
    button2.setAttribute("onclick", `hideRedHeart(${count})`);
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

    card.appendChild(pic);
    pic.appendChild(img);
    card.appendChild(div);
    div.appendChild(button);
    button.appendChild(img2);
    div.appendChild(button2)
    button2.appendChild(img3);
    card.appendChild(h2);
    card.appendChild(p);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);

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

    img.classList.add("boundary");

    if (likeItems[count] == 1) {
      img2.classList.add("hidden");
    } else {
      img3.classList.add("hidden");
    }

    h2.classList.add("all-caps");
    card.classList.add("cards");
    display.append(card);
    count++;
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