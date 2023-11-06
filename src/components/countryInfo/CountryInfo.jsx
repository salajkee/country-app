import './style.scss'

const CountryInfo = ({
	img,
	name,
	nativeName,
	population,
	region,
	subregion,
	capital,
	tld,
	currency,
	languages,
	borders,
}) => {
	return (
		<div className='info__inner'>
			<div className='info__flag'>
				<img src={img} alt='' />
			</div>
			<div className='info__content'>
				<h2 className='info__name'>{name}</h2>
				<ul className='info__list'>
					<li className='info__list-item'>
						Native name: <span>{nativeName}</span>
					</li>
					<li className='info__list-item'>
						Population: <span>{population}</span>
					</li>
					<li className='info__list-item'>
						Region: <span>{region}</span>
					</li>
					<li className='info__list-item'>
						Sub Region: <span>{subregion}</span>
					</li>
					<li className='info__list-item'>
						Capital: <span>{capital}</span>
					</li>
					<li className='info__list-item'>
						Top Level Domain: <span>{tld[0]}</span>
					</li>
					<li className='info__list-item'>
						Currency: <span>{Object.values(currency)[0].name}</span>
					</li>
					<li className='info__list-item'>
						Languages <span>{Object.values(languages)}</span>
					</li>
				</ul>
				{borders && (
					<div className='info__borders'>
						<div className='info__borders-title'>Border Countries</div>

						<ul className='info__borders-list'>
							{borders.map((el, i) => (
								<li className='info__borders-item' key={i}>
									{el}
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}

export default CountryInfo
