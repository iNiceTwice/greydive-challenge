import { useEffect, useState } from "react";
import { getFormsData } from "../controllers/formController";
import Logo from "../components/Logo"
import UserItem from "../components/UserItem";

const Dashboard = () => {
    
    const [forms, setForms] = useState([]);

    useEffect(()=>{
        getFormsData()
            .then((data) => {
                setForms(data)
            })
            .catch((error)=> console.log(error))
    },[])
    console.log(forms)
    return ( 
        <div className="w-full h-full flex lg:flex-row flex-col p-4">
            <div className="w-1/6 text-white rounded-3xl flex flex-col p-6 bg-primary">
                <div className="mt-2">
                    <Logo className="w-[130px]"/>
                </div>
            </div>
            <div className="w-full h-full flex flex-col p-20">
                <h2 className="font-montserrat text-5xl text-slate-800/80 font-semibold mb-8">Dashboard</h2>
                <div className="w-full border"></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mt-16">
                    {
                        forms.map((form) => (
                            <UserItem key={form.id} user={form}/>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;