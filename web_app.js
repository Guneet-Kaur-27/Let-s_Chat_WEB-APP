// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC76_eaFcUBYryxm321wBZtjVAvVsPY758",
  authDomain: "let-s-chat-1f2ce.firebaseapp.com",
  projectId: "let-s-chat-1f2ce",
  storageBucket: "let-s-chat-1f2ce.appspot.com",
  messagingSenderId: "119955766604",
  appId: "1:119955766604:web:78560624ee8fac40cce3e9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
