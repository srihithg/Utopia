import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";
import { signInWithPopup } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function signInAPI() {
  return (dispatch) => {
    console.log("Attempting to Sign In");

    signInWithPopup(auth, provider)
      .then((payload) => {
        console.log("Authentication successful");
        dispatch(setUser(payload.user));
      })
      .catch((error) => {
        console.error("Authentication Error: ", error);
        alert(error.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
