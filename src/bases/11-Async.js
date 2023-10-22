// Async - Await 

// const getImagenPromesa = () => new Promise( res  => res("La api"))
// getImagenPromesa()
//     .then(console.log)

const getImg = async() => {
    
    try{
        const apiKey = "zF2iIF9hfxfNkrqlZLlIAusef0MYDbdN";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        // Tarea mostrar la imagen
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        
        document.body.append( img )   
    } catch(error){
        // Manejo del error
        console.error(error)
    }
}
getImg();