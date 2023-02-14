import { useState } from "react";
import "../application.css"

export const Application = () => {
    const [value, setValue] = useState(0);
    const [hidden, sethidden] = useState(true)
    const [name, setName] = useState('');
    var [test, settest] = useState('')
    const toggle = () => sethidden((prev)=> !prev)
    return (
        <div>
            <h2>Fedorov Project</h2>
            <h1> 
                IQ: {value}
                <br/>
                Name: {name} {test}
         </h1>
                <button onClick={() => setValue ((prev) => prev +1)}>Add</button>
                <button onClick={() => setValue ((prev) => prev -1)}>Rem</button>
                <br/>
                <button onClick={() => settest("durak")}>+rep</button>
                <button onClick={() => settest("")}>-rep</button>
                <br/>
                <input placeholder="Penis sosi"  onChange={(event) => setName(event.target.value)}/>
                <div>
                     <button onClick={toggle}>Toggle</button>
                     {!hidden && <div>Sacha durak</div>}
                </div>

              ///privet davai druzhit ya Dima
        </div>


    )
};
