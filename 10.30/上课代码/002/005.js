;
(function () {
    'use strict';



    var user_list = [];
    var form = $('#search-form')
    var input = $('#search-input')
    var el_result = $('#search-result')


    init()


    function init() {
        form.on('submit', function (e) {
            e.preventDefault();
            send(input.val())
           
            render()
        })
    }


    function send(keyword) {
        $.get('http://api.github.com/search/users?q=' + keyword)
            .done(function (data) {
                user_list = data.items;
               
                render()
            })
    }

    function render() {
        el_result.html('')

        user_list.forEach(function (user) {
            var el_user = $('<div></div>')
            el_user.html(`
        
        <img src='${user.avatar_url}'>

        <div>${user.login}</div>
        
        

        `)
            el_result.append(el_user)
        })
    }






















})();