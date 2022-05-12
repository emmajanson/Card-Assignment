/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;

function taskOne() {
    const toggleElement = document.getElementById("answer-one"); /* Metod/konstant att referera till */

    if (blue == true) {
        toggleElement.style.backgroundColor = "white"; /* Om bakgrunden är blå, ändras den till vit */
        blue = false
    }
    else {
        toggleElement.style.backgroundColor = "blue"; /* Annars (alltså i detta fall, om bakgrunden är vit, ändras den till blå */
        blue = true
    }
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
    const random = Math.random() * 1000; /* Konstant att refferera till, som tar fram ett 3-siffrigt random nummer */
    const round = Math.round(random); /* Konstant att refferera till, som avrundar random nummer till heltal */

    numbers.push(round); /* Pushar in avrundat random nummer in i numbers-arrayen */

    const answerTwo = document.getElementById("answer-two");
    answerTwo.innerHTML = numbers; /* Kod som gör att det visas i diven på hemsidan när man klickar på knappen */
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
    const date = new Date();
    const day = date.getDay(); /* Konstant att refferera till, som tar fram dagens datum */

    if (day === 6 || day === 0) {
        alert("Woohooo it's weekend") /* Om det är dag 6 (lördag) eller dag 0 (söndag) så skriver programmet ut woohooo it's weekend, när man klickar på knappen */
    }

    else {
        alert("FML") /* Annars, alltså om det är mån, tis, ons, tors eller fre, så skriver programmet ut FML.  */
    }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera nummer" triggas
*/

function multiplier(valueOne, valueTwo) {
    const result = valueOne * valueTwo /* Konstant att refferera till, som multiplicerar valueOne med valueTwo */
    if (Number.isInteger(result) == false) {
        alert("Jag kan bara multiplicera nummer") /* Om man skriver in något annat än nummer, så skriver programmet ut detta felmeddelande */
    }

    else {
        alert("Produkten är: " + result) /* Annars, så skriver programmet ut Produkten är: result (alltså resultatet av valueOne multiplicerat med valueTwo) */
    }
}

function taskFour(valueOne, valueTwo) {
    multiplier(6, 9); /* Här har jag gett ValueOne och ValueTwo varsitt värde. Det är alltså värdena 6 och 9 som multipliceras med varandra just nu om man klickar på knappen  */
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "apelsin" || fruits[i] === "päron") {
            trash.push(fruits[i]); /* Om det är apelsin eller päron, så pushas dom till trash */
        }
        else {
            eatable.push(fruits[i]); /* Annars, alltså om det är banan, äpple eller citron, så pushas dom till ätligt */
        }
    }

    document.getElementById("answer-five").innerHTML = '<b>Ätligt:</b> ' + eatable + "<br>" + "<b>Skräp:</b> " + trash; /* Kod som gör att programmet visas i div answer 5 och att "ätligt" samt "skräp" skrivs ut i bold text */
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
    persons.forEach(person => {
        if (person.age > 30) {
            overThirty.push(person.name) /* Om personen är över 30 så pushas den till "Över 30" */
        } else {
            underThirty.push(person.name) /* Annars pushas den till "Under 30" */
        }
        if (person.married === true) {
            married.push(person.name) /* Om personen är gift så pushas den till "Gift" */
        } else {
            notMarried.push(person.name) /* Annars pushas den till "Ogift" */
        }
    })

    document.getElementById("answer-six").innerHTML = "<b>Över 30:</b> " + overThirty + "<br>" + "<b>Under 30:</b> " + underThirty + "<br>" + "<b>Gift:</b> " + married + "<br>" + "<b>Ogift</b> " + notMarried; /* Kod som gör att programmet skrivs ut i div answer 6 och att kategori-titlarna skrivs ut med bold text */
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
    document.getElementById("answer-seven").innerHTML = addMeSomeLineBreaks.replace(",", "<br>");; /* Kod som ersätter tecknet , med en radbrytning */
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
    const hideDiv = document.getElementById("card-eight"); /* Konstant att refferera till och som hämtar card-eight från HTML dokumentet */
      hideDiv.style.display = "none"; /* Döljer diven när man klickar på knappen */
    setTimeout(function () {
        hideDiv.style.display = 'block'; 
    }, 3000); /* Diven kommer tillbaka och visas som ett block element igen efter 3 sek (3000 millisekunder) */
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

const date = new Date();
let hour = date.getHours(); /* Hämtar nuvarande tid */
const bgColor = document.getElementsByClassName("answer-container"); /* Konstant att refferera till och som hämtar alla answer-containers */

function taskNine() {
    for (let i = 0; i < bgColor.length; i++) {
        if (hour > 17) { 
            bgColor[i].style.backgroundColor = "blue"; /* Om klockan är över 17 så ändras bakgrunden till blå på alla divar */
        } else {
            bgColor[i].style.backgroundColor = "red"; /* Annars ändras bakgrunden till röd */
        }
    }
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
    if (Number.isInteger(valueOne, valueTwo) === false || typeof operator !== "string") {
        alert("Något är fel") /* Om valueOne eller valueTwo inte är en siffra eller om operatorn inte är en sträng så skrivs detta felmeddelande ut */
        return
    }
    switch (operator) {
        case "add":
            result = valueOne + valueTwo
            alert(result) /* När valueOne och valueTwo adderas så skrivs resultatet ut */
            break;
        case "subtract":
            result = valueOne - valueTwo
            alert(result) /* När valueOne och valueTwo subtraheras så skrivs resultatet ut */
            break;
        case "multiply":
            result = valueOne * valueTwo
            alert(result) /* När valueOne och valueTwo multipliceras så skrivs resultatet ut */
            break;
        case "divide":
            result = valueOne / valueTwo
            alert(result) /* När valueOne och valueTwo divideras så skrivs resultatet ut */
            break;
        default:
            alert("Något är fel") /* När något blir fel så skrivs detta felmeddelande ut */
    }
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
    calculator(8, 3, "divide"); /* Här har jag gett valueOne och valueTwo varsitt värde samt bestämt att värdena skall divideras när programmet körs  */
}