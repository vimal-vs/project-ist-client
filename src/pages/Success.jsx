import Confetti from 'react-confetti';

export default function Success() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Confetti numberOfPieces={300} recycle={false} gravity={0.1} />
            <p className='my-auto md:text-5xl'><span>👏</span>Your Form has been submitted successfully.!!<span>👏</span></p>
        </div>
    )
}
