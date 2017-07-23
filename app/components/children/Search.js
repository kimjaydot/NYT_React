import React from "react";

class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search</h3>
        </div>
        <div className="panel-body text-center">

          <h1>Address:</h1>
          <p>{this.props.address}</p>

        </div>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Search;