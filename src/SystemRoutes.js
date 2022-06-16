import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Value, Main } from "./app/component";

function SystemRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="value" element={<Value />} />
            </Routes>
        </HashRouter>
    );
}

export default SystemRoutes;