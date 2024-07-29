import React from 'react'
import Loader from '../loader';

type SubmitBtnProps = {
    isLoading: boolean;
    submitHandler: () => Promise<void>;
}

const SubmitBtn: React.FC<SubmitBtnProps> = ({
    isLoading,
    submitHandler
}) => {
    return (
        <button 
            onClick={submitHandler}
            className="bg-slate-600 text-white p-2 w-[10%] h-[5vh] rounded-lg text-lg hover:bg-slate-500/90 flex items-center justify-center"
        >
        {isLoading ? (
          <Loader />
        ): 'Generate'}
      </button>
    )
}

export default SubmitBtn;
