import facebook from "../assets/socials/facebook.svg";
import google from "../assets/socials/google.svg"
import instagram from "../assets/socials/instagram.svg"
import apple from "../assets/socials/apple.svg"
import footer from "../assets/footer.png"
const Bottom = () => {

    return (
        <div className="custom_margin py-16">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <img src="logo.svg" alt="" className="w-40 h-10" />
                    <p className="text-greyColor font-normal text-base leading-6 mb-4">Generate outside the box thinking with the possibility to target the low.</p>
                    <div className="flex flex-row">
                        <img src={facebook} alt="" className="w-6 h-6" />
                        <img src={google} alt="" className="w-6 h-6 ml-6" />
                        <img src={apple} alt="" className="w-6 h-6 ml-6" />
                        <img src={instagram} alt="" className="w-6 h-6 ml-6" />
                    </div>
                </div>

                <div className="flex flex-col [&>a]:mb-3 [&>a]:text-base [&>a]:font-medium [&>a]:text-greyColor">
                    <p className=" font-semibold text-base">Products</p>
                    <a href="#" className="mt-6">Features</a>
                    <a href="#">Solutions</a>
                    <a href="#">Integrations</a>
                    <a href="#">Enterprise</a>
                    <a href="#">Solutions</a>
                </div>


                <div className="flex flex-col [&>a]:mb-3 [&>a]:text-base [&>a]:font-medium [&>a]:text-greyColor">
                    <p className=" font-semibold text-base">Resources</p>
                    <a href="#" className="mt-6">Partners</a>
                    <a href="#">Community</a>
                    <a href="#">Developers</a>
                    <a href="#">App</a>
                    <a href="#">Blog</a>
                </div>


                <div className="flex flex-col [&>a]:mb-3 [&>a]:text-base [&>a]:font-medium [&>a]:text-greyColor">
                    <p className=" font-semibold text-base">Why Choose Us?</p>
                    <a href="#" className="mt-6">Channels</a>
                    <a href="#">Scale</a>
                    <a href="#">Watch the Demo</a>
                    <a href="#">Our Competition</a>
                </div>

                <div className="flex flex-col [&>a]:mb-3 [&>a]:text-base [&>a]:font-medium [&>a]:text-greyColor">
                    <p className=" font-semibold text-base">Company</p>
                    <a href="#" className="mt-6">About Us</a>
                    <a href="#">News</a>
                    <a href="#">Leadership</a>
                    <a href="#">Media Kit</a>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-16">
                <img src={footer} alt="" className="w-12 h-12" />
                <p className="text-greyColor font-normal text-base leading-6">&copy; 2023 Lookscout. All Rights Reserved.</p>
            </div>
        </div>

    )
}

export default Bottom;