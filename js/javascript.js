function returnToTop(){"use strict";window.scrollTo({top:0,behavior:"smooth"})}function MsgBoxPromote(t){"use strict";window.confirm(`\n Promote ${t} Room?\n`)?window.alert(`\n${t} Room is promoted`):window.alert(`\n${t} Room is not promoted`)}function dmOnClick(){"use strict";document.body.classList.toggle("light-theme");let t="dark";document.body.classList.contains("light-theme")&&(t="light"),localStorage.setItem("theme",t)}function getVersion(){"use strict";return 16}function $(t){"use strict";return document.getElementById(t)}function _(t){"use strict";return document.getElementsByTagName(t)}window.sUserName;