import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; 2021 Hannah Catherine Trask, LLC</p>
        <p className="copyright">Background photo by <a href="https://www.ellenstryker.com/">Ellen Stryker Bischoff</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
