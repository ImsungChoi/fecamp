var button = document.querySelector('button');
var ul = document.querySelector('ul');

button.addEventListener(
	'click',
	function (event) {
		var li = document.createElement('li');
		li.innerHTML = `추가된 시각 : <strong>${new Date().toString() }</strong>`;
		li.addEventListener('click', function () {
			li.querySelector('strong').style.color = '#0f0';
		});
		ul.appendChild(li);	
});
