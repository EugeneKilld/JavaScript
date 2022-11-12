$.createXHRRequest = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
        // Подписываемся на изменение состояния запроса
        xhr.onreadystatechange = function() { 
            // Проверка, завершилось ли выполнение запроса?
            if (xhr.readyState !== 4) return; 
    
            if (xhr.status === 200) {
                // Обработка удачного выполнения запроса
                resolve(xhr.response)
            } else {
                // Обработка ошибки
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }
        };
    
        // Отправляем запрос
        xhr.send();
    })
}

