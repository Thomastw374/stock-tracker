import "./Ticker.scss"

const Ticker = ({stock, stat}) => {
    return(
        <div className="ticker">
            <h2 className="ticker__title">{stock}</h2>
            <p className="ticker__stat">{stat}</p>
        </div>
    )
}

export default Ticker;