import { useState, useEffect } from "react";
import { useOktaAuth } from "@okta/okta-react";

interface OktaUserInfo {
    userName: string;
    userEmail: string;
    isAuthenticated: boolean;
    isLoading: boolean;
}

export const useOktaUser = (): OktaUserInfo => {
    const { authState, oktaAuth } = useOktaAuth();
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        if (authState?.isAuthenticated) {
            oktaAuth.getUser().then((info) => {
                setUserName(info.name || info.preferred_username || "User");
                setUserEmail(
                    (info.email as string) ||
                    (info.preferred_username as string) ||
                    ""
                );
            });
        }
    }, [authState, oktaAuth]);

    return {
        userName,
        userEmail,
        isAuthenticated: authState?.isAuthenticated ?? false,
        isLoading: !authState,
    };
};
