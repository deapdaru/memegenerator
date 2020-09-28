import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Memes from '../components/Memes';

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                console.log(data.data);
                setData(data.data)
            });
    }, []);

    return (
        <div>
            <Pagination count={10} />
            <Memes {...data} />
            <Pagination count={10} />
        </div>
    )
}

export default HomePage;
