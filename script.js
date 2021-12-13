console.log('js');

$(document).ready(handleReady);

const employeeArray = [];

function printEmployees() {
    $('#employee-info').empty();
    for(let i=0; i<employeeArray.length; i++) {
        $('#employee-info').append(`<tr class="emp-row">
            <td>${employeeArray[i].nameOne} </td>
            <td>${employeeArray[i].nameTwo} </td>
            <td>${employeeArray[i].id} </td>
            <td>${employeeArray[i].job} </td>
            <td>${employeeArray[i].salary} </td>
            <td><button class="delete-button">DELETE</button></td>
        </tr>`);
    }
    printTotal();
    // where to put this click handler?
    //$(document).on('click', 'delete-button', function() {
    //    $('this').closest('tr).remove(); 
    //});
}// end printEmployees

function handleReady() {
    console.log('jQuery is ready');
    $('#employee-submit').on('click', function(){console.log('click')});
    $('#employee-submit').on('click', getEmployeeInfo);
    $(document).on('click', '.delete-button', deleteEmployee);
    }// end handleReady

function deleteEmployee(event) {
    event.preventDefault();
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
    $('.emp-input').val("");

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

function totalSalaries(array) {
    let total = 0;
    for (employee of array) {
        total += parseInt(array[employee.salary]);
    }
    console.log(total);
    return total;
}

function printTotal() {
    let totalCost = totalSalaries(employeeArray);
    if(totalCost > 20000) {
    $('#total-costs').append(`<span style="background-color: red"><strong>$${totalCost}<br></strong></span>`);
    } else {
    $('#total-costs').append(totalCost);
    }
    return;
}