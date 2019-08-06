const moveToDetails = () => {
  location.href = 'details.html'
}
const moveToCred = () => {
  location.href = 'cred.html'
}
const moveToReason = () => {
  location.href = 'reason.html'
}
const moveToThanks = () => {
  location.href = '/thanks.html'
}
const upload = document.getElementById('upload');
const uploadName = document.getElementById('upload-name');
const uploadIcon = document.getElementById('upload-icon');
uploadIcon.addEventListener('click', () => {
  upload.click();
})
upload.addEventListener('change', () => {
  if (upload.value) {
    uploadName.innerHTML = upload.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
  } else {
    uploadName.innerHTML = 'Upload a file'
  }
})