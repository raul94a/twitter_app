import { useState } from "react";
export const useHttp = () => {
    const [isLoading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    async function request(url, configObject) {
        setLoading(true);
        const response = await fetch(url, {
            method: configObject['method'] || 'GET',
            body: JSON.stringify(configObject['body']),
            headers: configObject['headers']
        })
        if (!response.ok) {
            setError(true);
            setLoading(null);
        }
        setLoading(null);
        return await response.json()
    }
    return {
        request: request,
        isLoading: isLoading,
        error: error,
        setLoading: setLoading,
        setError: setError,
    }
}


