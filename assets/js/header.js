var header = {
    threshold: 500,
    titleRect: document.getElementById('js-title').getBoundingClientRect(),
    header: document.getElementById('js-header'),
    shrunk: false,
    init: function() {
        window.addEventListener('scroll', this.action);
    },

    action: function() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop;
        if (distanceY > header.threshold) {
            header.header.classList.add('shrink');       
        } else {
            header.header.classList.remove('shrink');
        }
    },

    moveItems: function() {
        if(header.shrunk == true) {
             document.querySelectorAll('.js-nav').forEach(function(item) {
                 item.style.transform = 'translateX(0)';
             });
        } else {
            document.querySelectorAll('.js-nav').forEach(function(item) {
                let rectObj = item.getBoundingClientRect();
                let distance = rectObj.left - header.titleRect.left;
                item.style.transform = 'translateX(-'+distance+'px)';
            });  
        }        
    }
};

header.init();