import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2"
import { motion, AnimatePresence } from "framer-motion"

const UserItem = ( user ) => {

    const [show, setShow] = useState(false);
    const { full_name, email, country_of_origin, terms_and_conditions, birth_date, id } = user.user
    const handleClick = () => {
        setShow(!show)
    }

    return ( 
        <>
            <div className="w-full">
                <div className="bg-white break-words font-montserrat rounded-lg shadow-lg w-full overflow-hidden flex flex-col">
                    <div className="bg-primary text-white py-3 px-4 mb-2">
                        <h3 className="text-xl font-medium">{ full_name }</h3>
                    </div>
                    <div className="py-3 px-4 flex flex-col lg:flex-row">
                        <p className="font-medium mr-2">Email:</p>
                        <p>{ email }</p>
                    </div>
                    <AnimatePresence>
                        {
                            show ? 
                            <motion.div
                                className="px-4 py-2 flex flex-col gap-1"
                                initial={{ height: 0 }} 
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }} 
                                transition={{ duration: 0.5 }}
                            >   
                                <div className="flex flex-col lg:flex-row">
                                    <p className="font-medium mr-2">ID de usuario:</p>
                                    <p>{ id }</p>
                                </div>
                                <div className="flex flex-col lg:flex-row">
                                    <p className="font-medium mr-2">País:</p>
                                    <p className="first-letter:uppercase">{ country_of_origin }</p>
                                </div>
                                <div className="flex flex-col lg:flex-row">
                                    <p className="font-medium mr-2">Nacimiento:</p>
                                    <p>{ birth_date }</p>
                                </div>
                                <div className="flex flex-col lg:flex-row">
                                    <p className="font-medium mr-2">Términos y condiciones:</p>
                                    <p>{ terms_and_conditions ? "Aceptados" : "Rechazados" }</p>
                                </div>
                            </motion.div>
                            :
                            null
                        }
                    </AnimatePresence>
                    <button onClick={ handleClick } className="flex items-end justify-center bg-white hover:bg-slate-50 transition-colors p-1">
                        {
                            show ? 
                            <HiChevronUp className="text-slate-800/80"  size={20}/>
                            :
                            <HiChevronDown className="text-slate-800/80"  size={20}/>
                            
                        }
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default UserItem;