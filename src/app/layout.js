import "../styles/globals.css";
import Navbar from "../components/layout/Navbar";

export const metadata = {
    title: "Kleia",
    description: "Website Next.js buatan Ifan"
};

export default function RootLayout({ children }) {
    return (
        <html lang="id">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>
            <body>
              <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
