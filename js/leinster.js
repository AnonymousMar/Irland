const transitions = {
    en: {
        h: "1.Trinity College and the Book of Kells",
        something: "1.Trinity College and the Book of Kells",
        text1: "Trinity College in Dublin, founded in 1592, is Ireland’s oldest university and a significant center of education. One of the college's most famous attractions is the Book of Kells, an illuminated manuscript from the 9th century. This masterpiece of medieval art contains the four Gospels of the New Testament, richly decorated with intricate patterns and symbols.",
        text2: "The Book of Kells is considered one of the most beautiful examples of Celtic art and attracts thousands of visitors annually. The manuscript is displayed in the impressive Old Library of Trinity College.",
        text3:" Visitors can view the Book of Kells exhibition, admire the intricate illuminations, and stroll through the Long Room Library, one of the most stunning libraries in the world.",
        text4: " Legend has it that monks from Iona brought the book to Ireland to protect it from Viking raiders who had attacked their monastery.",
        text5:"Kilkenny Castle, built in the 12th century, is a magnificent Norman castle in the city of Kilkenny. The castle has undergone numerous renovations over the centuries and stands today as an impressive example of medieval architecture.",
        text6: "Kilkenny Castle is renowned for its well-preserved structure and stunning gardens. It offers a fascinating glimpse into the life of Anglo-Norman aristocracy in Ireland.",
        text7: "Visitors can explore the castle museum, wander through the ornate rooms, and enjoy the beautifully maintained gardens. The castle also hosts regular art and cultural events.",
        text8: "Stories tell of the ghost of the White Lady, who is said to roam the halls of the castle. She is often associated with Lady Margaret Butler, who lived in the castle in the 16th century.",
        text9: "Glendalough, an early Christian monastic site in County Wicklow, was founded in the 6th century by St. Kevin. The Valley of the Two Lakes is known for its scenic beauty and impressive ruins.",
        text10: "Glendalough is a spiritual and historical center with remnants of a round tower, a cathedral, and several churches. It is a popular destination for pilgrims and tourists interested in Irish history and nature.",
        text11: "Visitors can explore the monastic ruins, hike through the Wicklow Mountains, and admire the picturesque lakes. Guided tours are available to provide deeper insights into the history and legends of Glendalough.",
        text12: "According to legend, St. Kevin experienced a remarkable event when a blackbird built its nest in his hand while he was praying. St. Kevin held his hand still until the eggs hatched, symbolizing his holiness and patience.",
        text13:"These attractions in Leinster offer rich insights into Ireland’s history, culture, and legends, making them must-visit destinations for any tourist exploring the region!",
        btns: "Subscribe",
        menu: "Homepage",
    },
    de: {
        h: " 1.Trinity College und das Book of Kells",
        something: "1.rinity College und das Book of Kells",
        text1: "Das Trinity College in Dublin, gegründet 1592, ist die älteste Universität Irlands und ein bedeutendes Bildungszentrum. Eine der berühmtesten Attraktionen des Colleges ist das Book of Kells, ein illuminiertes Manuskript aus dem 9. Jahrhundert. Es ist ein Meisterwerk der mittelalterlichen Kunst und enthält die vier Evangelien des Neuen Testaments, reich verziert mit komplexen Mustern und Symbolen.",
        text2: "Das Book of Kells gilt als eines der schönsten Beispiele keltischer Kunst und zieht jährlich Tausende von Besuchern an. Das Manuskript wird in der beeindruckenden Alten Bibliothek des Trinity College ausgestellt.",
        text3:"Besucher können die Ausstellung des Book of Kells besuchen, die prächtigen Verzierungen bewundern und durch die Long Room Library spazieren, eine der beeindruckendsten Bibliotheken der Welt.",
        text4: "Eine Legende besagt, dass die Mönche von Iona das Buch nach Irland brachten, um es vor Wikingern zu schützen, die ihr Kloster überfallen hatten.",
        text5: "Kilkenny Castle, erbaut im 12. Jahrhundert, ist eine prächtige Normannenburg in der Stadt Kilkenny. Das Schloss hat im Laufe der Jahrhunderte zahlreiche Renovierungen erfahren und steht heute als beeindruckendes Beispiel mittelalterlicher Architektur.",
        text6:"Kilkenny Castle ist berühmt für seine gut erhaltene Struktur und die atemberaubenden Gärten. Es bietet einen faszinierenden Einblick in das Leben der anglo-normannischen Aristokratie in Irland.",
        text7: "Besucher können das Schlossmuseum erkunden, durch die kunstvollen Zimmer spazieren und die wunderschön gepflegten Gärten genießen. Es gibt auch regelmäßige Kunst- und Kulturveranstaltungen im Schloss.",
        text8: "Es gibt Geschichten über den Geist der „Weißen Dame“, die durch die Hallen des Schlosses wandeln soll. Sie wird oft mit Lady Margaret Butler in Verbindung gebracht, die im 16. Jahrhundert im Schloss lebte.",
        text9: "Glendalough, ein frühes christliches Kloster im County Wicklow, wurde im 6. Jahrhundert von St. Kevin gegründet. Die „Tal der zwei Seen“ ist bekannt für seine malerische Landschaft und die beeindruckenden Ruinen.",
        text10: "Glendalough ist ein spirituelles und historisches Zentrum mit Überresten eines Rundturms, einer Kathedrale und mehrerer Kirchen. Es ist ein beliebtes Ziel für Pilger und Touristen, die sich für irische Geschichte und Natur interessieren.",
        text11: "Besucher können die Klosterruinen erkunden, Wanderungen durch die Wicklow Mountains unternehmen und die idyllischen Seen bewundern. Es gibt auch geführte Touren, die die Geschichte und Legenden von Glendalough näherbringen.",
        text12: "Der Legende nach soll St. Kevin einen seltsamen Vorfall erlebt haben, als eine Amsel ihr Nest in seiner Hand baute, während er betete. St. Kevin hielt seine Hand still, bis die Eier geschlüpft waren, was als Symbol seiner Heiligkeit und Geduld gilt.",
        text13:"Diese Sehenswürdigkeiten in Leinster bieten einen reichen Einblick in die Geschichte, Kultur und Legenden Irlands und sind ein Muss für jeden Touristen, der die Region besucht!",
        btns: "Abonnieren",
        menu:"Startseite",
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