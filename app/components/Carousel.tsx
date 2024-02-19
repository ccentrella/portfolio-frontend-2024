import React from 'react';

interface Recommendation {
    id: number,
    recommendation: string,
    name: string
}

function Carousel({source}) {
    return (
        <div>
            {/*{source.map((item: Recommendation) => (*/}
            {/*    <div key={item.id}>*/}
            {/*        <p>{item.recommendation}</p>*/}
            {/*        <p>{item.name}</p>*/}
            {/*    </div>*/}
            {/*))};*/}
        </div>
    );
}

export default Carousel;