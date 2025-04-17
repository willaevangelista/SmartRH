function Produto() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className="container flex flex-col items-center py-8 px-4 text-neutral-800">
                    <h1 className="text-4xl font-extrabold font-rubik text-[#0061ff] text-center mb-10 whitespace-wrap">
                    SmartRH: Inovação e Eficiência na Gestão de Pessoas
                    </h1>
                    <img
                        src="https://ik.imagekit.io/6bnza7ohp/gestao%20de%20pessoas.webp?updatedAt=1744916622261"
                        alt="Equipe de RH"
                        className="w-full max-w-4xl transition-transform transform hover:scale-105
                        -64 md:h-80 lg:h-96 object-cover rounded shadow-lg"
                    />

                    <div className="w-full max-w-4xl text-left">
                        

                        <p className="text-lg mb-2 text-left py-8">
                            O <span className="font-bold text-[#0061ff]">SmartRH</span> é um software de gestão de Recursos Humanos desenvolvido para tornar os processos do seu RH mais ágeis, organizados e estratégicos. Ideal para empresas de todos os portes, ele integra tecnologia e praticidade para facilitar o dia a dia do setor de RH.
                        </p>

                        <h3 className="text-2xl font-semibold mb-2">Principais funcionalidades</h3>
                        <ul className="text-lg list-disc list-inside mb-6 space-y-1">
                            <li>Gestão de colaboradores</li>
                            <li>Centralização das informações essenciais dos trabalhadores, como nome, cargo, departamento e salário</li>
                            
                        </ul>

                        <h3 className="text-2xl font-semibold mb-2">Por que escolher o SmartRH?</h3>
                        <ul className="text-lg list-disc list-inside mb-6 space-y-1">
                            <li>Interface simples, moderna e intuitiva</li>
                            <li>Redução de erros e retrabalho com automação</li>
                            <li>Acesso seguro e online, de qualquer lugar</li>
                            <li>Suporte especializado e atualizações constantes</li>
                            <li>Flexível para empresas de qualquer porte</li>
                        </ul>

                        <p className="text-xl font-medium font-rubik text-[#2E2E2E] bg-[#0061ff1a] border-l-4 border-[#0061ff] px-6 py-4 mt-12 mb-8 rounded-md shadow-sm text-center leading-relaxed">
                            Com o <span className="font-bold text-[#0061ff]">SmartRH</span>, sua empresa ganha tempo, produtividade e dados confiáveis para decisões inteligentes.
                            Invista em tecnologia e leve sua gestão de pessoas para o próximo nível!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Produto;