function fetchAruById(setAru, aruId) {
    fetch(`http://localhost:9000/api/aruk/${aruId}`)
        .then(response => response.json())
        .then(response => setAru(response))
}

export default fetchAruById