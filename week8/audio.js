
const div_play = document.createElement("div");
document.body.appendChild(div_play);

const play_button = document.createElement("button");
play_button.textContent = "Play Audio";

let pause_btn = document.createElement("button");
pause_btn.textContent = "Pause";
div_play.appendChild(pause_btn)
pause_btn.style.display = "none";
play_button.style.backgroundColor = "green";
play_button.style.color = "white";
play_button.style.padding = "10px 20px"

div_play.appendChild(play_button);

const audio_File = new Audio("/audio/Ed Sheeran - Shape of You.mp3"); 

audio_File.load();

play_button.addEventListener("click", () =>{
    audio_File.play();
    play_button.style.display = "none";
    pause_btn.style.display = "block"
});

pause_btn.addEventListener("click", () => {
    audio_File.pause();
     play_button.style.display = "block";
     pause_btn.style.display = "none";
});



const all_btns = document.querySelectorAll(".play_new");

all_btns.forEach((btns) => {
    btns.addEventListener("click", () => {
        console.log(btns.textContent)
    })
})

// for (let i = 0; i < all_btns.length; i++) {
//     all_btns[i].addEventListener("click", () => {
//         alert("hello")
//     })
    
// }