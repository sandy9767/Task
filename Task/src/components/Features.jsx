import easier from "../assets/easier.png";

const Features = () => {
    return (
        <div className="text-center custom_margin block pt-16">
            <p className="text-3xl font-bold">Messaging for all</p>
            <p className="text-base font-normal text-greyColor mt-4">User generated content in real time will have multiple touchpoints for offshoring.</p>
            <div className="mt-16 flex flex-row text-start pl-8">
                <div className="mr-8">
                    <img src={easier} alt="" className="h-12 w-12" />
                    <p className="text-xl font-semibold mt-5">Easier Work Organization</p>
                    <p className="mt-3 text-base font-normal text-greyColor">Efficiently unleash cross-media information without cross-media value. Quickly timely deriverables  for real-time schemas.</p>
                </div>
                <div className="mr-8">
                    <img src={easier} alt="" className="h-12 w-12" />
                    <p className="text-xl font-semibold mt-5">
                        Fast Connection
                    </p>
                    <p className="mt-3 text-greyColor text-base font-normal" >Efficiently unleash cross-media information without cross-media value. Quickly timely deriverables  for real-time schemas.</p>
                </div>
                <div className="mr-8">
                    <img src={easier} alt="" className="h-12 w-12" />
                    <p className="text-xl font-semibold mt-5 ">Streamlined Process</p>
                    <p className="mt-3 text-greyColor text-base font-normal">Efficiently unleash cross-media information without cross-media value. Quickly timely deriverables  for real-time schemas.</p>
                </div>
            </div>
        </div>
    )
}

export default Features