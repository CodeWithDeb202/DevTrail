import { AuthProvider } from "@/context/AuthContext";
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

  }

};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body>
        <Toaster
          position="top-right"
        />

        <AuthProvider>

          {children}

        </AuthProvider>


      </body>

    </html>

  )

}