import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="flex flex-col min-h-screen bg-customBg">
      <div className="sticky top-0">
        <Header />
      </div>
      <div className="w-[90%] mx-auto">{children}</div>
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
