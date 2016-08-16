# jquery.cookie.js

jQuery plugin
Enable you to manipulate cookies

## METHODS:

### Get a cookie

```
$.cookie("get", {
	name: 'login'
});
```

### Set a cookie (duration in days):

```
$.cookie("set", {
	duration: 365,
	name: 'login',
	value: 'John'
});
```

### Delete a cookie

```
$.cookie("delete", {
	name: 'login'
});
```

### Verify if a cookie exist, return `true` or `false`

```
$.cookie("exist", {
	name: 'login'
});
```