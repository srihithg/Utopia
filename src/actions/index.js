import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export function signInAPI() {
  return (dispatch) => {
    console.log("Attempting to Sign In");

    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log("Authentication successful");
        console.log(payload);
      })
      .catch((error) => {
        console.error("Authentication Error: ", error);
        alert(error.message);
      });
  };
}
