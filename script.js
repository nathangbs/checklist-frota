const auth = firebase.auth();

document.getElementById('login-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => window.location.href = "painel.html")
    .catch(error => alert("Erro no login: " + error.message));
});

function logout() {
  auth.signOut().then(() => window.location.href = "index.html");
}