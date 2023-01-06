const Input = ({ label, required, type, name, value, options, onChange }) => {
    
    const inputStyles = {
        submit:"cursor-pointer transition-colors py-3 px-6 rounded-lg w-full bg-secondary text-white hover:bg-secondary/90",
        email:"w-full border rounded-lg py-3 px-4 focus:outline-secondary",
        date:"w-full border rounded-lg py-3 px-4 focus:outline-secondary",
        text:"w-full border rounded-lg py-3 px-4 focus:outline-secondary",
        checkbox:"w-fit mt-4 ml-2 appearance-none rounded-md bg-white border h-5 w-5 checked:bg-secondary before:content-['Sí.'] before:relative before:left-7 before:bottom-1 before",
    }
    
    return ( 
        <>  
            {
                type !== "submit" ?
                
                <label className="w-full font-montserrat font-medium text-slate-800/60 after:content-['*'] after:text-red-600 after:ml-1">{ label }</label>
                :
                null
            }
            {
                type === "select" ?

                <select name={ name } onChange={ onChange } className="w-full border rounded-lg py-3 px-4 focus:outline-secondary">
                    {
                        options.map((option) => (
                            <option 
                                key={ option.label } 
                                name={ option.name }
                                value={ option.value }
                            >
                                { option.label }
                            </option>
                        ))
                    }
                </select>
                :
                <input
                    onChange={ onChange }
                    value={ value }
                    className={ inputStyles[type] } 
                    name={ name }
                    required={ required }
                    type={ type }
                />
            }
        </>
     );
}
 
export default Input;