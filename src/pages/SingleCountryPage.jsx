import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import CountryInfo from '../components/countryInfo/CountryInfo'
import CountryService from '../services/CountryService'

import { ReactComponent as ArrowIcon } from '../images/arrow-left.svg'

const SingleCountryPage = () => {
	const { name } = useParams()
	const navigate = useNavigate()
	const [currentCountry, setCurrentCountry] = useState(null)

	const goBack = () => navigate(-1)

	const countryService = new CountryService()

	useEffect(() => {
		countryService.getCountry(name).then(res => setCurrentCountry(res[0]))
	}, [name])

	let countryInfo

	if (currentCountry) {
		countryInfo = {
			name: currentCountry.name.common,
			img: currentCountry.flags.png,
			nativeName: currentCountry.name.common,
			population: currentCountry.population.toLocaleString(),
			region: currentCountry.region,
			subregion: currentCountry.subregion,
			capital: currentCountry.capital,
			tld: currentCountry.tld,
			currency: currentCountry.currencies,
			languages: currentCountry.languages,
			borders: currentCountry.borders,
		}
	}

	return (
		<>
			<section className='info'>
				<div className='container'>
					<button className='info__back' onClick={goBack}>
						<ArrowIcon className='info__back-icon' />
						Back
					</button>
					{currentCountry && <CountryInfo {...countryInfo} />}
				</div>
			</section>
		</>
	)
}

export default SingleCountryPage
