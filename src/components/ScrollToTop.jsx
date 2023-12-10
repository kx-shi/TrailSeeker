/**
 * Component that scrolls to the top of page at route changes
 * From discussion: https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}