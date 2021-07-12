function validateEmail(email: string | undefined) {
  if (!email) return;
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

function validatePhone(phone: string | undefined) {
  if (!phone) return;
  const re = /([1-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/;
  return re.test(phone);
}

export { validateEmail, validatePhone };
