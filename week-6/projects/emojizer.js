function emojize() {
  const emojiCodes = {
    ":thumbs_up:": "👍",
    ":thumbs_down:": "👎",
    ":earth_americas:": "🌎",
    ":earth_asia:": "🌏",
  };
  let input = prompt("Enter string");
  for (let key of Object.keys(emojiCodes)) {
    if (input.includes(key)) {
      input = input.replace(key, emojiCodes[key]);
    }
  }
  return input;
}
emojize();
