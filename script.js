console.log('js');

$(document).ready(handleReady);

let employeeArray = [];

function printEmployees() {
    $('#employee-info').empty();
    for(let i=0; i<employeeArray.length; i++) {
        $('#employee-info').append(`<tr id="${employeeArray[i].id}"></tr>`);
        for(let j in employeeArray[i]) {
            $('#employee-info').append(`<td">${employeeArray[i][j]}</td>`);
        }
        $('#employee-info').append(`<button class="delete-button">DELETE</button>`);
    }
    // where to put this click handler?
    //$(document).on('click', 'delete-button', function() {
    //    $('this').closest('tr).remove(); 
    //});
}// end printEmployees

function handleReady() {
    console.log('jQuery is ready');
    $('#employee-submit').on('click', function(){console.log('click')});
    $('#employee-submit').on('click', getEmployeeInfo);
    $('.delete-button').on('click', deleteEmployee());
    }// end handleReady

function deleteEmployee(event) {
    console.log('delete-click'); 
    //event.preventDefault();
    $(this).closest('tr').remove();
}

function getEmployeeInfo() {
    // verify input data
    if($('#first-name').val() === '') {
        alert('First name is required');
        return;
    }else if($('#last-name').val() === '') {
        alert('Last name is required');
        return;
    }else if($('#id-number').val() === '') {
        alert('ID number is required');
        return;
    }else if($('#job-title').val() === '') {
        alert('Job title is required');
        return;
    }else if($('#annual-salary').val() === '') {
        alert('Annual salary is required');
        return;
    }else if($('#annual-salary').val() === NaN) {
        alert('Salary must be a number');
        return;
    }// end verify

    // collect and store inputs
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumber = $('#id-number').val();
    let jobTitle = $('#job-title').val();
    let annualSalary = $('#annual-salary').val();
    console.log(annualSalary);

    // clear inputs
    $('#first-name').val("");
    $('#last-name').val("");
    $('#id-number').val("");
    $('#job-title').val("");
    $('#annual-salary').val("");

    const employeeObject = {
        nameOne: firstName,
        nameTwo: lastName,
        id: idNumber,
        job: jobTitle,
        salary: Number(annualSalary)
    }
    employeeArray.push(employeeObject);
    console.log(employeeObject);
    console.log(employeeArray);

    printEmployees();
}// end getEmployeeInfo

function calculateMonthlyCosts(employees) {
    let employeeCosts = 0;
    let monthlyCosts = 0;
    for(i=0; i<employees.length; i++) {
        employeeCosts += employees[i].annualSalary;
    }
    console.log(employeeCosts);
    monthlyCosts = employeeCosts / 12;
    console.log(monthlyCosts);
    return monthlyCosts;
}// end calculateMonthlyCosts
