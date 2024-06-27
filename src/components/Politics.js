/*Цей код відповідає за відображення розділу новин, що стосуються політики */

import { useEffect, useState } from "react";
import { getArticlesByTeg } from "../api"; // це функція, яка виконує запит до API для отримання статей за певним тегом.
import NewsInfo from './NewsInfo'
import Wrapper from "./Wrapper";

function Politics () {

  const[articles, setArticles] = useState([]); // використовується для створення стану articles, який зберігає масив статей.
  
  useEffect(() => { // викликає getData при монтуванні компонента (при першому рендері).
    getData();  
  }, []);

  const getData = async () => { // асинхронна функція, яка виконує запит до API за допомогою getArticlesByTeg('politics/politics')
    const data = await getArticlesByTeg('politics/politics');
    setArticles(data.data.response.results);
  }

  return(
    <Wrapper apiRequest={'politics/politics'} setArticles={setArticles}>
      <h1>POLITICS</h1>
    {articles.map(article => {
      return <NewsInfo article={article}/>;
    })}
    </Wrapper>
  );
}

export default Politics;