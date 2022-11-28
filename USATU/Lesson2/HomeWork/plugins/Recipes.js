$.createRecipesModal = () => {
    const ANIMATION_SPEED = 700
    
    function _createModal() {
        const modal = document.createElement('div')
        modal.classList.add('modal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay" data-close='true'>
                <div class="modal-window">
                    <div class="modal-header">
                        <div class="modal-title">Recipes</div>
                        <div class="modal-close" data-close='true'>&times;</div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-content">
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
        },
        addChild(post) {
            const content = $modal.querySelector('.modal-content')
            content.appendChild(post)
        }
    })
}