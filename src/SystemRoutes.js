import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Value, Main } from "./app/component";

function SystemRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="value" element={<Value />} />
            </Routes>
        </BrowserRouter>
    );
}

export default SystemRoutes;