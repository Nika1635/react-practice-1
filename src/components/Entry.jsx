export default function Entry(props){
    return(
        <section class = "card-section">
            <div class = "card-container">
                <img 
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                    />
                <div class="main-content">
                    <div class="card-header">
                        <div class="card-name">
                            <img src="./public/image.png"/>
                            <p>{props.country}</p>
                        </div>
                        <a href={props.googleMapsLink}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <p class="date">{props.dates}</p>
                    <p class="card-info">{props.text}</p>
                </div>
            </div>
        </section>
    )
}