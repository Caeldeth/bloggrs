const { Post } = require('../models');

const postSeeds = [
// post data in objects
{
    pst_title: 'Winter is Coming',
    pst_content: "North of the Seven Kingdoms of Westeros, Night's Watch soldiers are attacked by supernatural White Walkers. One soldier escapes but is captured at Castle Winterfell. Eddard 'Ned' Stark, Warden of the North, executes him for desertion. Later, six orphaned dire wolf pups are found and one given to each Stark sibling, including Ned's bastard son, Jon Snow.",
    pst_usr_id: 10
  },
  {
    pst_title: 'The Kingsroad',
    pst_content: "Ned, the new Hand of the King, travels to King's Landing accompanied by his daughters, Sansa and Arya. Catelyn remains at Winterfell to care for the still unconscious Bran. An assassin attacks Bran, but Catelyn fends him off and Bran's direwolf, Summer, kills him. Catelyn suspects the Lannisters were behind the attack.",
    pst_usr_id: 8
  },
  {
    pst_title: 'Lord Snow',
    pst_content: "Ned attends the King's Small Council and learns Westeros has been poorly managed and deeply in debt. Catelyn travels to King's Landing to covertly warn her husband about the assassination attempt, but she is intercepted by her childhood friend, Councillor Petyr 'Littlefinger' Baelish.",
    pst_usr_id: 1
  },
  {
    pst_title: 'Cripples, Bastards, and Broken Things',
    pst_content: "While returning to King's Landing, Tyrion stops at Winterfell where he presents the Starks a saddle design that will allow the paraplegic Bran to ride a horse. Ned secretly investigates Jon Arryn's death. In the process, he discovers one of King Robert's illegitimate children, Gendry, an armorer.",
    pst_usr_id: 4
  },
  {
    pst_title: 'The Wolf and the Lion',
    pst_content: "King Robert's eunuch spy, Varys, has uncovered that Daenerys Targaryen is pregnant. Ned rejects Robert's plan to assassinate her, considering Daenerys a non-threat. He resigns in protest as Robert's Hand, angering the king. Catelyn and her prisoner, Tyrion, arrive at her sister Lysa Arryn's fortress home in the Eyrie.",
    pst_usr_id: 7
  },
  {
    pst_title: 'A Golden Crown',
    pst_content: "King Robert reappoints Ned as Hand and tasks him with running affairs until Robert returns from hunting. Villagers from Riverrun arrive with news of atrocities committed by raiders, who Ned deduces were led by Ser Gregor Clegane, a Lannister retainer. Ned sentences Ser Gregor to death and summons Tywin Lannister to a trial.",
    pst_usr_id: 4
  },
  {
    pst_title: 'The Pointy End',
    pst_content: "Arya escapes the Red Keep after Syrio Forel, her Braavosian sword master, fends off guards sent to arrest her, while Sansa is captured. Robb hears the news and prepares the Northern armies to fight the Lannisters, leaving Bran behind to rule Winterfell. Lysa refuses to fight the Lannisters, and Catelyn leaves to join Robb's camp.",
    pst_usr_id: 1
  },
  {
    pst_title: 'Baelor',
    pst_content: "The Stark army arrives at the Twins castle; Catelyn persuades Lord Walder Frey to allow them to pass through his land and assist them in exchange for Robb and Arya marrying two of Frey's many unattractive offspring in the future. At the Wall, Jeor Mormont gives his family Valyrian steel sword to Jon in gratitude; Maester Aemon reveals to Jon that Aemon is a Targaryen.",
    pst_usr_id: 1
  },
  {
    pst_title: 'Fire and Blood',
    pst_content: "The North secedes from the Seven Kingdoms and proclaims Robb as king. With Jaime as the Starks' prisoner and Robert's two brothers, Stannis and Renly, each challenging Joffrey's claim to the throne, Tywin appoints Tyrion as acting King's Hand, while Tywin fights to defend Joffrey's reign.",
    pst_usr_id: 9
  },
  {
    pst_title: 'The North Remembers',
    pst_content: "In King's Landing, Tyrion becomes acting Hand of the King, much to Cersei's dismay. At Dragonstone, Stannis proclaims allegiance to the priestess Melisandre's God of Light and claims the Iron Throne, having revealed Joffrey's bastardy. Joffrey orders King Robert's bastard sons slaughtered.",
    pst_usr_id: 5
  },
  {
    pst_title: 'The Night Lands',
    pst_content: "Returning to Pyke Island after nine years as the Starks' ward, Theon is reunited with his sister, Yara, and his father, Balon, who despises Theon's acquired Northern ways. Balon plots to win back his crown by force. Cersei rejects Robb's terms, and Tyrion exiles Slynt, head of the Gold Cloaks, to the Knight's Watch, and promotes Bronn to Commander of the Watch.",
    pst_usr_id: 3
  },
  {
    pst_title: 'What Is Dead May Never Die',
    pst_content: "Catelyn arrives at Renly's camp to negotiate an alliance. The female warrior, Brienne of Tarth, wins the right to join Renly's king's guard through combat. Renly has recently wed Margaery Tyrell, Loras's sister. Renly avoids consummating his and Margaery's marriage due to his homosexuality and sexual relationship with Loras",
    pst_usr_id: 10
  },
  {
    pst_title: 'Garden of Bones',
    pst_content: "Catelyn attempts to unite the Baratheon brothers against the Lannisters, but Stannis demands Renly's loyalty to him as king. Littlefinger visits Catelyn and offers to trade Jaime for her daughters. Davos witnesses Melisandre giving birth to a shadow creature. Joffrey publicly abuses Sansa as revenge for Robb's victories until Tyrion intervenes.",
    pst_usr_id: 8
  },
  {
    pst_title: 'The Ghost of Harrenhal',
    pst_content: "At Harrenhal, Jaqen H'ghar, one of three caged prisoners Arya previously saved, pledges to kill any three people she chooses to repay his debt to her. Her first choice is the Tickler, the man who mortally tortures the captives. Renly is killed by Melisandre's shadowy assassin. Lady Brienne is accused of the murder and Catelyn forces her to flee the camp.",
    pst_usr_id: 3
  },
  {
    pst_title: 'The Old Gods and the New',
    pst_content: "Theon and his men pursue Brandon and Rickon. Tywin has Harrenhal searched for his officer's killer. Jon recaptures Ygritte, but she escapes again, leading him into a trap. Still shaken from the riot, Sansa is horrified that she has begun menstruating and is now old enough to marry and bear Joffrey's children.",
    pst_usr_id: 3
  },
  {
    pst_title: 'The Prince of Winterfell',
    pst_content: "Robb learns that Catelyn secretly freed Jaime Lannister, who Brienne is escorting to ransom him in exchange for Sansa and Arya; Robb places his mother under house arrest and sends men to capture Jaime. Robb is attracted to a spirited medic, Talisa Maegyr, a woman from Volantis. ",
    pst_usr_id: 7
  }
];

// send to seed post data
const seedPosts = () => Post.bulkCreate(postSeeds);

// export posts seeds
module.exports = seedPosts;