import { useState } from 'react'
import CountryList from '../components/countryList/CountriesList'
import Search from '../components/search/Search'

const HomePage = () => {
	const [search, setSearch] = useState('')

	const handleSearch = value => {
		setSearch(value)
	}

	return (
		<>
			<section className='country'>
				<div className='container'>
					<div className='country__top'>
						<Search handleSearch={handleSearch} search={search} />
					</div>
					<CountryList search={search} />
				</div>
			</section>
		</>
	)
}

export default HomePage
