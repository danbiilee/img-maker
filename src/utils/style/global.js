import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --darkest-gray: #202020;
  --dark-gray: #333;
  --middle-gray: #555;
  --border-dark-gray: #7777777a;
  --border-light-gray: #aaaaaaba;
  --lightest-gray: #eee;
}
* {
  box-sizing: border-box;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--border-light-gray);
  }
  &::-webkit-scrollbar-track {
    background-color: var(--dark-gray);
  }
  &[aria-label] {
    position: relative;
  }
  &[aria-label]::after{
    content: attr(aria-label);
    opacity: 0;
    position: absolute;
    top: calc(100% + 3px);
    left: 0;
    padding: 3px;
    background-color: var(--dark-gray);
    font-size: 0.7rem;
    white-space: nowrap;
  }
  &[aria-label]:hover::after {
    opacity: 1;
    transition: 0.2s ease-in-out;
  }
}
html, body, #root {
  width: 100vw;
  height: 100vh;
}
body {
  color: var(--lightest-gray);
  font-family: 'Noto Sans KR', sans-serif;
}
a,
abbr,
acronym,
address,
applet,
article,
aside,
audio,
b,
big,
blockquote,
body,
canvas,
caption,
center,
cite,
code,
dd,
del,
details,
dfn,
div,
dl,
dt,
em,
embed,
fieldset,
figcaption,
figure,
footer,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
hgroup,
html,
i,
iframe,
img,
ins,
kbd,
label,
legend,
li,
main,
mark,
menu,
nav,
object,
ol,
output,
p,
pre,
q,
ruby,
s,
samp,
section,
small,
span,
strike,
strong,
sub,
summary,
sup,
table,
tbody,
td,
tfoot,
th,
thead,
time,
tr,
tt,
u,
ul,
var,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section {
  display: block;
}
[hidden] {
  display: none;
}
body {
  line-height: 1;
}
menu,
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
}
input, textarea, select, option {
  background: none;
  padding: 0;
  color: #333;
  border: 0;
  outline: 0;
  font-family: 'Noto Sans KR', sans-serif;
}
input, select, option {
  cursor: pointer;
}
`;

export default GlobalStyle;
