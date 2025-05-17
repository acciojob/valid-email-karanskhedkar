function validEmail(str) {
  //your JS code here.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str)
	
}

// Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
