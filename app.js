async function fetchDogs(){
    try{
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if(!response.ok){
                throw new Error("couldn't find source");
        }

        const data = await response.json();
        console.log(data);
        const dogImage = data.message;
        const imageElement = document.getElementById("dogImage");
        imageElement.src = dogImage;
    }
    catch(error){
        console.error(error);
    }
}