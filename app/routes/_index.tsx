import React from 'react';
import {MetaFunction} from "@remix-run/react";

function Index() {
    return (
        <div></div>
    );
}

export default Index;

export const meta: MetaFunction = () => {
    return [
        {title: "Welcome to Chris Centrella's Portfolio"},
        {name: "description", content: "Welcome to Chris Centrella's Portfolio"}
    ];
}
