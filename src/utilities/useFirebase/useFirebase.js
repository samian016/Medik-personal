import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializationApp from "../firebase/firebase.initialize";
/* this is used to configuring the process of log in or signup a user */
initializationApp();
/* initialize the authentication process */
const useFirebase = () => {
  /* used to hold user data, loading time of logged is status back and error message that will show in the  login ui */
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  /* getting auth */
  const auth = getAuth();
  /* google login process */
  const singInUsingGoogle = () => {
    const GoogleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };
  /* this useEffect to sync the user state */
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");
      } else {
        setUser({});
        setError("");
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, [auth]);
  /* i use auth dependency for removing warning in the console, i have 0 idea on this dependency  */
  /* logout option */
  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      setError("");
      setIsLoading(false);
    });
  };
  /* create user part  */
  const createUser = (email, password, name) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  /* login user process using mail and password */
  const loginUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  /* used to verfy mail  */
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
    });
  };
  /* reset password process */
  const reset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        setError("check mail");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  /* update name process  */
  const updateName = (name) => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(() => {})
      .catch((err) => {
        setError(err.message);
      });
  };
  /* returning functions and state or variable to use in the login page  */
  return {
    user,
    singInUsingGoogle,
    logOut,
    createUser,
    loginUser,
    reset,
    isLoading,
    setUser,
    setIsLoading,
    setError,
    error,
    updateName,
    verifyEmail,
  };
};

export default useFirebase;
