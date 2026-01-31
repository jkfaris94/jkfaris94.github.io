import { GoogleAnalytics } from '@next/third-parties/google'
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
      {/* This loads GA4 efficiently.
        Make sure NEXT_PUBLIC_GA_ID is set in your GitHub Secrets & Workflow! 
      */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
}
