import { usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { CiCircleAlert, CiCircleCheck } from "react-icons/ci";

export function Toast() {
    const [message, setMessage] = React.useState(usePage().props.toast);

    const icon = {
        success: <CiCircleCheck className="text-[38px] text-white" />,
        info: <CiCircleAlert className="text-[38px] text-white" />,
        danger: <CiCircleAlert className="text-[38px] text-white" />,
        error: <CiCircleAlert className="text-[38px] text-white" />,
    };

    React.useEffect(() => {
        console.log(message);

        setTimeout(() => {
            setMessage(null);
        }, 5000);
    }, []);

    return (
        message && (
            <div className="toast toast-top toast-end z-[50]">
                <div
                    className={`alert ${
                        message.type ? "alert-" + message.type : "alert-info"
                    }`}
                >
                    <div className="flex flex-row space-x-2 items-center ">
                        {icon[message.type]}
                        <span className="text-white">{message.message}</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default function AppLayout({ children }) {
    return (
        <>
            <Toast />
            {children}
        </>
    );
}
