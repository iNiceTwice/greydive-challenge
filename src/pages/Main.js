import { Link } from "react-router-dom";
import Form from "../components/Form";
import Logo from "../components/Logo"
import Modal from "../components/Modal";
import { HiCheckBadge } from "react-icons/hi2";
import { motion } from "framer-motion";

const Main = () => {
    return ( 
        <section className="w-full h-full grid grid-cols-1 lg:grid-cols-5">
            <Modal>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <h3 className="font-montserrat text-xl font-semibold">Enviado con éxito</h3>
                        <HiCheckBadge className="text-green-600" size={30}/>
                    </div>
                    <Link className="w-full" to="/dashboard">
                        <button className="w-full p-2 bg-secondary hover:bg-secondary/90 transition-colors text-white rounded-lg">Ir a Dashboard</button>
                    </Link>
                </div>
            </Modal>
            <div className="w-full h-full p-4 col-span-2 hidden lg:flex text-white">
                <motion.div 
                    className="flex flex-col items-center w-full h-full rounded-3xl gradient"
                    initial={{opacity:0, x:-50}}
                    animate={{opacity:1, x:0}}
                    transition={{type:"tween", duration:"0.5"}}
                >
                    <div className="w-full mt-3 p-16">
                        <Logo className="w-[130px]"/>
                    </div>
                    <div className="w-fit mt-6 xl:mt-16 p-20">
                        <motion.h2 
                            className="font-montserrat text-5xl font-semibold w-full text-start"
                            initial={{opacity:0, x:-50}}
                            animate={{opacity:1, x:0}}
                            transition={{type:"tween", duration:"0.8"}}
                        >
                            Empieza tu experiencia con nosotros.
                        </motion.h2>
                        <motion.p 
                            className="font-montserrat text-lg mt-8 lg:w-full xl:w-5/6"
                            initial={{opacity:0, x:-50}}
                            animate={{opacity:1, x:0}}
                            transition={{type:"tween", duration:"1"}}                            
                        >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, earum. Laborum obcaecati harum.
                        </motion.p>
                    </div>
                </motion.div>
            </div>
            <div className="w-full h-full col-span-3 p-4 flex flex-col items-center">
                <div className="w-full h-full flex flex-col p-6 xl:p-16 mt-16 lg:w-9/12 font-montserrat" >
                    <h2 className="text-4xl text-slate-800/80 font-semibold">Perfil</h2>
                    <p className="mb-10 mt-2 text-sm">Cuéntanos sobre tí.</p>
                    <Form/>
                </div>
            </div>
        </section>
     );
}
 
export default Main;