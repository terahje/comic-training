import { useState, useEffect } from "react";

export const useLocalStorage = (key, initial) => {
    const [value, setValue] = useState(initial);

    useEffect(() => {
        const item = window.localStorage.getItem(key)
        window.localStorage.setItem(key, value)
    }, [value, key]);

    return [value, setValue];
}