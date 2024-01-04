import React from "react";
import Line3 from "@/Assets/line3.svg";
import { MdOutlineAccountCircle } from "react-icons/md";

export default function CreateAccount() {
    return (
        <main className="flex">
            <div className="w-[500px] h-[100vh] acp-bg-primary flex flex-col justify-center items-center">
                <div className="flex flex-col h-[50vh] justify-center ">
                    <h1 className="text-white font-[600] leading-normal text-[40px]">
                        Let’s Register
                    </h1>
                    <p className="text-white font-[400] leading-normal text-[18px] mt-[11px]">
                        Please fill out the form for register
                    </p>
                </div>
                <div className="flex flex-col items-end justify-end mt-[186px]">
                    <img src={Line3} className="w-full" />
                    <img src={Line3} className="w-full mt-[-80px]" />
                    <img src={Line3} className="w-full mt-[-80px]" />
                    <img src={Line3} className="w-full mt-[-80px]" />
                    <img src={Line3} className="w-full mt-[-80px]" />
                </div>
            </div>
            <div className="flex-1 pl-[20px] pr-[115px] pt-[100px]">
                <div className="flex flex-col">
                    <div className="flex space-x-2 flex-row">
                        <span className="flex-1 h-[9px] rounded-lg acp-bg-primary"></span>
                        <span className="flex-1 h-[9px] rounded-lg bg-[#D9D9D9]"></span>
                        <span className="flex-1 h-[9px] rounded-lg bg-[#D9D9D9]"></span>
                    </div>
                    <div className="flex-1 mt-[28px]">
                        <h1 className="font-[600] leading-normal text-[40px]">
                            <strong className="text-[#6936f5]">Create </strong>
                            Account
                        </h1>
                    </div>
                    <div className="flex-1 mt-[10px]">
                        <label class="form-control">
                            <div class="label">
                                <span class="label-text">Name</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Input Your Full Name"
                                class="input input-bordered w-full "
                            />
                            <MdOutlineAccountCircle className="w-[24px] h-[24px] absolute" />
                        </label>
                    </div>
                </div>
            </div>
        </main>
    );
}
