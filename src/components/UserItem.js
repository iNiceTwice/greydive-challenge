import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2"
import { motion, AnimatePresence } from "framer-motion"

const UserItem = ( user ) => {

    const [show, setShow] = useState(false);
    const { full_name, email, country_of_origin, terms_and_conditions, birth_date, id } = user.user
    const handleClick = () => {
        setShow(!show)
    }

    return ( 
        <>
            <div className="p-4">
                <div className="relative bg-white font-montserrat rounded-lg shadow-lg w-full overflow-hidden flex flex-col">
                    <div className="bg-primary text-white py-3 px-4 mb-2">
                        <h3 className="text-xl font-medium">{ full_name }</h3>
                    </div>
                    <p className="py-3 px-4"><span className="font-medium mr-2">Email:</span>{ email }</p>
                    <AnimatePresence>
                        {
                            show ? 
                            <motion.div
                                className="px-4 flex flex-col gap-1"
                                initial={{ height: 0 }} 
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }} 
                                transition={{ duration: 0.5 }}
                            >   
                                <div><span className="font-medium mr-2">ID de usuario:</span>{ id }</div>
                                <div><span className="font-medium mr-2">País</span> { country_of_origin } </div>
                                <div><span className="font-medium mr-2">Nacimiento:</span>{ birth_date}</div>
                                <div><span className="font-medium mr-2">Términos y condiciones:</span>{ terms_and_conditions ? "Aceptados" : "Rechazados" }</div>
                            </motion.div>
                            :
                            null
                        }
                    </AnimatePresence>
                    <button onClick={ handleClick } className="flex items-end justify-center hover:bg-slate-50 transition-colors p-1">
                        <HiChevronDown className="text-slate-800/80"  size={20}/>
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default UserItem;