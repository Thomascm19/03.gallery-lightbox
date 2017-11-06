var p = {

  imgGaleria: document.querySelectorAll("#galeria ul li img"),
  rutaImagen: null,
  cuerpoDom: document.querySelector("body"),
  lightbox: null
}

var m = {
  inicioGaleria: function() {
    for (var i = 0; i < p.imgGaleria.length; i++) {
      p.imgGaleria[i].addEventListener("click", m.capturaImagen)
    }
  },
  capturaImagen: function(img) {
    p.rutaImagen = img.target;
    m.lightbox(p.rutaImagen)
  },
  lightbox: function(img) {
    p.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
    p.lightbox = document.querySelector("#lightbox");

    p.lightbox.style.width = "100%";
    p.lightbox.style.height = "100%";
    p.lightbox.style.position = "fixed";
    p.lightbox.style.zIndex = "10";
    p.lightbox.style.background = "rgba(0,0,0,.8)";
    p.lightbox.style.top = 0;
    p.lightbox.style.lefts = 0;
  }

}
m.inicioGaleria();
