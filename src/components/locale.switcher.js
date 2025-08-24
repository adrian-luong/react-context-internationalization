import { useContext } from "react"
import { LocaleContext } from "../context/locale.context"
import { defaultLocale } from "../context/locale.helper"

export default function LocaleSwitcher() {
    const { dictionary, setLocale } = useContext(LocaleContext)
    const switchLanguage = (value) => {
        if (['en', 'vi'].includes(value)) {
            setLocale(value)
        } else {
            setLocale(defaultLocale)
        }
    }

    return (
        <select defaultValue={defaultLocale} onChange={(event) => switchLanguage(event.target.value)}>
            <option value="en">{dictionary.en}</option>
            <option value="vi">{dictionary.vi}</option>
        </select>
    )
}