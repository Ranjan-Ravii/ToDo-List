const addbtn = document.querySelector('.addToList');
const inputText = document.querySelector('.inputBox');
const container = document.querySelector('.container');
const dateTime = document.querySelector(('.dateTime'))


function showDateTime(){
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');  // Pad minutes with leading zero if necessary
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;  // Convert hour '0' to '12'

    const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes} ${ampm}`;

    dateTime.textContent = `Added on: ${formattedDate} at ${formattedTime}`;
    dateTime.style.display = 'block'
    dateTime.style.margin = "5px 0px 0px 10px"
}

function checkIfListEmpty(){
    if(container.children.length === 1){
        dateTime.style.display = "none"
    }
}

function addToDoItems(){
    const inputTextValue = inputText.value;

    if (inputTextValue === '') {
        alert("Enter To-do");
    } else {
        const newDiv = document.createElement('div');
        newDiv.classList.add('newDiv'); 


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');  

        const newText = document.createElement('span');
        newText.textContent = inputTextValue; 
        newText.classList.add('newText');  

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deletebtn'); 
       

        newDiv.appendChild(checkbox);
        newDiv.appendChild(newText);
        newDiv.appendChild(deleteBtn);
        container.appendChild(newDiv);

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                newDiv.style.textDecoration = 'line-through';
            } else {
                newDiv.style.textDecoration = 'none';
            }
        });

        deleteBtn.addEventListener('click', function () {
            newDiv.remove();
            checkIfListEmpty()
        });


        newDiv.addEventListener('mouseenter', ()=>{
            deleteBtn.style.display = "block"
        })
        newDiv.addEventListener('mouseleave', ()=>{
            deleteBtn.style.display = "none"
        })
    }

    inputText.value = '';
}


addbtn.addEventListener('click', function(){
    addToDoItems()
    showDateTime()

}
);

inputText.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        addToDoItems();
        showDateTime()
    }
})