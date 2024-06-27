/*Цей код відповідає за відображення розділу новин, що стосуються Media. */

import { useEffect, useState } from "react";
import { getArticlesByTeg } from "../api";
import NewsInfo from "./NewsInfo";
import Wrapper from "./Wrapper";

function Media (){
    const[articles, setArticles] = useState([]);
  
    useEffect(() => {
      getData();
    }, []);
  
    const getData = async () => {
      const data = await getArticlesByTeg('media/media');
      setArticles(data.data.response.results);
    }
  
    return(
      <Wrapper apiRequest={'media/media'} setArticles={setArticles}>
        <h1>MEDIA</h1>
      {articles.map(article => {
        return <NewsInfo article={article}/>;
      })}
      </Wrapper>
    );
}

export default Media;