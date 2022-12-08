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
  



  filterSelection("all")
  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  





  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }
  
  // Add active class to the current control button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }