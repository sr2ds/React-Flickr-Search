import React from "react";
import { connect } from 'react-redux';
import queryString from 'query-string'


class GridInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.tag)
    const { search_term, tag } = this.props
    const { photo } = this.props.images

    const searchInfo = !tag ? `Você buscou por ${search_term}` : `Exibindo a tag ${search_term}`
    const countInfo = photo ? `Mostrando ${photo.length} imagens` : ''
    
    return (
      <div className="info">
        <p>
          {searchInfo}
        </p>
        <p>
          {countInfo}
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(GridInfo);
