import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("core-js/fn/array/find");

import Article from "../components/Article";
import Search from "../components/Search";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";

import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo";
import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/index.css'

function onChange(checked)  {
//  const isLoggedIn = props.isLoggedIn;
  if (checked) {
    return
    <React.Fragment>
            <div className="icon">
                  <AlgoliaIcon />
             </div>
             <Search algolia={algolia} theme={theme} />
    </React.Fragment>
  }
  return null;
}

const SearchPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { algolia, facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <Switch defaultChecked onChange={onChange}/>
          </Article>)
        }
      </ThemeContext.Consumer>



      <Seo facebook={facebook} />

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
    </React.Fragment>
  );
};

SearchPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default SearchPage;

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
