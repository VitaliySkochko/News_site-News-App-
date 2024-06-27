/*Цей компонент використовується для обгортання контенту та відображення пагінації для навігації між сторінками */

import{getArticlesByTeg} from "../api";

function Wrapper(props){ // це функціональний компонент, який приймає props.

    const pages = [1,2,3,4,5,6,7,8,9,10]; // масив сторінок, які використовуються для створення кнопок пагінації.

    const getData = async (page='1') => { //  асинхронна функція, яка викликається при кліку на кнопку пагінації (onClick).
        const data = await getArticlesByTeg(props.apiRequest,page);
        props.setArticles(data.data.response.results);
      }

    const clickHandler = (event) => getData(event.target.name); // обробник подій, який викликає getData з ім'ям сторінки 

    return(
        <div className="Wrapper">
            {props.children}
            <div className="Paginator">{pages.map((page, index) =>{
               return(
                <button key={index} name={page} onClick={clickHandler}>{page}</button>
               );
            })}</div>
        </div>
    );
}

export default Wrapper;