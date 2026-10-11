# Pasha33Pro — Portfolio

Full-Stack Developer & IoT Engineer Portfolio

## 🚀 Деплой на GitHub Pages

### Вариант 1: Автоматический деплой через GitHub Actions

1. Создай репозиторий на GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: portfolio"
   git branch -M main
   git remote add origin https://github.com/ТВОЙ_ЛОГИН/ТВОЙ_РЕПО.git
   git push -u origin main
   ```

2. В настройках репозитория:
   - Settings → Pages
   - Source: **GitHub Actions**
   - Workflow уже настроен в `.github/workflows/deploy.yml`

3. Готово! Сайт будет доступен по адресу:
   ```
   https://ТВОЙ_ЛОГИН.github.io/ТВОЙ_РЕПО/
   ```

### Вариант 2: Прямой деплой из ветки gh-pages

1. Создай репозиторий и запуш код (как в варианте 1)

2. В настройках репозитория:
   - Settings → Pages
   - Source: **Deploy from a branch**
   - Branch: **main** / **root**

3. Готово!

### Вариант 3: Локальный просмотр

Просто открой `index.html` в браузере — сайт работает без сервера!

## 📁 Структура проекта

```
├── index.html      — Главная страница
├── styles.css      — Все стили
├── script.js       — Интерактивность
└── README.md       — Этот файл
```

## 🛠 Технологии

- Чистый HTML5
- CSS3 (анимации, градиенты, адаптив)
- Vanilla JavaScript (без фреймворков)
- Google Fonts (JetBrains Mono, Inter)

## 📝 Кастомизация

### Изменить контакты
Открой `index.html` и найди секцию `#contact`. Замени:
- Email: `hello@pasha33pro.dev`
- Telegram: `@pasha33pro`
- GitHub: `Pasha33Pro`

### Добавить проекты
Открой `script.js` и найди массив `projects`. Добавь новый объект:
```javascript
{
  title: 'Название проекта',
  description: 'Описание проекта',
  tags: ['Тег1', 'Тег2'],
  category: 'iot', // или 'web', 'backend'
  icon: '🚀',
  gradient: 'linear-gradient(90deg, #color1, #color2)',
  iconBg: 'linear-gradient(135deg, rgba(...), rgba(...))',
  status: 'Live', // или 'Beta', 'Dev'
  statusClass: 'status-live' // или 'status-beta', 'status-dev'
}
```

### Изменить roadmap
Открой `index.html` и найди секцию `#roadmap`. Добавь новый блок `timeline-item`.

## 🌐 Деплой на другие хостинги

### Netlify
1. Зайди на [netlify.com](https://netlify.com)
2. Перетащи папку с проектом
3. Готово!

### Vercel
```bash
npm i -g vercel
vercel
```

### Любой хостинг (beget, timeweb, reg.ru)
Загрузи через FTP:
- `index.html`
- `styles.css`
- `script.js`

## 📄 Лицензия

MIT © Pasha33Pro

---

Built with ❤️ and ☕
