import React from "react";
import arrow from '../../assets/images/arrow-down20px.svg'



import './right-nav-list.styles.scss'

type RightNavListProps = {
    title: string;
}

const RightNavList: React.FC<RightNavListProps> = ({title}) => {
    const [open, setOpen] = React.useState(false)

    const toggleOpen = () => setOpen(!open)
    
    return (
        <div className="right-nav-list" onClick={toggleOpen}>
            <div className="right-nav-list__topic">
                <div className="right-nav-list__icon">
                    <p>{title}</p>
                </div>
                <img src={arrow} alt="arrow" id="arrow"  className={`${open? 'right-nav-list__icon180': ''}`}/>
            </div>
            <div className={`right-nav-list__subtopics ${open? 'right-nav-list__subtopics--show': ''}`}>
                <ul className="right-nav-list__subtopics-list">
                    <li>AskReddit</li>
                    <li>NoStupicQuestions</li>
                    <li>DestinyTheGame</li>
                    <li>Explainlikeimfive</li>
                    <li>AskMen</li>
                    <li>Leagueoflegends</li>
                    <li>Minecraft</li>
                </ul>
            </div>
        </div>
    )
}

export default RightNavList;