import React, { Component } from 'react';
import { connect } from 'react-redux';
// Remember our thunk this is where we will need to make use of it
import { pagesFetchData } from '../actions/actions.js';
// We gonna use lodash to map over our page object
import _ from 'lodash'

class Pages extends Component {
  constructor(props) {
    super(props);
    // Bind our render page to function so we can use it in the render method 
    this.renderPage = this.renderPage.bind(this)
  }

  // Fetch pages when component is mounted
  componentDidMount() {
    const API_URL = 'http://localhost:3000/api/pages/?list';
    // I am setting some delay to simulate a real world request
    // setTimeout(() => { this.props.fetchPages(API_URL); }, 1000);
    this.props.fetchPages(API_URL);
  }
  
  // Function to render our page
  renderPage() {
    return _.map(this.props.pages, page => {
      // Check if there is an image to be displayed
      const img = page.image ? page.image.filename : '';
      // Get the html for our page cooking instructions
      function createMarkupForContent() {
        if (page.content) {
          return {
            __html: page.content,
          };
        } else {
          return;
        }
      };
      // Make sure we show only published pages
      if (page.state = "published") {
        return (
          <div key={page._id}>
            <h1>{page.name}</h1>
            <img style={{ width: '300px', height: '300px' }} src={img} />
            <h2>Content</h2>
            <div dangerouslySetInnerHTML={createMarkupForContent()} />
          </div>
        );
      }
    });
  }
  render() {
    // If data is still loading 
    if (this.props.loading) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }
    // Show page once data is loaded
      return (
        <div>
        {this.renderPage()}
        </div>
      );
};
};

function mapStateToProps(state, ownProps) {
  // Things return here are showing in props for Page
  return {
    pages: state.pages,
    loading: state.loadPages,
  };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
  // Our thunk will be mapped to this.props.fetchPages
  fetchPages: (url) => dispatch(pagesFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pages);
