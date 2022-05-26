// close Menu
const closeMenu = () => {
  if (window.innerWidth < 992) {
    setTimeout(() => {
      document.querySelector("#hamburger").click();
    }, 300);
  }
};
