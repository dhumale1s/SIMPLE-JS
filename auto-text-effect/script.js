const containerE1 = document.querySelector(".container");

const careers = ["FreeLancer", "Software Developer", "Artist", "Electronics Engineer"];

let careerIndex = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    const careerName = careers[careerIndex].slice(0, characterIndex);
    const firstCharacter = careerName.charAt(0).toLowerCase();
    const article = 'aeiou'.includes(firstCharacter) ? 'an' : 'a';

    containerE1.innerHTML = `
        <h1>I am ${article} ${careerName}</h1>
    `;

    if (characterIndex === careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;

        if (careerIndex === careers.length) {
            careerIndex = 0;
        }
    }

    setTimeout(updateText, 200);
}


/*const containerE1 = document.querySelector(".container")

const careers = ["FreeLancer", "Software Developer", "Artist", "Electronics Engineer"];

let careerIndex = 0;

let characterIndex = 0;

updateText()

function updateText(){
    characterIndex++;
    containerE1.innerHTML = `
    <h1>I am ${careers[careerIndex].slice(0,1) === "A" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;
    //characterIndex++
    if(characterIndex === careers[careerIndex].length){
        careerIndex++
        characterIndex = 0;
    }

    if(careerIndex === careers.length)
    {
        careerIndex = 0;
    }
    setTimeout(updateText, 100);
}
*/
