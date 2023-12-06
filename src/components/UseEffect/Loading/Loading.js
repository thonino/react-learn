import { useEffect, useState } from "react";

function Loading() {
  const steps = [".", "..", "...", " "];
  const [currentStep, setCurrentStep] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 800);
    return () => clearInterval(timer);
  }, [steps]); 

  return (
    <div>
      <h1 className="left">
        Loading{" "}
        {steps.map((item, i) => (
          <span
            key={i}
            style={{ display: i === currentStep ? "inline" : "none" }}
          >
            {item}
          </span>
        ))}
      </h1>
    </div>
  );
}

export default Loading;
