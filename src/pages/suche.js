import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("core-js/fn/array/find");

import Article from "../components/Article";
import Search from "../components/Search";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo";
import Switch from "antd/lib/switch";
import Alert from "antd/lib/alert";
import "antd/lib/switch/style/index.css";
import "antd/lib/alert/style/index.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata: { algolia, facebook }
        }
      }
    } = this.props;

    return (
      <React.Fragment>
        <ThemeContext.Consumer>
          {theme => (
            <Article theme={theme}>
              <div>
                <Switch onChange={this.handleClick} />

                {this.state.isToggleOn ? (
                  <Alert message="Warning" type="warning" showIcon />
                ) : (
                  <div>
                    <div className="icon">
                      <AlgoliaIcon />
                    </div>
                    <Search algolia={algolia} theme={theme} />
                  </div>
                )}

                {/* --- STYLES --- */}
                <style jsx>{`
                  .icon {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 20px;
                  }
                  .icon :global(svg) {
                    height: 30px;
                  }
                `}</style>
              </div>
            </Article>
          )}
        </ThemeContext.Consumer>

        <Seo facebook={facebook} />
      </React.Fragment>
    );
  }
}

Toggle.propTypes = {
  data: PropTypes.object.isRequired
};

export default Toggle;

//eslint-disable-next-line no-undef
export const query = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        algolia {
          appId
          searchOnlyApiKey
          indexName
        }
        facebook {
          appId
        }
      }
    }
  }
`;
