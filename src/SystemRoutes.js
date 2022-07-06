import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Main, Contact, Results, Login, CreateVaccine, Reports } from "./app/component";

function SystemRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="contact" element={<Contact />} />
                <Route path="results" element={<Results />} />
                <Route path="login" element={<Login />} />
                <Route path="create" element={<CreateVaccine />} />
                <Route path="reports" element={<Reports />} />
            </Routes>
        </HashRouter>
    );
}

export default SystemRoutes;