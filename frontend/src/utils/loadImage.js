export default url =>
	new Promise(resolve => {
		const image = new Image()
		image.onload = resolve
		image.src = url
	})
