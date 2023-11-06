import { Routes, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import SingleCountryPage from '../../pages/SingleCountryPage'
import Header from '../header/Header'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='country/:name' element={<SingleCountryPage />} />
				</Routes>
			</main>
		</>
	)
}

export default App
