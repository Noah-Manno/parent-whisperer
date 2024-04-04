const emailType = localStorage.getItem('emailType');

if (emailType == 'null' || 'undefined') {
    let nullmessage = $('#null-message')
    nullmessage.removeClass('hidden')
} 

if (emailType === "Failing") {
    let nullmessage = $('#null-message')
    nullmessage.addClass('hidden')

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
    let missingWork = $('.missing-work')
    missingWork.removeClass('hidden')
    let assignmentList = $('.assignment-list')
    let assignmentArray = JSON.parse(localStorage.getItem('assignments'));

    assignmentArray.forEach(assignment => {
        let assignmentEl = $('<li>');
        assignmentEl.text(assignment);
        assignmentList.append(assignmentEl);
    });
  } else {
    let missingWork = $('missing-work')
    missingWork.addClass('hidden')
  }

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

} else {
    let failingCard = $('#failing-email');
    failingCard.addClass('hidden');
}

if (emailType === "Attendance") {
    let nullmessage = $('#null-message')
    nullmessage.addClass('hidden')

    let attendanceCard = $('#attendance-email')
    attendanceCard.removeClass('hidden')

    let absences = $('.numberOfAbsences')
    absencesNumber = JSON.parse(localStorage.getItem('absences'));
    absences.text(absencesNumber);

    let attendanceSolution = $('.attendanceSolution')
    let attendanceSolutionInput = localStorage.getItem('attendanceSolution')
    attendanceSolution.text(attendanceSolutionInput);

    if (attendanceSolutionInput === "make up their missed work") {
        let missingWork = $('.missing-work')
        missingWork.removeClass('hidden')
        let assignmentList = $('.assignment-list')
        let assignmentArray = JSON.parse(localStorage.getItem('assignments'));

        assignmentArray.forEach(assignment => {
            let assignmentEl = $('<li>');
            assignmentEl.text(assignment);
            assignmentList.append(assignmentEl);
        }
    )} else {
        let missingWork = $('.missing-work')
        missingWork.addClass('hidden')
    }

    function highlightCardBodyText() {
        const cardBody = document.querySelector('#attendance-email .card-body');
        
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(cardBody);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    
    // Call the function to highlight all text in the card body
    let copyEl = $('#copy2');
    copyEl.on('click', function() {
        highlightCardBodyText();
    });
    
} else {
    let attendanceCard = $('#attendance-email')
    attendanceCard.addClass('hidden')
}

if (emailType === "Behavior") {
    let nullmessage = $('#null-message')
    nullmessage.addClass('hidden')

    let behaviorCard = $('#behavior-email')
    behaviorCard.removeClass('hidden')

    let behavior = $('.behavior')
    let behaviorInput = localStorage.getItem('behavior')
    behavior.text(behaviorInput);

    let behaviorSolution = $('.behaviorSolution')
    let behaviorSolutionInput = localStorage.getItem('behaviorSolution')
    behaviorSolution.text(behaviorSolutionInput);

    if (behaviorSolutionInput === "we can schedule a phone call to discuss this further") {
        let meetingTimeEl = $('.meetingTimeEl');
        meetingTimeEl.removeClass('hidden')
        let date = $('.date');
        let time = $('.time');
        let meetingDate = JSON.parse(localStorage.getItem('meetingDate'));
        let meetingTime = JSON.parse(localStorage.getItem('meetingTime'));
        let meetingDateFormat = dayjs(meetingDate).format('MMMM D');
        date.text(meetingDateFormat);
        time.text(meetingTime);
    } else {
        let meetingTimeEl = $('.meetingTimeEl');
        meetingTimeEl.addClass('hidden')
    }

    function highlightCardBodyText() {
        const cardBody = document.querySelector('#behavior-email .card-body');
        
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(cardBody);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    
    // Call the function to highlight all text in the card body
    let copyEl = $('#copy3');
    copyEl.on('click', function() {
        highlightCardBodyText();
    });
    
} else {
    let behaviorCard = $('#behavior-email')
    behaviorCard.addClass('hidden')
}

let teacherName = localStorage.getItem('teacherName');
let teacherIntroName = $('.name-teacher');
teacherIntroName.text(teacherName);

let studentName = localStorage.getItem('studentName');
let childTitle = $('.child-title');
childTitle.text(studentName);





