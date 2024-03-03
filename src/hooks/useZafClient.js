import { useState, useEffect } from "react";

let zafClient = null;

const useZafClient = () => {
    const [client, setClient] = useState(zafClient);

    useEffect(() => {
        if (!client && typeof window.ZAFClient !== 'undefined') {
            zafClient = window.ZAFClient.init()
            setClient(zafClient);
            zafClient.invoke('resize', { width: '100%', height: '200px' });
        }
    }, [client]);

    return client;
};

export default useZafClient;


