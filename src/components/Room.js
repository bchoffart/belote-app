import React from 'react';

export default function Room() {
    return (
        <div className='room-wrapper'>
            <div className='playing-carpet'>
                <div className='top-hand'>

                </div>
                <div className='middle-hands'>
                    <div className='left-hand'>

                    </div>
                    <div className='right-hand'>

                    </div>
                </div>
                <div className='player-hand'>
                    <div className='card' />
                    <div className='card' />
                    <div className='card' />
                    <div className='card' />
                    <div className='card' />
                </div>
                <div className='card-pile'></div>
            </div>
            <div className='chat'>
                <div>
                    <h1>Chat Room</h1>
                    <div className='separator'></div>
                </div>
                <div className='chat-space'></div>
                <input className='chat-input' type="text" />
            </div>
        </div>
    );
}
