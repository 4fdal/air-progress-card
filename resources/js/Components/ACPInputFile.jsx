import React from "react";
import { CiImageOn } from "react-icons/ci";

export function ShowFile({ file, accept = "" }) {
    let render = <></>;

    if (accept.toLowerCase().indexOf("image/") != -1) {
        render = <img src={file} className="w-full" />;
    }

    if (accept.toLowerCase().indexOf("video/") != -1) {
        render = <video src={file} className="w-full" controls />;
    }

    return <div className="flex max-h-80">{render}</div>;
}

export default function ACPInputImage({
    icon = null,
    label = null,
    placeholder = null,
    type = "text",
    onChange = (e) => {},
    accept = null,
    error = null,
}) {
    const [loadFile, setLoadFile] = React.useState(false);
    const [file, setFile] = React.useState(null);

    /** @type {{ current : HTMLInputElement }} */
    const inputRef = React.createRef();

    const fileChangeHandle = (e) => {
        setLoadFile(true);
        const file = e.target.files[0];
        onChange(file);
        setFile(URL.createObjectURL(file));
        setLoadFile(false);
    };

    const uploadHandle = () => {
        inputRef.current.click();
        inputRef.current.onchange = fileChangeHandle;
    };

    return (
        <div className="form-control w-full ">
            <input
                accept={accept}
                type="file"
                ref={inputRef}
                className="hidden"
            />
            {label && (
                <label className="label label-text font-[400] font-normal text-[16px] leading-normal">
                    {label}
                </label>
            )}
            <div
                onClick={uploadHandle}
                className={`flex active:border-black active:mx-3 cursor-pointer active:border-[1px] flex-col justify-center items-center px-[30px] space-x-5 rounded-[8px] border-dashed border-[1px]  py-4 ${
                    error ? "border-red-500" : "border-[#CACACA]"
                }`}
            >
                {loadFile ? (
                    <span className="loading loading-ring loading-lg" />
                ) : file ? (
                    <ShowFile file={file} accept={accept} />
                ) : (
                    <CiImageOn className="text-[74px] font-light" />
                )}
                <span className="text-[#A9A9A9] mt-2 text-[16px] font-[400]">
                    {placeholder}
                </span>
            </div>
            <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
            </div>
        </div>
    );
}
