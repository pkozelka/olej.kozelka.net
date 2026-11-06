// Texty stránky jsou soustředěné tady, aby se daly jednoduše upravovat.
const content = {
  heroEyebrow: "Z Toskánska s láskou",
  heroTitle: "Kousek Itálie\nna váš stůl.",
  heroLead: "Čerstvý extra panenský olivový olej z kopců Chianti. Vozíme ho pro sebe, rodinu a přátele — a rádi přivezeme i vám.",
  storyKicker: "NÁŠ PŘÍBĚH",
  storyTitle: "Do Itálie se rádi vracíme. Pro olej taky.",
  storyBody: "<p>Každý rok jezdíme do Itálie na dovolenou. Milujeme moře, ale ještě o něco víc její vnitrozemí — jídlo, víno, grappu a také olivový olej.</p><p>Postupně jsme poznali lidi, kteří se výrobě oleje věnují. Začali jsme ho vozit domů nejdřív pro sebe a rodinu, později také pro přátele a známé.</p>",
  location: "Greve in Chianti · Toskánsko",
  tastingTitle: "Výrazný, čerstvý, opravdový.",
  tastingBody: "Olej vozíme z oblasti Chianti. Je kvalitnější než olej, který běžně koupíme v Česku, a díky tomu, že pro něj jezdíme na konci sklizně, dostane se k nám opravdu čerstvý.",
  price: "22 EUR / litr",
  priceDetails: "Ročník 2026 · včetně oleje, balení a dopravy",
  contactTitle: "Přivezeme vám\nchuť Toskánska.",
  contactIntro: "Napište nám, kolik oleje byste chtěli. Nejlépe se vozí balení po 3 nebo 5 litrech; menší množství můžeme přelít do vašich lahviček.",
  contactName: "Petr Kozelka",
  contactEmail: "pkozelka@gmail.com",
  contactPhone: "+420 603 448 262",
  orderNote: "Cenu pro další ročník sdílíme každý rok v naší WhatsApp skupině, jakmile ji zjistíme od producenta. Pro orientaci: naše čtyřčlenná rodina spotřebuje za rok většinou víc než 10 litrů.",
  harvestPhotos: [
    { src: "assets/harvest/olive-grove.jpg", alt: "Olivovníky na svahu nad toskánskou krajinou, pod stromy jsou rozprostřené sklizňové sítě.", caption: "Olivový háj v Chianti" },
    { src: "assets/harvest/harvest-by-hand.jpg", alt: "Sběrač sklízí olivy dlouhým nástrojem z větví olivovníku.", caption: "Sklizeň ručně, strom po stromu" },
    { src: "assets/harvest/olives-at-mill.jpg", alt: "Čerstvě sklizené olivy v přepravní bedně v lisovně.", caption: "Čerstvá úroda míří do lisovny" }
  ]
};

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
