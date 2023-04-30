const modal = document.getElementById('volunteering-modal')

function openModal() {
  modal.classList.remove('hidden')
}

modal.addEventListener('click', function (e) {
  if (e.target.classList.contains('modal')) {
    modal.classList.add('hidden')
  }
})
