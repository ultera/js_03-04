/** 
* Генерирует страницу HTML
*
* @param {number} Количество вопросов, число (округляется вниз).
* @param {number} Количество вариантов ответа, число (округляется вниз).
*/

var dynamicHTML = {
	createHTML: function(m, n) {
		if(this.isInteger(m) && this.isInteger(n)) {
			m = parseInt(m);
			n = parseInt(n);
			this.crContainer();
			this.crHeader();
			this.crBox(m, n);
			this.crButton();
		}
		else {
			var element = document.createElement('p');
			document.body.appendChild(element);
			element.className = "text-center";
			element.innerHTML = '<h3>Введенные значения ' + m + ' и ' + n + 
								' не являются числами</h3>';
		}
	},
	crContainer: function() {
		var element = document.createElement('div');
		var parentElement = document.body;
		element.className = "container";
		parentElement.appendChild(element);
	},
	crHeader: function() {
		var element = document.createElement('div');
		var parentElement = document.querySelector('.container');
		element.className = "header";
		element.innerHTML = '<h4>Тест по программированию</h4>';
		parentElement.appendChild(element);
	},
	crBox: function(n, m) {
		var count = 0;
		for (var i = 0; i < n; i++) {
			var element = document.createElement('div');
			var parentElement = document.querySelector('.container');
			element.className = "box";
			parentElement.appendChild(element);
			this.crBoxHeader(i);
			
			for (var j = 0; j < m; j++) {
				this.crCheckbox(i, j);
				this.crLabel(count);
				this.crInput(count, j);
				count++;
			}
		}
	},
	crButton: function() {
		var title = 'Проверить мои результаты';
		var element = document.createElement('div');
		var parentElement = document.querySelectorAll('.container');
		element.className = "button";
		parentElement[0].appendChild(element);
		
		element = document.createElement('button');
		element.className = 'btn btn-primary';
		element.type = 'button';
		element.innerHTML = title;
		parentElement = document.querySelectorAll('.button');
		parentElement[0].appendChild(element);
	},
	crBoxHeader: function(n) {
		var nomber = n + 1;
		var element = document.createElement('div');
		var parentElement = document.querySelectorAll('.box');
		
		element.className = "box-header";
		element.innerHTML = '<h4>' + nomber + '. Вопрос №' + nomber + '</h4>';
		parentElement[n].appendChild(element);	
	},
	crCheckbox: function(n) {
		var element = document.createElement('div');
		var parentElement = document.querySelectorAll('.box');
		
		element.className = "checkbox";
		parentElement[n].appendChild(element);
	},
	crLabel: function(n) {
		var element = document.createElement('label');
		var parentElement = document.querySelectorAll('.checkbox');

		element = document.createElement('label');
		parentElement = document.querySelectorAll('.checkbox');
		parentElement[n].appendChild(element);
	},
	crInput: function(n, j) {
		var title = 'Вариант ответа №' + (j + 1);
		var element = document.createElement('input');
		var parentElement = document.querySelectorAll('label');
		
		element.type = 'checkbox';
    	element.name = '';
    	element.value = '';
		parentElement[n].appendChild(element);
		parentElement[n].appendChild(document.createTextNode(title));
	},
	isInteger: function(n){
  		return !isNaN(parseInt(n)) && isFinite(n);
	}
};

dynamicHTML.createHTML('3', '3');
