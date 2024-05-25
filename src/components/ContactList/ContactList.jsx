import { useSelector } from "react-redux"

import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { selectContacts, selectFilter } from "../../redux/selectors"


export default function ContactList() {

    const items = useSelector(selectContacts)
    const value = useSelector(selectFilter)

    function getVisibleContacts(contacts) {
            const info = contacts.filter(item => item.name.toLowerCase().includes(value.name.toLowerCase()))
        return info
        
        
    }

    const visibleContacts = getVisibleContacts(items)

    return (
        <ul className={css.list}>
            {visibleContacts.map(elem => {
                return <li className={css.listItem} key={elem.id}>
                    <Contact userName={elem.name} userNumber={elem.number} id={elem.id}></Contact>
                </li>
                
            })}
        </ul>
    )
}