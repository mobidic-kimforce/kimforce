/* KIMFORCE app.js — premium interactions (vanilla) + React Meta Ads Analyzer (CDN) */
(function(){
  "use strict";

  /* ─────────── 1) Scroll reveal (new cards) ─────────── */
  function initReveal(){
    var els = document.querySelectorAll('.will-reveal');
    if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('revealed');}); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add('revealed'); io.unobserve(en.target); }
      });
    },{threshold:0.12});
    els.forEach(function(e){ io.observe(e); });
  }

  /* ─────────── 2) Count-up numbers ─────────── */
  function countUp(el){
    var raw = el.getAttribute('data-countup'); var target = parseFloat(raw);
    var suffix = el.getAttribute('data-suffix')||''; var dur = 1100; var start = null;
    function step(ts){
      if(!start) start = ts; var p = Math.min((ts-start)/dur,1);
      var ease = 1-Math.pow(1-p,3);
      var val = target*ease;
      el.textContent = (target%1===0? Math.round(val): val.toFixed(1)) + suffix;
      if(p<1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function initCountUp(){
    var els = document.querySelectorAll('[data-countup]');
    if(!('IntersectionObserver' in window)){ els.forEach(countUp); return; }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ countUp(en.target); io.unobserve(en.target); } });
    },{threshold:0.5});
    els.forEach(function(e){ io.observe(e); });
  }

  /* ─────────── 3) 3D tilt on cards ─────────── */
  function initTilt(){
    if(window.matchMedia && window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('.tiltable').forEach(function(card){
      card.addEventListener('mousemove', function(e){
        var r = card.getBoundingClientRect();
        var x = (e.clientX-r.left)/r.width - .5, y = (e.clientY-r.top)/r.height - .5;
        card.style.transform = 'perspective(800px) rotateX('+(-y*5)+'deg) rotateY('+(x*6)+'deg) translateY(-4px)';
      });
      card.addEventListener('mouseleave', function(){ card.style.transform=''; });
    });
  }

  /* ─────────── 4) Nav shadow on scroll ─────────── */
  function initNav(){
    var nav = document.querySelector('nav'); if(!nav) return;
    function on(){ if(window.scrollY>40) nav.classList.add('scrolled'); else nav.classList.remove('scrolled'); }
    window.addEventListener('scroll', on, {passive:true}); on();
  }

  /* ─────────── 5) React: Meta Ads Analyzer ─────────── */
  var L = {
    ko:{title:"메타광고 성과 분석기",sub:"숫자만 넣으면 3초 만에 진단 + 방향성",spend:"광고비 ($)",rev:"매출 ($)",clicks:"클릭 수",conv:"전환 수",roas:"ROAS",cpa:"전환당 비용",cpc:"클릭당 비용",cvr:"전환율",
      vScale:"지금 확장하세요 🚀",vOpt:"최적화 여지 있음 ⚙️",vFix:"타겟·소재 개선 필요 🔧",
      tScale:"ROAS가 우수합니다. 예산을 단계적으로 늘리고 유사 타겟(LAL)을 확장하세요.",
      tOpt:"수익은 나지만 낭비가 있습니다. 저성과 소재를 끄고 상위 소재에 예산을 몰아주세요.",
      tFix:"전환 대비 비용이 큽니다. 오디언스를 좁히고 소재 훅을 A/B 테스트하세요.",
      cta:"정밀 진단 받기 →",be:"손익분기 ROAS"},
    en:{title:"Meta Ads Analyzer",sub:"Drop in your numbers — instant diagnosis + direction",spend:"Ad spend ($)",rev:"Revenue ($)",clicks:"Clicks",conv:"Conversions",roas:"ROAS",cpa:"Cost / conv.",cpc:"Cost / click",cvr:"Conv. rate",
      vScale:"Scale it now 🚀",vOpt:"Room to optimize ⚙️",vFix:"Fix targeting & creative 🔧",
      tScale:"Strong ROAS. Raise budget in steps and expand lookalike audiences.",
      tOpt:"Profitable but leaky. Kill low performers and push budget to top creatives.",
      tFix:"Cost is high vs. conversions. Narrow the audience and A/B test creative hooks.",
      cta:"Get a full audit →",be:"Break-even ROAS"},
    ja:{title:"Meta広告アナライザー",sub:"数字を入れるだけで即診断+方向性",spend:"広告費 ($)",rev:"売上 ($)",clicks:"クリック数",conv:"CV数",roas:"ROAS",cpa:"CV単価",cpc:"クリック単価",cvr:"CVR",
      vScale:"今すぐ拡大 🚀",vOpt:"最適化の余地あり ⚙️",vFix:"ターゲット・素材の改善が必要 🔧",
      tScale:"ROASが優秀です。予算を段階的に増やし類似オーディエンスを拡張しましょう。",
      tOpt:"利益は出ていますが無駄あり。低성과素材を止め上位素材に予算を集中。",
      tFix:"CVに対しコストが高い。オーディエンスを絞り素材のフックをABテスト。",
      cta:"精密監査を受ける →",be:"損益分岐ROAS"},
    zh:{title:"Meta广告分析器",sub:"输入数字，3秒诊断+方向",spend:"广告费 ($)",rev:"营收 ($)",clicks:"点击数",conv:"转化数",roas:"ROAS",cpa:"每转化成本",cpc:"每点击成本",cvr:"转化率",
      vScale:"立即扩量 🚀",vOpt:"有优化空间 ⚙️",vFix:"需优化定向与素材 🔧",
      tScale:"ROAS优秀。逐步提高预算并扩展相似受众。",
      tOpt:"盈利但有浪费。关闭低效素材，把预算集中到优质素材。",
      tFix:"相对转化成本偏高。收窄受众并A/B测试素材开头。",
      cta:"获取精密审计 →",be:"盈亏平衡ROAS"}
  };
  function lang(){ var l=(document.documentElement.lang||'en'); return L[l]?l:'en'; }

  var analyzerRoot = null;
  function mountAnalyzer(){
    var root = document.getElementById('meta-analyzer-root');
    if(!root || !window.React || !window.ReactDOM) return;
    var h = React.createElement, useState = React.useState, useEffect = React.useEffect;
    function Field(p){
      return h('label',{className:'ma-field'},
        h('span',{className:'ma-flabel'},p.label),
        h('input',{type:'number',inputMode:'decimal',value:p.value,min:0,
          onChange:function(e){p.onChange(e.target.value);},className:'ma-input',placeholder:'0'}));
    }
    function Stat(p){ return h('div',{className:'ma-stat'+(p.accent?' ma-stat-accent':'')},
      h('div',{className:'ma-stat-val'},p.val), h('div',{className:'ma-stat-key'},p.k)); }
    function App(){
      var lv = useState(0);
      useEffect(function(){
        function on(){ lv[1](function(x){return x+1;}); }
        window.addEventListener('kf-lang', on);
        return function(){ window.removeEventListener('kf-lang', on); };
      },[]);
      var s = useState('3000'), spend=s[0], setSpend=s[1];
      var r = useState('9000'), rev=r[0], setRev=r[1];
      var c = useState('1200'), clicks=c[0], setClicks=c[1];
      var v = useState('90'), conv=v[0], setConv=v[1];
      var t = L[lang()];
      var nSpend=parseFloat(spend)||0,nRev=parseFloat(rev)||0,nClicks=parseFloat(clicks)||0,nConv=parseFloat(conv)||0;
      var roas = nSpend? nRev/nSpend : 0;
      var cpa = nConv? nSpend/nConv : 0;
      var cpc = nClicks? nSpend/nClicks : 0;
      var cvr = nClicks? (nConv/nClicks*100) : 0;
      var verdict = roas>=4? {k:'scale',c:'#34d399',label:t.vScale,tip:t.tScale}
                  : roas>=2? {k:'opt',c:'#C9A84C',label:t.vOpt,tip:t.tOpt}
                  : {k:'fix',c:'#f87171',label:t.vFix,tip:t.tFix};
      return h('div',{className:'ma-card'},
        h('div',{className:'ma-head'}, h('div',{className:'ma-title'},t.title), h('div',{className:'ma-sub'},t.sub)),
        h('div',{className:'ma-grid'},
          h(Field,{label:t.spend,value:spend,onChange:setSpend}),
          h(Field,{label:t.rev,value:rev,onChange:setRev}),
          h(Field,{label:t.clicks,value:clicks,onChange:setClicks}),
          h(Field,{label:t.conv,value:conv,onChange:setConv})),
        h('div',{className:'ma-stats'},
          h(Stat,{k:t.roas,val:(roas).toFixed(2)+'x',accent:true}),
          h(Stat,{k:t.cpa,val:'$'+cpa.toFixed(2)}),
          h(Stat,{k:t.cpc,val:'$'+cpc.toFixed(2)}),
          h(Stat,{k:t.cvr,val:cvr.toFixed(1)+'%'})),
        h('div',{className:'ma-verdict',style:{borderColor:verdict.c,boxShadow:'0 0 24px '+verdict.c+'22'}},
          h('div',{className:'ma-verdict-label',style:{color:verdict.c}},verdict.label),
          h('div',{className:'ma-verdict-tip'},verdict.tip)),
        h('a',{href:'#contact',className:'ma-cta',
          onClick:function(){ if(window.selectPlan) window.selectPlan('Meta Ads Audit'); }},t.cta));
    }
    if(!analyzerRoot) analyzerRoot = ReactDOM.createRoot(root);
    analyzerRoot.render(h(App));
  }

  function boot(){ initReveal(); initCountUp(); initTilt(); initNav(); mountAnalyzer(); }
  if(document.readyState!=='loading') boot(); else document.addEventListener('DOMContentLoaded', boot);
  // re-mount analyzer labels on language change
  window.KF_onLangChange = function(){ if(!analyzerRoot) mountAnalyzer(); window.dispatchEvent(new Event('kf-lang')); };
})();
