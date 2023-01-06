import { useEffect, useState } from "react";
import { getFormsData } from "../controllers/formController";
import Logo from "../components/Logo"
import UserItem from "../components/UserItem";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Skeleton from "../components/Skeleton";

const Dashboard = () => {
    
    const [forms, setForms] = useState([]);

    useEffect(()=>{
        getFormsData()
            .then((data) => {
                setForms(data)
            })
            .catch((error)=> console.log(error))
    },[])

    return ( 
        <div className="w-full h-fit min-h-full flex lg:flex-row flex-col justify-items-stretch p-4">
            <div className="w-full min-h-full lg:w-1/6 text-white mb-16 lg:mb-0 rounded-3xl flex flex-col p-6 bg-primary">
                <div className="lg:mt-4">
                    <Link to="/">
                        <Logo className="w-[130px]"/>
                    </Link>
                </div>
            </div>
            <div className="w-full h-full flex flex-col p-2 lg:p-20">
                <h2 className="font-montserrat text-5xl text-slate-800/80 font-semibold mb-8">Dashboard</h2>
                <div className="w-full border"></div>
                <motion.div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 pb-10">
                    {
                        forms.length === 0 ? 
                        Array(12).fill().map((item, i)=> (
                            <div key={i} className="w-full">
                                <Skeleton />
                            </div>
                        ))
                        :
                        forms.map(( form, i ) => (
                            <motion.div  key={form.id} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5, delay:i * 0.05}}>
                                <UserItem user={form}/>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </div>
     );
}
 
export default Dashboard;