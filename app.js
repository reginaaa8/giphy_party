console.log("Let's get this party started!");

// function to add gif to the DOM - to be used below
const $gifResultsArea = $("#gifs");
function addGif(response) {
    // choose random index from data array 
    let numResults = response.data.data.length;

    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        // create gif using data from random index 
        let $newGif = $("<img>", {
            src: response.data.data[randomIdx].images.original.url
        });
        // add gif to results area 
        $gifResultsArea.append($newGif);
    }

}

// handle form submission 
$("#search-form").on("submit", async function (e) {
    // prevent default page refresh upon form submission 
    e.preventDefault();
    // clear search input 
    let searchValue = $("#search-input").val();
    $("#search-input").val("");
    // make AJAX call 
    let result = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "yfBHLELj6k8bW69RC1dHfn1EXn8ERqKi",
            q: searchValue,
        }

    });
    console.log(result);
    addGif(result);
});

// remove all gifs 
$("#remove-btn").on("click", function (e) {
    // prevent default page refresh when button pressed 
    e.preventDefault();
    // clear all giof results 
    $gifResultsArea.empty();
})