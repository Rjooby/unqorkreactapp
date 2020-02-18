import React, {useState} from 'react';

import './Accordion.css';

const Accordion = (props) => {
    const {title, children} = props;

    const [isOpen, setOpen] = useState(false);

    const onClick = () => {
        setOpen(!isOpen);
    }

    return (
        <div className="accordion-container">
            <div className="title"
                 onClick={() => onClick()}
            >
                {title}
            </div>
            <div className={isOpen ? "open" : "closed"}>
                <div className="collapsable-content">
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Accordion;
