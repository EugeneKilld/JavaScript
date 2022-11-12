const aboutUsModal = $.createAboutUsModal()  
const recipesModal = $.createRecipesModal()  

const aboutUsBtn = document.getElementById('aboutUs')
const contactsBtn = document.getElementById('contacts')
const recipesBtn = document.getElementById('recipes')

aboutUsBtn.addEventListener('click', () => {
    aboutUsModal.open()
})  

recipesBtn.addEventListener('click', () => {
    recipesModal.open()
    $.getPosts(recipesModal)
})  

$.createXHRRequest().then(value => {
        const contactModal = $.createContactsModal(value)
        contactsBtn.addEventListener('click', () => {
            contactModal.open()
        })  
    }
).catch( value => {
    console.log(value.status)
    console.log(value.statusText)
})