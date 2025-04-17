function Home() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className="container flex flex-col items-center py-8 px-4 text-neutral-800">
                    <h1 className="text-4xl font-extrabold font-rubik text-[#0061ff] text-center mb-10 whitespace-wrap">
                    Gerencie colaboradores com o SmartRH!
                    </h1>
                    <img
                        src="https://ik.imagekit.io/willa/pexels-photo-3184424.webp?updatedAt=1744928835470"
                        alt="Imagem Página Home"
                        className="w-full max-w-4xl transition-transform transform hover:scale-105
                        -64 md:h-80 lg:h-96 object-cover rounded shadow-lg"
                    />

                    <div className="w-full max-w-4xl text-left">

                        <p className="text-lg mb-2 text-left pt-6 mt-6">
                        A gestão de pessoas é o coração de uma empresa saudável e eficiente.
                        </p>
                        <p className="text-lg mb-6 mt-6 text-justify font-bold text-[#0061ff]">
                        Com o SmartRH, você tem em mãos uma ferramenta prática e intuitiva para organizar sua equipe e simplificar processos.
                        </p>
                        <p className="text-lg mb-6 text-justify mt-6">
                        Cada funcionalidade foi pensada para otimizar o seu tempo e valoriza o talento de cada colaborador, promovendo um ambiente de trabalho mais
                        produtivo e humano.
                        </p>
                        <p className="text-lg mb-6 text-justify mt-6">
                        Seja parte dessa incrível transformação: cadastre seus colaboradores, atualize informações sempre que necessário, remova dados antigos com facilidade e acompanhe as novidades cada vez mais atualizadas da equipe direto na nossa plataforma.
                        </p>
                    </div>
                    <span className="text-xl font-medium font-rubik text-[#2E2E2E] bg-[#0061ff1a] border-l-4 border-[#0061ff] px-6 py-4 mt-6 mb-8 rounded-md shadow-sm text-center leading-relaxed">
                        Tudo isso, em um só lugar, com a eficiência e inteligência que só o SmartRH oferece!
                    </span>
                </div>
            </div>
        </>
        
    );
}

    export default Home;