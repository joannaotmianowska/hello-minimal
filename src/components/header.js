import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.scss';

const Header = ({ siteTitle }) => (
  <header
    className="test"
  >
    <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
