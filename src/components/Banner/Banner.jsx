import './Banner.css'

export const Banner = (options) => {
    return (
        <section className='main-banner'>
            <div className='main-banner-ornament'>
                <img src="/assets/ornament_banner.png" alt="ornament"/>
            </div>
            <div className='main-banner-container'>
                <div className='main-banner-text'>                    
                    <h2>Melhores ofertas personalizadas</h2>
                    <h1>Queima de estoque Nike 🔥</h1>
                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do
                        do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className='main-banner-button'>
                        Ver Ofertas
                    </button>
                </div>
                <div className='main-banner-imagem'>
                    <img src="/assets/tenis_banner.png" alt="tenis"/>   
                </div>
            </div>
            <div className='main-banner-slider'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    )
}