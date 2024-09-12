document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('my-form');

    const submitForm = function(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(form);

            formspree.submitForm('xanwzolk', formData)  // Replace 'your-form-id'
                .then(response => {
                    if (response.ok) {
                        alert('Form submitted successfully!');
                    } else {
                        alert('Form submission failed.');
                    }
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
        });
    };

    submitForm(form);
});
