import fs from 'fs';

const emoji = fs.readFileSync('emoji.json')
const emojiData = JSON.parse(emoji);

// const cleanedEmoji = emojiData.map(emoji => {
//     const { emoji: emojiChar, description } = emoji;
//     return { [description]: emojiChar }
// })

let cleanedEmoji = {};
emojiData.forEach(element => {
    const { emoji: emojiChar, description } = element;
    let cleanDescription = description
    if (description.includes('flag: ')) {
        cleanDescription = description.replace('flag: ', '')
    }
    cleanedEmoji[cleanDescription.toLowerCase()] = element.emoji;
});



// save the cleaned emoji data to a new file
fs.writeFileSync('clean_emoji.json', JSON.stringify(cleanedEmoji, null, 2));
