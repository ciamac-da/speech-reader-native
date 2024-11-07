import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useResponsive = (breakpoint: number = 768) => {
  const [isSmallScreen, setIsSmallScreen] = useState(
    Dimensions.get("window").width < breakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(Dimensions.get("window").width < breakpoint);
    };

    const subscription = Dimensions.addEventListener("change", handleResize);

    return () => subscription.remove();
  }, [breakpoint]);

  return isSmallScreen;
};

export default useResponsive;
