const questions=[
{q:'A valid contract requires?',o:['Offer, acceptance, consideration and intention','Witness only','Company stamp','Registration only'],a:0,e:'Core elements form a valid contract.'},
{q:'Acceptance must be?',o:['Absolute and unqualified','Secret','Future only','Oral only'],a:0,e:'Contracts Act 1950 requires absolute acceptance.'},
{q:'Consideration means?',o:['Something of value exchanged','A discussion','A deed only','A registration'],a:0,e:'Consideration is value given for a promise.'},
{q:'Consent obtained by coercion makes contract?',o:['Voidable','Void','Illegal','Perfectly valid'],a:0,e:'The aggrieved party may rescind.'},
{q:'A void agreement is?',o:['Not enforceable by law','Enforceable forever','Criminal','Registered'],a:0,e:'Void agreements have no legal effect.'},
{q:'A voidable contract is?',o:['Valid until rescinded','Never valid','Illegal','Void from beginning'],a:0,e:'It remains valid until avoided.'},
{q:'Misrepresentation affects?',o:['Free consent','Capacity','Writing','Witnesses'],a:0,e:'It may make a contract voidable.'},
{q:'A minor is generally?',o:['Not competent to contract','Always competent','Director only','Agent only'],a:0,e:'Capacity is essential.'},
{q:'An offer becomes a promise when?',o:['Accepted','Printed','Advertised','Stamped'],a:0,e:'Acceptance creates a promise.'},
{q:'Seller falsely says laptop is new. Contract is?',o:['Voidable at buyer option','Void automatically','Illegal','Unenforceable by both'],a:0,e:'This is a new scenario involving misrepresentation.'}
];
let qi=0,score=0;
const c=document.getElementById('gameCanvas'),x=c.getContext('2d');
let p={x:50,y:200},m={x:620,y:200};
function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
document.getElementById('play').onclick=()=>{show('game');loadQuestion();loop();};
document.getElementById('restart').onclick=()=>location.reload();
function loadQuestion(){document.getElementById('prog').textContent=`Question ${qi+1}/10`;document.getElementById('score').textContent=`Score ${score}`;let q=questions[qi];let h=`<h3>${q.q}</h3>`;q.o.forEach((v,i)=>h+=`<button class=opt onclick='answer(${i})'>${v}</button>`);document.getElementById('questionBox').innerHTML=h;}
function answer(i){let q=questions[qi];if(i===q.a){score+=10;alert('Correct! '+q.e);qi++;if(qi>=questions.length){document.getElementById('final').textContent=`Score: ${score}/100`;show('end');return;}loadQuestion();resetPos();}else alert('Incorrect. '+q.e);}
function resetPos(){p.x=50;m.x=620;}
function move(d){if(d==='up')p.y-=20;if(d==='down')p.y+=20;if(d==='left')p.x-=20;if(d==='right')p.x+=20;}
document.addEventListener('keydown',e=>{if(e.key==='ArrowUp')move('up');if(e.key==='ArrowDown')move('down');if(e.key==='ArrowLeft')move('left');if(e.key==='ArrowRight')move('right');});
function loop(){x.fillStyle='#0a3';x.fillRect(0,0,700,420);for(let i=0;i<50;i++){x.fillStyle='#173';x.fillRect((i*37)%700,(i*29)%420,6,20);}m.x+= (p.x>m.x?1:-1)*0.6; m.y+=(p.y>m.y?1:-1)*0.6; x.fillStyle='yellow';x.beginPath();x.arc(p.x,p.y,12,0,6.28);x.fill();x.fillStyle='red';x.beginPath();x.arc(m.x,m.y,14,0,6.28);x.fill(); if(Math.hypot(p.x-m.x,p.y-m.y)<22){alert('Monster caught you! Restarting room.');resetPos();} requestAnimationFrame(loop);}