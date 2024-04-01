const emailType = localStorage.getItem('emailType');
if (emailType === "Failing") {
    let failingCard = $('#failing-email');
    failingCard.removeClass('hidden');

    let grade = localStorage.getItem('grade');
    let studentGrade = $('.student-grade');
    studentGrade.text(grade);

    let reasonForFailing = localStorage.getItem('reasonForFailing');
    let reasonForFailingFields = $('.reason-failing');
    reasonForFailingFields.text(reasonForFailing);

    let improve = localStorage.getItem('improveMethod');
    let gradeSolution = $('.grade-solution');
    gradeSolution.text(improve);


    if (improve !== "improve their behavior and avoid distractions") {
    let missingWork = $('#missingWork')
    missingWork.removeClass('hidden')
    let assignmentList = $('#assignment-list')
    let assignmentArray = JSON.parse(localStorage.getItem('assignments'));

    assignmentArray.forEach(assignment => {
        let assignmentEl = $('<li>');
        assignmentEl.text(assignment);
        assignmentList.append(assignmentEl);
    });
  } else {
    let missingWork = $('#missingWork')
    missingWork.addClass('hidden')
  }
} else {
    let failingCard = $('#failing-email');
    failingCard.addClass('hidden');
}

if (emailType === "Attendance") {
    let attendanceCard = $('#attendance-email')
    attendanceCard.removeClass('hidden')
} else {
    let attendanceCard = $('#attendance-email')
    attendanceCard.addClass('hidden')
}

let teacherName = localStorage.getItem('teacherName');
let teacherIntroName = $('.name-teacher');
teacherIntroName.text(teacherName);

let studentName = localStorage.getItem('studentName');
let childTitle = $('.child-title');
childTitle.text(studentName);



function highlightCardBodyText() {
    const cardBody = document.querySelector('#failing-email .card-body');
    
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(cardBody);
    selection.removeAllRanges();
    selection.addRange(range);
}

// Call the function to highlight all text in the card body
let copyEl = $('#copy');
copyEl.on('click', function() {
    highlightCardBodyText();
});

