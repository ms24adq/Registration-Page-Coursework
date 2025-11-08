
        function register() {
            console.log("Registration triggered by non-semantic element.");
            document.getElementById('reg-status').textContent = "Registration Successful! See you in October.";
            document.getElementById('reg-status').classList.remove('hidden');
        }
        
        function clearForm() {
            document.getElementById('reg-form').reset();
            document.getElementById('reg-status').textContent = '';
            document.getElementById('reg-status').classList.add('hidden');
            console.log("Form cleared.");
        }

