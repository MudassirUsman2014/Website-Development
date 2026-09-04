// 1. Define the JavaScript Object storing profile details
const motherProfile = {
  relation: "My Mother",
  fullName: "Farheen Usman",
  hobby: "Cooking",
  superpower: "Always knowing where lost things are!",
  favoriteQuote: "Kindness is a language that the deaf can hear and the blind can see.",
  imageURL: "https://pngtree.com/freepng/mother-and-child-in-heart-shaped-art_20543503.html" // Replace with your mother's photo URL
};

// 2. Accessing properties using Dot Notation
document.getElementById("person-title").innerText = "My Favourite Person Profile";
document.getElementById("person-relation").innerText = motherProfile.relation;
document.getElementById("mother-name").innerText = motherProfile.fullName;

// 3. Accessing properties using Bracket Notation
document.getElementById("mother-hobby").innerText = motherProfile["hobby"];
document.getElementById("mother-superpower").innerText = motherProfile["superpower"];
document.getElementById("mother-quote").innerText = `"${motherProfile["favoriteQuote"]}"`;

// Updating the image dynamic source via dot notation
document.getElementById("mother-photo").src="https://pngtree.com/freepng/mother-and-child-in-heart-shaped-art_20543503.html";