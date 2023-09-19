import React from "react";
import Header from "../common/header";
import Footer from "../common/footer";

const Char = () => {
    return (
        <>
            < Header />
                <div className="construction">
                    <img src="/under_construction.svg" alt="site under construction" />
                </div>

            <Footer />
        </>
    );
};

export default Char;