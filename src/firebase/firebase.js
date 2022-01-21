import { initializeApp, getApps } from "firebase/app";
import {
	signInWithEmailAndPassword,
	signOut,
	getAuth,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { Alert } from "react-native";
import firebaseConfig from "./config.js";

if (getApps().length === 0) {
	initializeApp(firebaseConfig);
}

export const signUserIn = async (login, password) =>
	signInWithEmailAndPassword(getAuth(), login, password).catch(() =>
		Alert.alert(
			"Authentification échouée",
			"Vos identifiants n'ont pas été reconnus"
		)
	);


export const createUser = async (email, password) => {
	createUserWithEmailAndPassword(getAuth(), email, password).catch(() =>
		Alert.alert(
			"Authentification échouée",
			"Vos identifiants n'ont pas été reconnus"
		)
	);
}

export const signUserOut = async () => signOut(getAuth());
