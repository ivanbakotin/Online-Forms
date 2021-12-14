export default function debounce(func, wait = 1000) {
    
    let timeout;

    return function (...args) {

      if (timeout) clearTimeout(timeout)
      
      timeout = setTimeout(() => func(...args), wait)
    }
}
