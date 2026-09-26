/* =====================================================
   CONFIGURAÇÃO
===================================================== */

const CONFIG = {

  // Cole aqui o checkout definitivo
  checkoutUrl: "https://www.absolucoes.com.br",

  // WhatsApp
  whatsappNumber: "https://bit.ly/4fFijq1",

  // Google Analytics / outros IDs podem ser
  // adicionados futuramente aqui.

};


/* =====================================================
   LINKS DE CHECKOUT
===================================================== */

document.querySelectorAll(".checkout-link").forEach(link => {

  link.href = CONFIG.checkoutUrl;

  link.addEventListener("click", () => {

    if (typeof gtag === "function") {
      gtag("event", "begin_checkout", {
        currency: "BRL",
        value: 99.90
      });
    }

    if (typeof fbq === "function") {
      fbq("track", "InitiateCheckout", {
        value: 99.90,
        currency: "BRL"
      });
    }

  });

});


/* =====================================================
   FAQ
===================================================== */

document.querySelectorAll(".faq-question").forEach(button => {

  button.addEventListener("click", () => {

    const item = button.parentElement;

    document.querySelectorAll(".faq-item").forEach(other => {

      if (other !== item) {
        other.classList.remove("active");
      }

    });

    item.classList.toggle("active");

  });

});


/* =====================================================
   TRACKING DOS CTAS
===================================================== */

document.querySelectorAll(".btn-primary").forEach(button => {

  button.addEventListener("click", () => {

    if (typeof gtag === "function") {
      gtag("event", "cta_click", {
        event_category: "conversion",
        event_label: "diagnostico_financeiro"
      });
    }

    if (typeof fbq === "function") {
      fbq("trackCustom", "DiagnosticCTA");
    }

  });

});


/* =====================================================
   WHATSAPP
===================================================== */

document.querySelectorAll(".btn-whatsapp").forEach(button => {

  button.addEventListener("click", () => {

    if (typeof gtag === "function") {
      gtag("event", "whatsapp_click");
    }

    if (typeof fbq === "function") {
      fbq("trackCustom", "WhatsAppClick");
    }

  });

});


/* =====================================================
   SCROLL TRACKING
===================================================== */

let scroll25 = false;
let scroll50 = false;
let scroll75 = false;

window.addEventListener("scroll", () => {

  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage = (scrollTop / documentHeight) * 100;

  if (percentage >= 25 && !scroll25) {

    scroll25 = true;

    if (typeof gtag === "function") {
      gtag("event", "scroll_25");
    }

  }

  if (percentage >= 50 && !scroll50) {

    scroll50 = true;

    if (typeof gtag === "function") {
      gtag("event", "scroll_50");
    }

  }

  if (percentage >= 75 && !scroll75) {

    scroll75 = true;

    if (typeof gtag === "function") {
      gtag("event", "scroll_75");
    }

  }

});


/* =====================================================
   ANO AUTOMÁTICO
===================================================== */

document.querySelectorAll(".current-year").forEach(element => {

  element.textContent = new Date().getFullYear();

});
