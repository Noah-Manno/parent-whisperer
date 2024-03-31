let userType = localStorage.getItem('userType') || 'teacher';


if (userType === "teacher") {
    $('#teacher').removeClass('hidden')
} else {
    $('#admin').removeClass('hidden')
}

const emailTypeInput = $('#emailTypeInput');
const gradingOne = $('#grading-one');
const attendance = $('#attendance');
const behavior = $('#behavior');
const gradingTwo = $('#grading-two');
const gradingThree = $('#grading-three');
const behaviorTwo = $('#behavior-two')
const generate = $('#generate');
const addAssignment = $('#addAssignment')
const makeUpWork = $('#make-up-work')
let assignmentArray = []

emailTypeInput.on('input', function() {
    let inputValue = emailTypeInput.val();

    if (inputValue === "1") {
        attendance.addClass('hidden');
        behavior.addClass('hidden');
        generate.addClass('hidden')
        behaviorTwo.addClass('hidden');
        gradingOne.removeClass('hidden');

        const improve = $('#improveGrade');
        improve.on('input', function() {

            let inputValue = improve.val();

            if (inputValue !== "2") {
                generate.addClass('hidden');
                gradingTwo.removeClass('hidden');
                gradingThree.removeClass('hidden');

                const generateButtonTwo = $('#gen-email-two');
                 generateButtonTwo.on('click', function () {
                    mainLocalStorageSave();
                    gradeLocalStorageSave();
                    assignmentLocalStorageSave();
                    window.location.href = "email.html"
                });
            } else {
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    mainLocalStorageSave();
                    gradeLocalStorageSave();
                    window.location.href = "email.html"
                });
        }
    });

    } if (inputValue === "2") {
        gradingOne.addClass('hidden')
        gradingTwo.addClass('hidden')
        gradingThree.addClass('hidden')
        generate.addClass('hidden');
        behavior.addClass('hidden');
        behaviorTwo.addClass('hidden');
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
                    mainLocalStorageSave();
                    attendanceLocalStorageSave();
                    assignmentLocalStorageSave();

                    window.location.href = "email.html"
                });

            } else {
                gradingTwo.addClass('hidden');
                gradingThree.addClass('hidden');
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    mainLocalStorageSave();
                    attendanceLocalStorageSave();

                    window.location.href = "email.html"
                });
            }
        });
    } if (inputValue === '3') {
        gradingOne.addClass('hidden');
        gradingTwo.addClass('hidden');
        gradingThree.addClass('hidden');
        generate.addClass('hidden');
        attendance.addClass('hidden');
        behavior.removeClass('hidden');

        const behaviorSolution = $('#behaviorSolution')
        behaviorSolution.on('input', function() {
            let inputValue = behaviorSolution.val();

            if (inputValue == "3") {
                behaviorTwo.removeClass('hidden');
                generate.removeClass('hidden');

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    mainLocalStorageSave();
                    behaviorLocalStorageSave();
                    meetingTimeLocalStorageSave();
                    window.location.href = "email.html"
                });
            } else {
                behaviorTwo.addClass('hidden');
                generate.removeClass('hidden')

                const generateButtonOne = $('#gen-email');

                generateButtonOne.on('click', function() {
                    mainLocalStorageSave();
                    behaviorLocalStorageSave();
                    window.location.href = "email.html"
                });
            }
        });
    } 
});

addAssignment.on('click', function() {
    let missingWork = $('#missingWork');
    let inputValue = missingWork.val();
    assignmentArray.push(inputValue)
    if (inputValue) {
        let newAssignment = $('<li>').text(inputValue);
        makeUpWork.append(newAssignment);
        missingWork.val('')
    }
});

function mainLocalStorageSave() {
        let teacherName = $('#teacherNameInput');
        let teacherNameInput = teacherName.val();
        
        let studentName = $('#studentNameInput');
        let studentNameInput = studentName.val();

        let emailType = $('#emailTypeInput');
        let emailTypeInput = emailType.val();
        let emailTypeString = ""
        if (emailTypeInput === "1") {
            emailTypeString = 'Failing'
        } else if (emailTypeInput === "2") {
            emailTypeString = "Attendance"
        } else if (emailTypeInput === "3") {
            emailTypeString = "Behavior"
        }

    localStorage.setItem('teacherName', teacherNameInput);
    localStorage.setItem('studentName', studentNameInput);
    localStorage.setItem('emailType', emailTypeString);
}

function gradeLocalStorageSave() {

    let grade = $('#gradeInput');
        let gradeInput = grade.val();

        let reason = $('#reasonForFailing');
        let reasonInput = reason.val();
        let reasonInputString = ""
        if (reasonInput === "1") {
            reasonInputString = "Lack Of Effort"
        } else if (reasonInput === "2") {
            reasonInputString = "Distracted In Class"
        } else if (reasonInput === "3") {
            reasonInputString = "Missing Work"
        }

        let improve = $('#improveGrade');
        let improveInput = improve.val();
        let improveInputString = "";
        if (improveInput === "1") {
            improveInputString = "Complete Missing Work"
        } else if (improveInput === "2") {
            improveInputString = "improve Disposition"
        } else if (improveInput === "3") {
            improveInputString = "Extra Credit"
        }

        localStorage.setItem('grade', gradeInput);
        localStorage.setItem('reasonForFailing', reasonInputString);
        localStorage.setItem('improveMethod', improveInputString);
}

function assignmentLocalStorageSave() {
    let assignments = JSON.stringify(assignmentArray);
    localStorage.setItem('assignments', assignments);
}

function attendanceLocalStorageSave() {
    let absence = $('#absenceInput');
    let absenceInput = JSON.stringify(absence.val());

    let attendanceSolution = $('#attendanceSolution');
    let attendanceSolutionInput = attendanceSolution.val();
    let attendanceSolutionString = ""

    if (attendanceSolutionInput == "1") {
        attendanceSolutionString = "AfterSchool"
    } else if (attendanceSolutionInput == "2") {
        attendanceSolutionString = "Show Up"
    } else if (attendanceSolutionInput == "3") {
        attendanceSolutionString = "Make Up Work"
    }

    localStorage.setItem('absences', absenceInput);
    localStorage.setItem('attendanceSolution', attendanceSolutionString);
}

function behaviorLocalStorageSave() {
    let behavior = $('#behaviorInput');
    behaviorInput = behavior.val();

    let behaviorSolution = $('#behaviorSolution');
    let behaviorSolutionInput = behaviorSolution.val();
    let behaviorSolutionString = "";

    if (behaviorSolutionInput == "1") {
        behaviorSolutionString = "apologize"
    } else if (behaviorSolutionInput == "2") {
        behaviorSolutionString = "Improve"
    } else if (behaviorSolutionInput == "3") {
        behaviorSolutionString = "Phone Call"
    }

    localStorage.setItem('behavior', behaviorInput);
    localStorage.setItem('behaviorSolution', behaviorSolutionString);
}

function meetingTimeLocalStorageSave() {
    let meetingDate = $('#meetingDateInput');
    let meetingDateInput = JSON.stringify(meetingDate.val());

    let meetingTime = $('#meetingTimeInput');
    let meetingTimeInput = JSON.stringify(meetingTime.val());

    localStorage.setItem('meetingDate', meetingDateInput);
    localStorage.setItem('meetingTime', meetingTimeInput);
}
