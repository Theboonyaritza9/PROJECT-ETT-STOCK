import { createContext } from 'react';

export const FilterContext = createContext({
    tool: () => {},
    type: null,
    status: null
});