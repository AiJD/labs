var Test = {
    addTitle: function() {
        var title=document.createElement('div');
        title.className="col-xs-12";
        title.innerHTML = "<h3>Тест по программированию</h3>";
        title.classList.add('text-center');
        document.body.appendChild(title);
    },
    addForm:function(){
        var form=document.createElement('form');
        form.setAttribute("action","");
        form.className="col-xs-12";
        document.body.appendChild(form);
    },
    addFormGroup:function(){
        var form=document.querySelector('form');
        for(var i=0;i<3;i++)
        {
            var ulElement=document.createElement('ul');
            ulElement.className="col-xs-12";
            var text=document.createElement('div');
            text.className="col-xs-12";
            text.innerHTML = "<h4>"+(i+1).toString()+". Вопрос №"+(i+1)+"</h4>";
            ulElement.appendChild(text);
            for(var j=0;j<3;j++){
                var liElement=document.createElement('li');
                liElement.className="col-xs-12";
                liElement.innerHTML = "<h5><input type='checkbox'> Вариант ответа №"+(j+1).toString()+"</h5>";
                liElement.style.listStyleType = 'none';
                liElement.style.margin = '0 0 -12px 1.5%';
                ulElement.appendChild(liElement);
            }
            form.appendChild(ulElement);
        }
    },
    addButton:function(){
        var form=document.querySelector('form');
        var divForButton=document.createElement('div');
        divForButton.className="col-xs-12";
        divForButton.style.textAlign="center";
        var button=document.createElement("button");
        button.className="btn btn-info";
        button.style.color="black";
        button.style.fontWeight="bold";
        button.style.borderRadius='0';
        button.style.border="2.5px solid black";
        button.style.backgroundColor="#cfe2f3";
        button.style.padding="0 3%";
        button.type="submit";
        button.innerHTML = "<h4>Проверить мои результаты</h4>";
        divForButton.appendChild(button);
        form.appendChild(divForButton);
    }
};
Test.addTitle();
Test.addForm();
Test.addFormGroup();
Test.addButton();