

function LinkCard({ title, url, slug, views, createdAt }) {
	return (
		<div>
			<h1>{title}</h1>
			<p>{url}</p>
			<p>{slug}</p>
			<span>{views}</span>
			<span>{createdAt}</span>
		</div>
	)
}

export default LinkCard