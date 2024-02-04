import { useState, useEffect } from 'react';

const useApi = (url) => {
    const [apiData, setApiData] = useState();

    async function getData() {
        try {
            fetch(url)
            .then(response => response.json())
            .then(data => setApiData(data))
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return {apiData};
}

export default useApi;