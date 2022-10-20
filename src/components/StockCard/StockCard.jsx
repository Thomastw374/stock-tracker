import "./StockCard.scss"

const StockCard = ({label, stat}) => {
    return(
        <div className="ticker">
            <h2 className="ticker__title">{label}</h2>
            <p className="ticker__stat">{stat}</p>
        </div>
    )
}

export default StockCard;