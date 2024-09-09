async function fetchDogdata(){
    try{
        const response = await fetch("https://eudiko.github.io/ete/dogs.json");
        if(!response.ok){
                throw new Error("couldn't find source");
        }

        const data = await response.json();
        console.log(data);
        
        const randomDogIndex = Math.floor(Math.random() * data.length);
        const dog = data[randomDogIndex];

        document.getElementById('breed1').innerText = dog.name;
        document.getElementById('breed1desc').innerText = dog.bred_for;
        document.getElementById('lifespan1').innerText = `Lifespan: ${dog.life_span} years`;
        document.getElementById('dogImage1').src = dog.image.url;
        breedNameElement.textContent = breedName;
        imageElement.src = dogImage;
    }
    catch(error){
        console.error(error);
    }
}