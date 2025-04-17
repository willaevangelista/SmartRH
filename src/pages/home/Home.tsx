        function Home() {
    return (
        <div className="flex flex-col items-center justify-start pt-12 px-6">
        <h1 className="text-4xl font-extrabold font-rubik text-[#0061ff] text-center mb-10 whitespace-nowrap">
            Gerencie colaboradores com o SmartRH!
        </h1>

        <img
            src="https://ik.imagekit.io/larissamata/SmartRH/Frame%201.png?updatedAt=1744913430904"
            alt="Imagem Página Home"
            className="w-full max-w-4xl transition-transform transform hover:scale-105"
        />

        <h2 className="text-2xl font-rubik text-[#2E2E2E] mt-20 mb-10 text-center leading-relaxed px-4">
            A gestão de pessoas é o coração de uma empresa saudável e eficiente.
            <span className="font-bold text-[#0061ff]">
            {" "}
            Com o SmartRH, você tem em mãos uma ferramenta prática e intuitiva
            para organizar sua equipe e simplificar processos.
            </span>{" "}
            Cada funcionalidade foi pensada para otimizar o seu tempo e valorizar o
            talento de cada colaborador, promovendo um ambiente de trabalho mais
            produtivo e humano.
            <br />
            <br />
            Seja parte dessa transformação: cadastre seus colaboradores, atualize
            informações sempre que necessário, remova dados antigos com facilidade e
            acompanhe as novidades da equipe direto na plataforma.
            <br />
            <br />
            <span className="text-xl font-medium font-rubik text-[#2E2E2E] bg-[#0061ff1a] border-l-4 border-[#0061ff] px-6 py-4 mt-12 mb-8 rounded-md shadow-sm text-center leading-relaxed">
            Tudo isso, em um só lugar, com a eficiência e inteligência que só o
            SmartRH oferece!
            </span>
        </h2>
        </div>
    );
    }

    export default Home;
