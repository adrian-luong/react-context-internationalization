import { createContext, useState, useEffect } from 'react';
import { defaultLocale, getDictionary } from './locale.helper';

export const LocaleContext = createContext({
    locale: defaultLocale,
    setLocale: (lang) => { },
    dictionary: {},
});
export function LocaleProvider({ children }) {
    const [lang, setLang] = useState(defaultLocale);
    const [dictionary, setDictionary] = useState({});
    
    useEffect(() => {
        (async () => {
            const json = await getDictionary(lang);
            setDictionary(json);
        })()
    }, [lang]);

    return (
        <LocaleContext.Provider value={{ locale: lang, setLocale: setLang, dictionary: dictionary }}>
            {children}
        </LocaleContext.Provider>
    )
}