const initialState = {
  article: [],
};

const articles = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ARTICLES":
      return {
        articles: [...payload]
      };
    case "ADD_ARTICLE":
      return {
        articles: [...state.articles, payload],
      };

      case "UPDATE_ARTICLE":
        return{
          articles: state.articles.map((article)=>{
           if(article._id === payload._id){
            return payload
           }
           else{
             return article
           }
          })
        }
        case "DELETE_ARTICLE":
          return{
            articles: state.articles.filter((article)=>
            article._id !== payload._id
            )
          }
          default:
            return state;
  }

};

export const setArticles = (articles) => {
  return {
    type: "SET_ARTICLES",
    payload: articles,
  };
};

export const addArticle = (article) => {
  return {
    type: "ADD_ARTICLE",
    payload: article,
  };
};

export const updateArticle = (article) => {
  return {
    type: "UPDATE_ARTICLE",
    payload: article,
  };
};

export const deleteArticle = (article) => {
  return {
    type: "DELETE_ARTICLE",
    payload: article,
  };
};
export default articles
