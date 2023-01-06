import db from "../database/firebase"
import { collection, addDoc, getDocs } from "firebase/firestore"

export const getFormsData = async () => {
    const forms = await getDocs(collection(db, "forms"));
    return forms
}

export const saveFormData = async ( formData ) => {
    await addDoc(collection(db, "forms"), formData)
    
}

