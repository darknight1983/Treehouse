import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

import { MuiThemeProvider } from '@material-ui/core/styles';

import getContext from '../lib/context';



const withLayout = (BaseComponent) => {
  class App extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.pageContext = this.props.pageContext || getContext();
    }

    componentDidMount() {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}>
          <CssBaseline />
          <div>
            <Header {...this.props}/>
            <BaseComponent {...this.props}/>
            <Footer {...this.props}/>
          </div>
        </MuiThemeProvider>
      )
    }
  }

  /*
   *
   * The getInitialProps() can be use to check if the BaseComponent
   * has initial data, and if it does, then pass that data to props
   * of the App component.
   *
  */
  App.propTypes = {
    pageContext: PropTypes.object,
  };

  App.defaultProps = {
    pageContext: null
  }

  App.getInitialProps = (ctx) => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(ctx);
    }

    return {};
  }

  return App;
}


export default withLayout;
