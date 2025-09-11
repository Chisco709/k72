// src/constants/menuConfig.js
export const menuItems = [
  {
    title: "Sobre Nosotros",
    items: [
      { label: "Nuestra Historia", href: "/about/history" },
      { label: "Equipo", href: "/about/team" },
      { label: "Misión", href: "/about/mission" }
    ]
  },
  {
    title: "Programas",
    items: [
      { label: "Programa 1", href: "/programs/1" },
      { label: "Programa 2", href: "/programs/2" }
    ]
  },
  {
    title: "Eventos",
    items: [
      { label: "Próximos Eventos", href: "/events/upcoming" },
      { label: "Eventos Pasados", href: "/events/past" }
    ]
  },
  { title: "Coaching", href: "/coaching" },
  { title: "Explorar", href: "/explore" },
  { title: "Tienda", href: "/shop" }
];

export const bannerConfig = {
  message: "85% de mis pacientes reportan mejoras significativas en las primeras 6 sesiones. Inicia tu proceso de cambio hoy.",
  dismissible: true
};
