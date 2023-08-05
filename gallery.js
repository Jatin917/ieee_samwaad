// script.js
const form = document.getElementById('alumniForm');
const modal = document.getElementById('modal');
const modalName = document.getElementById('modalName');
const modalStudy = document.getElementById('modalStudy');
const modalContact = document.getElementById('modalContact');
const modalProfession = document.getElementById('modalProfession');
const modalProfile = document.getElementById('modalProfile');
const modalEmail = document.getElementById('modalEmail');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const study = form.study.value;
  const mnum = form.mnum.value;
  const profession = form.profession.value;
  const lprofile = form.lprofile.value;

  modalName.textContent = name;
  modalEmail.textContent = email;
  modalStudy.textContent = study;
  modalContact.textContent = mnum;
  modalProfession.textContent = profession;
  modalProfile.textContent = lprofile;

  modal.style.display = 'block';
});

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
