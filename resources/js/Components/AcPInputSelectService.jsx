import Checklist1 from "@/Assets/checklist1.svg";
import Checklist2 from "@/Assets/checklist2.svg";
import Like from "@/Assets/like.svg";
import classNames from "classnames";
import React from "react";

export default function ACPInputSelectService({ onSelect = () => {} }) {
    const [select, setSelect] = React.useState("silver");

    const changeHandle = (selected) => {
        setSelect(selected);
        onSelect(selected);
    };

    return (
        <div className="flex flex-row cursor-pointer space-x-10">
            <div
                onClick={() => changeHandle("silver")}
                className={classNames({
                    "flex-1": true,
                    "border-solid border-[1px]": true,
                    "border-[#CACACA]": select == "silver",
                    "bg-white rounded-[16px]": true,
                    "p-5": true,
                })}
            >
                <div>
                    <h1 className="font-[400] text-[40px] text-[#2D2D2D]">
                        Silver
                    </h1>
                    <h1 className="font-[400] text-[40px] text-[#2D2D2D]">
                        £ 425
                    </h1>
                </div>
                <hr className="mb-[22px] mt-[13px]" />
                <div className="flex flex-col space-y-4">
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist1} />
                        <span>Private Video</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist1} />
                        <span>Editing Links Free</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist1} />
                        <span>Free Shipping</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist1} />
                        <span>Possibility Changing</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist1} />
                        <span>Video One Time Every 3 Months</span>
                    </a>
                </div>
            </div>
            <div
                onClick={() => changeHandle("gold")}
                className={classNames({
                    "border-[#CACACA]": select == "gold",
                    "flex-1": true,
                    "border-solid border-[1px]": true,
                    "bg-white rounded-[16px]": true,
                    "p-5": true,
                    "acp-bg-service": true,
                })}
            >
                <div className="flex flex-col ">
                    <div className="flex-1 flex flex-row">
                        <div className="bg-[#F5F5F5] flex justify-center items-center px-5 py-[5px] mr-[30px] rounded-r-[16px] ml-[-30px]">
                            <span className="font-[400] text-[20px] ">
                                Recommended
                            </span>
                            <img src={Like} />
                        </div>
                        <h1 className="font-[400] text-[40px] text-white">
                            Gold
                        </h1>
                    </div>
                    <h1 className="font-[400] text-[40px] text-white">£ 425</h1>
                </div>
                <hr className="mb-[22px] mt-[13px]" />
                <div className="flex flex-col space-y-4">
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist2} />
                        <span className="text-white">Private Video</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist2} />
                        <span className="text-white">Editing Links Free</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist2} />
                        <span className="text-white">Free Shipping</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist2} />
                        <span className="text-white">Possibility Changing</span>
                    </a>
                    <a className="flex flex-row space-x-4">
                        <img src={Checklist2} />
                        <span className="text-white">
                            Video One Time Every 3 Months
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}
