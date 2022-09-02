import React from 'react';

export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">SITE NAME</a>
        <ul>
            <CustomLink href="/">Home</CustomLink>
            <CustomLink href="/createitem">Create item</CustomLink>
        </ul>
    </nav>
}

function CustomLink({href, children, ...props}){
    const path = window.location.pathname

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href}>{children}</a>
        </li>
    )
}