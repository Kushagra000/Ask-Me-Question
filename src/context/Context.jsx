import { createContext, useState } from "react"
import run from "../config/AskMe"

export const Context = createContext();

const ContextProvider=(props)=>{
    const  [input, setInput] = useState("");
    const [recentPrompt, setRecentPromt]=useState("");
    const [prevPrompt, setPrevPrompt]= useState([]);
    const [showResult, setShowResult]= useState(false);
    const [loading, setLoading]=useState(false);
    const [resultData, setResultData]=useState("");
    const onSent = async (prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPromt(input)
        const response = await run(input)
        setResultData(response)
        setLoading(false)
        setInput("")
    }

    const contextValue={
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPromt,
        recentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        input,
        setInput,
        resultData,
        setResultData,
    }
    return (
        <Context.Provider value={contextValue}>
        {props.children}
        </Context.Provider>
    )
}
export default ContextProvider