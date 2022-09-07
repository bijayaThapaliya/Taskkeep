window.addEventListener('load', ()=>{
    const form= document.querySelector("#new-form");
    const input=document.querySelector("#new-form-input");
    const list_el=document.querySelector('#tasks');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        
        const text = input.value;
        
        if(!text){
            alert("Please enter text");
            return;
        }
        
         console.log(text);
         const task_el=document.createElement('div');
         task_el.classList.add("tasks");

         const task_el_content=document.createElement('div');
         task_el_content.classList.add('content');
         //task_el_content.innerText = text;


         task_el.appendChild(task_el_content);
         list_el.appendChild(task_el);

         const task_input_el=document.createElement('input');
         task_input_el.classList.add('text');
         task_input_el.type='text';
         task_input_el.value=text;
         task_input_el.setAttribute('readonly', 'readonly');

         task_el_content.appendChild(task_input_el);
         
         const action_el=document.createElement('div');
         action_el.classList.add('action');

         const action_edit=document.createElement('button');
         action_edit.classList.add('edit');
         action_edit.innerText="Edit";

         const action_delete=document.createElement('button');
         action_delete.classList.add('delete');
         action_delete.innerText="Delete";

         action_el.appendChild(action_edit);
         action_el.appendChild(action_delete);

         list_el.appendChild(action_el);
         task_el.appendChild(action_el);

         input.value='';

        action_edit.addEventListener('click', (e)=>{
            if(action_edit.innerText.toLowerCase()=="edit"){
                action_edit.innerText="Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            }else{
                task_input_el.setAttribute("readonly", "readonly");
                // action_edit.classList.add('edit');
                action_edit.innerText="Edit";
    
            }
        });
        action_delete.addEventListener('click', (e)=>{
            list_el.removeChild(task_el);
        });







         
    });



});