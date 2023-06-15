/* Checks if device is a moblie or a desktop */
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  const devicetype="desktop";
}else{
  const devicetype="mobile";
}