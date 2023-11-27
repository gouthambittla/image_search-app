const inputbox = document.querySelector('.inputcontainer input ')
const btn = document.querySelector('.inputcontainer button');
const imagedisplay = document.querySelector('.imagedisplay')
const imagelinks = document.querySelector(".imagelink")

const apikey = "T4CpzwNVXq8ucNCFMjzu8l6--emfHdXtlSVtqvinAqM"
const url = "https://api.unsplash.com/search/photos?page=1"
async function searchimage(imageName) {
    try {
        if (inputbox.value === "") {
            alert("enter the name of the image")
        }
        else {
            const response = await fetch(url + `&client_id=${apikey}` + `&query=${imageName}`);
            console.log(response)
            const data = await response.json();
            console.log(data);
            const results = data.results;
            // console.log(results)
            results.map((result) => {
                const image = document.createElement('img');
                image.src = result.urls.small;
                imagedisplay.appendChild(image)
                imagedisplay.className = "imagelink"
                const imagelink = document.createElement('a');
                imagelink.href = result.links.html;


            });
            inputbox.value = ""

        }

    } catch (error) {
        alert("the image you are trying to search doesnot exist" + error)
        // console.log("error")
    }
}
btn.addEventListener('click', () => {
    // console.log("button clicked")
    searchimage(inputbox.value);
})
inputbox.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        searchimage(inputbox.value);
    }
});