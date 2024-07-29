import React from 'react';
import { LuLoader2 } from "react-icons/lu";

const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <LuLoader2 className="animate-spin h-8 w-8 text-white" />
        </div>
    );
};

export default Loader;
