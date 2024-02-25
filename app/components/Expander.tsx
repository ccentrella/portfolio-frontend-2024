import React, {useState} from 'react';
import Card from "~/components/Card";

function Expander({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <p className={'text-center'}>
                <button className={'px-16 py-6 bg-primary rounded-[50px] text-cyan-100 hover:bg-cyan-800'}
                        onClick={()=> setIsOpen(previous => !previous)}>{title}</button>
            </p>
            <div style={{display: isOpen ? "block" : "none"}} className={'pt-16'}>
                <Card title={title}>
                    {children}
                </Card>
            </div>
        </div>
    );
}

export default Expander;