# BSTU MEAN Notes

Этот проект представляет собой простое приложение для управления заметками. Создано по мотивам стека [MEAN](https://www.ibm.com/cloud/learn/mean-stack-explained).

## С чего начать

Заберите проект к себе на компьютер.

```
$ git clone https://github.com/GitStearis/bstu-mean-notes.git
```

### Предварительно

Чтобы запустить этот проект, установите [Node](https://nodejs.org/en/download/package-manager/). Если вы хотите запускать локальную базу, прочтите гайд по установке и настройке [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/).

### Установка зависимостей

Установите все зависимости в корневой папке, повторите эту операцию в папке `./server`.

```
$ npm install
$ cd ./server && npm install
```

### Настройка

Чтобы запустить сервер локально, создайте `.env` файл в директории`./server`. Этот файл должен содержать следующие значения:

```
PORT = 3000
MONGODB_CONNECTION = "mongodb://localhost:27017/bstu-mean"
```

* `PORT` - Номер порта для локального запуска. Используйте `3000`, это стандартное решение для запуска Express сервера;
* `MONGODB_CONNECTION` - [Строка подключения](https://docs.mongodb.com/manual/reference/connection-string/) к MongoDB базе.

Клиент настраивается здесь: `./src/environments/environment.ts`. В настоящий момент там содержится только путь к API. Его определенно стоит поменять, если вы будете выносить серверную часть и разворачивать отдельно.


### Запуск

Чтобы запустить клиент и сервер на локальном хосте, впишите `npm start` в корне проекта.

```
$ npm start
```

Скрипт `npm start` запустит клиент и сервер одновременно с помощью пакета `concurrently`. Рекомендую детально рассмотреть файл `package.json`.

## Основные технологии

- [Node.js](https://github.com/nodejs/node) - Серверная среда для запуска JavaScript кода;
- [npm](https://github.com/npm/npm) - Пакетный менеджер для JavaScript зависимостей;
- [Express.js](https://github.com/expressjs/express) - Популярный Node.js фреймворк для работы с HTTP;
- [Angular CLI](https://github.com/angular/angular-cli) - CLI для быстрого старта с Angular, поддерживает генерацию компонентов и сервисов;
- [MongoDB](https://www.mongodb.com/) - NoSQL база данных;
- [Mongoose](http://mongoosejs.com/) - ODM для MongoDB.

## Разработано

* **Егор Пуйша** - [GitStearis](https://github.com/GitStearis).

