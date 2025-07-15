// src/Root.jsx
import { StrictMode, useEffect, useState } from "react";
import App from "./App.jsx"; // version desktop
import AppMobile from "./AppMobile.jsx"; // version mobile

export default function Root() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const mobileRegex =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

    setIsMobile(mobileRegex.test(userAgent.toLowerCase()));
  }, []);

  if (isMobile === null) {
    return null; // ou un spinner pendant la détection
  }

  return (
    <StrictMode>
      {isMobile ? <AppMobile /> : <App />}
    </StrictMode>
  );
}
