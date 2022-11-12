$.createAboutUsModal = () => {    
    const ANIMATION_SPEED = 700

    function _createModal() {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay" data-close='true'>
                <div class="modal-window">
                    <div class="modal-header">
                        <div class="modal-title">About Us</div>
                        <div class="modal-close" data-close='true'>&times;</div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime sunt id nihil? Quas adipisci beatae deleniti quisquam tenetur, temporibus inventore rerum totam quam magni. 
                            Reiciendis dignissimos atque, aperiam rerum dolore molestias corrupti aspernatur facere, 
                            neque enim totam? Distinctio magnam quo repudiandae enim labore natus nobis ducimus veritatis quia nam, 
                            eligendi impedit, eaque laborum tempore sint alias libero aspernatur explicabo voluptates cumque molestiae! 
                            Dolorum illum qui delectus fugit, quasi neque maxime similique odit iure nihil officia sit. Voluptatum sed sequi natus. 
                        </div>
                        <div class="modal-photo">
                            <img src="./img/photo.png" alt="">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <div class="footer-media display-flex justify-between m-b-20">
                            <button class="circle-btn display-flex align-center justify-center">
                                <img src="./img/facebook-logo.svg" alt="">
                            </button>
                            <button class="circle-btn display-flex align-center justify-center">
                                <img src="./img/twitter-logo.svg" alt="">
                            </button>
                            <button class="circle-btn display-flex align-center justify-center">
                                <img src="./img/pinterest-logo.svg" alt="">
                            </button>
                            <button class="circle-btn display-flex align-center justify-center">
                                <img src="./img/google-logo.svg" alt="">
                            </button>
                            <button class="circle-btn display-flex align-center justify-center">
                                <img src="./img/behance-logo.svg" alt="">
                            </button>
                            <button class="circle-btn display-flex align-center justify-center">
                                <img src="./img/instagram-logo.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal
    }

    const $modal = _createModal()

    const modal = {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, ANIMATION_SPEED);
        },
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)  

    return Object.assign( modal, {
        dispose() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
        }
    })
}