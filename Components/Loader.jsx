"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // When the page is fully loaded
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // small delay for smooth fade
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <div
            className="preloader__image"
            style={{ backgroundImage: "url(/images/loader.png)" }}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
