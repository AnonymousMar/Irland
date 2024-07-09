const transitions = {
    en: {
        h: "Famous Attractions in Ulster, Ireland ",
        text1: "The Giant’s Causeway, located on the north coast of County Antrim, is one of Ireland’s most famous natural attractions. This fascinating rock formation consists of approximately 40,000 interlocking basalt columns, created by an ancient volcanic eruption.",
        text2: "The Giant’s Causeway is renowned for its unique hexagonal basalt columns and its stunning coastal scenery. It was designated a UNESCO World Heritage Site in 1986 and attracts many visitors annually.",
        text3: "Visitors can walk along the cliff paths, explore the visitor center, which explains the geological history and myths of the area, and marvel at the spectacular rock formations.  ",
        text4: "One of the best-known Irish myths tells that the Giant’s Causeway was built by the Irish giant Fionn mac Cumhaill (Finn McCool) to reach Scotland and fight his rival, Benandonner. When Benandonner came to Ireland, Fionn disguised himself as a baby, and when Benandonner saw the huge baby, he fled in panic back to Scotland, destroying the causeway to prevent Fionn from following him. ",
        text5: "The city walls of Derry/Londonderry, built between 1613 and 1619, are one of the best-preserved city fortifications in Europe. These mighty walls were constructed to protect the city during the “Nine Years’ War.”",
        text6: "The fully intact city walls of Derry are a significant historical attraction. They offer not only a deep insight into the turbulent history of Northern Ireland but also impressive views of the city and the surrounding area.",
        text7: "Visitors can walk along the walls and view the various historical cannons and bastions. Guided tours explain the history of the sieges and the importance of the walls. ",
        text8: "Every August, the Maiden City Festival is held, celebrating the Siege of Derry in 1689. There are parades, historical reenactments, and cultural events.",
        text9: "A legend suggests that a ghostly trumpeter, who warned the city during a siege, lost his life and now haunts the walls, continuing to protect the city.",
        text10: "Glenveagh National Park, located in the heart of County Donegal, is Ireland’s second-largest national park and a paradise for nature lovers. The centerpiece of the park is the picturesque Glenveagh Castle, a 19th-century castle built in the Scottish Baronial style.",
        text11: "Glenveagh National Park is known for its stunning landscapes, including mountains, lakes, forests, and bogs. Glenveagh Castle and its formal gardens are also major attractions, offering a glimpse into the life of Irish aristocracy.",
        text12: "Visitors can tour the castle, stroll through the beautiful gardens, and explore the various hiking trails that traverse the park’s unspoiled nature. Bird watching, fishing, and guided nature walks are also popular activities.",
        text13: "Legend: A legend tells that the spirit of Cornelia Adair, a former owner of Glenveagh Castle, still roams the gardens and halls of the castle, watching over the estate she once loved.These three attractions in Ulster offer a captivating mix of natural beauty, history, and culture, making them essential destinations for any tourist exploring this diverse and impressive region of Ireland!",
        btns: "Subscribe",
        menu: "Homepage",
    },
    de: {
        h: " Berühmte Sehenswürdigkeiten in Ulster, Irland ",
        text1: "Der Giant’s Causeway, gelegen an der Nordküste von County Antrim, ist eine der bekanntesten Naturattraktionen Irlands.Diese faszinierende Felsformation besteht aus etwa 40.000 ineinandergreifenden Basaltsäulen, die durch einen alten Vulkanausbruch entstanden sind.",
        text2: "Der Giant’s Causeway ist berühmt für seine einzigartigen, sechseckigen Basaltsäulen und seine atemberaubende Küstenlandschaft. Er wurde 1986 zum UNESCO-Weltnaturerbe erklärt und zieht jährlich viele Besucher an.",
        text3: "Besucher können entlang der Klippenpfade wandern, das Besucherzentrum besuchen, das die geologische Geschichte und die Mythen der Gegend erläutert, und die spektakulären Felsformationen erkunden. ",
        text4: "Einer der bekanntesten irischen Mythen erzählt, dass der Giant’s Causeway von dem irischen Riesen Fionn mac Cumhaill gebaut wurde, um nach Schottland zu gelangen und gegen seinen Rivalen Benandonner zu kämpfen. Als Benandonner nach Irland kam, verkleidete sich Fionn als Baby, und als Benandonner das riesige Baby sah, floh er in Panik zurück nach Schottland und zerstörte den Causeway, damit Fionn ihm nicht folgen konnte.",
        text5: "Die Stadtmauern von Derry/Londonderry, erbaut zwischen 1613 und 1619, sind eine der am besten erhaltenen Stadtbefestigungen in Europa. Diese mächtigen Mauern wurden errichtet, um die Stadt während des „Nine Years’ War“ zu schützen.",
        text6: "Die vollständig erhaltenen Stadtmauern von Derry sind eine bedeutende historische Attraktion. Sie bieten nicht nur einen tiefen Einblick in die turbulente Geschichte Nordirlands, sondern auch beeindruckende Ausblicke auf die Stadt und die Umgebung. ",
        text7: "Besucher können auf den Mauern spazieren gehen und die verschiedenen historischen Kanonen und Bastionen besichtigen. Es gibt auch geführte Touren, die die Geschichte der Belagerungen und die Bedeutung der Mauern erläutern.  ",
        text8: "Eine Legende besagt, dass ein unheilvoller Trompeter, der die Stadt bei einer Belagerung warnte, sein Leben verlor und nun als Geist entlang der Mauern wandert, um weiterhin die Stadt zu schützen.",
        text9: "Der Glenveagh National Park, im Herzen von County Donegal gelegen, ist der zweitgrößte Nationalpark Irlands und ein Paradies für Naturliebhaber. Das Zentrum des Parks bildet das malerische Glenveagh Castle, ein im schottischen Baronialstil erbautes Schloss aus dem 19. Jahrhundert. ",
        text10: "Glenveagh National Park ist bekannt für seine beeindruckenden Landschaften, einschließlich Bergen, Seen, Wäldern und Mooren. Das Glenveagh Castle und seine formellen Gärten sind ebenfalls bedeutende Attraktionen, die einen Einblick in das Leben der irischen Aristokratie bieten.",
        text11: "Besucher können das Schloss besichtigen, durch die wunderschönen Gärten spazieren und die vielfältigen Wanderwege erkunden, die durch die unberührte Natur des Parks führen. ",
        text12: "Eine Legende besagt, dass der Geist von Cornelia Adair, der ehemaligen Besitzerin von Glenveagh Castle, noch immer die Gärten und Hallen des Schlosses durchstreift und über das Anwesen wacht, das sie einst so liebte.",
        text13: "Diese Sehenswürdigkeiten in Ulster bieten eine faszinierende Mischung aus Natur, Geschichte und Kultur und sind ein Muss für jeden Touristen, der diese vielfältige und beeindruckende Region Irlands erkundet!",
        btns: "Abonnieren",
        menu: "Startseite",
    }
}

const languageSelectop = document.querySelector("select");
let par = document.getElementById("h2");
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