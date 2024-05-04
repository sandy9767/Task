import axios from "axios";
import { check } from "prettier";
import { useState } from "react";


const ContactUs = () => {
    let checked = false;

    const [post, setPost] = useState({
        name: "",
        email: "",
        number: "",
        getInTouch: "",
        message: "",
    })

    const handleInput = (event) => {
        setPost({
            ...post, [event.target.name]: event.target.value
        })
    }

    const handleCheck = (event) => {
        checked = event.target.checked;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const postJson = JSON.stringify(post);
        console.log(checked)
        if (!checked) {
            alert("You must accept the privacy policy.");
            return;
        }
        axios.post("http://127.0.0.1:5000/contact", { postJson }, { headers: { 'Content-Type': 'application/json' } }).then(response => {
            alert(response.data['msg']);
        }).catch(err => {
            alert(err.response.data.message)
        });
    }
    return (
        <div className="w-screen h-screen bg-contactbg">
            <div className="custom_margin pt-16 pb-12 text-center">
                <p className="text-3xl font-bold text-white">Get In Touch With Us</p>
                <p className="text-base font-normal text-greyColor mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
            </div>

            <div className="custom_margin">
                <div className="px-8 py-8 bg-formbg flex items-center justify-center">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <label htmlFor="fname" className="text-white font-medium text-[15px]">First Name </label>
                                <input onChange={handleInput} type="text" name="name" id="fname" placeholder="Input" className="w-[564px] h-[46px] mt-2 bg-fieldbg placeholder-placeholderColor placeholder:absolute placeholder:top-3 placeholder:left-4 rounded-md text-placeholderColor px-4 py-3 " />
                            </div>

                            <div className="flex flex-col ml-6">
                                <label htmlFor="email" className="text-white font-medium text-[15px]">Email address</label>
                                <input onChange={handleInput} type="text" name="email" id="email" placeholder="Input" className="w-[564px] h-[46px] mt-2 bg-fieldbg placeholder-placeholderColor placeholder:absolute placeholder:top-3 placeholder:left-4 rounded-md px-3 py-4  text-placeholderColor" />
                            </div>
                        </div>

                        <div className="flex flex-row mt-6">
                            <div className="flex flex-col">
                                <label htmlFor="pnumber" className="text-white font-medium text-[15px]"> Phone Number </label>
                                <input onChange={handleInput} type="text" name="number" id="pnumber" placeholder="+000" className="w-[564px] h-[46px] mt-2 bg-fieldbg placeholder-placeholderColor placeholder:absolute placeholder:top-3 placeholder:left-4 rounded-md px-4 py-3  text-placeholderColor" />
                            </div>

                            <div className="flex flex-col ml-6">
                                <label htmlFor="getInTouch" className="text-white font-medium text-[15px]">Get In Touch With Us</label>
                                <input onChange={handleInput} type="text" name="getInTouch" id="getInTouch" placeholder="Input" className="w-[564px] h-[46px] mt-2 bg-fieldbg placeholder-placeholderColor placeholder:absolute placeholder:top-3 placeholder:left-4 rounded-md px-4 py-3  text-placeholderColor" />
                            </div>
                        </div>

                        <div className="flex flex-col mt-6">
                            <label htmlFor="message" className=" text-white font-medium text-[15px]">Message</label>
                            <textarea onChange={handleInput} name="message" id="message" placeholder="Hi! We are Lookscout..." className="w-[1152px] h-[147px] mt-2 bg-fieldbg placeholder-placeholderColor placeholder:absolute placeholder:top-3 placeholder:left-4 rounded-md  text-placeholderColor px-4 py-3 "></textarea>
                        </div>

                        <div className="flex flex-row mt-6">
                            <input type="checkbox" name="checkbox" id="checkboxx" onChange={
                                handleCheck
                            } />
                            <p className="text-white font-medium text-base ml-3">I agree with Lookscout Privacy Policy</p>
                        </div>

                        <div className="mt-6">
                            <button className="font-semibold text-base text-white bg-task-blue rounded-md px-8 py-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContactUs;