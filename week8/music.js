
 
// const audioPlay = () => {
//      main_audio = new Audio("https://wynk.in/u/4vpkwx0kU");
//      main_audio.load();
//      main_audio.play()
//      console.log(main_audio);
// };

// Create an audio object and load the audio file
const audio_main = new Audio("/audio/Ed Sheeran - Shape of You.mp3");

audio_main.load()

// Create a button dynamically
const button_create = document.createElement("button");
button_create.textContent = "Play Audio";

// Append the button to the document body
document.body.appendChild(button_create);

// Add a click event listener to play the audio
button_create.addEventListener("click", () => {

    let  new_Prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            const getMe = resolve(audio_main.play())
        }, 2000)
    });

    new_Prom
    .then((getMe) => console.log(getMe))
    .catch((reject) => console.log(reject))
    // audio_main.play().catch((error) => {
    //     console.error("Audio playback failed:", error);
    // });
});

const div_el = document.createElement("div");
document.body.appendChild(div_el);

const bttonEl = document.createElement('button');
bttonEl.textContent = "Play audio 2";
document.body.appendChild(bttonEl);

const play_audio2 = new Audio("/audio/mixkit-confirmation-tone-2867.wav");
play_audio2.load();

const play_Me = () => {
        try {
          console.log(play_audio2);
        //   play_audio2.volume = 0.2;
          play_audio2.play();
          div_el.innerHTML = "Audio can play";
        } catch (error) {
        //   alert("error");
          console.log(`Music can't play because ${error}`);
        }
};

bttonEl.addEventListener("click", play_Me)


// bttonEl.addEventListener("clik", () => {

// })





