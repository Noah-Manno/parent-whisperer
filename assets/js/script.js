const teacherCard = $('#teacherCard')
const adminCard = $('#adminCard')
let userType = localStorage.getItem('userType') || "teacher";

teacherCard.on('click', function() {
    userType = 'teacher'
    localStorage.setItem('userType', userType)
    window.location.href = './form.html'
})

adminCard.on('click', function() {
    userType = 'administrator'
    localStorage.setItem('userType', userType)
    window.location.href = './form.html'
})