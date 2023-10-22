// Async - Await 

// const getImagenPromesa = () => new Promise( res  => res("La api"))
// getImagenPromesa()
//     .then(console.log)

const getImg = async() => {
    const apiKey = "zF2iIF9hfxfNkrqlZLlIAusef0MYDbdN";
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    // Tarea mostrar la imagen


        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        
        document.body.append( img )    
        // console.log(url)
}
getImg();

// Recreamos este Fetch  para hacerlo arriba
// const apiKey = "zF2iIF9hfxfNkrqlZLlIAusef0MYDbdN";

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//     .then(res => res.json())
//     .then(({data}) => {
//         const { url } = data.images.original;
//         // console.log(data.images.original.url)

//         const img = document.createElement("img");
//         img.src = url;

//         document.body.append( img )
//     })
//     .catch(console.warn)