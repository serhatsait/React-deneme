import React from 'react';

const Comment = (props) => {
    const {name, text, avatar} = props;

    return (
        <div className="comment">
            <a className="avatar" href='/'>
                <img alt={""} src={avatar}/>
            </a>
            <div className="content">
                <a href='/' className="author">{name}</a>
                <div className="text">
                    {text}
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
    );
};

export default Comment;