import React from "react";
import cx from "classnames";

export default function SocialIcon({ href = "/", github = false, whatsapp = false, linkedin = false, email = false }) {
    const classIcon = cx("bg-[#A5D7E8] p-3 md:p-4 rounded-full hover:bg-amber-100 transition-colors text-lg lg:text-2xl text-[#0B2447]", {
        "fa-brands fa-github": github,
        "fa-brands fa-whatsapp": whatsapp,
        "fa-brands fa-linkedin": linkedin,
        "fa fa-envelope": email,
    });

    return (
        <a href={href} className={classIcon}></a>
    );
}