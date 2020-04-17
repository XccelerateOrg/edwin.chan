# Navigation bar
Classic Bootstrap 4 NavBar
The menu collapses to button when viewport width <768px
NavBar link changes red when scroll to corresponding heading & hover on it
Click NavBar link and move to heading smoothly by using
Bootstrap attributes (data-spy="scroll" data-target="#menu")


# Carousel
the Background images is set to fit the whole viewport
the images change every two second
set the interval to 2 seconds in jquery 
the carousel indicators allow users to choose the images
bootstrap attributes (class=carousel-slide data-ride:carousel)


# Self-introduction
The breifing and images are put within a jumbotron.
all images have no paddings and margins
When hover over them, a short description pop out with a black layer,
The Black layer transforms from scaleY(0) to scaleY(1) in 0.5 seconds
the images also transforms from scale(1) toscale(1.1)  in 0.5 seconds
images occupy 6 column when viewport width<768

# Photo album
Made with Bootstrap card-gallery
shortly introduce different mountains that I hiked last few months
images occupy 12 (full) column when viewport width<768

# Why choose Bootcamp
Click the star then a pixel man and a division pop up
the star is a fontawesome icons
the star fade out in 1 seconds
the icons of human appears only when viewport width >768 and it fade- toggles in every 2 seconds
jquery .animate() setInterval .fadeto .fadeToggle etc.

# Contact me
Simple form structure
when you try to type something in the input the form disappear 
only the text area and two new messages left
the submit button change to not a submit button
when clicking the button this section slideup and an images call under construction appears.
jquery .slideUp() .slideDown() .remove() event.preventDefault() etc.
