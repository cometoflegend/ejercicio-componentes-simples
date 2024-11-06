import React from 'react';
import { useState } from 'react';

function Mero() {


    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>¡Púlsame!</button>
            {isVisible && (
                <div><br/>
                    <img src="https://scx2.b-cdn.net/gfx/news/2023/the-goliath-grouper-wh.jpg" height="500"></img>

                    <h2>Epeniphelus itajara junto a un buceador.</h2>
                </div>
            )}
        </div>

    );
}

export default Mero;