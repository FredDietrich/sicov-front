import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Value, Main, Contact } from "./app/component";

function SystemRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="admin" element={<Value />} />
                <Route path="contact" element={<Contact />} />
            </Routes>
        </HashRouter>
    );
}

export default SystemRoutes;