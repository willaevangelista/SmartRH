function Produto() {
    return (
        <>
            <div className="bg-white flex justify-center">
                <div className="container flex flex-col items-center py-8 px-4 text-neutral-800">
                    <img
                        src="https://ik.imagekit.io/6bnza7ohp/gestao%20de%20pessoas.webp?updatedAt=1744916622261"
                        alt="Equipe de RH"
                        className="w-4/5 h-64 md:h-80 lg:h-96 object-cover rounded shadow-lg"
                    />

                    <div className="w-full max-w-4xl text-left">
                        <h2 className="text-4xl font-bold mt-6 mb-4 text-[#0061FF]">

                            SmartRH: Inovação e Eficiência na Gestão de Pessoas
                        </h2>

                        <p className="text-lg mb-6">
                            O <strong>SmartRH</strong> é um software de gestão de Recursos Humanos desenvolvido para tornar os processos do seu RH mais ágeis, organizados e estratégicos. Ideal para empresas de todos os portes, ele integra tecnologia e praticidade para facilitar o dia a dia do setor de RH — do recrutamento à gestão de desempenho.
                        </p>

                        <h3 className="text-2xl font-semibold mb-2">Principais funcionalidades</h3>
                        <ul className="text-lg list-disc list-inside mb-6 space-y-1">
                            <li>Gestão de colaboradores: centralize dados dos funcionários, histórico, contratos, férias e mais.</li>
                            <li>Recrutamento e seleção inteligente: receba currículos, aplique filtros e encontre talentos com poucos cliques.</li>
                            <li>Controle de ponto online: registro digital de jornada com app móvel e QR Code.</li>
                            <li>Avaliação de desempenho: feedbacks, metas e indicadores de performance.</li>
                            <li>Gestão de benefícios: plano de saúde, vale-refeição, transporte etc.</li>
                            <li>Relatórios e dashboards: dados em tempo real para decisões estratégicas.</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-2">Por que escolher o SmartRH?</h3>
                        <ul className="text-lg list-disc list-inside mb-6 space-y-1">
                            <li>Interface simples, moderna e intuitiva</li>
                            <li>Redução de erros e retrabalho com automação</li>
                            <li>Acesso seguro e online, de qualquer lugar</li>
                            <li>Suporte especializado e atualizações constantes</li>
                            <li>Flexível para empresas de qualquer porte</li>
                        </ul>

                        <p className="text-xl font-semibold mb-8">
                            Com o <strong>SmartRH</strong>, sua empresa ganha tempo, produtividade e dados confiáveis para decisões inteligentes.
                            Invista em tecnologia e leve sua gestão de pessoas para o próximo nível!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Produto;
