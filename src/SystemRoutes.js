import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { App, Value } from "./app/component";

function SystemRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="value" element={<Value />} />
            </Routes>
        </BrowserRouter>
    );
}

export default SystemRoutes;