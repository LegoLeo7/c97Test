
const firebaseConfig = {
    apiKey: "AIzaSyC6IEVPTrallwktpruvM9gpYotiZJWv9sE",
    authDomain: "kwitterproject-2c58a.firebaseapp.com",
    projectId: "kwitterproject-2c58a",
    storageBucket: "kwitterproject-2c58a.appspot.com",
    messagingSenderId: "686976718355",
    appId: "1:686976718355:web:bd4424b1ead7b2303451e6"
  };

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</dive><hr>";
document.getElementById("output").innerHTML += row;     
//End code
   });});}
getData();

function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
 });

 localStorage.setimage("room_name", room_name);

 window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
   console.log(name)
   localstorage.setImage("room_name", name);
   window.location = "kwitter_page_html";
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "kwitter.html";
}

function send()
{
   msg = document.getElementById("msg").value;
   firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
   }); 

   document.getElementById("msg").value = "";
}

