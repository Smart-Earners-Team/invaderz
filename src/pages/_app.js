"use client";
import PreLoader from "@/components/PreLoader";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the preloader display duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <PreLoader /> : null}
      <Component {...pageProps} />
    </>
  );
}
