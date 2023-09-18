setTimeout(() => {
    fetchData()
}, 2000)

function fetchData() {
    const img = document.getElementById("img");
    const info = document.getElementById(".info");
    const content = document.getElementById("content");

    img.innerHTML = `<img src="https://picsum.photos/200/300" alt="random image">`;
    img.classList.remove('skeleton')

    info.innerHTML = "Bayu Ardana"
    info.classList.remove('skeleton')
}