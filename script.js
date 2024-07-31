const inputtext=document.getElementById('inputtext');
const image=document.getElementById('image');
let imge=document.getElementById('imge');
const api="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let link;
function generate(){
    if(inputtext.value!="")
    {
        link=api+inputtext.value;
        image.setAttribute('src',link);
        imge.classList.add('newclass1');
        imge.style.display="flex";
        imge.style.justifyContent="center";
        imge.style.alignItems="center";
    }
    else{
        alert("Enter the data..........?");
        imge.remove();
        inputtext.style.marginBottom="40px"
    }
}