import Head from "next/head";

function Meta({ title, description }) {
    return (
        <Head>
            <title>{title || `Htut Wai Phyoe`}</title>
            <meta property="og:title" content={title || `Htut Wai Phyoe`} />
            <meta name="twitter:title" content={title || `Htut Wai Phyoe`} />
            <meta
                name="description"
                content={
                    description ||
                    `Web developer and IT student at Mandalay Technological University. JavaScript is main programming language and techstack is MERN Stack.`
                }
            />
            <meta
                property="og:description"
                content={
                    description ||
                    `Web developer and IT student at Mandalay Technological University. JavaScript is main programming language and techstack is MERN Stack.`
                }
            />
            <meta
                name="twitter:description"
                content={
                    description ||
                    `Web developer and IT student at Mandalay Technological University. JavaScript is main programming language and techstack is MERN Stack.`
                }
            />
        </Head>
    );
}

export default Meta;
