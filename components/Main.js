import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import fetch from 'isomorphic-unfetch';

class Main extends React.Component {
  constructor() {
    super();


    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false
    }
  }
    handleSubmit = (e) => {
      e.preventDefault();

      let data = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }

      console.log('data: ', data);
      
      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(data)
      }).then((res)=> {
        console.log('Email received. Processing...')
        if(res.status===200) {
          alert('Email sent successfully!')
          this.setState({
                          submitted: true, 
                          name: '', 
                          email: '', 
                          message: ''
                        })
        } else {
          alert('Please try again!')
        }
      })
    }

    

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/IMG_0355.jpg" alt="" /></span>
          <p>	I believe in{' '}
							<strong>simple, clean designs and programs</strong>. Creative
							alternatives and interesting, eye catching, fun user interfaces are my objective. The
							internet is a space where all walks of life can connect— from our
							couch to the other side of the world. Connections fuel the human
							experience, and I am here to <strong>bridge the gap</strong>{' '}
							between the digital and the concrete.</p>
          <p>	I'm consider myself a Jane of many trades, capable of accomplishing a wide breadth of tasks for my clients.{' '}
							Need someone to <strong>interface with customers</strong> and <strong>manage communications</strong> because you're busy running your business? Or maybe you need <strong>to update your digital platform</strong>? Perhaps you <strong>need written content and copy</strong> for your website. Whatever it is, let's chat and get creative.</p>
          <p><strong>Let's work together!</strong></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Development</h2>
          <span className="image main"><img src="/static/images/vert-solutions.png" alt="" /></span>
          <p>My work varies in scope quite a bit. Currently I am working with an <strong>enterprise software company specializing in booking and guest management for ski resorts.</strong></p>
          <p><strong>Vert Solutions</strong> is a team of dedicated ski resort experts who have a vision for the future of how the ski industry handles booking, scheduling, and guest management. Vert Solutions works with clients year-round to <strong>design, build, and implement</strong> Vert Solutions software. Our team works together united under a shared love of the winter sports industry. We develop within the <strong>agile</strong> framework and use Trello, Microsoft Teams, and Slack for team coordination.</p>
          <p>As the sole developer for Vert Solutions, I manage and implement bug fixes and code updates for upwards of five major ski resorts including Aspen Snowmass and Big Sky.</p>
          <p>Not only do I write code, I also do a lot of client-facing work. I stay in regular contact with clients, and often travel to our various client's locations to attend conferences and conduct training sessions on our software. Right now, I am <strong>integrating our platform for one of our new clients</strong>.</p>
          <p>Visit this client's website <a href="https://www.vertsolutions.com/" target="_blank"><strong>here</strong></a>.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Writing</h2>
          <p>I received a Bachelor's degree in English from the <strong>University of Vermont</strong> in 2015 and am currently a freelance writer for the Jackson Hole News & Guide.<br /><br />As someone who has always appreciated the nuances of words, I find myself writing for fun often. Find my creative writing <a href="https://medium.com/@hannahtrask"><strong>Medium page here</strong></a> and check out a couple opinion pieces I have written for the Jackson Hole News and Guide <a href="https://www.jhnewsandguide.com/opinion/guest_shot/anger-bubbles-up-but-kindness-is-a-radical-act/article_880f4be1-f0dd-5044-a21c-84fe1cd5383f.html" target="_blank"><strong>here</strong></a>, <a href="https://www.jhnewsandguide.com/opinion/guest_shot/jackson-hole-restaurant-pro-i-am-a-server-not-a-servant/article_b45bc7a5-e3d7-5db4-9863-0f0caaa82b66.html" target="_blank"><strong>here</strong></a>. Also checkout this article I wrote for the Arts & Entertainment section <a href="https://www.jhnewsandguide.com/scene/music/local/cowboy-gets-u-foric-for-a-week/article_3291c375-38a3-5bba-b0ef-366cc285ef11.html" target="_blank"><strong>here</strong>.</a></p>
          <p>As a seasoned writer, I have found that <strong>empathy</strong> is the key ingredient to creating content for the client. If you're looking for high quality work quickly, I'm your girl. As a lifelong reader and writer, I can competently create short blurbs and longer form essay-style text. My skillset includes but isn't limited to <strong>MLA, Chicago Style, AP Formats</strong>, <strong>social media posts</strong>, and <strong>event advertisements and descriptions</strong>.</p>
          <span className="image main"><img src="/static/images/annie-spratt-credit.jpg" alt="Photo courtesy of Annie Spratt on unsplash" /></span>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2>Contact</h2>
          <p>Catch me on any of these socials or shoot me an email at <strong>hello@hannahtrask.com!</strong></p>
          {/* <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={(e)=>{this.setState({ name: e.target.value}, ()=> console.log(this.state.name))}} />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={(e)=>{this.setState({ email: e.target.value}, console.log(this.state.email))}} />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" onChange={(e)=>{this.setState({ message: e.target.value}, ()=> console.log(this.state.message))}}></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" onClick={this.handleSubmit} /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form> */}
          <ul className="icons">
            <li><a href="#https://www.linkedin.com/in/hannahtrask" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
            <li><a href="https://www.facebook.com/hannah123banana/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://github.com/hannahtrask" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
            <li>
              <a href="https://www.instagram.com/hannah_____catherine/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
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