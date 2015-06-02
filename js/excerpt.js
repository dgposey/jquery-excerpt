/*
	Excerpt, a jQuery plugin
	Author: David G. Posey
	URI: http://www.davidgposey.com
	License: GPL
	Version: 0.1
*/

(function($){
	$.fn.excerpt = function(userSettings){
		var settings = {
			excerptLength: 55,
			displayReadLess: true,
			readMoreLink: "... <a href='#' class='readmorelink'>Read more &darr;</a>",
			readMoreLinkClass: "readmorelink",
			readLessLink: "<p><a href='#' class='readlesslink'>Read less &uarr;</a></p>",
			readLessLinkClass: "readlesslink"
		}
		if(userSettings){
			$.extend(settings, userSettings);
		}
		
		var article;
		this.each(function(){
			article = $(this);
			
			// Fix a bug(?) that causes some (but not all) box elements to jump down then up when resizing
			if(article.css("padding-top") == "0px"){
				article.css("padding-top", "1px");
			}
			
			var theExcerpt;
			if(article.has(".excerpt").length){
				// Get the pre-defined excerpt, and remove it from the DOM.
				theExcerpt = "<p>" + article.children(".excerpt").html().trim() + settings.readMoreLink + "</p>";
				article.children(".excerpt").remove();
			}else{
				// Truncate content to specified length, add read-more link, and store it.  
				theExcerpt = "<p>" + article.text().split(" ", settings.excerptLength).join(" ").trim() + settings.readMoreLink + "</p>";
			}
			
			// Store content.
			var theContent = article.html();
			
			// Replace content with excerpt.
			article.html(theExcerpt);
				
			if(settings.displayReadLess){
				theContent += settings.readLessLink;
			}

			doExcerpt(article, theContent, theExcerpt, settings);
		});
		
		return this;
	}
})(jQuery)


function doExcerpt(article, theContent, theExcerpt, settings){
	// When read-more link is clicked:
	article.find("." + settings.readMoreLinkClass).click(function(e){
		e.preventDefault();
		
		// Store the height of the block when it has the excerpt in it.
		var excerptHeight = article.css("height");
		
		// Replace excerpt with content.
		article.html(theContent);
		
		// Store height value of article block.
		var contentHeight = article.css("height");
		
		// Set overflow: hidden and set back to excerpt height on article block and animate article block to height of content (stored value). 
		article.css({"overflow": "hidden", "height": excerptHeight});
		
		article.animate({"height": contentHeight}, 1000, function(){
			article.css({"height": "", "overflow": ""});
		});
		
		article.find("." + settings.readLessLinkClass).click(function(e){
			e.preventDefault();
			
			contentHeight = article.css("height");
			
			// Replace content with excerpt.
			article.html(theExcerpt);
			
			// Store the new height value of article block.
			excerptHeight = article.css("height");
			
			// Put the content back in the article block.
			article.html(theContent);
			
			// Set overflow: hidden and set back to content height on article block and animate article block to height of excerpt (stored value). 
			article.css({"overflow": "hidden", "height": contentHeight}).animate({"height": excerptHeight}, 1000, function(){
				article.html(theExcerpt).css({"height": "", "overflow": ""});
				doExcerpt(article, theContent, theExcerpt, settings);
			});
		});
	});
}