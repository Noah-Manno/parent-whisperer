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


    if (gradeSolution !== "improve their behavior and avoid distractions") {
    let missingWork = $('#missingWork')
    missingWork.removeClass('hidden')
    let assignmentList = $('#assignment-list')
    let assignmentArray = JSON.parse(localStorage.getItem('assignments'));

    assignmentArray.forEach(assignment => {
        let assignmentEl = $('<li>');
        assignmentEl.text(assignment);
        assignmentList.append(assignmentEl);
    });
  }
}

let teacherName = localStorage.getItem('teacherName');
let teacherIntroName = $('.name-teacher');
teacherIntroName.text(teacherName);

let studentName = localStorage.getItem('studentName');
let childTitle = $('.child-title');
childTitle.text(studentName);


// COPY CONTENT
document.getElementById('copy').addEventListener('click', function() {
    let cardBody = document.querySelector('.card-body');
    let textToCopy = getFormattedText(cardBody);
    let tempTextArea = document.createElement('textarea');
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    tempTextArea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Content copied to clipboard!');
});
function getFormattedText(element) {
    let text = '';

    element.childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
            text += child.textContent.trim(); // Add text content without line breaks
        } else if (child.nodeType === Node.ELEMENT_NODE) {
            if (child.tagName === 'BR') {
                text += '\n'; // Add a single line break for <br> tags
            } else if (child.tagName === 'P') {
                text += '\n\n'; // Add double line breaks for <p> elements
            } else if (child.tagName === 'SPAN' && (child.innerHTML === ' ' || child.innerHTML === '&nbsp;' || child.innerHTML === '&#160;')) {
                text += ' '; // Add an extra space for non-breaking space character
            } else {
                text += getFormattedText(child); // Recursively process child nodes
            }
        }
    });

    return text.trim();
}