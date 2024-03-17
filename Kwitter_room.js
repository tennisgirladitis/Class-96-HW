const firebaseConfig = {
  apiKey: "AIzaSyAuyQPIo2byShA4UdPLcUBUsoWomtanJYs",
  authDomain: "class-93-hw.firebaseapp.com",
  databaseURL: "https://class-93-hw-default-rtdb.firebaseio.com",
  projectId: "class-93-hw",
  storageBucket: "class-93-hw.appspot.com",
  messagingSenderId: "416739679280",
  appId: "1:416739679280:web:e5bc20c1189c3571c7e1f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding Room Name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class = 'room_name' id = " + Room_names + " onclick = 'redirecttoroomName(this.id)'> #" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirecttoroomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logOut() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

