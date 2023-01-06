import { motion } from "framer-motion"

const Modal = ({ children }) => {
    return ( 
        <>
            <div className="absolute z-50 h-full w-full flex justify-center items-center bg-slate-100/30">
                <motion.div initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{type:"tween", duration:0.4}} className="rounded-lg p-8 bg-white shadow-lg">
                    { children }
                </motion.div>
            </div>
        </>
     );
}
 
export default Modal;