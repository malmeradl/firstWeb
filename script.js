// Показываем кнопку только при прокрутке
window.onscroll = function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
};

// Прокручиваем страницу вверх при клике
document.getElementById("scrollToTopButton").onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};


function showRegistrationForm() {
  var registrationForm = document.querySelector(".registration-form");
  registrationForm.style.display = "block";
}

function register() {
  var usernameInput = document.getElementById("username").value;
  var passwordInput = document.getElementById("password").value;

  if (usernameInput === "" || passwordInput === "") {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  // Имитация регистрации
  setTimeout(function () {
    alert("Регистрация прошла успешно!");
    // Дополнительная логика после успешной регистрации
  }, 1000); // Имитация задержки в 2 секунды (может быть удалено)

  // Очистка полей после регистрации (может быть удалено)
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function closeRegistrationForm() {
  var registrationForm = document.querySelector(".registration-form");
  registrationForm.style.display = "none";
}


function showLoginForm() {
  var loginForm = document.querySelector('.login-form');
  loginForm.style.display = 'block';
}

function login() {
  var usernameInput = document.getElementById("login-username").value;
  var passwordInput = document.getElementById("login-password").value;

  if (usernameInput === "" || passwordInput === "") {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  // Имитация входа
  setTimeout(function () {
    alert("Вход выполнен успешно!");
    // Дополнительная логика после успешного входа
  }, 1000); // Имитация задержки в 2 секунды (может быть удалено)

  // Очистка полей после входа (может быть удалено)
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
}


function closeLoginForm() {
  var loginForm = document.querySelector('.login-form');
  loginForm.style.display = 'none';
}



function filterObjects() {
  // Получаем все выбранные чекбоксы
  var checkboxes = document.querySelectorAll('.checkbox-input:checked');
  
  // Получаем все объекты
  var objects = document.querySelectorAll('.object-category');
  
  // Перебираем объекты и скрываем их
  objects.forEach(function(object) {
    object.style.display = 'none';
  });
  
  // Перебираем выбранные чекбоксы и отображаем объекты, соответствующие выбранным категориям
  checkboxes.forEach(function(checkbox) {
    var category = checkbox.getAttribute('data-category');
    var filteredObjects = document.querySelectorAll('.object-category.' + category);
    
    filteredObjects.forEach(function(filteredObject) {
      filteredObject.style.display = 'block';
    });
  });
}
