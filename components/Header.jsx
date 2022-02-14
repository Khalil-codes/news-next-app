import Link from "next/link";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <Link href="/">
                <a className="logo">Newsman</a>
            </Link>
            <div className="links">
                <Link href="/" className="link">
                    <a>Home</a>
                </Link>
                <Link href="/feed/1" className="link">
                    <a>Feed</a>
                </Link>
                <Link href="/profile" className="link">
                    <a>Profile</a>
                </Link>
                <div className="link">
                    <a
                        href="https://linkedin.com/in/khalil-patiwala/"
                        target="_blank">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;
