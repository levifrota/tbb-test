import { useState, useEffect } from "react";

const useMatchMedia = (mediaQuery, initialValue) => {
  const [isMatching, setIsMatching] = useState(initialValue);
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    const listener = (matches) => {
      setIsMatching(matches.matches);
    };
    watcher.addEventListener("change", listener);
    return () => {
      watcher.removeEventListener("change", listener);
    };
  }, [mediaQuery]);

  return isMatching;
};

export default useMatchMedia;
