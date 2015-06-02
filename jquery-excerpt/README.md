Excerpt

An extendable jQuery plugin for displaying expandable excerpts on a page.

Author: David G. Posey
URI: http://www.davidgposey.com
License: GPL
Version: 0.1

================================

Usage:
$(<selector>).excerpt(<settings>);

where <selector> is any jQuery recognized selector and <settings> is an object with any or all of the following options:

excerptLength
	type: positive integer
	default: 55
	The number of words in the automatically-generated excerpts.  
	
displayReadLess
	type: boolean
	default: true
	Whether you want the "read less" link to display or not.
	
readMoreLink
	type: string
	default: "... <a href='#' class='readmorelink'>Read more &darr;</a>"
	The HTML and text for the "read more" link.
	
readMoreLinkClass
	type: string
	default: "readmorelink"
	The CSS class assigned to your clickable object (probably an anchor) in readMoreLink.
	
readLessLink
	type: string
	default: "<p><a href='#' class='readlesslink'>Read less &uarr;</a></p>"
	The HTML and text for the "read less" link.
	
readLessLinkClass
	type: string
	default: "readlesslink"
	The CSS class assigned to your clickable object (probably an anchor) in readLessLink.

================================

Example Usage:

$(".text").excerpt({
	excerptLength: 40,
	displayReadLess: true,
	readMoreLink: "... <a href='#' class='bananas'>Read more &raquo;</a>",
	readMoreLinkClass: "bananas",
	readLessLink: "<p><a href='#' class='apples'>&laquo; Hide full content</a></p>",
	readLessLinkClass: "apples"
});

================================

Using Custom Excerpts:

If you would like to use custom excerpts instead of this plugin's automatically-generated excerpts, include an element with a class of "excerpt" directly inside the same block-level element as your content.  The plugin will capture this custom excerpt and then remove the element with a class of "excerpt", so you don't need to worry about hiding it.

================================

Custom Excerpt Example Usage:

<article>
	<h2>Lorem Ipsum</h2>
	<div class="text">
		<!-- content -- ".text" is the selector used when calling the excerpt() function -->
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor magna, consequat eget laoreet eget, faucibus quis metus. Sed tempor dolor aliquet tortor fermentum quis dictum elit accumsan. Aenean id arcu erat, sit amet molestie elit. Fusce libero elit, ultricies at sagittis nec, laoreet in dolor. Morbi vehicula velit id massa aliquet in vestibulum odio semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a felis felis, vel vestibulum eros. Etiam porta orci elementum lacus elementum in tincidunt erat vulputate. Etiam vel eros neque. Morbi euismod egestas libero, vitae aliquet leo consectetur id. Fusce euismod, tortor ac suscipit sodales, augue metus adipiscing metus, ac dictum nibh urna nec dui. Fusce porta, quam id scelerisque faucibus, ante dolor lacinia elit, elementum placerat ligula magna at nulla. Integer et sem ut urna lacinia pretium.
		</p>
		<p>
			Nunc volutpat arcu in massa euismod posuere. Integer neque nibh, accumsan ac feugiat in, suscipit sit amet sem. Nam dictum neque at lacus tincidunt rutrum. Quisque condimentum mi vitae enim auctor sed scelerisque dui placerat. Etiam lacus mauris, posuere sit amet mattis quis, eleifend consectetur purus. Etiam eu dolor vitae nisi pretium tempor sit amet pretium quam. Nam tincidunt pellentesque lectus suscipit convallis. Praesent justo lorem, mattis a tristique sit amet, aliquam vel nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas risus orci, volutpat id cursus a, mattis euismod nunc. Praesent at mauris in tortor iaculis fringilla eu id risus. 
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor magna, consequat eget laoreet eget, faucibus quis metus. Sed tempor dolor aliquet tortor fermentum quis dictum elit accumsan. Aenean id arcu erat, sit amet molestie elit. Fusce libero elit, ultricies at sagittis nec, laoreet in dolor. Morbi vehicula velit id massa aliquet in vestibulum odio semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a felis felis, vel vestibulum eros. Etiam porta orci elementum lacus elementum in tincidunt erat vulputate. Etiam vel eros neque. Morbi euismod egestas libero, vitae aliquet leo consectetur id. Fusce euismod, tortor ac suscipit sodales, augue metus adipiscing metus, ac dictum nibh urna nec dui. Fusce porta, quam id scelerisque faucibus, ante dolor lacinia elit, elementum placerat ligula magna at nulla. Integer et sem ut urna lacinia pretium.
		</p>
		<p>
			Nunc volutpat arcu in massa euismod posuere. Integer neque nibh, accumsan ac feugiat in, suscipit sit amet sem. Nam dictum neque at lacus tincidunt rutrum. Quisque condimentum mi vitae enim auctor sed scelerisque dui placerat. Etiam lacus mauris, posuere sit amet mattis quis, eleifend consectetur purus. Etiam eu dolor vitae nisi pretium tempor sit amet pretium quam. Nam tincidunt pellentesque lectus suscipit convallis. Praesent justo lorem, mattis a tristique sit amet, aliquam vel nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas risus orci, volutpat id cursus a, mattis euismod nunc. Praesent at mauris in tortor iaculis fringilla eu id risus. 
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor magna, consequat eget laoreet eget, faucibus quis metus. Sed tempor dolor aliquet tortor fermentum quis dictum elit accumsan. Aenean id arcu erat, sit amet molestie elit. Fusce libero elit, ultricies at sagittis nec, laoreet in dolor. Morbi vehicula velit id massa aliquet in vestibulum odio semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam a felis felis, vel vestibulum eros. Etiam porta orci elementum lacus elementum in tincidunt erat vulputate. Etiam vel eros neque. Morbi euismod egestas libero, vitae aliquet leo consectetur id. Fusce euismod, tortor ac suscipit sodales, augue metus adipiscing metus, ac dictum nibh urna nec dui. Fusce porta, quam id scelerisque faucibus, ante dolor lacinia elit, elementum placerat ligula magna at nulla. Integer et sem ut urna lacinia pretium.
		</p>
		<p>
			Nunc volutpat arcu in massa euismod posuere. Integer neque nibh, accumsan ac feugiat in, suscipit sit amet sem. Nam dictum neque at lacus tincidunt rutrum. Quisque condimentum mi vitae enim auctor sed scelerisque dui placerat. Etiam lacus mauris, posuere sit amet mattis quis, eleifend consectetur purus. Etiam eu dolor vitae nisi pretium tempor sit amet pretium quam. Nam tincidunt pellentesque lectus suscipit convallis. Praesent justo lorem, mattis a tristique sit amet, aliquam vel nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas risus orci, volutpat id cursus a, mattis euismod nunc. Praesent at mauris in tortor iaculis fringilla eu id risus. 
		</p>
		<div class="excerpt">
			<!-- custom excerpt -->
			I like bananas!!!!!!
		</div>
	</div>
</article>