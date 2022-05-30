Список контактов на Node.js.
Позволяет отчитывать польный список записанных контактов, добавлять новые контакты, находить контакты по идентификатору и удалять.

# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
http://joxi.net/a2X1LL7FQ9LlbA

# Получаем контакт по id
node index.js --action get --id 5
http://joxi.ru/D2Pall6CwEXwXA

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
http://joxi.ru/1A5qMMRt4xE4YA

# Удаляем контакт
node index.js --action remove --id=3
http://joxi.ru/DrlwGGEiK6QKzA