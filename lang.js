// 1. Diccionario de idiomas
let currentLanguage = "es";

const elementosAnimados = document.querySelectorAll('.animar');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elementosAnimados.forEach(el => observer.observe(el));


const translations = {
  es: {
    proyectos_titulo:"Proyectos",
    sobre_mi_titulo:"Sobre mí",
    contacto_titulo:"Contacto",
    title: "Hola, soy Mel 👋",
    description: "Desarrolladora Frontend y creadora de sitios WordPress, enfocada en crear sitios web modernos, accesibles y optimizados para negocios y marcas personales.",
    proyects: "Ver proyectos",
    cv:"Ver CV",
    sobre_mi_texto_uno:"Soy desarrolladora Frontend con experiencia en la creación de sitios web modernos, funcionales y responsivos. Trabajo principalmente con HTML, CSS, JavaScript y WordPress, enfocándome en interfaces limpias y fáciles de usar.",
    sobre_mi_texto_dos:"Me gusta transformar ideas en experiencias digitales que no solo se vean bien, sino que también sean eficientes y accesibles. Disfruto aprender nuevas tecnologías y mejorar continuamente mis habilidades para ofrecer soluciones de calidad.",
    sobre_mi_texto_tres:"Actualmente busco oportunidades para seguir creciendo profesionalmente y participar en proyectos donde pueda aportar mis conocimientos y creatividad.",
    habilidades:"Habilidades",
    encriptador_texto:"Encriptador de texto",
    encriptador_descripcion:"Challenge codificar de texto para Alura Latam, hecho desde cero.",
    repositorio:"Ver repositorio",
    demo:"Ver demo",
    caprice:"Catalogo Caprice",
    caprice_descripcion:"Proyecto personal tipo catalogo/ecommerce de una panaderia de venta al por mayor, hecho desde cero.",
    bosque:"Alma del bosque",
    bosque_descripcion:"Proyecto personal de un negocio de cosmeticos naturales, con blog y tienda virtual, construida con Elementor, Woocomerce, WPForms más plugins de optimizacion y seguridad.",
    luminex_descripcion:"Proyecto personal de una página Corporativa de tecnología, con blog, secciones servicios, sobre nosotros, construida con Elementor, Woocomerce, WPForms más plugins de optimizacion y seguridad.",
    contactame:"Contactame",
    contactame_texto:"¿Quieres contactarme? Completa el siguiente formulario y me pondré en contacto contigo lo antes posible.",
    nombre:"Nombre:",
    mensaje:"Mensaje:",
    enviar:"Enviar"
  },
  en: {
    proyectos_titulo:"Proyects",
    sobre_mi_titulo:"About me",
    contacto_titulo:"Contact",
    title: "Hi, I'm Mel 👋",
    description: "Frontend Developer and WordPress Website Creator, focused on building modern, accessible, and optimized websites for businesses and personal brands.",
    proyects: "View projects",
    cv:"View CV",
    sobre_mi_texto_uno:"I am a Frontend Developer with experience in creating modern, functional, and responsive websites. I mainly work with HTML, CSS, JavaScript, and WordPress, focusing on clean and user-friendly interfaces.",
    sobre_mi_texto_dos:"I enjoy transforming ideas into digital experiences that not only look good but are also efficient and accessible. I like learning new technologies and continuously improving my skills to deliver high-quality solutions.",
    sobre_mi_texto_tres:"I am currently seeking opportunities to continue growing professionally and to participate in projects where I can contribute my knowledge and creativity.",
    habilidades:"Skills",
    encriptador_texto:"Text Encryptor",
    encriptador_descripcion:"Text encryption coding challenge for Alura Latam, built from scratch.",
    repositorio:"View Repository",
    demo:"View demo",
    caprice:"Caprice Catalog",
    caprice_descripcion:"Personal project, a catalog/ecommerce website for a wholesale bakery, built from scratch.",
    bosque:"Forest's soul",
    bosque_descripcion:"Personal project for a natural cosmetics business, featuring a blog and an online store, built with Elementor, WooCommerce, WPForms, along with optimization and security plugins.",
    luminex_descripcion:"Personal project for a corporate technology website, featuring a blog, services sections, and an “About Us” page, built with Elementor, WooCommerce, WPForms, along with optimization and security plugins.",
    contactame:"Contact Me",
    contactame_texto:"Would you like to get in touch? Fill out the form below and I will get back to you as soon as possible.",
    nombre:"Name:",
    mensaje:"Message:",
    enviar:"Send"
  }
};

// 2. Selección de elementos
const elements = document.querySelectorAll("[data-i18n]");
const toggle = document.getElementById("langToggle");

// 3. Función para aplicar idioma
function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });

  localStorage.setItem("language", lang);
  toggle.checked = lang === "en";

  currentLanguage = lang;

  const cvButton = document.getElementById("cvButton");

  if (lang === "en") {
    cvButton.href = "/public/CV-Melissa-Ariza-EN.pdf";
    cvButton.textContent = "View CV";
  } else {
    cvButton.href = "/public/CV-Melissa-Ariza-ES.pdf";
    cvButton.textContent = "Ver CV";
  }
}

// 4. Idioma inicial
const savedLanguage = localStorage.getItem("language") || "es";
setLanguage(savedLanguage);

// 5. Evento del toggle
toggle.addEventListener("change", () => {
  const lang = toggle.checked ? "en" : "es";
  setLanguage(lang);
});
