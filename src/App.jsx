import Header from "./components/Header.jsx"
import Entry from "./components/Entry"
import data from "./data.js"


export default function App(){
    const mountData = data.map(info => {
        return <Entry
                key = {info.id}
                {...info}
                />
    })

    return(
        <div className="hero">
            <Header />
            {mountData}
        </div>
    )
}