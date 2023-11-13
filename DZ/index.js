function show() {
  const name = document.getElementById("mein");
  const btm = document.getElementById("btm");

  if ( name.style.visibility == 'hidden' ){
    name.style.visibility = 'visible';
    btm.style.background = '#DCDCDC';
  } else {
    name.style.visibility = 'hidden';
    btm.style.background = "yellow";
  }
}
