import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import style from './../Header.module.scss';
import React from 'react';

const MiniProfile = props => {
	let [isModalOpen, setOpen] = React.useState(false);
	const toggleModal = () =>
		!isModalOpen ? setOpen((isModalOpen = true)) : setOpen((isModalOpen = false));

	return (
		<div className={style.container}>
			<div className={`${style.header__miniProfile} ${style.miniProfile}`}>
				<div className={style.miniProfile__avatar}>
					<NavLink to="/profile">
						<img
							src="https://i.pinimg.com/474x/97/bc/5a/97bc5a55c52716b393db4fd73f86b643.jpg"
							alt="mini-avatar"
						/>
					</NavLink>
				</div>
				<div className={style.miniProfile__text}>
					<NavLink to="/profile">Hi, {props.name}</NavLink>
				</div>
				<button onClick={toggleModal}>
					<FontAwesomeIcon icon={faChevronDown} />
				</button>
			</div>
			<ul className={`${style.profileModal} ${isModalOpen ? `${style.open}` : ''}`}>
				<li className={style.profileModal__link}>
					<NavLink to="/profile">Your profile</NavLink>
				</li>
				<li onClick={props.logout} className={style.profileModal__logout}>
					Logout
				</li>
			</ul>
		</div>
	);
};

export default MiniProfile;
