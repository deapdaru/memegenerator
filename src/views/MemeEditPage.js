import React from 'react';
import EditMeme from '../components/EditMeme';
import CustomBreadcrumb from '../components/layout/CustomBreadcrumb';

function MemeEditPage(props) {
    const meme = props.location.state.meme;
    return (
        <div>
            <CustomBreadcrumb memeName={meme.name} />
            <EditMeme meme={meme} />
        </div>
    )
}

export default MemeEditPage;
