import { useState } from "react";
import { AppStack, AuthStack } from "../navigation/stacks";



export function Navigation() {
    const [isAuthenticated] = useState(false);

    return isAuthenticated ? <AppStack/> : <AuthStack/>;
}