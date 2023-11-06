import { Link } from 'react-router-dom'
import './style.scss'

const CountryItem = ({ img, name, info }) => {
	return (
		<Link className='country__item' to={`/country/${name}`}>
			<div className='country__item-img'>
				<img src={img} alt={name} />
			</div>
			<div className='country__item-content'>
				<h2 className='country__item-name'>{name}</h2>
				<ul className='country__item-info'>
					{info.map((el, i) => (
						<li key={i}>
							{el.title}: <span>{el.description}</span>
						</li>
					))}
				</ul>
			</div>
		</Link>
	)
}

export default CountryItem
