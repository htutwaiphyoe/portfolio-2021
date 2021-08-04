import Navigation from "../Navigation/Navigation";

function Layout(props) {
    return (
        <>
            <Navigation />
            <main>{props.children}</main>
        </>
    );
}

export default Layout;
