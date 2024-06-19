const input= document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function(){

    if (input.value.trim() !== '') { 
        const entries = document.createElement('li');
        const delete_bottom = document.createElement('button')
        entries.textContent=input.value;
        delete_bottom.textContent= '❌';

        entries.append(delete_bottom);
        list.append(entries);

        input.value = '';
        input.focus();

        delete_bottom.addEventListener('click', function(){
            list.removeChild(entries);
            input.focus();
            
        })

}})
