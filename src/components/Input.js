const Input = ({ label, required, type, name, children, value, options }) => {
    
    const inputStyles = {
        submit:"py-3 px-6 rounded-lg w-full bg-blue-500 text-white hover:bg-blue-500/90",
        email:"w-full border rounded-lg py-3 px-4 focus:outline-blue-500",
        date:"w-full border rounded-lg py-3 px-4 focus:outline-blue-500",
        text:"w-full border rounded-lg py-3 px-4 focus:outline-blue-500",
        checkbox:"w-fit ml-2 appearance-none rounded-lg bg-white border h-5 w-5 checked:bg-blue-500",
    }
    
    return ( 
        <>  
            {
                type !== "submit" ?
                
                <label className="w-full text-lg font-semibold text-slate-800/60">{ label }</label>
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
                    value={ value }
                    className={ inputStyles[type] } 
                    name={ name }
                    required={ required }
                    type={ type }
                />
            }
            { children }
        </>
     );
}
 
export default Input;