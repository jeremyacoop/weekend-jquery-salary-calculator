console.log('js');

$(document).ready(handleReady);

function handleReady() {
    console.log('jQuery is ready');
    $('#employee-submit').on('click', function(){console.log('click')});
    $('#employee-submit').on('click', getEmployeeInfo);
    }// end handleReady

let employeeArray = [];

function getEmployeeInfo() {
    // verify input data
    if($('#first-name').val() === ''{
        alert('First name is required');
    }else if($('#last-name').val() === ''{
        alert('Last name is required');
    }else if($('#id-number').val() === ''{
        alert('ID number is required');
    }else if($('#job-title').val() === ''{
        alert('Job title is required');
    }else if($('#annual-salary').val() === ''{
        alert('Annual salary is required');
    }else if($('#annual-salary').val() === NaN{
        alert('Salary must be a number');
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
    
}// end getEmployeeInfo

