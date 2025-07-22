document.getElementById('downloadBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    const resumeUrl = 'Diksha_CSE(AI-ML)_4th yr.pdf'; 
    window.open(resumeUrl, 'Diksha_CSE(AI-ML)_4th yr.pdf'); 

 
});

   function openmenu() {
    document.getElementById("sidemenu").classList.add("open");
  }

  function closemenu() {
    document.getElementById("sidemenu").classList.remove("open");
  }

