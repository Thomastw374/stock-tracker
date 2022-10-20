import StockCard from "../StockCard/StockCard";
import "./CarouselContainer.scss"

const CarouselContainer = () => {
    return(
        <div className="carousel">
            <StockCard label="IBM" stat="684.80" />
        </div>
    )
}

export default CarouselContainer;