// jQuery plugin - Enable you to manipulate Cookies
//
// METHODS:
//
// -- Get a cookie
//
// $.cookie("get", {
//     name: 'login'
// });
//
// $.cookie("get");
//
//
// -- Set a cookie (duration in days):
//
// $.cookie("set", {
//     duration: 365,
//     name: 'login',
//     value: 'John'
// });
//
//
// -- Delete a cookie:
//
// $.cookie("delete", {
//     name: 'login'
// });
//
//
// -- Verify if a cookie exist, return `true` or `false`:
//
// $.cookie("exist", {
//     name: 'login'
// });

(function($) {
	$.extend({
		cookie: function (method, object) {
			var parameters = {
				"duration": 30,
				"name": null,
				"value": ""
			};

			if (typeof object === 'undefined') var object = parameters;

			parameters = $.extend(parameters, object);

			if (typeof method === 'undefined') {
				console.log("Cookie jQuery plugin: Missing method name");
				return (false);
			}

			if (parameters.name == null || parameters.name.length == 0) {
				console.log("Cookie jQuery plugin: Missing cookie name");
				return (false);
			}

			this.get = function(object) {
				for (var b = object.name + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
					for (var e = c[d] ; " " == e.charAt(0) ; ) {
						e = e.substring(1, e.length);
					}
					if (0 == e.indexOf(b)) return (e.substring(b.length, e.length));
				}
				return (null);
			}

			this.set = function(object) {
				if (object.duration) {
					var d = new Date;
					d.setTime(d.getTime() + 1e3 * 60 * 60 * 24 * object.duration);
					var e = "; expires=" + d.toGMTString();
				} else var e = "";
				document.cookie = object.name + "=" + object.value + e + "; path=/";
				return (true);
			}

			this.delete = function(object) {
				$.cookie("set", {
					name: object.name,
					duration: -1,
					value: ""
				});
				return (true);
			}

			this.exist = function(object) {
				if ($.cookie("get", { name: object.name }) == null) return (false);
				return (true);
			}

			if (typeof(this[method]) === 'function')
				return (this[method](object));

			console.log("Cookie jQuery plugin: Unrecognized method: " + method);
			return (false);
		}
	});
})(jQuery);