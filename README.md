blog
====

This is a reference implementation of a blog layout in [launch.ly](http://launch.ly)

## Requirements

- [Bootstrap 3](http://getbootstrap.com)
- [Font Awesome](http://fontawesome.io)
- [OWL Responsive Carousel](http://owlgraphic.com/owlcarousel/)

## Features

- Dynamic Breadcrumbs
- Responsive Layout
- Index of recent articles
- Semantic markup for offline browser readers
- Implementation of the [OWL Responsive Carousel](http://owlgraphic.com/owlcarousel/) as an image gallery
- Quick admin buttons
- Multi-column newspaper style layout, including drop caps
- Zero images


## Usage

If you are familiar with launch.ly's snippets, you will know that you can create a screen layout that matches a given URL pattern. 

For our blog, any url slug that starts with /blog is considered to be part of our blog (sounds sensible doesn't it?)

The address pattern regex that you are after is `^blog(.)*$`.

You will also need to load the related CSS in to your theme.
