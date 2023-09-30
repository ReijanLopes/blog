import React, { useEffect, useState } from "react";

import { useDebounce } from "@/utils/useDebounce";

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
  const handleAnimation = useDebounce(() => setAnimation(true), 200);

  useEffect(() => handleAnimation());

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
