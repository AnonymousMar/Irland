const transitions = {
    en: {
        h: "  Famous Attractions in Munster, Ireland",
        something:" 1.Blarney Castle and the Blarney Stone",
        text1: "Blarney Castle, a medieval fortress near Cork, was built in 1446 by Dermot McCarthy, the King of Munster. The castle is famous for the Blarney Stone, a block of limestone built into the battlements of the castle.",
        text2: "The Blarney Stone is known worldwide because it is said to bestow the gift of eloquence on anyone who kisses it. This tradition draws thousands of visitors each year, who bravely kiss the stone by leaning backwards over a parapet.",
        text3: "Visitors can explore the castle, enjoy the beautiful gardens and grounds, and, of course, kiss the Blarney Stone. The nearby Blarney Woollen Mills offers Irish souvenirs and crafts.",
        text4: " One legend claims that the stone was enchanted by the Irish goddess Clíodhna, who granted the gift of persuasion to the first kisser of the stone to save a kingdom.",
        text5: "The Rock of Cashel, also known as Cashel of the Kings, is a historic site in County Tipperary. This impressive collection of medieval buildings perched on a limestone hill was once the seat of the Kings of Munster.",
        text6: "The Rock of Cashel is renowned for its impressive array of medieval architecture, including high crosses, Cormac's Chapel, and the round tower. The site offers breathtaking views of the surrounding countryside.",
        text7: "Visitors can explore the ancient ruins, admire the frescoes in Cormac's Chapel, and participate in guided tours that explain the rich history and legends of the site.",
        text8: "One legend suggests that the hill on which the Rock of Cashel stands was spat out by the devil himself after being banished by St. Patrick. This led to the establishment of this sacred site.",
        text9: "The Ring of Kerry is a famous scenic drive in County Kerry, forming a 179-kilometer loop around the Iveragh Peninsula. This route offers some of the most stunning landscapes in Ireland.",
        text10: "The Ring of Kerry is known for its spectacular views of coastlines, mountains, lakes, and charming villages. It is one of Ireland’s most popular tourist attractions, drawing many visitors annually.",
        text11: "Tourists can explore the route by car, bicycle, or on guided tours. Highlights include Killarney National Park, Muckross House, Torc Waterfall, and the Skellig Islands. Hiking and boat trips provide additional opportunities to experience the natural beauty up close.",
        text12: "One of the many legends along the Ring is the story of Oisín and Niamh, who rode the magical horses of the Land of Eternal Youth (Tír na nÓg). It is said that the beauty of the landscape might conceal the entrance to this mystical land.",
        text13: "These attractions in Munster offer a rich blend of history, culture, and natural beauty, making them must-visit destinations for any tourist exploring this region of Ireland!",
        btns: "Subscribe",
        menu: "Homepage",
    },
    de: {
        h: " Berühmte Sehenswürdigkeiten in Munster, Irland ",
        something:" 1. Blarney Castle und der Blarney Stone",
        text1: "Blarney Castle, eine mittelalterliche Festung in der Nähe von Cork, wurde 1446 von Dermot McCarthy, dem König von Munster, erbaut. Die Burg ist bekannt für den berühmten Blarney Stone, einen Kalksteinblock, der in die Zinnen des Schlosses eingebaut ist.",
        text2: "Der Blarney Stone ist weltweit bekannt, weil er angeblich jedem, der ihn küsst, die Gabe der Beredsamkeit verleihen soll. Diese Tradition lockt jährlich Tausende von Besuchern an, die mutig den Stein küssen, indem sie sich rückwärts über eine Brüstung lehnen.",
        text3: "Besucher können das Schloss erkunden, die wunderschönen Gärten und Anlagen genießen und natürlich den Blarney Stone küssen. Der nahegelegene Blarney Woollen Mills bietet zudem irische Souvenirs und Handwerkskunst.",
        text4: "Eine Legende besagt, dass der Stein ursprünglich von der irischen Göttin Clíodhna verzaubert wurde, die dem ersten Küsser des Steins die Gabe der Überzeugungskraft verlieh, um ein Königreich zu retten.",
        text5: "Der Rock of Cashel, auch bekannt als Cashel of the Kings, ist eine historische Stätte in der Grafschaft Tipperary. Diese beeindruckende Ansammlung mittelalterlicher Gebäude, die auf einem Kalksteinhügel thronen, war einst Sitz der Könige von Munster.",
        text6: "Der Rock of Cashel ist berühmt für seine beeindruckende Sammlung mittelalterlicher Architektur, darunter die Hochkreuze, die romanische Kapelle von Cormac und der runde Turm. Die Anlage bietet einen atemberaubenden Blick über die umliegende Landschaft.",
        text7: "Besucher können die alten Ruinen erkunden, die Fresken in Cormac's Chapel bewundern und an geführten Touren teilnehmen, die die reiche Geschichte und Legenden der Stätte erläutern.",
        text8: "Eine Legende besagt, dass der Hügel, auf dem der Rock of Cashel steht, von Satan selbst ausgespuckt wurde, als er von St. Patrick verjagt wurde. Dies führte zur Gründung dieser heiligen Stätte.",
        text9: "Der Ring of Kerry ist eine berühmte Panoramastraße im County Kerry, die eine 179 Kilometer lange Schleife um die Iveragh-Halbinsel bildet. Diese Route bietet einige der atemberaubendsten Landschaften Irlands.",
        text10: "Der Ring of Kerry ist bekannt für seine spektakulären Ausblicke auf Küsten, Berge, Seen und malerische Dörfer.Es ist eine der beliebtesten Touristenattraktionen Irlands und zieht jährlich viele Besucher an.",
        text11: "Touristen können die Strecke mit dem Auto, Fahrrad oder auf geführten Touren erkunden. Zu den Höhepunkten gehören der Killarney National Park, Muckross House, Torc Waterfall und die Skellig Islands. Wanderungen und Bootsfahrten bieten zusätzliche Möglichkeiten, die Natur hautnah zu erleben.",
        text12: "Eine der vielen Legenden entlang des Rings ist die Geschichte von Oisín und Niamh, die auf den magischen Pferden des Landes der ewigen Jugend (Tír na nÓg) ritten. Es wird gesagt, dass die Schönheit der Landschaft den Eingang zu diesem mystischen Land verbergen könnte.",
        text13: "Diese Sehenswürdigkeiten in Munster bieten eine vielfältige Mischung aus Geschichte, Kultur und natürlicher Schönheit und sind ein Muss für jeden Touristen, der diese Region Irlands besucht!",
        btns: "Abonnieren",
        menu: "Startseite",
    }
}

const languageSelectop = document.querySelector("select");
let par = document.getElementById("h2");
let par1 = document.getElementById("description");
let par2 = document.getElementById("irland");
let par3 = document.getElementById("irland1");
let par4 = document.getElementById("irland2");
let par5 = document.getElementById("irland3");
let par6 = document.getElementById("irland4");
let par7 = document.getElementById("irland5");
let par8 = document.getElementById("irland6");
let par9 = document.getElementById("irland7");
let par10 = document.getElementById("irland8");
let par11 = document.getElementById("irland9");
let par12 = document.getElementById("irland10");
let par13 = document.getElementById("irland11");
let par14 = document.getElementById("irland12");
let par15 = document.getElementById("btn");
let par16 = document.getElementById("homepage");
languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "en") {
        par.innerText = transitions.en.h;
        par1.innerText = transitions.en.something;
        par2.innerText = transitions.en.text1;
        par3.innerText = transitions.en.text2;
        par4.innerText = transitions.en.text3;
        par5.innerText = transitions.en.text4;
        par6.innerText = transitions.en.text5;
        par7.innerText = transitions.en.text6;
        par8.innerText = transitions.en.text7;
        par9.innerText = transitions.en.text8;
        par10.innerText = transitions.en.text9;
        par11.innerText = transitions.en.text10;
        par12.innerText = transitions.en.text11;
        par13.innerText = transitions.en.text12;
        par14.innerText = transitions.en.text13;
        par15.innerText = transitions.en.btns;
        par16.innerText = transitions.en.menu;


    } else if (language == "de") {
        par.innerText = transitions.de.h;
        par1.innerText = transitions.de.something;
        par2.innerText = transitions.de.text1;
        par3.innerText = transitions.de.text2;
        par4.innerText = transitions.de.text3;
        par5.innerText = transitions.de.text4;
        par6.innerText = transitions.de.text5;
        par7.innerText = transitions.de.text6;
        par8.innerText = transitions.de.text7;
        par9.innerText = transitions.de.text8;
        par10.innerText = transitions.de.text9;
        par11.innerText = transitions.de.text10;
        par12.innerText = transitions.de.text11;
        par13.innerText = transitions.de.text12;
        par14.innerText = transitions.de.text13;
        par15.innerText = transitions.de.btns;
        par16.innerText = transitions.de.menu;

    }
}