const transitions = {
    en: {
        h: "Imprint",
        text1: "Information according to § 5 TMG",
        text2: "Max Mustermann",
        text3: "Musterweg ",
        text4: "12345 Musterstadt",
        text5: "Contact:",
        text6: "Telephone: ",
        text7: "Fax:",
        text8: "E-Mail:",
        text9: "Disclaimer:",
        text10: "Liability for content",
        text11: "Our offer contains links to external websites of third parties, the content of which we have no influence on. Therefore, we cannot assume any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible violations of the law at the time of linking. Illegal content was not present at the time of linking ",
        text12: "Copyright ",
        text13: "The content and works on these pages created by the site operators are subject to German copyright law. Duplication, processing, distribution and any type of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use. As far as the content on this page was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, we ask you to notify us accordingly. If we become aware of any infringements, we will remove such content immediately.",
        text14: "data protection",
        text15: "Our website can generally be used without providing personal data. If personal data (such as name, address or email addresses) is collected on our website, this is always done on a voluntary basis wherever possible. This data will not be passed on to third parties without your express consent. We would like to point out that data transmission on the Internet (e.g. when communicating by email) can have security gaps. Complete protection of data against access by third parties is not possible.",
        text16: "The use of contact data published as part of the imprint obligation by third parties to send unsolicited advertising and information materials is hereby expressly prohibited. The operators of the pages expressly reserve the right to take legal action in the event of unsolicited advertising information being sent, for example through spam emails.",
        text17: "Website Imprint of:",
        btns: "Subscribe",
        menu: "Homepage",
        li:"Data protection",
    },
    de: {
        h: "Impressum",
        text1: "Angaben gemäß § 5 TMG",
        text2: "Max Mustermann",
        text3: "Musterweg",
        text4: "12345 Musterstadt",
        text5: "Kontakt",
        text6: "Telefon:",
        text7: "Fax:",
        text8: "E-Mail:",
        text9: "Haftungsausschluss:",
        text10: "Haftung für Inhalte",
        text11: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen. ",
        text12: "Urheberrecht",
        text13: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die nVervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw.Erstellers.Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.",
        text14: "Datenschutz",
        text15: "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten(beispielsweise Name, Anschrift oder eMail- Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet(z.B.bei der Kommunikation per E- Mail) Sicherheitslücken aufweisen kann.Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.",
        text16: "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen.Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam- Mails, vor.",
        text17: "Website Impressum von:",
        btns: "Abonnieren",
        menu: "Startseite",
        li: "Datenschutzerklärung",
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
let par17 = document.getElementById("irland13");
let par18 = document.getElementById("irland14");
let par19 = document.getElementById("irland15");
let par20 = document.getElementById("irland16");
let par15 = document.getElementById("btn");
let par16 = document.getElementById("homepage");
let par21 = document.getElementById("li2");
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
        par17.innerText = transitions.en.text14;
        par18.innerText = transitions.en.text15;
        par19.innerText = transitions.en.text16;
        par20.innerText = transitions.en.text17;
        par15.innerText = transitions.en.btns;
        par16.innerText = transitions.en.menu;
        par21.innerText = transitions.en.li;


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
        par17.innerText = transitions.de.text14;
        par18.innerText = transitions.de.text15;
        par19.innerText = transitions.de.text16;
        par20.innerText = transitions.de.text17;
        par15.innerText = transitions.de.btns;
        par16.innerText = transitions.de.menu;
        par21.innerText = transitions.de.li;

    }
}