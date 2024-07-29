import React from 'react'

interface InputBoxProps {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const InputBox: React.FC<InputBoxProps> = ({
    text,
    setText
}) => {
    return (
        <textarea 
            placeholder="Enter Your Prompt Here" 
            className="border-2 border-gray-300 rounded-lg p-2 w-full text-slate-950"
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={600}
        />
    )
}

export default InputBox
