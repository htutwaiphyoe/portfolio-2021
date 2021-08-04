import React, { useRef, useEffect } from "react";
import scrollReveal from "scrollreveal";

const ScrollReveal = ({ children }) => {
    const sectionRef = useRef(null);
    useEffect(() => {
        if (sectionRef.current)
            scrollReveal().reveal(sectionRef.current, {
                reset: true,
                origin: "left",
                interval: 100,
            });
    }, []);

    return (
        <section ref={sectionRef} className="scroll-section" data-testid="section">
            {children}
        </section>
    );
};

export default ScrollReveal;
