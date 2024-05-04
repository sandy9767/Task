import startNow from "../assets/startNow.png";
import tick from "../assets/tick.svg";
import arrowRight from "../assets/arrowRight.svg";
const StartNow = () => {

    return (
        <div className="mx-28 mt-16 flex flex-row max-md:flex-col">
            <div className="my-[93px] mr-32">
                <p className="leading-[42px] font-semibold text-3xl">Demonstrate branding and consequently think outside</p>
                <p className="text-greyColor text-base font-normal leading-6 pb-6">Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>

                <div className="[&>div]:flex [&>div]:flex-row [&>div]:font-normal [&>div]:text-greyColor [&>div]:leading-6 [&>div]:text-base [&>div]:items-center">
                    <div >
                        <img src={tick} alt="" className="h-[18px] w-[18px] mr-2 mt-[10px]" />
                        <p>Enterprise-grade security</p>
                    </div>

                    <div>
                        <img src={tick} alt="" className="h-[18px] w-[18px] mr-2 mt-[10px]" />
                        <p>99.9% guranteed uptime SLA.</p>
                    </div>

                    <div>
                        <img src={tick} alt="" className="h-[18px] w-[18px] mr-2 mt-[10px]" />
                        <p>Designated customer success team</p>
                    </div>

                    <div className="flex flex-row bg-blue-400 w-[133px] h-[46px] rounded py-3 px-[18px] font-semibold mt-10">
                        <button className="mr-1 text-white font-semibold text-[15px]">Start Now</button>
                        <img src={arrowRight} alt="" className="w-5 h-5" />
                    </div>
                </div>
            </div>
            <img src={startNow} alt="" className="w-[560px] h-[560px]" />
        </div>
    )
}

export default StartNow;