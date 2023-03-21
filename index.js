//Sidebar
const menuItems = document.querySelectorAll('.menu-item');
//Messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');

const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//theme 
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSize = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');

const bg1=document.querySelector('.bg-1');
const bg2=document.querySelector('.bg-2');
const bg3=document.querySelector('.bg-3');



//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach( item => {
        item.classList.remove('active');
    })
}
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';

        }
    })
})



//========================Messages===============================//
//searches chats
const searchMessage = () =>{
    const val= messageSearch.value.toLowerCase();
    message.forEach(chat => {
       let name = chat.querySelector('h5').textContent.toLowerCase(); 
       if(name.indexOf(val) != -1){
        chat.style.display ='flex';
       } else{
        chat.style.display = 'none';
       }
    })
} 


//search chat
messageSearch.addEventListener('keyup' , searchMessage);



messagesNotification.addEventListener('click' , () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display='none';

    setTimeout(()=>{
        messages.style.boxshadow = 'none';
    } , 2000);
})

//Theme
//open theme
const openthemeModel = () =>{
    themeModel.style.display = 'grid'; 
    }

    //close theme action 
    const closethemeModel = (e)=>{
        if( e.target.classList.contains('customize-theme')){

        
        themeModel.style.display ='none';
        }
    }

    //close theme 
    themeModel.addEventListener('click',closethemeModel)
    theme.addEventListener('click', openthemeModel);


/////////////////////Font////////////////////////////////////////////////////////

    //rempve active class from spans or font size selector
    const removeSizeSelector = () => {
        fontSize.forEach(size => {
            size.classList.remove('active');
        })
    }

    //===============fontSize ===========//
    fontSize.forEach(size => {
       

        size.addEventListener('click', () => {
            removeSizeSelector();

            let fontSize;
            size.classList.toggle('active');

            
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left ', '5.4rem');
            root.style.setProperty(' ----sticky-top-right ', '5.4rem');

        }else if (size.classList.contains('font-size-2')){
            fontSize= '13px';
            root.style.setProperty('----sticky-top-left ', '5.4rem');
            root.style.setProperty(' ----sticky-top-right ', '-7rem');

        }else if (size.classList.contains('font-size-3')){
            fontSize= '16px';
            root.style.setProperty('----sticky-top-left ', '-2rem');
            root.style.setProperty(' ----sticky-top-right ', '-17rem');

        }else if (size.classList.contains('font-size-4')){
            fontSize= '19px';
            root.style.setProperty('----sticky-top-left ', '-5rem');
            root.style.setProperty(' ----sticky-top-right ', '-25rem');

        }else if (size.classList.contains('font-size-5')){
            fontSize= '22px';
            root.style.setProperty('----sticky-top-left ', '-12rem');
            root.style.setProperty(' ----sticky-top-right ', '-35rem');
        }


        
        // change font size of the root html element 
        document.querySelector('html').style.fontSize = fontSize;

        })

    })


    //remove active class 
    const changeActiveColorClass = () => {
        colorPalette.forEach(colorPicker => {
            colorPicker.classList.remove('active');
        })
    }

    /////// change primary Color////////////
colorPalette.forEach(color => {
    color.addEventListener('click' , () =>{
        let primaryHue;
        changeActiveColorClass();
        if (color.classList.contains('color-1')){
            primaryHue = 252;
        } else if (color.classList.contains('color-2')){
            PrimaryHue =52;
        } else if (color.classList.contains('color-3')){
            primaryHue=352;
        } else if (color.classList.contains('color-4')){
            primaryHue=152;
        } else if (color.classList.contains('color-5')){
            primaryHue=202;
        }

        color.classList.add('active');

        root.style.setProperty(' --primary-color-hue', primaryHue);

    })
})

//////////////////Background//////////////////////
let lightColorLightness ;
let whiteColorLightness;
let darkColorLightness;

//changebg
const changebg = () =>{
    root.style.setProperty(' --light-color-lightness', lightColorLightness);
    root.style.setProperty('   --white-color-lightness', whiteColorLightness);
    root.style.setProperty(' --dark-color-lightness', darkColorLightness);

}


bg1.addEventListener('click', () => {
//add active class
bg1.classList.add('active');

//remove active class
bg2.classList.remove('active');
 bg3.classList.remove('active');

 //remove customized changes from local storage
 window.location.reload();
});

bg2.addEventListener('click', () =>{
    darkColorLightness='95%';
    whiteColorLightness= '20%';
    lightColorLightness = '15%';

    //add active 
    bg2.classList.add('active');

    //remove active class from others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changebg();
});

bg3.addEventListener('click', () =>{
    darkColorLightness='95%';
    whiteColorLightness= '10%';
    lightColorLightness = '0%';

    //add active 
    bg3.classList.add('active');

    //remove active class from others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changebg();
});













//////////Friend Request/////////////
const addBtn = document.querySelectorAll('#add');
const delbtn = document.querySelectorAll('#del');
 

addBtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.parentElement.style.display='none' 
    })    
});

delbtn.forEach(element => {
    element.addEventListener('click',()=>{
        element.parentElement.parentElement.style.display='none'
    })
});