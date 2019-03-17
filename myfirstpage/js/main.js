$(document).ready(function() {	
	setInterval('show()', 1000);

	$('.task__text').on('click', function(e) {
		console.log($(e.target).text());
		$(e.target).toggleClass('done');
	});

	$('#addList').on('click', function() {
		console.log("Содали список задач");
		var titleTasksList = prompt("Введите название списка задач:");
		if(titleTasksList) {
			console.log(titleTasksList);
			$('<li>', {
				'class': 'list',
				append: $('<div>', {
					'class': 'list-header',
					append: $('<p>', {
						'class': 'list-header__title',
						text: titleTasksList
					})
					.add ($('<button>', {
						'class': 'list-header__deleteList btn',
						text: "Удалить список"
					}))
					.add ($('<button>', {
						'class': 'list-header__addTask btn',
						text: "Добавить задачу",
						on: {
							click: function(e) {
								console.log("Содали новую задачу");
								var titleTask = prompt("Введите название задачи:");
								if(titleTask) {
									console.log(titleTask);
									$('<li>', {
										'class': 'task',
										append: $('<div>', {
											class: 'task__text',
											append: $('<span>', {
												text: titleTask,
												on: {
													click: function(e) {
														console.log($(e.target).text());
														$(e.target).toggleClass('done');
													}
												}
											})
										})				
									}).appendTo($(e.target).closest('.list-header').siblings('.list-content').children('.tasks'));			
								} else {
									console.log("Задача не создана - не корректно задано название задачи!");
								}
							}
						}
					}))
				})
				.add ($('<div>', {
					'class': 'list-content',
					append: $('<ul>', {
						'class': 'tasks'
					})
				}))
			}).appendTo('.todo-lists');			
		} else {
			console.log("Список не создан - не корректно задано название списка!");
		}
	});

	$('.list-header__addTask').on('click', function(e) {
		console.log("Содали новую задачу");
		var titleTask = prompt("Введите название задачи:");
		console.log($(e.taget).closest('.tasks'));
		if(titleTask) {
			console.log(titleTask);
			$('<li>', {
				'class': 'task',
				append: $('<div>', {
					class: 'task__text',
					append: $('<span>', {
						text: titleTask,
						on: {
							click: function(e) {
								console.log($(e.target).text());
								$(e.target).toggleClass('done');
							}
						}
					})
				})				
			}).appendTo($(e.target).closest('.list-header').siblings('.list-content').children('.tasks'));			
		} else {
			console.log("Задача не создана - не корректно задано название задачи!");
		}
	});
});

function show() {
		$.ajax({
			url: "http://192.168.1.2/testphp.ru/main.php",
			cache: false,
			success: function(html) {
				$('#time').html(html);
			}
		});
	}

