import { Link } from 'react-router-dom'
import { CHANNEL } from '../data/videos'
import { Pulse, YouTube, ArrowRight } from './Icons'
import SocialLinks from './SocialLinks'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__mark">
                <Pulse size={18} />
              </span>
              <span>
                Neo<span className="grad-cool">Pulse</span>
              </span>
            </Link>
            <p className="footer__tagline">{CHANNEL.tagline}</p>
            <SocialLinks variant="onDark" className="footer__socials" />
            <a className="btn footer__cta" href={CHANNEL.subscribeUrl} target="_blank" rel="noopener noreferrer">
              <YouTube size={17} /> Subscribe
            </a>
          </div>

          <div className="footer__cols">
            <div className="footer__col">
              <h4>Read</h4>
              <a href="/#articles">Articles</a>
              <a href="/#news">Health News</a>
              <a href="/#tips">Quick Tips</a>
            </div>
            <div className="footer__col">
              <h4>More</h4>
              <a href="/#about">About</a>
              <a href="/#newsletter">Newsletter</a>
              <a href={CHANNEL.url} target="_blank" rel="noopener noreferrer">
                YouTube channel
              </a>
            </div>
          </div>
        </div>

        <p className="footer__disclaimer">
          <strong>Health disclaimer.</strong> NeoPulse is for general
          education only and is not medical advice, diagnosis, or treatment.
          Always consult a qualified healthcare professional about your own
          health or before making changes based on anything you read here.
        </p>

        <div className="footer__bottom">
          <span>© {year} NeoPulse — from MD-Neo Talks. All rights reserved.</span>
          <a href="#top" className="footer__totop">
            Back to top <ArrowRight size={14} className="footer__totop-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
