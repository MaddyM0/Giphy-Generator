let giphyData, userInput;

const $input = $("input[type='text']");
const $gifs = $("#gifsCntr");

$("form").on("submit", handleGetData);
function handleGetData(event) {
    event.preventDefault();
    userInput = $input.val();
    $.ajax({
        url:"https://api.giphy.com/v1/gifs/search?q="+ userInput +"&api_key=D9y8qvA9zJMc0yDk19y0TEBysPBNP79N" // www. taken off
    }).then(
        (data) => {
            console.log("data is", data)
            giphyData = data.data[0];
            render();
        },
        (error) => {
            console.log("error is", error)
        }
    )
}
function generateHTML() {
        return `<span class="gifs">
        <video class="video" autoplay src="${giphyData.images.looping.mp4}"></video>
        </span>`
}

function render() {
    $gifs.html(generateHTML())
}