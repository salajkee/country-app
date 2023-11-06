import { Link } from 'react-router-dom'

import './style.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='container'>
				<div className='header__inner'>
					<Link className='header__logo' to='/'>
						Where in the world?
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
