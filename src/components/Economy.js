/*Цей код відповідає за відображення розділу новин, що стосуються економіки. */

import { useEffect, useState } from "react"; /*Імпортує два хуки. Використовуються для роботи з ефектами та станом компонента. */
import { getArticlesByTeg } from "../api"; /*імпортує функцію з файлу api, яка отримує статті за певним тегом з сервера.*/
import NewsInfo from "./NewsInfo"; /* імпортує компонент NewsInfo, який відповідає за відображення інформації про кожну новину.*/
import Wrapper from "./Wrapper"; /*Імпортує компонент Wrapper, який, очевидно, відповідає за обгортання контенту. */


function Economy () {  //Ця функція компонента Economy. Вона використовує хук useState для створення стану articles, який міститиме список статей.

    const[articles, setArticles] = useState([]);
  
    useEffect(() => { //Цей ефект запускається один раз при монтажі компонента (тобто після першого рендеру). Він викликає функцію getData, яка отримує дані про статті за певним тегом та оновлює стан articles.
      getData();
    }, []);
  
    const getData = async () => { //Функція викликає функцію getArticlesByTeg з файлу api, отримує дані та оновлює стан articles.
      const data = await getArticlesByTeg('enterprise/enterprise');
      setArticles(data.data.response.results);
    }
  
    return(
      <Wrapper apiRequest={'enterprise/enterprise'} setArticles={setArticles}> 
        <h1>ECONOMY</h1>
      {articles.map(article => {
        return <NewsInfo article={article}/>;
      })}
      </Wrapper>
    );
}

export default Economy;