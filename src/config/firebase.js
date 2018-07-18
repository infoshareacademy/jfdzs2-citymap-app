import firebase from "firebase";

const config = {
    apiKey: "AIzaSyC6ZsKVgfcrRLfR2IrzkDY-PUz31e1Drqk",
    authDomain: "citymap-98893.firebaseapp.com",
    databaseURL: "https://citymap-98893.firebaseio.com",
    projectId: "citymap-98893",
    storageBucket: "",
    messagingSenderId: "846098347222"
};
const fireinit = firebase.initializeApp(config);
export default fireinit;