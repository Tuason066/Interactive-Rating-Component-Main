const rateCounts = document.querySelector('.rate-counts');
const rate = localStorage.getItem('rate');

rateCounts.innerHTML = `<p>You selected ${rate} out of 5</p>`;