const btn = document.querySelector('button');
btn.addEventListener('mouseover', function(){
//moving to another way
btn.style.left = "200px";
btn.style.top = "100px";
/**
 * First method : window.screen have screen dimension
 * Second method: window.innerWidth , window.innerHeigt
 *         
  */
 const height = Math.floor(Math.random * window.innerHeight);
 const width = Math.floor(Math.random() * window.innerWidth);
 btn.style.left = `${width}px`;
 btn.style.top = `${height}px`;

});
btn.addEventListener('click',function(){
 btn.innerText = 'You Got Me';
 document.body.style.backgroundColor = 'green';
});