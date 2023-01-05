const Input = ({ label, required, type, name, value, options, onChange }) => {
    
    const inputStyles = {
        submit:"cursor-pointer transition-colors py-3 px-6 rounded-lg w-full bg-blue-500 text-white hover:bg-blue-500/90",
        email:"w-full border rounded-lg py-3 px-4 focus:outline-blue-500",
        date:"w-full border rounded-lg py-3 px-4 focus:outline-blue-500",
        text:"w-full border rounded-lg py-3 px-4 focus:outline-blue-500",
        checkbox:"w-fit mt-4 ml-2 appearance-none rounded-md bg-white border h-5 w-5 checked:bg-blue-500 before:content-['Sí.'] before:relative before:left-7 before:bottom-1 before",
    }
    
    return ( 
        <>  
            {
                type !== "submit" ?
                
                <label className="w-full text-lg font-semibold text-slate-800/60 after:content-['*'] after:text-red-600 after:ml-1">{ label }</label>
                :
                null
            }
            {
                type === "select" ?

                <select className="w-full border rounded-lg py-3 px-4 focus:outline-blue-500">
                    {
                        options.map((option) => (
                            <option 
                                key={ option.label } 
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