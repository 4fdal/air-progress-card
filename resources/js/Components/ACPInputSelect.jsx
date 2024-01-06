import React from "react";

export default function ACPInputSelect({
    label,
    name,
    icon = null,
    placeholder,
    options = [],
    value = null,
    onChange = (e) => {},
    error = null,
}) {
    return (
        <div className="form-control w-full ">
            {label && (
                <label className="label label-text font-[400] font-normal text-[16px] leading-normal">
                    {label}
                </label>
            )}
            <div
                className={`flex focus-within:border-solid focus-within:border-black focus-within:border-[1px] flex-row items-center px-[30px] space-x-5 justify-between rounded-[8px] border-solid border-[1px] ${
                    error ? "border-red-500" : "border-[#CACACA]"
                }`}
            >
                {icon &&
                    React.createElement(icon, {
                        className: "w-[24px] h-[24px]",
                    })}
                <select
                    onChange={onChange}
                    className="select active:border-none focus:outline-none border-none outline-none w-full"
                >
                    {options.map((option) => (
                        <option
                            selected={value == option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
            </div>
        </div>
    );
}
