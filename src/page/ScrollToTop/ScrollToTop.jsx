import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // 👈 change this to control spinner duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="scroll-loader">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;