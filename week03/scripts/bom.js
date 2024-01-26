//declare three const variables
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


//eventlistner for the button 
button.addEventListener('click', function() {//check if the input is empty
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});


//local storage

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    // add text to the list element
    li.textContent = item;
    deleteButton.textContent = 'x'; ///get red delete symbol
    deleteButton.classList.add('delete');
    // append delete button to list element
    li.append(deleteButton);

    // append list element to list
    list.append(li);

    //add event listener for delete button
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    }); 
}

function setChapterList() {
        localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
