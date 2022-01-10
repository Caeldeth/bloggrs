const { Comment } = require("../models");

const commentSeeds = [
    // comment data in objects
    {
        cmt_text: "The man who passes the sentence should swing the sword",
        cmt_usr_id: 1,
        cmt_pst_id: 11,
    },
    {
        cmt_text: "You Grew Up With Actors, You Learned Their Craft And You Learnt It Well. But I Grew Up With Soldiers. I Learned How To Die A Long Time Ago.",
        cmt_usr_id: 1,
        cmt_pst_id: 15,
    },
    {
        cmt_text: "The Madness Of Mercy. That She Might Save Her Children.",
        cmt_usr_id: 1,
        cmt_pst_id: 15,
    },
    {
        cmt_text: "You Want To Know The Horrible Truth? I Can't Even Remember What She Looked Like. I Only Know She Was The One Thing I Ever Wanted... Someone Took Her Away From Me, And Seven Kingdoms Couldn't Fill The Hole She Left Behind.",
        cmt_usr_id: 2,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "You Heard The Hand, The King's Too Fat For His Armor! Go Find The Breastplate Stretcher! NOW!",
        cmt_usr_id: 2,
        cmt_pst_id: 11,
    },
    {
        cmt_text: "Wear It In Silence Or I'll Honor You Again.",
        cmt_usr_id: 2,
        cmt_pst_id: 11,
    },
    {
        cmt_text: "By What Right Does The Wolf Judge The Lion?",
        cmt_usr_id: 3,
        cmt_pst_id: 10,
    },
    {
        cmt_text: "The Things I Do For Love.",
        cmt_usr_id: 3,
        cmt_pst_id: 6,
    },
    {
        cmt_text: "Jaime. My Name Is Jaime.",
        cmt_usr_id: 3,
        cmt_pst_id: 14,
    },
    {
        cmt_text: "You Look Lovely Tonight, Lady Stark. Widowhood Becomes You.",
        cmt_usr_id: 3,
        cmt_pst_id: 8,
    },
    {
        cmt_text: "I Pledged To Ride North. I Intend To Honor That Pledge.",
        cmt_usr_id: 3,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "On my honor as a Tully. On my honor as a Stark. Let him go, or I will CUT your wife's throat!",
        cmt_usr_id: 4,
        cmt_pst_id: 6,
    },
    {
        cmt_text: "How much could he possibly drink, a man of his... stature?",
        cmt_usr_id: 4,
        cmt_pst_id: 16,
    },
    {
        cmt_text: "Listen to yourselves. If you were sons of mine, I would knock your heads together and lock you in a bedchamber until you remembered that you were brothers.",
        cmt_usr_id: 4,
        cmt_pst_id: 6,
    },
    {
        cmt_text: "If you lose, your father dies, your sisters die, we die.",
        cmt_usr_id: 4,
        cmt_pst_id: 10,
    },
    {
        cmt_text: "You will strike me down? Have you forgotten me, ser? I am the widow of your liege lord, Eddard Stark! I am the mother of your king!",
        cmt_usr_id: 4,
        cmt_pst_id: 10,
    },
    {
        cmt_text: "Bran and Rickon are captives in Winterfell. Sansa and Arya are captives in King's Landing. I have five children, and only one of them is free.",
        cmt_usr_id: 4,
        cmt_pst_id: 9,
    },
    {
        cmt_text: "They both have their health, gods be good. The raven brought more news. The king rides for Winterfell... with the queen, and all the rest of them.",
        cmt_usr_id: 4,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "Shadowcats and hill tribes are the least of your concerns.",
        cmt_usr_id: 4,
        cmt_pst_id: 11,
    },
    {
        cmt_text: "Half The Targaryens Went Mad, Didn't They? What's The Saying? 'Every Time A Targaryen Is Born The Gods Flip A Coin.",
        cmt_usr_id: 5,
        cmt_pst_id: 4,
    },
    {
        cmt_text: "These Kingsguard Knights Are As Useless As Nipples On A Breastplate.",
        cmt_usr_id: 5,
        cmt_pst_id: 14,
    },
    {
        cmt_text: "People Will Whisper. They'll Make Their Jokes. Let Them. They're So Small, I Can't Even See Them.",
        cmt_usr_id: 5,
        cmt_pst_id: 13,
    },
    {
        cmt_text: "If I Wanted To Kill You, Do You Think I'd Let A Wooden Door Stop Me?",
        cmt_usr_id: 5,
        cmt_pst_id: 4,
    },
    {
        cmt_text: "Nobody Cares What Your Father Once Told You.",
        cmt_usr_id: 5,
        cmt_pst_id: 3,
    },
    {
        cmt_text: "Every Breath You Draw In My Presence Annoys Me.",
        cmt_usr_id: 5,
        cmt_pst_id: 3,
    },
    {
        cmt_text: "And I swear this. If you ever betray me, I’ll burn you alive.",
        cmt_usr_id: 6,
        cmt_pst_id: 1,
    },
    {
        cmt_text: "Not a Queen. A Khaleesi.",
        cmt_usr_id: 6,
        cmt_pst_id: 4,
    },
    {
        cmt_text: "You’re both here to advise me. I value your advice, but if you ever question me in front of strangers again, you’ll be advising someone else. Is that understood?",
        cmt_usr_id: 6,
        cmt_pst_id: 2,
    },
    {
        cmt_text: "We both want to help people. We can only help them from a position of strength. Sometimes strength is terrible.",
        cmt_usr_id: 6,
        cmt_pst_id: 11,
    },
    {
        cmt_text: "You are small men. None of you are fit to lead the Dothraki. But I am, so I will.",
        cmt_usr_id: 6,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "I’m no ordinary woman. My dreams come true.",
        cmt_usr_id: 6,
        cmt_pst_id: 8,
    },
    {
        cmt_text: "Fire cannot kill a dragon.",
        cmt_usr_id: 6,
        cmt_pst_id: 7,
    },
    {
        cmt_text: "There is a beast in every man, and it stirs when you put a sword in his hand.",
        cmt_usr_id: 7,
        cmt_pst_id: 5,
    },
    {
        cmt_text: "You know I would die for you. I will never abandon you. I'm sworn to protect you, to serve",
        cmt_usr_id: 7,
        cmt_pst_id: 4,
    },
    {
        cmt_text: "They’re dragons, Khaleesi. They can never be tamed. Not even by their mother.",
        cmt_usr_id: 7,
        cmt_pst_id: 9,
    },
    {
        cmt_text: "It's tempting to see your enemies as evil, all of them, but there is good and evil on both sides of every war ever fought.",
        cmt_usr_id: 7,
        cmt_pst_id: 5,
    },
    {
        cmt_text: "Khal Drogo is marching the wrong way with my army",
        cmt_usr_id: 8,
        cmt_pst_id: 5,
    },
    {
        cmt_text: "The brave men didn't kill dragons, the brave men rode them.",
        cmt_usr_id: 8,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "I want what I came for. I want the crown he promised me.",
        cmt_usr_id: 8,
        cmt_pst_id: 10,
    },
    {
        cmt_text: "What did I buy you for? To make me sad?",
        cmt_usr_id: 8,
        cmt_pst_id: 2,
    },
    {
        cmt_text: "My father taught me big men fall just as quick as little ones if you put a sword through their hearts.",
        cmt_usr_id: 9,
        cmt_pst_id: 16,
    },
    {
        cmt_text: "They were born on the wrong side of the Wall — doesn’t make them monsters.",
        cmt_usr_id: 9,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "Sometimes there Is no happy choice, only one less grievous than the others.",
        cmt_usr_id: 9,
        cmt_pst_id: 6,
    },
    {
        cmt_text: "His Grace Summoned Me To King's Landing, I'll Go To King's Landing. But Not Alone. Call The Banners!",
        cmt_usr_id: 10,
        cmt_pst_id: 1,
    },
    {
        cmt_text: "If We Do It Your Way, Kingslayer, You'd Win. We're Not Doing It Your Way.",
        cmt_usr_id: 10,
        cmt_pst_id: 1,
    },
    {
        cmt_text: "It's Better Than Three Defeats.",
        cmt_usr_id: 10,
        cmt_pst_id: 12,
    },
    {
        cmt_text: "I Asked Him, How Can A Man Be Brave If He's Afraid? That Is The Only Time A Man Can Be Brave, He Told Me.",
        cmt_usr_id: 10,
        cmt_pst_id: 14,
    },
    {
        cmt_text: "I'd Love A Fight. The Men Would Love A Fight. I Don't Think We're Going To Get One.",
        cmt_usr_id: 10,
        cmt_pst_id: 8,
    },
    {
        cmt_text: "I Could Have That Head On A Spike By Now. Instead, I Have A Mill.",
        cmt_usr_id: 10,
        cmt_pst_id: 11,
    },
    {
        cmt_text: "My Father Is Dead. And The Only Parent I Have Left Has No Right To Call Anyone Reckless.",
        cmt_usr_id: 10,
        cmt_pst_id: 1,
    },
];

// send to seed comments data
const seedComments = () => Comment.bulkCreate(commentSeeds);

// export comments seeds
module.exports = seedComments;
