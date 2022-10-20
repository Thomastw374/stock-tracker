import "./StocksPage.scss"
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Graph from "../../components/Graph/Graph";
import StatsContainer from "../../components/StatsContainer/StatsContainer";



const StocksPage = () => {
    
    const apiKey = "AA8ANJ4S0JTJBJ6Z";

    const getCarouselStocks = async () => {
      const url =
        "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=AA8ANJ4S0JTJBJ6Z";
      const res = await fetch(url);
      const carouselStocks = await res.json();
      console.log(carouselStocks);

      return carouselStocks;
    };

    console.log(getCarouselStocks());

    return(
        <div className="stocks-page">
            <HeaderContainer/>
            <CarouselContainer/>
            <div className="stocks-page__main">
              <Graph/>
              <StatsContainer/>
            </div>
        </div>
    )
}

export default StocksPage;