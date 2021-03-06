/**
	_onyx.Button_ is an <a href="#enyo.Button">enyo.Button</a> with Onyx styling
	applied. The color of the button may be customized by specifying a
	background color.

	The *onyx-affirmative*, *onyx-negative*, and *onyx-blue* classes provide
	some built-in presets.

		{kind: "onyx.Button", content: "Button"},
		{kind: "onyx.Button", content: "Affirmative", classes: "onyx-affirmative"},
		{kind: "onyx.Button", content: "Negative", classes: "onyx-negative"},
		{kind: "onyx.Button", content: "Blue", classes: "onyx-blue"},
		{kind: "onyx.Button", content: "Custom", style: "background-color: purple; color: #F1F1F1;"}

	For more information, see the documentation on
	<a href="https://github.com/enyojs/enyo/wiki/Buttons">Buttons</a> in the
	Enyo Developer Guide.
*/
enyo.kind({
	name: "onyx.Button",
	kind: "enyo.Button",
	classes: "onyx-button enyo-unselectable"
});