import db from "../database/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

export const getFormsData = async () => {
    let formsCollection = []
    const querySnapshot = await getDocs(collection(db, "forms"));
    querySnapshot.forEach((doc) => {
        formsCollection.push({ ...doc.data(), id: doc.id })
    });
    return formsCollection
}

export const saveFormData = async ( formData ) => {
    await addDoc(collection(db, "forms"), formData)
    
}

