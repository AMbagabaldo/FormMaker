const insert = () => {

    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
    }

}
const appendText = (label = "Default") => {
    let elem = document.createElement('input')
    elem.setAttribute('placeholder', label)
    elem.setAttribute('class', 'form-control mt-2')
  
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn ml-2 mt-2 d-none')
    remelem.textContent = 'Discard'
    remelem.addEventListener('click', () => {
      elem.remove()
      remelem.remove()
    })
  
    let container = document.createElement('div')
    container.setAttribute('class', 'd-flex align-items-center')
    container.append(elem, remelem)
  
    elem.addEventListener('input', () => {
      if (elem.value.length > 0) {
        remelem.classList.remove('d-none')
      } else {
        remelem.classList.add('d-none')
      }
    })
  
    document.querySelector('#display').append(container)
  }
  

const appendButton = (label = "Default") => {
    let elem = document.createElement('button');
    elem.setAttribute('class', 'btn btn-primary form-control mt-2');
    elem.textContent = label;
  
    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none ms-2 mt-2')
    remelem.setAttribute('style', 'font-size: 0.8rem; padding: 0.25rem 0.5rem;')
    remelem.textContent = 'Discard'    
    remelem.addEventListener('click', () => {
      container.remove();
    });
  
    let container = document.createElement('div');
    container.setAttribute('class', 'input-group');
    container.append(elem, remelem);
  
    elem.addEventListener('click', () => {
      remelem.classList.toggle('d-none');
    });
  
    document.querySelector('#display').append(container);
  }
  


const appendCheckbox = (label = "Default") => {
    let count = 0
    let elem = document.createElement('input');
    elem.setAttribute('type', 'checkbox');
    elem.setAttribute('class', 'form-check-input mt-2 d-flex');
    
    let elemLabel = document.createElement('label');
    elemLabel.setAttribute('for', label);
    elemLabel.textContent = label;
    
    let container = document.createElement('div');
    container.setAttribute('class', 'form-check');
    container.append(elem, elemLabel);
    container.style.alignItems = 'center';

    let remelem = document.createElement('button')
    remelem.setAttribute('class', 'btn btn-danger delete-btn d-none ms-1')
    remelem.textContent = 'Discard'
    remelem.addEventListener('click', () => {
        elem.remove()
        remelem.remove()
        elemLabel.remove()
        container.remove()
    })

    document.querySelector('#display').append(container);
    document.querySelector('#display').append(remelem)

    elemLabel.addEventListener('click', () => {
        if (count < 1) {
            remelem.setAttribute('class', 'btn btn-danger delete-btn d-block')
        }
    })
    
  }

