
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }

        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

//1
var cont = 0;

//2
var bitacoras = [];

//3
var formulario = document.getElementById("bitacora");

//console.log(formulario);

//4 Evento submit
//1 Agregue el evento submit a la variable formulario 
//2 añada el método evt.preventDefault() 
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
});

//3 Declare el objeto bitacora, el cual tendra las propiedas cant,
//fecha, descripcion, cantidad, las cuales seran seteadas por medio de la variable formulario. 
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }


    //console.log(formulario[2]);

});

//4 Agregue el objeto bitacora a lista definida por la variable bitacoras, además aumente el valor de la variable cont y mande a llamar a la funcion mostrar 

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = {
        cant: cont,
        fecha: formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

//5 crear nodo
//1 Declare la funcion crearElemento, la cual recibira como argumentos, un obejeto bitacora y el tbody de una table 
//2 Cree la variable td y en ella almacene un nodo de tipo tr, haciendo uso del método document.createElement("tr")
//3 Iterar el objeto bitacora, usando la funcion foreach 
//4 Cree la variable td y en ella almacene un nodo de tipo td 
//5 Cree la variable content y almacene el contenido que tendra el nodo usando document.createTextNode(item) 
//6 Agregue el nodo content al nodo td 
//7 Agregue el nodo td al nodo tr 
//8 Agregue el nodo tr al nodo tbody 


const crearElemento = (bitacora, tbody) => {
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.setAttribute("class", "click");
        tr.appendChild(td);
    });
    tbody.appendChild(tr)


}

//6 Eliminar nodo

//1 Defina la función eliminar que reciba como argumento el elemento tobody de una table 
//2 Haciendo uso de la instrucción while, recorra todos los nodos hijo del elemento tbody 
//3 Haciendo uso de removeChild(tbody.firstChild), remueva los nodos hijos del elemento tobody

const eliminar = (tbody) => {
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}

//7 Defina la función mostrar el cual tendra el siguiente contenido: 

const agregar = () => {
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item, index) => {
        item.addEventListener("click", () => {
            document.querySelector("#fecha").value = item.childNodes[1].textContent;
            document.querySelector("#descp").value = item.childNodes[2].textContent;
            document.querySelector("#cant").value = item.childNodes[3].textContent;

        });
        //console.log(document.querySelector("#fecha").value = item.childNodes[1].textContent);

    })

}

//8 Defina la función mostrar de la siguiente manera: 

const mostrar = () => {
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item => {
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
    //console.log(document.querySelector(".tabla-btc tbody"));
}

//validar formulario

//1 
/*
const camposllenos=() => {
 

 var valorfecha=document.querySelector("#fecha").value = item.childNodes[1].textContent; 
 var valortext=document.querySelector("#descp").value = item.childNodes[2].textContent; 
 var valorcant=document.querySelector("#cant").value = item.childNodes[3].textContent; 
 
  
 
 var eventtr = document.querySelectorAll(".click"); 
 eventtr.forEach((item, index) => { 
     item.addEventListener("click", () => { 
     document.querySelector("#fecha").value = item.childNodes[1].textContent; 
     document.querySelector("#descp").value = item.childNodes[2].textContent; 
     document.querySelector("#cant").value = item.childNodes[3].textContent; 
 
     if (valorfecha=="" || valorfecha==null) {
         alert("campo vacio");
     }
     
    });
 }

 }

*/
//2
function colorBorder() {
    var text = document.getElementById("descp");

    text.oninput = () => {

        var valor = text.value;

        if (valor == "" || valor == null) {

            text.style.borderColor = "red";

        } else {

            text.style.borderColor = "green";

        }
    }
}


