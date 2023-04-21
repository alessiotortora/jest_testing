function capitalize(string) {
const aux = string.toLowerCase()
return aux.charAt(0).toUpperCase() + aux.slice(1)
}

export default capitalize