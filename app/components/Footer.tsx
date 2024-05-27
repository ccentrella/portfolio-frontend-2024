import React from 'react';
import {NavLink} from "@remix-run/react";

function Footer(props) {
    return (
        <footer className={'bg-footer mt-32'}>
            <div className={'container'}>
                <nav className={'space-y-6 py-20'}>
                    <p><NavLink to="/">Experience</NavLink></p>
                    <p><NavLink to="/interests">Interests</NavLink></p>
                    <p><NavLink to="/blog">Blog</NavLink></p>
                    <p><NavLink to="/contact">Connect</NavLink></p>
                </nav>
                <div className={'text-center'}>
                    <div className={'font-light text-left inline-block text-sm text-gray-400'}>
                        <p>Built with love in Nashville, TN by Chris Centrella.<br/>
                            Copyright 2024, all rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;