import { useEffect, useState } from "react";
import { getFormsData } from "../controllers/formController";

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
        <div className="w-full h-full flex lg:flex-row flex-col p-1">
            <div className="w-1/6 text-white rounded-3xl bg-primary">

            </div>
        </div>
     );
}
 
export default Dashboard;