
const user_Image = document.getElementById("userImage");
const user_Intro = document.getElementById("user_intro");
const userText = document.querySelector(".user_text");
const user_Email = document.getElementById("Email");
const user_Phone = document.getElementById("Phone");
const user_Address = document.getElementById("Address");
const user_DOB = document.getElementById("DOB");
const generateUser = document.getElementById("userGen");


const loadUserData = async () => {
    try {
        const nameURL = await fetch("https://randomuser.me/api/");
        if (!nameURL.ok) {
            const error_Msg = `Error fetching data: ${nameURL.status}`;
            throw new Error(error_Msg);
        };
        const getData = await nameURL.json();
        console.log(getData);
        const new_Data = getData.results[0];
        // user_Image.style.display = "block";
        user_Image.style.contentVisibility = "Visible";
        // user_Image.style.textAlign = "center"
        user_Image.src = new_Data.picture.large;
        console.log(user_Image.src);
        user_Intro.innerHTML = `Hi my name is`;
        userText.innerHTML = `${new_Data.name.first} ${new_Data.name.last}`;
        user_Email.innerHTML = `My Email is: ${new_Data.email}`;
        user_Phone.innerHTML =  `My phone No is: ${new_Data.cell}`;
        user_Address.innerHTML = `My Location is: ${new_Data.location.city} ${new_Data.location.state}, ${new_Data.location.country}`;
         const check = `${new_Data.dob.date.slice(0, 10)}`;
        user_DOB.innerHTML = `My age is: ${new_Data.dob.date.slice(0, 10)}`;
       
        console.log(check)
        console.log(new_Data);
    } catch (error) {
        user_Intro.innerHTML = error.message;
        console.log(error)
    }
};

generateUser.addEventListener("click", loadUserData)