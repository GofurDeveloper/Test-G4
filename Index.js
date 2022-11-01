




// const btns = document.querySelectorAll("button");

// async function addImg() {
//     const imgUrl = await getImg();
//     const img = document.createElement("img");
//     img.src = imgUrl;
// }

// function getImg() {
//     return new Promise((res, rej) => {
//         const imgUrl = `https://picsum.photos/id/${Math.floor(Math.random() * 500)}/500/250`;
//         const image = new Image();
//         image.src = imgUrl;
//         image.onload = () => res(imgUrl);
//         image.onerror = () => rej(new Error("not found img"));
//     })
// }
// function startRender(e) {
//     const btn = e.target;

//     btn.innerText = "Loading...";

//     addImg(btn);
// }

// btns.forEach((btn) => btn.addEventListener("click", startRender));