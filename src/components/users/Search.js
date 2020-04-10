import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertcontext';

const Search = () => {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please Enter Something', 'light');
        } else {
            githubContext.searchUser(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name="text" placeholder="Search User..." value={text} onChange={onChange} />
                <input type="submit" value="Submit" className="btn btn-dark btn-block" />
            </form>
            {githubContext.users.length > 0 && (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>)}
        </div>
    )
}


export default Search