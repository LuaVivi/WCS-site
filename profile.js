const roluri = {
  act:    { color: "#1ABC9C", label: "actor" },
  char:   { color: "yellow", label: "designer de personaje" },
  anim:   { color: "#E74C3C", label: "animator" },
  sonor:  { color: "#3498DB", label: "artist sonor" },
  edit:   { color: "#E67E22", label: "editor video" },
  cadre:  { color: "#E91E63", label: "designer de cadre" },
  scen:   { color: "#99AAB5", label: "scenarist" }
};

for (const rol in roluri) {
  document.querySelectorAll(`.${rol}`).forEach(el => {
    el.style.backgroundColor = roluri[rol].color;
    if (el.nextElementSibling) {
      el.nextElementSibling.innerHTML = roluri[rol].label;
    }
  });
}
