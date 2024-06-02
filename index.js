const form = document.getElementById("form");

const createMusicOrderRequest = () => {
    // Traigo elementos
    const inputNick = document.getElementById("nick");
    const inputSongArtist = document.getElementById("song-artist");
   
    // Asigno valores
    const nick = inputNick.value;
    const songArtist = inputSongArtist.value;
    return { nick, songArtist };
  };

const baseURL = 'https://radio-dj-759e2-default-rtdb.firebaseio.com/'

// const getMusicOrders = async () => {
//     try {
//       let response = await fetch(`${baseURL}/users.json`);
//       let musicOrders = await response.json();
//       // console.log("respuesta en getusers: " + JSON.stringify(users))
//       let musicOrdersArray = [];
//       Object.keys(musicOrders).forEach((key) =>
//         musicOrdersArray.push({
//           id: key,
//           musicOrders: musicOrders[key],
//         })
//       );
//       console.log(musicOrdersArray);
//       // let properties = object.getOwnPropertyNames(users);
//       // console.log(properties);
//     } catch (error) {
//       console.log("error en GET /users: " + error);
//     }
//   };
//   getMusicOrders();

const sendMusicOrder = (e) => {
    e.preventDefault();
    // spinner.classList.add("d-inline-block");
    // spinner.classList.remove("d-none");
    fetch(`${baseURL}.json`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(createMusicOrderRequest()),
    })
    then((response) => {
        if (response.ok) {
        //   spinner.classList.add("d-none");
        //   spinner.classList.remove("d-inline-block");
          window.location.href = "index.html";
        }
        return response.json();
      })
      .then((data) => console.log("response body POST /song artist: " + data))
      .catch((error) => console.log("error en POST /song artist: " + error));
  };
  
  form.addEventListener("submit", sendMusicOrder);