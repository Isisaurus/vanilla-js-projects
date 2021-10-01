const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://images.pexels.com/photos/718739/pexels-photo-718739.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "dinner double",
    category: "lunch",
    price: 13.99,
    img: "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://images.pexels.com/photos/1853812/pexels-photo-1853812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://images.pexels.com/photos/5638268/pexels-photo-5638268.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://images.pexels.com/photos/1833337/pexels-photo-1833337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://images.pexels.com/photos/6413382/pexels-photo-6413382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://images.pexels.com/photos/3838632/pexels-photo-3838632.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const container = document.querySelector(".menu__container");

window.addEventListener("DOMContentLoaded", () => {
  let displayMenu = menu.map((el) => {
    return `
  <article class="menu_item">
    <img
      src="${el.img}"
      alt="${el.title}"
      class="menu_item__img"
    />
    <header class="menu_item__info">
      <h4>${el.title}</h4>
      <h3 class="menu_item__price">${el.price}</h3>
    </header>
    <p class="menu_item__text">${el.desc}</p>
  </article>
`;
  });
  displayMenu = displayMenu.join("");
  container.insertAdjacentHTML("afterbegin", displayMenu);
});
