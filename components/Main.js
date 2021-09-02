import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/IMG_0355.jpg" alt="" /></span>
          <p>	And I believe in{' '}
							<strong>simple, clean designs and programs</strong>. Creative
							alternatives and interesting, eye catching, fun UI is my objective. The
							internet is a space where all walks of life can connect— from our
							couch to the other side of the world. Connections fuel the human
							experience, and I am here to <strong>bridge the gap</strong>{' '}
							between the digital and the concrete.</p>
          <p>	I'm consider myself a Jane of many trades, capable of accomplishing a wide breadth of tasks for my clients.{' '}
							Need someone to <strong>communicate with customers</strong> because you're busy running your business? Or maybe you need <strong>to update your digital platform?</strong> Perhaps you <strong>need writen content and copy</strong> for your website. Whatever it is, let's chat and get creative.</p>
          <p><strong>Let's  work together!</strong></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Development</h2>
          <span className="image main"><img src="/static/images/bikology.jpg" alt="" /></span>
          <p>My work varies in scope quite a bit. Currently I am working with a <strong>tech startup in the boutique mountain bike industry.</strong></p>
          <p><strong>Bikology</strong> is a team of dedicated bike experts who have a vision for the future of how the bike industry handles custom bike building and retail. Bikology provides an end-to-end service for cyclists to design, build, and purchase what they view as their ideal bicycle through an on-demand visual bike builder. The flagship product is an on-demand visual bike building software. This software demands a wide breadth of knowledge and willingness to learn— from trigonometry to bike part compatibility. Our team works together united under a shared love of epic mountain biking and single track trails.</p>
          <p>For Bikology, I am assigned tasks which I complete using a variety of technologies including <strong>AngularJS, MongoDB, Express, Node.js,</strong> and others using an <strong>Agile</strong> approach. Right now, I am <strong>building a Content Management System that is integrated in Bikology's existing platform</strong> for future User Generated Content.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Writing</h2>
          <p>I received a Bachelor's degree in English from the <strong>University of Vermont</strong> in 2015. As someone who has always appreciated the nuances of words, I find myself writing for fun often. Find my creative writing <a href="https://medium.com/@hannahtrask"><strong>Medium page here</strong></a> and check out the opinion pieces I have written for the Jackson Hole News and Guide <a href="https://www.jhnewsandguide.com/opinion/guest_shot/anger-bubbles-up-but-kindness-is-a-radical-act/article_880f4be1-f0dd-5044-a21c-84fe1cd5383f.html"><strong>here</strong></a>, <a href="https://www.jhnewsandguide.com/opinion/guest_shot/jackson-hole-restaurant-pro-i-am-a-server-not-a-servant/article_b45bc7a5-e3d7-5db4-9863-0f0caaa82b66.html"><strong>here</strong></a>, and <a href="https://www.jhnewsandguide.com/opinion/guest_shot/jackson-is-no-neverland-when-it-comes-to-covid/article_1c75725f-8a58-54f1-9fdf-d0e127527acf.html"><strong>here</strong>.</a></p>
          <p>As a seasoned writer, I have found that <strong>empathy</strong> is the key ingredient to creating content for the client. If you're looking for high quality work quickly, I'm your girl. As a lifelong reader and writer, I can competently create short blurbs to longer form essay-style text. My skillset includes but isn't limited to <strong>MLA, Chicago Style, AP Formats</strong>, <strong>social media posts</strong>, and <strong>event advertisements and descriptions</strong>.</p>
          <span className="image main"><img src="/static/images/annie-spratt-credit.jpg" alt="Photo courtesy of Annie Spratt on unsplash" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main