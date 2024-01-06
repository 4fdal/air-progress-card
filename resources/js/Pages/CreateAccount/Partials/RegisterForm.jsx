import {
    LuCalendar,
    LuKeyRound,
    LuKeySquare,
    LuMail,
    LuPhone,
    LuUserCircle,
    LuUserSquare2,
} from "react-icons/lu";
import ACPInputText from "@/Components/ACPInputText";
import { useForm } from "@inertiajs/react";

export default function Step1Form() {
    const {
        data,
        setData,
        errors,
        post,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        name: "",
        birth_day: "",
        phone: "",
        email: "",
        username: "",
        password: "",
    });

    const submitHandle = (e) => {
        e.preventDefault();
        post(route("account.register"));
    };

    return (
        <form onSubmit={submitHandle} className="flex-1 flex flex-col w-full">
            <ACPInputText
                icon={LuUserCircle}
                label="Name"
                placeholder="Input Your Full Name"
                name="name"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                error={errors.name}
            />
            <ACPInputText
                icon={LuCalendar}
                label="Birth Day"
                placeholder="Input Your Birth Day"
                name="birth_day"
                value={data.birth_day}
                onChange={(e) => setData("birth_day", e.target.value)}
                error={errors.birth_day}
                type="date"
            />
            <ACPInputText
                icon={LuPhone}
                label="Phone"
                placeholder="Input Your Phone Number"
                name="phone"
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
                error={errors.phone}
            />
            <ACPInputText
                icon={LuMail}
                label="Email"
                type="email"
                placeholder="Input Your Email"
                name="email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                error={errors.email}
            />
            <ACPInputText
                icon={LuUserSquare2}
                label="Username"
                placeholder="Input Your Username"
                name="username"
                value={data.username}
                onChange={(e) => setData("username", e.target.value)}
                error={errors.username}
            />
            <ACPInputText
                icon={LuKeySquare}
                label="Password"
                type="password"
                placeholder="Input Your Password"
                name="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                error={errors.password}
            />
            <button className="btn acp-bg-primary  p-[10px] gap-[10px] rounded-md">
                <span className="text-white font-[18px] font-[600] leading-normal">
                    Get Started
                </span>
            </button>
        </form>
    );
}
