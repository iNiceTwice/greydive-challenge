import ReactDom from 'react-dom';

import { motion } from "framer-motion"

const Modal = ({ children }) => {
    return ReactDom.createPortal( 
        <>
            <div className="fixed top-0 h-screen w-screen flex justify-center items-center bg-slate-100/30">
                <motion.div initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{type:"tween", duration:0.3}} className="rounded-lg p-8 bg-white shadow-lg">
                    { children }
                </motion.div>
            </div>
        </>,
        document.getElementById("portal")
     )
}
 
export default Modal;