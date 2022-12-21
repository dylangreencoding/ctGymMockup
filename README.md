# ctGymMockup

I used home.html instead of index.html for the landing page.

Light javascript for smooth scrolling, automatically setting the dates on the Class Schedule page, and the modal window that asks if you are sure when you "log out".

I wanted to do more but felt I had already spent too much time here. For example, I wish I had consolidated the files into folders based on type, the way I did with the images, but I couldn't bring myself to go through and correct the href attribute of every link on the site. :P So here we are.

Same goes for media queries. This site isn't mobile-friendly, but it could be easily. For example, the grid on the homepage; in the html the grid boxes are laid out so that it could easily be collapsed into one column with the photos preceding the associated text by removing the class `zag` and setting `grid-template-columns: 1fr`.

I also started to add js to insert whatever username is entered into the log-in form into the h1 element of the logged-in page. But I'm having this issue where my event listeners are pseudo-registering click events as soon as the page is opened. I'm not sure whats going on with that yet.

I resized the images. Their intrinsic size is now double their displayed size. Everything on unsplash is enormous.

Hope this is what you were looking for. Now I have to figure out bootstrap.
