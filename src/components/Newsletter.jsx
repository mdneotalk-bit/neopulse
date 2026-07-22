import { useState } from 'react'
import { Bell, Check, ArrowRight } from './Icons'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const submit = (e) => {
    e.preventDefault()
    // Front-end demo only — connect this to your email service (Mailchimp,
    // ConvertKit, Buttondown, etc.) to actually collect subscribers.
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!ok) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
  }

  return (
    <section className="newsletter section" id="newsletter">
      <div className="container">
        <div className="newsletter__panel reveal">
          <span className="newsletter__blob newsletter__blob--1" />
          <span className="newsletter__blob newsletter__blob--2" />

          <div className="newsletter__content">
            <span className="newsletter__icon">
              <Bell size={22} />
            </span>
            <h2 className="newsletter__title display">
              The weekly health digest
            </h2>
            <p className="newsletter__lede">
              One friendly email a week: the newest article, a health-news
              round-up, and a tip you can actually use. No spam, unsubscribe
              anytime.
            </p>

            {done ? (
              <div className="newsletter__done">
                <span className="newsletter__done-icon">
                  <Check size={20} />
                </span>
                <div>
                  <strong>You’re on the list!</strong>
                  <p>Check your inbox to confirm your subscription.</p>
                </div>
              </div>
            ) : (
              <form className="newsletter__form" onSubmit={submit} noValidate>
                <div className="newsletter__field">
                  <input
                    type="email"
                    inputMode="email"
                    placeholder="you@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                  />
                  <button type="submit" className="btn btn--dark">
                    Subscribe <ArrowRight size={16} className="btn__icon" />
                  </button>
                </div>
                {error && <span className="newsletter__error">{error}</span>}
                <span className="newsletter__note">
                  Join a growing community learning to understand their bodies.
                </span>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
