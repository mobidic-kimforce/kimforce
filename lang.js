// KIMFORCE Language Switcher
// Separated from index.html for robustness — edit this file to update translations

const IMGS = {
  ko:{
    'img-hero-concept':'img1_hero_concept.png',
    'img-hero-map':'img8_map.png',
    'img-kfirst':'img9_kfirst_method.png',
    'img-inbound':'img4_inbound_tourism.png',
    'img-japan':'img6_japan_market.png',
    'img-china':'img2_china_market.png',
    'img-3percent':'img3_3percent.png',
    'img-dashboard':'img5_dashboard.png',
    'img-uae':'img_uae_market.png',
    'img-us':'img_us_market.png'
  },
  en:{
    'img-hero-concept':'img1_hero_concept.png',
    'img-hero-map':'img8_map.png',
    'img-kfirst':'img9_kfirst_method.png',
    'img-inbound':'img4_inbound_tourism.png',
    'img-japan':'img6_japan_market.png',
    'img-china':'img2_china_market.png',
    'img-3percent':'img3_3percent.png',
    'img-dashboard':'img5_dashboard.png',
    'img-uae':'img_uae_market.png',
    'img-us':'img_us_market.png'
  },
  ja:{
    'img-hero-concept':'img1_hero_concept.png',
    'img-hero-map':'img8_map.png',
    'img-kfirst':'img9_kfirst_method.png',
    'img-inbound':'img4_inbound_tourism.png',
    'img-japan':'img6_japan_market.png',
    'img-china':'img2_china_market.png',
    'img-3percent':'img3_3percent.png',
    'img-dashboard':'img5_dashboard.png',
    'img-uae':'img_uae_market.png',
    'img-us':'img_us_market.png'
  },
  zh:{
    'img-hero-concept':'img1_hero_concept.png',
    'img-hero-map':'img8_map.png',
    'img-kfirst':'img9_kfirst_method.png',
    'img-inbound':'img4_inbound_tourism.png',
    'img-japan':'img6_japan_market.png',
    'img-china':'img2_china_market.png',
    'img-3percent':'img3_3percent.png',
    'img-dashboard':'img5_dashboard.png',
    'img-uae':'img_uae_market.png',
    'img-us':'img_us_market.png'
  }
};

const T = {
  ko:{
    badge:"K-FIRST MARKETING AGENCY",
    h1:`한국에서 <span class="gold">검증된</span><br>바이럴 공식을<br><span class="hl">당신 시장에 적용</span>합니다`,
    "hero-p":`경쟁사가 알아채기 전에 선점하세요.<br>광고 집행비의 <strong>3%</strong>만으로.`,
    btn1:"무료 상담 신청 →",btn2:"K-First 방법론 보기",
    fl1:"광고비 대비 수수료",fl2:"KR · JP · CN · UAE",fl3:"검증된 콘텐츠",
    nav1:"전략",nav2:"서비스",nav3:"마켓",nav4:"상담",nav5:"리포트",
    st1:"광고비 대비 수수료",st2:"한국 선행 검증",st3:"세계 시장 공략",st4:"언어 대응",
    "paradigm-headline":"새로운 마케팅 패러다임",
    "paradigm-sub":"한국에서 <span class='acc'>3개월의 검증기간</span>을 거친 뒤,<br>일본 · 중국 · 두바이 · 아메리카 — <span class='acc'>전 세계로 동시 확산</span>됩니다",
    "pm-sub":"K-Trend 진원지","pm-verify":"3개월<br>검증 완료",
    "pm-jp":"Twitter/X · LINE","pm-cn":"小红书 · 抖音","pm-uae":"Instagram · TikTok","pm-us":"Meta · TikTok",
    "paradigm-footer":"전 세계 동시 확산 · 광고비의 3% · 검증된 K-First™ 공식",
    vtitle:"지금 한국에서 통하는<br>온라인 마케팅 기법",vsub:"온라인 마케팅으로 먼저 검증하고, 확인된 공식만 세계 시장에 적용합니다.",
    vc1h:"플레이스 SEO 최적화",vc1p:"네이버 플레이스·구글 맵 키워드 세팅, 리뷰 관리, 사진 최적화로 로컬 검색 상위 노출.",vc1r:"검색 상위 노출 → 방문객 3~5배",
    vc2h:"검색 SEO · 블로그 마케팅",vc2p:"네이버 블로그·카페·구글 SEO 통합 운영. 구매 의도 키워드 공략으로 자연 트래픽 확보.",vc2r:"자연 유입 10배 → 광고비 절감",
    vc3h:"커뮤니티 바이럴 마케팅",vc3p:"네이버 카페·커뮤니티 자연 입소문 유도. 광고처럼 안 보이는 콘텐츠로 신뢰 기반 확산.",vc3r:"오가닉 도달 5~10배 증가",
    vc4h:"나노 인플루언서 시딩",vc4p:"팔로워 1천~1만 인플루언서 100명 동시 발행. 알고리즘이 급상승 트렌드로 감지.",vc4r:"24시간 내 트렌딩 → 자연 확산 10배",
    vc5h:"CPC 클릭당 광고 운영",vc5p:"네이버 검색광고·구글 Ads·메타·TikTok 광고 통합 운영. 클릭당 비용 최적화.",vc5r:"CTR 최적화 → 동일 예산 클릭 2~3배",
    vc6h:"CPA 전환 기반 퍼포먼스",vc6p:"구매·신청·설치 등 실제 전환 기준 성과형 광고. 낭비 없는 광고비 운용.",vc6r:"ROAS 3~5배 → 광고비 대비 최고 효율",
    vc7h:"숏폼 콘텐츠 바이럴",vc7p:"TikTok·인스타 릴스·유튜브 쇼츠 바이럴 콘텐츠 제작. 검증된 콘텐츠만 증폭.",vc7r:"영상 바이럴 → 팔로워 폭발적 증가",
    vc8h:"리뷰 · 평판 관리",vc8p:"네이버 영수증 리뷰·구글 리뷰·플레이스 별점 관리. 실구매자 리뷰 최적화로 전환율 향상.",vc8r:"리뷰 신뢰도 → 전환율 2~3배 향상",
    stag1:"K-FIRST™ METHOD",stitle1:"한국이 검증하면, 우리가 먼저 씁니다",
    ssub1:"한국은 아시아 마케팅 트렌드의 진원지. 일본은 2~3개월, 중국은 3~6개월 뒤 동일한 트렌드가 도달합니다.",
    pt1:"SCAN",pt2:"TRANSLATE",pt3:"AMPLIFY",
    ph1:"한국 바이럴 모니터링",ph2:"현지 문화로 재해석",ph3:"오가닉 → 광고로 증폭",
    pp1:"매주 한국에서 터지는 마케팅 공식을 추적합니다. 나노 인플루언서 시딩, 챌린지 포맷, 투명성 마케팅 등.",
    pp2:"단순 번역이 아닙니다. 일본 Twitter/X 감성, 중국 小红书 문화로 재해석해 현지인이 자연스럽게 반응하게 만듭니다.",
    pp3:"나노 인플루언서 시딩으로 오가닉 반응 먼저 확인. 검증된 콘텐츠만 광고비로 증폭. 집행비의 3%만.",
    stag2:"SERVICES",stitle2:"온라인 먼저, 그 다음 세계로",ssub2:"검증된 온라인 마케팅으로 기반을 다지고, 전 세계 시장으로 확산합니다.",
    sv1h:"SEO · 플레이스 · 바이럴",sv1p:"검색 SEO, 네이버/구글 플레이스 최적화, 커뮤니티 바이럴까지. 광고비 없이 자연 유입을 만드는 기반을 구축합니다.",
    sv2h:"CPC · CPA 퍼포먼스 광고",sv2p:"네이버·구글·메타·TikTok 광고 통합 운영. 오가닉으로 검증된 콘텐츠만 CPC/CPA로 증폭.",
    sv3h:"글로벌 시장 확산",sv3p:"한국에서 검증된 온라인 마케팅 공식을 일본·중국·두바이·아메리카에 현지화 적용. 현지 대행사 20~30% 대비 3%.",
    stag3:"TARGET MARKETS",stitle3:"공략 시장",ssub3:"한국이 만든 트렌드가 흐르는 곳.",
    jptitle:"일본 시장",jpdesc:"세계 최대 Twitter/X 시장. K뷰티·K푸드에 대한 관심이 정점. 현지 에이전시 수수료 20~30%.",
    jp1:"· Twitter/X 바이럴 — 한국 커뮤니티 공식 이식",jp2:"· 나노 인플루언서 시딩 — 100명 동시 발행",jp3:"· 서울 뷰티·미식 투어 콘텐츠 채널 구축",jp4:"· LINE 마케팅 + CRM 자동화",
    zhtitle:"중국 시장",zhdesc:"小红书는 K뷰티의 성지. 种草 씨딩 문화는 한국과 동일. 의료관광 수요 폭발적.",
    zh1:"· 小红书 KOC 시딩 — 200명 동시 배포",zh2:"· 抖音 챌린지 — 한국 검증 포맷 이식",zh3:"· 한국 성형·피부과 중국 환자 유치",zh4:"· 위챗 CRM + 라이브커머스 연계",
    uaetitle:"중동 · UAE 시장",uaedesc:"두바이는 K뷰티·K컬처 급부상 중. 고소득 소비자층 + SNS 침투율 세계 최고. 아시아 트렌드에 가장 민감한 신흥 시장.",
    uae1:"· Instagram·TikTok 나노 인플루언서 시딩",uae2:"· 두바이몰 K-뷰티 팝업 + 인플루언서 연계",uae3:"· 한국 프리미엄 뷰티·의료 프리미엄 포지셔닝",uae4:"· 아랍어 현지화 콘텐츠 + CRM 자동화",
    ustitle:"미국 시장",usdesc:"K-뷰티·K-콘텐츠의 최대 성장 시장. Meta·TikTok·Instagram 통합 퍼포먼스. 한국 검증 공식으로 압도적 가성비.",
    us1:"· Meta·TikTok 나노 인플루언서 시딩",us2:"· Amazon·Sephora·Ulta 채널 마케팅",us3:"· TikTok Shop + Instagram Shopping 연동",us4:"· 퍼포먼스 광고 — ROAS 4.87x 실증",
    stag4:"WHY KIMFORCE",stitle4:"왜 3%인가",ssub4:"AI 기반 자동화와 한국 검증 공식으로 비용 구조를 혁신했습니다.",
    ch1:"KIMFORCE",ch2:"일반 대행사",
    cr1a:"수수료율",cr2a:"월 1,000만 집행 시",cr3a:"방법론",cr4a:"계약",cr5a:"언어",
    cr1b:"수수료율",cr2b:"월 1,000만 집행 시",cr3b:"방법론",cr4b:"계약",cr5b:"언어",
    cr3av:"K-First™",cr4av:"월 단위",cr3bv:"일반적 접근",cr4bv:"3~6개월 약정",cr5bv:"단일 언어",
    dashtitle:"실시간 성과 대시보드",dashsub:"광고비의 3%만으로 일반 대행사 대비 최대 10배의 비용 효율을 실현합니다.",
    "eff-sc-label":"월 광고 예산 1,000만원 시나리오",
    "eff-chart-title":"채널별 예상 ROAS (검증 콘텐츠 기준)",
    "eff-badge2":"일반 대행사","eff-fee1":"수수료","eff-fee2":"수수료",
    "eff-net1":"순 집행","eff-net2":"순 집행","eff-pct1":"집행률","eff-pct2":"집행률",
    effm1:"검증 콘텐츠 ROAS",effm1s:"오가닉 검증 후 광고 집행",
    effm2:"수수료 절감",effm2s:"3% vs 업계 평균 25%",
    effm3:"검증 전 광고비",effm3s:"실패 없는 퍼포먼스 보장",
    effm4:"최소 계약 단위",effm4s:"리스크 없는 유연한 계약",
    "paradigm-headline":"새로운 마케팅 패러다임",
    "paradigm-sub":"한국에서 <span class='acc'>3개월의 검증기간</span>을 거친 뒤,<br>일본 · 중국 · 두바이 · 아메리카 — <span class='acc'>전 세계로 동시 확산</span>됩니다",
    "paradigm-footer":"전 세계 동시 확산 · 광고비의 3% · 검증된 K-First™ 공식",
    "pm-sub":"K-Trend 진원지","pm-verify":"3개월<br>검증 완료",
    nav2:"서비스",nav3:"마켓",nav4:"상담",
    "dir-tag":"마케팅 방향성","dir-title":"우리가 마케팅을 바라보는 방식",
    "dir-sub":"광고비를 태우는 게 아니라, 신뢰를 먼저 쌓습니다. 검증된 것만 증폭합니다.",
    "dir-s1":"STEP 1","dir-h1":"오가닉 퍼스트",
    "dir-p1":"모든 캠페인은 유료 광고 집행 전에 유기적 반응을 먼저 검증합니다. 나노 인플루언서 시딩, 커뮤니티 입소문, 콘텐츠 A/B 테스트로 시장의 실제 반응을 확인한 후 광고비를 투입합니다.",
    "dir-r1":"→ 검증된 콘텐츠만 광고로 증폭 — ROAS 3~5배",
    "dir-s2":"STEP 2","dir-h2":"플랫폼 크로스 증폭",
    "dir-p2":"하나의 채널에 집중하지 않습니다. 검증된 콘텐츠를 타겟 시장의 주요 플랫폼 전체에 동시 배포합니다. 각 플랫폼의 알고리즘 특성을 활용해 오가닉 도달을 극대화합니다.",
    "dir-r2":"→ 단일 채널 대비 도달 범위 3~8배 확장",
    "dir-s3":"STEP 3","dir-h3":"커뮤니티 신뢰 구축",
    "dir-p3":"광고처럼 보이는 콘텐츠는 스크롤됩니다. 실제 사용자의 목소리, 성분 투명성, 비포·애프터 스토리 등 신뢰 기반 콘텐츠가 전환율을 만듭니다.",
    "dir-r3":"→ 오가닉 전환율 일반 광고 대비 2~4배",
    "dir-s4":"STEP 4","dir-h4":"데이터 기반 반복 최적화",
    "dir-p4":"주간 단위로 성과를 추적하고, 반응이 없는 콘텐츠는 즉시 중단합니다. 잘 되는 것만 남기고 증폭하는 린(Lean) 방식으로 광고비 낭비를 최소화합니다.",
    "dir-r4":"→ 주간 최적화로 광고 효율 지속 개선",
    "dir-phil":"먼저 신뢰를 얻고, 그 다음 팔아라. 광고는 마지막 수단이다.",
    "sv2-tag4":"네이버 SA",
    ctatitle:`<span>무료 상담</span>을 받으세요`,ctasub:"먼저 현재 마케팅에서 무엇이 문제인지 짚어드립니다. 비용 없이.",
    fi1:"회사명",fi2:"담당자",fi3:"EMAIL",fi4:"국가",fm0:"마케팅 방법",fi6:"월 광고예산 (각국의 화폐단위로 직접입력)",fi7:"자세한 요청사항 (1000자 이내)",
    submitbtn:"상담 신청하기 →",
    "report-badge":"프리미엄 리포트","report-title":"한국 마케팅 트렌드 리포트<br>2015 – 2026",
    "report-sub":"지난 11년간 한국 디지털 마케팅 시장의 진화를 분석한 심층 리포트. 실제 캠페인 수치, 플랫폼별 전환율, 연도별 ROI 기댓값까지.",
    rf1:"연도별 마케팅 트렌드 타임라인 (2015–2026)",rf2:"한국 검증 캠페인 성공 수치",rf3:"온라인 마케팅 채널별 ROI 기댓값",rf4:"2026 최신 마케팅 방법론",rf5:"글로벌 에이전시와의 비용 구조 비교",rf6:"일본·중국·UAE·미국 시장별 K-마케팅 적용 가이드",
    "rp-label":"1회 구매","rp-note":"USD · 즉시 다운로드 / 이메일 발송","report-buy-btn":"지금 구매하기 →",
    "rp-includes":"<span>구매 후 즉시 이메일로 발송</span><span>PDF 형식 (한국어 / 영어)</span><span>문서 수령 후 환불 불가</span><span>2026년 최신 데이터 기준</span>",
    "rpv1-kw":"모바일 원년 & 인플루언서 태동","rpv1-desc":"SNS 광고 모바일 역전, 네이버 C-Rank 알고리즘, 인플루언서 마케팅 ROI 첫 데이터",
    "rpv2-kw":"코로나 & 라이브커머스 폭발","rpv2-desc":"비대면 소비 혁명, 라이브커머스 400억→6조원, 숏폼 전성시대 수치 분석",
    "rpv3-kw":"AI 마케팅 & 초개인화","rpv3-desc":"생성형 AI 크리에이티브, 제로클릭 시대 GEO 전략, 2026 트렌드 코리아 핵심 키워드"
  },
  en:{
    badge:"K-FIRST MARKETING AGENCY",
    h1:`Korea's <span class="gold">proven</span><br>viral playbook.<br><span class="hl">Applied to your market.</span>`,
    "hero-p":`Get ahead before your competitors notice.<br><strong>Only 3%</strong> of your ad spend.`,
    btn1:"Get Free Consultation →",btn2:"See K-First Method",
    fl1:"Fee of ad spend",fl2:"KR · JP · CN · UAE",fl3:"Validated content",
    nav1:"Strategy",nav2:"Services",nav3:"Markets",nav4:"Contact",nav5:"Report",
    st1:"Fee of ad spend",st2:"Months ahead in Korea",st3:"Target markets",st4:"Languages",
    vtitle:"What's Actually Going Viral in Korea Right Now",vsub:"These exact methods — deployed in your market. 3% of ad spend.",
    vc1h:"Nano-Influencer Mass Seeding",vc1p:"100 nano-influencers (1K-10K followers) seeded simultaneously. Algorithm flags as trending. Sell-out results.",vc1r:"Result: Sell-out → ₩170B annual revenue",
    vc2h:"Real Customer Before/After",vc2p:"Real customers, not celebrities. No ad feel = shared freely. Explosive results for clinics and beauty brands.",vc2r:"Result: 5-10x organic reach vs paid ads",
    vc3h:"Radical Ingredient Transparency",vc3p:"'Nothing to hide' positioning. Show every ingredient. Build trust. Now the K-beauty standard.",vc3r:"Result: 30-50% repeat purchase rate",
    vc4h:"Challenge → Organic → Paid Amplification",vc4p:"Test virality organically first. Only amplify what works. Zero wasted spend on unproven content.",vc4r:"Result: 3-5x ROAS vs cold ads",
    vc5h:"Pop-up Store + SNS Viral Loop",vc5p:"Design for selfies → auto-posts → algorithm spike → media coverage. The Seongsu-dong formula.",vc5r:"Result: Media coverage + 10x followers",
    vc6h:"Community-First Launch",vc6p:"Build the fanbase before the product. Waitlist → launch day word-of-mouth explosion.",vc6r:"Result: Sold out on launch + 5,000 waitlist",
    vc7h:"Short-Form Content Viral",vc7p:"TikTok, Instagram Reels, YouTube Shorts viral content. Verify organic first, then amplify with budget.",vc7r:"Result: Video viral → follower explosion",
    vc8h:"Review & Reputation Management",vc8p:"Google review, Instagram UGC, platform rating management. Optimize real buyer reviews for conversion.",vc8r:"Result: Review trust → 2-3x conversion",
    stag1:"K-FIRST™ METHOD",stitle1:"Korea validates. We deploy first.",
    ssub1:"Korea is Asia's marketing trend epicenter. Japan follows in 2-3 months. China in 3-6 months.",
    pt1:"SCAN",pt2:"TRANSLATE",pt3:"AMPLIFY",
    ph1:"Monitor Korean Viral Trends",ph2:"Localize for Your Market",ph3:"Organic First, Then Paid",
    pp1:"We track every marketing tactic exploding in Korea — weekly. Nano seeding, challenges, transparency marketing.",
    pp2:"Not just translation. We adapt for Japan's Twitter/X culture and China's 小红书 mindset so locals respond naturally.",
    pp3:"Nano-influencer seeding first to verify organic response. Only amplify what's proven. Just 3% of ad spend.",
    stag2:"SERVICES",stitle2:"Three Revenue Streams",ssub2:"From agency work to inbound tourism infrastructure.",
    sv1h:"Korean Brands → Japan/China",sv1p:"We take Korean brands to Japan and China using battle-tested Korean viral tactics, fully localized.",
    sv2h:"Inbound Tourism Infrastructure",sv2p:"We build Korea-travel media channels in Japan/China, funneling tourists to Korean clinics and restaurants.",
    sv3h:"Local Market Performance",sv3p:"Performance marketing for Japanese/Chinese companies. Local agencies charge 20-30%. KIMFORCE charges 3%.",
    stag3:"TARGET MARKETS",stitle3:"Our Markets",ssub3:"Where Korean-born trends flow.",
    jptitle:"Japan",jpdesc:"World's largest Twitter/X market. K-beauty & K-food interest at all-time high. Local agency fees 20-30%.",
    jp1:"· Twitter/X Viral — Korean community tactics",jp2:"· Nano-influencer seeding at scale",jp3:"· Seoul beauty & food tour channel",jp4:"· LINE marketing + CRM automation",
    zhtitle:"China",zhdesc:"小红书 is K-beauty's #1 platform. Seeding culture mirrors Korea. Medical tourism demand surging.",
    zh1:"· 小红书 KOC seeding × 200",zh2:"· 抖音 challenge format",zh3:"· Chinese patients to Korean clinics",zh4:"· WeChat CRM + live commerce",
    uaetitle:"Middle East · UAE",uaedesc:"Dubai's affluent consumers are highly receptive to Asian trends. K-beauty & K-culture rapidly rising. World's highest SNS penetration.",
    uae1:"· Instagram·TikTok nano-influencer seeding",uae2:"· Dubai Mall K-beauty pop-up + influencer network",uae3:"· Korean premium beauty & medical positioning",uae4:"· Arabic-localized content + CRM automation",
    ustitle:"US Market",usdesc:"K-beauty's biggest growth market. Meta, TikTok, Instagram integrated performance. Korean-validated playbook beats local agencies on ROI.",
    us1:"· Meta·TikTok nano-influencer seeding",us2:"· Amazon·Sephora·Ulta channel marketing",us3:"· TikTok Shop + Instagram Shopping integration",us4:"· Performance ads — ROAS 4.87x documented",
    stag4:"WHY KIMFORCE",stitle4:"Why Only 3%?",ssub4:"AI automation + Korea's proven playbook eliminates cost overhead entirely.",
    ch1:"KIMFORCE",ch2:"Other Agencies",
    cr1a:"Fee rate",cr2a:"On ₩10M spend",cr3a:"Method",cr4a:"Contract",cr5a:"Languages",
    cr1b:"Fee rate",cr2b:"On ₩10M spend",cr3b:"Method",cr4b:"Contract",cr5b:"Languages",
    cr3av:"K-First™ Validated",cr4av:"Monthly",cr3bv:"Generic approach",cr4bv:"3-6 month lock-in",cr5bv:"Single language",
    dashtitle:"Live Performance Dashboard",dashsub:"Achieve up to 10x cost efficiency vs. traditional agencies — at just 3% of ad spend.",
    "eff-sc-label":"Scenario: ₩10M Monthly Ad Budget",
    "eff-chart-title":"Estimated ROAS by Channel (Validated Content)",
    "eff-badge2":"Traditional Agency","eff-fee1":"Fee","eff-fee2":"Fee",
    "eff-net1":"Net Deployed","eff-net2":"Net Deployed","eff-pct1":"Efficiency","eff-pct2":"Efficiency",
    effm1:"Validated ROAS",effm1s:"Organic proof before paid spend",
    effm2:"Fee Reduction",effm2s:"3% vs. industry avg 25%",
    effm3:"Pre-validation Ad Waste",effm3s:"Zero spend on unproven content",
    effm4:"Minimum Contract",effm4s:"Monthly — no lock-in",
    "paradigm-headline":"A New Marketing Paradigm",
    "paradigm-sub":"3 months of validation in Korea. Then Japan · China · Dubai · America — <span class='acc'>global rollout simultaneously.</span>",
    "paradigm-footer":"Global simultaneous rollout · 3% of ad spend · K-First™ Validated",
    "pm-sub":"Origin of K-Trends","pm-verify":"3-Month<br>Verified","pm-jp":"Twitter/X · LINE","pm-cn":"小红书 · 抖音","pm-uae":"Instagram · TikTok","pm-us":"Meta · TikTok",
    nav2:"Services",nav3:"Markets",nav4:"Contact",
    "dir-tag":"MARKETING DIRECTION","dir-title":"How We Think About Marketing",
    "dir-sub":"We don't burn ad budgets. We build trust first. Then we amplify only what's proven.",
    "dir-s1":"STEP 1","dir-h1":"Organic First",
    "dir-p1":"Every campaign starts with organic validation before any paid spend. Nano-influencer seeding, community word-of-mouth, and A/B testing confirm real market response before budget is committed.",
    "dir-r1":"→ Only proven content gets amplified — ROAS 3-5x",
    "dir-s2":"STEP 2","dir-h2":"Cross-Platform Amplification",
    "dir-p2":"We don't focus on one channel. Validated content is deployed simultaneously across all major platforms in the target market, maximizing organic reach and cross-platform spread.",
    "dir-r2":"→ 3-8x wider reach vs. single-channel approach",
    "dir-s3":"STEP 3","dir-h3":"Community Trust Building",
    "dir-p3":"Content that looks like an ad gets scrolled past. Real user voices, ingredient transparency, and authentic before/after stories drive conversions. We design systems where the community spreads the message.",
    "dir-r3":"→ Organic conversion rate 2-4x higher than paid ads",
    "dir-s4":"STEP 4","dir-h4":"Data-Driven Weekly Optimization",
    "dir-p4":"We track performance weekly and cut anything not working immediately. A lean approach that keeps only what performs. Every decision is grounded in click, save, and conversion data.",
    "dir-r4":"→ Continuous weekly optimization, efficiency improves every cycle",
    "dir-phil":"\"Earn trust first. Sell second. Advertising is the last resort.\"",
    "sv2-tag4":"Search Ads",
    ctatitle:`Get Your <span>Free Consultation</span>`,ctasub:"We'll diagnose your marketing blind spots. No cost, no commitment.",
    fi1:"Company",fi2:"Contact Name",fi3:"Email",fi4:"Country",fm0:"Marketing Method",fi6:"Monthly Ad Budget (in your currency)",fi7:"Detailed request (up to 1000 characters)",
    submitbtn:"Request Consultation →",
    "report-badge":"PREMIUM REPORT","report-title":"Korea Marketing Trend Report<br>2015 – 2026",
    "report-sub":"An in-depth analysis of 11 years of Korean digital marketing evolution. Real campaign numbers, channel-by-channel conversion rates, year-by-year ROI benchmarks.",
    rf1:"Year-by-year marketing trend timeline (2015–2026)",rf2:"Verified Korean campaign numbers — COSRX global viral, Amorepacific +120% sales",rf3:"ROI benchmarks by channel — ROAS data for SEO, SNS, performance, short-form",rf4:"2026 cutting-edge methodologies — AI automation, zero-click optimization",rf5:"Cost structure comparison vs global agencies — the data behind why 3% works",rf6:"K-marketing application guide for Japan, China, UAE, and the US markets",
    "rp-label":"ONE-TIME PURCHASE","rp-btn":"Buy Now with Card →","rp-refund":"No refunds after document delivery","rp-note":"USD · Instant download / email delivery","report-buy-btn":"Buy Now →",
    "rp-includes":"<span>Delivered to your email instantly</span><span>PDF format (Korean / English)</span><span>No refunds after document delivery</span><span>Based on 2026 latest data</span>",
    "rpv1-kw":"Mobile Era & Influencer Emergence","rpv1-desc":"Mobile overtakes PC in ad spend, Naver C-Rank algorithm, first influencer marketing ROI data",
    "rpv2-kw":"COVID & Live Commerce Explosion","rpv2-desc":"Contactless consumer revolution, live commerce ₩40B → ₩6T, short-form era data",
    "rpv3-kw":"AI Marketing & Hyper-Personalization","rpv3-desc":"Generative AI creatives, GEO strategy for zero-click era, 2026 Trend Korea key keywords"
  },
  ja:{
    badge:"K-FIRSTマーケティングエージェンシー",
    h1:`韓国で<span class="gold">実証された</span><br>バイラル手法を<br><span class="hl">あなたの市場に適用</span>します`,
    "hero-p":`競合より先に市場を押さえてください。<br>広告費の<strong>たった3%</strong>で。`,
    btn1:"無料相談を受ける →",btn2:"K-Firstメソッドを見る",
    fl1:"広告費に対する手数料",fl2:"KR · JP · CN · UAE",fl3:"実証済みコンテンツ",
    nav1:"戦略",nav2:"サービス",nav3:"市場",nav4:"相談",nav5:"レポート",
    st1:"広告費に対する手数料",st2:"ヶ月先行して韓国で検証",st3:"ターゲット市場",st4:"対応言語",
    vtitle:"今まさに韓国で爆発しているマーケティング",vsub:"これらの手法をあなたの市場に適用します。広告費の3%だけで。",
    vc1h:"ナノ・インフルエンサー大量シーディング",vc1p:"100名ナノインフルエンサーへ同時送付。24時間以内に全員が投稿→アルゴリズムがトレンドと認識。",vc1r:"結果: 全国品切れ → 年商170億ウォン",
    vc2h:"リアル顧客のビフォー・アフター",vc2p:"芸能人ではなくリアル顧客。広告感なし＝自然にシェアされる。クリニック・美容ブランドに爆発的効果。",vc2r:"結果: 有料広告比5〜10倍のオーガニックリーチ",
    vc3h:"成分完全透明化マーケティング",vc3p:"「隠すものは何もない」ポジショニング。全成分を公開して信頼を構築。今やK-beautyの標準。",vc3r:"結果: リピート購入率30〜50%",
    vc4h:"チャレンジ → オーガニック → 広告増幅",vc4p:"まずオーガニックチャレンジでバイラル性を検証。すでに機能するものだけ増幅。",vc4r:"結果: コールド広告比3〜5倍のROAS",
    vc5h:"ポップアップストア + SNSバイラルループ",vc5p:"自撮りしたくなる空間設計→訪問者が自発的に投稿→アルゴリズムスパイク→メディア報道。",vc5r:"結果: メディア掲載 + フォロワー10倍増",
    vc6h:"コミュニティ・ファースト・ローンチ",vc6p:"商品より先にファンベースを構築。ウェイトリスト→発売日の口コミ爆発。広告ゼロで完売。",vc6r:"結果: 発売日完売 + ウェイトリスト5,000人",
    vc7h:"ショートフォームコンテンツバイラル",vc7p:"TikTok・インスタReels・YouTubeショーツのバイラルコンテンツ制作。検証済みコンテンツのみ増幅。",vc7r:"結果: 動画バイラル → フォロワー急増",
    vc8h:"レビュー・評判管理",vc8p:"Googleレビュー・インスタUGC・プラットフォーム評価管理。実購入者レビュー最適化でコンバージョン向上。",vc8r:"結果: レビュー信頼度 → 転換率2〜3倍向上",
    stag1:"K-FIRST™ METHOD",stitle1:"韓国が検証する。私たちが先に展開する。",
    ssub1:"韓国はアジアのマーケティングトレンドの震源地。日本は2〜3ヶ月後、中国は3〜6ヶ月後に同じトレンドが到達します。",
    pt1:"SCAN",pt2:"TRANSLATE",pt3:"AMPLIFY",
    ph1:"韓国バイラルトレンド監視",ph2:"あなたの市場に現地化",ph3:"オーガニック検証後に広告集行",
    pp1:"韓国で爆発しているマーケティング手法を毎週追跡。ナノシーディング、チャレンジ、透明性マーケティングなど。",
    pp2:"単なる翻訳ではありません。日本のTwitter/X感性、中国の小红书文化に合わせて現地化します。",
    pp3:"ナノインフルエンサーシーディングでオーガニック反応を先に確認。検証済みのものだけ広告費で増幅。広告費の3%のみ。",
    stag2:"SERVICES",stitle2:"3つの収益方向",ssub2:"エージェンシー代行からインバウンド観光インフラまで。",
    sv1h:"韓国ブランド → 日本・中国",sv1p:"実績ある韓国バイラル戦術で韓国ブランドを日本・中国に展開。各市場に完全現地化。",
    sv2h:"インバウンド観光インフラ",sv2p:"日本・中国に韓国旅行メディアチャンネルを構築し、韓国クリニック・飲食店に観光客を誘導。",
    sv3h:"現地市場パフォーマンス",sv3p:"日本・中国企業向けパフォーマンスマーケティング。現地代理店20〜30% vs KIMFORCE 3%。",
    stag3:"TARGET MARKETS",stitle3:"ターゲット市場",ssub3:"韓国発のトレンドが流れる場所。",
    jptitle:"日本市場",jpdesc:"世界最大のTwitter/X市場。K-beauty・K-foodへの関心が最高潮。現地代理店手数料20〜30%。",
    jp1:"· Twitter/X バイラル — 韓国コミュニティ戦術を移植",jp2:"· ナノインフルエンサーシーディング — 100名同時展開",jp3:"· ソウル美容・グルメツアーコンテンツチャンネル構築",jp4:"· LINEマーケティング + CRMオートメーション",
    zhtitle:"中国市場",zhdesc:"小红书はK-beautyの聖地。种草シーディング文化は韓国と同じ。医療観光需要が爆発的。",
    zh1:"· 小红书 KOCシーディング × 200名",zh2:"· 抖音チャレンジ — 韓国検証フォーマット移植",zh3:"· 韓国クリニックへの中国人患者誘致",zh4:"· WeChat CRM + ライブコマース連携",
    uaetitle:"中東・UAE市場",uaedesc:"ドバイはK-beauty・K-cultureが急上昇中。高所得消費者層 + SNS浸透率世界最高。",
    uae1:"· Instagram・TikTokナノインフルエンサーシーディング",uae2:"· ドバイモールK-beautyポップアップ + インフルエンサー連携",uae3:"· 韓国プレミアム美容・医療プレミアムポジショニング",uae4:"· アラビア語現地化コンテンツ + CRMオートメーション",
    ustitle:"米国市場",usdesc:"K-beautyの最大成長市場。Meta・TikTok・Instagram統合パフォーマンス。韓国検証済み公式で現地代理店比圧倒的コスパ。",
    us1:"· Meta・TikTokナノインフルエンサーシーディング",us2:"· Amazon・Sephora・Ultaチャンネルマーケティング",us3:"· TikTok Shop + Instagram Shopping連携",us4:"· パフォーマンス広告 — ROAS 4.87x実証済み",
    stag4:"WHY KIMFORCE",stitle4:"なぜ3%なのか？",ssub4:"AI自動化と韓国検証済み公式でコスト構造を革新しました。",
    ch1:"KIMFORCE",ch2:"一般代理店",
    cr1a:"手数料率",cr2a:"月1,000万集行時",cr3a:"方法論",cr4a:"契約",cr5a:"言語",
    cr1b:"手数料率",cr2b:"月1,000万集行時",cr3b:"方法論",cr4b:"契約",cr5b:"言語",
    cr3av:"K-First™",cr4av:"月単位",cr3bv:"一般的アプローチ",cr4bv:"3〜6ヶ月縛り",cr5bv:"単一言語",
    dashtitle:"リアルタイム成果ダッシュボード",dashsub:"広告費の3%で、一般代理店の最大10倍のコスト効率を実現します。",
    "eff-sc-label":"月間広告予算 1,000万ウォンのシナリオ",
    "eff-chart-title":"チャネル別推定ROAS（検証済みコンテンツ基準）",
    "eff-badge2":"一般代理店","eff-fee1":"手数料","eff-fee2":"手数料",
    "eff-net1":"純集行","eff-net2":"純集行","eff-pct1":"集行率","eff-pct2":"集行率",
    effm1:"検証済みROAS",effm1s:"オーガニック検証後に広告集行",
    effm2:"手数料削減",effm2s:"3% vs 業界平均25%",
    effm3:"検証前広告費",effm3s:"失敗なしのパフォーマンス保証",
    effm4:"最小契約単位",effm4s:"リスクなしの柔軟な契約",
    "paradigm-headline":"新しいマーケティングパラダイム",
    "paradigm-sub":"韓国での<span class='acc'>3ヶ月の検証期間</span>を経て、<br>日本・中国・ドバイ・アメリカ — <span class='acc'>全世界に同時展開</span>します",
    "paradigm-footer":"全世界同時展開 · 広告費の3% · K-First™ 検証済み",
    "pm-sub":"K-Trendの発信地","pm-verify":"3ヶ月<br>検証完了","pm-jp":"Twitter/X · LINE","pm-cn":"小红书 · 抖音","pm-uae":"Instagram · TikTok","pm-us":"Meta · TikTok",
    nav2:"サービス",nav3:"市場",nav4:"相談",
    "dir-tag":"マーケティング方向性","dir-title":"私たちのマーケティングの考え方",
    "dir-sub":"広告費を燃やすのではなく、まず信頼を築きます。証明されたものだけを増幅します。",
    "dir-s1":"STEP 1","dir-h1":"オーガニックファースト",
    "dir-p1":"すべてのキャンペーンは有料広告の前にオーガニックな反応を検証します。ナノインフルエンサーシーディング、コミュニティ口コミ、A/Bテストで市場の実際の反応を確認してから広告費を投入します。",
    "dir-r1":"→ 証明されたコンテンツのみ増幅 — ROAS 3〜5倍",
    "dir-s2":"STEP 2","dir-h2":"クロスプラットフォーム増幅",
    "dir-p2":"一つのチャネルに集中しません。検証済みコンテンツをターゲット市場のすべての主要プラットフォームに同時展開し、オーガニックリーチを最大化します。",
    "dir-r2":"→ 単一チャネル比リーチ3〜8倍拡大",
    "dir-s3":"STEP 3","dir-h3":"コミュニティ信頼構築",
    "dir-p3":"広告のように見えるコンテンツはスクロールされます。実際のユーザーの声、成分透明性、ビフォー・アフターストーリーなど信頼ベースのコンテンツが転換率を作ります。",
    "dir-r3":"→ オーガニック転換率 一般広告比2〜4倍",
    "dir-s4":"STEP 4","dir-h4":"データ駆動型週次最適化",
    "dir-p4":"週次で成果を追跡し、反応がないコンテンツはすぐに停止します。うまくいくものだけを残して増幅するリーン方式で広告費の無駄を最小化します。",
    "dir-r4":"→ 週次最適化で広告効率を継続改善",
    "dir-phil":"「まず信頼を得て、次に売る。広告は最後の手段だ。」",
    "sv2-tag4":"検索広告",
    ctatitle:`<span>無料相談</span>を受ける`,ctasub:"まず現在のマーケティングの問題点を指摘します。費用なし。",
    fi1:"会社名",fi2:"担当者",fi3:"メールアドレス",fi4:"国",fm0:"マーケティング手法",fi6:"月間広告予算（各国通貨で入力）",fi7:"詳細なご要望（1000文字以内）",
    submitbtn:"相談申し込み →",
    "report-badge":"プレミアムレポート","report-title":"韓国マーケティングトレンドレポート<br>2015 – 2026",
    "report-sub":"11年間の韓国デジタルマーケティング市場の進化を分析した深層レポート。",
    rf1:"年別マーケティングトレンドタイムライン（2015〜2026）",rf2:"韓国検証キャンペーン成功数値",rf3:"オンラインマーケティングチャンネル別ROI期待値",rf4:"2026最新マーケティング手法",rf5:"グローバル代理店との費用構造比較",rf6:"日本・中国・UAE・米国市場別Kマーケティング適用ガイド",
    "rp-label":"1回購入","rp-btn":"カードで購入する →","rp-refund":"資料受領後の返金不可","rp-note":"USD · 即時ダウンロード / メール送信","report-buy-btn":"今すぐ購入 →",
    "rp-includes":"<span>購入後すぐにメールで送信</span><span>PDF形式（韓国語 / 英語）</span><span>100%返金保証（3日以内）</span><span>2026年最新データ基準</span>",
    "rpv1-kw":"モバイル元年 & インフルエンサー黎明期","rpv1-desc":"SNS広告がモバイルで逆転、Naver C-Rankアルゴリズム、インフルエンサーマーケティングROI初データ",
    "rpv2-kw":"コロナ & ライブコマース爆発","rpv2-desc":"非対面消費革命、ライブコマース400億→6兆ウォン、ショートフォーム全盛時代の数値分析",
    "rpv3-kw":"AIマーケティング & 超個別化","rpv3-desc":"生成AIクリエイティブ、ゼロクリック時代GEO戦略、2026トレンドコリアキーワード"
  },
  zh:{
    badge:"K-FIRST营销机构",
    h1:`韩国<span class="gold">验证过的</span><br>病毒式营销方案<br><span class="hl">应用于您的市场</span>`,
    "hero-p":`在竞争对手察觉之前抢占市场。<br>只需广告费用的<strong>3%</strong>。`,
    btn1:"免费咨询 →",btn2:"了解K-First方法论",
    fl1:"广告费用比例",fl2:"KR · JP · CN · UAE",fl3:"已验证内容",
    nav1:"战略",nav2:"服务",nav3:"市场",nav4:"咨询",nav5:"报告",
    st1:"广告费用比例",st2:"韩国提前验证月数",st3:"目标市场",st4:"语言支持",
    vtitle:"韩国正在爆发的网络营销方法",vsub:"这些经过验证的方法，部署到您的市场。只需广告费的3%。",
    vc1h:"纳米网红大规模种草",vc1p:"同时向100名纳米网红发送产品。24小时内全部发帖→算法识别为趋势。",vc1r:"结果: 全国断货 → 年营收170亿韩元",
    vc2h:"真实客户前后对比",vc2p:"真实顾客，非明星。无广告感 = 自然传播。对诊所、美妆品牌效果爆炸式。",vc2r:"结果: 有机触达比付费广告高5-10倍",
    vc3h:"成分完全透明化营销",vc3p:"'没有什么可隐瞒'的定位。展示所有成分建立信任。现已成为K-beauty标准。",vc3r:"结果: 复购率30-50%",
    vc4h:"挑战 → 有机 → 付费放大",vc4p:"先用有机挑战测试病毒性。只放大已经有效的内容。未验证内容零广告费。",vc4r:"结果: ROAS比冷投广告高3-5倍",
    vc5h:"快闪店 + 社媒病毒循环",vc5p:"设计适合自拍的空间→访客自发发帖→算法爆发→媒体报道。圣水洞公式。",vc5r:"结果: 媒体报道 + 粉丝10倍增长",
    vc6h:"社区优先发布",vc6p:"在产品之前建立粉丝群。等待名单→发布日口碑爆发。不投广告就售罄。",vc6r:"结果: 发布日售罄 + 5000人等待名单",
    vc7h:"短视频内容病毒传播",vc7p:"TikTok·Instagram Reels·YouTube Shorts病毒内容制作。只放大已验证内容。",vc7r:"结果: 视频爆红 → 粉丝暴涨",
    vc8h:"评价·口碑管理",vc8p:"小红书·微信·淘宝评价管理。优化真实买家评价提升转化率。负面评价应对策略。",vc8r:"结果: 评价信任度 → 转化率提升2-3倍",
    stag1:"K-FIRST™ METHOD",stitle1:"韩国验证，我们率先部署。",
    ssub1:"韩国是亚洲营销趋势的震源地。日本在2-3个月后，中国在3-6个月后迎来同样的趋势。",
    pt1:"扫描",pt2:"本土化",pt3:"放大",
    ph1:"监测韩国病毒趋势",ph2:"本土化适配您的市场",ph3:"有机验证后付费放大",
    pp1:"每周追踪韩国爆发的营销策略。纳米种草、挑战格式、透明化营销等。",
    pp2:"不仅仅是翻译。我们适配日本的Twitter/X感性和中国的小红书心态，让本地人自然响应。",
    pp3:"纳米网红种草先验证有机反应。只放大已验证的内容。只需广告费的3%。",
    stag2:"SERVICES",stitle2:"三个收益方向",ssub2:"从代理运营到入境旅游基础设施。",
    sv1h:"韩国品牌 → 日本/中国",sv1p:"使用经过实战检验的韩国病毒营销策略，将韩国品牌推向日本和中国，完全本土化。",
    sv2h:"入境旅游基础设施",sv2p:"在日本/中国建立韩国旅游媒体渠道，将游客导流到韩国诊所、餐厅和美容目的地。",
    sv3h:"本地市场营销表现",sv3p:"为日本/中国企业提供效果营销。本地代理商20-30% vs KIMFORCE 3%。",
    stag3:"TARGET MARKETS",stitle3:"目标市场",ssub3:"韩国创造的趋势流向的地方。",
    jptitle:"日本市场",jpdesc:"全球最大的Twitter/X市场。K-beauty和K-food关注度创历史新高。本地代理商费率20-30%。",
    jp1:"· Twitter/X 病毒传播 — 韩国社区策略",jp2:"· 纳米网红大规模种草",jp3:"· 首尔美容美食旅游内容频道",jp4:"· LINE营销 + CRM自动化",
    zhtitle:"中国市场",zhdesc:"小红书是K-beauty第一平台。种草文化与韩国相同。医疗旅游需求暴涨。",
    zh1:"· 小红书KOC种草 × 200名",zh2:"· 抖音挑战 — 韩国验证格式",zh3:"· 中国患者赴韩整形·皮肤科",zh4:"· 微信CRM + 直播带货联动",
    uaetitle:"中东·阿联酋市场",uaedesc:"迪拜K-beauty·K-culture快速崛起。高收入消费群体 + 全球最高SNS渗透率。",
    uae1:"· Instagram·TikTok纳米网红种草",uae2:"· 迪拜购物中心K-beauty快闪店 + 网红联动",uae3:"· 韩国高端美容·医疗高端定位",uae4:"· 阿拉伯语本土化内容 + CRM自动化",
    ustitle:"美国市场",usdesc:"K-beauty最大增长市场。Meta、TikTok、Instagram整合效果营销。韩国验证公式对比本地代理商性价比碾压。",
    us1:"· Meta·TikTok纳米网红种草",us2:"· Amazon·Sephora·Ulta渠道营销",us3:"· TikTok Shop + Instagram Shopping联动",us4:"· 效果广告 — ROAS 4.87x实证",
    stag4:"WHY KIMFORCE",stitle4:"为什么只要3%？",ssub4:"AI自动化 + 韩国验证公式彻底革新成本结构。",
    ch1:"KIMFORCE",ch2:"普通代理机构",
    cr1a:"收费比例",cr2a:"月投放1000万韩元",cr3a:"方法论",cr4a:"合同",cr5a:"语言支持",
    cr1b:"收费比例",cr2b:"月投放1000万韩元",cr3b:"方法论",cr4b:"合同",cr5b:"语言支持",
    cr3av:"K-First™",cr4av:"按月",cr3bv:"通用方法",cr4bv:"3-6个月锁定",cr5bv:"单一语言",
    dashtitle:"实时效果数据看板",dashsub:"广告费的3%，实现最高10倍成本效率。",
    "eff-sc-label":"月广告预算1000万韩元情景",
    "eff-chart-title":"各渠道预期ROAS（已验证内容基准）",
    "eff-badge2":"普通代理机构","eff-fee1":"手续费","eff-fee2":"手续费",
    "eff-net1":"净投放","eff-net2":"净投放","eff-pct1":"投放率","eff-pct2":"投放率",
    effm1:"已验证ROAS",effm1s:"自然验证后投放广告",
    effm2:"手续费削减",effm2s:"3% vs 行业平均25%",
    effm3:"验证前广告费",effm3s:"零失败性能保证",
    effm4:"最短合同期",effm4s:"无风险灵活合同",
    "paradigm-headline":"全新营销范式",
    "paradigm-sub":"在韩国经过<span class='acc'>3个月验证期</span>后，<br>日本 · 中国 · 迪拜 · 美国 — <span class='acc'>全球同步扩散</span>",
    "paradigm-footer":"全球同步扩散 · 广告费的3% · K-First™ 已验证",
    "pm-sub":"K-Trend 发源地","pm-verify":"3个月<br>验证完成","pm-jp":"Twitter/X · LINE","pm-cn":"小红书 · 抖音","pm-uae":"Instagram · TikTok","pm-us":"Meta · TikTok",
    nav2:"服务",nav3:"市场",nav4:"咨询",
    "dir-tag":"营销方向性","dir-title":"我们对营销的看法",
    "dir-sub":"不是燃烧广告预算，而是先建立信任。只放大已验证的内容。",
    "dir-s1":"STEP 1","dir-h1":"自然流量优先",
    "dir-p1":"所有活动在投放付费广告之前先验证有机反应。纳米网红种草、社区口碑、A/B测试确认真实市场反应后再投入广告费。",
    "dir-r1":"→ 只放大已验证内容 — ROAS 3~5倍",
    "dir-s2":"STEP 2","dir-h2":"跨平台交叉放大",
    "dir-p2":"不专注于单一渠道。将已验证内容同时部署到目标市场的所有主要平台，最大化有机触达并创造跨平台传播效应。",
    "dir-r2":"→ 单一渠道比较触达范围扩大3~8倍",
    "dir-s3":"STEP 3","dir-h3":"社区信任构建",
    "dir-p3":"看起来像广告的内容会被滑走。真实用户的声音、成分透明度、真实前后对比故事等信任型内容创造转化率。",
    "dir-r3":"→ 有机转化率比普通广告高2~4倍",
    "dir-s4":"STEP 4","dir-h4":"数据驱动每周优化",
    "dir-p4":"每周追踪效果，没有反应的内容立即停止。只保留有效内容并放大的精益方式最小化广告费浪费。",
    "dir-r4":"→ 每周优化持续提升广告效率",
    "dir-phil":"先获得信任，再销售。广告是最后手段。",
    "sv2-tag4":"搜索广告",
    ctatitle:`获取<span>免费咨询</span>`,ctasub:"我们将免费诊断您当前营销的问题所在。",
    fi1:"公司名称",fi2:"负责人姓名",fi3:"电子邮件",fi4:"国家",fm0:"营销方式",fi6:"月广告预算（请以当地货币单位填写）",fi7:"详细需求说明（1000字以内）",
    submitbtn:"申请咨询 →",
    "report-badge":"高级报告","report-title":"韩国营销趋势报告<br>2015 – 2026",
    "report-sub":"深度分析韩国数字营销市场11年进化的专业报告。真实活动数据、各渠道转化率、逐年ROI期望值。",
    rf1:"逐年营销趋势时间线 (2015–2026)",rf2:"韩国验证活动数据",rf3:"各渠道ROI期望值",rf4:"2026年最新方法论",rf5:"与全球代理机构的成本结构对比",rf6:"日本·中国·阿联酋·美国市场K营销应用指南",
    "rp-label":"一次性购买","rp-btn":"用卡购买 →","rp-refund":"收到文件后不退款","rp-note":"USD · 立即下载 / 邮件发送","report-buy-btn":"立即购买 →",
    "rp-includes":"<span>购买后立即发送至您的邮箱</span><span>PDF格式（中文·英文）</span><span>收到文件后不退款</span><span>基于2026年最新数据</span>",
    "rpv1-kw":"移动元年 & 网红营销兴起","rpv1-desc":"SNS广告移动端超越PC，Naver C-Rank算法，网红营销ROI首批数据",
    "rpv2-kw":"疫情 & 直播带货爆发","rpv2-desc":"非接触消费革命，直播带货400亿→6万亿韩元，短视频全盛时代数据分析",
    "rpv3-kw":"AI营销 & 超个性化","rpv3-desc":"生成式AI创意，零点击时代GEO战略，2026趋势韩国核心关键词"
  }
};

// ── cn-food (Restaurant Short-Form) translations — shown in ALL languages ──
const CNF = {
 ko:{
  "cnf-tag":"요식업 숏폼 패키지",
  "cnf-title":"K-스타일 요식업 숏폼 · 전용 패키지",
  "cnf-sub":"사진 20장과 영상 5개만 주시면, 한국 바이럴 마케팅 스타일로 인스타 릴스·유튜브 쇼츠·TikTok 전용 숏폼을 제작해 드립니다.",
  "cnf-intro-h":"왜 K-스타일 숏폼인가?",
  "cnf-intro-p":"한국은 아시아 요식업 콘텐츠 마케팅의 기준입니다. 한국에서 검증된 바이럴 구조—빠른 편집·음식 클로즈업·감성 자막—를 그대로 매장 홍보 콘텐츠에 이식합니다. 단순 편집이 아니라, <strong>동네 손님이 저장하고 공유하고 먹으러 오고 싶게</strong> 만드는 콘텐츠 전략입니다.",
  "cnf-flow-title":"진행 방식",
  "cnf-s1":"<strong>사진 20장</strong>(외관·메뉴·내부·분위기) + <strong>영상 5개</strong>(매장 내부·주변·조리 과정)를 보내주세요",
  "cnf-s2":"KIMFORCE가 한국식 바이럴 구조로 <strong>재편집</strong>하고, 시선을 끄는 도입부·자막·감성 음악을 더합니다",
  "cnf-s3":"<strong>인스타·유튜브·TikTok</strong> 전용 포맷으로 전달, 게시용 문구 + 인기 해시태그 포함",
  "cnf-s4":"직접 올리거나, 저희가 대신 게시—<strong>신규 손님 방문율 상승</strong>",
  "cnf-popular-badge":"인기",
  "cnf-p1-price":"19<span>만원</span>",  "cnf-p1-sub":"숏폼 3편 · 체험가",
  "cnf-p1-items":"<li>15~20초 숏폼 3편</li><li>자막 삽입</li><li>게시 문구 3개</li><li>인기 해시태그</li><li>수정 1회</li>",
  "cnf-p1-btn":"지금 상담하기 →",
  "cnf-p2-price":"25<span>만원</span>",  "cnf-p2-sub":"숏폼 3편 · 정식가",
  "cnf-p2-items":"<li>20~30초 숏폼 3편</li><li>자막 삽입</li><li>플랫폼별 게시 문구</li><li>썸네일 문구 3장</li><li>인기 해시태그</li><li>수정 1회</li>",
  "cnf-p2-btn":"지금 상담하기 →",
  "cnf-p3-price":"58<span>만원</span>",  "cnf-p3-sub":"숏폼 6편 · 풀패키지",
  "cnf-p3-items":"<li>숏폼 6편</li><li>플랫폼별 전용 버전</li><li>썸네일 6장</li><li>월간 콘텐츠 캘린더</li><li>매장 강점 분석</li><li>수정 2회</li>",
  "cnf-p3-btn":"지금 상담하기 →",
  "cnf-p4-price":"95<span>만원~</span>",  "cnf-p4-sub":"매월 12~20편 · 완전 위탁",
  "cnf-p4-items":"<li>매월 숏폼 12~20편</li><li>플랫폼 게시 문구</li><li>월간 콘텐츠 캘린더</li><li>인기 영상 분석</li><li>익월 개선안</li><li>전담 매니저</li>",
  "cnf-p4-btn":"지금 상담하기 →",
  "cnf-assets-title":"준비물은 이것만 있으면 됩니다",
  "cnf-al1":"사진 × 20","cnf-al2":"영상 × 5","cnf-al3":"기본 정보","cnf-al4":"목표 플랫폼",
  "cnf-a1":"외관·메뉴·내부·홀·직원/사장님",
  "cnf-a2":"매장 분위기·주변 거리·조리 과정·대표 메뉴",
  "cnf-a3":"상호·주소·영업시간·대표 메뉴·차별점",
  "cnf-a4":"인스타 / 유튜브 / TikTok (복수 선택 가능)"
 },
 en:{
  "cnf-tag":"Restaurant Short-Form Package",
  "cnf-title":"K-Style Restaurant Short-Form · Exclusive Package",
  "cnf-sub":"Just send 20 photos and 5 clips — we produce Instagram Reels · YouTube Shorts · TikTok short-form videos in Korea's viral marketing style.",
  "cnf-intro-h":"Why K-Style Short-Form?",
  "cnf-intro-p":"Korea sets the standard for restaurant content marketing in Asia. We transplant Korea's proven viral structure — fast cuts, food close-ups, emotional captions — directly into your restaurant's promo content. Not just editing, but a strategy that makes <strong>local diners want to save, share, and come eat</strong>.",
  "cnf-flow-title":"HOW IT WORKS",
  "cnf-s1":"You send <strong>20 photos</strong> (exterior · dishes · interior · vibe) + <strong>5 clips</strong> (inside · surroundings · cooking)",
  "cnf-s2":"KIMFORCE <strong>re-edits</strong> with Korea's viral structure, adding scroll-stopping hooks, subtitles, and emotional music",
  "cnf-s3":"Delivered in <strong>Instagram · YouTube · TikTok</strong> formats, with ready-to-post captions + trending hashtags",
  "cnf-s4":"Upload yourself, or we post for you — <strong>more new customers walking in</strong>",
  "cnf-popular-badge":"POPULAR",
  "cnf-p1-price":"$140",  "cnf-p1-sub":"3 videos · Trial price",
  "cnf-p1-items":"<li>3 videos, 15–20 sec</li><li>Subtitles</li><li>3 post captions</li><li>Trending hashtags</li><li>1 revision</li>",
  "cnf-p1-btn":"Get Started →",
  "cnf-p2-price":"$180",  "cnf-p2-sub":"3 videos · Standard price",
  "cnf-p2-items":"<li>3 videos, 20–30 sec</li><li>Subtitles</li><li>Per-platform captions</li><li>3 cover-image texts</li><li>Trending hashtags</li><li>1 revision</li>",
  "cnf-p2-btn":"Get Started →",
  "cnf-p3-price":"$420",  "cnf-p3-sub":"6 videos · Full package",
  "cnf-p3-items":"<li>6 videos</li><li>Platform-specific versions</li><li>6 cover images</li><li>Monthly content calendar</li><li>Store strength analysis</li><li>2 revisions</li>",
  "cnf-p3-btn":"Get Started →",
  "cnf-p4-price":"$700<span>+</span>",  "cnf-p4-sub":"12–20/month · Fully managed",
  "cnf-p4-items":"<li>12–20 videos/month</li><li>Publishing captions</li><li>Monthly content calendar</li><li>Top-video analytics</li><li>Next-month improvement plan</li><li>Dedicated manager</li>",
  "cnf-p4-btn":"Get Started →",
  "cnf-assets-title":"All you need to provide",
  "cnf-al1":"Photos × 20","cnf-al2":"Videos × 5","cnf-al3":"Basic info","cnf-al4":"Target platforms",
  "cnf-a1":"Exterior · dishes · interior · dining area · staff/owner",
  "cnf-a2":"Ambience · nearby streets · cooking · signature dish",
  "cnf-a3":"Name · address · hours · main dishes · selling points",
  "cnf-a4":"Instagram / YouTube / TikTok (multiple OK)"
 },
 ja:{
  "cnf-tag":"飲食店ショート動画パッケージ",
  "cnf-title":"K-スタイル飲食店ショート動画 · 専用パッケージ",
  "cnf-sub":"写真20枚と動画5本を送るだけ。韓国のバズるマーケティング手法で、Instagramリール・YouTubeショート・TikTok専用のショート動画を制作します。",
  "cnf-intro-h":"なぜK-スタイルショート動画なのか？",
  "cnf-intro-p":"韓国はアジアの飲食コンテンツマーケティングの指標です。韓国で実証されたバズる構成—テンポの良い編集・料理のクローズアップ・感情を動かす字幕—をそのままお店の宣伝コンテンツに移植します。単なる編集ではなく、<strong>地元のお客様が保存し、シェアし、食べに来たくなる</strong>コンテンツ戦略です。",
  "cnf-flow-title":"進め方",
  "cnf-s1":"<strong>写真20枚</strong>（外観・料理・内装・雰囲気）+ <strong>動画5本</strong>（店内・周辺・調理シーン）を送ってください",
  "cnf-s2":"KIMFORCEが韓国式バズる構成で<strong>再編集</strong>し、目を引く冒頭・字幕・感情を動かす音楽を加えます",
  "cnf-s3":"<strong>Instagram・YouTube・TikTok</strong>専用フォーマットで納品、投稿用テキスト+人気ハッシュタグ付き",
  "cnf-s4":"ご自身で投稿、または当社が代行—<strong>新規客の来店率アップ</strong>",
  "cnf-popular-badge":"人気",
  "cnf-p1-price":"21,000<span>円</span>",  "cnf-p1-sub":"ショート動画3本 · お試し価格",
  "cnf-p1-items":"<li>15〜20秒ショート動画3本</li><li>字幕</li><li>投稿文3本</li><li>人気ハッシュタグ</li><li>修正1回</li>",
  "cnf-p1-btn":"今すぐ相談 →",
  "cnf-p2-price":"27,000<span>円</span>",  "cnf-p2-sub":"ショート動画3本 · 通常価格",
  "cnf-p2-items":"<li>20〜30秒ショート動画3本</li><li>字幕</li><li>プラットフォーム別投稿文</li><li>サムネ文言3枚</li><li>人気ハッシュタグ</li><li>修正1回</li>",
  "cnf-p2-btn":"今すぐ相談 →",
  "cnf-p3-price":"63,000<span>円</span>",  "cnf-p3-sub":"ショート動画6本 · フルパッケージ",
  "cnf-p3-items":"<li>ショート動画6本</li><li>プラットフォーム別バージョン</li><li>サムネ6枚</li><li>月間コンテンツカレンダー</li><li>店舗の強み分析</li><li>修正2回</li>",
  "cnf-p3-btn":"今すぐ相談 →",
  "cnf-p4-price":"105,000<span>円〜</span>",  "cnf-p4-sub":"毎月12〜20本 · フルマネージド",
  "cnf-p4-items":"<li>毎月ショート動画12〜20本</li><li>投稿用テキスト</li><li>月間コンテンツカレンダー</li><li>人気動画分析</li><li>翌月改善案</li><li>専任担当</li>",
  "cnf-p4-btn":"今すぐ相談 →",
  "cnf-assets-title":"ご用意いただくのはこれだけ",
  "cnf-al1":"写真 × 20","cnf-al2":"動画 × 5","cnf-al3":"基本情報","cnf-al4":"対象プラットフォーム",
  "cnf-a1":"外観・料理・内装・客席・スタッフ/オーナー",
  "cnf-a2":"店内の雰囲気・周辺の通り・調理シーン・看板メニュー",
  "cnf-a3":"店名・住所・営業時間・主力メニュー・強み",
  "cnf-a4":"Instagram / YouTube / TikTok (複数選択可)"
 },
 zh:{
  "cnf-tag":"餐饮短视频套餐",
  "cnf-title":"韩式餐饮短视频 · 专属套餐",
  "cnf-sub":"只需提供20张照片和5段视频，我们用韩国爆款营销风格为您制作抖音/小红书/TikTok专属短视频。",
  "cnf-intro-h":"为什么选择韩式短视频？",
  "cnf-intro-p":"韩国是亚洲餐饮内容营销的风向标。我们将在韩国验证过的爆款结构——快节奏剪辑、食材特写、情绪化字幕——完整移植到您的餐厅宣传内容中。不只是编辑，而是<strong>让本地食客想保存、想分享、想来吃</strong>的内容策略。",
  "cnf-flow-title":"HOW IT WORKS",
  "cnf-s1":"您发送 <strong>20张照片</strong>（外观·菜品·内部·氛围）+ <strong>5段视频</strong>（店内·周边·菜品制作）",
  "cnf-s2":"KIMFORCE 用韩式爆款结构 <strong>重新剪辑</strong>，加入吸引眼球的开头、中文字幕、情绪化音乐",
  "cnf-s3":"交付 <strong>抖音·小红书·TikTok</strong> 专属格式，附带发布文案 + 热门话题标签",
  "cnf-s4":"自己上传，或由我们代为发布——<strong>新客到访率提升</strong>",
  "cnf-popular-badge":"热门",
  "cnf-p1-price":"999<span>元</span>",  "cnf-p1-sub":"短视频 3条 · 体验价",
  "cnf-p1-items":"<li>15~20秒短视频 3条</li><li>中文字幕</li><li>发布文案 3条</li><li>热门话题标签</li><li>修改 1次</li>",
  "cnf-p1-btn":"立即咨询 →",
  "cnf-p2-price":"1,299<span>元</span>",  "cnf-p2-sub":"短视频 3条 · 正式价",
  "cnf-p2-items":"<li>20~30秒短视频 3条</li><li>中文字幕</li><li>抖音/小红书各版文案</li><li>封面图文字 3张</li><li>热门话题标签</li><li>修改 1次</li>",
  "cnf-p2-btn":"立即咨询 →",
  "cnf-p3-price":"2,999<span>元</span>",  "cnf-p3-sub":"短视频 6条 · 全套方案",
  "cnf-p3-items":"<li>短视频 6条</li><li>平台专属版本</li><li>封面图 6张</li><li>月内容日历</li><li>店铺优势分析</li><li>修改 2次</li>",
  "cnf-p3-btn":"立即咨询 →",
  "cnf-p4-price":"4,999<span>元起</span>",  "cnf-p4-sub":"每月 12~20条 · 全托管",
  "cnf-p4-items":"<li>每月 12~20条短视频</li><li>抖音/小红书发布文案</li><li>月度内容日历</li><li>热门视频分析</li><li>下月改善方案</li><li>专属客服</li>",
  "cnf-p4-btn":"立即咨询 →",
  "cnf-assets-title":"您只需要提供这些素材",
  "cnf-al1":"照片 × 20","cnf-al2":"视频 × 5","cnf-al3":"基本信息","cnf-al4":"目标平台",
  "cnf-a1":"外观·菜品·内部·用餐区·员工/老板",
  "cnf-a2":"店内氛围·周边街道·菜品制作·招牌菜",
  "cnf-a3":"店名·地址·营业时间·主打菜品·特色卖点",
  "cnf-a4":"抖音 / 小红书 / TikTok (可选多个)"
 }
};
for (const __l in CNF){ if(T[__l]) Object.assign(T[__l], CNF[__l]); }

// ── report buy-box: PayPal + PDF 열람 라벨 (override/add) ──
const REPX = {
 ko:{
  "rp-note":"USD · 결제 즉시 PDF 열람",
  "rp-includes":"<span>결제 즉시 PDF 열람</span><span>PDF 형식 (한국어·영어)</span><span>문서 수령 후 환불 불가</span><span>2026년 최신 데이터 기준</span>",
  "rp-thanks":"결제 완료! 아래에서 리포트를 확인하세요.",
  "rp-open-btn":"📄 리포트 PDF 열기 →"
 },
 en:{
  "rp-note":"USD · Instant PDF access after payment",
  "rp-includes":"<span>Instant PDF access</span><span>PDF format (Korean·English)</span><span>No refunds after access</span><span>Based on 2026 latest data</span>",
  "rp-thanks":"Payment complete! Access your report below.",
  "rp-open-btn":"📄 Open Report PDF →"
 },
 ja:{
  "rp-note":"USD · 決済後すぐにPDF閲覧",
  "rp-includes":"<span>決済後すぐPDF閲覧</span><span>PDF形式（韓国語・英語）</span><span>閲覧後の返金不可</span><span>2026年最新データ基準</span>",
  "rp-thanks":"決済完了！下記からレポートをご覧ください。",
  "rp-open-btn":"📄 レポートPDFを開く →"
 },
 zh:{
  "rp-note":"USD · 付款后立即查看PDF",
  "rp-includes":"<span>付款后立即查看PDF</span><span>PDF格式（中文·英文）</span><span>查看后不退款</span><span>基于2026年最新数据</span>",
  "rp-thanks":"付款完成！请在下方查看报告。",
  "rp-open-btn":"📄 打开报告PDF →"
 }
};
for (const __l in REPX){ if(T[__l]) Object.assign(T[__l], REPX[__l]); }



function toggleMenu(){
  const m=document.getElementById('mobile-menu');
  const b=document.getElementById('ham-btn');
  if(m.classList.contains('open')){
    m.classList.remove('open');
    b.textContent='☰';
  } else {
    m.classList.add('open');
    b.textContent='✕';
  }
}

function closeMenu(){
  const m=document.getElementById('mobile-menu');
  const b=document.getElementById('ham-btn');
  if(m){m.classList.remove('open');}
  if(b){b.textContent='☰';}
}

function setLang(l){
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll(`.lang-btn[data-lang="${l}"]`).forEach(b=>b.classList.add('active'));

  const d=T[l];
  for(const k in d){
    const el=document.getElementById(k);
    if(!el)continue;
    if(el.tagName==='INPUT'||el.tagName==='TEXTAREA')el.placeholder=d[k];
    else if(el.tagName==='OPTION')el.textContent=d[k];
    else el.innerHTML=d[k];
  }

  const imgs=IMGS[l];
  if(imgs){
    for(const id in imgs){
      const el=document.getElementById(id);
      if(el&&el.tagName==='IMG')el.src=imgs[id];
    }
  }

  document.documentElement.lang=l;

  // Show cn-food section only for Chinese
  const cnFood = document.getElementById('cn-food');
  if (cnFood) cnFood.style.display = 'block';
}


// ── Plan Selection (cn-food → contact form) ─────────────────────────────
function selectPlan(planName) {
  // Fill hidden input
  const input = document.getElementById('selected-plan');
  if (input) input.value = planName;

  // Show badge in form
  const badge = document.getElementById('selected-plan-badge');
  const text  = document.getElementById('selected-plan-text');
  if (badge && text) {
    var __pfx={ko:'선택된 상품: ',en:'Selected: ',ja:'選択中: ',zh:'已选套餐: '};var __cl=document.documentElement.lang||'ko';text.textContent=(__pfx[__cl]||__pfx.ko)+planName;
    badge.style.display = 'flex';
  }

  // Highlight the selected plan card
  document.querySelectorAll('.cnf-plan').forEach(el => el.style.outline = '');
  const btn = event?.currentTarget;
  if (btn) btn.closest('.cnf-plan').style.outline = '2px solid var(--gold)';
}

function clearPlan() {
  const input = document.getElementById('selected-plan');
  if (input) input.value = '';
  const badge = document.getElementById('selected-plan-badge');
  if (badge) badge.style.display = 'none';
  document.querySelectorAll('.cnf-plan').forEach(el => el.style.outline = '');
}

// ── Auto Language Detection ──────────────────────────────────────────────
// Priority: 1) localStorage (user's manual pick)  2) IP geolocation  3) browser lang

const COUNTRY_TO_LANG = {
  KR:'ko',
  JP:'ja',
  CN:'zh', TW:'zh', HK:'zh', MO:'zh', SG:'zh',
};

function countryToLang(cc) {
  return COUNTRY_TO_LANG[cc] || 'en';
}

function browserLang() {
  const nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  if (nav.startsWith('ko')) return 'ko';
  if (nav.startsWith('ja')) return 'ja';
  if (nav.startsWith('zh')) return 'zh';
  return 'en';
}

function applyAutoLang() {
  // 1. Respect manual user choice
  const saved = localStorage.getItem('kimforce_lang');
  if (saved && ['ko','en','ja','zh'].includes(saved)) {
    setLang(saved);
    return;
  }

  // 2. Fast: browser/OS language as immediate best-guess
  const fast = browserLang();
  setLang(fast);

  // 3. Confirm / override with IP-based country (async, silent fallback)
  fetch('https://ipapi.co/json/', { cache: 'force-cache' })
    .then(r => r.json())
    .then(data => {
      // Only override if user hasn't manually chosen since we started
      if (localStorage.getItem('kimforce_lang')) return;
      const ipLang = countryToLang(data.country_code);
      if (ipLang !== fast) setLang(ipLang);
    })
    .catch(() => {
      // ipapi failed — browser lang already applied, nothing to do
    });
}

// Save manual selection when user clicks a lang button
function setLangManual(l) {
  localStorage.setItem('kimforce_lang', l);
  setLang(l);
}

document.addEventListener('DOMContentLoaded', applyAutoLang);


// Character counter for textarea
document.addEventListener('DOMContentLoaded', function() {
  var ta = document.getElementById('fi7');
  var counter = document.getElementById('fi7-count');
  if (ta && counter) {
    ta.addEventListener('input', function() {
      counter.textContent = this.value.length;
    });
  }
});
