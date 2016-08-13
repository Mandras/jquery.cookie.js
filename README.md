# jquery.cookie.js

jQuery plugin
Enable you to manipulate URL parameters

## METHODS:

### Get a URL parameter
_(If no parameter is given, return the URL with new parameters)_

```
$.url("get", {
	parameter: 'id'
});

$.url("get");
```

### Set a URL parameter

```
$.url("set", {
	parameter: 'id',
	value: '42'
});
```

### Delete a URL parameter

```
$.url("delete", {
	parameter: 'id'
});
```

### Reload the page, you can choose with or without URL parameters
_(By default, `empty` is set to false)_

```
$.url("reload");

$.url("reload", {
   empty: true
});
```

### Verify if a URL parameter exist, return `true` or `false`

```
$.url("exist", {
	parameter: 'id'
});
```

### Here is a complete example

```
if ($.url("exist", { parameter: 'id' });) {
	alert("Parameter `id` exist !");
}
else {
	$.url("set", {
		parameter: 'id',
		value: '42'
	});
	$.url("reload");
}
```