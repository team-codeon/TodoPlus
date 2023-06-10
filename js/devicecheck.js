/* Checks if device is a moblie or a desktop */
let devicetype = "desktop"
if (window.innerWidth > window.innerHeight) {
  devicetype = "mobile"
}