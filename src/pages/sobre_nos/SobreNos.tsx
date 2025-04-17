import { LinkedinLogo, GithubLogo, LinktreeLogo } from '@phosphor-icons/react'
import Card from "../../models/Card";

export default function SobreNos() {
  const pessoas: Card[] = [
    {
        nome: "Eliane Medeiros",
        foto: "https://avatars.githubusercontent.com/u/100229060?v=4",
        descricao: "Responsável pelo desenvolvimento dos componentes Footer e Navbar.",
        linkedin: "https://www.linkedin.com/in/elianempontes/",
        github: "https://github.com/ElianeMPontes",
    },
    {
        nome: "Larissa Mata",
        foto: "https://avatars.githubusercontent.com/u/84134580?v=4",
        descricao: "Responsável pelo desenvolvimento da 'Home Page'.",
        linkedin: "https://www.linkedin.com/in/larissa-mata/",
        github: "https://github.com/larissamata",
    },

    {
        nome: "Mariana Carmo",
        foto: "https://avatars.githubusercontent.com/u/99743029?v=4",
        descricao: "Responsável pelo desenvolvimento da página 'Produto'.",
        linkedin: "https://www.linkedin.com/in/mariana-pimentel-frontend/",
        github: "https://github.com/MariPimentelCarmo",
    },
    {
      nome: "Willa Evangelista",
      foto: "https://avatars.githubusercontent.com/u/84138876?v=4",
      descricao: "Responsável pelo design, desenvolvimento da página 'Sobre Nós' e deploy do site.",
      linkedin: "https://www.linkedin.com/in/willaevangelista/",
      github: "https://github.com/willaevangelista",
      linktree: "https://linktr.ee/willaevangelista",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <h1 style={{ color: '#0061FF' }} className="text-4xl font-bold font-rubik text-center mb-10 whitespace-wrap">Conheça a Equipe Desenvolvedora</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-3xl mx-auto">
        {pessoas.map((pessoa, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
            <h2 style={{ color: '#0061FF' }} className=" text-2xl font-bold font-rubik mb-2">{pessoa.nome}</h2>
            <img
              src={pessoa.foto}
              alt={pessoa.nome}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <p style={{ color: '#666876' }} className="mb-4">{pessoa.descricao}</p>
            <div className="flex justify-center gap-4">
              <a href={pessoa.linkedin} target="_blank" className="text-blue-600 hover:underline font-rubik">
                <LinkedinLogo size={48} weight='bold' />
              </a>
              <a href={pessoa.github} target="_blank" className="text-blue-600 hover:underline font-rubik">
                <GithubLogo size={48} weight='bold' />
              </a>
              {pessoa.linktree && (
                <a href={pessoa.linktree} target="_blank" className="text-blue-600 hover:underline font-rubik">
                    <LinktreeLogo size={48} weight='bold' />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}