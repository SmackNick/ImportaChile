document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('my-form');

    form.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevents the form from refreshing the page
        console.log("Form submitted");

        const formData = new FormData(form);

        formspree.submitForm('xanwzolk', formData)  // Replace 'your-form-id' with your actual Formspree form ID
            .then(response => {
                if (response.ok) {
                    console.log('Form submitted successfully');
                    alert('Form submitted successfully!');
                } else {
                    console.log('Error submitting form:', response);
                    alert('Form submission failed.');
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                alert('Error submitting form.');
            });
    });
});
