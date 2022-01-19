import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function FrontPage() {
    return <div>
        <h1>Front Page</h1>
        <ul>
            <li><Link to={"/movies"}>List existing movies</Link></li>
            <li><Link to={"/movies/new"}>Add new movie</Link></li>
        </ul>
    </div>;
}

function Movies() {
    return <Routes>
        <Route path={""} element={<h1>Movies</h1>}/>
        <Route path={"new"} element={<h1>New movie</h1>}/>
    </Routes>
}

function MoviesApplication() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/*"} element={<Movies />}/>
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render(<MoviesApplication/>, document.getElementById("app"));
