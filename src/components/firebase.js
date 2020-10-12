import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAq57tUvBTFR_WLqXbOXfD-wI_aUdgvCYc",
    authDomain: "kssmart-task.firebaseapp.com",
    databaseURL: "https://kssmart-task.firebaseio.com",
    projectId: "kssmart-task",
    storageBucket: "kssmart-task.appspot.com",
    messagingSenderId: "947946347391",
    appId: "1:947946347391:web:d9d601908134a79b1bd84a"
  };

  export var firebaseDB = firebase.initializeApp(firebaseConfig);

  export default firebaseDB.database().ref();

  
  