import React from "react";
import ACPInputText from "./ACPInputText";
import { CiCircleMinus } from "react-icons/ci";

function InputGroupRender({ input, indexInput, index, onChange }) {
    const changeHandle = (e) => {
        let value = e.target.value;
    };

    return <ACPInputText {...input} onChange={onChange} />;
}

/**
 *
 *
 * @export
 * @param {{inputs: [{name, placeholder, icon, value : {}}], label}} props
 * @return {*}
 */
export default function AcpInputTextGroup({
    inputs = [],
    label,
    onChange = () => {},
    error = null,
}) {
    const [inputGroup, setInputGroup] = React.useState([inputs]);
    const [inputValues, setInputValues] = React.useState([
        inputs.map((input) => ({
            name: input.name,
            value: "",
        })),
    ]);
    const findInput = (name) => inputs.find((input) => input.name == name);

    const addInputHandle = () => {
        setInputGroup([...inputGroup, inputs]);
        setInputValues([
            ...inputValues,
            inputs.map((input) => ({
                name: input.name,
                value: "",
            })),
        ]);
    };

    const deleteInputHandle = (index) => {
        if (index > 0) {
            setInputGroup([...inputGroup.filter((_, i) => i != index)]);
            setInputValues([inputValues.filter((_, i) => i != index)]);
        }
    };

    const inputChangeHandle = (e, index, indexInput) => {
        let value = e.target.value;
        inputValues[index][indexInput].value = value;
        setInputValues([...inputValues]);
        onChange(inputValues);
    };

    return (
        <div className={`form-control w-full`}>
            {label && (
                <label className="label label-text font-[400] font-normal text-[16px] leading-normal">
                    {label}
                </label>
            )}
            <div
                className={`flex flex-col ${
                    error
                        ? "border-red-500 border-solid border-[1px] rounded-lg p-1"
                        : ""
                }`}
            >
                {inputGroup.map((inputs, index) => (
                    <div
                        key={`row-${index}`}
                        className="flex-1 flex flex-row space-x-1 items-center"
                    >
                        {inputs.map((input, indexInput) => (
                            <InputGroupRender
                                key={`input-${index}-${indexInput}`}
                                index={index}
                                indexInput={indexInput}
                                input={input}
                                onChange={(e) =>
                                    inputChangeHandle(e, index, indexInput)
                                }
                            />
                        ))}
                        <button
                            type="button"
                            onClick={() => deleteInputHandle(index)}
                            className="mr-10 mb-3"
                        >
                            <CiCircleMinus className="text-[32px]" />
                        </button>
                    </div>
                ))}
                <div className="flex-1">
                    <button
                        type="button"
                        onClick={addInputHandle}
                        className="underline"
                    >
                        + Add Links
                    </button>
                </div>
            </div>
            <div className="label">
                <span className="label-text-alt text-red-500">{error}</span>
            </div>
        </div>
    );
}
