function getFormvalue(event) {
    //Write your code here
	event.preventDefault()
	const formData = new FormData(event.target)
	const f = formData.get("fname")
	const l = formData.get("lname")
	alert(f + " " + l)
}
