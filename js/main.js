const transitions = {
    en: {
        text: "Welcome to Ireland,",
        text1: " a land that captivates the hearts of travelers worldwide with its breathtaking nature, rich history, and vibrant culture. The Emerald Isle enchants with its picturesque landscapes, from the majestic Cliffs of Moher to the gentle hills of the Wicklow Mountains. Here, you will find not only pristine nature but also a wealth of historical sites that tell the story of the nation's storied past.",
        text2: "Ireland's popularity as a travel destination is undeniable, and for good reason. Every year, millions of tourists from around the globe flock to the island to discover its many facets. The lively capital, Dublin, with its blend of modern flair and traditional charm, offers a plethora of cultural and culinary experiences. Enjoy a pint of Guinness in one of the historic pubs, visit Trinity College to admire the famous Book of Kells, or wander through the winding streets of the Temple Bar district.",
        text3: "But Ireland has much more to offer than just its cities. The diverse landscapes are truly awe-inspiring: miles of coastline that invite you to hike and explore, mystical lakes, and deep forests that beckon you to rest and rejuvenate. Experience the rugged beauty of the Wild Atlantic Way or let yourself drift along the tranquil Shannon River. For adventurers, there are numerous activities such as surfing, hiking, or horseback riding, while culture enthusiasts can explore the many castles, fortresses, and ruins scattered across the island.",
        text4: "Another reason for Ireland's popularity is the warm hospitality of its people. The Irish are known for their friendliness and openness, something every visitor immediately feels. Whether you stay in a cozy bed and breakfast or a luxurious hotel, you will always feel welcome. The vibrant music scene, from traditional Irish tunes to modern beats, ensures there's always something to experience.",
        text5: "And let’s not forget Irish cuisine, which has much more to offer than just potatoes and cabbage. Taste fresh seafood, hearty stews, and, of course, the famous Irish breakfast. Many pubs and restaurants offer local specialties, using fresh, regional ingredients to provide you with an authentic culinary experience.",
        text6: "Ireland is a country that will enchant you with its beauty, culture, and warmth. It is a place where history and modernity harmoniously meet, offering both tranquility and adventure. Plan your trip to Ireland today and discover for yourself why this country captivates so many. Let the magic of the Emerald Isle sweep you off your feet and create unforgettable memories that will stay with you for a lifetime.",
        btn: "Subscribe"
    },
    de: {
        text: "Willkommen in Irland,",
        text1: "einem Land, das mit seiner atemberaubenden Natur, reichen Geschichte und lebendigen Kultur die Herzen von Reisenden weltweit erobert.Irland, die grüne Insel, fasziniert durch ihre malerischen Landschaften, von den majestätischen Klippen von Moher bis zu den sanften Hügeln der Wicklow Mountains.Hier finden Sie nicht nur unberührte Natur, sondern auch eine Fülle an historischen Stätten, die von der bewegten Geschichte des Landes erzählen.",
        text2: "Die Beliebtheit Irlands als Reiseziel ist ungebrochen und das aus gutem Grund. Jahr für Jahr strömen Millionen von Touristen aus aller Welt auf die Insel, um ihre vielen Facetten zu entdecken.Die lebhafte Hauptstadt Dublin, mit ihrer Mischung aus modernem Flair und traditionellem Charme, bietet eine Fülle an kulturellen und kulinarischen Erlebnissen. Genießen Sie ein Pint Guinness in einem der historischen Pubs, besuchen Sie das Trinity College und bewundern Sie das berühmte Book of Kells oder schlendern Sie durch die verwinkelten Gassen des Temple Bar Viertels.",
        text3: "Doch Irland hat weit mehr zu bieten als nur seine Städte. Die landschaftliche Vielfalt ist überwältigend: kilometerlange Küsten, die zum Wandern und Entdecken einladen, mystische Seen und tiefe Wälder, die zum Verweilen und Erholen einladen. Erleben Sie die raue Schönheit des Wild Atlantic Way oder lassen Sie sich von der Ruhe des Shannon-Flusses treiben. Für Abenteurer gibt es zahlreiche Aktivitäten wie Surfen, Wandern oder Reiten, während Kulturinteressierte die vielen Schlösser, Burgen und Ruinen erkunden können, die überall auf der Insel verstreut sind.",
        text4: "Ein weiterer Grund für die Beliebtheit Irlands ist die herzliche Gastfreundschaft seiner Einwohner. Die Iren sind bekannt für ihre Freundlichkeit und Offenheit, was jeder Besucher sofort spürt. Egal, ob Sie in einem gemütlichen Bed & Breakfast übernachten oder in einem luxuriösen Hotel, Sie werden sich stets willkommen fühlen. Die lebendige Musikszene, von traditionellen irischen Klängen bis hin zu modernen Beats, sorgt dafür, dass es immer etwas zu erleben gibt.",
        text5: "Nicht zu vergessen ist die irische Küche, die weit mehr zu bieten hat als nur Kartoffeln und Kohl. Probieren Sie frische Meeresfrüchte, herzhafte Eintöpfe und natürlich das berühmte Irish Breakfast. Viele Pubs und Restaurants bieten lokale Spezialitäten und nutzen frische, regionale Zutaten, um Ihnen ein authentisches Geschmackserlebnis zu bieten.",
        text6: "Irland ist ein Land, das Sie mit seiner Schönheit, Kultur und Herzlichkeit verzaubern wird. Es ist ein Ort, an dem Geschichte und Moderne harmonisch aufeinandertreffen und der sowohl Ruhe als auch Abenteuer bietet. Planen Sie noch heute Ihre Reise nach Irland und entdecken Sie selbst, warum dieses Land so viele Menschen in seinen Bann zieht. Lassen Sie sich von der Magie der grünen Insel verführen und erleben Sie unvergessliche Momente, die Sie ein Leben lang begleiten werden.",
        btn: "Abbonieren",
}
}

const languageSelectop = document.querySelector("select");
let par = document.getElementById("text1");
let par1 = document.getElementById("text2");
let par2 = document.getElementById("text3");
let par3 = document.getElementById("text4");
let par4 = document.getElementById("text5");
let par5 = document.getElementById("text6");
let par6 = document.getElementById("text7");
let par7 = document.getElementById("subscribeButton");
let par8 = document.getElementById("description");

languageSelectop.addEventListener("change", (event) => {
    setLanguage(event.target.value)
})

const setLanguage = (language) => {
    if (language == "en") {
        par.innerText = transitions.en.text;
        par1.innerText = transitions.en.text1;
        par2.innerText = transitions.en.text2;
        par3.innerText = transitions.en.text3;
        par4.innerText = transitions.en.text4;
        par5.innerText = transitions.en.text5;
        par6.innerText = transitions.en.text6;
        par7.innerText = transitions.en.btn;

    } else if (language == "de") {
        par.innerText = transitions.de.text;
        par1.innerText = transitions.de.text1;
        par2.innerText = transitions.de.text2;
        par3.innerText = transitions.de.text3;
        par4.innerText = transitions.de.text4;
        par5.innerText = transitions.de.text5;
        par6.innerText = transitions.de.text6;
        par7.innerText = transitions.de.btn;


    }
}