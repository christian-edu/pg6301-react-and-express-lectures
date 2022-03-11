import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function FrontPage() {
    return (
        <div>
            <h1>Front Page</h1>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}

async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`failed ${res.status}`);
    }
    return await res.json();
}

function Login() {
    useEffect(async () => {
        const {authorization_endpoint} = await fetchJSON("https://accounts.google.com/.well-known/openid-configuration");
        const parameters = {
            response_type: "token",
            client_id: "469230146682-2eat9sad9o7hbcs209at0n32j5d63h4j.apps.googleusercontent.com",
            scope: "email profile",
            redirect_uri: window.location.origin + "/login/callback"
        };

        window.location.href = authorization_endpoint + "?" + new URLSearchParams(parameters);
    }, []);

    return (
        <div>
            <h1>Please wait..</h1>
        </div>
    );
}

function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/login/callback"} element={<h1>Login callback</h1>}/>
                <Route path={"/profile"} element={<h1>Profile</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<Application/>, document.getElementById("app"));
