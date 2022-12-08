//waits for the website to have loaded before executing the js
document.addEventListener("DOMContentLoaded", function(event) { 
    //array containing multiple objects
    let data =(
        [
            {
                "id": "cheeseburger",
                "image": "https://i.imgur.com/kpu7hRD.jpg",
                "name": "Cheeseburger",
                "local": "true",
                "gluten": "true",
                "dairy": "true",
                "description": "This burger is locally sourced, baked on a hot grill where even the coal is sourced from the mountain around the corner."
            },
            {
                "id": "salad",
                "image": "https://i.imgur.com/PeJgelO.jpg",
                "name": "Salad",
                "local": "true",
                "gluten": "false",
                "dairy": "false",
                "description": "This salad was between the tiles of my garden just earlier today, very tasty, very nice."
            },
            {
                "id": "steak",
                "image": "https://i.imgur.com/YauPCEu.jpg",
                "name": "Steak",
                "local": "true",
                "gluten": "false",
                "dairy": "false",
                "description": "If you listen closely, you can still hear it go 'mooooo'"
            }
        ]
    );

//loop through each object in the array
    data.forEach(item => {
        //create a button for each item in data
            let html = `
            <button class="grid-item" id="${item.id}"> 
                <img src="${item.image}" alt="${item.name}" width="200" height="165">
                <p id="nome">${item.name}</p>
            </button>`;
            document.getElementById("container").innerHTML +=  html;
        });
    

    data.forEach(item => {

        document.getElementById(item.id).onclick = function(){
            document.getElementById("popupcontainer").innerHTML = `
            <div id="popup">
                <div id="popupcontent">
                    <img id="foodimage" src="${item.image}"></img>
                    <p>${item.description}</p><div id="close">
                    <img id="closeimage" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Close-Window-icon.png"></img>
                </div>
            </div>
            `;

            //add an onclick that closes the pop-up
            document.getElementById("close").onclick = function(){
                document.getElementById("popupcontainer").innerHTML = '';
            }
        }

     })
    }
);




