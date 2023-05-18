import React from "react";
import arrow from '../../assets/images/Vector.svg'



import './nav-list.styles.scss'

type NavListProps = {
    title: string;
    icon?: string;

}

const NavList: React.FC<NavListProps> = ({title, icon}) => {
    const [open, setOpen] = React.useState(false)

    const toggleOpen = () => setOpen(!open)
    
    return (
        <div className="nav-list" onClick={toggleOpen}>
            <div className="nav-list__topic">
                <div className="nav-list__icon">
                    <img src={icon} alt="icon" />
                    <p>{title}</p>
                </div>
                <img src={arrow} alt="arrow" id="arrow"  className={`${open? 'nav-list__icon180': ''}`}/>
            </div>
            <div className={`nav-list__subtopics ${open? 'nav-list__subtopics--show': ''}`}>
                <ul className="nav-list__subtopics-list">
                    <li>Cordano</li>
                    <li>Dogecoin</li>
                    <li>Algorand</li>
                    <li>Bitcoin</li>
                    <li>Litecoin</li>
                    <li>Basic Attention Token</li>
                    <li>Bitcoin Cash</li>
                </ul>
            </div>
        </div>
    )
}

export default NavList;