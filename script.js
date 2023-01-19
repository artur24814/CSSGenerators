let elem = document.getElementById('element');
let code = document.getElementById('code');
let inputs = document.querySelectorAll('.sliders input');

inputs.forEach((inp) => inp.addEventListener('input', generateShadow));

function generateShadow() {
    let hShadow = document.getElementById('h-shadow').value;
    let vShadow = document.getElementById('v-shadow').value;
    let bRadius = document.getElementById('b-radius').value;
    let sRadius = document.getElementById('s-radius').value;
    let shadowColor = document.getElementById('shadow-color').value;
    let shadowColorOpacity = document.getElementById('shadow-color-opacity').value;
    let shadowInset = document.getElementById('shadow-inset').checked;
    //Check if checkbox checked
    let boxShadow = shadowInset
      ? `inset ${hShadow}px ${vShadow}px ${bRadius}px ${sRadius}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`
      : `${hShadow}px ${vShadow}px ${bRadius}px ${sRadius}px ${hexToRgba(
        shadowColor,
        shadowColorOpacity
      )}`;
      elem.style.boxShadow = boxShadow;
      code.textContent = `box-shadow: ${boxShadow};`;
}

//Convert Hex to rgba
function hexToRgba(shadowColor, shadowColorOpacity){
  let r =  parseInt(shadowColor.substr(1,2), 16)
  let g =  parseInt(shadowColor.substr(3,2), 16)
  let b =  parseInt(shadowColor.substr(5,2), 16)
  return `rgba(${r}, ${g}, ${b}, ${shadowColorOpacity})`;
}
//copy code
function copyCode(){
  code.select();
  document.execCommand('copy');
  let info = document.querySelector('#btn')
  info.textContent='✔️ Code Copied';
  let cleanInfo = setTimeout(function(){
    let info = document.querySelector('#btn')
    info.innerHTML= '<img src="https://img.icons8.com/office/40/null/copy.png"/>';
  }, 2000);
  cleanInfo
}



//Call function when page load
window.onload = generateShadow();