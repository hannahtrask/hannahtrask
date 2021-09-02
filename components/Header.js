import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faSnowflake from '@fortawesome/fontawesome-free-regular/faSnowflake'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faSnowflake} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hannah Catherine Trask</h1>
                <p>Simple, clean code. Creative alternatives.<br />Thoughtful and empathetic copywriting.<br />Charismatic and effective communication.<br />Bridging the gap between the digital and the concrete,<br />I am a whitewater raft guide turned professional web developer, writer, and professional assistant.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>["about"]</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>["dev"]</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>["words"]</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>["contact"]</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
