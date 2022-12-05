/// linkar botão de inicio , display etc a js que dê "display" do que importa
function artigos_pedido() {
    if (typeof(Storage) !== "undefined") {
        const artigos = [];
    }
    if (sessionStorage.artigos) {
        sessionStorage.artigos = sessionStorage(sessionStorage.artigos)+;


      }



  }


  function addEntry() {
    var entryTitle = document.getElementById("entryTitle").value;
    var entryText = document.getElementById("entryText").value;
    var entry = {
        "title": entryTitle,
        "text": entryText
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    var allEntries = [];
    allEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(allEntries));
};