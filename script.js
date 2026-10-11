// ===== TYPING EFFECT =====
(function() {
  const text = 'Full-Stack Developer & IoT Engineer';
  const el = document.getElementById('typedText');
  let i = 0;
  function type() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      setTimeout(type, 60);
    }
  }
  setTimeout(type, 800);
})();

// ===== MOBILE MENU =====
(function() {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
})();

// ===== SCROLL REVEAL =====
(function() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
})();

// ===== NAVBAR SCROLL EFFECT =====
(function() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
    lastScroll = currentScroll;
  });
})();

// ===== PROJECTS DATA & RENDERING =====
(function() {
  const projects = [
    {
      title: 'Smart Home Hub',
      description: 'Централизованная IoT-платформа для управления 50+ умными устройствами. Мониторинг в реальном времени, автоматизация и голосовое управление.',
      tags: ['IoT', 'React', 'Node.js', 'MQTT', 'ESP32'],
      category: 'iot',
      icon: '🔌',
      gradient: 'linear-gradient(90deg, #22c55e, #10b981)',
      iconBg: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.2))',
      status: 'Live',
      statusClass: 'status-live'
    },
    {
      title: 'Industrial Monitoring Dashboard',
      description: 'Визуализация данных сенсоров для производства в реальном времени. Предиктивное обслуживание и историческая аналитика.',
      tags: ['IoT', 'React', 'D3.js', 'InfluxDB', 'LoRa'],
      category: 'iot',
      icon: '📡',
      gradient: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
      iconBg: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(6,182,212,0.2))',
      status: 'Live',
      statusClass: 'status-live'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Полнофункциональный маркетплейс с обработкой платежей, управлением инвентарём и AI-рекомендациями.',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      category: 'web',
      icon: '🛒',
      gradient: 'linear-gradient(90deg, #a855f7, #ec4899)',
      iconBg: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))',
      status: 'Live',
      statusClass: 'status-live'
    },
    {
      title: 'Weather Station Network',
      description: 'Распределённый мониторинг погоды с кастомными сенсорными нодами. Агрегация данных и API прогнозирования.',
      tags: ['IoT', 'Python', 'Raspberry Pi', 'Grafana'],
      category: 'iot',
      icon: '🌤',
      gradient: 'linear-gradient(90deg, #eab308, #f97316)',
      iconBg: 'linear-gradient(135deg, rgba(234,179,8,0.2), rgba(249,115,22,0.2))',
      status: 'Beta',
      statusClass: 'status-beta'
    },
    {
      title: 'Task Management SaaS',
      description: 'Коллаборативный инструмент управления проектами с real-time обновлениями, Kanban-досками и аналитикой.',
      tags: ['React', 'Socket.io', 'MongoDB', 'Docker'],
      category: 'web',
      icon: '📋',
      gradient: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      iconBg: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2))',
      status: 'Live',
      statusClass: 'status-live'
    },
    {
      title: 'Smart Agriculture System',
      description: 'Автоматизированное орошение и контроль среды для теплиц. Сенсоры почвы, адаптация к погоде, мобильные уведомления.',
      tags: ['IoT', 'Arduino', 'Flutter', 'Firebase'],
      category: 'iot',
      icon: '🌱',
      gradient: 'linear-gradient(90deg, #14b8a6, #22c55e)',
      iconBg: 'linear-gradient(135deg, rgba(20,184,166,0.2), rgba(34,197,94,0.2))',
      status: 'Dev',
      statusClass: 'status-dev'
    },
    {
      title: 'API Gateway Service',
      description: 'Микросервисный шлюз с rate limiting, аутентификацией, трансформацией запросов и логированием.',
      tags: ['Go', 'gRPC', 'Docker', 'K8s'],
      category: 'backend',
      icon: '🖥',
      gradient: 'linear-gradient(90deg, #ef4444, #f43f5e)',
      iconBg: 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(244,63,94,0.2))',
      status: 'Live',
      statusClass: 'status-live'
    },
    {
      title: 'Portfolio CMS',
      description: 'Headless CMS с поддержкой markdown, оптимизацией изображений и мультиканальной доставкой контента.',
      tags: ['Next.js', 'Sanity', 'Vercel', 'TypeScript'],
      category: 'web',
      icon: '🗄',
      gradient: 'linear-gradient(90deg, #06b6d4, #3b82f6)',
      iconBg: 'linear-gradient(135deg, rgba(6,182,212,0.2), rgba(59,130,246,0.2))',
      status: 'Live',
      statusClass: 'status-live'
    }
  ];

  const grid = document.getElementById('projectsGrid');

  function renderProjects(filter) {
    grid.innerHTML = '';
    const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
    
    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = 'project-card reveal visible';
      card.style.animationDelay = `${idx * 0.05}s`;
      card.innerHTML = `
        <div class="project-bar" style="background: ${project.gradient}"></div>
        <div class="project-body">
          <div class="project-top">
            <div class="project-icon" style="background: ${project.iconBg}">${project.icon}</div>
            <span class="project-status ${project.statusClass}">${project.status}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          <div class="project-links">
            <a href="#" class="link-source">⚡ Source</a>
            <a href="#" class="link-demo">↗ Demo</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // Initial render
  renderProjects('all');

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });
})();

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
