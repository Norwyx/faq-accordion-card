/* Selecting elements from the DOM */
const accQuestions = document.querySelectorAll('.accordion__question');

/* Looping and add event listener in every question */
accQuestions.forEach((item) => item.addEventListener
('click', () => {
    let accCollapse = item.nextElementSibling;

    if(!item.classList.contains("collapsing")) {
        /* Open accordion */
        if(!item.classList.contains("open")) {
            accCollapse.style.display = 'block';

            /* Height of the accordion item */
            let accHeight = accCollapse.clientHeight;

            setTimeout(() => {
                accCollapse.style.height = accHeight + 'px';
                accCollapse.style.display = '';
            }, 1);

			accCollapse.classList = 'accordion__collapse collapsing'

            /* At a certain time, accordion item that was open, will close */
            setTimeout(() => {
                console.log('open accordion content');
                accCollapse.classList = 'accordion__collapse collapse open';
            }, 300);
        }
        else {
            /* Remove open class */
            accCollapse.classList = 'accordion__collapse collapsing'

            setTimeout(() => {
                accCollapse.style.height = '0px';
            }, 1);

            /* Remove collapsing class and add collapse */
				setTimeout(() => {
					console.log('close accordion content');
					accCollapse.classList = 'accordion__collapse collapse';
					accCollapse.style.height = '';
				}, 300);
        }
        
        item.classList.toggle('open');
    }
}));