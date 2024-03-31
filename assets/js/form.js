let userType = localStorage.getItem('userType') || 'teacher';


if (userType === "teacher") {
    $('#teacher').removeClass('hidden')
} else {
    $('#admin').removeClass('hidden')
}

const emailTypeInput = $('#emailTypeInput');
const gradingOne = $('#grading-one');
const gradingTwo = $('#grading-two');
const gradingThree = $('#grading-three');
const generate = $('#generate');



emailTypeInput.on('input', function() {
    let inputValue = emailTypeInput.val();

    if (inputValue === "1") {
        gradingOne.removeClass('hidden');
        const improve = $('#improveGrade');
        improve.on('input', function() {

            let inputValue = improve.val();

            if (inputValue !== "2") {
                gradingTwo.removeClass('hidden');
                gradingThree.removeClass('hidden');
            } else {
                gradingTwo.addClass('hidden')
                gradingThree.addClass('hidden')
                generate.removeClass('hidden');
            }

            if (inputValue == "2") {
                generate.removeClass('hidden');
            } else {
                generate.addClass('hidden');
            }
        });
    } else {
        gradingOne.addClass('hidden')
        gradingTwo.addClass('hidden')
        gradingThree.addClass('hidden')
        generate.addClass('hidden');
    }
});

