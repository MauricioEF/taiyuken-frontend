
const OurWork = () => {
    return (
        <div className="bg-linear-to-b from-surface to-bg relative h-screen grid grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-10 items-start h-full justify-center mx-20">
                <h1 className="text-6xl font-bold py-4">Llevando el desarrollo más allá de nuestras propias ideas</h1>
                <div className="flex flex-col gap-5">
                    <p className="text-justify">Además de trabajar en nuestros proyectos internos, nos esforzamos por desarrollar las ideas de clientes,
                    quienes buscan activamente experiencias para espectadores, alumnos de clase, o bien sus propios clientes.
                </p>
                <p className="text-justify">
                    Nuestra misión es convertir en realidad las ideas de nuestros clientes. Dándoles el poder de compartir sus
                    propias experiencias inmersivas al mundo.
                </p>
                <p>¿Te gustaría conocer más sobre la forma en la que buscamos crear nuestras experiencias? Acompáñanos a la siguiente sección!</p>
                </div>
                <button className="bg-brand py-6 px-5 rounded-2xl w-1/2 text-2xl cursor-pointer hover:bg-brand-hover">SOBRE NOSOTROS</button>
            </div>
            <div className="flex items-center">
                <img src="https://imagedelivery.net/TFdlNS3TWs8qiYkkJ6HFzg/66c351f4-9f9f-4348-29a0-01dc8c6ee300/public"/>
            </div>
        </div>
    )
}

export default OurWork;