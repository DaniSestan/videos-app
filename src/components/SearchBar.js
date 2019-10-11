import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: '',
    };
    
    handleOnChange = (event) => {
        this.setState({term: event.target.value});
    };
    
    handleOnSubmit = (event) => {
      event.preventDefault();
      
      this.props.handleOnSubmit(this.state.term);
    };
    
    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleOnSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.handleOnChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;