const episodes = [
  {
    img: "./assets/episodes/The_Last_of_Us_-_When_You're_Lost_in_the_Darkness.jpg",
    title: "When You're Lost in the Darkness",
    description:
      " In 2003, a mass fungal infection of mutated Cordyceps sparks a global pandemic. Joel flees with his daughter, Sarah, and brother, Tommy, from their Texas home; Sarah is killed by asoldier.",
  },

  {
    img: "./assets/episodes/The_Last_of_Us_-_Infected.jpg",
    title: "Infected",
    description:
      " Two days before the worldwide outbreak, in Jakarta, Indonesia, the government shows an infected corpse to a mycologist, who tells them there is no cure or vaccine.",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_Long_Long_Time.jpg",
    title: "Long, Long Time",
    description:
      " Joel and Ellie begin the hike to meet with Bill and Frank. Ellie sees evidence of the government's execution of innocents during the early days of the pandemic.",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_Please_Hold_to_My_Hand.jpg",
    title: "Please Hold to My Hand",
    description:
      " Traveling through Missouri, Joel and Ellie are forced to take a detour through Kansas City, where they are ambushed.",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_Endure_and_Survive.jpg",
    title: "Endure and Survive",
    description:
      "Henry and Sam make a tentative truce with Joel and Ellie. Joel wants to part ways, but Henry proposes they escape the city together using underground tunnel routes that only Henry knows; Joel hesitantly agrees. ",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_Kin.jpg",
    title: "Kin",
    description:
      "Three months after Henry and Sam's deaths, Joel and Ellie reach a small, thriving community in Jackson, Wyoming, where Joel is reunited with Tommy, whose wife Maria is pregnant.",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_Left_Behind.jpg",
    title: "Left Behind",
    description:
      "Ellie and an injured Joel shelter in an abandoned house. As Joel approaches death, he urges Ellie to leave him. Ellie remembers her time in FEDRA military school, which she attended with her best friend Riley.",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_When_We_Are_in_Need.jpg",
    title: "When We Are in Need",
    description:
      "Ellie leaves Joel, who is still recovering, to hunt for food. After shooting a deer, she tracks the wounded animal and encounters a preacher, David, and his fellow hunter James. She trades her deer for penicillin.",
  },
  {
    img: "./assets/episodes/The_Last_of_Us_-_Look_for_the_Light.jpg",
    title: "Look for the Light",
    description:
      "In flashback, Ellie's mother Anna is bitten by an infected as she gives birth to Ellie. She is found by Marlene, who hesitantly takes Ellie and kills Anna, at the latter's request.",
  },
];

const list = document.querySelector(".episodes-list");

function addCard(episodes) {
  for (let i = 0; i < episodes.length; i++) {
    renderCard(episodes[i]);
  }
}

addCard(episodes);

function renderCard(episodio) {
  const listItem = document.createElement("li");
  listItem.classList.add("card");

  listItem.innerHTML = `
  <img src=${episodio.img} alt=${episodio.title} />
  <div class="card-text">
    <h4>${episodio.title}</h4>
    <p>
    ${episodio.description}
    </p>
  </div>
  `;

  list.appendChild(listItem);
}
