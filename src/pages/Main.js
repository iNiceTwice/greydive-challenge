import Form from "../components/Form";

const Main = () => {
    return ( 
        <section className="w-full h-full grid grid-cols-1 lg:grid-cols-5">
            <div className="w-full h-full p-4 col-span-2 hidden lg:flex text-white">
                <div className="flex flex-col items-center w-full h-full rounded-3xl bg-blue-500">
                    <div className="w-full mt-40 p-16">
                        <h2 className="text-6xl font-semibold mb-4">greydive forms</h2>
                        <p className="text-2xl">Cuéntanos sobre tí.</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full col-span-3 p-4 flex flex-col lg:items-center">
                <div className="w-full h-full flex flex-col p-6 lg:p-16 mt-16 lg:max-w-3xl" >
                    <h2 className="text-4xl font-semibold mb-10">Profile</h2>
                    <Form/>
                </div>
            </div>
        </section>
     );
}
 
export default Main;