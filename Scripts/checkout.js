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
  
