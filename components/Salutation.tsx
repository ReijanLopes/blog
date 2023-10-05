import React, { useEffect, useState } from "react";

const Salutation = ({
  children,
  animation,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
  animation?: string;
}) => {
  const [animate, setAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimation(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${className} opacity-0 transition duration-[2000ms] ${
        animate && animation
      }`}
    >
      {children}
    </div>
  );
};

export default Salutation;
