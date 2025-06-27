//   function setActive(clickedDiv) {
//     const boxes = document.querySelectorAll('.boxes');
//     boxes.forEach(box => box.classList.remove('active'));
//     clickedDiv.classList.add('active');
//   }

    const currentPage = window.location.pathname.split("/").pop();

    // Highlight the link that matches current page
    const links = document.querySelectorAll(".boxes");
    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });