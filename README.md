# webpack
Изучение сборки проекта через webpack
# 

[Ссылка на рабочую версию проекта](https://rodin-anatoliy.github.io/webpack/)

Версия проекта v0.6

Дизайн и визуальное оформление предоставлены [Яндекс.Практикум](https://praktikum.yandex.ru/)

## В проекте реализовано:
- Настройка двух сборок сборку build и dev.
- Хеширование CSS и JS-файлов.
- Автоматическое обновление страницы проекта при сохранении файлов (hot reload).
- Оптимизирована работа с изображениями (плагины file-loader и image-webpack-loader).
- Оптимизация JS кода (траспиляция через babel).
- Оптимизация CSS кода.
- Подключение статических изображений.
- Оптимизация работы со шрифтами.

## Пакеты из NPM, использованные в проекте:
**Для работы с кодом:**
- babel-loader,
- babel-cli,
- babel-core,
- babel-preset-env,
- core-js,
- babel-polyfill,
- mini-css-extract-plugin,
- optimize-css-assets-webpack-plugin,
- css-loader,
- html-webpack-plugin,
- postcss-loader,
- autoprefixer,
- cssnano.
**Для работы вебпака:**
- gh-pages,
- webpack-md5-hash,
- webpack,
- webpack-cli,
- webpack-dev-server,
path.
**Для работы с изображениями:**
- file-loader,
- image-webpack-loader.

## Для установки:
1. [Склонировать](https://git-scm.com/book/ru/v2/Appendix-C%3A-%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B-Git-%D0%9A%D0%BB%D0%BE%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B5%D0%B2) репозиторий на локальный компьютер
1. После распаковки, в директории проекта выполнить команду: 

    ```npm install``` 
(должен быть установлен [Node.js](https://nodejs.org/en/))
2. После установки зависимостей,в директории проекта для режима разработкм (dev mode), выполнить:
    ```npm run dev```
3. Для получения production (prod mode) версии проекта в директории проекта, выполнить:
    ```npm run build```
4. Созданная папка **dist** является production версией проекта
