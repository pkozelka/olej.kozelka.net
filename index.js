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
  tastingBody: "Olej z oblasti Chianti chutná tak, jak má čerstvý olivový olej chutnat. Díky tomu, že pro něj jezdíme na konci sklizně, dostane se k nám opravdu čerstvý.",
  contactTitle: "Přivezeme vám\nchuť Toskánska.",
  contactIntro: "Napište nám, kolik oleje byste chtěli. Nejlépe se vozí balení po 3 nebo 5 litrech; menší množství můžeme přelít do vašich lahviček.",
  contactName: "Petr Kozelka",
  contactEmail: "pkozelka@gmail.com",
  contactPhone: "+420 603 448 262",
  orderNote: "Pro orientaci: naše čtyřčlenná rodina spotřebuje za rok většinou víc než 10 litrů."
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
