document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel__item");
  const buttonsHtml = Array.from(items, () => `<span class="carousel__button"></span>`);

  carousel.insertAdjacentHTML("beforeend", `<div class="carousel__nav">
    ${buttonsHtml.join("")}
    </div>`);

  const buttons = carousel.querySelectorAll(".carousel__button");

  function transitionCarousel(index) {
    items.forEach((item, i) => {
      item.classList.toggle("carousel__item--selected", i === index);
    });
    buttons.forEach((button, i) => {
      button.classList.toggle("carousel__button--selected", i === index);
    });
  }

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      transitionCarousel(i);
    });
  });

  transitionCarousel(0);
});


let exitBtn = document.getElementById("exitBtn")

function removeHeader() {
  header.remove()
}



document.getElementById('dropdownButton').addEventListener('click', function() {
  
  let menu = document.getElementById('dropdownMenu');
  menu.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonAcc').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuAcc');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonEnt').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuEnt');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonStr').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuStr');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonBussn').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuBussn');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonEdu').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuEdu');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonHeal').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuHeal');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonGov').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuGov');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('dropdownButtonWall').addEventListener('click', function() {
  
  let menuAcc = document.getElementById('dropdownMenuWall');
  menuAcc.classList.toggle('hidden');
  
});

document.getElementById('toggleButton').addEventListener('click', function() {
  
  let responMenu = document.getElementById('responMenu');
  responMenu.classList.toggle('hidden');
  
});


window.addEventListener('scroll', () => {
  document.querySelectorAll('#navbar').forEach(section => {
      if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
          section.classList.add('fixed');
          section.classList.add('top-0');
          section.classList.add("bg-opacity-60");
      } else {
          section.classList.remove('top-0');
          section.classList.remove('fixed');
      }
  });
});

window.addEventListener('scroll', () => {
  document.querySelectorAll('#menu-dropdown').forEach(section => {
      if (window.scrollY >= section.offsetTop - window.innerHeight / 2) {
        section.classList.add("bg-opacity-60")
      } else {
          section.classList.remove('bg-opacity-60');
          
      }
  });
});

toggleButton.addEventListener('click', () => {
  if (buttonIcon.classList.contains('fa-grip-lines')) {
      buttonIcon.classList.remove('fa-grip-lines');
      buttonIcon.classList.add('fa-xmark');
      buttonIcon.classList.toggle('toggleButton-active')
  } else {
      buttonIcon.classList.remove('fa-xmark');
      buttonIcon.classList.add('fa-grip-lines');
      buttonIcon.classList.toggle('toggleButton-out')
  }
});