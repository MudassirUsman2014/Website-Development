// 1. Define the JavaScript Object storing profile details
const motherProfile = {
  relation: "My Mother",
  fullName: "Farheen Usman",
  hobby: "Cooking",
  superpower: "Always knowing where lost things are!",
  favoriteQuote: "Kindness is a language that the deaf can hear and the blind can see.",
  imageURL: "https://pngtree.com/freepng/mother-and-child-in-heart-shaped-art_20543503.html" // Replace with your mother's photo URL
};

  // 2. Select elements using the DOM
  const zone1 = document.getElementById("zone1");
  const zone2 = document.getElementById("zone2");
  const zone3 = document.getElementById("zone3");
  const statusMessage = document.getElementById("statusMessage");
  const body = document.getElementById("zooBody");

  // 3. Populate cards with animal details and bootstrap typography
  zone1.innerHTML = `<div class="card-body"><h2 class="h3">${zooData[0].emoji} ${zooData[0].name}</h2><p class="fs-4 text-primary fw-bold mb-0">${zooData[0].count}</p></div>`;
  zone2.innerHTML = `<div class="card-body"><h2 class="h3">${zooData[1].emoji} ${zooData[1].name}</h2><p class="fs-4 text-primary fw-bold mb-0">${zooData[1].count}</p></div>`;
  zone3.innerHTML = `<div class="card-body"><h2 class="h3">${zooData[2].emoji} ${zooData[2].name}</h2><p class="fs-4 text-primary fw-bold mb-0">${zooData[2].count}</p></div>`;

  // Update card borders
  [zone1, zone2, zone3].forEach(zone => {
    zone.classList.remove("border-dashed");
    zone.classList.add("zone-active");
  });

  // 4. Calculate total animals
  const totalAnimals = zooData.reduce((sum, item) => sum + item.count, 0);

  // 5. Update status display and style
  statusMessage.innerText = `Total Animals: ${totalAnimals}`;
  statusMessage.className = "badge bg-success fs-5 px-4 py-2 shadow-sm";

  // 6. Change body background color
  body.style.backgroundColor = "#d1e7dd"; // Bootstrap light success background color

  // 7. Update document title (page status message)
  document.title = `My Zoo - Open! (${totalAnimals} Animals)`;
}