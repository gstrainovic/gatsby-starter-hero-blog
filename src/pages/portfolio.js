import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import { ThemeContext } from "../layouts";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";

import Seo from "../components/Seo";
import Card from "antd/lib/card";
import "antd/lib/card/style/index.css";
import "./portfolio.css";
import "antd/dist/antd.less"; // Import Ant Design styles by less entry
import "../my-antd.less"; // variables to override above
const { Meta } = Card;

const ContactPage = props => {
  const {
    data: {
      site: {
        siteMetadata: { facebook }
      }
    }
  } = props;

  return (
    <React.Fragment>
      <ThemeContext.Consumer>
        {theme => (
          <Article theme={theme}>
            <header>
              <Headline title="Portfolio" theme={theme} />
            </header>
            <Card
              className="myCard"
              //theme={theme}
              hoverable
              style={{
                width: 240,
                borderRadius: 25
              }}
              cover={
                <img
                  style={{ borderRadius: "25px 25px 0 0" }}
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Article>
        )}
      </ThemeContext.Consumer>

      <Seo facebook={facebook} />
    </React.Fragment>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;

//eslint-disable-next-line no-undef
export const query = graphql`
  query PortfolioQuery {
    site {
      siteMetadata {
        facebook {
          appId
        }
      }
    }
  }
`;
