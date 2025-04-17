    import { Link } from "react-router-dom";

    function Navbar() {
    return (
        <>
        <div className="w-full flex justify-center font-rubik py-4 px-4 bg-[#0061ff] text-white">
            <div className="container flex justify-between text-lg">
            <Link
                to="/home"
                className="text-3xl text-[#0061ff] bg-white py-3 px-8 rounded-lg font-bold"
            >
                SmartRH
            </Link>

            <div className="flex gap-6 text-2xl py-4 px-4 font-rubik font-bold">
                    <div className='flex gap-6 text-2xl font-bold'>
                        <Link to="/SobreNos">Sobre Nós</Link>
                        <Link to='/Produto'>Produto</Link>
                    </div>
            </div>
            </div>
        </div>
        </>
    );
    }

    export default Navbar;
