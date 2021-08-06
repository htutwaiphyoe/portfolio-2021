import Document, { Html, Main, Head, NextScript } from "next/document";

class Doc extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="htutwaiphyoe, web developer, blogs" />
                <meta name="theme-color" content="#6E57E0" />
                <meta property="article:modified_time" content="2021-08-11T14:20:40.000Z" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.htutwaiphyoe.me/" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="manifest" href="/manifest.json" />

                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.htutwaiphyoe.me/" />
                <meta property="og:site_name" content="Htut Wai Phyoe" />
                <meta property="og:image" content="/logo192.png" />

                <meta name="twitter:url" content="https://twitter.com/mrdamiano_" />
                <meta name="twitter:card" content="/logo192.png" />
                <meta name="twitter:image" content="/logo.png" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
                    rel="stylesheet"
                ></link>

                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"
                />

                <script src="https://unpkg.com/scrollreveal"></script>

                <body>
                    <Main />

                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default Doc;
