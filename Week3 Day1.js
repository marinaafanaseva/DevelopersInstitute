//Mercury Venus Earth Mars Jupiter Saturn Uranus Neptune
//sattellite: Earth - 1, Mars - 2, Jupiter - 79, Saturn - 82 and more, Uranus - 27, Neptune - 14
//Список планет Солнечной системы по порядку от Солнца выглядит так: 
//Меркурий, Венера, Земля, Марс, Юпитер, Сатурн, Уран и Нептун. Перечисляя планеты от большей к меньшей, этот порядок меняется. 
//Самой крупной планетой является Юпитер, затем идут Сатурн, Уран, Нептун, Земля, Венера, Марс и, наконец, Меркурий.
let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
//                     0        1         2       3        4          5         6          7
//background		red		  pink	   green  lightgr  yellow     lightyel      blue	  white
let color = ["red", "pink", "green", "lightgreen", "yellow", "orange", "blue", "white"];

let sectionElements = document.getElementsByClassName("listPlanets")[0];

function showPlanets(){
	//create a div PER name
	for (let index = 0; index < planets.length; index++) {
			let div = document.createElement("div");
			div.className = "planet";
			div.style.background = color[index];
	
        sectionElements.appendChild(div);
    };    
}

showPlanets();