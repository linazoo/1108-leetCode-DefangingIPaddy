// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

//map through the string and if the char is a dot
// if it is replace it with [.]

var defangIPaddr = function (address) {
  const splitAddy = address.split("");
  const answer = [];
  for (let i = 0; i < splitAddy.length; i++) {
    if (splitAddy[i] === ".") {
      answer.push("[.]");
    } else {
      answer.push(splitAddy[i]);
    }
  }
  return answer.join("");
};

const answer = defangIPaddr("255.100.50.0");
console.log({ answer });
