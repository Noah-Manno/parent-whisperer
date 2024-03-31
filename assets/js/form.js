let userType = localStorage.getItem('userType') || 'teacher';


if (userType === "teacher") {
    $('#teacher').removeClass('hidden')
} else {
    $('#admin').removeClass('hidden')
}

const emailTypeInput = $('#emailTypeInput');
const gradingOne = $('#grading-one');
const attendance = $('#attendance');
const behaviour = $('#behaviour');
const gradingTwo = $('#grading-two');
const gradingThree = $('#grading-three');
const behaviourTwo = $('#behaviour-two')
const generate = $('#generate');
const addAssignment = $('#addAssignment')
const makeUpWork = $('#make-up-work')

emailTypeInput.on('input', function() {
    let inputValue = emailTypeInput.val();

    if (inputValue === "1") {
        attendance.addClass('hidden');
        gradingOne.removeClass('hidden');
        const improve = $('#improveGrade');
        improve.on('input', function() {

            let inputValue = improve.val();

            if (inputValue !== "2") {
                gradingTwo.removeClass('hidden');
                gradingThree.removeClass('hidden');
                const generateButtonTwo = $('#gen-email-two');

             generateButtonTwo.on('click', function () {
                    window.location.href = "index.html"
                });
            } else {
                gradingTwo.addClass('hidden')
                gradingThree.addClass('hidden')
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    window.location.href = "index.html"
                });
            }

            if (inputValue == "2") {
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    window.location.href = "index.html"
                });

            } else {
                generate.addClass('hidden');
            }
        });
    } if (inputValue === "2") {
        gradingOne.addClass('hidden')
        gradingTwo.addClass('hidden')
        gradingThree.addClass('hidden')
        generate.addClass('hidden');
        attendance.removeClass('hidden');

        const attendanceSolution = $('#attendanceSolution')
        attendanceSolution.on('input', function() {
            let inputValue = attendanceSolution.val();

            if (inputValue == "3") {
                generate.addClass('hidden');
                gradingTwo.removeClass('hidden');
                gradingThree.removeClass('hidden');

                const generateButtonTwo = $('#gen-email-two');

             generateButtonTwo.on('click', function () {
                    window.location.href = "index.html"
                });

            } else {
                gradingTwo.addClass('hidden');
                gradingThree.addClass('hidden');
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    window.location.href = "index.html"
                });
            }
        });
    } if (inputValue === '3') {
        gradingOne.addClass('hidden');
        gradingTwo.addClass('hidden');
        gradingThree.addClass('hidden');
        generate.addClass('hidden');
        attendance.addClass('hidden');
        behaviour.removeClass('hidden');

        const behaviourSolution = $('#behaviourSolution')
        behaviourSolution.on('input', function() {
            let inputValue = behaviourSolution.val();

            if (inputValue == "3") {
                behaviourTwo.removeClass('hidden');
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    window.location.href = "index.html"
                });
            } else {
                behaviourTwo.addClass('hidden');
                generate.removeClass('hidden')

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    window.location.href = "index.html"
                });
            }
        });
    } 
});

addAssignment.on('click', function() {
    let missingWork = $('#missingWork');
    let inputValue = missingWork.val();
    if (inputValue) {
        let newAssignment = $('<li>').text(inputValue);
        makeUpWork.append(newAssignment);
        missingWork.val('')
    }
});