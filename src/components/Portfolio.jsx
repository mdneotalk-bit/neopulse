import { SUMMARY, EXPERIENCE, EDUCATION, CLERKSHIPS, SKILLS, AWARDS } from '../data/resume'
import { Briefcase, GraduationCap, Award, Sparkle, Stethoscope, MapPin } from './Icons'
import './Portfolio.css'

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-head">
          <div className="section-head__text">
            <span className="eyebrow reveal">Portfolio</span>
            <h2 className="section-title reveal">
              Training, experience &amp; <span className="portfolio__hl">credentials</span>
            </h2>
            <p className="lede reveal">{SUMMARY}</p>
          </div>
        </div>

        <div className="portfolio__grid">
          {/* Main column — experience (+ clerkships when available) */}
          <div className="portfolio__main">
            <h3 className="portfolio__h reveal">
              <span className="portfolio__h-icon"><Briefcase size={18} /></span>
              Professional experience
            </h3>

            <ol className="pf-timeline">
              {EXPERIENCE.map((e) => (
                <li className="pf-exp reveal" key={e.role + e.period} style={{ '--accent': e.accent }}>
                  <span className="pf-exp__node" aria-hidden="true" />
                  <div className="pf-exp__top">
                    <h4 className="pf-exp__role">{e.role}</h4>
                    <span className="pf-exp__period">{e.period}</span>
                  </div>
                  <div className="pf-exp__meta">
                    <span className="pf-exp__org">{e.org}</span>
                    <span className="pf-exp__loc"><MapPin size={13} /> {e.location}</span>
                  </div>
                  <ul className="pf-exp__points">
                    {e.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            {CLERKSHIPS.length > 0 && (
              <>
                <h3 className="portfolio__h reveal">
                  <span className="portfolio__h-icon"><Stethoscope size={18} /></span>
                  Clinical clerkships
                </h3>
                <div className="pf-clerk-grid">
                  {CLERKSHIPS.map((c) => (
                    <div className="pf-clerk reveal" key={c.specialty + c.period}>
                      <h4 className="pf-clerk__spec">{c.specialty}</h4>
                      <div className="pf-clerk__hosp">{c.hospital}</div>
                      <div className="pf-clerk__meta">
                        <span><MapPin size={13} /> {c.location}</span>
                        <span>{c.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Side column — education, skills, awards */}
          <aside className="portfolio__side">
            <div className="pf-card reveal">
              <h3 className="pf-card__h">
                <span className="portfolio__h-icon"><GraduationCap size={18} /></span>
                Education
              </h3>
              <ul className="pf-edu">
                {EDUCATION.map((ed) => (
                  <li className="pf-edu__item" key={ed.degree + ed.period} style={{ '--accent': ed.accent }}>
                    <div className="pf-edu__top">
                      <strong className="pf-edu__degree">{ed.degree}</strong>
                      <span className="pf-edu__period">{ed.period}</span>
                    </div>
                    <span className="pf-edu__school">{ed.school}</span>
                    <span className="pf-edu__loc"><MapPin size={12} /> {ed.location}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pf-card reveal">
              <h3 className="pf-card__h">
                <span className="portfolio__h-icon"><Sparkle size={18} /></span>
                Skills
              </h3>
              <div className="pf-skills">
                {SKILLS.map((s) => (
                  <div className="pf-skill-group" key={s.group}>
                    <span className="pf-skill-group__label">{s.group}</span>
                    <div className="pf-skill-tags">
                      {s.items.map((it) => (
                        <span className="pf-skill-tag" key={it}>{it}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pf-card reveal">
              <h3 className="pf-card__h">
                <span className="portfolio__h-icon"><Award size={18} /></span>
                Awards
              </h3>
              <ul className="pf-awards">
                {AWARDS.map((a) => (
                  <li className="pf-award" key={a.title + a.year}>
                    <span className="pf-award__year">{a.year}</span>
                    <div className="pf-award__body">
                      <strong className="pf-award__title">{a.title}</strong>
                      {a.detail && <span className="pf-award__detail">{a.detail}</span>}
                      <span className="pf-award__org">{a.org}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
