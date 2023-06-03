import style from './News.module.scss';

const News = props => {
	return (
		<div className={`${style.page}`}>
			<div className={`${style.page__container}`}>
				<div className={`${style.page__news1}`}>news 1</div>
				<div className={`${style.page__news2}`}>news 2</div>
				<div className={`${style.page__content}`}>content</div>
				<div className={`${style.page__calendar}`}>calendar</div>
				<div className={`${style.page__weather}`}>weather</div>
				<div className={`${style.page__news3}`}>news 3</div>
				<div className={`${style.page__friendsNews}`}> friends news</div>
			</div>
		</div>
	);
};

export default News;
