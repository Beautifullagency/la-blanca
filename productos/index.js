let categoria1 = document.getElementById('categoria1')
let categoria2 = document.getElementById('categoria2')
let categoria3 = document.getElementById('categoria3')

let itemsCat1 = document.getElementById('tarjetas-miniaturas')
let catProducto = document.getElementById('catalogo-producto')
categoria1.addEventListener('click', categoria1Click)
categoria2.addEventListener('click', categoria2Click)
categoria3.addEventListener('click', categoria3Click)

$(window).on("load", function(){
  categoria1Click()
})

let cont = true

function categoria1Click() {
  let name = categoria1.dataset.name
  borrar()
  render(name)
}
function categoria2Click() {
  let name = categoria2.dataset.name
  borrar()
  render(name)
}
function categoria3Click() {
  let name = categoria3.dataset.name
  borrar()
  render(name)
}

function render(name) {
  if (cont) {
    fetch('data.json')
      .then(res => res.json())
      .then(res => {
        res.productos.forEach(producto => {
          if (producto.categoria === name) {
            /*CREA LOS ELEMENTOS PARA EL DOM */
            const div1 = document.createElement('div')
            const div2 = document.createElement('div')
            const div3 = document.createElement('button')
            const img = document.createElement('img')
            const titulo = document.createElement('h5')
            /*BASE DE LOS DIVS */
            div1.className = 'col-3 d-block v-align tarjeta'
            div1.id = 'tarjeta'
            div1.onclick = renderProducto
            div2.className = 'img-min b'
            div2.focus()
            div3.className = 'img-miniatura'
            /*INYECCION DE INFO */
            img.src = producto.imgMiniatura
            img.alt = producto.nombre
            img.className = 'miniatura'
            titulo.className = 'mt-2 titulo nu-20'
            titulo.textContent = producto.nombre
            /*AGREGA LOS ELEMENTOS AL DOM*/
            itemsCat1.appendChild(div1)
            $('.tarjeta').addClass("op-1")
            div1.appendChild(div2)
            div2.appendChild(div3)
            div3.appendChild(img)
            div3.appendChild(titulo)
            
            function renderProducto() {
              borrar2()              
              /*CREA LOS ELEMENTOS PARA EL DOM */
              /*COL-1*/
              const pDiv = document.createElement('div')
              const pImg = document.createElement('img')
              /*COL-2*/
              const pDiv2 = document.createElement('div')
              const pH3 = document.createElement('h3')
              const pH5 = document.createElement('h5')
              const pP1 = document.createElement('p')
              const pH5a = document.createElement('h5')
              const pP2 = document.createElement('p')
              const pImg2 = document.createElement('img')
              const pBtn = document.createElement('button')
              /*COL-1*/
              pDiv.className =
                'col-sm d-block v-align text-center ms-xl-4 producto'
              pDiv.id = 'producto'

              pImg.className = 'img-grande'
              pImg.src = producto.imgGrande
              pImg.alt = producto.nombre
              /*COL-2*/
              pDiv2.className = 'col-sm catalogo-info mr-5 producto'
              pDiv2.id = 'producto'
              pH3.textContent = producto.nombre
              pH5.textContent = 'Descripción'
              pP1.textContent = producto.descripcion
              pH5a.textContent = 'Composición'
              pP2.textContent = producto.composicion
              pImg2.src = producto.informacion
              pImg2.alt = producto.nombre
              pBtn.textContent = 'Ver información nutricional'
              pBtn.className = 'btn-producto'
              pBtn.onclick = () => window.open(producto.pdf, 'Download')
              /*APENDA AL DOM  */
              /*COL 1 */
              catProducto.appendChild(pDiv)
              pDiv.appendChild(pImg)
              /*COL 2 */
              catProducto.appendChild(pDiv2)
              pDiv2.appendChild(pH3)
              pDiv2.appendChild(pH5)
              pDiv2.appendChild(pP1)
              pDiv2.appendChild(pH5a)
              pDiv2.appendChild(pP2)
              pDiv2.appendChild(pImg2)
              pDiv2.appendChild(pBtn)
            }
            renderProducto()
          }
        })
      })
  }
}

function borrar2() {
  let div2 = document.getElementsByClassName('producto')
  let node = [...div2]
  node.forEach(e => {
    let div2 = document.getElementById('producto')
    catProducto.removeChild(div2)
  })
}

function borrar() {
  let div2 = document.getElementsByClassName('tarjeta')
  let node = [...div2]
  node.forEach(e => {
    let div2 = document.getElementById('tarjeta')
    itemsCat1.removeChild(div2)
  })
}


