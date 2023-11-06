import { ReactComponent as SearchIcon } from '../../images/search.svg'
import './style.scss'

const Search = ({ handleSearch, search }) => {
	return (
		<div className='search'>
			<SearchIcon className='search__icon' />

			<input
				className='search__input'
				type='text'
				placeholder='Search for a country...'
				value={search}
				onChange={e => handleSearch(e.target.value)}
			/>
		</div>
	)
}

export default Search
