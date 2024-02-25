// pages/_app.tsx
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react';
import '../styles/globals.css';


function App() {
    return (
    <NextUIProvider>
        < App />
    </NextUIProvider>
    );
}

export default App;
