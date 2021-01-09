import { useCallback, useState } from 'react';

export const useFilter = () => {
    const [type, setType] = useState('');
    const [status, setStatus] = useState('1');

    const tool = useCallback((newStatus, newType) => {
        setStatus(newStatus);
        setType(newType);
    }, [])

    return { type, status, tool }
}