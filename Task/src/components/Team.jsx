import image1 from "../assets/Team/image1.png";
import image2 from "../assets/Team/image2.png";
import image3 from "../assets/Team/image3.png";

import facebook from "../assets/socials/facebook.svg";
import linkedin from "../assets/socials/linkedin.svg";
import telegram from "../assets/socials/telegram.png";
import twitter from "../assets/socials/twitter.svg";
const Team = () => {
    return (
        <div className="custom_margin text-center">
            <div className=" py-16 px-60">
                <p className="text-[32px] font-bold leading-[40px] pb-4">The Core of Our Team</p>
                <p className="text-greyColor font-normal text-base leading-6">Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>
            </div>

            <div className="flex flex-row justify-evenly text-start px-8 pb-16">
                <div>
                    <img src={image1} alt="" className="w-[384px] h-[348px] rounded-md" />
                    <p className="font-semibold text-[22px] leading-[30px] mt-4">Morgan Drew</p>
                    <p className="text-greyColor font-normal text-base leading-6">Manager</p>
                    <div className="flex flex-row [&>img]:mr-4 mt-4">
                        <img src={twitter} alt="" className="h-5 w-5" />
                        <img src={facebook} alt="" className="h-5 w-5" />
                        <img src={linkedin} alt="" className="h-5 w-5" />
                        <img src={telegram} alt="" className="h-5 w-5" />
                    </div>
                </div>

                <div>
                    <img src={image2} alt="" className="w-[384px] h-[348px] rounded-md" />
                    <p className="font-semibold text-[22px] leading-[30px] mt-4">Jeffery Walker</p>
                    <p className="text-greyColor font-normal text-base leading-6">Lead Designer</p>
                    <div className="flex flex-row [&>img]:mr-4 mt-4">
                        <img src={twitter} alt="" className="h-5 w-5" />
                        <img src={facebook} alt="" className="h-5 w-5" />
                        <img src={linkedin} alt="" className="h-5 w-5" />
                        <img src={telegram} alt="" className="h-5 w-5" />
                    </div>
                </div>
                <div>
                    <img src={image3} alt="" className="w-[384px] h-[348px] rounded-md" />
                    <p className="font-semibold text-[22px] leading-[30px] mt-4">Andrew Steve</p>
                    <p className="text-greyColor font-normal text-base leading-6">UI/UX Designer</p>
                    <div className="flex flex-row [&>img]:mr-4 mt-4">
                        <img src={twitter} alt="" className="h-5 w-5" />
                        <img src={facebook} alt="" className="h-5 w-5" />
                        <img src={linkedin} alt="" className="h-5 w-5" />
                        <img src={telegram} alt="" className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;