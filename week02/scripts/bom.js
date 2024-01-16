//declare three const variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


//eventlistner for the button
button.addEventListener('click', function() {//check if the input is empty
    if (input.value === '') {
        window.alert('Please enter a book and chapter.');
        input.focus();}
    else {
        // create the list element and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // add text to the list element
        li.textContent = input.value;
        deleteButton.textContent = 'x'; ///get red delete symbol

        // append delete button to list element
        li.append(deleteButton);

        // append list element to list
        list.append(li);

        //add event listener for delete button
        deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
        });

        input.value = '';
    }
});

