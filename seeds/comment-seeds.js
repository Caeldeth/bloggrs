const { Comment } = require("../models");

const commentSeeds = [
    // comment data in objects
    {
        comment_text: "The man who passes the sentence should swing the sword",
        user_id: 1,
        post_id: 20,
    },
    {
        comment_text:
            "You Grew Up With Actors, You Learned Their Craft And You Learnt It Well. But I Grew Up With Soldiers. I Learned How To Die A Long Time Ago.",
        user_id: 1,
        post_id: 15,
    },
    {
        comment_text: "The Madness Of Mercy. That She Might Save Her Children.",
        user_id: 1,
        post_id: 15,
    },
    {
        comment_text:
            "You Want To Know The Horrible Truth? I Can't Even Remember What She Looked Like. I Only Know She Was The One Thing I Ever Wanted... Someone Took Her Away From Me, And Seven Kingdoms Couldn't Fill The Hole She Left Behind.",
        user_id: 2,
        post_id: 19,
    },
    {
        comment_text: "You Heard The Hand, The King's Too Fat For His Armor! Go Find The Breastplate Stretcher! NOW!",
        user_id: 2,
        post_id: 11,
    },
    {
        comment_text: "Wear It In Silence Or I'll Honor You Again.",
        user_id: 2,
        post_id: 20,
    },
    {
        comment_text: "By What Right Does The Wolf Judge The Lion?",
        user_id: 3,
        post_id: 10,
    },
    {
        comment_text: "The Things I Do For Love.",
        user_id: 3,
        post_id: 18,
    },
    {
        comment_text: "Jaime. My Name Is Jaime.",
        user_id: 3,
        post_id: 14,
    },
    {
        comment_text: "You Look Lovely Tonight, Lady Stark. Widowhood Becomes You.",
        user_id: 3,
        post_id: 8,
    },
    {
        comment_text: "I Pledged To Ride North. I Intend To Honor That Pledge.",
        user_id: 3,
        post_id: 19,
    },
    {
        comment_text: "On my honor as a Tully. On my honor as a Stark. Let him go, or I will CUT your wife's throat!",
        user_id: 4,
        post_id: 6,
    },
    {
        comment_text: "How much could he possibly drink, a man of his... stature?",
        user_id: 4,
        post_id: 16,
    },
    {
        comment_text:
            "Listen to yourselves. If you were sons of mine, I would knock your heads together and lock you in a bedchamber until you remembered that you were brothers.",
        user_id: 4,
        post_id: 18,
    },
    {
        comment_text: "If you lose, your father dies, your sisters die, we die.",
        user_id: 4,
        post_id: 10,
    },
    {
        comment_text:
            "You will strike me down? Have you forgotten me, ser? I am the widow of your liege lord, Eddard Stark! I am the mother of your king!",
        user_id: 4,
        post_id: 10,
    },
    {
        comment_text:
            "Bran and Rickon are captives in Winterfell. Sansa and Arya are captives in King's Landing. I have five children, and only one of them is free.",
        user_id: 4,
        post_id: 9,
    },
    {
        comment_text:
            "They both have their health, gods be good. The raven brought more news. The king rides for Winterfell... with the queen, and all the rest of them.",
        user_id: 4,
        post_id: 19,
    },
    {
        comment_text: "Shadowcats and hill tribes are the least of your concerns.",
        user_id: 4,
        post_id: 11,
    },
    {
        comment_text:
            "Half The Targaryens Went Mad, Didn't They? What's The Saying? 'Every Time A Targaryen Is Born The Gods Flip A Coin.",
        user_id: 5,
        post_id: 4,
    },
    {
        comment_text: "These Kingsguard Knights Are As Useless As Nipples On A Breastplate.",
        user_id: 5,
        post_id: 14,
    },
    {
        comment_text:
            "People Will Whisper. They'll Make Their Jokes. Let Them. They're So Small, I Can't Even See Them.",
        user_id: 5,
        post_id: 13,
    },
    {
        comment_text: "If I Wanted To Kill You, Do You Think I'd Let A Wooden Door Stop Me?",
        user_id: 5,
        post_id: 4,
    },
    {
        comment_text: "Nobody Cares What Your Father Once Told You.",
        user_id: 5,
        post_id: 3,
    },
    {
        comment_text: "Every Breath You Draw In My Presence Annoys Me.",
        user_id: 5,
        post_id: 3,
    },
    {
        comment_text: "And I swear this. If you ever betray me, I’ll burn you alive.",
        user_id: 6,
        post_id: 1,
    },
    {
        comment_text: "Not a Queen. A Khaleesi.",
        user_id: 6,
        post_id: 4,
    },
    {
        comment_text:
            "You’re both here to advise me. I value your advice, but if you ever question me in front of strangers again, you’ll be advising someone else. Is that understood?",
        user_id: 6,
        post_id: 2,
    },
    {
        comment_text:
            "We both want to help people. We can only help them from a position of strength. Sometimes strength is terrible.",
        user_id: 6,
        post_id: 20,
    },
    {
        comment_text: "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
        user_id: 6,
        post_id: 12,
    },
    {
        comment_text: "I’m no ordinary woman. My dreams come true.",
        user_id: 6,
        post_id: 8,
    },
    {
        comment_text: "Fire cannot kill a dragon.",
        user_id: 6,
        post_id: 7,
    },
    {
        comment_text: "There is a beast in every man, and it stirs when you put a sword in his hand.",
        user_id: 7,
        post_id: 5,
    },
    {
        comment_text: "You know I would die for you. I will never abandon you. I'm sworn to protect you, to serve",
        user_id: 7,
        post_id: 4,
    },
    {
        comment_text: "They’re dragons, Khaleesi. They can never be tamed. Not even by their mother.",
        user_id: 7,
        post_id: 9,
    },
    {
        comment_text:
            "It's tempting to see your enemies as evil, all of them, but there is good and evil on both sides of every war ever fought.",
        user_id: 7,
        post_id: 5,
    },
    {
        comment_text: "Khal Drogo is marching the wrong way with my army",
        user_id: 8,
        post_id: 5,
    },
    {
        comment_text: "The brave men didn't kill dragons, the brave men rode them.",
        user_id: 8,
        post_id: 19,
    },
    {
        comment_text: "I want what I came for. I want the crown he promised me.",
        user_id: 8,
        post_id: 10,
    },
    {
        comment_text: "What did I buy you for? To make me sad?",
        user_id: 8,
        post_id: 2,
    },
    {
        comment_text:
            "My father taught me big men fall just as quick as little ones if you put a sword through their hearts.",
        user_id: 9,
        post_id: 16,
    },
    {
        comment_text: "They were born on the wrong side of the Wall — doesn’t make them monsters.",
        user_id: 9,
        post_id: 19,
    },
    {
        comment_text: "Sometimes there Is no happy choice, only one less grievous than the others.",
        user_id: 9,
        post_id: 6,
    },
    {
        comment_text:
            "His Grace Summoned Me To King's Landing, I'll Go To King's Landing. But Not Alone. Call The Banners!",
        user_id: 10,
        post_id: 1,
    },
    {
        comment_text: "If We Do It Your Way, Kingslayer, You'd Win. We're Not Doing It Your Way.",
        user_id: 10,
        post_id: 1,
    },
    {
        comment_text: "It's Better Than Three Defeats.",
        user_id: 10,
        post_id: 12,
    },
    {
        comment_text:
            "I Asked Him, How Can A Man Be Brave If He's Afraid? That Is The Only Time A Man Can Be Brave, He Told Me.",
        user_id: 10,
        post_id: 14,
    },
    {
        comment_text: "I'd Love A Fight. The Men Would Love A Fight. I Don't Think We're Going To Get One.",
        user_id: 10,
        post_id: 8,
    },
    {
        comment_text: "I Could Have That Head On A Spike By Now. Instead, I Have A Mill.",
        user_id: 10,
        post_id: 11,
    },
    {
        comment_text: "My Father Is Dead. And The Only Parent I Have Left Has No Right To Call Anyone Reckless.",
        user_id: 10,
        post_id: 1,
    },
];

// send to seed comments data
const seedComments = () => Comment.bulkCreate(commentSeeds);

// export comments seeds
module.exports = seedComments;
