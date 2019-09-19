import React from 'react';
import './App.css';
import faker from 'faker';

function App() {

    return (
        <div className="ui comments">
            <div className="comment">
                <a className="avatar" href='/'>
                    <img alt={""} src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href='/' className="author">Tom Lukic</a>
                    <div className="text">
                        This will be great for business reports. I will definitely download this.
                    </div>
                    <div className="actions">
                        <a href='/' className="reply">Reply</a>
                        <a href='/' className="save">Save</a>
                        <a href='/' className="hide">Hide</a>
                        <a href='/'>
                            <i className="expand icon"></i>
                            Full-screen
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;