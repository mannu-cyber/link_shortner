import axios from "axios"
import { useEffect, useState } from "react"
import LinkCard from "../../components/linkCard/LinkCard"

function Links() {

	const [links, setLinks] = useState([])

	const getAllLinks = async () => {

		const response = await axios.get(`${import.meta.env.VITE_API_URL}/links	`)

		setLinks(response.data.data)

	}

	useEffect(() => {
		getAllLinks
	})

	return (
		<>
			<h1>My links</h1>
			<div>
				{links.map((link, i) => {
					const { title, url, slug, views, createdAt } = link
					return <LinkCard title={title} url={url} slug={slug} views={views} createdAt={createdAt}
						} />

				
					
				})}
			</div>

		</>
	)
}

export default Links