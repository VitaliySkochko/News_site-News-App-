import {useState, useEffect} from 'react';
import { getArticlesByWord } from '../api';
import NewsInfo from './NewsInfo';


function MainPage(){

  const [articles, setArticles] = useState([]);
  const [searchWord, setSearchWord] = useState('news');

 useEffect(() => {
  getData('debates');
 }, []);

 const getData = async (word) => {
  const data = await getArticlesByWord(word);
  setArticles(data.data.response.results);
 }

 const inputHandler = (e) => {
  setSearchWord(e.target.value);
 }

 const buttonHandler = (e) => {
  getData(searchWord);
 }

    return(
        <div>
           <input
            value={searchWord}
            onChange={inputHandler}
           />
      <button onClick={buttonHandler}>Search</button>
        {articles.map(article => {
            return <NewsInfo article={article} isSearchPage = {true} searchWord={searchWord}/>;
          })}
          </div>
    );
}

export default MainPage;