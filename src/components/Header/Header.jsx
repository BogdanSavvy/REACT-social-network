import Logo from './Logo/Logo';
import Notification from './Notification/Notification';
import MiniProfile from './MiniProfile/MiniProfile';
import Search from './Search/Search';

import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = props => {
	return (
		<header className={style.header}>
			<div className={style.header__container}>
				<Logo />
				<Search />
				<Notification />
				{props.isAuth ? (
					<MiniProfile logout={props.logout} name={props.login} />
				) : (
					<NavLink className={style.header__login} to="/login">
						Login
					</NavLink>
				)}
			</div>
		</header>
	);
};

export default Header;
