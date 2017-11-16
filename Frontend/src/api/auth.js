export function callLoginApi(email, pass) {
  console.log("butwait");
  return Promise.resolve({
    user: {
      email: email,
      pass: pass
    }
  });
}

export function callRegisterApi(email, pass) {
  return Promise.resolve({
    email: email,
    pass: pass
  });
}
