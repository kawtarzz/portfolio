import { motion, stagger } from "framer-motion";
import { useState, useEffect } from "react";

export const JobTitle = () => {
  const [currentJobTitleIndex, setCurrentJobTitleIndex] = useState(0);
  const jobTitles = [
    "Web Developer",
    "Motion Designer",
    "Graphic Designer",
    "Visual Artist",
  ];

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `1.25em`,
    },
    visible: {
      delay: 1,
      opacity: 1,
      y: `0`,
      transition: {
        duration: stagger(0.5),
        ease: [0.4, 0.65, 0.3, 0.9],
      },
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobTitleIndex((prevIndex) =>
        prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [jobTitles.length, currentJobTitleIndex]);

  return (
    <>
        <div className="hello-box hello-text">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1.5,
              delay: 4.5,
              ease: [0.1, 0.71, 0.2, 1.01],
              scale: {
                damping: 5,
                stiffness: 80,
                restDelta: 0.01,
                variants: characterAnimation,
              },
            }}
          >
          I'm a {" "} {jobTitles[currentJobTitleIndex]}{" "} 
          </motion.div> 
        </div>
    </>
  );
};