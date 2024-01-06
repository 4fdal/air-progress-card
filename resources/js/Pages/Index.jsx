import React from "react";
import LogoImg from "@/Assets/logo.svg";
import LogoPng from "@/Assets/logo.png";
import RobotImg from "@/Assets/robot.svg";
import EllipseBg from "@/Assets/ellipse1.svg";
import Ellipse2Bg from "@/Assets/ellipse2.svg";
import Line1 from "@/Assets/line1.svg";
import Line2 from "@/Assets/line2.svg";
import { Link } from "@inertiajs/react";

export default function RootIndexPage({}) {
    return (
        <>
            <nav className="navbar flex mt-[32px]">
                <div className="ml-[100px] flex-initial">
                    <img src={LogoImg} className="w-[85px]" />
                </div>
                <div className="flex justify-center ml-[238px]">
                    <ul className="menu menu-horizontal">
                        <li className="nav-item-active">
                            <a className="acp-text-primary">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="acp-text-primary">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="acp-text-primary">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="acp-text-primary">Price</a>
                        </li>
                        <li className="nav-item">
                            <a className="acp-text-primary">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="mb-80">
                <div className="flex flex-row">
                    <div className="flex mr-[22px]">
                        <img src={EllipseBg} className="absolute" />
                        <img
                            src={RobotImg}
                            className="w-[601px] lg:mt-[100px]"
                        />
                    </div>
                    <div className="flex">
                        <div className="flex-col mt-20">
                            <div>
                                <button className="btn acp-bg-primary text-white rounded-full">
                                    20% Discount For 1 Month Account
                                </button>
                            </div>
                            <h1 className="lg:text-[70px] acp-text-primary font-[600] lg:w-[700px] text-bold">
                                New Vision Augmented Reality
                            </h1>
                            <p className="lg:w-[490px] lg:text-[18px] font-[400] leading-normal text-[#727272] text-[18px]">
                                We Are Building New Vision For Your Personal
                                Card By Augmented Reality. More of just name and
                                phone number
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-[37px] flex flex-col justify-center">
                    <img src={Line1} className="w-full absolute" />
                    <img src={Line2} className="w-full absolute" />
                    <div class="flex justify-center z-10">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-[50px] acp-text-primary font-[600] w-[658px]">
                                You do the business we’ll handle the money
                            </h2>
                            <p className="font-[400] leading-normal text-[#727272] text-[18px]">
                                We Harness the Augmented Reality to grow your
                                business and your client
                            </p>
                            <Link href={route("account.register.index")}>
                                <button className="btn text-white mt-[25px] px-10 acp-bg-primary">
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="mt-[93px] flex justify-center">
                    <div className="text-center flex flex-col items-center">
                        <h2 className="text-[50px] acp-text-primary font-[600] w-[658px]">
                            We Experiences
                        </h2>
                        <p className="font-[400] leading-normal text-[#727272] text-[18px]">
                            We make new user experience that range from 2D to 3D
                            technology
                        </p>
                    </div>
                </div>

                <div class="flex items-center flex-col">
                    <img className="absolute" src={Ellipse2Bg} />
                    <div className="mt-[93px]  relative acp-bg-primary w-[1244px] rounded-[68px] p-[50px] z-10">
                        <div className="text-center flex flex-col items-center">
                            <h2 className="text-[50px] font-[600] text-white w-[658px]">
                                Let’s Try Our Service Now
                            </h2>
                            <p className="text-white font-[400] leading-normal text-[18px]">
                                Make Your Card and Learn Back Enjoyingg !!
                            </p>
                            <Link href={route("account.register.index")}>
                                <button className="btn  border-none bg-white mt-[25px]">
                                    <span className="acp-text-primary">
                                        Get Started
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-[95px] w-[1244px]">
                        <div className="flex flex-row">
                            <div className="flex flex-auto flex-col">
                                <div className="w-[193px]">
                                    <img src={LogoPng} className="w-full" />
                                </div>
                                <div className="w-[353px]">
                                    <p className="font-[400] text-[18px] leading-normal text-[#727272] ">
                                        A New Way to make the payments easy,
                                        reliable and secure
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-auto flex-col">
                                <strong className="text-[18px] text-[#1E1E1E] font-[600] leading-normal">
                                    Usefull Links
                                </strong>
                                <ul className="menu menu-vertical p-0 text-[18px]">
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Content
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            How It Works
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Create
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Explore
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Terms Of Service
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-auto flex-col">
                                <strong className="text-[18px] text-[#1E1E1E] font-[600] leading-normal">
                                    Community
                                </strong>
                                <ul className="menu menu-vertical p-0 text-[18px]">
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Help Center
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Partners
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Suggestion
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Newsletter
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-auto flex-col">
                                <strong className="text-[18px] text-[#1E1E1E] font-[600] leading-normal">
                                    Partners
                                </strong>
                                <ul className="menu menu-vertical p-0 text-[18px]">
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Our Partners
                                        </a>
                                    </li>
                                    <li className="mt-[17px]">
                                        <a className="p-0 text-[#727272] font-[400] leading-normal">
                                            Become A Partners
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center flex-col">
                    <div className="relative mt-[95px] w-[1244px]">
                        <hr />
                        <p className="mt-[30px] text-[#727272] text-[16px] font-[300] leading-normal">
                            Copyright 2023 AirCard. All right reserved
                        </p>
                    </div>
                </div>
            </main>

            {/* <div className="hero flex flex-col">
                <div className="navbar">
                    <div className="flex flex-row">
                        <img className="mx-20" src={LogoImg} />
                        <div className="flex flex-row justify-center">
                            <ul className="menu menu-vertical justify-center lg:menu-horizontal">
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <a> Service </a>
                                </li>
                                <li>
                                    <a> About </a>
                                </li>
                                <li>
                                    <a> Price </a>
                                </li>
                                <li>
                                    <a> Contact </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <img src={RobotImg} />
                    </div>
                    <div>
                        <button className="acp-btn-primary rounded-full">
                            20% Discount For 1 Month Account
                        </button>
                        <span className="acp-text-primary">
                            New Vision Augmented Reality
                        </span>
                        <p>
                            We Are Building New Vision For Your Personal Card By
                            Augmented Reality. More of just name and phone
                            number
                        </p>
                    </div>
                </div>
            </div> */}
        </>
    );
}
