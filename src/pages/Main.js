import Form from "../components/Form";

const Main = () => {
    return ( 
        <section className="w-full h-full grid grid-cols-1 lg:grid-cols-5">
            <div className="w-full h-full p-4 col-span-2 hidden lg:flex text-white">
                <div className="flex flex-col items-center w-full h-full rounded-3xl gradient">
                    <div className="w-full mt-3 p-16">
                        <img height={200} width={130} src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/612ff6936ef1a98f2a9b29cf_logo-greydive-gris.png"/>
                    </div>
                    <div className="w-fit mt-6 xl:mt-16 p-20">
                        <h2 className="font-montserrat text-5xl font-semibold w-full text-start">Empieza tu experiencia con nosotros.</h2>
                        <p className="font-montserrat mt-8 w-5/6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, earum. Laborum obcaecati harum, dolorum iste odio debitis ea libero ab soluta.</p>
                    </div>
                </div>
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