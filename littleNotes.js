/*finding out whether things can be permanently saved */
if (localStorage) {
    alert('LocalStorage is supported!');
}
else {
    alert("No support. Use a fallback such as browser cookies or store on the server.");
}