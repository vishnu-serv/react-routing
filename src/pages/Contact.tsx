import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const handlePopState = (event) => {
      window.history.pushState(null, "", window.location.href);
    };

    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
};

export default Contact;
