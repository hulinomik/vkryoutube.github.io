function calculateIncome() {
    var views = parseInt(document.getElementById("views-input").value);
    var subs = parseInt(document.getElementById("subs-input").value);
    var topic = document.getElementById("topic-select").value;
    
    var income = calculateIncomeFromViews(views, topic);
    var newSubs = calculateNewSubscribers(views, subs);
    var viewsIncrement = calculateViewsIncrement(views); // Рассчитываем примерный прирост просмотров
    
    var table = document.getElementById("result-table");
    var row = table.insertRow(-1);
    var viewsCell = row.insertCell();
    viewsCell.innerHTML = views;
    var viewsCell = row.insertCell();
    viewsCell.innerHTML = "+" + viewsIncrement; // Добавляем знак "+" перед приростом просмотров
    viewsCell.classList.add("green-text"); // Добавляем класс для зеленого цвета
    row.insertCell().innerHTML = subs;
    row.insertCell().innerHTML = newSubs;
    row.insertCell().innerHTML = "$" + income;
    row.insertCell().innerHTML = getTopicName(topic);

    // кнопка очистить данные в таблице

    var table = document.getElementById("result-table");
    var row = table.insertRow(-1);

    var clearButtonCell = row.insertCell();
    var clearButton = document.createElement("button");
    clearButton.innerHTML = "Очистить";
    clearButton.classList.add("clear-button");
    clearButton.addEventListener("click", clearTable);
    clearButtonCell.appendChild(clearButton);

    // График и диаграмма
  
       
    
    // круговой график

  

    }
  
  
  function calculateViewsIncrement(views) {
    // Рассчитываем примерный прирост просмотров, например, на основе предыдущих данных
    // Здесь вы можете добавить свою логику расчета
    var increment = Math.floor(views * 0.1); // Например, 10% от просмотров
    return increment;
  }
  

  function calculateIncomeFromViews(views, topic) {
    var income = 0;
    
    switch (topic) {
      case "1": // Для детей
        income = (views / 1000)* 0.5; // Примерный доход для тематики "Для детей"
        break;
      case "2": // Развлечения
        income = (views / 1000)* 2; // Примерный доход для тематики "Развлечения"
        break;
      case "3": // Бизнес, Финансы
        income = (views / 1000)* 8; // Примерный доход для тематики "Бизнес, Финансы"
        break;
      case "4": // Автомобили, Технологии
        income = (views / 1000)* 4,5; // Примерный доход для тематики "Автомобили, Технологии"
        break;
      default:
        break;
    }
    
    return income.toFixed(2); // Округляем до двух знаков после запятой
  }
  
  function calculateNewSubscribers(views, subs) {
    var newSubs = views * 0.1 + subs * 0.2; // Примерное количество новых подписчиков
    return newSubs.toFixed(0); // Округляем до целого числа
  }
  
  function getTopicName(topic) {
    switch (topic) {
      case "1":
        return "Для детей";
      case "2":
        return "Развлечения";
      case "3":
        return "Бизнес, Финансы";
      case "4":
        return "Автомобили, Технологии";
      default:
        return "";
    }
  }
  
  function clearTable() {
    var table = document.getElementById("result-table");
    // Удаление всех строк из таблицы
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  }  

  function downloadTable() {
    var table = document.getElementById("result-table");
    var csvContent = "data:text/csv;charset=utf-8,";
    
    for (var i = 0; i < table.rows.length; i++) {
      var row = table.rows[i];
      var rowData = [];
      
      for (var j = 0; j < row.cells.length; j++) {
        rowData.push(row.cells[j].innerHTML);
      }
      
      var csvRow = rowData.join(",");
      csvContent += csvRow + "\r\n";
    }
    
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "statistics.csv");
    document.body.appendChild(link); // Required for Firefox
    link.click();
  }

// График и диаграмма


  
// круговой график
