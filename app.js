let repia = document.querySelector('#repia');
let result = document.querySelector('.result');

let buttonpierre = document.querySelector('#pierre');
let buttonfeuille = document.querySelector('#feuille');
let buttonciseau = document.querySelector('#ciseau');
let buttonlevel1= document.querySelector('#level1');
let buttonlevel2= document.querySelector('#level2');
let buttonlevel0= document.querySelector('#level0');

let tabgagner = document.querySelector('#gagner');
let tabegalite = document.querySelector('#egalite');
let tabperdu = document.querySelector('#perdu');

let applause = new Audio('applause.mp3');
let lost= new Audio('boo.mp3');
let shotgun= new Audio('shotgun.mp3');

let select = 0
let ia = ""
let tab = []
let score = []

window.onload = function () {
    var imgs = ["hand-rock-regular.svg","hand-paper-regular.svg","hand-scissors-regular.svg"],
        image = document.getElementById("imgturn"),
        index = 0;
    function hop () {
        image.src= imgs[(index++)%imgs.length];
    };
    cool = setInterval(hop, 100);
};

const level_0 = () => {

        select = Math.floor(Math.random() * 3 + 1);
        
        if (select === 1) {
            ia = "Pierre";
            repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
        }
        else if (select === 2) {
            ia = "Feuille";
            repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
        }
        else if (select === 3) {
            ia = "Ciseau";
            repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
        }
    }

const level_1 = () => {

    // Level 1 //

    let count0 = 1 //compteur pierre
    let count1 = 1 //compteur feuille
    let count2 = 1 //compteur ciseau

    console.log(tab)
    console.log("pierre = " + count0)
    console.log("feuille = " + count0)
    console.log("ciseau = " +count0)

    for (let i = 0; i <= tab.length; i++) {
        if (tab[i] === 0) { count0++; }
        else if (tab[i] === 1) { count1++; }
        else if (tab[i] === 2) { count2++; }
    }
  
    select = Math.floor(Math.random() * tab.length)

    if ( select <= count0) {
        ia = "Feuille";
        repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
    }

    else if (select >= 3 && select >= count0 && select <= (count0 + count1)) {
        ia = "Ciseau";
        repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
    }

    else if (select >= 3 && select >= (count0 + count1) && select <= (count0 + count1 + count2)) {
        ia = "Pierre";
        repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
    }

    else {

        select = Math.floor(Math.random() * 3 + 1);
        if (select === 1) {
            ia = "Pierre";
            repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
        }
        else if (select === 2) {
            ia = "Feuille";
            repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
        }
        else if (select === 3) {
            ia = "Ciseau";
            repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
        }
    }
}

const level_2 = () => {

    
let pierre_feuille = 0
let pierre_pierre = 0
let pierre_ciseau = 0

let feuille_feuille = 0
let feuille_ciseau = 0
let feuille_pierre = 0

let ciseau_feuille = 0
let ciseau_ciseau = 0
let ciseau_pierre = 0

    for (let i = 0; i <= tab.length; i++) {

        if (tab[i] === 0 && tab[i+1] === 1) { pierre_feuille++; }
        else if (tab[i] === 0 && tab[i+1] === 0) { pierre_pierre++; }
        else if (tab[i] === 0 && tab[i+1] === 2) { pierre_ciseau++; }

        else if (tab[i] === 1 && tab[i+1] === 0) { feuille_pierre++; }
        else if (tab[i] === 1 && tab[i+1] === 1) { feuille_feuille++; }
        else if (tab[i] === 1 && tab[i+1] === 2) { feuille_ciseau++; }

        else if (tab[i] === 2 && tab[i+1] === 0) { ciseau_pierre++; }
        else if (tab[i] === 2 && tab[i+1] === 1) { ciseau_feuille++; }
        else if (tab[i] === 2 && tab[i+1] === 2) { ciseau_ciseau++; }
    }
   
    let afterpierre = [pierre_feuille, pierre_pierre, pierre_ciseau]
    let afterfeuille = [feuille_feuille, feuille_ciseau, feuille_pierre]
    let afterciseau = [ciseau_feuille, ciseau_ciseau, ciseau_pierre]

        if (  tab[tab.length-1] === 0) {
            if (Math.max(...afterpierre) === pierre_feuille) {
                ia = "Ciseau";
                repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
                console.log("level2 pierre_feuille")
            }
            else if (Math.max(...afterpierre) === pierre_pierre) {
                ia = "Feuille";
                repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
                console.log("level2 pierre_pierre")
            }
            else if (Math.max(...afterpierre) === pierre_ciseau) {
                ia = "Pierre";
                repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
                console.log("level2 pierre_ciseau")
            }
        }
        else if ( tab[tab.length-1] === 1) {
            if (Math.max(...afterfeuille) === feuille_feuille) {
                ia = "Ciseau";
                repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
                console.log("level2  feuille_feuille")
            }
            else if (Math.max(...afterfeuille) === feuille_ciseau) {
                ia = "Pierre";
                repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
                console.log("level2  feuille_ciseau")
            }
            else if (Math.max(...afterfeuille) === feuille_pierre) {
                ia = "Feuille";
                repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
                console.log("level2  feuille_pierre")
            }
        }
        else if (tab[tab.length-1] === 2) {
            if (Math.max(...afterciseau) === ciseau_feuille) {
                ia = "Ciseau";
                repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
                console.log("level2  ciseau_feuille")
            }
            else if (Math.max(...afterciseau) === ciseau_ciseau) {
                ia = "Pierre";
                repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
                console.log("level2  ciseau_ciseau")
            }
            else if (Math.max(...afterciseau) ===  ciseau_pierre) {
                ia = "Feuille";
                repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
                console.log("level2   ciseau_pierre")
            }

        }

        else {
            select = Math.floor(Math.random() * 3 + 1);
          
            if (select === 1) {
                ia = "Pierre";
                repia.innerHTML = '<img src="hand-rock-regular.svg" alt="">'
            }
            else if (select === 2) {
                ia = "Feuille";
                repia.innerHTML = '<img src="hand-paper-regular.svg" alt="">'
            }
            else if (select === 3) {
                ia = "Ciseau";
                repia.innerHTML = '<img src="hand-scissors-regular.svg" alt="">'
            }
        }
} 

const resultats = (button) => {

    if (button === 0 && ia === "Ciseau") {
        result.innerHTML = "GAGNER !!!";
        score.push("gagner");
        applause.play();
    }
    else if (button === 1 && ia === "Pierre") {
        result.innerHTML = "GAGNER !!!";
        score.push("gagner");
        applause.play();
    }
    else if (button === 2 && ia === "Feuille") {
        result.innerHTML = "GAGNER !!!";
        score.push("gagner");
        applause.play();
    }
    else if (button === 1 && ia === "Feuille") {
        result.innerHTML = "EGALITE !!!";
        score.push("egalité");
        shotgun.play();
    }
    else if (button === 0 && ia === "Pierre") {
        result.innerHTML = "EGALITE !!!";
        score.push("egalité");
        shotgun.play();
    }
    else if (button === 2 && ia === "Ciseau") {
        result.innerHTML = "EGALITE !!!";
        score.push("egalité");
        shotgun.play();
    }
    else {
        result.innerHTML = "PERDU !!!";
        score.push("perdu");
        lost.play()
    }

    let win = 0
    let equality = 0
    let loss = 0

    for (let i = 0; i <= score.length; i++) {
        if (score[i] === "gagner") { win++; }
        else if (score[i] === "egalité") { equality++; }
        else if (score[i] === "perdu") { loss++; }
    }
    tabgagner.innerHTML = win
    tabegalite.innerHTML = equality
    tabperdu.innerHTML = loss
}


buttonpierre.onclick = () => {
    level_0()
    resultats(0)
    tab.push(0)
}

buttonfeuille.onclick = () => {
    level_0()
    resultats(1)
    tab.push(1)
}

buttonciseau.onclick = () => {
    level_0()
    resultats(2)
    tab.push(2)
}

buttonlevel0.onclick = () => { 
    document.querySelector('.level1').style.display = 'none';
    document.querySelector('.level0').style.display = 'block';
    document.querySelector('.level2').style.display = 'none';
    buttonlevel0.style.backgroundColor = 'rgba(128, 128, 128, 0.281)';
    buttonlevel1.style.backgroundColor = 'transparent';
    buttonlevel2.style.backgroundColor = 'transparent';
}

buttonlevel1.onclick = () => { 
    document.querySelector('.level1').style.display = 'block';
    document.querySelector('.level0').style.display = 'none';
    document.querySelector('.level2').style.display = 'none';
    buttonlevel1.style.backgroundColor = 'rgba(128, 128, 128, 0.281)';
    buttonlevel0.style.backgroundColor = 'transparent';
    buttonlevel2.style.backgroundColor = 'transparent';
}

buttonlevel2.onclick = () => { 
    document.querySelector('.level1').style.display = 'none';
    document.querySelector('.level0').style.display = 'none';
    document.querySelector('.level2').style.display = 'block';
    buttonlevel2.style.backgroundColor = 'rgba(128, 128, 128, 0.281)';
    buttonlevel1.style.backgroundColor = 'transparent';
    buttonlevel0.style.backgroundColor = 'transparent';
}

let buttonpierre_1 = document.querySelector('#pierre_1');
let buttonfeuille_1 = document.querySelector('#feuille_1');
let buttonciseau_1 = document.querySelector('#ciseau_1');

buttonpierre_1.onclick = () => {
    level_1()
    resultats(0)
    tab.push(0)
}

buttonfeuille_1.onclick = () => {
    level_1()
    resultats(1)
    tab.push(1)
}

buttonciseau_1.onclick = () => {
    level_1()
    resultats(2)
    tab.push(2)
}



let buttonpierre_2 = document.querySelector('#pierre_2');
let buttonfeuille_2 = document.querySelector('#feuille_2');
let buttonciseau_2 = document.querySelector('#ciseau_2');

buttonpierre_2.onclick = () => {
    level_2()
    resultats(0)
    tab.push(0)
}

buttonfeuille_2.onclick = () => {
    level_2()
    resultats(1)
    tab.push(1)
}

buttonciseau_2.onclick = () => {
    level_2()
    resultats(2)
    tab.push(2)
}

