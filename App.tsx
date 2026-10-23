import { ArrowDown, ArrowRight, ArrowUp, ArrowUpRight, Mail } from 'lucide-react';
import './rose-orchid.css';

const roles = [
  {
    period: '2022 — NOW', company: 'Weave', title: 'VP of Product & Design',
    intro: 'Building the next chapter of a connected experience platform for healthcare and local businesses.',
    results: [
      { figure: '$116M → $204M', detail: 'ARR over two years' },
      { figure: '$2.5M', detail: 'AI product revenue in its first 12 months' },
      { figure: '~500K', detail: 'healthcare providers added to the addressable market' },
    ],
    note: 'Leading a product function of ~20; setting and evangelizing a 3+ year product vision.',
  },
  {
    period: '2021 — 2022', company: 'Via', title: 'Head of Product',
    intro: 'A focused year of finding the growth engine and building the team to keep it moving.',
    results: [
      { figure: '$3.5M → $12M', detail: 'ARR in 14 months' },
      { figure: '2×', detail: 'customers and revenue per customer' },
      { figure: '8', detail: 'product and design team built' },
    ],
  },
  {
    period: '2018 — 2021', company: 'SR Health', title: 'Product Leader',
    intro: 'Took a healthcare product from an empty page to a business customers could rely on.',
    results: [
      { figure: '100+', detail: 'customers onboarded in 15 months' },
      { figure: '$4.5M+', detail: 'ARR within the first year' },
      { figure: '0 → 1', detail: 'product built; team of 9 assembled' },
    ],
  },
];

const principles = [
  { line: 'Perfect is the enemy of good.', aside: 'Make the next useful thing real.' },
  { line: 'Less, but better.', aside: 'Focus is a product decision.' },
  { line: 'Outcomes over outputs.', aside: 'Measure what changed for people.' },
  { line: 'Missionaries, not mercenaries.', aside: 'Care about the problem you own.' },
];

function Label({ number, children }: { number: string; children: string }) {
  return <div className="signal-label"><span>{number}</span><span>{children}</span><i /></div>;
}

export default function App() {
  return (
    <div className="signal-page min-h-[100dvh]">
      <header className="signal-header">
        <a href="#top" className="signal-brand" aria-label="Cam Holt home" data-testid="link-home"><span>CH</span> CAM HOLT</a>
        <nav aria-label="Main navigation">
          <a href="#work" data-testid="link-work">Impact</a><a href="#principles" data-testid="link-principles">Principles</a><a href="#outside" data-testid="link-outside">Beyond work</a>
        </nav>
        <a className="signal-contact" href="mailto:camjamholt@gmail.com" data-testid="link-contact-top">CONTACT <ArrowUpRight size={14} /></a>
      </header>

      <main id="top">
        <section className="signal-hero">
          <div className="signal-hero-inner">
            <div className="signal-hero-copy">
              <div className="signal-eyebrow"><span /> UTAH / PRODUCT LEADERSHIP</div>
              <h1>Build the<br /><em>growth engine.</em></h1>
              <p>I’m Cam Holt — a product leader, entrepreneur, and lifelong builder. I turn big, messy opportunities into products people love and businesses that grow.</p>
              <div className="signal-hero-links">
                <a href="#work" data-testid="link-explore-work">VIEW THE OUTCOMES <ArrowDown size={14} /></a>
                <a href="https://www.linkedin.com/in/cameronjholt/" target="_blank" rel="noreferrer" data-testid="link-linkedin-hero">LINKEDIN <ArrowUpRight size={14} /></a>
              </div>
              <div className="signal-current"><span>NOW</span> VP of Product &amp; Design <b>@ Weave</b></div>
            </div>
            <figure className="signal-portrait">
              <img src="./cam-holt-portrait.jpg" alt="Cam Holt, product leader and entrepreneur" data-testid="img-cam-portrait" />
              <figcaption><span>CAM HOLT</span><span>PROVO, UTAH · 40°14' N</span></figcaption>
              <div className="signal-photo-index">01 <i /> PRODUCT / PEOPLE / POSSIBILITY</div>
            </figure>
          </div>
        </section>

        <section className="signal-proof" aria-label="Selected outcomes">
          <div className="signal-proof-head"><span>SELECTED OUTCOMES</span><b>Signal, not noise.</b></div>
          <div className="signal-kpi"><strong>$116M<span> → </span>$204M</strong><small>WEAVE ARR · TWO YEARS</small></div>
          <div className="signal-kpi"><strong>$2.5M</strong><small>AI PRODUCT REVENUE · FIRST 12 MONTHS</small></div>
          <div className="signal-kpi"><strong>100+</strong><small>HEALTHCARE CUSTOMERS · ZERO TO LAUNCH</small></div>
          <div className="signal-proof-end">PROOF<br />IN THE WORK</div>
        </section>

        <section id="work" className="signal-work signal-wrap">
          <div className="signal-work-head">
            <Label number="01">BUSINESS IMPACT</Label>
            <div><h2>Progress you<br />can <em>measure.</em></h2><p>Selected outcomes from building products, teams, and new paths to growth.</p></div>
          </div>

          <div className="signal-cases" aria-label="Overstock product outcomes">
            <div className="signal-case-heading"><span>OVERSTOCK / COMMERCE</span><span>PRODUCT DECISIONS, CUSTOMER RESULTS</span></div>
            <div className="signal-case"><span>01</span><strong>$100M+</strong><p>Additional revenue from back-order functionality.</p><ArrowUpRight size={16} /></div>
            <div className="signal-case"><span>02</span><strong>60–115 <small>bps</small></strong><p>Conversion improvement across product detail pages.</p><ArrowUpRight size={16} /></div>
            <div className="signal-case"><span>03</span><strong>−6%</strong><p>Furniture returns after introducing a fabric swatch program.</p><ArrowUpRight size={16} /></div>
            <div className="signal-case"><span>04</span><strong>$215</strong><p>Average order value for app shoppers, versus $180 overall.</p><ArrowUpRight size={16} /></div>
            <div className="signal-case"><span>05</span><strong>&gt;5%</strong><p>Of revenue came from apps on less than 2% of traffic.</p><ArrowUpRight size={16} /></div>
            <div className="signal-patent"><span>ALSO, A PATENT</span><a href="https://patents.google.com/patent/US10555139B1/en" target="_blank" rel="noreferrer" data-testid="link-patent">US10555139B1 <ArrowUpRight size={13} /></a><span>Banjo · 2018</span></div>
          </div>

          <div className="signal-career-head"><Label number="02">CAREER, BY THE NUMBERS</Label><p>Three chapters of turning opportunity into traction.</p></div>
          <div className="signal-role-list">
            {roles.map((role, index) => (
              <article className="signal-role" key={role.company} data-testid={`card-role-${role.company.toLowerCase().replaceAll(' ', '-')}`}>
                <div className="signal-role-rail"><span>0{index + 1}</span><time>{role.period}</time></div>
                <div className="signal-role-main">
                  <div className="signal-role-title"><h3>{role.company}</h3><span>{role.title}</span></div>
                  <p>{role.intro}</p>
                  <div className="signal-role-results">{role.results.map(result => <div key={result.figure}><strong>{result.figure}</strong><span>{result.detail}</span></div>)}</div>
                  {role.note && <div className="signal-role-note">{role.note}</div>}
                </div>
              </article>
            ))}
          </div>
          <div className="signal-earlier">
            <span>EARLIER CHAPTERS</span>
            <div><b>Overstock</b><small>Product leadership · e-commerce</small></div>
            <div><b>Health Catalyst / Medicity</b><small>Healthcare technology</small></div>
            <div><b>University of Utah</b><small>MBA · BS Marketing · BS Information Systems</small></div>
          </div>
        </section>

        <section id="principles" className="signal-principles">
          <div className="signal-wrap">
            <Label number="03">HOW I THINK</Label>
            <div className="signal-principle-layout">
              <div><h2>Clear principles.<br /><em>Better decisions.</em></h2><p>The work gets complicated. The compass shouldn’t.</p></div>
              <div className="signal-principle-list">
                {principles.map((item, i) => <div key={item.line}><span>0{i + 1}</span><strong>{item.line}</strong><small>{item.aside}</small></div>)}
              </div>
            </div>
          </div>
        </section>

        <section className="signal-ventures">
          <div className="signal-wrap signal-ventures-inner">
            <div><Label number="04">THE BUILDER IN ME</Label><h2>Beyond the<br />day job.</h2><p>Some ideas don’t fit in a roadmap. The fun part is finding out which ones deserve to become real.</p></div>
            <div className="signal-venture-list">
              <article><span>01 / BUILT · ACQUIRED</span><h3>FlightsFromHome</h3><p>A side project I co-founded with my wife. Later acquired.</p></article>
              <article><span>02 / CO-FOUNDED</span><h3>MUVER</h3><p>A company I co-founded outside of the day job.</p></article>
              <article><span>03 / IN THE WORKS</span><h3>Invoice factoring</h3><p>An AI-assisted product in progress. More soon.</p></article>
            </div>
          </div>
        </section>

        <section id="outside" className="signal-outside signal-wrap">
          <Label number="05">WHEN I’M NOT BUILDING</Label>
          <div className="signal-outside-grid">
            <h2>Life is the<br /><em>other half.</em></h2>
            <div><p>My best ideas usually show up away from the screen — outside, somewhere new, or halfway through a home renovation.</p><div className="signal-interests"><span>Family &amp; friends</span><span>Outdoors &amp; travel</span><span>Home projects</span><span>Making things</span></div></div>
            <div className="signal-education"><span>UTAH ROOT</span><strong>University<br />of Utah</strong><small>MBA · BS Marketing · BS Information Systems</small></div>
          </div>
        </section>

        <footer className="signal-footer">
          <div className="signal-wrap signal-footer-main">
            <div className="signal-footer-kicker"><span /> OPEN TO GOOD CONVERSATIONS</div>
            <div className="signal-footer-grid"><div><h2>Have a good<br /><em>problem to solve?</em></h2><p>I’m always up for a thoughtful conversation about products, teams, and what’s next.</p></div>
              <div className="signal-footer-actions">
                <a href="mailto:camjamholt@gmail.com" data-testid="link-email-footer"><Mail size={16} /> camjamholt@gmail.com <ArrowUpRight size={15} /></a>
                <a href="https://www.linkedin.com/in/cameronjholt/" target="_blank" rel="noreferrer" data-testid="link-linkedin-footer">Find me on LinkedIn <ArrowRight size={15} /></a>
                <a href="./cam-holt-resume.pdf" download="Cam-Holt-Resume.pdf" data-testid="link-resume-download">Download résumé <ArrowDown size={15} /></a>
              </div>
            </div>
          </div>
          <div className="signal-wrap signal-footer-bottom"><a href="#top" aria-label="Cam Holt home"><span>CH</span> CAM HOLT</a><span>MADE WITH CURIOSITY IN UTAH</span><a href="#top" data-testid="link-back-top">BACK TO TOP ↑</a></div>
        </footer>
      </main>
      <a href="#top" className="signal-top" aria-label="Back to top" data-testid="link-back-top-floating"><ArrowUp size={15} /></a>
    </div>
  );
}
