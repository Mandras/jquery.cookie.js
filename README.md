# jquery.cookie.js

jQuery plugin - Enable you to manipulate URL parameters

METHODS:

-- Get a URL parameter (if no parameter is given, return the URL with new parameters):

$.url("get", {
    parameter: 'id'
});

$.url("get");


-- Set a URL parameter:

$.url("set", {
    parameter: 'id',
    value: '42'
});


-- Delete a URL parameter:

$.url("delete", {
    parameter: 'id'
});


-- Reload the page, you can choose with or without URL parameters
By default, `empty` is set to false

$.url("reload");

$.url("reload", {
   empty: true
});


-- Verify if a URL parameter exist, return `true` or `false`:

$.url("exist", {
    parameter: 'id'
});
