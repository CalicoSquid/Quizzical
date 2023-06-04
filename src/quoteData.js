
export default function QuoteData() {
    const quotes = [
        ['“A man who asks is a fool for five minutes. A man who never asks is a fool for life.”—Chinese Proverb'],
        ['"He who learns but does not think, is lost! He who thinks but does not learn is in great danger.”—Confucius'],
        ['“The most useful piece of learning for the uses of life is to unlearn what is untrue.”—Antisthenes'],
        ['“Every act of conscious learning requires the willingness to suffer an injury to one\'s self-esteem. That is why young children, before they are aware of their own self-importance, learn so easily.”—Thomas Szasz'],
        ['“The whole purpose of education is to turn mirrors into windows.”―Sydney J. Harris'],
        ['“There is divine beauty in learning… To learn means to accept the postulate that life did not begin at my birth. Others have been here before me, and I walk in their footsteps.”―Elie Wiesel'],
        ['“Leadership and learning are indispensable to each other.”—John F. Kennedy'],
        ['“The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.”—Dr. Seuss'],
        ['“Those people who develop the ability to continuously acquire new and better forms of knowledge that they can apply to their work and to their lives will be the movers and shakers in our society for the indefinite future.”—Brian Tracy'],
        ['“If you are not willing to learn, no one can help you. If you are determined to learn, no one can stop you.”—Zig Ziglar'],
        ['“If you think education is expensive, try estimating the cost of ignorance.”—Howard Gardner'],
        ['“Study without desire spoils the memory, and it retains nothing that it takes in.”—Leonardo da Vinci'],
        ['“I am still learning.”—Michelangelo'],
        ['“The ability to speak exactly is intimately related to the ability to know exactly.”—Wendell Berry'],
        ['“Learning is synthesizing seemingly divergent ideas and data.”—Terry Heick'],
        ['“It\'s what you learn after you know it all that counts.”—Harry S Truman'],
        ['“You don\'t learn to walk by following rules. You learn by doing, and by falling over.”—Richard Branson'],
        ['“A moment\'s insight is sometimes worth a life\'s experience.”—Oliver Wendell Holmes'],
        ['“You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives.”—Clay P. Bedford'],
        ['“The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.”—Mortimer Adler'],
        ['“You cannot help but learn more as you take the world into your hands. Take it up reverently, for it is an old piece of clay, with millions of thumbprints on it.”―John Updike'],
        ['“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”―Malcolm X'],
        ['“Curiosity is the wick in the candle of learning.”―William Arthur Ward'],
        ['“Education is the ability to listen to almost anything without losing your temper or your self-confidence.”—Robert Frost'],
        ['“Change is the end result of all true learning.”―Leo Buscaglia'],
        ['"The expert in anything was once a beginner."—Anonymous'],
    ]

    const randomQuoteIndex = Math.floor(Math.random() * quotes.length)
    const styles = {
        fontSize: "0.9rem",
        fontWeight: 400,
        textAlign: "center",
        margin: "20px"
    }

    return (
        <>
        <p style={styles}>{quotes[randomQuoteIndex]}</p>
        </>
    )
        
}