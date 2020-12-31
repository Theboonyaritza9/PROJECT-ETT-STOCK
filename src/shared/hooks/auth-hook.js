import { useCallback, useState } from 'react';

export const useAuth = () => {

    const [token, setToken] = useState(false);
    const [statusId, setStatusId] = useState(false)

    const login = useCallback((token, id) => {
        // console.log(token)
        setToken(token)
        setStatusId(id)
    }, []);

    const logout = useCallback(() => {
        setToken(false);
    }, [])

    return { token ,login, statusId, logout }
}