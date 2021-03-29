let categorias = document.getElementsByClassName("categoria");
let itemsCat1 = document.getElementById("tarjetas-miniaturas");
let catProducto = document.getElementById("catalogo-producto");
const cursor = ["inicio", "inicio"];

$(window).on("load", function () {});

for (const categoria of categorias) {
  if (cursor[0] === "inicio") {
    cursor[0] = categoria.dataset.name;
    render(cursor[0]);
    categoria.classList.toggle("cursor-button");
  }

  categoria.addEventListener("click", () => {
    cursor[0] = categoria.dataset.name;
    borrarCursor();
    categoria.classList.toggle("cursor-button");
    let name = categoria.dataset.name;
    render(name);
    borrar();
  });
}

function render(cat) {
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
      res.productos.forEach((producto) => {
        if (producto.categoria === cat) {
          //cursor[1] = producto.nombre;

          /*CREA LOS ELEMENTOS PARA EL DOM */
          const div1 = document.createElement("div");
          const div2 = document.createElement("div");
          const div3 = document.createElement("button");
          const img = document.createElement("img");
          const titulo = document.createElement("h5");

          /*BASE DE LOS DIVS */
          div1.className = "col-3 tarjeta";
          div1.id = "tarjeta";
          div1.addEventListener("click", renderProducto);
          div1.addEventListener("click", () => {
            div3.classList.toggle("cursor-img")
            div2.classList.toggle('cursor-shadow')
          });
          div2.className = "img-min";
          div2.focus();
          div3.className = "img-miniatura";
          /* console.log("cursor", cursor); */
          if (cursor[1] === "inicio") {
            div3.classList.add("cursor-img");
            div2.classList.toggle('cursor-shadow')
            /* console.log("cursor", cursor); */
            cursor[1] = producto.nombre;
            renderProducto(cursor[1])
          }

          /*INYECCION DE INFO */
          img.src = producto.imgMiniatura;
          img.alt = producto.nombre;
          img.className = "miniatura";
          titulo.className = "my-sm-4 titulo nu-20";
          titulo.textContent = producto.nombre;
          /*AGREGA LOS ELEMENTOS AL DOM*/
          itemsCat1.appendChild(div1);
          $(".tarjeta").addClass("op-1");
          div1.appendChild(div2);
          div2.appendChild(div3);
          div3.appendChild(img);
          div3.appendChild(titulo);

          function renderProducto(cursor) {
            borrarCursor2()
            borrarCursor3()
            if (producto.nombre === producto.nombre) {
              borrar2();
             
              /*CREA LOS ELEMENTOS PARA EL DOM */
              /*COL-1*/
              const pDiv = document.createElement("div");
              const pImg = document.createElement("img");
              /*COL-2*/
              const pDiv2 = document.createElement("div");
              const pH3 = document.createElement("h3");
              const pH5 = document.createElement("h5");
              const pP1 = document.createElement("p");
              const pH5a = document.createElement("h5");
              const pP2 = document.createElement("p");
              const pDiv3 = document.createElement("div");
              const pUl = document.createElement("ul");
              const pLi1 = document.createElement("li");
              const pLi2 = document.createElement("li");
              const pLi3 = document.createElement("li");
              const pP3 = document.createElement("p");
              const pP4 = document.createElement("p");
              const pP5 = document.createElement("p");
              const pSpan1 = document.createElement("span");
              const pSpan2 = document.createElement("span");
              const pSpan3 = document.createElement("span");
              const pBtn = document.createElement("button");
              const pImg2 = document.createElement("img");
              /*COL-1*/
              pDiv.className =
                "col-sm d-block v-align text-center ms-xl-4 producto";
              pDiv.id = "producto";
              pImg.className = "img-grande py-sm-5";
              pImg.src = producto.imgGrande;
              pImg.alt = producto.nombre;
              /*COL-2*/
              pDiv2.className = "col-sm catalogo-info mr-5 producto";
              pDiv2.id = "producto";
              pH3.textContent = producto.nombre;
              pH5.textContent = "Descripción";
              pP1.textContent = producto.descripcion;
              pH5a.textContent = "Composición";
              pP2.textContent = producto.composicion;
              /*TABLA*/
              pDiv3.className = "tbl-producto";
              pP3.textContent = `Producto: `;
              pSpan1.textContent = `${producto.nombre}`;
              pLi1.className = "tbl-item";
              pP4.textContent = `Marca: `;
              pSpan2.textContent = `${producto.marca}`;
              pLi2.className = "tbl-item";
              pP5.textContent = "Envase: ";
              pSpan3.textContent = `${producto.cantidad}`;
              pLi3.className = "tbl-item";
              /*BOTON*/
              pBtn.textContent = "Ver información nutricional";
              pBtn.className = "btn-producto card-text nu-16 ct";
              pBtn.dataset.name = "modal";
              pBtn.dataset.target = `#exampleModalLong${producto.id}`;
              pBtn.dataset.toggle = `modal`;
              /*modal*/
              $(".modal").attr("id", `exampleModalLong${producto.id}`);
              $(".img-modal").attr("src", `${producto.pdf}`);
              /*APENDA AL DOM  */
              /*COL 1 */
              catProducto.appendChild(pDiv);
              pDiv.appendChild(pImg);
              /*COL 2 */
              catProducto.appendChild(pDiv2);
              pDiv2.appendChild(pH3);
              pDiv2.appendChild(pH5);
              pDiv2.appendChild(pP1);
              pDiv2.appendChild(pH5a);
              pDiv2.appendChild(pP2);
              pDiv2.appendChild(pDiv3);
              pDiv3.appendChild(pUl);
              pUl.appendChild(pLi1);
              pUl.appendChild(pLi2);
              pUl.appendChild(pLi3);
              pLi1.appendChild(pP3);
              pP3.appendChild(pSpan1);
              pLi2.appendChild(pP4);
              pP4.appendChild(pSpan2);
              pLi3.appendChild(pP5);
              pP5.appendChild(pSpan3);
              pDiv2.appendChild(pBtn);
            }
          }
        }
      });
    });
}

function borrar2() {
  let div2 = document.getElementsByClassName("producto");
  let node = [...div2];
  node.forEach((e) => {
    let div2 = document.getElementById("producto");
    catProducto.removeChild(div2);
  });
}

function borrar() {
  let div2 = document.getElementsByClassName("tarjeta");
  let node = [...div2];
  node.forEach((e) => {
    let div2 = document.getElementById("tarjeta");
    itemsCat1.removeChild(div2);
  });
}

function borrarCursor() {
  for (const categoria of categorias) {
    categoria.classList.remove("cursor-button");
  }
}
function borrarCursor2() {
  let imgMin = document.getElementsByClassName("img-miniatura");
  for (const img of imgMin) {
    img.classList.remove("cursor-img");
  }
}
function borrarCursor3() {
  let imgMin2 = document.getElementsByClassName("img-min");
  for (const img of imgMin2) {
    img.classList.remove("cursor-shadow");
  }
}






