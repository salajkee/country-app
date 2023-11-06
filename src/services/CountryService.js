class CountryService {
	getResource = async url => {
		let res = await fetch(url)

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`)
		}

		return await res.json()
	}

	getAllCountries() {
		return this.getResource(`https://restcountries.com/v3.1/all`)
	}

	getCountry(name) {
		return this.getResource(`https://restcountries.com/v3.1/name/${name}`)
	}
}

export default CountryService
