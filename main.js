$(document).ready(function () {

    /*------------------ ELEMENT SELECTOR ------------------*/
    const del = document.querySelector('.delete');
    console.log(del);

    const box = document.getElementById('box');
    console.log(box);

    const p = document.querySelector('p');
    console.log(p);

    const input = document.querySelector('input');
    console.log(input);

    const addSkills = document.getElementById('newSkills');
    console.log(addSkills)

    const box2 = document.querySelector('.box2');
    console.log(box2);

    /*------------------ ADD SKILLS -------------------*/
    $('#newSkills').click('button', function (e) {
        let p = $('<p><button class="delete">X</button></p>');
        p.text(input.value);
        p.appendTo('.box2');
        console.log(addSkills)
    })

    $('p').click('button', function (e) {
        console.log(e.currentTarget)
        e.currentTarget.remove();
    })
})


