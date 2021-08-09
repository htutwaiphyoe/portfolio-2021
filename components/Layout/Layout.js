import { useEffect } from "react";
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
            <ScrollUp />
        </>
    );
}

export default Layout;
