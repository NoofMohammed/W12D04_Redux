import React, { useContext } from 'react';
import { NewArticleContext } from './../context/newArticle';
import { useDispatch, useSelector } from 'react-redux';
import {  setArticles } from '../reducer/article/index';

const NewArticle = () => {
	const newArticleContext = useContext(NewArticleContext);
	const dispatch = useDispatch();

	const handleSubmit = (articles) => {
		axios.get("http://localhost:3000/articles"),then
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="article title here"
					onChange={(e) => newArticleContext.setTitle(e.target.value)}
				/>
				<textarea
					placeholder="article description here"
					onChange={(e) => newArticleContext.setDescription(e.target.value)}
				></textarea>
				<button>Create New Article</button>
			</form>

			{newArticleContext.message && <div>{newArticleContext.message}</div>}
		</>
	);
};

export default NewArticle;






// import React, { useContext } from 'react';
// import { NewArticleContext } from './../context/newArticle';

// const NewArticle = () => {
// 	const newArticleContext = useContext(NewArticleContext);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		newArticleContext.createNewArticle();
// 	};

// 	return (
// 		<>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type="text"
// 					placeholder="article title here"
// 					onChange={(e) => newArticleContext.setTitle(e.target.value)}
// 				/>
// 				<textarea
// 					placeholder="article description here"
// 					onChange={(e) => newArticleContext.setDescription(e.target.value)}
// 				></textarea>
// 				<button>Create New Article</button>
// 			</form>

// 			{newArticleContext.message && <div>{newArticleContext.message}</div>}
// 		</>
// 	);
// };

// export default NewArticle;

