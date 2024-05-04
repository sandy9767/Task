import arrowDown from "../assets/arrowDown.png";

const FAQ = () => {
    return (<div className="custom_margin text-center px-8">
        <div className=" py-16 px-60">
            <p className="text-[32px] font-bold leading-[40px] pb-4">Frequently asked questions</p>
            <p className="text-greyColor font-normal text-base leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>
        <div>
            <div className="flex flex-row justify-between items-center text-start border mx-8 border-borderLignt">
                <div className="ml-8">
                    <p className="font-medium text-[18px] leading-[28px]">Authentication Issues</p>
                    <p className="text-greyColor font-normal text-base leading-6">Porttitor nec est nisi, id nunc.</p>
                </div>
                <button className="px-3 py-1 mx-8 my-8 bg-lightBlue text-task-blue font-medium text-[15px] w-[55px] h-[28px] border-radius: 0.375rem;">New</button>
            </div>
            <div className="flex flex-row justify-between items-center text-start border mx-8 border-borderLignt border-t-0">
                <div className="ml-8">
                    <p className="font-medium text-[18px] leading-[28px]">Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="py-7 px-4">
                        <p>Updated last week</p>
                    </div>
                    <div className="pl-4 pr-8 py-8">
                        <img src={arrowDown} alt="" className="h-5 w-5 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-start border mx-8 border-borderLignt border-t-0">
                <div className="ml-8">
                    <p className="font-medium text-[18px] leading-[28px]">Cras vitae, scelerisque tortor augue.</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="py-7 px-4">
                        <p>Updated today</p>
                    </div>
                    <div className="pl-4 pr-8 py-8">
                        <img src={arrowDown} alt="" className="h-5 w-5 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-start border mx-8 border-borderLignt border-t-0">
                <div className="ml-8">
                    <p className="font-medium text-[18px] leading-[28px]">Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="py-7 px-4">
                        <p>Updated 2 days ago</p>
                    </div>
                    <div className="pl-4 pr-8 py-8">
                        <img src={arrowDown} alt="" className="h-5 w-5 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-start border mx-8 border-borderLignt border-t-0">
                <div className="ml-8">
                    <p className="font-medium text-[18px] leading-[28px]">Pretium ultricies donec non mollis senectus lectus libero tellus.</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="py-7 px-4">
                        <p>Updated 3 days ago</p>
                    </div>
                    <div className="pl-4 pr-8 py-8">
                        <img src={arrowDown} alt="" className="h-5 w-5 " />
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-start border mx-8 border-borderLignt border-t-0">
                <div className="ml-8">
                    <p className="font-medium text-[18px] leading-[28px]">Elit massa amet aenean ultrices vitae placerat augue.</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="py-7 px-4">
                        <p>Updated 4 days ago</p>
                    </div>
                    <div className="pl-4 pr-8 py-8">
                        <img src={arrowDown} alt="" className="h-5 w-5 " />
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default FAQ;