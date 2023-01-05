import formItems from "../db/db.json"
import Input from "./Input";

const Form = () => {

    console.log(formItems)
    return ( 
        <>
            <form className="flex flex-col w-full gap-4">
                {
                    formItems.items.map((formItem, index) => (
                         <Input 
                            key={ formItem.name }
                            name={ formItem.name }
                            type={ formItem.type } 
                            label={ formItem.label }
                            options={ formItem?.options}
                        />
                    ))
                }
               
            </form>
        </>
     );
}
 
export default Form;