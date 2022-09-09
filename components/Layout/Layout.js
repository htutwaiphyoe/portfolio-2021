import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "../Navigation/Navigation";
import ScrollUp from "../ScrollUp/ScrollUp";

function Layout(props) {
  useEffect(() => {
    function disableSelection(event) {
      if (event.detail > 1) {
        event.preventDefault();
      }
    }
    window.document.addEventListener("mousedown", disableSelection, false);

    return () => {
      window.document.removeEventListener("mousedown", disableSelection);
    };
  }, []);
  return (
    <>
      <Navigation />
      <main className="main">{props.children}</main>
      <ToastContainer position="top-center" />
      <ScrollUp />
    </>
  );
}

export default Layout;
