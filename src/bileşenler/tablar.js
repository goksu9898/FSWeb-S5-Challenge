import axios from 'axios';

const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konular") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konular dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  
let length = konular.length;
  const divTopic = document.createElement("div");
  divTopic.classList.add("topics");
  for (let i = 0; i < length; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add("tab");
    newDiv.textContent = konular[i];

    divTopic.appendChild(newDiv);
  }
  return divTopic;
}

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  const apiUrl = 'http://localhost:5001/api/konular';
  let konular = "";
  axios.get(apiUrl)
    .then(response => {
      konular = response.data.konular;
      const tablar = Tablar(konular);
      const elementSecici = document.querySelector(secici);
      elementSecici.appendChild(tablar);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
export { Tablar, tabEkleyici }
