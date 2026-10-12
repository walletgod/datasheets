import { auth, firebaseReady } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
const authLink=document.querySelector("#authLink");
if(firebaseReady&&authLink){onAuthStateChanged(auth,user=>{authLink.textContent=user?"Account":"Login";});}