import { cE, qS } from "./utils.js";
import { responseGET, responseResumeCardGET } from "./api.js";

const TrapCard = qS(".box1");
const PalermoCard = qS(".box2");
const AgrCard = qS(".box3");
const MessinaCard = qS(".box4");
const CataniaCard = qS(".box5");
const EnnaCard = qS(".box6");
const CaltCard = qS(".box7");
const SiraCard = qS(".box8");
const RagusaCard = qS(".box9");

const Sectionform = qS("#sectionForm");
const modalEl = qS(".modal");
const overlayEl = qS(".overlay");

responseGET("weather?id=", "2523920");
responseGET("weather?id=", "2525764");
responseGET("weather?id=", "2525448");
responseGET("weather?id=", "2525068");
responseGET("weather?id=", "2524819");
responseGET("weather?id=", "2524170");
responseGET("weather?id=", "2523650");
responseGET("weather?id=", "2523083");
responseGET("weather?id=", "6542155");

Sectionform.addEventListener("change", (e) => {
  modalEl.classList.toggle("active");
  responseGET("weather?id=", Sectionform.value).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

overlayEl.addEventListener("click", () => {
  modalEl.classList.toggle("active");
});

TrapCard.addEventListener("mouseover", () => {
  // const provinceName = e.target.nextElementSibling.classList[0];
  responseResumeCardGET("find?q=", "Trapani", 0, TrapCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

PalermoCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Palermo", 0, PalermoCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

AgrCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Agrigento", 0, AgrCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

MessinaCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Messina", 0, MessinaCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

CataniaCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Catania", 0, CataniaCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

EnnaCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Enna", 0, EnnaCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

CaltCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Caltanissetta", 1, CaltCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

SiraCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Siracusa", 1, SiraCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});

RagusaCard.addEventListener("mouseover", () => {
  responseResumeCardGET("find?q=", "Ragusa", 0, RagusaCard).catch((e) => {
    alert(`ERRORE: ${e}.
     Please try to reload the page`);
  });
});
