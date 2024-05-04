import arrowDown from "../assets/arrowDown.png"
const Navbar = () => {
    return (
        <div className="mt-6" >
            <div className="grid grid-cols-5 content-center h-10 custom_margin ">
                <img src="logo.svg" alt="" />
                <ul className="flex flex-right justify-start items-center col-start-2 col-end-5 [&>li]:mr-4 -mt-5">
                    <li ><a href="#">Home</a></li>
                    <li ><a href="#">Our Products</a></li>
                    <div className="flex flex-row items-center">
                        <li className="inline"><a href="#">Resources</a></li>
                        <img src={arrowDown} alt="error" className="h-3 w-3 inline ml-3 mr-4" />
                    </div>
                    <li ><a href="/contact">Contact</a></li>
                </ul>
                <div className="flex flex-row justify-end items-center mb-6 max-md:invisible ">
                    <button className="mr-4 bg-transparent rounded p-2 font-semibold text-blue-400 hover:bg-blue-400 hover:text-white hover:scale-105 transform transition duration-500 ">Sign up</button>

                    <button className=" bg-transparent rounded p-2 font-semibold text-blue-400 hover:bg-blue-400 hover:text-white  hover:scale-105 transform transition duration-500 ">Log In</button>
                </div>
            </div>
            <hr className="w-screen" />
        </div>
    )
}

export default Navbar