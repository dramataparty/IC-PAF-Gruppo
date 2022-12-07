/// linkar botão de inicio , display etc a js que dê "display" do que importa
const histpedidos = []

function currpedido_pedido() {
    var currpedido = JSON.parse(localStorage.getItem("currpedido"));
    if (currpedido == null){
        currpedido = [];
    }
    var artitle = document.getElementById("grid-item")
    currpedido.push(artitle);    
};

function final_pedido(){
    histpedidos.push(currpedido)

}

pastables = document.getElementById('pastables');
checktables = document.getElementById('checktables');

checktables.addEventListener('click', function(e){
    if(e.target != this){
        pastables.appendChild(e.target.cloneNode(true));
        e.target.remove()
    }
  })



pastables.addEventListener('click', function(e){
    if(e.target != this){
      checktables.appendChild(e.target.cloneNode(true));
      e.target.remove()
    }
  })
  
