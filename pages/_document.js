import Document, { Html, Main, Head, NextScript } from "next/document";

class Doc extends Document {
    render() {
        return (
            <Html>
                <Head />
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
