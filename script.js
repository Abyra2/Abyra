function toggleCategory() {
  const menu = document.getElementById('categoryMenu');
  const searchBox = document.getElementById('searchBox');
  menu.classList.toggle('open');
  if (menu.classList.contains('open')) searchBox.style.display = 'none';
}

function toggleSearch() {
  const box = document.getElementById('searchBox');
  const menu = document.getElementById('categoryMenu');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
  menu.classList.remove('open');
}

function toggleSubCategories() {
  const sub = document.getElementById('subCategories');
  sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
}

// بيانات المانهوا
const manhwas = [
  { title:"Legend of the Northern Blade", image:"https://i.imgur.com/DJDipuR.jpeg", chapters:3, genre:"أكشن، فانتازيا، مغامرة" },
  { title:"Omniscient Reader's Viewpoint", image:"https://i.imgur.com/bUpDVmB.jpeg", chapters:3, genre:"أكشن، دراما" },
  { title:"Swordmaster's Youngest Son", image:"https://i.imgur.com/QXhEcw6.jpeg", chapters:3, genre:"فانتازيا" },
  { title:"Revenge of the Iron-Blooded Sword Hound", image:"https://i.imgur.com/ZN9s29v.jpeg", chapters:3, genre:"مغامرة" },
  { title:"The Extra's Academy Survival Guide", image:"https://i.imgur.com/FeZFmjO.jpeg", chapters:3, genre:"أكشن" }
];

// بيانات المانجا
const mangas = [
  { title:"Naruto", image:"https://i.imgur.com/Okzn4ZB.jpeg", chapters:700, genre:"أكشن، نينجا" },
  { title:"One Piece", image:"https://i.imgur.com/jRgK7pr.jpeg", chapters:1100, genre:"مغامرة، قراصنة" },
  { title:"Attack on Titan", image:"https://i.imgur.com/iyc3VYI.jpeg", chapters:139, genre:"رعب، أكشن" }
];

// بيانات الأنمي
const animes = [
  { title:"Demon Slayer", image:"https://i.imgur.com/kBvZ5pI.jpeg", episodes:55, genre:"أكشن، خيال" },
  { title:"Jujutsu Kaisen", image:"https://i.imgur.com/xynv5Xo.jpeg", episodes:48, genre:"أكشن، رعب" },
  { title:"Solo Leveling", image:"https://i.imgur.com/otKYYT8.jpeg", episodes:12, genre:"فانتازيا" }
];

// عرض المانهوا مع الفصول
const manhwaSection = document.getElementById('manhwaSection');
manhwas.forEach(item => {
  let manhwaDiv = document.createElement('div');
  manhwaDiv.className = 'card';
  manhwaDiv.innerHTML = `
    <img src="${item.image}">
    <h3>${item.title}</h3>
    <p>${item.genre}</p>
  `;

  // قسم الفصول
  let chaptersDiv = document.createElement('div');
  chaptersDiv.className = 'chapters';
  for (let i = 1; i <= item.chapters; i++) {
    let chapterLink = document.createElement('a');
    chapterLink.href = `Chapter${i}.html`; // كل فصل رابطه
    chapterLink.innerText = `الفصل ${i}`;
    chapterLink.className = 'chapter-link';
    chaptersDiv.appendChild(chapterLink);
  }

  manhwaDiv.appendChild(chaptersDiv);
  manhwaSection.appendChild(manhwaDiv);
});

// عرض المانجا
const mangaSection = document.getElementById('mangaSection');
mangas.forEach(item => {
  mangaSection.innerHTML += `<div class="card"><img src="${item.image}"><h3>${item.title}</h3><p>${item.genre}</p></div>`;
});

// عرض الأنمي
const animeSection = document.getElementById('animeSection');
animes.forEach(item => {
  animeSection.innerHTML += `<div class="card"><img src="${item.image}"><h3>${item.title}</h3><p>${item.genre}</p></div>`;
});

// المانهوا المتحركة
const featured = manhwas.slice(0,5);
const featuredDiv = document.getElementById('featuredManhwa');
featured.forEach(item => {
  featuredDiv.innerHTML += `<div class="featuredCard"><img src="${item.image}"><h3>${item.title}</h3><p>${item.genre}</p></div>`;
});