import formItems from "../database/db.json"
import Input from "./Input";
import * as yup from "yup"
import { useFormik } from "formik"
import { saveFormData } from "../controllers/formController";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { HiCheckBadge } from "react-icons/hi2";
import { useState } from "react";

const getMinDate = () => {
    return new Date(1930, 1, 1)
}

const getMaxDate = () => {
    return new Date()
}

const formSchema = yup.object().shape({
    full_name: yup.string().min(3,"Mínimo 3 caracteres.").max(30,"Máximo 30 caracteres.").required("Completa este campo."),
    email:yup.string().email("Email no válido.").required("Completa este campo."),
    birth_date: yup.date().min(getMinDate(), `Fecha mínima: ${getMinDate().toLocaleDateString("es-AR")}`).max(getMaxDate(),`Fecha máxima: ${getMaxDate().toLocaleDateString("es-AR")}`).required("Completa este campo."),
    country_of_origin: yup.string().required("Completa este campo."),
    terms_and_conditions: yup.boolean().required("Completa este campo.")
})


const Form = () => {

    const [showModal, setShowModal] = useState(false);
    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues:{
        full_name:"",
        email:"",
        birth_date:"",
        country_of_origin:"Argentina",
        terms_and_conditions:false
    },
    onSubmit:(values)=>{
        saveFormData({...values, birth_date:new Date(values.birth_date).toLocaleDateString("es-AR")})
            .then(() => {
                setShowModal(true)
            })
            .catch(( error ) => {
                console.log(error)
            })
    },
    validationSchema: formSchema
    })

    const handleClick = () => {
        setShowModal(false)
    }

    return ( 
        <>
            {
                showModal ? 
                <Modal>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-2 items-center">
                            <h3 className="font-montserrat text-xl font-semibold">Enviado con éxito</h3>
                            <HiCheckBadge className="text-green-600" size={30}/>
                        </div>
                        <Link className="w-full" to="/dashboard">
                            <button onClick={ handleClick } className="w-full p-2 bg-secondary hover:bg-secondary/90 transition-colors text-white rounded-lg">Ir a Dashboard</button>
                        </Link>
                    </div>
                </Modal>
                :
                null
            }
            <form onSubmit={ handleSubmit } className="flex flex-col w-full gap-8">
                {
                    formItems.items.map((formItem, index) => (
                        <div className="flex flex-col gap-1" key={ formItem.name + index }>
                            <Input
                                value={ values[formItem.name] }
                                onChange={ handleChange } 
                                required={ formItem.required }
                                name={ formItem.name }
                                type={ formItem.type } 
                                label={ formItem.label }
                                options={ formItem.options}
                            />
                            { touched[formItem.name] && Boolean(errors[formItem.name]) && <span className="ml-4 mb-1 -mt-1 text-sm text-red-600 w-full">{ errors[formItem.name] }</span> }
                        </div>
                    ))
                }
               
            </form>
        </>
     );
}
 
export default Form;