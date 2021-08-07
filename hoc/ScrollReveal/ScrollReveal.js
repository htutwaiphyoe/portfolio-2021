import { useEffect } from "react";

function ScrollRevealHOC({ target, origin, children }) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`#${target}`, {
            origin,
            interval: 100,
        });

        return () => {
            sr.destroy();
        };
    }, []);

    return <>{children}</>;
}

export default ScrollRevealHOC;
