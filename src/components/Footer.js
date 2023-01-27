import React from "react";

function Footer (){
    return(
        <>
        <section className="footer" id="footer">
            <div className="container">
                <div className="footer__container">
                    {/* copyright 2022 */}
                    <p className="footer__text">
                        &copy; 2023. <span className="footer__text--name"> Developed by Tonny.</span> All Rights Reserved
                    </p>
                    {/* end of copyright 2022 */}
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer;