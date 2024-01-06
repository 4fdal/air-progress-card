import React from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

function ButtonShowPassword({ type = "password", onChange = (type) => {} }) {
    const handleChange = () => {
        onChange(type == "password" ? "text" : "password");
    };

    return (
        <button type="button" onClick={handleChange}>
            {type == "password" ? (
                <LuEye className="w-[32px] h-[32px] text-[#6936f5]" />
            ) : (
                <LuEyeOff className="w-[32px] h-[32px] text-[#6936f5]" />
            )}
        </button>
    );
}

export default function ACPInputText({
    icon = null,
    label = null,
    placeholder = null,
    type = "text",
    onChange = (e) => {},
    name = null,
    error = null,
}) {
    const [changeType, setChangeType] = React.useState(type);

    return (
        <div className="form-control w-full ">
            {label && (
                <label className="label label-text font-[400] font-normal text-[16px] leading-normal">
                    {label}
                </label>
            )}
            <div
                className={`flex focus-within:border-solid focus-within:border-black focus-within:border-[1px] flex-row items-center px-[30px] space-x-5 justify-between rounded-[8px] border-solid border-[1px]  ${
                    error ? "border-red-500" : "border-[#CACACA]"
                } `}
            >
                {icon &&
                    React.createElement(icon, {
                        className: "w-[24px] h-[24px]",
                    })}
                <input
                    name={name}
                    type={changeType}
                    placeholder={placeholder}
                    className="w-full relative  py-[14px] rounded-[8px] outline-none"
                    onChange={onChange}
                />
                {type == "password" && (
                    <ButtonShowPassword
                        onChange={setChangeType}
                        type={changeType}
                    />
                )}
            </div>
            <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
            </div>
        </div>
    );
}
