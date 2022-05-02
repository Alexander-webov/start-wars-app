import React from 'react';
import cn from 'classnames'
import style from './UIVideo.module.css'

const Uivideo = ({ src, classes, playbackRate = 1.0 }) => {
    return (
        <video
            className={cn(style.video, classes)}
            playbackRate={playbackRate}
            autoplay="autoplay"
            muted="muted"
            loop='loop'
        >
            <source src={src} />
        </video>
    );
}

export default Uivideo;
