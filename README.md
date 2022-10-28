# Renato Lacerda | Portfolio

This is the source code for my Portfolio. It's currently [live](https://ralacerda-portfolio.netlify.app/), but not done. This project, as well as this file, are constantly being worked on. If you have feedback, feel free to open an issue, send me a message or email.

## Design

I created the design for this portfolio which was a great challenge. It's not perfect, but I'm happy with the final result.
I'll most likely keep improving as a learn more about design.

## Coding

Here is the list of the main "tools" I used to build the portfolio.

- CSS3
- HTML5
- PostCSS
- Vue
- Vueuse
- Vite
- ViteSSG
- unplugin-icons

The CSS is far from perfect and does not use a framework, with a lot of room for improvements and refactoring, but that has a low priority right now.
Most of the CSS is scoped (inside `Vue` components), but I tried to use the BEM methodology in a few places to keep me sane.

PostCSS was really useful, specially with the `preset env` plugin, which helped with some fallback for `gaps`, media query ranges and others.
