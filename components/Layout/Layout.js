import Navigation from "../Navigation/Navigation";
import ScrollUp from "../ScrollUp/ScrollUp";

function Layout(props) {
    return (
        <>
            <Navigation />
            <main className="main">{props.children}</main>
            <ScrollUp />
        </>
    );
}

export default Layout;
