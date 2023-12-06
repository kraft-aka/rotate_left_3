// When a warrior wants to talk with another one about peace or war he uses a smartphone.
// In one distinct country warriors who spent all time in training kata not always have enough money.
// So if they call some number they want to know which operator serves this number.

// Write a function which accepts number and return name of operator or string "no info",
// if operator can't be defined. number always looks like 8yyyxxxxxxx, where yyy corresponds to operator.

// Here is short list of operators:

// 039 xxx xx xx - Golden Telecom
// 050 xxx xx xx - MTS
// 063 xxx xx xx - Life:)
// 066 xxx xx xx - MTS
// 067 xxx xx xx - Kyivstar
// 068 xxx xx xx - Beeline
// 093 xxx xx xx - Life:)
// 095 xxx xx xx - MTS
// 096 xxx xx xx - Kyivstar
// 097 xxx xx xx - Kyivstar
// 098 xxx xx xx - Kyivstar
// 099 xxx xx xx - MTS Test [Just return "MTS"]

function detectOperator(a) {
  a = a.toString();
  if (a.match(/.039/)) return "Golden Telecom";
  if (a.match(/.050/) || a.match(/.066/) || a.match(/.095/) || a.match(/.099/))
    return "MTS";
  if (a.match(/.067/) || a.match(/.096/) || a.match(/.097/ || a.match(/.098/)))
    return "Kyivstar";
  if (a.match(/.063/) || a.match(/.093/)) return "Life:)";
  else {
    return "no info";
  }
}
