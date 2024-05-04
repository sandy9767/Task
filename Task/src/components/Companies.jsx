import google from "../assets/companies/google.svg"
import mailchimp from "../assets/companies/mailchimp.svg"
import paypal from "../assets/companies/paypal.svg"
import pinterest from "../assets/companies/pinterest.svg"
import slack from "../assets/companies/slack.svg"
import twilio from "../assets/companies/twilio.svg"

const Companies = () => {
    return (
        <div className="bg-background mt-16">
            <div className="py-16 px-[420px] text-center ">
                <div >
                    <p className="text-white font-semibold mb-2">1% OF THE INDUSTRY</p>

                    <p className="text-white font-semibold text-[32px]">Welcome to your new digital reality that
                        which will rock your world truly at all.</p>

                    <div className="flex flex-row justify-center items-center mt-8 mb-16 ">
                        <button className="bg-transparent rounded-md p-2 font-semibold text-blue-400 bg-white  px-[18px] py-3 text-[15px]">Sign up</button>

                        <button className="ml-4 bg-transparent rounded-md px-[18px] py-3 font-semibold text-white bg-blue-500 text-[15px]">Log In</button>
                    </div>
                </div>
            </div>
            <div className="[&>img:w-[128px]] [&>img:h-[32px]] flex flex-row justify-evenly px-28 py-16">
                <img src={twilio} alt="" />
                <img src={slack} alt="" />
                <img src={google} alt="" />
                <img src={paypal} alt="" />
                <img src={pinterest} alt="" />
                <img src={mailchimp} alt="" />
            </div>
        </div>
    )
}

export default Companies;