// jQuery plugin v1.0
// Enable you to manipulate URL parameters
// See more: https://github.com/Mandras/jquery.cookie.js

(function($) {
	$.extend({
		url: function (method, object) {
			if (typeof window.jQueryPlugin_URL === 'undefined')
				window.jQueryPlugin_URL = document.location.search.substr(1);

			var parameters = {
				"parameter": null,
				"empty": false,
				"value": ""
			};

			if (typeof object === 'undefined') var object = parameters;

			parameters = $.extend(parameters, object);

			if (typeof method === 'undefined') var method = "get";

			// -- Get a URL parameter

			this.get = function(object) {
				if (object.parameter == null || object.parameter.length == 0) return (window.jQueryPlugin_URL);

				for (var b = window.jQueryPlugin_URL, c = b.split("&"), d = 0; d < c.length; d++) {
					var e = c[d].split("=");
					if (e[0] == object.parameter) return (e[1]);
				}
				return (null);
			}

			// -- Set a URL parameter

			this.set = function(object) {
				object.parameter = escape(object.parameter), object.value = escape(object.value);
				var c = window.jQueryPlugin_URL.split("&");
				if ("" == c) window.jQueryPlugin_URL = object.parameter + "=" + object.value;
				else {
					for (var e, d = c.length; d--;) {
						if (e = c[d].split("="), e[0] == object.parameter) {
							e[1] = object.value, c[d] = e.join("=");
							break;
						}
					}
					0 > d && (c[c.length] = [object.parameter, object.value].join("=")), window.jQueryPlugin_URL = c.join("&");
				}
				return (true);
			}

			// -- Delete a URL parameter:

			this.delete = function(object) {
				for (var r = window.jQueryPlugin_URL.split("&"), a = 0; a < r.length; a++) {
					r[a].split("=")[0] == object.parameter && (r[a] = "");
				}
				for (var i = 0; i < r.length; i++) {
					if (r[i].length == 0) {         
						r.splice(i, 1);
						i--;
					}
				}
				window.jQueryPlugin_URL = r.join("&");
				return (true);
			}

			// -- Reload the page, you can choose with or without URL parameters

			this.reload = function(object) {
				if (object.empty || window.jQueryPlugin_URL.length == 0) window.location = location.protocol + "//" + location.host + location.pathname;
				else window.location = location.protocol + "//" + location.host + location.pathname + "?" + window.jQueryPlugin_URL;
				return (true);
			}

			// -- Verify if a URL parameter exist, return `true` or `false`

			this.exist = function(object) {
				if (object.parameter == null || object.parameter.length == 0) return (false);
				if ($.url("get", { parameter: object.parameter }) == null) return (false);
				return (true);
			}

			if (typeof(this[method]) === 'function')
				return (this[method](object));

			console.log("URL jQuery plugin: Unrecognized method: " + method);
			return (false);
		}
	});
})(jQuery);