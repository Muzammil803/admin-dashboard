export default function clearLocalStorage(){
    
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'E') {
        // Clear the localStorage
        localStorage.clear();
        window.location.reload()
    }
});
}