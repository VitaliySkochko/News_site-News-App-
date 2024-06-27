/*Цей код відповідає за відображення розділу новин, що стосуються спорту. */

import { useEffect, useState } from "react";
import { getArticlesByTeg } from "../api";
import NewsInfo from "./NewsInfo";
import Wrapper from "./Wrapper";

function Sport (){

    const[articles, setArticles] = useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTeg('sport/sport');
    setArticles(data.data.response.results);
  }

  return(
    <Wrapper apiRequest={'sport/sport'} setArticles={setArticles}>
      <h1>SPORT</h1>
    {articles.map(article => {
      return <NewsInfo article={article}/>;
    })}
    </Wrapper>
  );
}

export default Sport;