import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();
const Contextprovider = (props) => {
    const [input ,setinput]  = useState('');
    const [recentpromt, setrecentpromt] = useState('');
    const [prepromt,setprepromt] = useState([]);
    const [showresult , setshowstate] =useState(false);
    const [loading , setloading] =useState(false);
    const [resultdata , setresultdata] = useState('');

    const onSent = async(promt) => {
        await run(input)
    }

    const ContextValue = {
            prepromt,
            setprepromt,
            onSent,
            setrecentpromt,
            recentpromt,
            showresult,
            loading,
            resultdata,
            input,
            setinput,
    }

    return(
        <Context.Provider value={ContextValue}>
                {props.children}
        </Context.Provider>
    )
}

export default Contextprovider