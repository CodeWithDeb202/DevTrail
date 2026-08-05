import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Toaster } from "react-hot-toast";


export const metadata = {

  title:
    "DevTrail - Build, Track & Showcase Your Developer Journey",

  description:
    "DevTrail helps developers build projects, track progress, document daily growth and showcase their skills.",


  keywords: [
    "developer portfolio",
    "project management",
    "coding journey",
    "developer community",
    "software projects"
  ],


  openGraph: {

    title:
      "DevTrail - Developer Growth Platform",

    description:
      "Build projects. Track progress. Showcase your journey.",

    type: "website"

  },

  icons: {
    icon: "/gemini-svg.svg",
    apple: "/gemini-svg.svg"
  }

};


export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body suppressHydrationWarning={true}>

<Toaster
          position="top-right"
        />

        <ThemeProvider>

          <AuthProvider>

            {children}

          </AuthProvider>

        </ThemeProvider>


      </body>

    </html>

  )

}