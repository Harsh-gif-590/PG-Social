
const menuItems = document.querySelectorAll('.menu-item');
const notification = document.querySelector('#notification');
const notificationPopup = notification.querySelector('.notification-popup');
const notificationCount = document.querySelector('#notification .notification-count');

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

// add click events
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        // toggle notification popup
        if (item.id !== 'notification') {
            notificationPopup.style.display = 'none';
        } else {
            notificationPopup.style.display = 'block';
            if (notificationCount) {
                notificationCount.style.display = 'none';
            }
        }
    });
});

//============MESSAGES==========
const messageNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages'); // section jahan saare messages hain

messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    // Hide notification count
    const count = messageNotification.querySelector('.notification-count');
    if (count) count.style.display = 'none';

    // Remove highlight after 2 seconds
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});
// search chat
const messageSearch = document.querySelector('#message-search');
const message = document.querySelectorAll('.message');

messageSearch.addEventListener('keyup', () => {
    const searchTerm = messageSearch.value.toLowerCase();

    messages.forEach(message => {
        const name = message.querySelector('h5').textContent.toLowerCase();

        if (name.includes(searchTerm)) {
            message.style.display = 'flex'; // show the message
        } else {
            message.style.display = 'none'; // hide the message
        }
    });
});

//THEME /

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

// Open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

theme.addEventListener('click', openThemeModal);
themeModal.addEventListener('click', closeThemeModal);  // click on modal background


// FONT SIZE
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');

// function to remove active class from all sizes
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    });
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();  // remove active from all
        size.classList.add('active'); // add active to clicked one

        let fontSize;

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '15px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17.4rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '17px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '20px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }

        document.querySelector('html').style.fontSize = fontSize;
    });
});

//color

const changeActiveColorlass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
const colorPalette = document.querySelectorAll('.choose-color span');

colorPalette.forEach(color => {
    color.addEventListener('click' , () => {
        let Primary;
       changeActiveColorlass();
        if (color.classList.contains('color-1')){
            PrimaryHue = 252;
        }else if(color.classList.contains('color-2'))
        {
           PrimaryHue = 52;
        }else if(color.classList.contains('color-3'))
        {
           PrimaryHue = 352;
        }
        else if(color.classList.contains('color-4'))
        {
           PrimaryHue = 152;
        }
        else if(color.classList.contains('color-5'))
        {
           PrimaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', PrimaryHue);
    })
})


// Select background buttons
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// Select root for CSS variables
//const root = document.querySelector(':root');

// Define variables for HSL lightness
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Function to update CSS variables
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

// Event: Light Theme (Default)
Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload(); // resets to default CSS variables
});

// Event: Dim Theme
Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');

    changeBg();
});

// Event: Dark Theme
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');

    changeBg();
});
