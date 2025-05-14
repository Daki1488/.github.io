// Слайдер
$(".single-item").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  });


  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем значения полей
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Сбрасываем предыдущие ошибки
    resetErrors();
    
    // Валидация (оставьте вашу существующую логику валидации)
    let isValid = true;
    // ... ваш код валидации ...

    if (isValid) {
        // Показать анимацию успешной регистрации
        showSuccessAnimation();
        
        // Задержка перед сбросом для лучшего UX
        setTimeout(() => {
            // 1. Сброс формы
            this.reset();
            
            // 2. Очистка ошибок
            resetErrors();
            
            // 3. Дополнительный сброс стилей
            resetFormStyles();
            
            // 4. Возврат фокуса
            document.getElementById('username').focus();
        }, 2000);
    }
});

// Сброс ошибок
function resetErrors() {
    document.querySelectorAll('.error').forEach(el => el.textContent = '');
}

// Сброс стилей полей
function resetFormStyles() {
    document.querySelectorAll('input').forEach(input => {
        input.style.borderColor = '#ccc';
        input.style.backgroundColor = '#fff';
    });
}

// Визуальная обратная связь
function showSuccessAnimation() {
    const form = document.getElementById('registrationForm');
    form.style.transition = 'all 0.5s';
    form.style.opacity = '0.5';
    form.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        form.style.opacity = '1';
        form.style.transform = 'scale(1)';
    }, 2000);
}



 // Массив с данными карточек
 const cardsData = [
  {
      image: 'assets/img/team/team2.png',
      title: 'Журавов Владимир Евгеньевич',
      text: 'начальник производства ОКБ «Мотор» ПАО «ОДК-УМПО»'
  },
  {
      image: 'assets/img/team/team1.png',
      title: 'Сакаев Ринат Римович',
      text: 'заместитель управляющего директора-директор по организации поставок и сервисного обслуживания ПАО «ОДК-УМПО»'
  },
  {
      image: 'assets/img/team/team3.png',
      title: 'Марчуков Евгений Ювенальевич',
      text: 'генеральный конструктор - директор ОКБ им. А. Люльки - филиала ПАО «ОДК-УМПО»'
  }
];

// Функция создания карточки
function createCard(data) {
  const card = document.createElement('div');
  card.className = 'card';
  
  card.innerHTML = `
      <img src="${data.image}" class="card-image" alt="${data.title}">
      <div class="card-description">
          <h3>${data.title}</h3>
          <p>${data.text}</p>
      </div>
  `;

  return card;
}

// Добавление карточек в контейнер
const container = document.getElementById('cardsContainer');
cardsData.forEach(data => {
  container.appendChild(createCard(data));
});

// Дополнительные эффекты при наведении (опционально)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
      card.querySelector('.card-description').style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
  });

  card.addEventListener('mouseleave', () => {
      card.querySelector('.card-description').style.transition = 'all 0.3s ease-out';
  });
});

