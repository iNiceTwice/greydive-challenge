import formItems from "../database/db.json"
import Input from "./Input";
import * as yup from "yup"
import { useFormik } from "formik"
import { saveFormData } from "../controllers/formController";

const formSchema = yup.object().shape({
    full_name: yup.string().min(3,"Mínimo 3 caracteres.").max(30,"Máximo 30 caracteres.").required("Completa este campo."),
    email:yup.string().email("Email no válido.").required("Completa este campo."),
    birth_date: yup.date().required("Completa este campo."),
    country_of_origin: yup.string().required("Completa este campo."),
    terms_and_conditions: yup.boolean().required("Completa este campo.")
})

const Form = () => {

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
                
            })
            .catch(( error ) => {
                console.log(error)
            })
    },
    validationSchema: formSchema
    })

    return ( 
        <>
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