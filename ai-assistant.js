// Функции для AI-помощника
function toggleAIChat() {
    const modal = document.getElementById('ai-chat-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        setTimeout(() => {
            const container = document.querySelector('.ai-chat-container');
            container.scrollTop = container.scrollHeight;
        }, 100);
    }
}

function askAI(question) {
    addUserMessage(question);
    setTimeout(() => generateAIResponse(question), 500);
}

function sendUserMessage() {
    const input = document.getElementById('ai-user-input');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        setTimeout(() => generateAIResponse(message), 500);
    }
}

function addUserMessage(message) {
    const chatContainer = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `
        <div class="ai-text">${message}</div>
        <div class="ai-avatar">👤</div>
    `;
    chatContainer.appendChild(messageDiv);
    
    const container = document.querySelector('.ai-chat-container');
    container.scrollTop = container.scrollHeight;
}

// Функции для AI-помощника
function toggleAIChat() {
    const modal = document.getElementById('ai-chat-modal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
        setTimeout(() => {
            const container = document.querySelector('.ai-chat-container');
            container.scrollTop = container.scrollHeight;
        }, 100);
    }
}

function askAI(question) {
    addUserMessage(question);
    setTimeout(() => generateAIResponse(question), 500);
}

function sendUserMessage() {
    const input = document.getElementById('ai-user-input');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        setTimeout(() => generateAIResponse(message), 500);
    }
}

function addUserMessage(message) {
    const chatContainer = document.getElementById('ai-chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'user-message';
    messageDiv.innerHTML = `
        <div class="ai-text">${message}</div>
        <div class="ai-avatar">👤</div>
    `;
    chatContainer.appendChild(messageDiv);
    
    const container = document.querySelector('.ai-chat-container');
    container.scrollTop = container.scrollHeight;
}

function generateAIResponse(userMessage) {
    const chatContainer = document.getElementById('ai-chat-messages');
    const responseDiv = document.createElement('div');
    responseDiv.className = 'ai-message';
    
    let response = '';
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Секретная команда для запуска игры
    if (lowerMessage === '.') {
        startCoffeeGame();
        response = `
            <strong>🎮 Секретная команда активирована!</strong>
            <p>Запускаю "Кофейный сбор"!</p>
            <p>Собери 10 летающих кофейных зёрен за 30 секунд!</p>
            <p>Удачи! ☕</p>
        `;
    } else if (lowerMessage.includes('привет') || lowerMessage.includes('здравств') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        response = `
            <strong>Привет! 👋</strong>
            <p>Рад вас видеть в кофейне "Уютное Место"!</p>
            <p>Я ваш AI-помощник. Могу помочь с выбором кофе, найти ближайшую кофейню или рассказать об акциях.</p>
            <p>Чем могу помочь?</p>
        `;
    } else if (lowerMessage.includes('как дела') || lowerMessage.includes('как ты') || lowerMessage.includes('how are you')) {
        response = `
            <strong>Всё отлично! 💫</strong>
            <p>Готов помогать вам выбирать лучший кофе и находить уютные места!</p>
            <p>А как ваши дела? Надеюсь, вы готовы к чашечке ароматного кофе! ☕</p>
        `;
    } else if (lowerMessage.includes('время') || lowerMessage.includes('который час') || lowerMessage.includes('current time')) {
        const now = new Date();
        const time = now.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        response = `
            <strong>Сейчас ${time} ⏰</strong>
            <p>Идеальное время для:</p>
            <p>${now.getHours() < 12 ? '☀️ Утреннего эспрессо' : 
                 now.getHours() < 18 ? '🌞 Послеобеденного латте' : 
                 '🌙 Вечернего капучино'}</p>
        `;
    } else if (lowerMessage.includes('дата') || lowerMessage.includes('число') || lowerMessage.includes('какое число') || lowerMessage.includes('current date')) {
        const now = new Date();
        const date = now.toLocaleDateString('ru-RU', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        response = `
            <strong>Сегодня ${date} 📅</strong>
            <p>${now.getHours() < 12 ? 'Прекрасное утро для визита в кофейню!' : 
                 now.getHours() < 18 ? 'Замечательный день для кофе-брейка!' : 
                 'Отличный вечер для уютной встречи за кофе!'}</p>
        `;
    } else if (lowerMessage.includes('спасибо') || lowerMessage.includes('благодар') || lowerMessage.includes('thanks')) {
        response = `
            <strong>Всегда пожалуйста! 😊</strong>
            <p>Обращайтесь ещё! Буду рад помочь с выбором кофе или ответить на любые вопросы.</p>
            <p>Хорошего дня и приятного кофепития! ☕</p>
        `;
    } else if (lowerMessage.includes('пока') || lowerMessage.includes('до свидан') || lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        response = `
            <strong>До свидания! 👋</strong>
            <p>Жду вашего возвращения в кофейню "Уютное Место"!</p>
            <p>Не забывайте - идеальный кофе ждёт вас! ☕✨</p>
        `;
    } else if (lowerMessage.includes('рекоменд') || lowerMessage.includes('посоветуй') || lowerMessage.includes('что взять') || lowerMessage.includes('подобрать')) {
        // Расширенная рекомендация на основе ключевых слов
        let recommendations = [];
        if (lowerMessage.includes('кофе') || lowerMessage.includes('напиток')) {
            recommendations = recommendCoffee(lowerMessage);
        } else if (lowerMessage.includes('выпечк') || lowerMessage.includes('булоч') || lowerMessage.includes('круассан')) {
            recommendations = recommendBakery();
        } else if (lowerMessage.includes('десерт') || lowerMessage.includes('торт') || lowerMessage.includes('мороженое')) {
            recommendations = recommendDesserts();
        } else {
            recommendations = recommendRandom();
        }
        response = `
            <strong>Рекомендую попробовать:</strong>
            <ul>
                ${recommendations.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <p>Это подойдёт? Расскажите о предпочтениях (горячий/холодный, сладкий/несладкий), чтобы уточнить!</p>
        `;
    } else if (lowerMessage.includes('акц') || lowerMessage.includes('предложен') || lowerMessage.includes('специальн') || lowerMessage.includes('скидк')) {
        response = `
            <strong>Специальные предложения:</strong>
            <p>🎁 <b>Счастливые часы</b> - с 8:00 до 10:00 скидка 20% на все кофе</p>
            <p>🎁 <b>Студенческая среда</b> - скидка 15% по студенческому билету</p>
            <p>🎁 <b>Программа лояльности</b> - 10-я чашка кофе в подарок!</p>
            <p>🎁 <b>Комбо дня</b> - кофе + выпечка со скидкой 25%!</p>
            <p>Следите за обновлениями в нашем VK!</p>
        `;
    } else if (lowerMessage.includes('меню') || lowerMessage.includes('что есть') || lowerMessage.includes('список')) {
        response = `
            <strong>Наше меню:</strong>
            <p>☕ <b>Кофе и напитки</b>: Эспрессо (119₽), Капучино (169₽), Латте (179₽) и многое другое</p>
            <p>🥐 <b>Выпечка</b>: Круассан (149₽), Булочка с корицей (149₽)</p>
            <p>🍰 <b>Десерты</b>: Чизкейк (229₽), Тирамису (249₽)</p>
            <p>🍦 <b>Мороженое</b>: Ванильное (119₽), Авторское (229₽)</p>
            <p>Полное меню в разделе "Меню" на сайте. Что-то конкретное интересует?</p>
        `;
    } else if (lowerMessage.includes('цена') || lowerMessage.includes('стоимость') || lowerMessage.includes('сколько стоит')) {
        const item = extractItemFromMessage(lowerMessage);
        if (item) {
            const price = getItemPrice(item);
            if (price) {
                response = `
                    <strong>Цена на "${item}":</strong>
                    <p>${price} ₽</p>
                    <p>Добавить в корзину? Или порекомендовать альтернативы?</p>
                `;
            } else {
                response = `
                    <strong>Не нашел "${item}" в меню 🤔</strong>
                    <p>Проверьте написание или опишите подробнее!</p>
                `;
            }
        } else {
            response = `
                <strong>Цены в меню:</strong>
                <p>Кофе: от 119 ₽</p>
                <p>Выпечка: от 89 ₽</p>
                <p>Десерты: от 139 ₽</p>
                <p>Укажите позицию, чтобы узнать точную цену!</p>
            `;
        }
    } else if (lowerMessage.includes('ближайш') || lowerMessage.includes('найти') || lowerMessage.includes('кофейн') || lowerMessage.includes('адрес')) {
        response = `
            <strong>Наши кофейни:</strong>
            <p>📍 <b>Центр</b> - ул. Примерная, 5 (открыто до 22:00)</p>
            <p>📍 <b>ТЦ "Москва"</b> - 3 этаж (открыто до 23:00)</p>
            <p>📍 <b>Парк культуры</b> - вход у фонтана (открыто до 21:00)</p>
            <p>Могу найти ближайшую к вам кофейню, если разрешите доступ к геолокации!</p>
        `;
} else if (lowerMessage.includes('ня') || lowerMessage.includes('Ня') || lowerMessage.includes('Ня!') || lowerMessage.includes('Ня')) {
        response = `
            <strong>Ня!</strong>
        `;
    } else if (lowerMessage.includes('время') || lowerMessage.includes('открыт') || lowerMessage.includes('закрыт') || lowerMessage.includes('график')) {
        response = `
            <strong>График работы:</strong>
            <p>🕘 <b>Пн-Пт:</b> 8:00 - 22:00</p>
            <p>🕘 <b>Сб-Вс:</b> 9:00 - 23:00</p>
            <p>Кофейня в ТЦ "Москва" работает до 23:00 ежедневно!</p>
        `;
    } else {
        // Более умный fallback с предложением помощи
        response = `
            <strong>Не совсем понял ваш вопрос 🤔</strong>
            <p>Попробуйте спросить о:</p>
            <ul>
                <li>Рекомендациях кофе/десертов</li>
                <li>Акциях и скидках</li>
                <li>Меню и ценах</li>
                <li>Адресах кофейен</li>
                <li>Графике работы</li>
            </ul>
            <p>Или перефразируйте вопрос! 😊</p>
        `;
    }
    
    responseDiv.innerHTML = `
        <div class="ai-avatar">🤖</div>
        <div class="ai-text">${response}</div>
    `;
    
    chatContainer.appendChild(responseDiv);
    
    const container = document.querySelector('.ai-chat-container');
    container.scrollTop = container.scrollHeight;
}

// Функции для рекомендаций (симуляция ИИ-логики)
function recommendCoffee(message) {
    let recs = [];
    if (message.includes('горяч') || message.includes('утр') || message.includes('бодр')) {
        recs = ['☕ Эспрессо (119₽) - для быстрого заряда энергии', '⚡ Капучино (169₽) - кремовый и ароматный'];
    } else if (message.includes('холод') || message.includes('лет') || message.includes('освеж')) {
        recs = ['❄️ Айс-латте (209₽) - прохладный и освежающий', '🍇 Бабл-ти (239₽) - с фруктовыми вкусами'];
    } else if (message.includes('сладк') || message.includes('шоколад')) {
        recs = ['🍫 Мокка (189₽) - с шоколадом и сливками', '🍯 Латте с ванилью (179₽) - нежный и сладкий'];
    } else {
        recs = ['☕ Капучино (169₽) - классика для любого времени', '🌿 Флет уайт (189₽) - баланс молока и кофе'];
    }
    return recs;
}

function recommendBakery() {
    return [
        '🥐 Круассан с шоколадом (179₽) - хрустящий и вкусный',
        '🍥 Булочка с корицей (149₽) - ароматная и мягкая'
    ];
}

function recommendDesserts() {
    return [
        '🍰 Чизкейк Нью-Йорк (229₽) - кремовый и насыщенный',
        '🍫 Вулкан-шоколад (329₽) - с жидкой начинкой'
    ];
}

function recommendRandom() {
    const allRecs = [
        '☕ Эспрессо (119₽)',
        '🥐 Круассан классический (149₽)',
        '🍰 Тирамису (249₽)',
        '🍦 Ванильное мороженое (119₽)'
    ];
    return allRecs.sort(() => 0.5 - Math.random()).slice(0, 3);
}

// Функция для извлечения позиции из сообщения
function extractItemFromMessage(message) {
    const menuItems = ['эспрессо', 'американо', 'капучино', 'латте', 'флет уайт', 'мокка', 'айс-латте', 'чай', 'бабл-ти', 'пепси', 'кола', 'миринда', 'асу', 
                       'круассан классический', 'круассан с шоколадом', 'булочка с корицей', 'бейгл', 'песочное печенье', 'панкейки',
                       'чизкейк', 'медовик', 'тирамису', 'макаруны', 'пирожное картошка',
                       'мороженое', 'стаканчик с топпингом', 'авторское мороженое', 'голландское мороженое',
                       'медовый тост', 'панкейки с шоколадным фонтаном', 'вулкан-шоколад', 'японские моти'];
    for (let item of menuItems) {
        if (message.includes(item)) {
            return item.charAt(0).toUpperCase() + item.slice(1);
        }
    }
    return null;
}

// Функция для получения цены (хардкод из меню)
function getItemPrice(item) {
    const prices = {
        'Эспрессо': 119,
        'Американо': 129,
        'Капучино': 169,
        'Латте': 179,
        'Флет уайт': 189,
        'Мокка': 189,
        'Айс-латте': 209,
        'Чай': 119,
        'Бабл-ти': 239,
        'Пепси': 79,
        'Кола': 79,
        'Миринда': 79,
        'Асу': 49,
        'Круассан классический': 149,
        'Круассан с шоколадом': 179,
        'Булочка с корицей': 149,
        'Бейгл': 189,
        'Песочное печенье': 89,
        'Панкейки': 209,
        'Чизкейк': 229,
        'Медовик': 199,
        'Тирамису': 249,
        'Макаруны': 79,
        'Пирожное картошка': 139,
        'Мороженое': 119,
        'Стаканчик с топпингом': 179,
        'Авторское мороженое': 229,
        'Голландское мороженое': 259,
        'Медовый тост': 299,
        'Панкейки с шоколадным фонтаном': 289,
        'Вулкан-шоколад': 329,
        'Японские моти': 259
    };
    return prices[item];
}

// Закрытие по клику вне окна и другие функции остаются без изменений
// ... (остальной код из оригинального ai-assistant.js без изменений)

// Закрытие по клику вне окна
window.onclick = function(event) {
    const cartModal = document.getElementById('cart-modal');
    const aiModal = document.getElementById('ai-chat-modal');
    
    if (event.target === cartModal) {
        hideCart();
    }
    if (event.target === aiModal) {
        toggleAIChat();
    }
}

// Enter для отправки сообщения
document.addEventListener('DOMContentLoaded', function() {
    const aiInput = document.getElementById('ai-user-input');
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });
    }
});

// Корзина
let cart = [];

// Функции корзины
function showCart() {
    const modal = document.getElementById('cart-modal');
    updateCartDisplay();
    modal.style.display = 'block';
}

function hideCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: itemName,
            price: price,
            quantity: 1
        });
    }
    
    updateCartCount();
    updateCartDisplay(); // Добавьте эту строку для обновления отображения
}

function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity -= 1;
        } else {
            cart.splice(itemIndex, 1);
        }
    }
    updateCartDisplay();
    updateCartCount();
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('cart-total-price').textContent = totalPrice;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Корзина пуста</div>';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} ₽ × ${item.quantity}</div>
            </div>
            <div class="cart-item-controls">
                <button class="cart-item-btn remove" onclick="removeFromCart('${item.name}')">-</button>
                <span class="cart-item-quantity">${item.quantity}</span>
                <button class="cart-item-btn" onclick="addToCart('${item.name}', ${item.price})">+</button>
            </div>
        </div>
    `).join('');
}
function clearCart() {
    cart = [];
    updateCartDisplay();
    updateCartCount();
}

function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => 
        `${item.name} - ${item.quantity} × ${item.price} ₽`
    ).join('\n');
    
    alert(`Заказ оформлен! 🎉\n\n${orderDetails}\n\nИтого: ${total} ₽\n\nОжидайте SMS с подтверждением.`);
    clearCart();
    hideCart();
}

// Кнопка "Наверх"
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Показывать/скрывать кнопку при прокрутке
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
});

// Переменные игры
let gameActive = false;
let gameTimer;
let timeLeft = 30;
let beansCollected = 0;
let totalBeans = 10;

// Запуск игры
function startCoffeeGame() {
    if (gameActive) return;
    
    gameActive = true;
    timeLeft = 30;
    beansCollected = 0;
    
    const gameContainer = document.getElementById('coffee-game');
    const gameArea = document.getElementById('game-area');
    const gameMessage = document.getElementById('game-message');
    
    // Показываем игру
    gameContainer.style.display = 'flex';
    gameArea.innerHTML = '';
    gameMessage.innerHTML = '';
    
    // Создаем кофейные зёрна
    createCoffeeBeans();
    
    // Запускаем таймер
    startGameTimer();
    
    // Обновляем статистику
    updateGameStats();
}

// Создание кофейных зёрен
function createCoffeeBeans() {
    const gameArea = document.getElementById('game-area');
    const areaRect = gameArea.getBoundingClientRect();
    
    for (let i = 0; i < totalBeans; i++) {
        const bean = document.createElement('div');
        bean.className = 'coffee-bean';
        bean.innerHTML = '☕';
        bean.dataset.collected = 'false';
        
        // Случайная позиция
        const x = Math.random() * (areaRect.width - 40);
        const y = Math.random() * (areaRect.height - 40);
        
        bean.style.left = x + 'px';
        bean.style.top = y + 'px';
        
        // Случайная задержка анимации
        bean.style.animationDelay = (Math.random() * 2) + 's';
        
        // Обработчик клика
        bean.addEventListener('click', collectBean);
        
        gameArea.appendChild(bean);
    }
}

// Сбор зёрен
function collectBean(event) {
    if (!gameActive) return;
    
    const bean = event.target;
    if (bean.dataset.collected === 'true') return;
    
    // Помечаем как собранное
    bean.dataset.collected = 'true';
    bean.style.opacity = '0.5';
    bean.style.transform = 'scale(0.5)';
    bean.style.cursor = 'default';
    
    // Убираем обработчик
    bean.removeEventListener('click', collectBean);
    
    // Обновляем счёт
    beansCollected++;
    updateGameStats();
    
    // Проверяем победу
    if (beansCollected >= totalBeans) {
        gameWin();
    }
}

// Таймер игры
function startGameTimer() {
    updateTimerDisplay();
    
    gameTimer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            gameOver();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('game-timer');
    if (timerElement) {
        timerElement.textContent = timeLeft;
    }
}

function updateGameStats() {
    const scoreElement = document.getElementById('game-score');
    if (scoreElement) {
        scoreElement.textContent = beansCollected;
    }
}

// Победа
function gameWin() {
    clearInterval(gameTimer);
    gameActive = false;
    
    const gameMessage = document.getElementById('game-message');
    if (gameMessage) {
        gameMessage.innerHTML = `
            <div class="victory-message">
                <h2>🎉 Поздравляю!</h2>
                <p>Ты собрал все кофейные зёрна!</p>
                <p><strong>Кофейный магнат уровня PRO</strong></p>
                <p>Запускаю кофейный дождь... 🌧️☕</p>
            </div>
        `;
    }
    
    // Запускаем дождь из зёрен
    startCoffeeRain();
    
    // Автоматическое закрытие через 5 секунд
    setTimeout(() => {
        exitCoffeeGame();
    }, 5000);
}

// Проигрыш
function gameOver() {
    clearInterval(gameTimer);
    gameActive = false;
    
    const gameMessage = document.getElementById('game-message');
    if (gameMessage) {
        gameMessage.innerHTML = `
            <div style="background: #e74c3c; color: white; padding: 20px; border-radius: 10px; text-align: center;">
                <h2>⏰ Время вышло!</h2>
                <p>Ты собрал ${beansCollected} из ${totalBeans} зёрен</p>
                <p>Попробуй ещё раз! Напиши мне "."</p>
            </div>
        `;
    }
}

// Кофейный дождь
function startCoffeeRain() {
    const rainContainer = document.getElementById('coffee-rain');
    if (rainContainer) {
        rainContainer.style.display = 'block';
        rainContainer.innerHTML = '';
        
        // Создаем много падающих зёрен
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                createFallingBean();
            }, i * 100);
        }
        
        // Останавливаем дождь через 3 секунды
        setTimeout(() => {
            rainContainer.style.display = 'none';
        }, 3000);
    }
}

function createFallingBean() {
    const rainContainer = document.getElementById('coffee-rain');
    if (rainContainer) {
        const bean = document.createElement('div');
        bean.className = 'raining-bean';
        bean.innerHTML = '☕';
        
        // Случайная позиция сверху
        bean.style.left = Math.random() * 100 + 'vw';
        bean.style.animationDuration = (Math.random() * 2 + 1) + 's';
        
        rainContainer.appendChild(bean);
    }
}

function exitCoffeeGame() {
    gameActive = false;
    clearInterval(gameTimer);
    document.getElementById('coffee-game').style.display = 'none';
    document.getElementById('coffee-rain').style.display = 'none';
}

// Профиль
function showProfile() {
    const modal = document.getElementById('profile-modal');
    loadProfile();
    modal.style.display = 'block';
}

function hideProfile() {
    document.getElementById('profile-modal').style.display = 'none';
}

function loadProfile() {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
    
    document.getElementById('profile-username').value = profile.username || '';
    document.getElementById('profile-email').value = profile.email || '';
    document.getElementById('profile-phone').value = profile.phone || '';
    
    const avatarElement = document.getElementById('profile-avatar');
    if (avatarElement) {
        if (profile.avatarType === 'image' && profile.avatar) {
            avatarElement.src = profile.avatar;
            avatarElement.textContent = '';
            avatarElement.style.display = 'block';
            avatarElement.style.fontSize = '0';
        } else if (profile.avatarType === 'emoji' && profile.avatar) {
            avatarElement.src = '';
            avatarElement.textContent = profile.avatar;
            avatarElement.style.display = 'flex';
            avatarElement.style.alignItems = 'center';
            avatarElement.style.justifyContent = 'center';
            avatarElement.style.fontSize = '60px';
        } else {
            avatarElement.src = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f464.png';
            avatarElement.textContent = '';
            avatarElement.style.display = 'block';
        }
    }
    
    updateFavoriteItems(profile.favorites || []);
    updateOrderHistory(profile.orders || []);
}

function saveProfile() {
    const profile = {
        username: document.getElementById('profile-username').value.trim(),
        email: document.getElementById('profile-email').value.trim(),
        phone: document.getElementById('profile-phone').value.trim(),
        favorites: JSON.parse(localStorage.getItem('userProfile'))?.favorites || [],
        orders: JSON.parse(localStorage.getItem('userProfile'))?.orders || []
    };
    
    const avatarElement = document.getElementById('profile-avatar');
    if (avatarElement.src) {
        profile.avatar = avatarElement.src;
        profile.avatarType = 'image';
    } else if (avatarElement.textContent) {
        profile.avatar = avatarElement.textContent;
        profile.avatarType = 'emoji';
    }
    
    localStorage.setItem('userProfile', JSON.stringify(profile));
    showNotification('✅ Профиль сохранён!');
    updateProfileLink(); // Обновляем кнопку профиля
}

function resetProfile() {
    localStorage.removeItem('userProfile');
    loadProfile();
    showNotification('🔄 Профиль сброшен!');
    updateProfileLink(); // Обновляем кнопку профиля
}

function openAvatarSelector() {
    loadAvatarOptions();
    document.getElementById('avatar-selector').style.display = 'block';
}

function closeAvatarSelector() {
    document.getElementById('avatar-selector').style.display = 'none';
}

function showNotification(message, duration = 5000) {  // Время показа 5 секунд для лучшей видимости
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        notification.className = 'notification';
        document.body.appendChild(notification);
    }
    
    notification.textContent = message;
    notification.classList.add('show');
    notification.classList.remove('hide');
    
    clearTimeout(notification.timeout);
    notification.timeout = setTimeout(() => {
        notification.classList.add('hide');
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, duration);
}

// Функция обновления кнопки профиля в навигации
function updateProfileLink() {
    const link = document.getElementById('profile-link');
    if (!link) return;
    
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
    
    if (profile.avatar && profile.avatarType === 'image') {
        link.innerHTML = `<img src="${profile.avatar}" alt="Аватар" style="width: 20px; height: 20px; border-radius: 50%; margin-right: 5px; object-fit: cover;"> Профиль`;
    } else if (profile.avatar && profile.avatarType === 'emoji') {
        link.innerHTML = `${profile.avatar} Профиль`;
    } else {
        link.innerHTML = '👤 Профиль';
    }
}

// Инициализация профиля и кнопки при загрузке
document.addEventListener('DOMContentLoaded', function() {
    loadProfile();
    updateProfileLink();
    // ... остальной код ...
});

// Функция загрузки опций аватарок (теперь с GIF)
function loadAvatarOptions() {
    const avatarGrid = document.getElementById('avatar-grid');
    if (!avatarGrid) return;
    
    // Массив с URL анимированных GIF аватарок (кофейная тематика, можно заменить на свои)
    const avatarGifs = [
        'https://media.giphy.com/media/hyJAKOruiRotKNRjkw/giphy.gif',  // Кофейная чашка
        'https://media.giphy.com/media/D92helHLtMnNNuZQ8S/giphy.gif',  // Кофе наливается
        'https://media.giphy.com/media/pfGZIZ7OSRTVUbJh1d/giphy.gif',  // Анимированный кофе
        'https://media.giphy.com/media/VqV9sI9oKJkN0iGNzj/giphy.gif',      // Латте арт
        'https://media.giphy.com/media/Ut84lJzgeJn3HL8cpQ/giphy.gif', // Кофейные зерна
        'https://media.giphy.com/media/bPtCG7XRaXRlTtsfRY/giphy.gif',  // Капучино
        'https://media.giphy.com/media/dZmNZ877VRS7t1QSDV/giphy.gif', // Эспрессо
        'https://media.giphy.com/media/cezWGsSIVqpwadCTSs/giphy.gif'   // Кофе с пенкой
    ];
    
    let avatarHTML = '';
    
    avatarGifs.forEach((gifUrl, index) => {
        avatarHTML += `
            <div class="avatar-option" onclick="selectGifAvatar('${gifUrl}')">
                <img src="${gifUrl}" alt="Аватар ${index + 1}" width="60" height="60" style="border-radius: 50%;">
            </div>
        `;
    });
    
    avatarGrid.innerHTML = avatarHTML;
}

// Функция выбора GIF аватарки
function selectGifAvatar(gifUrl) {
    const avatarElement = document.getElementById('profile-avatar');
    if (avatarElement) {
        avatarElement.src = gifUrl;
        avatarElement.textContent = '';
        avatarElement.style.display = 'block';
        avatarElement.style.fontSize = '0';
        
        // Сохраняем в профиль
        const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
        profile.avatar = gifUrl;
        profile.avatarType = 'image';
        localStorage.setItem('userProfile', JSON.stringify(profile));
        
        showNotification('✅ Аватар обновлен!');
        updateProfileLink(); // Обновляем кнопку профиля
    }
    closeAvatarSelector();
}

// Функция обработки загрузки собственной аватарки (без изменений, но добавляем обновление кнопки)
function handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (file) {
        if (!file.type.startsWith('image/')) {
            showNotification('❌ Пожалуйста, выберите изображение');
            return;
        }
        
        if (file.size > 2 * 1024 * 1024) {
            showNotification('❌ Размер файла не должен превышать 2MB');
            return;
        }
        
        const reader = new FileReader();
        reader.onload = function(e) {
            const avatarElement = document.getElementById('profile-avatar');
            if (avatarElement) {
                avatarElement.src = e.target.result;
                avatarElement.textContent = '';
                avatarElement.style.display = 'block';
                avatarElement.style.fontSize = '0';
                
                const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
                profile.avatar = e.target.result;
                profile.avatarType = 'image';
                localStorage.setItem('userProfile', JSON.stringify(profile));
                
                showNotification('✅ Аватар загружен!');
                updateProfileLink(); // Обновляем кнопку профиля
            }
            closeAvatarSelector();
        };
        
        reader.onerror = function() {
            showNotification('❌ Ошибка загрузки изображения');
        };
        
        reader.readAsDataURL(file);
    }
}

// Удаляем старые функции для эмодзи аватарок, так как теперь фокус на GIF
// Если нужно, можно оставить, но для улучшения перешли на GIF

// Функции фильтрации меню
function filterMenu(filterType) {
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const allLists = document.querySelectorAll('.menu-list');
    const allItems = document.querySelectorAll('.menu-list li');
    
    switch(filterType) {
        case 'all':
            // Показываем все
            allLists.forEach(list => {
                list.classList.remove('hidden');
                list.querySelectorAll('li').forEach(item => {
                    item.classList.remove('hidden');
                    item.classList.remove('favorite');
                });
            });
            showEmptyFavoritesMessage(false);
            break;
            
        case 'favorites':
            // Используем улучшенную функцию фильтрации избранного
            filterFavorites();
            break;
            
        case 'coffee':
        case 'bakery':
        case 'desserts':
            // Фильтр по категориям
            allLists.forEach(list => {
                if (list.dataset.category === filterType) {
                    list.classList.remove('hidden');
                    list.querySelectorAll('li').forEach(item => {
                        item.classList.remove('hidden');
                        item.classList.remove('favorite');
                    });
                } else {
                    list.classList.add('hidden');
                }
            });
            showEmptyFavoritesMessage(false);
            break;
    }
}
// Функция для показа сообщения о пустом избранном
function showEmptyFavoritesMessage(isEmpty) {
    // Удаляем предыдущее сообщение если есть
    const existingMessage = document.getElementById('empty-favorites-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    if (isEmpty) {
        const menuSection = document.getElementById('menu');
        const message = document.createElement('div');
        message.id = 'empty-favorites-message';
        message.className = 'empty-favorites-message';
        message.innerHTML = `
            <h3>❤️ В избранном пока пусто</h3>
            <p>Добавляйте любимые позиции, нажимая на кнопку "🤍" рядом с товарами</p>
            <p>Здесь появятся все ваши любимые кофе и десерты!</p>
        `;
        
        // Вставляем сообщение после кнопок фильтрации
        const filters = document.querySelector('.menu-filters');
        if (filters && filters.nextSibling) {
            menuSection.insertBefore(message, filters.nextSibling);
        } else {
            menuSection.appendChild(message);
        }
    }
}

// Функция для обновления видимости избранных элементов
function updateFavoritesVisibility() {
    const filterBtn = document.querySelector('.filter-btn.active');
    if (filterBtn && (filterBtn.textContent.includes('Избранное') || filterBtn.textContent.includes('❤️'))) {
        filterMenu('favorites');
    }
}

// Обновите функцию toggleFavorite для обновления фильтра
function toggleFavorite(itemName, price) {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || { favorites: [] };
    let favorites = profile.favorites || [];
    
    const existingIndex = favorites.findIndex(item => item.name === itemName);
    
    if (existingIndex > -1) {
        favorites.splice(existingIndex, 1);
        showNotification(`❌ "${itemName}" удален из избранного`);
    } else {
        favorites.push({
            name: itemName,
            price: price,
            date: new Date().toLocaleDateString('ru-RU')
        });
        showNotification(`❤️ "${itemName}" добавлен в избранное`);
    }
    
    profile.favorites = favorites;
    localStorage.setItem('userProfile', JSON.stringify(profile));
    
    updateFavoriteButtons();
    updateFavoriteItems(favorites);
    updateFavoritesVisibility(); // Добавлен вызов обновления видимости
}

// Инициализация фильтрации при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, если в URL есть хэш избранного, активируем фильтр
    if (window.location.hash === '#favorites') {
        const favoriteBtn = document.querySelector('.filter-btn[onclick*="favorites"]');
        if (favoriteBtn) {
            favoriteBtn.click();
        }
    }
});



// Улучшенная функция инициализации кнопок избранного
function initializeFavoriteButtons() {
    const menuItems = document.querySelectorAll('.menu-list li');
    
    menuItems.forEach(item => {
        const itemNameElement = item.querySelector('span');
        const priceElement = item.querySelector('div span');
        
        if (!itemNameElement || !priceElement) return;
        
        const itemName = itemNameElement.textContent.trim();
        const priceText = priceElement.textContent;
        const price = parseInt(priceText.replace('₽', '').replace(/\s/g, ''));
        
        // Проверяем, есть ли уже кнопка избранного
        let favoriteBtn = item.querySelector('.add-to-favorite-btn');
        
        if (!favoriteBtn) {
            favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'add-to-favorite-btn';
            favoriteBtn.dataset.itemName = itemName;
            favoriteBtn.title = 'Добавить в избранное';
            favoriteBtn.onclick = function(e) {
                e.stopPropagation();
                toggleFavorite(itemName, price);
            };
            
            // Добавляем кнопку в контейнер с ценой и кнопкой корзины
            const buttonContainer = item.querySelector('div');
            if (buttonContainer) {
                buttonContainer.appendChild(favoriteBtn);
            }
        }
        
        // Обновляем состояние кнопки
        updateFavoriteButtonState(favoriteBtn, itemName);
    });
}

// Функция для обновления состояния отдельной кнопки
function updateFavoriteButtonState(button, itemName) {
    if (isItemFavorite(itemName)) {
        button.innerHTML = '❤️';
        button.style.background = '#e74c3c';
    } else {
        button.innerHTML = '🤍';
        button.style.background = '#95a5a6';
    }
}

// Обновите функцию updateFavoriteButtons
function updateFavoriteButtons() {
    const favoriteBtns = document.querySelectorAll('.add-to-favorite-btn');
    favoriteBtns.forEach(btn => {
        const itemName = btn.dataset.itemName;
        updateFavoriteButtonState(btn, itemName);
    });
}



// Улучшенная функция фильтрации избранного
function filterFavorites() {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
    const favorites = profile.favorites || [];
    const favoriteNames = favorites.map(fav => fav.name);
    
    const allLists = document.querySelectorAll('.menu-list');
    const allItems = document.querySelectorAll('.menu-list li');
    
    // Сначала показываем все разделы
    allLists.forEach(list => list.classList.remove('hidden'));
    
    // Показываем только избранные позиции
    let hasFavorites = false;
    
    allItems.forEach(item => {
        const itemName = item.querySelector('span').textContent.trim();
        if (favoriteNames.includes(itemName)) {
            item.classList.remove('hidden');
            item.classList.add('favorite');
            hasFavorites = true;
        } else {
            item.classList.add('hidden');
            item.classList.remove('favorite');
        }
    });
    
    // Скрываем пустые разделы
    allLists.forEach(list => {
        const visibleItems = Array.from(list.querySelectorAll('li')).filter(item => 
            !item.classList.contains('hidden')
        );
        if (visibleItems.length === 0) {
            list.classList.add('hidden');
        }
    });
    
    // Показываем сообщение если избранное пустое
    showEmptyFavoritesMessage(!hasFavorites);
    
    return hasFavorites;
}

function updateFavoriteItems(favorites) {
    const favoriteContainer = document.getElementById('favorite-items');
    if (favoriteContainer) {
        if (favorites.length === 0) {
            favoriteContainer.innerHTML = '<div class="empty-section">Нет избранных позиций</div>';
        } else {
            favoriteContainer.innerHTML = favorites.map(item => `
                <div class="favorite-item">
                    <span>${item.name} - ${item.price} ₽</span>
                    <button class="remove-favorite-btn" onclick="toggleFavorite('${item.name}', ${item.price})">Удалить</button>
                </div>
            `).join('');
        }
    }
}

function updateOrderHistory(orders) {
    const historyContainer = document.getElementById('order-history');
    if (historyContainer) {
        if (orders.length === 0) {
            historyContainer.innerHTML = '<div class="empty-section">Нет заказов</div>';
        } else {
            historyContainer.innerHTML = orders.map((order, index) => `
                <div class="order-item">
                    <strong>Заказ #${index + 1} от ${order.date}</strong>
                    <p>${order.items.map(item => `${item.name} x${item.quantity}`).join('<br>')}</p>
                    <p>Итого: ${order.total} ₽</p>
                </div>
            `).join('');
        }
    }
}

function saveOrderToHistory(cartItems, total) {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || { orders: [] };
    const orders = profile.orders || [];
    
    orders.push({
        date: new Date().toLocaleString('ru-RU'),
        items: cartItems,
        total: total
    });
    
    profile.orders = orders;
    localStorage.setItem('userProfile', JSON.stringify(profile));
    updateOrderHistory(orders);
}

// В функции checkout добавляем сохранение заказа
function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const orderDetails = cart.map(item => 
        `${item.name} - ${item.quantity} × ${item.price} ₽`
    ).join('\n');
    
    // Сохраняем заказ в историю
    saveOrderToHistory([...cart], total);
    
    alert(`Заказ оформлен! 🎉\n\n${orderDetails}\n\nИтого: ${total} ₽\n\nОжидайте SMS с подтверждением.`);
    clearCart();
    hideCart();
}

// Добавьте стили для анимаций уведомлений
const notificationStyles = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .notification {
        position: fixed;
        bottom: 100px;
        right: 0px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1005;
        transition: right 0.3s ease;
    }
    
    .notification.show {
        animation: slideIn 0.3s forwards;
    }
    
    .notification.hide {
        animation: slideOut 0.3s forwards;
    }
`;

// Добавляем стили в документ
if (!document.querySelector('#notification-styles')) {
    const styleSheet = document.createElement('style');
    styleSheet.id = 'notification-styles';
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
}





// Функция для отладки - проверяет наличие всех элементов
function debugProfile() {
    console.log('Debugging profile...');
    console.log('Profile modal:', document.getElementById('profile-modal'));
    console.log('Avatar selector:', document.getElementById('avatar-selector'));
    console.log('LocalStorage profile:', localStorage.getItem('userProfile'));
}

// Вызовем отладку при загрузке
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing...');
    initializeFavoriteButtons();
    updateCartCount();
    
    // Проверяем, что все элементы существуют
    debugProfile();
    
    // Инициализация AI помощника
    const aiInput = document.getElementById('ai-user-input');
    if (aiInput) {
        aiInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });
    }
});



function resetToEmojiAvatar() {
    const avatarElement = document.getElementById('profile-avatar');
    if (avatarElement) {
        // Устанавливаем стандартный эмодзи аватар
        const defaultEmoji = '👤';
        const pngUrl = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f464.png';
        
        avatarElement.src = pngUrl;
        avatarElement.textContent = '';
        avatarElement.style.display = 'block';
        
        const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
        profile.avatar = pngUrl;
        profile.avatarType = 'image';
        localStorage.setItem('userProfile', JSON.stringify(profile));
        
        showNotification('✅ Аватар сброшен');
        updateProfileLink();
    }
}

function isItemFavorite(itemName) {
    const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
    const favorites = profile.favorites || [];
    return favorites.some(fav => fav.name === itemName);
}








function updateFavoriteItems(favorites) {
    const favoriteContainer = document.getElementById('favorite-items');
    if (favoriteContainer) {
        if (favorites.length === 0) {
            favoriteContainer.innerHTML = '<div class="empty-section">Нет избранных позиций</div>';
        } else {
            // Ограничиваем до 5 элементов
            const limitedFavorites = favorites.slice(0, 5);
            favoriteContainer.innerHTML = limitedFavorites.map(item => `
                <div class="favorite-item">
                    <span>${item.name} - ${item.price} ₽</span>
                    <button class="remove-favorite-btn" onclick="toggleFavorite('${item.name}', ${item.price})">Удалить</button>
                </div>
            `).join('');
        }
    }
}

function updateOrderHistory(orders) {
    const historyContainer = document.getElementById('order-history');
    if (historyContainer) {
        if (orders.length === 0) {
            historyContainer.innerHTML = '<div class="empty-section">Нет заказов</div>';
        } else {
            // Ограничиваем до 5 заказов
            const limitedOrders = orders.slice(0, 5);
            historyContainer.innerHTML = limitedOrders.map((order, index) => `
                <div class="order-item">
                    <strong>Заказ #${index + 1} от ${order.date}</strong>
                    <p>${order.items.map(item => `${item.name} x${item.quantity}`).join('<br>')}</p>
                    <p>Итого: ${order.total} ₽</p>
                </div>
            `).join('');
        }
    }
}







