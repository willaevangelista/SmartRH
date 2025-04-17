import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    let data = new Date().getFullYear()

    return (
        <div className="flex justify-center bg-[#0061ff] text-white">
            <div className="container flex justify-between items-center py-4 px-4">
                
                <p className="text-lg font-bold">Desenvolvido com ♥</p>
                
                <p className="text-lg font-bold">© {data} - SmartRH</p>
            
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/school/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <LinkedinLogo size={28} weight="bold" />
                    </a>
                    <a href="https://www.instagram.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <InstagramLogo size={28} weight="bold" />
                    </a>
                    <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noopener noreferrer">
                        <FacebookLogo size={28} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

