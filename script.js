const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteCategory = document.getElementById('quoteCategory');

const quotes = [
    {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Motivation"
        },
        
        {
        "text": "In the middle of difficulty lies opportunity.",
        "author": "Albert Einstein",
        "category": "Wisdom"
        },
        
        {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt",
        "category": "Inspiration"
        },
        
        {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "category": "Perseverance"
        },
        
        {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
        "category": "Resilience"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Self-Discovery"
        },
        
        {
        "text": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson",
        "category": "Productivity"
        },
        
        {
        "text": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky",
        "category": "Opportunity"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Hope"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Motivation"
        },
        
        {
        "text": "In the middle of difficulty lies opportunity.",
        "author": "Albert Einstein",
        "category": "Wisdom"
        },
        
        {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt",
        "category": "Inspiration"
        },
        
        {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "category": "Perseverance"
        },
        
        {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
        "category": "Resilience"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Self-Discovery"
        },
        
        {
        "text": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson",
        "category": "Productivity"
        },
        
        {
        "text": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky",
        "category": "Opportunity"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Hope"
        },
        
        {
        "text": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll",
        "category": "Attitude"
        },
        
        {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker",
        "category": "Innovation"
        },
        
        {
        "text": "The only person you should try to be better than is the person you were yesterday.",
        "author": "Unknown",
        "category": "Self-Improvement"
        },
        
        {
        "text": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "category": "Perseverance"
        },
        
        {
        "text": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill",
        "category": "Action"
        },
        
        {
        "text": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill",
        "category": "Success"
        },
        
        {
        "text": "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        "author": "Joel Brown",
        "category": "Dreams"
        },
        
        
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Motivation"
        },
        
        {
        "text": "In the middle of difficulty lies opportunity.",
        "author": "Albert Einstein",
        "category": "Wisdom"
        },
        
        {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt",
        "category": "Inspiration"
        },
        
        {
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "category": "Perseverance"
        },
        
        {
        "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author": "Nelson Mandela",
        "category": "Resilience"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Self-Discovery"
        },
        
        {
        "text": "Don't watch the clock; do what it does. Keep going.",
        "author": "Sam Levenson",
        "category": "Productivity"
        },
        
        {
        "text": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky",
        "category": "Opportunity"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Hope"
        },
        
        {
        "text": "Life is 10% what happens to us and 90% how we react to it.",
        "author": "Charles R. Swindoll",
        "category": "Attitude"
        },
        
        {
        "text": "The best way to predict the future is to create it.",
        "author": "Peter Drucker",
        "category": "Innovation"
        },
        
        {
        "text": "The only person you should try to be better than is the person you were yesterday.",
        "author": "Unknown",
        "category": "Self-Improvement"
        },
        
        {
        "text": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "category": "Perseverance"
        },
        
        {
        "text": "Don't wait. The time will never be just right.",
        "author": "Napoleon Hill",
        "category": "Action"
        },
        
        {
        "text": "Success is walking from failure to failure with no loss of enthusiasm.",
        "author": "Winston Churchill",
        "category": "Success"
        },
        
        {
        "text": "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
        "author": "Joel Brown",
        "category": "Dreams"
        },
        {
        "text": "The harder I work, the luckier I get.",
        "author": "Gary Player",
        "category": "Success"
        },
        
        {
        "text": "Don't be afraid to give up the good to go for the great.",
        "author": "John D. Rockefeller",
        "category": "Ambition"
        },
        
        {
        "text": "The greatest risk is not taking any risk.",
        "author": "Mark Zuckerberg",
        "category": "Courage"
        },
        
        {
        "text": "You can't use up creativity. The more you use, the more you have.",
        "author": "Maya Angelou",
        "category": "Creativity"
        },
        
        {
        "text": "Success usually comes to those who are too busy to be looking for it.",
        "author": "Henry David Thoreau",
        "category": "Opportunity"
        },
        
        {
        "text": "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.",
        "author": "Mark Zuckerberg",
        "category": "Risk"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        },
        
        {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett",
        "category": "Fear"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
        },
        
        {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
        },
        
        {
        "text": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers",
        "category": "Moving Forward"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
        },
        
        {
        "text": "The biggest adventure you can take is to live the life of your dreams.",
        "author": "Oprah Winfrey",
        "category": "Adventure"
        },
        
        {
        "text": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Aisha Tyler",
        "category": "Persistence"
        },
        {
        "text": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett",
        "category": "Identity"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        },
        
        {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett",
        "category": "Fear"
        },
        
        {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
        },
        
        {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
        },
        
        {
        "text": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers",
        "category": "Moving Forward"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
        },
        
        {
        "text": "The biggest adventure you can take is to live the life of your dreams.",
        "author": "Oprah Winfrey",
        "category": "Adventure"
        },
        
        {
        "text": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Aisha Tyler",
        "category": "Persistence"
        },
        
        {
        "text": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett",
        "category": "Identity"
        },
        
        {
        "text": "The biggest risk is not taking any risk.",
        "author": "Mark Zuckerberg",
        "category": "Risk"
        },
        
        {
        "text": "Believe you can and you're halfway there.",
        "author": "Theodore Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        },
        
        {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett",
        "category": "Fear"
        },
        
        {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
        },
        
        {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
        },
        
        {
        "text": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers",
        "category": "Moving Forward"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
        },
        
        {
        "text": "The biggest adventure you can take is to live the life of your dreams.",
        "author": "Oprah Winfrey",
        "category": "Adventure"
        },
        
        {
        "text": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Aisha Tyler",
        "category": "Persistence"
        },
        
        {
        "text": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett",
        "category": "Identity"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        },
        
        {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett",
        "category": "Fear"
        },
        
        {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
        },
        
        {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
        },
        
        {
        "text": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers",
        "category": "Moving Forward"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
        },
        
        {
        "text": "The biggest adventure you can take is to live the life of your dreams.",
        "author": "Oprah Winfrey",
        "category": "Adventure"
        },
        
        {
        "text": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Aisha Tyler",
        "category": "Persistence"
        },
        
        {
        "text": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett",
        "category": "Identity"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        },
        
        {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett",
        "category": "Fear"
        },
        
        {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
        },
        
        {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
        },
        
        {
        "text": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers",
        "category": "Moving Forward"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
        },
        
        {
        "text": "The biggest adventure you can take is to live the life of your dreams.",
        "author": "Oprah Winfrey",
        "category": "Adventure"
        },
        
        {
        "text": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Aisha Tyler",
        "category": "Persistence"
        },
        
        {
        "text": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett",
        "category": "Identity"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        },
        
        {
        "text": "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "author": "Roy T. Bennett",
        "category": "Fear"
        },
        
        {
        "text": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        "author": "Albert Schweitzer",
        "category": "Happiness"
        },
        
        {
        "text": "The best revenge is massive success.",
        "author": "Frank Sinatra",
        "category": "Success"
        },
        
        {
        "text": "Don't let yesterday take up too much of today.",
        "author": "Will Rogers",
        "category": "Moving Forward"
        },
        
        {
        "text": "The only limit to our realization of tomorrow will be our doubts of today.",
        "author": "Franklin D. Roosevelt",
        "category": "Belief"
        },
        
        {
        "text": "The future belongs to those who believe in the beauty of their dreams.",
        "author": "Eleanor Roosevelt",
        "category": "Dreams"
        },
        
        {
        "text": "Your time is limited, don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
        },
        
        {
        "text": "The biggest adventure you can take is to live the life of your dreams.",
        "author": "Oprah Winfrey",
        "category": "Adventure"
        },
        
        {
        "text": "Success is not the absence of failure; it's the persistence through failure.",
        "author": "Aisha Tyler",
        "category": "Persistence"
        },
        
        {
        "text": "Success is not in what you have, but who you are.",
        "author": "Bo Bennett",
        "category": "Identity"
        },
        
        {
        "text": "The only way to do great work is to love what you do.",
        "author": "Steve Jobs",
        "category": "Passion"
        },
        
        {
        "text": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "author": "Christian D. Larson",
        "category": "Self-Belief"
        }
];
const imageCategories = ["nature","birds","thinker","tiger", "architecture", "animals", "travel", "food","space","people","old","age","dream","clouds","sunset"];

function getRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = `— ${randomQuote.author}`;
    quoteCategory.textContent = randomQuote.category;

    const randomCategory = imageCategories[Math.floor(Math.random() * imageCategories.length)];


    fetch(`https://pixabay.com/api/?key=36925233-3a1bfe9981319ff4958190a48&q=${randomCategory}&image_type=photo&pretty=true&orientation=vertical&min_width=720&min_height=1280`)
    .then(response => response.json())
    .then(data => {
        const randomImage = data.hits[Math.floor(Math.random() * data.hits.length)];
        document.body.style.backgroundImage = `url(${randomImage.webformatURL})`;
    })
    .catch(error => console.error(error));
}

getRandomQuote();
