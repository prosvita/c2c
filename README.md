# Call to Crimea site

Документи написані у форматі [Markdown Syntax](http://daringfireball.net/projects/markdown/syntax) та можуть використовувати [Markdown Extended specifications](http://manifest.aboutmde.org/).

## Install

Залежності:

  - git
  - git-lfs
  - npm
  - nodejs@4
  - nginx

```bash
git lfs clone git@github.com:prosvita/c2c.git
cd c2c
npm install
```

## Development

```bash
npm start
```

## Make distributive

```bash
npm run clean
npm install --production
npm run build
npm run dist
npm run gemini-dist
```

> FIXIT: Перевірка в freeze файлів з нульовою довжиною

## Publish

> FIXIT: Перевірка ревізії, щоб переконатися, що дистрибутив був опублікований

## Testing

Встановлення залежностей:

```bash
sudo npm install -g selenium-standalone
sudo selenium-standalone install
```

Запуск Selenium Server у окремому терміналі для запуску тестів в локальних браузерах:

```bash
selenium-standalone start
```

Локальний запуск gemini-тестів:

```bash
npm run gemini
```

Тестування дистрибутиву (розгортає дистрибутив з архіву у тимчасову директорію):

```bash
npm run gemini-dist
```

Запуск тестів на зовнішньому сайті:

  - за посиланням на production

    ```bash
    YENV=production npm run configs
    npm run gemini-site
    ```

  - за посиланням на beta

    ```bash
    YENV=testing npm run configs
    npm run gemini-site
    ```

  - за посиланням користувача

    ```bash
    BASEURL=http://somehost.tld/ npm run gemini-site
    ```

Є можливість відлагодження тестів під час розробки:

```bash
# term 1
selenium-standalone start
# term 2
npm start
# term 3
npm install gemini-gui
gemini-gui
```

## Environment

  - `YENV` — визначає середовище зборки. Допустимі значення: `development|production|testing`. Встановлюється перед командою `npm install`, чи `npm run configs`. Остання перемикає середовище зборки.
  - `BASEURL` — посилання на сайт який тестується gemini.
  - `GRIDURL` — посилання на Selenium Server чи Selenium Grid.

