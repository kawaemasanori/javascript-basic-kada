const Btn =document.getElementById('btn');
Btn.addEventListener('click',()=>{
setTimeout(()=>{
  const Text = document.getElementById('text');
  Text.textContent = 'ボタンをクリックしました';
},2000)});
