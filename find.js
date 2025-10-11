const roluri = {
  actorie,
  chardesign,
  animatieb,
  animatiec,
  sonor,
  evideo,
  backdesign,
  scena
};

const selector = document.getElementById('type');

selector.addEventListener("change", function () {
    if (selector.value != null) {
        let ob = document.getElementById(selector.value);
        if (ob) {
            selector.parentNode.insertBefore(ob, selector.nextSibling);
        }
    }
});
