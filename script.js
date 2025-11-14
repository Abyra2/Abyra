function toggleCategory() {
  const menu = document.getElementById('categoryMenu');
  const searchBox = document.getElementById('searchBox');
  menu.classList.toggle('open');
  if(menu.classList.contains('open')) searchBox.style.display = 'none';
}

function toggleSearch() {
  const box = document.getElementById('searchBox');
  const menu = document.getElementById('categoryMenu');
  box.style.display = box.style.display === 'block' ? 'none' : 'block';
  menu.classList.remove('open');
}

function toggleSubCategories() {
  const sub = document.getElementById('subCategories');
  sub.style.display = (sub.style.display === 'block') ? 'none' : 'block';
}

// بيانات المانهوا
const manhwas = [
  { 
    title:"Legend of the Northern Blade", 
    image:"https://i.imgur.com/DJDipuR.jpeg", 
    story:"قصة عن السيف والشرف والمعركة ضد الأعداء.", 
    rating:"9.2/10", 
    chapterPage:"Chapter1.html"
  },
  { 
    title:"Omniscient Reader's Viewpoint", 
    image:"https://i.imgur.com/bUpDVmB.jpeg", 
    story:"عالم غامض حيث القارئ الوحيد يعرف نهاية العالم.", 
    rating:"9.0/10", 
    chapterPage:"Chapter2.html"
  },
  { 
    title:"Swordmaster's Youngest Son", 
    image:"https://i.imgur.com/QXhEcw6.jpeg", 
    story:"ابن السيف الأصغر يتحدى قوى الشر ليصبح سيد السيف.", 
    rating:"8.7/10", 
    chapterPage:"Chapter3.html"
  },
  { 
    title:"Revenge of the Iron-Blooded Sword Hound", 
    image:"https://i.imgur.com/ZN9s29v.jpeg", 
    story:"رحلة انتقام مقاتل دموي ضد أعدائه.", 
    rating:"8.5/10", 
    chapterPage:"Chapter4.html"
  },
  { 
    title:"The Extra's Academy Survival Guide", 
    image:"https://i.imgur.com/FeZFmjO.jpeg", 
    story:"دليل البقاء للطالب الإضافي في أكاديمية مليئة بالتحديات.", 
    rating:"8.8/10", 
    chapterPage:"Chapter5.html"
  }
];

// عرض المانهوا على الصفحة الرئيسية
const manhwaSection = document.getElementById('manhwaSection');
manhwas.forEach(item=>{
  manhwaSection.innerHTML += `
    <div class="card">
      <a href="${item.chapterPage}">
        <img src="${item.image}">
        <h3>${item.title}</h3>
        <p>${item.story}</p>
        <p>تقييم: ${item.rating}</p>
      </a>
    </div>`;
});