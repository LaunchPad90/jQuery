$(document).ready(function () {
    /*------------------ ADD SKILLS -------------------*/
    $('#newSkills').click('button', function (e) {
        let $button = $('<button class="delete">X</button>');
        console.log($button)

        let $p = $('<p></p>');
        console.log($p);

        let $input = $('input.value');
        console.log($input);
        console.log(e.target.val);

        const skill = $('input[type="text"]').val();
        console.log(skill);

        $p.text(skill);

        $p.appendTo('.box2');

        $input.appendTo($p);

        $button.prependTo($p);
        console.log($p)

        $button.click('button', function (e) {
            console.log(e.currentTarget)
            e.currentTarget.closest('p').remove();
        })
    })

})


