import "./StocksPage.scss";
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Graph from "../../components/Graph/Graph";
import StatsContainer from "../../components/StatsContainer/StatsContainer";
import { useEffect, useRef, useState } from "react";

const StocksPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const isMounted = useRef(false)

  useEffect(() => {
    if(isMounted.current) {
      getSearchResults(searchTerm);
    } else {
      isMounted.current = true;
    }
  }, [searchTerm]);
  
  const apiKey = "AA8ANJ4S0JTJBJ6Z";

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value)
  };

  const getSearchResults = async (searchTerm) => {
    const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=${apiKey}`;

    const res = await fetch(url)
    const searchResults = await res.json();

    console.log(searchResults)

    return searchResults;
  };

  const getCarouselStocks = async () => {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=${apiKey}`;
    const res = await fetch(url);
    const carouselStocks = await res.json();
    console.log(carouselStocks);

    return carouselStocks;
  };

  return (
    <div className="stocks-page">
      <HeaderContainer handleSearchInput={handleSearchInput}/>
      <CarouselContainer />
      <div className="stocks-page__main">
        <Graph />
        <StatsContainer />
      </div>
    </div>
  );
};

export default StocksPage;
