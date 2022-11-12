$.createContactsModal = options => {
    const ANIMATION_SPEED = 700

    function _createModal(options) {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay" data-close='true'>
                <div class="modal-window">
                    <div class="modal-header">
                        <div class="modal-title">Contacts</div>
                        <div class="modal-close" data-close='true'>&times;</div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-photo">
                            <img src="./img/photo.png" alt="">
                        </div>
                        <div class="modal-content">
                            <div class="name">ФИО: ${options.name}</div>
                            <div class="address">
                                Адрес:
                                <div class="full-address">
                                    <div class="city">Город: ${options.address.city}</div>
                                    <div class="street">Улица: ${options.address.street}</div>
                                    <div class="suite">Дом: ${options.address.suite}</div>
                                </div>
                            </div>
                            <div class="email">Email: ${options.email}</div>
                            <div class="phone">Телефон: ${options.phone}</div>
                            <a href="https://${options.website}" class="website">Сайт: ${options.website}</a>
                        </div>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal
    }

    const $modal = _createModal(options)

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