=== CS Accordion Block ===
Contributors:      Erin McGowan | Frizzant
Tags:              block
Tested up to:      5.9
Stable tag:        0.1.0
License:           GPLv3
License URI:       https://www.gnu.org/licenses/gpl-3.0.html

Shows content in an accordion.

== Description ==

Gutenberg Block based on accordionJS ( https://github.com/michu2k/Accordion ) by Michu2k.

== Installation ==

This is not built, you will have to build it yourself with ``npm`` or ``yarn``.
Simply run ``npm install`` and then ``npm build`` to compile the block. Now you can create a zip for uploading, or sync it to your
development or production server.
I recommend that you adjust the styling to your liking.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/cs-accordion` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= Why should I use this block? =
I set up this block to save you time. Accordions are great, especially when they are easy to configure and easy to use. Since this block is build fairly simply, it enables developer to start working on what really matters,
in a few minutes.

= How do I change the settings? =
The settings can be changed in the block editor. It provides all the usually used settings, but you can also add your own custom settings. This will require some React and Gutenberg knowledge however.

= How can I add events? =
michu2k/Accordion provides a simple way to add events to the accordion. Just follow his guide, and add the JS to the ``frontend.js`` file.

= How does this block work? =
This block is build from two Gutenberg Blocks. The main accordion block, which wraps the inner accordion block elements. This is required, due to the nature of Gutenberg, and can not be solved with a single block at this time.
This enables you to add "any" content to the accordion. This is a common workaround and not a hacky solution.

== Changelog ==

= 0.1.0 =
* Release
