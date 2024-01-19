import ACPInputText from "@/Components/ACPInputText";
import ACPInputFile from "@/Components/ACPInputFile";
import ACPInputTextGroup from "@/Components/ACPInputTextGroup";
import { CiLink, CiLocationOn, CiSignpostR1 } from "react-icons/ci";
import ACPInputSelect from "@/Components/ACPInputSelect";
import { useForm } from "@inertiajs/react";

export default function IdentityCardForm() {
    const {
        data,
        setData,
        errors,
        post,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        photo: "",
        video: "",
        links: [],
        specialization: "",
        locations: [],
    });

    const submitHandle = (e) => {
        e.preventDefault();

        post(route("account.identity-card.store"));
    };
    return (
        <form onSubmit={submitHandle} className="flex flex-1 flex-col">
            <ACPInputFile
                accept="image/*"
                label="Account Photo"
                placeholder="Upload Your Profile Picture"
                onChange={(file) => setData("photo", file)}
                error={errors.photo}
            />
            <ACPInputFile
                accept="video/*"
                label="Account Video"
                placeholder="Upload Your Intro Video"
                onChange={(file) => setData("video", file)}
                error={errors.video}
            />

            <ACPInputTextGroup
                label="Your Links"
                inputs={[
                    {
                        placeholder: "Input Your Name For Links",
                        name: "name",
                    },
                    {
                        placeholder: "Input Your Link",
                        name: "link",
                        icon: CiLink,
                    },
                ]}
                onChange={(values) => setData("links", values)}
                error={errors.links}
            />
            {/* <ACPInputSelect
                icon={CiSignpostR1}
                label="Specialization"
                placeholder="Specialization"
                value={data.specialization}
                options={[
                    { label: "Pick one", value: "Pick one" },
                    { label: "Star Wars", value: "Star Wars" },
                    {
                        label: "Harry Potter",
                        value: "Harry Potter",
                    },
                    {
                        label: "Lord of the Rings",
                        value: "Lord of the Rings",
                    },
                    {
                        label: "Planet of the Apes",
                        value: "Planet of the Apes",
                    },
                    { label: "Star Trek", value: "Star Trek" },
                ]}
                onChange={(e) => setData("specialization", e.target.value)}
                error={errors.specialization}
            /> */}
            <ACPInputText
                icon={CiSignpostR1}
                label="Specialization"
                placeholder="Specialization"
                name="specialization"
                value={data.specialization}
                onChange={(e) => setData("specialization", e.target.value)}
                error={errors.specialization}
            />

            <ACPInputTextGroup
                label="Location"
                inputs={[
                    {
                        placeholder: "Input Your Name For Links",
                        name: "name",
                    },
                    {
                        placeholder: "Input Your Location",
                        name: "link",
                        icon: CiLocationOn,
                    },
                ]}
                onChange={(values) => setData("locations", values)}
                error={errors.locations}
            />

            <div className="flex flex-row space-x-5">
                <div className="flex-1">
                    <button className="btn border-none acp-bg-primary w-full p-[10px] gap-[10px]  ">
                        <span className="text-white font-[18px] font-[600] leading-normal">
                            Save
                        </span>
                    </button>
                </div>
                <div className="flex-1">
                    <button className="btn border-none w-full p-[10px] gap-[10px]  rounded-[20px] acp-border-primary">
                        <span className="text-white font-[18px] font-[600] acp-text-primary leading-normal">
                            Next
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
}
