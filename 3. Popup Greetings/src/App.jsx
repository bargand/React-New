import React from 'react';
import Popup from 'reactjs-popup';
import './App.css'

export default function PopupGfg() {
    return (
        <div className='app'>
            <h4>Do You Love Me</h4>
            <Popup trigger=
                {<button> open </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Yes I Love You
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};
