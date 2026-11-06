// Texty stránky jsou soustředěné tady, aby se daly jednoduše upravovat.
const content = {
  heroEyebrow: "Z Greve in Chianti",
  heroTitle: "Náš oblíbený\nolej z Toskánska.",
  heroLead: "Každý rok si z Toskánska přivezeme olej pro sebe a rodinu. Začali jsme vozit i pro kamarády — jestli chceš taky, napiš mi.",
  heroPhotoCaption: "Sklizeň v olivovém háji · Chianti",
  heroPhotoAlt: "Sběrači sklízejí olivy pod stromy na svahu v Chianti.",
  storyKicker: "NÁŠ PŘÍBĚH",
  storyTitle: "Do Itálie se rádi vracíme. Pro olej taky.",
  storyBody: "<p>Každý rok jezdíme do Itálie na dovolenou. Máme rádi moře, ale nejvíc nás to táhne do vnitrozemí — za dobrým jídlem, vínem, grappou a olivovým olejem.</p><p>Časem jsme poznali lidi, kteří olej vyrábějí. Nejdřív jsme si ho začali vozit domů pro sebe a rodinu, pak i pro kamarády. Jezdíme na konci sklizně, takže olej bývá čerstvý. Nám chutná víc než ten, který běžně kupujeme doma.</p>",
  location: "Greve in Chianti · Toskánsko",
  tastingTitle: "Čerstvý olej z konce sklizně.",
  tastingBody: "Pro olej jezdíme do oblasti Chianti na konci sklizně. Je tedy čerstvý a nám chutná víc než oleje, které běžně koupíme doma.",
  price: "22 EUR / litr",
  priceDetails: "Ročník 2026 · olej, balení i doprava",
  contactTitle: "Chceš taky trochu?",
  contactIntro: "Napiš mi přibližné množství. Většinou vozíme 3 nebo 5 litrů, ale menší množství můžu přelít — klidně do lahviček, které už máš doma.",
  contactName: "Petr Kozelka",
  contactEmail: "pkozelka@gmail.com",
  contactPhone: "+420 603 448 262",
  orderNote: "Cenu další sklizně budu znát až od producenta. Pak ji napíšu do naší WhatsApp skupiny. Nám doma 10 litrů většinou nevydrží — jsme čtyři.",
  harvestPhotos: [
    { src: "assets/harvest/olive-grove.jpg", alt: "Olivovníky na svahu nad toskánskou krajinou, pod stromy jsou rozprostřené sklizňové sítě.", caption: "Olivový háj v Chianti" },
    { src: "assets/harvest/harvest-by-hand.jpg", alt: "Sběrač sklízí olivy dlouhým nástrojem z větví olivovníku.", caption: "Sklizeň ručně, strom po stromu" },
    { src: "assets/harvest/olives-at-mill.jpg", alt: "Čerstvě sklizené olivy v přepravní bedně v lisovně.", caption: "Čerstvá úroda míří do lisovny" }
  ]
};

const heroImage = document.querySelector("[data-hero-image]");
if (heroImage) heroImage.alt = content.heroPhotoAlt;

document.querySelectorAll("[data-content]").forEach((element) => {
  const key = element.dataset.content;
  if (!(key in content)) return;
  if (key === "storyBody") element.innerHTML = content[key];
  else element.textContent = content[key];
});

document.querySelectorAll("[data-contact-email]").forEach((link) => {
  link.href = `mailto:${content.contactEmail}`;
});

document.querySelectorAll("[data-contact-whatsapp]").forEach((link) => {
  link.href = `https://wa.me/${content.contactPhone.replace(/\D/g, "")}`;
});

const gallery = document.querySelector("[data-harvest-gallery]");
if (gallery) {
  gallery.innerHTML = content.harvestPhotos.map((photo) => `
    <figure class="harvest-photo">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
      <figcaption>${photo.caption}</figcaption>
    </figure>
  `).join("");
}
