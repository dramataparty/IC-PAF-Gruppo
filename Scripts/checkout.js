histable.addEventListener('click', function(e){
    if(e.target != this){
      checktable.appendChild(e.target.cloneNode(true));
      e.target.remove()
    }
  })
  
checktable.addEventListener('click', function(e){
    if(e.target != this){
      histable.appendChild(e.target.cloneNode(true));
      e.target.remove()
    }
  })

