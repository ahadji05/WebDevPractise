'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme") {
        document.textContent = "Dark";
    } else {
        document.textContent = "Light";
    }
    console.log('current class name: ' + className);

    /* Read 'name' from input with id=btn_submit_name */
    let name = document.getElementById('btn_submit_name').value;
    console.log('name: ' + name);

    /* Write 'name' to ouput with id=output-name */
    document.getElementById('output_name').innerText = name;
});
