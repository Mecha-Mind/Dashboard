const activePage = window.location.pathname;
let boardLinks = document.querySelectorAll('.board ul a');
console.log(boardLinks);
console.log(activePage);
boardLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)){
      link.classList.add('active');
    }
  }
)