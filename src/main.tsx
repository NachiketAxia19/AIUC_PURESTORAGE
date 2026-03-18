import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import { oktaAuth } from "./config/okta";
import App from "./App.tsx";
import "./globals.css";

function AppWithOkta() {
    const navigate = useNavigate();

    const restoreOriginalUri = async (
        _oktaAuth: unknown,
        originalUri: string
    ) => {
        navigate(originalUri || "/", { replace: true });
    };

    return (
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <Routes>
                <Route path="/login/callback" element={<LoginCallback />} />
                <Route path="*" element={<App />} />
            </Routes>
        </Security>
    );
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <AppWithOkta />
        </BrowserRouter>
    </StrictMode>
);
