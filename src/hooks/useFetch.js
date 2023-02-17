// La idea de los hooks es reutilizar lógica, de los estados, useEffect, useCallback
/* Siempre devuelven algo */

import { useCallback, useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("useFetch");

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch(url);

            if (!res.ok) throw new Error("Error al consumir la api");

            const data = await res.json();

            setData(data);
        } catch (error) {
            console.log(error.message);
            setError(error.message);
            setData([]);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        console.log("useEffect");
        fetchData();
    }, []);

    return { data, loading, error };
};
