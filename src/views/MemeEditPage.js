import React from 'react';
import EditMeme from '../components/EditMeme';
import CustomBreadcrumb from '../components/layout/CustomBreadcrumb';
import Error from '../components/layout/Error';

function MemeEditPage(props) {
    const meme = props.location.state;
    return (meme !== undefined ? (
        <div>
            <CustomBreadcrumb memeName={meme.meme.name} />
            <EditMeme meme={meme.meme} />
        </div>
        ) : (<Error />)
    )
}

export default MemeEditPage;
