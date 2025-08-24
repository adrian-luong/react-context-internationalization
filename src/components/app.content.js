import { useContext } from 'react';
import { LocaleContext } from '../context/locale.context';
import LocaleSwitcher from './locale.switcher';


export default function AppContent() {
    const { dictionary } = useContext(LocaleContext)

    return (
        <div>
            <p>{dictionary.edit} <code>src/App.js</code> {dictionary.saveToReload}.</p>
            <div style={{ display: "flex", justifyItems: 'center', alignItems: 'center' }}>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginRight: 20}}
                >
                    {dictionary.learnReact}</a>
                <LocaleSwitcher />
            </div>
        </div>
    )
}