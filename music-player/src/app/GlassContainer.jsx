import React from "react";

const GlassContainer = ({
  children,
  variant = undefined,
  baseRounded = "rounded-[2rem]",
  className = "",
  contentClassName = "",
  element: Component = "div",
  glassOpacity = 0.25,
  isDarkMode = true,
}) => {
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  let containerClasses = `relative flex font-semibold ${textColor} cursor-pointer bg-transparent shadow-[0_6px_6px_rgba(0,0,0,0.2),_0_0_20px_rgba(0,0,0,0.1)] transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,2.2)] overflow-hidden`;

  let currentAppliedRadiusClass = baseRounded;

  if (variant === "rounded" || variant === "small") {
    currentAppliedRadiusClass = "rounded-[5rem]";

    if (variant === "rounded") {
      containerClasses += " m-2";
    }
  }

  containerClasses += ` ${currentAppliedRadiusClass}`;

  if (variant === "small") {
    containerClasses +=
      " mt-20 mb-4 mx-0 text-shadow-[1px_1px_1px_rgba(0,0,0,0.25)]";
  } else if (variant === "large") {
    containerClasses += " min-w-[32rem]";
  } else if (variant === "medium") {
    containerClasses += " min-w-[25rem]";
  }

  const currentOpacity = glassOpacity !== undefined ? glassOpacity : 0.25;

  // rest of component...

  return <Component className={containerClasses}>{children}</Component>;
};

export default GlassContainer;
