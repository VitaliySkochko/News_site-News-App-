/*Цей код представляє компонент React з назвою NewsInfo, який відображає інформацію про окрему новину. */

function NewsInfo({article, isSearchPage, searchWord}){
    return(
        <div className="News-info">

            {isSearchPage 
             ?  <>
             <h2><a href={article.webUrl}>
                {article.webTitle.split(searchWord)[0]}
                <span style={{backgroundColor: "yellow"}}>{searchWord}</span>
                {article.webTitle.split(searchWord)[1]}
                </a></h2>
             <p id="date-info">{article.webPublicationDate.split('T')[0]}</p>
             <hr />
             
           </>
             :  <>
             <h2><a href={article.webUrl}>{article.webTitle}</a></h2>
             <p id="date-info">{article.webPublicationDate.split('T')[0]}</p>
             <hr />
             
           </>
            }
           
        </div>
    );
}

export default NewsInfo;