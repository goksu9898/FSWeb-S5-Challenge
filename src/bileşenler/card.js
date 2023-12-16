import axios from 'axios';

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const divHeadline = document.createElement("div");
  divHeadline.classList.add("headline");
  divHeadline.textContent = makale.anabaslik;

  const divAuthor = document.createElement("div");
  divAuthor.classList.add("author");

  const divImg = document.createElement("div");
  divImg.classList.add("img-container");

  const img = document.createElement("img");
  img.src = makale.yazarFoto;

  const span = document.createElement("span");
  span.textContent = makale.yazarAdi + " tarafından";

  divImg.appendChild(img);
  divAuthor.appendChild(divImg);
  divAuthor.appendChild(span);
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);

  divCard.addEventListener('click', () => {
    console.log('Clicked on article:', makale.anabaslik);
  });
  return divCard;
}

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //


  const apiUrl = 'http://localhost:5001/api/makaleler';
  let makaleler = "";
  axios.get(apiUrl)
    .then(response => {
      makaleler = response.data.makaleler.javascript;
      makaleler = makaleler.concat(response.data.makaleler.bootstrap);
      makaleler = makaleler.concat(response.data.makaleler.teknoloji);
      makaleler = makaleler.concat(response.data.makaleler.jquery);
      makaleler = makaleler.concat(response.data.makaleler["node.js"]);

      for (let i = 0; i < makaleler.length; i++) {
        const card = Card(makaleler[i]);
        const elementSecici = document.querySelector(secici);
        elementSecici.appendChild(card);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export { Card, cardEkleyici }
