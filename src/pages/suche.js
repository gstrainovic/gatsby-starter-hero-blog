import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
require("core-js/fn/array/find");

import Article from "../components/Article";
import Search from "../components/Search";
import { ThemeContext } from "../layouts";
import Seo from "../components/Seo";
import AlgoliaIcon from "!svg-react-loader!../images/svg-icons/search-by-algolia.svg?name=AlgoliaLogo";
import Card from "antd/lib/card";
import Icon from "antd/lib/icon";
import Button from "antd/lib/button";
import "antd/lib/button/style/index.css";
import "antd/lib/card/style/index.css";
import "antd/lib/icon/style/index.css";

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

  newMethod() {
    return (
      <Button onClick={this.handleClick} type="primary" icon="search">
        Suche aktivieren
      </Button>
    );
  }
  render() {
    const { Meta } = Card;

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
                <div className="icon">
                  <AlgoliaIcon />
                </div>

                {this.state.isToggleOn ? (
                  <Card
                    style={{
                      //width: 300,
                      marginLeft: "auto",
                      marginRight: "auto"
                    }}
                    actions={[this.newMethod()]}
                  >
                    <Meta
                      avatar={<Icon type="info-circle" theme="outlined" />}
                      title="Datenschutz"
                      description="Diese Website realisiert die Suche nach Seiteninhalten über eine API von Algolia.
                      Suchanfragen werden mit sofortiger visueller Rückmeldung und Typo-Toleranz geliefert.
                      Dieser Dienst hat darum Zugriff auch auf die im Webbrowser und in der App eingegebenen Suchanfragen.
                      Dazu ist es notwendig, Ihre IP Adresse und Ihre Suchanfrage zu speichern.
                      Diese Informationen werden in der Regel an einen Server von Algolia in Europa oder den USA übertragen und dort gespeichert.
                      Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                      Die Nutzung der Algolia Suche erfolgt im Interesse einer guten Erreichbarkeit und leichten Auffindbarkeit von Texte in dieser Webseite.
                      Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                      Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Algolia: https://www.algolia.com/policies/privacy."
                    />
                  </Card>
                ) : (
                  <div>
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
