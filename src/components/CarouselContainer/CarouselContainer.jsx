import Ticker from "../Ticker/Ticker";
import "./CarouselContainer.scss"

const CarouselContainer = () => {
    return(
        <div className="carousel">
            <Ticker stock="IBM" stat="684.80" />
        </div>
    )
}

export default CarouselContainer;