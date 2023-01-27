//script for mobile menu//

$ ('.burger-icon').on('click', function() {

    $ ('.mobile-menu').toggleClass("open")

    return false

})

//script for burger-icon color change//

$ ('.burger-icon').on('click', function () {

    $ ('.burger-icon div').toggleClass("icon-open")

    return false

})