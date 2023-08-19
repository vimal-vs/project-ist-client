import { useEffect, useRef, useState } from "react"

const Progress = ({ steps, curStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stepRef = useRef();
    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;
        while(count < newSteps.length) {
            if(count === stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                }
                count++;
            }
            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                }
                count++;
            }
            else {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                }
                count++;
            }
        }
        return newSteps;
    }
    useEffect(() => {
        const stepsState = steps.map((step, i) =>
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: i  === 0 ? true : false,
                selected: i === 0 ? true : false
            })
        );
        stepRef.current = stepsState;
        const current = updateStep(curStep -1 , stepRef.current);
        setNewStep(current);
    }, [steps, curStep]);
    const displayProgress = newStep.map((step, i) => {
        return (   
        <div key={i} 
        className={
            i !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center" }>
            <div className="relative flex flex-col items-center text-black">
                <div className={`rounded-full transition duration-500 ease-in-out border-2 h-7 w-7 md:h-12 md:w-12 flex items-center justify-center py-3 ${step.selected ? "bg-blue-900 text-white font-bold border border-blue-900" : "border-gray-300"}`}>
                    {step.completed ? (
                        <span className="text-white font-bold text-xl">&#10003;</span>
                    ) : (i + 1)}
                </div>
                <div className={`absolute top-0 text-center mt-16 w-20 text-xs font-medium uppercase hidden md:block ${step.completed ? "text-blue-900 font-semibold" : "text-gray-500"}`}>{step.description}</div>
            </div>
            <div className={`flex-auto border-t-4 transition duration-500 ease-in-out ${step.completed ? "border-yellow-400" : "border-gray-300"}`}></div>
        </div>
        )
    }
    );
    return (
    <div className="mx-4 p-4 flex justify-between items-center">
        {displayProgress}
    </div>
    );
};

export default Progress;
