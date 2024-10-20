const noises = [
    'Meow',
    'Purr',
    'Chirp',
    'Hiss',
    'Yowl',
    'Growl',
    'Howl',
    'Chatter',
    'Trill',
    'Chirrup',
    'Mew',
    'Pip',
    'Yelp',
    'Screech',
    'Squeak',
    'Squawk',
    'Hiss',
    'Roar',
    'Scream',
    'Caterwaul',
    'Bellow',
    'Whine',
    'Whimper',
    'Yap',
]

function getRandomCatNoise() {
    return noises[Math.floor(Math.random() * noises.length)]
}

module.exports = getRandomCatNoise