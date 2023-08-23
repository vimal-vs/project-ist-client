import Confetti from 'react-confetti';
import SuccessImg from "../assets/form-submission.png"

export default function Success() {
    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen w-full bg-white">
            <Confetti numberOfPieces={300} recycle={false} gravity={0.1} className='w-full' />
            <img src={SuccessImg} alt="src" />
            <p className=' md:text-3xl lg:text-4xl'>Form has been submitted successfully <span className='text-xl md:text-3xl'>🥳</span></p>
            <p className='text-sm md:text-base'>For any futher inqueries, please contact Admission Office.</p>
        </div>
    )
};
