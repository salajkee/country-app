import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CountryService from '../../services/CountryService'
import CountryItem from '../countryItem/CountryItem'

import './style.scss'

const CountryList = ({ search }) => {
	const [countries, setCountries] = useState([])

	const countryService = new CountryService()

	useEffect(() => {
		countryService.getAllCountries().then(res => setCountries(res))
	}, [])

	const filteredCountries = countries.filter(c =>
		c.name.common.toLowerCase().includes(search.toLowerCase())
	)

	return (
		<div className='country__items'>
			{filteredCountries.map(c => {
				const countryInfo = {
					img: c.flags.png,
					name: c.name.common,
					info: [
						{
							title: 'Population',
							description: c.population.toLocaleString(),
						},
						{
							title: 'Region',
							description: c.region,
						},
						{
							title: 'Capital',
							description: c.capital,
						},
					],
				}

				return <CountryItem {...countryInfo} key={uuidv4()} />
			})}
		</div>
	)
}

export default CountryList
