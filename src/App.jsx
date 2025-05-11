import Header from "./components/Header.jsx"
import Entry from "./components/Entry"
import data from "./data.js"


export default function App(){
    const mountData = data.map(info => {
        return <Entry
                img={{ 
                    src: info.img.src,
                    alt: info.img.src 
                }}
                title= {info.title}
                country={info.country}
                googleMapsLink={info.googleMapsLink}
                dates={info.dates}
                text={info.text}
                />
    })

    return(
        <div className="hero">
            <Header />
            {mountData}
        </div>
    )
}