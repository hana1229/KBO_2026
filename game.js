/* Independent learning activities; scenario data is fictional and deliberately instructional. */
const UMPIRE_EVENTS=[
 {kind:'pitch',answer:'스트라이크',title:'첫 번째 공',desc:'타자가 배트를 휘두르지 않았어. 공은 스트라이크 존을 통과했어.',x:50,y:43,why:'스트라이크 존을 통과한 공은 휘두르지 않아도 스트라이크야.'},
 {kind:'pitch',answer:'볼',title:'두 번째 공',desc:'타자는 스윙하지 않았고 공이 존 바깥으로 빠졌어.',x:83,y:26,why:'스윙하지 않은 공이 스트라이크 존 밖을 통과하면 볼이야.'},
 {kind:'pitch',answer:'스트라이크',title:'세 번째 공',desc:'공이 존 밖으로 빠졌지만 타자가 헛스윙했어.',x:80,y:72,why:'스윙해서 맞히지 못하면 공 위치와 관계없이 스트라이크야.'},
 {kind:'foul',answer:'파울',title:'타자가 공을 쳤어',desc:'공이 1루 파울 라인 바깥으로 날아갔어. 현재 스트라이크가 2개야.',why:'일반적인 파울은 스트라이크로 계산하지만 2스트라이크 뒤에는 스트라이크가 늘지 않아.'},
 {kind:'pitch',answer:'볼',title:'다음 투구',desc:'타자가 지켜본 공이 존 아래로 빠졌어.',x:51,y:85,why:'스윙하지 않은 낮은 공은 볼이야.'},
 {kind:'pitch',answer:'볼',title:'다음 투구',desc:'스윙하지 않은 공이 몸쪽으로 크게 벗어났어.',x:17,y:38,why:'존 밖의 공을 타자가 스윙하지 않았다면 볼이야.'},
 {kind:'pitch',answer:'볼',title:'풀카운트 승부',desc:'공이 존 위를 통과했어. 타자는 스윙하지 않았어.',x:45,y:9,why:'볼 4개가 되면 타자는 볼넷으로 1루에 나가.'},
 {kind:'play',answer:'세이프',title:'내야 땅볼!',desc:'타자가 공을 쳐서 1루로 뛰어. 송구보다 먼저 베이스를 밟았어.',why:'타자가 송구보다 먼저 1루에 도착하면 세이프야.',play:'safe'},
 {kind:'pitch',answer:'스트라이크',title:'새 타자의 첫 공',desc:'타자가 공을 지켜봤고, 공은 존 한가운데로 들어왔어.',x:52,y:52,why:'스트라이크 존을 통과한 공이야.'},
 {kind:'pitch',answer:'스트라이크',title:'두 번째 공',desc:'배트를 휘둘렀지만 공을 맞히지 못했어.',x:74,y:48,why:'헛스윙은 스트라이크야.'},
 {kind:'pitch',answer:'스트라이크',title:'세 번째 공',desc:'타자가 지켜본 공이 존 아래쪽을 통과했어.',x:52,y:69,why:'스트라이크 세 개면 삼진 아웃이야.'},
 {kind:'play',answer:'아웃',title:'2루로 달리는 주자!',desc:'수비수가 공을 잡은 글러브로 주자의 몸을 터치했어. 주자는 2루에 도달하기 전이야.',why:'베이스에서 떨어진 주자를 공을 가진 글러브로 태그하면 아웃이야.',play:'tag'},
 {kind:'play',answer:'아웃',title:'높이 뜬 타구!',desc:'외야수가 공이 땅에 닿기 전에 잡았어.',why:'뜬공을 땅에 닿기 전에 정상적으로 포구하면 타자는 아웃이야.',play:'fly'}
];
const BASEBALL_TERMS=[
 ['타율','타수 중 안타를 친 비율. 높을수록 좋아.'],['출루율','타석에서 출루한 비율. 보통 높을수록 좋아.'],['장타율','타수당 얻은 총루타의 평균. 높을수록 좋아.'],['OPS','출루율과 장타율을 더한 값. 일반적으로 높을수록 좋아.'],['평균자책점','투수가 9이닝당 허용한 평균 자책점. 낮을수록 좋아.'],['WHIP','이닝당 허용한 볼넷과 안타 수. 낮을수록 좋아.'],['탈삼진','투수가 삼진으로 잡은 타자 수. 일반적으로 많을수록 좋아.'],['삼진','타자가 스트라이크 세 개로 아웃되거나, 투수가 타자를 그렇게 잡는 것.'],['볼넷','볼이 네 개가 되어 타자가 1루로 나가는 것.'],['사사구','볼넷과 몸에 맞는 공을 합쳐 부르는 말.'],['홈런','타자가 모든 베이스를 돌아 홈까지 득점할 수 있는 타구.'],['타점','타자의 플레이로 주자가 득점했을 때 기록하는 점수 기여.'],['실책','정상적인 수비라면 처리할 수 있는 상황에서 수비수가 저지른 잘못. 일반적으로 적을수록 좋아.'],['수비율','수비 기회 가운데 실책 없이 처리한 비율. 일반적으로 높을수록 좋아.'],['스트라이크','존을 통과하거나 헛스윙한 공 등 규칙에 따른 스트라이크 판정.'],['볼','타자가 스윙하지 않은 스트라이크 존 밖의 투구.'],['파울','페어 지역 밖으로 나간 타구. 일반적으로 스트라이크 판정에 영향을 줘.'],['태그 아웃','공을 가진 수비수가 베이스에서 떨어진 주자를 태그해 아웃시키는 것.'],['포스 아웃','뒤 주자 때문에 반드시 다음 베이스로 가야 하는 주자를 베이스 터치로 아웃시키는 것.'],['태그업','뜬공 포구 뒤 주자가 원래 베이스를 다시 밟고 다음 베이스로 가는 것.'],['세이프','주자가 규칙에 따라 베이스에 안전하게 도착한 상태.'],['구종','투수가 던지는 공의 종류. 직구, 슬라이더, 커브 등이 있어.']
];
// Compact searchable dictionary accessible from every section.
// Directions apply to an individual indicator, not to a player's value without context.
const EXTRA_BASEBALL_TERMS=[
 ['승률','승리 경기 수를 무승부를 제외한 승패 경기 수로 나눈 비율. 보통 높을수록 좋아.'],
 ['득점','공격에서 기록한 점수. 보통 많을수록 좋아.'],
 ['실점','수비 중 상대에게 허용한 점수. 보통 적을수록 좋아.'],
 ['안타','타구로 타자가 안전하게 출루하는 기록. 보통 많을수록 좋아.'],
 ['피안타','투수가 상대 타자에게 허용한 안타. 다른 조건이 같다면 적을수록 좋아.'],
 ['피홈런','투수가 상대 타자에게 허용한 홈런. 다른 조건이 같다면 적을수록 좋아.'],
 ['볼넷 허용','투수가 상대에게 내준 볼넷. 다른 조건이 같다면 적을수록 좋아.'],
 ['이닝','한 팀의 공격 또는 수비 차례. 투수 기록에서는 던진 이닝 수를 뜻해.'],
 ['구속','공이 날아가는 속도. 빠르다고 반드시 더 좋은 투구는 아니야.'],
 ['비거리','타구가 날아간 거리. 홈런의 경우 일반적으로 멀리 날아간 정도를 나타내.'],
 ['타구 속도','배트에 맞은 직후 타구가 날아가는 속도. 맥락에 따라 해석해야 해.'],
 ['발사각','타구가 떠오르는 각도. 높거나 낮다고 항상 좋은 것은 아니야.'],
 ['4사구','볼넷(4구)과 몸에 맞는 공(사구)을 통틀어 부르는 기록.'],
 ['타격','배트로 공을 치는 공격 행위.'],
 ['투구','투수가 공을 던지는 행위.'],
 ['세이브','특정 조건에서 팀의 리드를 지키고 경기를 마무리한 투수의 기록.'],
 ['홀드','특정 조건에서 리드를 지키고 교체된 구원 투수에게 주는 기록.']
];
const SEARCH_TERMS=[...BASEBALL_TERMS,...EXTRA_BASEBALL_TERMS];
const TERM_DIRECTION={타율:'높을수록 좋음 ↑',출루율:'높을수록 좋음 ↑',장타율:'높을수록 좋음 ↑',OPS:'높을수록 좋음 ↑',평균자책점:'낮을수록 좋음 ↓',WHIP:'낮을수록 좋음 ↓',탈삼진:'많을수록 좋음 ↑',홈런:'많을수록 좋음 ↑',타점:'많을수록 좋음 ↑',실책:'적을수록 좋음 ↓',수비율:'높을수록 좋음 ↑',안타:'많을수록 좋음 ↑',볼넷:'타자에게 유리 ↑',승률:'높을수록 좋음 ↑',득점:'많을수록 좋음 ↑',실점:'적을수록 좋음 ↓',피안타:'적을수록 좋음 ↓',피홈런:'적을수록 좋음 ↓','볼넷 허용':'적을수록 좋음 ↓',구속:'상황에 따라 다름',비거리:'상황에 따라 다름','타구 속도':'상황에 따라 다름',발사각:'적정 각도는 상황마다 다름',이닝:'역할에 따라 다름',삼진:'타자 불리 · 투수 유리'};
function initGlobalGlossary(){
 const inp=document.getElementById('globalTermInput'),panel=document.getElementById('globalTermResults');
 if(!inp||!panel)return;
 const esc=(s)=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 let active=false;
 function update(){
  const query=inp.value.trim().toLocaleLowerCase('ko-KR');
  const found=SEARCH_TERMS.filter(([name,desc])=>!query||(`${name} ${desc}`).toLocaleLowerCase('ko-KR').includes(query));
  const matches=(query?found:SEARCH_TERMS.filter(([n])=>['OPS','WHIP','타율','평균자책점','볼넷','탈삼진'].includes(n))).slice(0,8);
  panel.hidden=!active;
  inp.setAttribute('aria-expanded',String(active));
  if(!active)return;
  panel.innerHTML=matches.length?`<div class="global-result-label">${query?'검색 결과':'자주 찾는 용어'}</div>${matches.map(([name,desc])=>`<div class="global-result-item"><div class="global-result-heading"><b>${esc(name)}</b>${TERM_DIRECTION[name]?`<span class="global-result-direction">${esc(TERM_DIRECTION[name])}</span>`:''}</div><div class="global-result-desc">${esc(desc)}</div></div>`).join('')}`:'<div class="global-empty">일치하는 용어가 없어. 다른 단어로 검색해 봐.</div>';
 }
 inp.addEventListener('focus',()=>{active=true;update()});
 inp.addEventListener('input',()=>{active=true;update()});
 inp.addEventListener('keydown',e=>{if(e.key==='Escape'){active=false;update();inp.blur()}});
 document.addEventListener('pointerdown',e=>{if(!e.target.closest('.global-term-inner')){active=false;update()}});
 document.addEventListener('keydown',e=>{if(e.key==='/'&& !['INPUT','TEXTAREA'].includes(document.activeElement?.tagName)){e.preventDefault();inp.focus()}});
}
const BELL_QUESTIONS=[
 {term:'타율',q:'타율은 무엇을 나타낼까?',options:['타수 중 안타를 친 비율','한 경기의 평균 득점','공이 날아간 거리'],answer:0,why:'타율은 안타 ÷ 타수야. 일반적으로 높을수록 좋아.'},
 {term:'홈런',q:'홈런 기록은 무엇을 뜻할까?',options:['수비 실책 횟수','타자가 홈까지 득점하는 타구','투수가 던진 공의 종류'],answer:1,why:'홈런을 치면 타자와 누상의 주자가 득점할 수 있어.'},
 {term:'OPS',q:'OPS는 무엇을 더한 수치일까?',options:['안타 + 타점','평균자책점 + WHIP','출루율 + 장타율'],answer:2,why:'OPS는 출루율과 장타율의 합이야. 일반적으로 높을수록 좋아.'},
 {term:'WHIP',q:'WHIP는 어떤 기록일까?',options:['이닝당 볼넷·안타 허용','경기당 홈런 수','타구의 발사각'],answer:0,why:'WHIP는 (볼넷 + 피안타) ÷ 투구 이닝이야. 낮을수록 좋아.'},
 {term:'평균자책점',q:'평균자책점은 보통 어느 쪽이 좋을까?',options:['높을수록','낮을수록','상관없음'],answer:1,why:'9이닝당 허용한 자책점이므로 낮을수록 유리해.'},
 {term:'탈삼진',q:'투수의 탈삼진은 어떤 기록일까?',options:['홈런을 맞은 횟수','볼넷을 내준 횟수','삼진으로 잡아낸 타자 수'],answer:2,why:'탈삼진은 투수가 삼진으로 잡아낸 타자 수야.'},
 {term:'피안타',q:'피안타는 무엇을 뜻할까?',options:['투수가 허용한 안타','타자가 친 안타','선수가 기록한 실책'],answer:0,why:'피안타는 투수가 상대 타자에게 맞은 안타야.'},
 {term:'볼넷',q:'볼넷이 발생하면 타자는 어떻게 될까?',options:['바로 아웃','1루 진루','자동으로 2점'],answer:1,why:'볼 네 개로 타자는 1루에 나가.'},
 {term:'실책',q:'실책은 주로 어느 쪽의 기록일까?',options:['타자가 친 홈런','투수의 최고 구속','수비 중 저지른 잘못'],answer:2,why:'실책은 수비에서 정상적으로 처리할 수 있는 상황의 잘못이야.'},
 {term:'구종',q:'직구·슬라이더·커브는 무엇의 예시일까?',options:['구종','타율','수비율'],answer:0,why:'구종은 투수가 던지는 공의 종류를 말해.'},
 {term:'승률',q:'승률은 일반적으로 어느 쪽이 좋을까?',options:['낮을수록','높을수록','상관없음'],answer:1,why:'승률은 승리한 경기의 비율이야. 보통 높을수록 좋아.'},
 {term:'발사각',q:'홈런 정보의 발사각은 무엇일까?',options:['투수의 키','주자와 베이스 거리','타구가 떠오르는 각도'],answer:2,why:'발사각은 타구가 날아오르는 각도야. 높다고 항상 좋은 건 아니야.'}
];
const learnState={mode:'umpire',step:0,balls:0,strikes:0,outs:0,runs:0,bases:[false,false,false],correct:0,answered:null,bellStep:0,bellCorrect:0,bellAnswered:null,termQuery:''};
function learnReset(){Object.assign(learnState,{step:0,balls:0,strikes:0,outs:0,runs:0,bases:[false,false,false],correct:0,answered:null,bellStep:0,bellCorrect:0,bellAnswered:null});}
function learnGamePage(){return `<div class="head-row"><h1 class="page-title">야구 룰</h1><span class="tag">연습 경기 · 시연용</span></div><div class="learn-tabs"><button class="learn-tab ${learnState.mode==='umpire'?'active':''}" data-learn-mode="umpire">⚖ 심판이 되어보기</button><button class="learn-tab ${learnState.mode==='bell'?'active':''}" data-learn-mode="bell">🔔 야구용어 골든벨</button></div>${learnState.mode==='umpire'?umpirePage():bellPage()}<div class="learn-glossary surface"><div class="learn-glossary-head"><h2>야구 용어 찾기</h2><span class="tiny muted">기록 · 규칙</span></div><input id="learnSearch" class="search-input" placeholder="모르는 기록이나 야구 용어 검색" value="${safe(learnState.termQuery)}" aria-label="야구 용어 검색"><div class="learn-terms" id="learnTerms">${renderLearnTerms()}</div></div>`}
function renderLearnTerms(){const q=learnState.termQuery.trim().toLowerCase();if(!q)return `<div class="muted small">용어를 입력하면 짧은 설명이 나와.</div>`;const match=SEARCH_TERMS.filter(([name,desc])=>`${name} ${desc}`.toLowerCase().includes(q));return match.length?match.slice(0,9).map(([n,d])=>`<div class="learn-term"><b>${safe(n)}${TERM_DIRECTION[n]?`<small class="learn-direction">${safe(TERM_DIRECTION[n])}</small>`:""}</b><span>${safe(d)}</span></div>`).join(''):'<div class="muted small">일치하는 용어가 없어.</div>'}
function umpirePage(){const done=learnState.outs>=3||learnState.step>=UMPIRE_EVENTS.length;const e=UMPIRE_EVENTS[learnState.step];return `<section class="learn-game surface"><div class="learn-scorebar"><span class="learn-inning">1회 초 <small>연습 경기</small></span><span><strong>${learnState.runs}</strong> 점</span><span>B ${learnState.balls} · S ${learnState.strikes} · O ${learnState.outs}</span><span>정답 ${learnState.correct}</span></div>${done?`<div class="learn-finish"><div class="learn-finish-icon">⚾</div><h2>3아웃, 이닝 종료!</h2><p>${learnState.step}번의 판정 중 ${learnState.correct}번 정답</p><button class="btn primary" id="learnRestart">다시 심판 보기</button></div>`:`<div class="learn-layout"><div class="learn-field"><div class="learn-field-head">PLAY ${learnState.step+1} <span>판정 대기</span></div><svg viewBox="0 0 400 310" role="img" aria-label="야구장 상황 그림"><defs><radialGradient id="grass"><stop stop-color="#34775f"/><stop offset="1" stop-color="#174737"/></radialGradient></defs><rect width="400" height="310" rx="14" fill="url(#grass)"/><path d="M200 266 L78 145 L200 29 L322 145 Z" fill="#a97859" stroke="#f5f1df" stroke-width="3"/><path d="M200 266 L145 206 L200 153 L255 206 Z" fill="#2c6b50" stroke="#eee" stroke-width="1"/><g fill="#fff" stroke="#e5e9ed">${[[200,266],[78,145],[200,29],[322,145]].map(([x,y])=>`<rect x="${x-5}" y="${y-5}" width="10" height="10" transform="rotate(45 ${x} ${y})"/>`).join('')}</g>${learnState.bases.map((b,i)=>b?`<circle cx="${[322,200,78][i]}" cy="${[130,15,130][i]}" r="7" fill="#f8c557" stroke="#fff" stroke-width="2"/>`:'').join('')}<circle cx="200" cy="152" r="11" fill="#22364d"/><text x="200" y="157" text-anchor="middle" fill="white" font-size="10">P</text>${e.kind==='pitch'?`<rect x="174" y="199" width="52" height="54" fill="#d7eaff" fill-opacity=".2" stroke="#d7eaff" stroke-dasharray="5 4" stroke-width="2"/><circle cx="${174+e.x*.52}" cy="${199+e.y*.54}" r="8" fill="white" stroke="#c6404f" stroke-width="2"/>`:`<path d="M200 256 Q${e.kind==='foul'?345:260} 170 ${e.kind==='foul'?390:275} ${e.kind==='foul'?95:75}" fill="none" stroke="#fff" stroke-dasharray="5 7" stroke-width="3"/><circle cx="${e.kind==='foul'?388:275}" cy="${e.kind==='foul'?95:75}" r="7" fill="white"/>`}</svg><div class="learn-bases"><span>◆ 1루 ${learnState.bases[0]?'주자':'비어 있음'}</span><span>◆ 2루 ${learnState.bases[1]?'주자':'비어 있음'}</span><span>◆ 3루 ${learnState.bases[2]?'주자':'비어 있음'}</span></div></div><div class="learn-decision"><span class="learn-kicker">상황 ${learnState.step+1}</span><h2>${e.title}</h2><p>${e.desc}</p><div class="learn-options">${(e.kind==='pitch'?['스트라이크','볼']:e.kind==='foul'?['파울','페어']:['아웃','세이프']).map(v=>`<button class="learn-option" data-umpire-answer="${v}" ${learnState.answered?'disabled':''}>${v}</button>`).join('')}</div>${learnState.answered?`<div class="learn-feedback ${learnState.answered.correct?'good':'wrong'}"><strong>${learnState.answered.correct?'정답!':'아쉽지만 정답은 '+e.answer}</strong><div>${e.why}</div></div><button class="btn primary learn-next" id="learnNext">다음 상황 →</button>`:'<div class="learn-helper">판정을 선택하면 실제 규칙과 이유를 알려줘.</div>'}</div></div>`}</section>`}
function advanceRunners(kind){const s=learnState;if(kind==='walk'){if(s.bases[0]&&s.bases[1]&&s.bases[2])s.runs++;s.bases[2]=s.bases[2]||(s.bases[0]&&s.bases[1]);s.bases[1]=s.bases[1]||s.bases[0];s.bases[0]=true;}else if(kind==='single'){if(s.bases[2])s.runs++;s.bases=[true,s.bases[0],s.bases[1]];}}
function applyUmpireEvent(e){const s=learnState;if(e.kind==='pitch'){if(e.answer==='볼'){s.balls++;if(s.balls===4){advanceRunners('walk');s.balls=0;s.strikes=0}}else{s.strikes++;if(s.strikes===3){s.outs++;s.balls=0;s.strikes=0}}}else if(e.kind==='foul'){s.strikes=Math.min(2,s.strikes+1)}else if(e.play==='safe'){advanceRunners('single');s.balls=0;s.strikes=0;}else if(e.play==='tag'){s.outs++;s.bases[0]=false;s.balls=0;s.strikes=0;}else if(e.play==='fly'){s.outs++;s.balls=0;s.strikes=0;} }
function bellPage(){const done=learnState.bellStep>=BELL_QUESTIONS.length;const item=BELL_QUESTIONS[learnState.bellStep];return `<section class="learn-game surface learn-bell"><div class="learn-scorebar"><span class="learn-inning">야구용어 골든벨</span><span>${Math.min(learnState.bellStep+1,BELL_QUESTIONS.length)} / ${BELL_QUESTIONS.length}</span><span>정답 ${learnState.bellCorrect}</span></div>${done?`<div class="learn-finish"><div class="learn-finish-icon">🔔</div><h2>골든벨 완료!</h2><p>총 ${BELL_QUESTIONS.length}문제 중 ${learnState.bellCorrect}문제를 맞혔어.</p><button class="btn primary" id="bellRestart">다시 도전</button></div>`:`<div class="learn-bell-inner"><div class="learn-bell-mark">🔔</div><span class="learn-kicker">QUESTION ${learnState.bellStep+1} · ${item.term}</span><h2>${item.q}</h2><div class="learn-bell-options">${item.options.map((v,i)=>`<button class="learn-option" data-bell-answer="${i}" ${learnState.bellAnswered?'disabled':''}>${v}</button>`).join('')}</div>${learnState.bellAnswered?`<div class="learn-feedback ${learnState.bellAnswered.correct?'good':'wrong'}"><strong>${learnState.bellAnswered.correct?'정답!':'정답: '+item.options[item.answer]}</strong><div>${item.why}</div><button class="learn-term-jump" data-bell-term="${item.term}">용어 검색에서 보기 ↗</button></div><button id="bellNext" class="btn primary learn-next">다음 문제 →</button>`:''}</div>`}</section>`}
function wireLearnGame(){document.querySelectorAll('[data-learn-mode]').forEach(b=>b.onclick=()=>{learnState.mode=b.dataset.learnMode;render()});document.querySelectorAll('[data-umpire-answer]').forEach(b=>b.onclick=()=>{if(learnState.answered)return;const answer=b.dataset.umpireAnswer;const e=UMPIRE_EVENTS[learnState.step];const correct=answer===e.answer;if(correct)learnState.correct++;learnState.answered={correct};applyUmpireEvent(e);render()});if($('learnNext'))$('learnNext').onclick=()=>{learnState.step++;learnState.answered=null;render()};if($('learnRestart'))$('learnRestart').onclick=()=>{learnReset();render()};document.querySelectorAll('[data-bell-answer]').forEach(b=>b.onclick=()=>{if(learnState.bellAnswered)return;const correct=Number(b.dataset.bellAnswer)===BELL_QUESTIONS[learnState.bellStep].answer;if(correct)learnState.bellCorrect++;learnState.bellAnswered={correct};render()});if($('bellNext'))$('bellNext').onclick=()=>{learnState.bellStep++;learnState.bellAnswered=null;render()};if($('bellRestart'))$('bellRestart').onclick=()=>{learnState.bellStep=0;learnState.bellCorrect=0;learnState.bellAnswered=null;render()};document.querySelectorAll('[data-bell-term]').forEach(b=>b.onclick=()=>{learnState.termQuery=b.dataset.bellTerm;render();const input=$('learnSearch');input?.scrollIntoView({behavior:'smooth',block:'center'});input?.focus();});if($('learnSearch'))$('learnSearch').oninput=e=>{learnState.termQuery=e.target.value;$('learnTerms').innerHTML=renderLearnTerms()}}
