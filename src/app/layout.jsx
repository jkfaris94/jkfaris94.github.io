import "./globals.scss";

export const metadata = {
  title: "JOHNNY FARIS",
  description: "Portfolio of Johnny Faris, Full Stack Developer",
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
