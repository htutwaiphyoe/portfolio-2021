import NotFound from "@/components/NotFound/NotFound";
import Meta from "@/components/Meta/Meta";
function NotFoundPage(props) {
    return (
        <>
            <Meta
                title="Page Not Found - Htut Wai Phyoe"
                description="This page does not have on the server!"
            />
            <NotFound />
        </>
    );
}

export default NotFoundPage;
