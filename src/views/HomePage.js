import React, { useState, useEffect } from 'react';
import CustomPagination from '../components/layout/CustomPagination';
import Memes from '../components/Memes';
import axios from 'axios';

function HomePage() {
    const [memes, setMemes] = useState([]);
    const [page, setPage] = useState(0);

    async function getMemes() {
        const response = await axios.get("https://api.imgflip.com/get_memes");
        setMemes(response.data.data.memes);
    }

    useEffect(() => {
        getMemes();
    }, []);

    return (
        <div>
            <CustomPagination page={page} setPage={setPage} />
            <Memes memes={memes} page={page} />
            <CustomPagination page={page} setPage={setPage} />
        </div>
    )
}

export default HomePage;
