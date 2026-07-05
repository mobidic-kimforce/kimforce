import React, { useState, useEffect, useRef, Suspense, lazy, createContext, useContext } from 'react'
import { LANGS, T } from './i18n.js'
import './styles.css'
const HeroScene = lazy(()=>import('./three/Scene.jsx'))
const BrandScene = lazy(()=>import('./three/Brand.jsx'))

const Ctx = createContext(null)
const useT = ()=>useContext(Ctx)

function useReveal(){
  const ref=useRef()
  useEffect(()=>{
    const el=ref.current; if(!el) return
    const io=new IntersectionObserver(([e])=>{ if(e.isIntersecting){ el.classList.add('in'); io.disconnect() }},{threshold:0.14})
    io.observe(el); return ()=>io.disconnect()
  },[])
  return ref
}
function Reveal({children,className='',delay=0}){
  const ref=useReveal()
  return <div ref={ref} className={'rv '+className} style={{transitionDelay:delay+'ms'}}>{children}</div>
}

function Nav(){
  const {t,lang,setLang}=useT()
  const [sc,setSc]=useState(false)
  useEffect(()=>{ const h=()=>setSc(window.scrollY>40); window.addEventListener('scroll',h,{passive:true}); return ()=>window.removeEventListener('scroll',h) },[])
  const go=id=>{ const el=document.getElementById(id); if(el) el.scrollIntoView({behavior:'smooth'}) }
  return (<nav className={sc?'scrolled':''}>
    <div className="logo">KIM<span>FORCE</span></div>
    <div className="navlinks">
      <a onClick={()=>go('method')}>{t.nav.strategy}</a>
      <a onClick={()=>go('services')}>{t.nav.services}</a>
      <a onClick={()=>go('report')}>{t.nav.report}</a>
      <a onClick={()=>go('contact')}>{t.nav.contact}</a>
    </div>
    <div className="langs">
      {LANGS.map(l=><button key={l} className={l===lang?'on':''} onClick={()=>setLang(l)}>{l.toUpperCase()}</button>)}
    </div>
  </nav>)
}

function Hero({onPlan}){
  const {t}=useT()
  const go=id=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
  return (<header className="hero">
    <div className="hero-3d"><Suspense fallback={null}><HeroScene/></Suspense></div>
    <div className="hero-grid"/>
    <div className="hero-inner">
      <div className="tagpill">{t.hero.tag}</div>
      <h1>{t.hero.h1a}<br/><span className="gold">{t.hero.h1b}</span><br/>{t.hero.h1c}</h1>
      <p className="hero-sub">{t.hero.sub}</p>
      <div className="hero-cta">
        <button className="btn-gold" onClick={()=>go('contact')}>{t.hero.cta1}</button>
        <button className="btn-ghost" onClick={()=>go('method')}>{t.hero.cta2}</button>
      </div>
      <div className="hero-stats">
        <div className="hstat"><b>3%</b><span>{t.hero.s1}</span></div>
        <div className="hstat"><b>5 MKT</b><span>{t.hero.s2}</span></div>
        <div className="hstat"><b>ROAS 5x</b><span>{t.hero.s3}</span></div>
      </div>
    </div>
    <div className="scroll-hint">↓</div>
  </header>)
}

function Method(){
  const {t}=useT()
  return (<section id="method" className="section">
    <div className="si">
      <Reveal><div className="sec-tag">{t.method.tag}</div>
      <h2 className="sec-title">{t.method.title}</h2>
      <p className="sec-sub">{t.method.sub}</p></Reveal>
      <div className="method-grid">
        {t.method.steps.map((s,i)=><Reveal key={i} delay={i*120} className="tilt">
          <div className="method-card tiltable">
            <div className="method-num">0{i+1}</div>
            <div className="method-k">{s.k}</div>
            <h3>{s.t}</h3><p>{s.d}</p>
          </div></Reveal>)}
      </div>
    </div>
  </section>)
}

function Analyzer({onPlan}){
  const {t}=useT()
  const [s,setS]=useState('3000'),[r,setR]=useState('9000'),[c,setC]=useState('1200'),[v,setV]=useState('90')
  const nS=+s||0,nR=+r||0,nC=+c||0,nV=+v||0
  const roas=nS?nR/nS:0, cpa=nV?nS/nV:0, cpc=nC?nS/nC:0, cvr=nC?nV/nC*100:0
  const a=t.analyzer
  const verdict = roas>=4?{c:'#34d399',l:a.vScale,tip:a.tScale}:roas>=2?{c:'#C9A84C',l:a.vOpt,tip:a.tOpt}:{c:'#f87171',l:a.vFix,tip:a.tFix}
  const F=(lab,val,set)=>(<label className="ma-field"><span>{lab}</span><input type="number" value={val} onChange={e=>set(e.target.value)}/></label>)
  return (<div className="ma-card">
    <div className="ma-head"><div className="ma-title">{a.title}</div><div className="ma-sub">{a.sub}</div></div>
    <div className="ma-grid">{F(a.spend,s,setS)}{F(a.rev,r,setR)}{F(a.clicks,c,setC)}{F(a.conv,v,setV)}</div>
    <div className="ma-stats">
      <div className="ma-stat on"><b>{roas.toFixed(2)}x</b><span>{a.roas}</span></div>
      <div className="ma-stat"><b>${cpa.toFixed(2)}</b><span>{a.cpa}</span></div>
      <div className="ma-stat"><b>${cpc.toFixed(2)}</b><span>{a.cpc}</span></div>
      <div className="ma-stat"><b>{cvr.toFixed(1)}%</b><span>{a.cvr}</span></div>
    </div>
    <div className="ma-verdict" style={{borderColor:verdict.c,boxShadow:'0 0 24px '+verdict.c+'22'}}>
      <div style={{color:verdict.c,fontWeight:800}}>{verdict.l}</div><div className="ma-tip">{verdict.tip}</div>
    </div>
    <button className="btn-gold" onClick={()=>onPlan('Meta Ads Audit')}>{a.cta}</button>
  </div>)
}

function Services({onPlan}){
  const {t}=useT()
  return (<section id="services" className="section alt">
    <div className="si">
      <Reveal><div className="sec-tag">{t.gs.tag}</div><h2 className="sec-title">{t.gs.title}</h2><p className="sec-sub">{t.gs.sub}</p></Reveal>
      <Reveal className="analyzer-wrap"><Analyzer onPlan={onPlan}/></Reveal>
      <div className="gs-grid">
        {t.gs.cards.map((c,i)=><Reveal key={i} delay={i*90}>
          <div className="gs-card tiltable">
            <div className="gs-tag">{c.tag}</div>
            <h3>{c.t}</h3>
            <div className="gs-price">{c.price}</div>
            <div className="gs-psub">{c.sub}</div>
            <ul>{c.items.map((it,j)=><li key={j}>{it}</li>)}</ul>
            <button className="gs-cta" onClick={()=>onPlan(c.plan)}>{t.gs.cta}</button>
          </div></Reveal>)}
      </div>
    </div>
  </section>)
}

function Brand(){
  const {t}=useT()
  return (<section className="brand-band">
    <div className="brand-3d"><Suspense fallback={null}><BrandScene/></Suspense></div>
    <Reveal><div className="brand-copy">
      <div className="big3">3<span>%</span></div>
      <p>{t.hero.s1} · vs 15–30%</p>
    </div></Reveal>
  </section>)
}

function Report(){
  const {t}=useT()
  const [paid,setPaid]=useState(false)
  const r=t.report
  return (<section id="report" className="section">
    <div className="si report-wrap">
      <Reveal className="report-left">
        <div className="sec-tag">{r.tag}</div><h2 className="sec-title">{r.title}</h2><p className="sec-sub">{r.sub}</p>
        <div className="report-years">
          <span>2015–2018</span><span>2019–2022</span><span>2023–2026</span>
        </div>
      </Reveal>
      <Reveal delay={120} className="report-card">
        <div className="report-price">{r.price}</div>
        <div className="report-note">{r.note}</div>
        {!paid ? <>
          <button className="btn-gold wide" onClick={()=>setPaid(true)}>{r.pay}</button>
          <div className="report-soon">{r.soon}</div>
        </> : <div className="report-done">
          <div>{r.thanks}</div>
          <a className="btn-gold wide" href="kimforce_report_2026.pdf" target="_blank" rel="noopener">{r.open}</a>
        </div>}
      </Reveal>
    </div>
  </section>)
}

function Contact({plan,clearPlan}){
  const {t,lang}=useT()
  const [sent,setSent]=useState(false)
  const c=t.contact
  const submit=async e=>{
    e.preventDefault()
    const fd=new FormData(e.target)
    try{ await fetch('https://formspree.io/f/xwvzjnly',{method:'POST',body:fd,headers:{Accept:'application/json'}}); setSent(true) }
    catch(err){ setSent(true) }
  }
  return (<section id="contact" className="section alt">
    <div className="si contact-inner">
      <Reveal><h2 className="sec-title center">{c.title}</h2><p className="sec-sub center">{c.sub}</p></Reveal>
      {sent ? <div className="sent">✅ {c.submit.replace('→','')} ✓</div> :
      <Reveal><form className="cform" onSubmit={submit}>
        <input name="company" placeholder={c.company} required/>
        <input name="name" placeholder={c.name} required/>
        <input name="email" type="email" placeholder={c.email} required/>
        <input name="country" placeholder={c.country}/>
        <input name="budget" placeholder={c.budget}/>
        <input name="marketing_method" placeholder={c.method}/>
        <textarea name="details" placeholder={c.details} rows={4}/>
        {plan && <div className="plan-badge">{c.selected}<b>{plan}</b><button type="button" onClick={clearPlan}>✕</button><input type="hidden" name="selected_plan" value={plan}/></div>}
        <button className="btn-gold wide" type="submit">{c.submit}</button>
      </form></Reveal>}
    </div>
  </section>)
}

export default function App(){
  const [lang,setLang]=useState('ko')
  const [plan,setPlan]=useState(null)
  useEffect(()=>{ document.documentElement.lang=lang },[lang])
  const onPlan=p=>{ setPlan(p); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}) }
  const t=T[lang]
  return (<Ctx.Provider value={{t,lang,setLang}}>
    <Nav/>
    <Hero onPlan={onPlan}/>
    <Method/>
    <Services onPlan={onPlan}/>
    <Brand/>
    <Report/>
    <Contact plan={plan} clearPlan={()=>setPlan(null)}/>
    <footer className="foot"><span className="logo">KIM<span>FORCE</span></span><p>{t.footer}</p><p className="copy">© 2026 KIMFORCE · info@kimforce.co.kr</p></footer>
  </Ctx.Provider>)
}
