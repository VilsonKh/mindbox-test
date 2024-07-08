# Тестовое задание для вакансии Frontend-разработчика

Спасибо за предоставленную возможность принять участие в отборе на данную вакансию. В этом репозитории содержится тестовое задание, выполненное мной для оценки моих навыков и подходов к разработке и тестированию кода.

## Описание функциональности проекта

Данное приложение представляет собой простой и интуитивно понятный To-Do список. Основные функциональные возможности включают:

- **Добавление задач**: Пользователь может добавлять новые задачи, вводя текст в поле ввода и нажимая клавишу "Enter".
- **Изменение статуса задач**: Пользователь может отметить задачу как выполненную или активную, кликая по элементу списка.
- **Фильтрация задач**: Пользователь может фильтровать задачи по всем, активным и завершённым.
- **Удаление завершённых задач**: Пользователь может удалить все завершённые задачи одним кликом.
- **Анимация элементов**: Задачи добавляются и удаляются с плавной анимацией благодаря использованию Framer Motion.
- **Сохранение задач**: Список задач сохраняется в `localStorage`, что позволяет сохранять данные между сессиями.

## Использованные технологии

В проекте используются следующие технологии и инструменты:

- **React**: для построения интерфейса пользователя.
- **TypeScript**: для статической типизации и повышения качества кода.
- **Vite**: современный инструмент для сборки, который обеспечивает быструю пересборку и HMR.
- **Framer Motion**: для добавления анимаций компонентам.
- **CSS Modules**: для стилизации компонентов с использованием подхода с локальной областью видимости стилей.
- **Vitest**: для модульного тестирования компонентов и функциональности.
- **Testing Library**: для тестирования компонентов в условиях, максимально приближенных к реальным.

## Тестирование

Для обеспечения качества кода и корректности работы приложения применяется модульное тестирование:

- **Vitest** используется для запуска и управления тестами, включая мокирование и асинхронное тестирование.
- **Testing Library** предоставляет удобные API для работы с DOM, что позволяет тестировать компоненты в условиях, близких к реальным пользовательским сценариям.

## Установка и запуск проекта

Для установки и локального запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий:
   ```
    git clone https://github.com/your-username/your-project-name.git
```
2. Установите зависимости:
    ```
    npm install
```
3. Запустите проект:
    ```
  npm run start
```
4. Для запуска тестов: 
    ```
npm run test
```

  
