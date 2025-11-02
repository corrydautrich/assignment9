console.log("script.js loaded");


const api_key = "Cfc6Jld9ZaYQhpxgdaMfI97gkeW29ahu"

const searchInput = document.querySelector("#search-input");
const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");

async function getGifs(searchTerm = "cats") {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=Cfc6Jld9ZaYQhpxgdaMfI97gkeW29ahu&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    
    const response = await fetch(endpoint);
    const data = await response.json();
    
    const images = data.data.map(gif => gif.images.original.url);
    console.log("Fetched GIFs for:", searchTerm, images);

    gifContainer.innerHTML = "";

    for (const url of images) {
        const col = document.createElement("div");
        col.className = "col-md-3 mb-3";

        const img = document.createElement("img");
        img.src = url;
        img.className = "img-fluid rounded shadow";

        col.appendChild(img);
        gifContainer.appendChild(col);
    }
}

fetchButton.addEventListener("click", () => {
    const term = searchInput.value.trim() || "cats";
    getGifs(term);
})

