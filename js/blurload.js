function getAllImagesWithAttribute(attribute)	
{
	var matchingElements = [];
	var allElements = document.getElementsByTagName('img');
	for (var i = 0, n = allElements.length; i < n; i++)
	{
		if (allElements[i].getAttribute(attribute) !== null)
		{
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}
	return matchingElements;
}

function blurload() 
{
	if (document.images) 
	{
		var preloadsrc = [];
		var preloadableImages = getAllImagesWithAttribute('data-attr-full');
		// console.log(preloadableImages);

		for (i=0; preloadableImages.length > i; i++) 
		{
			preloadsrc[i] = new Image();
			preloadsrc[i]['element'] = preloadableImages[i];
			preloadsrc[i]['src'] = preloadableImages[i].dataset.attrFull;
			// console.log(preloadsrc[i]);
			addImageLoadedEvent(preloadsrc[i], preloadsrc[i]['element'], preloadsrc[i]['src']);
		}
	}
}

function addImageLoadedEvent(loaded, image, src) 
{
	loaded.onload = function() 
	{
		image.src = src;
		image.className = image.className.replace(/\bblurred\b/,'');
	}
}