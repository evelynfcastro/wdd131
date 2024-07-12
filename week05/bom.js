const input= document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
    
});
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        // Display the input value in the list
        displayList(input.value);
        
        // Add the input value to the chaptersArray
        chaptersArray.push(input.value);
        
        // Presumably a function to update some chapter list, which needs to be defined
        setChapterList();

        // Clear the input field and set focus back to it
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    // Create a list item element
    const entry = document.createElement('li');
    
    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    
    // Set the text of the list item to the provided item
    entry.textContent = item;
    
    // Append the delete button to the list item
    entry.appendChild(deleteButton);
    
    // Append the list item to the list
    list.appendChild(entry);

    // Add event listener to the delete button to remove the list item
    deleteButton.addEventListener('click', function() {
        list.removeChild(entry);
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

