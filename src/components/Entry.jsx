export default function Entry(){
    return(
        <section class = "card-section">
            <div class = "card-container">
                <img 
                    className="main-image"
                    src="https://scrimba.com/links/travel-journal-japan-image-url" 
                    alt="mount fuji" 
                    />
                <div class="main-content">
                    <div class="card-header">
                        <div class="card-name">
                            <img src="./public/image.png"/>
                            <p>JAPAN</p>
                        </div>
                        <a>View on Google Maps</a>
                    </div>
                    <h1>Mount Fuji</h1>
                    <p class="date">12 Jan, 2021 - 24 Jan, 2021</p>
                    <p class="card-info">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
            </div>
        </section>
    )
}