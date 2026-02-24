// --- CONFIGURATION ---
const KEY = 'fei_art_history_v4'; // New key to clear old local test data

// --- FULL ACADEMIC CURRICULUM (20 SESSIONS) ---
const CURRICULUM = [
  {
    id: 1, 
    title: "The Dawn of Art (Prehistoric)", 
    era: "30,000 BCE - 2,000 BCE",
    
    // Fixed: Uses the official YouTube /embed/ format so it plays inside your website
    videoUrl: "https://www.youtube.com/embed/ZjejoT1gFOc", 
    
    lecture: "<h3>Art for Survival, Not Decoration</h3><p>Before writing, before cities, and before agriculture, early humans created astonishingly sophisticated art deep inside pitch-black cave systems like <strong>Lascaux</strong> and <strong>Chauvet</strong> in modern-day France.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Materials:</strong> Artists used earth pigments (red and yellow ochre, charcoal) mixed with animal fat or spit. They applied paint using their fingers, animal hair brushes, or by blowing pigment through hollow bones.</li><li><strong>Subject Matter:</strong> They almost exclusively painted large animals (horses, bison, deer). Humans are rarely depicted, and when they are, they are usually simple stick figures.</li><li><strong>Three-Dimensionality:</strong> They purposefully painted over the natural bulges of the cave walls to give the animals 3D volume in the flickering torchlight.</li><li><strong>Portable Art:</strong> They also created small sculptures, like the <em>Venus of Willendorf</em>, which exaggerated the female form to emphasize fertility and survival.</li></ul><p>These artworks were not meant to be seen by the general public. They were likely part of sacred shamanistic rituals to ensure successful hunts or to honor animal spirits.</p>",
    
    criticalThinking: "Imagine you are an early human living a harsh life where survival is a daily struggle. Why would you spend immense time, energy, and resources crawling into a dangerous, dark cave just to paint a bison on the ceiling?",
    
    mission: "<strong>The Cave Wall Texture Study:</strong> Find a brown paper bag and crumple it up tightly into a ball. Flatten it back out so it has deep wrinkles and a rocky texture. Using charcoal or a soft, dark pencil, draw a running animal. Notice how the texture of the paper forces your drawing to change, just like the bumpy cave walls.",
    
    // Fixed: Using direct high-res Wikimedia source links instead of thumbnails
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Lascaux_painting.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Venus_of_Willendorf_frontview_retouched_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Paleolithic Art Introduction", url: "https://smarthistory.org/paleolithic-art/" },
      { name: "The Met: Lascaux Cave Overview", url: "https://www.metmuseum.org/toah/hd/lasc/hd_lasc.htm" },
      { name: "Google Arts & Culture: Explore Chauvet Cave", url: "https://artsandculture.google.com/project/chauvet-cave" }
    ],
    
    quiz: [
      { q: "What is the most common subject matter found in Paleolithic cave paintings?", opts: ["Human portraits", "Large wild animals", "Landscapes and trees"], ans: 1 },
      { q: "How did cave artists give their animal paintings a 3D, muscular appearance?", opts: ["By using the natural bulges of the rock wall", "By painting perfect shadows", "By carving them out of marble"], ans: 0 },
      { q: "What materials were used to create the paint?", opts: ["Oil and canvas", "Earth pigments (ochre/charcoal) and animal fat", "Crushed berries and water"], ans: 1 },
      { q: "Why are these paintings located deep inside dark cave systems?", opts: ["To protect them from the rain", "They were likely used for sacred, private rituals", "Early humans lived deep inside the caves"], ans: 1 },
      { q: "What does the small 'Venus of Willendorf' statue likely represent?", opts: ["A specific queen", "A child's toy", "Fertility and the survival of the species"], ans: 2 }
    ]
  },
  {
    id: 2, 
    title: "Mesopotamia: Order from Chaos", 
    era: "3500 BCE - 539 BCE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's "Ancient Near East" overview
    videoUrl: "https://www.youtube.com/embed/6ZYnYBGLqyU", 
    
    lecture: "<h3>The Cradle of Civilization</h3><p>As humans settled in the fertile land between the Tigris and Euphrates rivers, the first cities and empires rose. Art was no longer just for survival or secret rituals; it became a powerful tool for <strong>political propaganda</strong> and civic order.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Cuneiform:</strong> The Sumerians invented the first known writing system. They used wedge-shaped styluses to press marks into wet clay tablets, keeping records of trade, laws, and epic stories (like the <em>Epic of Gilgamesh</em>).</li><li><strong>Ziggurats:</strong> Because the landscape was flat, they built massive, stepped pyramid temples called Ziggurats. These were literal 'stairways to heaven' designed to bridge the gap between the human and divine realms.</li><li><strong>Art as Power:</strong> Artifacts like the <em>Standard of Ur</em> (showing War and Peace) and the <em>Stele of Hammurabi</em> (the first written legal code) were created to prove to the public that the King's power was granted directly by the gods.</li><li><strong>The Ishtar Gate:</strong> Constructed by Nebuchadnezzar II in Babylon, this massive entrance was covered in brilliant blue glazed bricks and adorned with golden lions and dragons to awe and intimidate visitors.</li></ul>",
    
    criticalThinking: "Look at the Stele of Hammurabi. King Hammurabi carved his strict laws into a giant stone monument for the whole city to see. However, 99% of his citizens could not read. Why would a king display a massive written document to a society that couldn't read it?",
    
    mission: "<strong>The Cuneiform Study:</strong> You do not need a pen to write like a Sumerian. Flatten out a piece of clay, play-dough, or even thick dough. Take a chopstick, a flat screwdriver, or the edge of a ruler. Instead of 'drawing' lines, practice pressing the flat edge into the surface to leave wedge-shaped marks. Try to create a repeating geometric pattern or your own secret alphabet.",
    
    // Direct, high-res Wikimedia links (Stele of Hammurabi, Standard of Ur, Ishtar Gate)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/c/c5/Code_of_Hammurabi_Louvre_Museum.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Standard_of_ur.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Ishtar_Gate_at_Berlin_Museum.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Guide to Ancient Near Eastern Art", url: "https://smarthistory.org/a-guide-to-ancient-near-eastern-art-smarthistory-book/" },
      { name: "The Met: Ancient Near East Timeline", url: "https://www.metmuseum.org/toah/hd/meso/hd_meso.htm" },
      { name: "British Museum: The Standard of Ur", url: "https://www.britishmuseum.org/collection/object/ME_1928-1010-3" }
    ],
    
    quiz: [
      { q: "What was the primary architectural purpose of a Mesopotamian Ziggurat?", opts: ["A tomb for dead kings", "A stepped temple to bridge the earth and the heavens", "A military fortress"], ans: 1 },
      { q: "What is the name of the first known writing system invented by the Sumerians?", opts: ["Hieroglyphics", "Alphabet", "Cuneiform"], ans: 2 },
      { q: "The famous 'Standard of Ur' is a wooden box with mosaics on both sides. What do the two main sides represent?", opts: ["War and Peace", "Day and Night", "Summer and Winter"], ans: 0 },
      { q: "What visual technique was used to make the famous Ishtar Gate of Babylon so vibrant?", opts: ["Bright blue glazed bricks", "Solid gold plating", "Painted marble"], ans: 0 },
      { q: "Why did King Hammurabi carve his laws into a giant stone stele featuring an image of the Sun God?", opts: ["Because paper had not been invented yet", "To publicly demonstrate that his authority to rule came directly from the gods", "To decorate the interior of his private palace"], ans: 1 }
    ]
  },
  {
    id: 3, 
    title: "Ancient Egypt: Art for Eternity", 
    era: "3100 BCE - 30 BCE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's Ancient Egypt introduction
    videoUrl: "https://www.youtube.com/embed/xVf5kZA0HtQ", 
    
    lecture: "<h3>Creating the Eternal</h3><p>Egyptian art was not created to be hung in a gallery or admired by the public. Most of the greatest Egyptian masterpieces were sealed away in dark tombs. Art was a practical, magical tool designed to ensure the survival of the soul (the <em>Ka</em>) in the afterlife.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Composite View (Twisted Perspective):</strong> Egyptian artists didn't draw what they <em>saw</em>; they drew what they <em>knew</em>. To show the most recognizable parts of a human body, they combined different viewpoints: the face, hips, and legs are shown from the side (profile), but the eye and shoulders are shown from the front.</li><li><strong>Hieratic Scale:</strong> Size equals importance. The Pharaoh is always drawn significantly larger than his wife, servants, or defeated enemies.</li><li><strong>Permanence over Realism:</strong> Because statues served as backup bodies for the soul in case the mummy was destroyed, they had to be flawless and eternal. Pharaohs were carved from incredibly hard stone (like diorite) in rigid, block-like poses with no fragile, breakable parts extending outward.</li><li><strong>Three Millennia of Consistency:</strong> While modern art changes every decade, Egyptian art style remained almost entirely unchanged for 3,000 years to maintain <em>Ma'at</em> (cosmic order and balance).</li></ul>",
    
    criticalThinking: "Modern artists are constantly trying to invent new styles, break the rules, and 'think outside the box.' In contrast, Egyptian artists strictly followed the exact same visual rules for 3,000 years. Why did the Ancient Egyptians view changing the artistic rules as a terrible, dangerous thing?",
    
    mission: "<strong>The Composite View Study:</strong> Try to draw a self-portrait using the strict rules of Egyptian twisted perspective. Draw your head facing completely to the side (profile). Now, draw your eye looking straight at the viewer. Draw your shoulders facing front, but your hips and feet pointing sideways. It will feel very awkward to draw, but notice how clearly identifiable every part of your body is!",
    
    // Direct, high-res Wikimedia links (Pyramids, Palette of Narmer, Tutankhamun Mask)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Narmer_Palette.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tutanchamun_Maske.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Ancient Egypt", url: "https://smarthistory.org/ancient-egypt-intro/" },
      { name: "The Met: Art of Ancient Egypt", url: "https://www.metmuseum.org/toah/hd/egan/hd_egan.htm" },
      { name: "Google Arts & Culture: Ancient Egypt", url: "https://artsandculture.google.com/entity/ancient-egypt/m01z85" }
    ],
    
    quiz: [
      { q: "What was the primary function of most Ancient Egyptian art?", opts: ["To decorate the palaces of the living", "To magically ensure the survival of the soul in the afterlife", "To serve as historical records for other countries"], ans: 1 },
      { q: "What is the visual rule where the most important figure is drawn significantly larger than everyone else?", opts: ["Hieratic Scale", "Linear Perspective", "Contrapposto"], ans: 0 },
      { q: "Why were Egyptian statues of Pharaohs usually carved in rigid, block-like poses from hard stone?", opts: ["Because artists didn't have good tools", "To ensure the statue wouldn't break, serving as a permanent home for the soul", "Because Pharaohs were forced to stand completely still for days"], ans: 1 },
      { q: "In the 'Composite View', how is the human eye depicted?", opts: ["From the side (profile)", "From the front, even though the face is turned to the side", "It is usually left blank or closed"], ans: 1 },
      { q: "Roughly how long did the primary style of Ancient Egyptian art last before the empire fell?", opts: ["300 years", "1,000 years", "3,000 years"], ans: 2 }
    ]
  },
{
    id: 4, 
    title: "Ancient Greece: The Ideal Human", 
    era: "900 BCE - 30 BCE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's Greek Art overview
    videoUrl: "https://www.youtube.com/embed/gt-hQkE2Tus", 
    
    lecture: "<h3>Man is the Measure of All Things</h3><p>Unlike the Egyptians who focused on the afterlife and gods, the Ancient Greeks focused on humanity. They believed that studying human beings and the natural world was the path to understanding the divine. This philosophy is called <strong>Humanism</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Mathematical Beauty:</strong> The Greeks believed that beauty was not subjective; it was based on strict mathematical ratios and proportions (like the Golden Ratio). This is visible in both their perfect statues and the architecture of temples like the <em>Parthenon</em>.</li><li><strong>The Invention of Contrapposto:</strong> In the Classical period, artists figured out how to make statues look truly alive. Instead of standing stiff and straight, statues were carved with their weight shifted onto one leg. This creates a relaxed, natural 'S-curve' in the spine and hips called <em>Contrapposto</em> (counter-pose).</li><li><strong>Evolution of Style:</strong> Greek art evolved rapidly. It started stiff and geometric (Archaic period), moved to perfect and calm ideal beauty (Classical period), and ended with highly emotional, dramatic, and realistic action (Hellenistic period).</li><li><strong>Pottery as Canvas:</strong> Because most Greek wall paintings were destroyed over time, we study their painting techniques through their pottery, specifically the intricate 'Black-Figure' and 'Red-Figure' vases.</li></ul>",
    
    criticalThinking: "For centuries, people believed Greek statues were made of pure, elegant white marble, and modern museums display them that way. However, scientists have recently proven that the Greeks actually painted their statues in bright, loud, almost cartoonish colors—the paint just wore off over 2,000 years. How does knowing this change your perception of 'classical elegance'?",
    
    mission: "<strong>The Contrapposto Line Study:</strong> Stand in front of a mirror with your feet together and your weight perfectly balanced. Notice how straight your spine is. Now, shift all your weight onto your right leg and let your left knee bend. Look at what happens to your shoulders and hips—they tilt! On a piece of paper, draw two stick figures: one standing stiff, and one showing the tilted shoulders and 'S' curve spine of the Contrapposto pose.",
    
    // Direct, high-res Wikimedia links (Parthenon, Doryphoros statue, Greek Vase)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Parthenon_from_west.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Doryphoros_MAN_Napoli_Inv6011-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Amphora_Heracles_Geryon_Staatliche_Antikensammlungen_137.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Introduction to Greek Art", url: "https://smarthistory.org/greek-art-intro/" },
      { name: "The Met: Art of Classical Greece", url: "https://www.metmuseum.org/toah/hd/tacg/hd_tacg.htm" },
      { name: "Google Arts: The Parthenon Sculptures", url: "https://artsandculture.google.com/story/the-parthenon-sculptures/kgWR4pA_7_FzKQ" }
    ],
    
    quiz: [
      { q: "What is the philosophical belief that human beings are the center of the universe and the measure of all things?", opts: ["Polytheism", "Humanism", "Verism"], ans: 1 },
      { q: "What is 'Contrapposto'?", opts: ["A type of marble used for carving", "A painting technique using black and red clay", "A natural, relaxed standing pose with the weight shifted to one leg"], ans: 2 },
      { q: "How did the Ancient Greeks define 'beauty'?", opts: ["As an expression of intense emotion", "As perfect mathematical proportions and ratios", "As something chaotic and natural"], ans: 1 },
      { q: "What did original Ancient Greek marble statues look like when they were first made?", opts: ["Pure white and polished", "Painted in bright, vivid colors", "Covered entirely in gold leaf"], ans: 1 },
      { q: "Which period of Greek art is known for intense drama, emotion, and dynamic movement?", opts: ["The Archaic Period", "The Classical Period", "The Hellenistic Period"], ans: 2 }
    ]
  },
{
    id: 5, 
    title: "Ancient Rome: Engineering the Empire", 
    era: "509 BCE - 476 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's Roman Architecture overview
    videoUrl: "https://www.youtube.com/embed/JUoE4GIO2M0", 
    
    lecture: "<h3>Practical Power</h3><p>While the Greeks were philosophers and poets seeking perfect beauty, the Romans were engineers, soldiers, and politicians. They conquered the known world, and their art and architecture were designed to organize, control, and display that massive power.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Arch and Concrete:</strong> The Greeks used a 'post-and-lintel' system (straight columns holding up a flat roof), which couldn't hold much weight. The Romans perfected the <strong>rounded arch</strong> and invented <strong>concrete</strong>. This allowed them to build massive, open interior spaces like the <em>Pantheon</em> and enormous public arenas like the <em>Colosseum</em>.</li><li><strong>Verism (Hyper-Realism):</strong> In the Roman Republic, politicians wanted to look wise, experienced, and hard-working. Instead of carving smooth, perfect, youthful faces like the Greeks, Roman sculptors used a style called <strong>Verism</strong>—they emphasized every wrinkle, bald spot, and wart to show that the person had worked a long, hard life for the Republic.</li><li><strong>Art as Propaganda:</strong> When Rome became an Empire, emperors like Augustus used art as mass media. Statues of Augustus were sent to every corner of the empire to show him as a forever-young, god-like leader, reminding citizens who was in charge.</li><li><strong>Public Works:</strong> Roman art wasn't just for temples; it was highly practical. They built sprawling aqueducts to carry fresh water, public bathhouses, and paved roads that connected the empire.</li></ul>",
    
    criticalThinking: "Look at a 'Veristic' portrait of a Roman Senator (with deep wrinkles and baldness) and compare it to a modern political campaign poster. Why did Roman politicians want to look old and exhausted, while modern politicians use Photoshop to look young and flawless?",
    
    mission: "<strong>The Arch Architecture Challenge:</strong> Find a set of rectangular building blocks (or use thick hardcover books). Try to build a straight 'bridge' across a wide gap using only one block—it will likely fall. Now, try to stack the blocks in a curved arch shape. Notice how the pieces push against each other, locking together to hold the weight. This is the secret to Roman engineering.",
    
    // Direct, high-res Wikimedia links (Colosseum, Pantheon Interior, Veristic Portrait)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Rome_Pantheon_interior.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Portrait_bust_of_an_old_man_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Introduction to Ancient Roman Art", url: "https://smarthistory.org/roman-art-intro/" },
      { name: "The Met: Roman Portrait Sculpture", url: "https://www.metmuseum.org/toah/hd/ropo/hd_ropo.htm" },
      { name: "Google Arts: The Colosseum", url: "https://artsandculture.google.com/story/the-colosseum-an-architectural-wonder/lwWBX7WJ0qW-KA" }
    ],
    
    quiz: [
      { q: "What revolutionary building material did the Romans invent that allowed them to build massive structures like the Pantheon?", opts: ["Steel", "Concrete", "Marble"], ans: 1 },
      { q: "What architectural shape did the Romans perfect to hold massive amounts of weight?", opts: ["The rounded arch", "The perfect square", "The triangle"], ans: 0 },
      { q: "What is 'Verism' in Roman portraiture?", opts: ["Painting statues in bright colors", "Making the subject look like a perfect, flawless god", "A highly realistic style that emphasizes wrinkles, age, and imperfections"], ans: 2 },
      { q: "Why did Emperor Augustus send statues of himself all over the Roman Empire?", opts: ["As a form of political propaganda to remind citizens of his power", "Because he wanted to support local artists", "To give the citizens a target for their anger"], ans: 0 },
      { q: "What was the main difference in focus between Greek and Roman architecture?", opts: ["Greeks focused on practical public works; Romans focused on religious temples", "Greeks focused on exterior perfection; Romans focused on massive, open interior spaces", "Greeks only built with wood; Romans only built with stone"], ans: 1 }
    ]
  },
 {
    id: 6, 
    title: "Byzantine: Heaven on Earth", 
    era: "330 CE - 1453 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on the San Vitale mosaics
    videoUrl: "https://www.youtube.com/embed/It3i-dKGZVU", 
    
    lecture: "<h3>The Spiritual Realm</h3><p>When the Roman Empire split, the eastern half (headquartered in Constantinople/Byzantium) survived for another thousand years. Here, artists completely abandoned the realism of the Greeks and Romans. Art was no longer about the physical world; it was about the spiritual, eternal world of Heaven.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Rejection of Realism:</strong> Byzantine figures don't look like real people. They are intentionally drawn as flat, elongated, and stiff, with tiny feet that point downward so they appear to be floating rather than standing on solid ground.</li><li><strong>The Gold Background:</strong> Instead of painting blue skies or landscapes, artists placed figures against solid gold backgrounds. This removed the figures from earthly time and space, placing them in a timeless, divine realm.</li><li><strong>Mosaics as Light:</strong> Instead of paint, the primary medium was the <strong>Mosaic</strong>. Artists used millions of tiny glass and gold tiles (called <em>tesserae</em>). When placed on the curved walls of churches, the uneven glass caught the candlelight, making the entire wall sparkle and seem alive.</li><li><strong>Icons and Iconoclasm:</strong> Small painted wood panels of holy figures (Icons) were used for personal prayer. They became so popular that some people believed the objects themselves had magic powers, leading to a period of 'Iconoclasm' where thousands of artworks were violently destroyed.</li></ul>",
    
    criticalThinking: "Look closely at the mosaic of Emperor Justinian. He is the ruler of the empire, but he is depicted with a halo (like a saint) and standing in a blank, golden void. If you were a citizen walking into this church, what does this image tell you about the Emperor's authority compared to God's authority?",
    
    mission: "<strong>The Tesserae Mosaic Study:</strong> Ancient artists didn't use big brushstrokes; they built images out of thousands of tiny, separate squares. Take a few sheets of colored paper (or pages from a magazine) and tear them into small, relatively equal squares (your tesserae). Sketch a simple shape (like a star or an eye) on a blank page. Now, glue your paper squares down to fill the shape. Leave a tiny gap between each square so the background peeks through.",
    
    // Direct, high-res Wikimedia links (Hagia Sophia, Justinian Mosaic, Virgin and Child Icon)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Hagia_Sophia_Mars_2013.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Justinien_521.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Virgin_and_Child_Icon_from_Saint_Catherine%27s_Monastery.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: A Beginner's Guide to Byzantine Art", url: "https://smarthistory.org/a-beginners-guide-to-byzantine-art/" },
      { name: "The Met: Byzantine Art Overview", url: "https://www.metmuseum.org/toah/hd/byza/hd_byza.htm" },
      { name: "Google Arts: Hagia Sophia", url: "https://artsandculture.google.com/story/hagia-sophia-a-masterpiece-of-byzantine-architecture/kgXReHhT20oJKA" }
    ],
    
    quiz: [
      { q: "Why did Byzantine artists stop carving hyper-realistic statues and painting realistic bodies like the Romans did?", opts: ["They forgot how to do it after the fall of Rome", "They wanted to focus on the spiritual, heavenly realm rather than the physical, earthly world", "They only had access to cheap, low-quality materials"], ans: 1 },
      { q: "What is a mosaic?", opts: ["An image created by arranging thousands of tiny colored glass or stone tiles", "A type of very thick oil paint", "A wall painting done directly onto wet plaster"], ans: 0 },
      { q: "What does the solid gold background in a Byzantine artwork usually represent?", opts: ["The immense wealth of the person who bought the art", "A beautiful sunset in Constantinople", "A timeless, heavenly, and spiritual realm"], ans: 2 },
      { q: "How are human figures typically drawn in Byzantine art?", opts: ["Muscular and heavy, standing firmly on the ground", "Flat, stiff, and elongated, often appearing to float", "In extreme action poses, running or fighting"], ans: 1 },
      { q: "What is an 'Icon' in Byzantine history?", opts: ["A small, sacred painting used as a focus for prayer and veneration", "The main dome of a church", "A coin used to pay the artists"], ans: 0 }
    ]
  },
{
    id: 7, 
    title: "Islamic Art: The Infinite Pattern", 
    era: "7th Century CE - 17th Century CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's Introduction to Islamic Art
    videoUrl: "https://www.youtube.com/embed/qia1z_lO8Hw", 
    
    lecture: "<h3>Geometry, Plants, and the Word</h3><p>As the Islamic empire expanded across the globe, it absorbed and transformed the artistic traditions of the Romans, Byzantines, and Persians. However, it developed a totally unique visual language driven by religious philosophy.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Aniconism (No Figures):</strong> To prevent the worship of idols, religious Islamic art generally avoids drawing human or animal figures. Instead of painting saints or gods, artists focused on abstract and non-representational art.</li><li><strong>Calligraphy as the Highest Art:</strong> Because the Quran is considered the literal word of God, writing it beautifully became the most sacred of all art forms. Calligraphy was carved into stone walls, painted on tiles, and woven into carpets.</li><li><strong>Complex Geometry:</strong> Islamic artists and mathematicians created incredibly complex, infinitely repeating geometric patterns. These endless, perfect patterns symbolize the infinite, orderly, and unified nature of God and the universe.</li><li><strong>The Arabesque:</strong> Alongside hard geometry, artists used flowing, intertwining, leafy plant motifs called 'Arabesques.' These delicate vines represent the life-giving abundance of nature and paradise.</li></ul>",
    
    criticalThinking: "In Western art (like Ancient Greece or the Renaissance), the highest form of artistic expression was usually painting or carving a realistic human body. In Islamic art, the highest form is Calligraphy (beautiful writing). How does focusing on the *written word* rather than the *human body* change how a person experiences a religious space?",
    
    mission: "<strong>The Sacred Geometry Study:</strong> Using a compass (or just tracing the bottom of a cup), draw a circle in the center of your page. Now, draw six more circles of the exact same size around it, placing the edge of each new circle exactly in the center of the first one. Notice how the overlapping curves naturally create perfect flower petals, six-sided stars, and hexagons. Color in the hidden shapes!",
    
    // Direct, high-res Wikimedia links (Kairouan Mosque, Calligraphy Folio, The Alhambra)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Great_Mosque_of_Kairouan_prayer_hall.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Folio_from_a_Qur%27an_Manuscript.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Alhambra_Patio_de_los_Leones.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Arts of the Islamic World", url: "https://smarthistory.org/islamic-art-intro/" },
      { name: "The Met: Geometric Patterns in Islamic Art", url: "https://www.metmuseum.org/toah/hd/geom/hd_geom.htm" },
      { name: "Google Arts: Discover Islamic Art", url: "https://artsandculture.google.com/project/islamic-art" }
    ],
    
    quiz: [
      { q: "Why are human and animal figures usually avoided in religious Islamic art (a practice called Aniconism)?", opts: ["Because artists lost the techniques to draw faces realistically", "To prevent the worship of idols instead of God", "Because geometry was faster and easier to paint"], ans: 1 },
      { q: "What is considered the highest, most sacred form of visual art in the Islamic world?", opts: ["Calligraphy (beautiful writing)", "Marble portrait sculptures", "Stained glass windows"], ans: 0 },
      { q: "What do the infinitely repeating geometric patterns in mosques symbolize?", opts: ["The wealth and power of the Sultan", "The infinite, orderly, and unified nature of God and the universe", "They were just decorative choices with no meaning"], ans: 1 },
      { q: "What is an 'Arabesque' in art?", opts: ["A type of pointed archway", "A specific shade of blue paint", "Flowing, intertwined, plant-like decorative motifs"], ans: 2 },
      { q: "Instead of painting pictures of religious stories on the walls, what did Islamic architects often use to decorate buildings?", opts: ["Blank, white plaster walls", "Intricate tilework containing geometry and script", "Large oil paintings imported from Europe"], ans: 1 }
    ]
  },
{
    id: 8, 
    title: "Romanesque: The Fortress of God", 
    era: "1000 CE - 1150 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's Romanesque overview
    videoUrl: "https://www.youtube.com/embed/A8M5hIqO8S0", 
    
    lecture: "<h3>Pilgrimages and Heavy Stone</h3><p>As Europe stabilized around the year 1000, a massive building boom began. People started traveling hundreds of miles on foot for <strong>pilgrimages</strong> to visit churches holding sacred <strong>relics</strong> (bones or belongings of saints). To accommodate these massive crowds, architects built huge new stone churches.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Roman-like Architecture:</strong> This style is called 'Romanesque' because builders returned to using the Roman <strong>rounded arch</strong> and heavy stone masonry.</li><li><strong>The Fortress Look:</strong> Because stone barrel-vaulted roofs are incredibly heavy, the walls had to be massive and thick to support the weight. Windows were kept very small so the walls wouldn't collapse, making the interiors dark and fortress-like.</li><li><strong>The Tympanum:</strong> Above the main doors of the church was a semi-circular space called a tympanum. Artists carved terrifying, graphic relief sculptures here—usually depicting the 'Last Judgment' with demons dragging sinners to hell—to remind illiterate peasants to behave before they entered the holy space.</li><li><strong>Reliquaries:</strong> The sacred relics were kept in incredibly ornate, jewel-encrusted gold containers called reliquaries to signify their heavenly value and to draw the awe of the visiting pilgrims.</li></ul>",
    
    criticalThinking: "Imagine you are a medieval farmer who has never seen a building taller than a one-story wooden hut, and you cannot read. After walking for a month on a pilgrimage, you stand before a massive stone Romanesque church with a graphic carving of demons eating sinners right above the door. How does the architecture and art act as a tool to control behavior and beliefs?",
    
    mission: "<strong>The Heavy Architecture Sketch:</strong> Using only a pen or pencil, sketch a church that looks as heavy and indestructible as possible. Use thick, solid lines. Make the walls look incredibly wide, the windows tiny, and make sure every doorway and window uses a perfect semi-circle (rounded arch) at the top.",
    
    // Direct, high-res Wikimedia links (Saint-Sernin Chevet, Autun Tympanum, Sainte-Foy Reliquary)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Toulouse_Basilique_Saint-Sernin_Chevet.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Autun_tympan_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Reliquaire_de_Sainte_Foy.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: A Beginner's Guide to Romanesque", url: "https://smarthistory.org/a-beginners-guide-to-romanesque-architecture/" },
      { name: "The Met: Romanesque Art and Architecture", url: "https://www.metmuseum.org/toah/hd/rmsq/hd_rmsq.htm" },
      { name: "Google Arts: Romanesque Architecture", url: "https://artsandculture.google.com/entity/romanesque-architecture/m06jdb" }
    ],
    
    quiz: [
      { q: "What was a main reason for the massive church building boom during the Romanesque period?", opts: ["The invention of steel beams", "To accommodate massive crowds of travelers going on religious pilgrimages", "To create art museums for the public"], ans: 1 },
      { q: "Which architectural feature defines the Romanesque style?", opts: ["The pointed arch", "The rounded arch", "The flat roof"], ans: 1 },
      { q: "Why did Romanesque churches have such thick walls and tiny windows?", opts: ["To support the massive weight of the heavy stone roofs", "To hide secrets from the townspeople", "Because glass had not been invented yet"], ans: 0 },
      { q: "What is a 'Tympanum' in Romanesque art?", opts: ["A musical instrument used in church", "The semi-circular relief sculpture above the main doors, often showing the Last Judgment", "The golden box holding a saint's bones"], ans: 1 },
      { q: "What is a 'Relic'?", opts: ["A painting of a saint", "A sacred object, like the bone or clothing of a holy figure, believed to hold spiritual power", "The architectural term for a stone column"], ans: 1 }
    ]
  },
{
    id: 9, 
    title: "Gothic: Height and Light", 
    era: "1150 CE - 1450 CE",
    
    // Uses the official YouTube /embed/ format for a great Smarthistory Gothic introduction
    videoUrl: "https://www.youtube.com/embed/nKSSBvB-eXg", 
    
    lecture: "<h3>Reaching for the Heavens</h3><p>Born in France under the vision of Abbot Suger, the Gothic style completely transformed architecture. If Romanesque was about heavy, dark, grounded fortresses, Gothic was about stretching stone as high as physically possible and flooding the interior with colorful, divine light (<em>Lux Nova</em>).</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Pointed Arch:</strong> Unlike the Roman rounded arch, the pointed arch pushes the heavy weight of the roof more directly downwards rather than outwards. This allowed builders to make ceilings incredibly tall.</li><li><strong>The Flying Buttress:</strong> Even with pointed arches, the massive, tall walls wanted to push outwards and collapse. Architects invented 'flying buttresses'—heavy stone arms that stand outside the building and push back against the walls to hold them up.</li><li><strong>Skeletal Structure:</strong> Because the flying buttresses were holding the building up from the outside, the actual walls didn't need to be thick stone anymore. The building became a lightweight 'skeleton' of stone ribs.</li><li><strong>Stained Glass:</strong> Since the walls no longer had to support all the weight, architects replaced solid stone with massive walls of stained glass, turning the church into a glowing, colorful jewel box. The magnificent circular windows at the entrances are called <em>Rose Windows</em>.</li></ul>",
    
    criticalThinking: "Abbot Suger believed that physical beauty and brilliant light could transport a person's soul from the muddy, material world straight to the spiritual world. If you were a medieval person stepping into the dazzling, colorful light of Sainte-Chapelle for the first time, how would the architecture itself serve as a religious experience?",
    
    mission: "<strong>The Stained Glass Symmetry Study:</strong> A 'Rose Window' is a massive, circular stained glass window that uses perfect radial symmetry. Draw a large circle. Divide it into 8 equal pie slices using a ruler. Draw a shape in one slice, and then copy that exact shape into the other 7 slices so it perfectly mirrors outward from the center. Color it in with brilliant reds and blues!",
    
    // Direct, high-res Wikimedia links (Notre-Dame exterior, Sainte-Chapelle, Rose Window)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Notre-Dame_de_Paris_2013-07-24.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sainte_Chapelle_-_Upper_level_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Notre-Dame_de_Paris_South_Rose_Window.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Gothic Architecture", url: "https://smarthistory.org/gothic-architecture-an-introduction/" },
      { name: "The Met: Gothic Art", url: "https://www.metmuseum.org/toah/hd/mgot/hd_mgot.htm" },
      { name: "Google Arts: Sainte-Chapelle", url: "https://artsandculture.google.com/story/sainte-chapelle-a-masterpiece-of-gothic-architecture/uwXh8PZJq0HjKA" }
    ],
    
    quiz: [
      { q: "What is the defining visual characteristic of the Gothic arch?", opts: ["It is perfectly rounded", "It comes to a sharp point", "It is completely flat"], ans: 1 },
      { q: "What revolutionary engineering invention held up the massive walls of Gothic cathedrals from the outside?", opts: ["Concrete pillars", "Flying Buttresses", "Iron beams"], ans: 1 },
      { q: "Because of these new structural inventions, what were Gothic builders able to replace the heavy stone walls with?", opts: ["Massive walls of stained glass", "Wooden panels", "Solid gold sheets"], ans: 0 },
      { q: "What was the philosophical goal of Gothic architecture according to Abbot Suger?", opts: ["To create a dark, quiet place for solitary thinking", "To flood the space with divine, colorful light (Lux Nova)", "To build a fortress that could survive a war"], ans: 1 },
      { q: "What is a 'Rose Window'?", opts: ["A painting of a flower on the church wall", "A massive, circular stained glass window featuring radial symmetry", "A window designed to let in the smell of the gardens"], ans: 1 }
    ]
  },
{
    id: 10, 
    title: "Proto-Renaissance: The Awakening", 
    era: "1200 CE - 1400 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on Giotto's Lamentation
    videoUrl: "https://www.youtube.com/embed/1ofEwZ8Y3W8", 
    
    lecture: "<h3>Weight, Emotion, and Blue Skies</h3><p>For hundreds of years, Byzantine art ruled Europe with flat, floating figures and solid gold backgrounds. But in Italy, an artist named <strong>Giotto di Bondone</strong> changed everything. He brought art back down to earth, planting the seeds for the Renaissance.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The End of the Gold Background:</strong> Instead of placing holy figures in a timeless, golden void, Giotto painted a rich, lapis lazuli <strong>blue sky</strong>. This radical choice meant the story was happening in the real, natural world.</li><li><strong>Gravity and Mass:</strong> Giotto's figures don't float. They have heavy, bulky bodies that are firmly planted on the ground. He achieved this using early <strong>chiaroscuro</strong> (light and shadow) to model the folds of their clothing, making them look 3-dimensional.</li><li><strong>Human Emotion:</strong> Before Giotto, holy figures were calm, blank, and emotionless. In his masterpiece, <em>The Lamentation</em>, Giotto paints angels screaming in agony, women weeping, and faces twisted in genuine, raw human grief.</li><li><strong>The Fresco Technique:</strong> Giotto's greatest works were <strong>frescoes</strong>—paintings done directly onto wet plaster walls. As the plaster dried, the painting literally became part of the wall.</li></ul>",
    
    criticalThinking: "By painting a blue sky instead of a gold background, Giotto brought religious stories out of 'heaven' and down to the 'earth.' How would seeing holy figures experiencing real human pain and standing on real dirt change how an average person connected with their religion?",
    
    mission: "<strong>The Raw Emotion Study:</strong> You don't need highly detailed realism to convey feelings; you just need the right angles. On a piece of paper, draw three simple faces (even stick-figure faces work). Without using tears, try to make the first face look mildly sad, the second face look heartbroken, and the third face look completely devastated (like Giotto's angels). Focus on the tilt of the eyebrows and the shape of the mouth.",
    
    // Direct, high-res Wikimedia links (The Lamentation, Ognissanti Madonna, Arena Chapel interior)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Giotto_di_Bondone_-_Maest%C3%A0_%28Ognissanti_Madonna%29_-_Uffizi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cappella_degli_Scrovegni.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Beginner's Guide to 14th-Century Italy", url: "https://smarthistory.org/a-beginners-guide-to-the-late-gothic-14th-century/" },
      { name: "The Met: Italian Painting of the Later Middle Ages", url: "https://www.metmuseum.org/toah/hd/iptg/hd_iptg.htm" },
      { name: "Google Arts: Giotto and the Arena Chapel", url: "https://artsandculture.google.com/story/giotto-and-the-arena-chapel/uwURfP9Oq2GjKA" }
    ],
    
    quiz: [
      { q: "Which revolutionary artist is credited with breaking away from the flat Byzantine style and sparking the Proto-Renaissance?", opts: ["Leonardo da Vinci", "Giotto", "Michelangelo"], ans: 1 },
      { q: "What radical change did Giotto make to the backgrounds of his paintings?", opts: ["He replaced solid gold backgrounds with natural blue skies", "He painted them completely black to add drama", "He left the plaster completely blank"], ans: 0 },
      { q: "How did Giotto make his figures look heavy, bulky, and 3-dimensional?", opts: ["By gluing fabric to the wall", "By using light and shadow (early chiaroscuro) to model their clothing", "By carving them out of stone instead of painting them"], ans: 1 },
      { q: "What powerful new element did Giotto introduce to the faces of his subjects in 'The Lamentation'?", opts: ["Perfectly calm, emotionless stares", "Genuine, intense human grief and agony", "Cartoon-like exaggeration"], ans: 1 },
      { q: "What is a 'fresco'?", opts: ["A painting done directly onto wet plaster so it becomes part of the wall", "A type of Italian oil paint", "A frame made of solid gold"], ans: 0 }
    ]
  },
{
    id: 11, 
    title: "Early Renaissance: The Discovery of Space", 
    era: "1400 CE - 1490 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on Linear Perspective
    videoUrl: "https://www.youtube.com/embed/bkNMM8uiMww", 
    
    lecture: "<h3>The Rebirth in Florence</h3><p>The word 'Renaissance' means rebirth. In the early 1400s in Florence, Italy, artists and thinkers became obsessed with the ancient ruins and texts of Greece and Rome. They rejected the flat, floating, spiritual style of the Middle Ages and brought back <strong>Humanism</strong>—the belief that the human experience and the physical world are worth studying.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Linear Perspective:</strong> The architect Filippo Brunelleschi discovered a mathematical system to create the perfect illusion of 3D depth on a flat 2D surface. By using a horizon line and a 'vanishing point,' artists could make paintings look like windows you could step into.</li><li><strong>Masaccio's Holy Trinity:</strong> The painter Masaccio was the first to perfectly use linear perspective in a fresco. He placed the vanishing point exactly at the eye level of the viewer, pulling the audience directly into the space of the painting.</li><li><strong>Donatello's David:</strong> Donatello shocked the world by sculpting the first life-sized, free-standing nude statue since the fall of the Roman Empire. It brought back the Greek <em>Contrapposto</em> pose and celebrated the beauty of the human body.</li><li><strong>Brunelleschi's Dome:</strong> Florence built a massive cathedral but didn't know how to put a roof on it. Brunelleschi studied ancient Roman concrete domes (like the Pantheon) and engineered a revolutionary double-shell brick dome that still dominates the city today.</li></ul>",
    
    criticalThinking: "In the Middle Ages, art focused upward toward heaven. In the Renaissance, linear perspective mathematically forces all the lines in a painting to converge at a single 'vanishing point' that perfectly matches the eye level of the human viewer. How does this mathematical trick silently make the human being the absolute center of the universe?",
    
    mission: "<strong>The 1-Point Perspective Room:</strong>  Take a blank piece of paper. Draw a small dot exactly in the center (this is your Vanishing Point). Draw a square around the dot. Now, take a ruler and draw lines from the four corners of your paper straight to the four corners of your square. Congratulations—you just drew a perfect 3D hallway! Add some doors and windows on the side walls by making sure their top and bottom edges point back to your center dot.",
    
    // Direct, high-res Wikimedia links (Holy Trinity, Donatello's David, Florence Cathedral)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Masaccio_trinity.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Donatello_-_David_-_Floren%C3%A7a.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Santa_Maria_del_Fiore_-_Florence_-_Italy_2015.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Early Renaissance in Florence", url: "https://smarthistory.org/early-renaissance-in-florence/" },
      { name: "The Met: Anatomy in the Renaissance", url: "https://www.metmuseum.org/toah/hd/anat/hd_anat.htm" },
      { name: "Google Arts: The Renaissance", url: "https://artsandculture.google.com/entity/renaissance/m06mqj" }
    ],
    
    quiz: [
      { q: "What does the word 'Renaissance' mean?", opts: ["The Rebirth of Greek and Roman classical ideals", "The Dark Ages", "The Invention of Painting"], ans: 0 },
      { q: "In which Italian city did the Early Renaissance begin?", opts: ["Rome", "Venice", "Florence"], ans: 2 },
      { q: "What mathematical system was discovered by Brunelleschi to create the illusion of perfect 3D depth on a flat surface?", opts: ["Chiaroscuro", "Linear Perspective", "Hieratic Scale"], ans: 1 },
      { q: "Who created the first life-sized, free-standing nude statue (David) since ancient Roman times?", opts: ["Leonardo da Vinci", "Masaccio", "Donatello"], ans: 2 },
      { q: "In linear perspective, what is the 'vanishing point'?", opts: ["The point on the horizon line where all parallel lines appear to meet", "The darkest shadow in the painting", "The halo around a holy figure"], ans: 0 }
    ]
  },
{
    id: 12, 
    title: "High Renaissance: The Masters", 
    era: "1490 CE - 1527 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on the High Renaissance
    videoUrl: "https://www.youtube.com/embed/p_Fia6H3I0M", 
    
    lecture: "<h3>The Golden Age of Genius</h3><p>For a brief, brilliant window of about forty years, the artistic center of Italy shifted from Florence to Rome. This era is defined by a holy trinity of artists—Leonardo da Vinci, Michelangelo, and Raphael—who pushed art to a level of technical perfection and psychological depth that had never been seen before.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Universal Genius:</strong> Artists were no longer seen as simple craftsmen or manual laborers. Figures like Leonardo da Vinci elevated art to a science. Leonardo's relentless curiosity led him to dissect human corpses to understand musculature, study the flight of birds, and engineer complex machines, proving that a true artist must deeply understand the mechanics of the natural world.</li><li><strong>Pyramid Composition:</strong>  To achieve perfect harmony, stability, and balance, High Renaissance artists deliberately grouped their subjects into a stable triangle or pyramid shape.</li><li><strong>Sfumato:</strong> Instead of using harsh, painted outlines, Leonardo invented <em>sfumato</em> (meaning 'vanished in smoke'). He applied dozens of microscopic, translucent layers of oil paint to create incredibly soft, hazy transitions between light and shadow, making skin look vividly lifelike.</li><li><strong>Michelangelo's David:</strong> Carved from a single, massive block of abandoned marble, Michelangelo's <em>David</em> perfectly combined the mathematical proportions and <em>Contrapposto</em> pose of Ancient Greece with intense, focused, and anxious human psychology.</li></ul>",
    
    criticalThinking: "In the Middle Ages, artists rarely signed their work because they believed they were just anonymous tools creating art for God. In the High Renaissance, artists like Leonardo and Michelangelo were treated like international celebrities and were even called 'Il Divino' (The Divine). What does this massive shift tell us about how society's values changed?",
    
    mission: "<strong>The Sfumato Shading Study:</strong> Draw a circle using a soft graphite pencil. Instead of coloring it in with hard lines or cross-hatching, use your finger or a tissue to gently smudge and blend the graphite. Try to make a perfectly smooth, smoky transition from the darkest shadow at the bottom to the brightest white highlight at the top. No hard edges allowed!",
    
    // Direct, high-res Wikimedia links (Mona Lisa, David, School of Athens)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Michelangelo%27s_David_-_Right_View_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: High Renaissance in Italy", url: "https://smarthistory.org/high-renaissance-in-italy-intro/" },
      { name: "Google Arts: Leonardo da Vinci", url: "https://artsandculture.google.com/entity/leonardo-da-vinci/m04lg6" },
      { name: "The Met: Anatomy in the Renaissance", url: "https://www.metmuseum.org/toah/hd/anat/hd_anat.htm" }
    ],
    
    quiz: [
      { q: "Who are considered the three great masters of the High Renaissance?", opts: ["Donatello, Masaccio, and Brunelleschi", "Leonardo da Vinci, Michelangelo, and Raphael", "Picasso, Dali, and Matisse"], ans: 1 },
      { q: "What was the new social status of the artist during the High Renaissance?", opts: ["Manual laborers and simple craftsmen", "Anonymous monks working for the church", "Celebrated geniuses whose intellect was highly valued"], ans: 2 },
      { q: "What compositional shape did High Renaissance artists use to create a feeling of perfect stability and harmony?", opts: ["A perfect circle", "A triangle or pyramid", "A zig-zag line"], ans: 1 },
      { q: "What is 'Sfumato'?", opts: ["A smoky, hazy blending technique invented by Leonardo to eliminate harsh outlines", "A type of quick-drying plaster used for frescoes", "The Italian word for 'Rebirth'"], ans: 0 },
      { q: "Which High Renaissance masterpiece perfectly combined ancient Greek mathematical proportions with intense, anxious human psychology?", opts: ["The Mona Lisa", "Michelangelo's David", "The Ishtar Gate"], ans: 1 }
    ]
  },
{
    id: 13, 
    title: "Northern Renaissance: Oil and Detail", 
    era: "1400 CE - 1600 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on the Arnolfini Portrait
    videoUrl: "https://www.youtube.com/embed/1_f-Bf0GDBs", 
    
    lecture: "<h3>The Magic of Oil Paint</h3><p>While Italian masters like Michelangelo were covering massive walls with quick-drying plaster frescoes, artists in Northern Europe (like Flanders and Germany) were taking their time working on wooden panels. Their secret weapon was the perfection of <strong>Oil Paint</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Translucent Glazes:</strong> Oil paint dries incredibly slowly. This allowed Northern artists, led by <strong>Jan van Eyck</strong>, to paint in dozens of microscopic, see-through layers called glazes. This created colors that literally glowed and allowed for hyper-realistic textures like velvet, dog fur, and polished brass.</li><li><strong>Microscopic Detail vs. Perfect Proportion:</strong> The Italians wanted perfect mathematical proportions and ideal bodies. The Northern artists wanted to paint every single hair on a dog, every wrinkle on a face, and the reflection of the entire room inside a tiny curved mirror. They painted the world exactly as it looked, flaws and all.</li><li><strong>Hidden Symbolism (Disguised Symbolism):</strong>  Instead of painting angels in the sky, Northern artists hid their religious messages inside everyday, domestic objects. A single burning candle on a chandelier might represent the all-seeing eye of God; a dog might symbolize loyalty.</li><li><strong>The Printmaking Revolution:</strong> In Germany, <strong>Albrecht Dürer</strong> realized he could carve his incredibly detailed drawings into woodblocks or copper plates, ink them, and print thousands of copies. This made art affordable for the middle class and made Dürer the first international art celebrity.</li></ul>",
    
    criticalThinking: "Italian Renaissance art was mostly large frescoes inside public churches, meant for huge crowds. Northern Renaissance art was often small, incredibly detailed oil paintings meant to be hung inside private homes. How does the setting (a huge public church vs. a quiet living room) completely change the way an artist paints a picture?",
    
    mission: "<strong>The Texture and Highlight Study:</strong> Northern artists were masters at painting light reflecting off different surfaces. Find three very different objects in your house (for example: a shiny metal spoon, a fuzzy piece of fabric, and a dull wooden block). Place them under a single lamp. Draw just the white 'highlight' where the light hits each object. Notice how the metal has a sharp, bright white dot, the fabric has a soft, spread-out glow, and the wood barely has a highlight at all.",
    
    // Direct, high-res Wikimedia links (Arnolfini Portrait, Dürer Self-Portrait, Garden of Earthly Delights)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Jan_van_Eyck_-_The_Arnolfini_Portrait_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Albrecht_D%C3%BCrer_-_Self-Portrait_-_WGA7356.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: The Northern Renaissance", url: "https://smarthistory.org/northern-renaissance-15th-century/" },
      { name: "The Met: Painting in Oil in the Low Countries", url: "https://www.metmuseum.org/toah/hd/optg/hd_optg.htm" },
      { name: "Google Arts: Albrecht Dürer", url: "https://artsandculture.google.com/entity/albrecht-d%C3%BCrer/m011d6" }
    ],
    
    quiz: [
      { q: "What painting medium did Northern Renaissance artists perfect, allowing them to create glowing colors and hyper-realistic textures?", opts: ["Fresco (painting on wet plaster)", "Oil paint", "Watercolors"], ans: 1 },
      { q: "While Italian Renaissance artists focused on mathematical perspective and perfect human proportions, what were Northern artists obsessed with?", opts: ["Painting the fastest moving objects possible", "Microscopic detail and replicating exact physical textures", "Abstract geometric shapes"], ans: 1 },
      { q: "What is 'Disguised Symbolism' in Northern Renaissance art?", opts: ["Writing secret messages in Latin on the back of the canvas", "Hiding religious or spiritual meanings inside ordinary, everyday objects", "Painting figures so small they cannot be seen without a magnifying glass"], ans: 1 },
      { q: "Which German artist became an international celebrity by mass-producing his art using woodcuts and engravings?", opts: ["Leonardo da Vinci", "Hieronymus Bosch", "Albrecht Dürer"], ans: 2 },
      { q: "Why were oil paints able to create such rich, glowing, lifelike colors?", opts: ["Because artists mixed real gold dust into the paint", "Because oil paint dries very slowly, allowing artists to build up many thin, translucent layers (glazes)", "Because oil paints were baked in a hot oven"], ans: 1 }
    ]
  },
{
    id: 14, 
    title: "Mannerism: Breaking the Rules", 
    era: "1520 CE - 1600 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on Parmigianino
    videoUrl: "https://www.youtube.com/embed/3M85g-D9YgI", 
    
    lecture: "<h3>The Art of Artifice</h3><p>The High Renaissance was all about perfect mathematical harmony, realistic space, and natural bodies. But after masters like Raphael and Michelangelo achieved absolute perfection, what was left for young artists to do? They couldn't be <em>more</em> perfect. So, they decided to be intentionally weird, elegant, and unnatural. This style is called <strong>Mannerism</strong> (from the Italian <em>maniera</em>, meaning style or manner).</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Artificiality over Nature:</strong> Mannerist artists did not want you to think you were looking out a window into the real world. They wanted to remind you that you were looking at a highly constructed, artificial piece of art.</li><li><strong>Distorted Proportions:</strong>  To create a sense of extreme elegance, artists stretched and elongated the human body. Necks became strangely long, fingers stretched out like spiders, and bodies were twisted into impossible, snake-like poses called the <em>figura serpentinata</em>.</li><li><strong>Compressed Space:</strong> Instead of the deep, logical 3D space of the Early Renaissance, Mannerist paintings often feature a chaotic, flattened space. Figures are stacked on top of each other with nowhere to stand.</li><li><strong>Acidic Colors:</strong> Instead of the harmonious, natural blues and reds of the High Renaissance, Mannerists used jarring, 'sour,' and acidic colors—like icy blues, neon pinks, and sickly greens—to create a feeling of anxiety and tension.</li></ul>",
    
    criticalThinking: "Imagine you are an ambitious young artist living in Italy just a few years after Michelangelo painted the Sistine Chapel ceiling. If the public already considers Michelangelo's work 'perfect,' why might intentionally painting something disproportionate, cramped, and strangely colored be a smart career move?",
    
    mission: "<strong>The Spoon Distortion Study:</strong> Mannerism is about taking reality and stretching it. Find a large, shiny metal spoon. Look at your reflection in the curved back of the spoon. Notice how the center of your face bulges out while the top and bottom stretch away into extreme, elegant curves. Try to sketch this distorted, 'Mannerist' version of your face on a piece of paper.",
    
    // Direct, high-res Wikimedia links (Parmigianino, Pontormo, Bronzino)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Pontormo_-_The_Entombment_of_Christ_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Agnolo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: A Beginner's Guide to Mannerism", url: "https://smarthistory.org/mannerism-an-introduction/" },
      { name: "The Met: Mannerism Overview", url: "https://www.metmuseum.org/toah/hd/zita/hd_zita.htm" },
      { name: "Google Arts: Pontormo and Mannerism", url: "https://artsandculture.google.com/entity/mannerism/m056b3" }
    ],
    
    quiz: [
      { q: "Mannerism developed as a direct reaction against which previous artistic movement?", opts: ["The dark, heavy architecture of the Romanesque period", "The perfect mathematical harmony and balance of the High Renaissance", "The microscopic details of the Northern Renaissance"], ans: 1 },
      { q: "What was the primary goal of Mannerist artists?", opts: ["To create highly artificial, elegant, and rule-breaking art", "To paint the most scientifically accurate human anatomy possible", "To create art that ordinary peasants could easily understand"], ans: 0 },
      { q: "How did Mannerist artists typically treat the human body?", opts: ["They painted them as perfectly proportioned athletes", "They stretched, elongated, and twisted them into impossible poses", "They hid them entirely under heavy robes"], ans: 1 },
      { q: "What is the 'figura serpentinata'?", opts: ["A painting technique involving thick layers of oil paint", "A twisting, snake-like pose designed to make the body look dynamic and elegant", "A mythical creature often painted in the background of portraits"], ans: 1 },
      { q: "Which color palette best describes the Mannerist style?", opts: ["Soft pastels", "Harmonious primary colors", "Acidic, clashing, and 'sour' colors"], ans: 2 }
    ]
  },
{
    id: 15, 
    title: "Baroque: The Theater of Light", 
    era: "1600 CE - 1750 CE",
    
    // Uses the official YouTube /embed/ format for a Smarthistory Baroque overview
    videoUrl: "https://www.youtube.com/embed/lA8sJm811zE", 
    
    lecture: "<h3>Cinematic Drama and the Counter-Reformation</h3><p>If the Renaissance was a calm, perfectly balanced, well-lit stage, the Baroque period was a loud, explosive action movie. The Catholic Church was losing followers to the Protestant Reformation, so they decided to use art as a weapon. They commissioned art that was so emotionally overwhelming and dramatically lit that it would physically move people to their knees.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Tenebrism & Chiaroscuro:</strong>  Artists like <strong>Caravaggio</strong> plunged their canvases into pitch blackness, illuminating the subjects with a single, harsh, spotlight effect. This extreme contrast between dark and light is called <em>Tenebrism</em>.</li><li><strong>Dynamic Diagonals:</strong> The Renaissance loved stable, calm triangles (Pyramid Composition). The Baroque hated calm. Artists arranged their subjects along sharp, dynamic diagonal lines to create a feeling of violent, unbalanced motion.</li><li><strong>Frozen Mid-Action:</strong> Michelangelo carved his <em>David</em> standing still, thinking before the battle. The Baroque sculptor <strong>Bernini</strong> carved his <em>David</em> twisting violently in mid-air, right at the exact split-second he is throwing the stone.</li><li><strong>The Viewer is Involved:</strong> Baroque art breaks the 'fourth wall.' Figures often look directly at you, or action seems to spill out of the canvas right into your personal space.</li></ul>",
    
    criticalThinking: "The Protestant church believed that art in churches was a distraction and that people should just read the Bible. The Catholic church fought back by filling their churches with emotionally intense, cinematic Baroque art. If you wanted to convince a crowd of common people to follow your religion, which strategy do you think is more effective: a written book, or a massive, dramatic painting? Why?",
    
    mission: "<strong>The Tenebrism Studio Study:</strong> You can create Baroque drama with just a flashlight. Go into a completely dark room and stand in front of a mirror. Hold a flashlight (or your phone light) directly below your chin, then move it sharply to the side of your head. Notice how the extreme light creates deep, pitch-black shadows that make your face look incredibly dramatic and theatrical. Sketch the shapes of the deep shadows you see.",
    
    // Direct, high-res Wikimedia links (Calling of St Matthew, Ecstasy of St Teresa, Night Watch)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Caravaggio_-_La_vocazione_di_San_Matteo.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Estasi_di_Santa_Teresa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/28/The_Nightwatch_by_Rembrandt.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: How to Recognize Baroque Art", url: "https://smarthistory.org/baroque-art-in-europe-an-introduction/" },
      { name: "The Met: Caravaggio and His Followers", url: "https://www.metmuseum.org/toah/hd/crvg/hd_crvg.htm" },
      { name: "Google Arts: Bernini's Sculptures", url: "https://artsandculture.google.com/entity/gian-lorenzo-bernini/m01940j" }
    ],
    
    quiz: [
      { q: "What historical event motivated the Catholic Church to commission emotionally overwhelming Baroque art?", opts: ["The French Revolution", "The Counter-Reformation (fighting back against Protestantism)", "The discovery of the New World"], ans: 1 },
      { q: "What is 'Tenebrism'?", opts: ["A style of painting using only pastel colors", "The use of extremely harsh, theatrical light against a pitch-black background", "Carving statues out of wood instead of marble"], ans: 1 },
      { q: "How did Baroque artists usually organize the composition of their paintings?", opts: ["Using stable, calm pyramids", "Using chaotic, random splatters", "Using sharp, dynamic diagonal lines to create unbalanced motion"], ans: 2 },
      { q: "Compare Bernini's Baroque statue of 'David' to Michelangelo's Renaissance statue of 'David'. What is the main difference?", opts: ["Bernini's is frozen in the middle of violent action; Michelangelo's is standing completely still", "Bernini's is made of bronze; Michelangelo's is made of clay", "Bernini's is an old man; Michelangelo's is a young boy"], ans: 0 },
      { q: "Which famous artist was known for using ordinary, dirty-footed peasants as models for holy saints in his incredibly dark paintings?", opts: ["Raphael", "Caravaggio", "Leonardo da Vinci"], ans: 1 }
    ]
  },
  {
    id: 16, 
    title: "Rococo: Pastel Play and Aristocratic Excess", 
    era: "1715 CE - 1789 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on Fragonard's The Swing
    videoUrl: "https://www.youtube.com/embed/3Rbb_H098q8", 
    
    lecture: "<h3>The Bubble of Luxury</h3><p>After the death of the strict and powerful King Louis XIV, the French aristocracy abandoned the heavy, serious halls of the Palace of Versailles and moved into elegant townhouses in Paris. They wanted art that was as light, fun, and carefree as their new lifestyles. This new, highly decorative style became known as <strong>Rococo</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Pastels and Curves:</strong>  Rococo completely abandoned the deep, dark shadows of the Baroque. Artists used a bright, soft palette of pastel pinks, baby blues, and mint greens. Architecture and furniture avoided straight lines, favoring swirling 'C' and 'S' curves covered in gold leaf.</li><li><strong>The Fête Galante:</strong> A new genre of painting was invented just for the Rococo called the <em>Fête Galante</em> (an outdoor courtship party). These paintings showed wealthy aristocrats dressed in silk, lounging in lush, overgrown magical gardens, playing music, and falling in love.</li><li><strong>Frivolity over Morality:</strong> Rococo art rarely taught a serious moral or religious lesson. It was art designed purely for pleasure, entertainment, and flirtation.</li><li><strong>The Brewing Storm:</strong> While the French aristocrats were playing games in their pastel gardens, the common people of France were starving. This massive inequality, perfectly captured by the carefree nature of Rococo art, would soon explode into the violent French Revolution of 1789.</li></ul>",
    
    criticalThinking: "Rococo art was created for a tiny fraction of society (the ultra-wealthy) who wanted to ignore the very real problems of the world outside their mansions. Do you see any parallels between the 'fête galante' paintings of the 1700s and how social media influencers curate their lives online today?",
    
    mission: "<strong>The Pastel Atmosphere Study:</strong> Rococo artists like Jean-Honoré Fragonard didn't paint trees with hard, sharp edges; they painted them like fluffy, green clouds. Using colored pencils or pastels, try drawing a garden scene without using any hard outlines. Instead of drawing the shape of a leaf, use soft, scribbly, circular motions to create the illusion of soft, feathery foliage.",
    
    // Direct, high-res Wikimedia links (The Swing, Rococo Interior, Marie Antoinette)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/The_Swing_%28Fragonard%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Salon_de_la_princesse_de_Soubise.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Marie-Antoinette_de_Lorraine-Habsbourg%2C_queen_of_France%2C_and_her_children_-_Elisabeth_Louise_Vig%C3%A9e-Lebrun_-_Google_Cultural_Institute.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: A Beginner's Guide to Rococo Art", url: "https://smarthistory.org/rococo-intro/" },
      { name: "The Met: The Rococo Style", url: "https://www.metmuseum.org/toah/hd/roco/hd_roco.htm" },
      { name: "Google Arts: Jean-Honoré Fragonard", url: "https://artsandculture.google.com/entity/jean-honor%C3%A9-fragonard/m019fsc" }
    ],
    
    quiz: [
      { q: "What was the main target audience for Rococo art?", opts: ["The Catholic Church", "The working-class peasants", "The incredibly wealthy French aristocracy"], ans: 2 },
      { q: "Which of the following best describes the typical Rococo color palette?", opts: ["Dark, moody, and full of deep black shadows", "Soft, light pastels like baby blue, mint green, and pale pink", "Harsh, acidic, and clashing colors"], ans: 1 },
      { q: "What is a 'fête galante'?", opts: ["A painting of a heroic military battle", "A painting of an elegant outdoor party featuring aristocrats flirting and playing music", "A painting of a religious martyrdom"], ans: 1 },
      { q: "What historical event effectively destroyed the Rococo lifestyle and ended the movement?", opts: ["The fall of the Roman Empire", "The invention of the printing press", "The French Revolution of 1789"], ans: 2 },
      { q: "In contrast to Baroque or Renaissance art, what is Rococo art generally missing?", opts: ["Paint", "A serious moral, historical, or religious lesson", "People"], ans: 1 }
    ]
  },
{
    id: 17, 
    title: "Neoclassicism: Reason and Revolution", 
    era: "1750 CE - 1850 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on David's Oath of the Horatii
    videoUrl: "https://www.youtube.com/embed/vO-lU65wO70", 
    
    lecture: "<h3>Duty to the State</h3><p>By the mid-1700s, the world was changing. The <strong>Age of Enlightenment</strong> brought a new focus on science, philosophy, and logic. People grew sick of the greedy, frivolous Rococo lifestyle of the aristocracy. When the French Revolution erupted, artists needed a serious, heroic style to inspire citizens to fight for their country. They looked back to the ultimate symbols of Republic and Democracy: Ancient Rome and Greece. This 'New Classicism' became known as <strong>Neoclassicism</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Civic Duty Over Pleasure:</strong> Neoclassical art taught strict moral lessons. Paintings showed heroes sacrificing their own lives and families for the good of the state. It was the exact opposite of a Rococo garden party.</li><li><strong>Invisible Brushstrokes:</strong> Rococo and Baroque artists used expressive, visible brushstrokes. Neoclassical artists like <strong>Jacques-Louis David</strong> believed that messy brushstrokes were a sign of out-of-control emotions. They painted with perfectly smooth, 'invisible' brushstrokes and razor-sharp outlines to represent pure logic and reason.</li><li><strong>Classical Stage Sets:</strong>  Artists staged their paintings like Roman plays. The backgrounds usually featured severe, unadorned Roman arches or Greek columns, pushing all the action to the very front of the canvas.</li><li><strong>The Architecture of Democracy:</strong> Neoclassical architecture swept the globe. When the newly formed United States needed to build its capital, it chose Neoclassicism (think of the White House and the US Capitol building) to visually link the new nation to the democratic ideals of ancient Greece.</li></ul>",
    
    criticalThinking: "Jacques-Louis David’s famous painting 'The Death of Marat' shows a murdered French Revolutionary leader in his bathtub. However, David painted his drooping arm and torso to look exactly like the dead Christ in Michelangelo's 'Pietà'. Why would a political artist try to make a modern politician look like a religious martyr?",
    
    mission: "<strong>The Geometric Pose Study:</strong> Neoclassical figures look like they are carved from solid marble. Find a ruler or a straight edge. Draw a human figure (or even a stick figure) using ONLY perfectly straight lines and sharp angles. No curves allowed. Notice how rigid, tense, and disciplined the figure looks compared to the soft, swirly lines of the Rococo.",
    
    // Direct, high-res Wikimedia links (Oath of the Horatii, Death of Marat, Pantheon in Paris)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Jacques-Louis_David_-_Marat_assassinated_-_Google_Art_Project_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Pantheon_Paris_1.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Neoclassicism Introduction", url: "https://smarthistory.org/neoclassicism-an-introduction/" },
      { name: "The Met: Neoclassicism Overview", url: "https://www.metmuseum.org/toah/hd/neoc_1/hd_neoc_1.htm" },
      { name: "Google Arts: Jacques-Louis David", url: "https://artsandculture.google.com/entity/jacques-louis-david/m01h2c7" }
    ],
    
    quiz: [
      { q: "Neoclassicism was heavily influenced by which intellectual movement that emphasized science, reason, and logic?", opts: ["The Counter-Reformation", "The Age of Enlightenment", "The Industrial Revolution"], ans: 1 },
      { q: "What previous artistic style did Neoclassicism fiercely reject?", opts: ["The mathematical perfection of the Renaissance", "The strict, dark fortress style of the Romanesque", "The frivolous, pastel, aristocratic excess of the Rococo"], ans: 2 },
      { q: "How did Neoclassical painters like Jacques-Louis David handle their brushstrokes?", opts: ["They used thick, messy blobs of paint (Impasto)", "They blended their paint perfectly to create a smooth, 'invisible' brushstroke", "They used tiny dots of pure color"], ans: 1 },
      { q: "What was the typical moral message of a Neoclassical history painting?", opts: ["Personal happiness is the most important thing", "Duty, patriotism, and sacrifice for the state are the highest virtues", "Nature is wild and terrifying"], ans: 1 },
      { q: "Why did the newly formed United States choose Neoclassical architecture for its government buildings in Washington D.C.?", opts: ["Because it was the cheapest way to build", "To visually connect the new country to the democratic and republican ideals of Ancient Greece and Rome", "Because the architects were all French immigrants"], ans: 1 }
    ]
  },
{
    id: 18, 
    title: "Romanticism: The Sublime and the Scary", 
    era: "1780 CE - 1850 CE",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on Romanticism
    videoUrl: "https://www.youtube.com/embed/0X7eQyAty6E", 
    
    lecture: "<h3>Feeling Over Logic</h3><p>Neoclassicism taught that human reason, logic, and science could solve all the world's problems. <strong>Romanticism</strong> violently disagreed. Romantic artists believed that logic was cold and dead. Instead, they celebrated raw emotion, intuition, madness, nightmares, and the overwhelming power of nature.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Sublime:</strong>  Romantic landscape painters like <strong>Caspar David Friedrich</strong> and <strong>J.M.W. Turner</strong> focused on the 'Sublime'—the feeling of awe mixed with sheer terror when facing something much larger and more powerful than yourself (like a massive storm, an avalanche, or the endless ocean).</li><li><strong>Reaction to the Industrial Revolution:</strong> As Europe built massive factories that filled the skies with black smog and forced people into crowded, dirty cities, Romantic artists longed for the pure, untamed, and unspoiled natural world.</li><li><strong>Current Events and Injustice:</strong> Instead of painting ancient Roman heroes, artists like <strong>Francisco Goya</strong> painted the horrific, bloody realities of modern war. His masterpiece, <em>The Third of May 1808</em>, shows terrified, ordinary citizens being executed by a faceless, mechanical firing squad.</li><li><strong>Expressive Brushstrokes:</strong> Neoclassical artists hid their brushstrokes. Romantics let them show. Turner's late paintings of storms at sea are almost entirely abstract explosions of thick, swirling oil paint.</li></ul>",
    
    criticalThinking: "Romantic artists were terrified by the new Industrial Revolution, feeling that machines were destroying nature and turning humans into robotic workers. Over 200 years later, we are currently experiencing an Artificial Intelligence revolution. Do you see any similarities between the Romantic artists' fear of factory machines and modern artists' fears of AI?",
    
    mission: "<strong>The Scale of the Sublime Study:</strong> The easiest way to make nature look terrifyingly huge is to make the human look incredibly small. Take a blank piece of paper and draw a massive, jagged mountain or a towering, crashing ocean wave that takes up almost the entire page. Now, in the very bottom corner, draw a tiny, fragile stick-figure human. Notice how the extreme difference in size creates a feeling of overwhelming awe (the Sublime).",
    
    // Direct, high-res Wikimedia links (Wanderer above the Sea of Fog, Third of May, The Slave Ship)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Francisco_de_Goya%2C_El_tres_de_mayo_de_1808_en_Madrid.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Slave_Ship_-_Joseph_Mallord_William_Turner.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Romanticism Introduction", url: "https://smarthistory.org/romanticism-intro/" },
      { name: "The Met: Romanticism Overview", url: "https://www.metmuseum.org/toah/hd/roma/hd_roma.htm" },
      { name: "Google Arts: Caspar David Friedrich", url: "https://artsandculture.google.com/entity/caspar-david-friedrich/m01z2j" }
    ],
    
    quiz: [
      { q: "Romanticism was a rebellion against the cold, mathematical logic of which previous artistic movement?", opts: ["The High Renaissance", "Neoclassicism", "Rococo"], ans: 1 },
      { q: "What is the 'Sublime' in Romantic art?", opts: ["A feeling of awe mixed with terror when facing the overwhelming power of nature", "The use of perfectly invisible, smooth brushstrokes", "A beautiful, peaceful garden party in Paris"], ans: 0 },
      { q: "Romanticism was heavily fueled by a fear and rejection of what major historical event?", opts: ["The fall of the Roman Empire", "The discovery of oil paint", "The Industrial Revolution"], ans: 2 },
      { q: "How did Romantic artists typically handle their paint?", opts: ["They used highly expressive, swirling, and visible brushstrokes to convey raw emotion", "They painted completely flat, solid colors", "They refused to use anything but black and white"], ans: 0 },
      { q: "In Goya's painting 'The Third of May 1808', how does he portray war?", opts: ["As a glorious, heroic event where leaders die bravely", "As a brutal, terrifying slaughter of helpless citizens by a faceless machine of soldiers", "As a peaceful negotiation between kings"], ans: 1 }
    ]
  },
{
    id: 19, 
    title: "Realism: Truth and the Common Man", 
    era: "1840 CE - 1880 CE",
    
    // Uses the official YouTube /embed/ format for a Smarthistory video on Realism & Courbet
    videoUrl: "https://www.youtube.com/embed/Z0oD_xUj-aY", 
    
    lecture: "<h3>Show Me an Angel and I Will Paint One</h3><p>By the mid-19th century, artists were exhausted by the artificial rules of the art academies. They were tired of painting Greek gods (Neoclassicism) and dramatic, exaggerated nightmares (Romanticism). They wanted to paint the brutal, honest, everyday reality of modern life. This movement was called <strong>Realism</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Only the Visible Truth:</strong> The leader of the movement, <strong>Gustave Courbet</strong>, famously said that painting is a completely physical language. If an artist cannot literally see an angel, they have no business painting one.</li><li><strong>The Working Class as Heroes:</strong> Before Realism, massive canvases (called 'History Paintings') were reserved strictly for kings, generals, and Jesus. Courbet and <strong>Jean-François Millet</strong> shocked the world by painting exhausted, dirty, anonymous peasants and stone-breakers on canvases that were 10 feet wide.</li><li><strong>Political Danger:</strong>  Painting the poor wasn't just an artistic choice; it was a political threat. France had just gone through multiple violent worker uprisings (like the Revolution of 1848). By elevating the working class to the status of heroes in fine art, Realist painters terrified the wealthy elite.</li><li><strong>Earthy Color Palettes:</strong> Realists avoided the bright, artificial colors of the past. They used muddy browns, dull greens, and grays to reflect the dirt and grit of the earth and the city streets.</li></ul>",
    
    criticalThinking: "Imagine you are a wealthy, upper-class Parisian in 1850 viewing a Realist painting of exhausted, starving laborers painted on a massive, 15-foot canvas. Given that the poor had recently been rioting in the streets for better living conditions, why might you find this painting incredibly threatening, rather than just 'ugly'?",
    
    mission: "<strong>The Unflattering Truth Study:</strong> We are conditioned to make things look 'pretty' when we draw them. Realism fights against this. Find the ugliest, most worn-out object in your house (an old, dirty sneaker, a crumpled up tissue, or a half-eaten apple). Draw it exactly as it is. Do not smooth out the wrinkles, do not fix the stains, and do not make it look nicer than it actually is.",
    
    // Direct, high-res Wikimedia links (A Burial at Ornans, The Gleaners, Third-Class Carriage)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Honor%C3%A9_Daumier_-_The_Third-Class_Carriage_-_Google_Art_Project.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: Realism Overview", url: "https://smarthistory.org/a-beginners-guide-to-realism/" },
      { name: "The Met: 19th-Century French Realism", url: "https://www.metmuseum.org/toah/hd/rlsm/hd_rlsm.htm" },
      { name: "Google Arts: Gustave Courbet", url: "https://artsandculture.google.com/entity/gustave-courbet/m03473" }
    ],
    
    quiz: [
      { q: "What was the main philosophy of the Realist art movement?", opts: ["Art should focus on intense emotions and nightmares", "Artists should only paint what they can physically see and experience in the real world", "Art should mathematically perfectly replicate ancient Greek statues"], ans: 1 },
      { q: "Which artist famously declared, 'Show me an angel and I will paint one'?", opts: ["Leonardo da Vinci", "Jacques-Louis David", "Gustave Courbet"], ans: 2 },
      { q: "Why did Realist paintings of ordinary peasants cause such a massive scandal in the 1850s?", opts: ["Because they were painted on massive canvases usually reserved only for kings, gods, and historical heroes", "Because they used extremely bright, neon colors", "Because the artists forgot to use linear perspective"], ans: 0 },
      { q: "What did Realist color palettes typically look like?", opts: ["Soft pastel pinks and blues", "Earthy, muddy browns, grays, and dull greens", "Solid gold backgrounds"], ans: 1 },
      { q: "Which of these subjects would a Realist artist most likely choose to paint?", opts: ["Hercules fighting a lion", "A group of exhausted men breaking rocks on the side of a road", "A terrifying storm sinking a pirate ship"], ans: 1 }
    ]
  },
{
    id: 20, 
    title: "The Modern Era: Shattering the Canvas", 
    era: "1870 CE - Present",
    
    // Uses the official YouTube /embed/ format for Smarthistory's video on the Birth of Modern Art
    videoUrl: "https://www.youtube.com/embed/jKxXwW_6G_8", 
    
    lecture: "<h3>The Camera and the Canvas</h3><p>For centuries, the primary goal of art was to accurately capture reality. But in the 19th century, a revolutionary piece of technology changed everything: <strong>The Camera</strong>. If a machine could capture a perfect, realistic image in a fraction of a second, what was the point of spending months painting one? Artists had to completely reinvent the purpose of art.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Impressionism (Catching the Light):</strong> Artists like <strong>Claude Monet</strong> realized the camera couldn't capture the true, fleeting sensation of color and light. They left their dark studios and painted outside (<em>en plein air</em>). They used quick, messy dabs of unmixed paint to capture a fleeting 'impression' of a moment, rather than perfect details. </li><li><strong>Post-Impressionism (Emotion and Structure):</strong> The next generation pushed further. <strong>Vincent van Gogh</strong> used incredibly thick, sculptural paint (<em>impasto</em>) to express his intense internal emotions. Meanwhile, <strong>Paul Cézanne</strong> started breaking nature down into flat, underlying geometric shapes.</li><li><strong>Cubism (Shattered Reality):</strong> <strong>Pablo Picasso</strong> looked at Cézanne's geometry and took it to the extreme. In Cubism, artists shattered the world like a broken mirror, painting objects from multiple different angles and viewpoints at the exact same time on a flat canvas.</li><li><strong>Abstract and Contemporary (The Idea):</strong> Eventually, artists realized a painting didn't need to look like *anything* in the real world. Art became purely abstract (just colors and shapes). Today, Contemporary Art asks the ultimate question: Is the physical object even important, or is the <em>Idea</em> the true artwork?</li></ul>",
    
    criticalThinking: "In the 1800s, artists were terrified that the invention of the camera would destroy the profession of painting. Instead, it freed them to invent Modern Art. Today, many artists are terrified that AI image generators will destroy human art. How do you think human artists will adapt and evolve to survive the age of Artificial Intelligence?",
    
    mission: "<strong>The Cubist Portrait Challenge:</strong> Let's shatter reality. Take a photograph of a face from a magazine (or print one out). Cut the face into 10 or 15 geometric shapes (squares, triangles, jagged shards). Now, glue the pieces back together on a blank piece of paper, but purposefully mess up the order. Put an eye lower than the other, turn the nose upside down, and leave white space between the shards. You have just created a Cubist masterpiece!",
    
    // Direct, high-res Wikimedia links (Impression Sunrise, Starry Night, A Sunday on La Grande Jatte)
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg"
    ],
    
    resources: [
      { name: "Smarthistory: A Beginner's Guide to Impressionism", url: "https://smarthistory.org/a-beginners-guide-to-impressionism/" },
      { name: "MoMA: What is Modern Art?", url: "https://www.moma.org/learn/moma_learning/themes/what-is-modern-art/" },
      { name: "Google Arts: Cubism", url: "https://artsandculture.google.com/entity/cubism/m01xsf" }
    ],
    
    quiz: [
      { q: "What technological invention forced 19th-century artists to stop painting hyper-realistic portraits and completely reinvent the purpose of art?", opts: ["The printing press", "The camera", "The telescope"], ans: 1 },
      { q: "What does the French term 'en plein air' mean in relation to Impressionist painters like Claude Monet?", opts: ["Painting outdoors to directly observe and capture natural light", "Painting strictly in black and white", "Painting on the ceiling of a church"], ans: 0 },
      { q: "How did Impressionist painters typically apply their paint to the canvas?", opts: ["In perfectly smooth, invisible, and highly blended brushstrokes", "By throwing buckets of paint from across the room", "In quick, visible dabs and dashes of bright color"], ans: 2 },
      { q: "Which revolutionary art movement, pioneered by Pablo Picasso, completely shattered realistic perspective by breaking subjects into jagged, geometric shards viewed from multiple angles at once?", opts: ["Neoclassicism", "Realism", "Cubism"], ans: 2 },
      { q: "As Modern and Contemporary Art evolved into the 20th and 21st centuries, what became more important to artists than accurately copying the physical world?", opts: ["Expressing raw emotion, exploring abstraction, and the underlying 'Idea' or concept", "Making sure the paint was as expensive as possible", "Creating art that only politicians could understand"], ans: 0 }
    ]
  }
];

// --- APP LOGIC (THE BRAIN) ---
let state = { name: "", unlocked: 1, completed: [] };
let currentLevelId = null;

function init() {
  const saved = localStorage.getItem(KEY);
  if (saved) { state = JSON.parse(saved); if (state.name) showMap(); }
  document.getElementById('btn-start').onclick = startApp;
  document.getElementById('btn-reset').onclick = resetApp;
  document.getElementById('btn-close').onclick = closeModal;
  document.querySelectorAll('.fei-tab').forEach(btn => btn.onclick = () => switchTab(btn.dataset.tab));
  renderMap();
}

function startApp() {
  const name = document.getElementById('reg-name').value;
  if (!name) return alert("Please enter your name.");
  state.name = name; saveState(); showMap();
}

function showMap() {
  document.getElementById('fei-cover').classList.add('fei-hidden');
  document.getElementById('fei-map-view').classList.remove('fei-hidden');
  document.getElementById('display-name').innerText = state.name;
  renderMap();
}

function saveState() { localStorage.setItem(KEY, JSON.stringify(state)); }
function resetApp() { if (confirm("Reset History?")) { localStorage.removeItem(KEY); location.reload(); } }

function renderMap() {
  const container = document.getElementById('map-container');
  if(!container) return;
  Array.from(container.querySelectorAll('.fei-node-row')).forEach(r => r.remove());
  document.getElementById('progress-display').innerText = `${state.completed.length}/20 Credits`;

  CURRICULUM.forEach((level) => {
    const row = document.createElement('div');
    row.className = 'fei-node-row';
    const card = document.createElement('div');
    card.className = 'fei-node-card';

    const isUnlocked = level.id <= state.unlocked;
    const isDone = state.completed.includes(level.id);

    if (isDone) card.classList.add('completed');
    else if (isUnlocked) card.classList.add('unlocked');
    else card.classList.add('locked');

    card.innerHTML = `<div class="fei-node-num">${level.id}</div><h4>${level.title}</h4><p>${level.era}</p>`;
    card.onclick = () => { if (isUnlocked) openLevel(level); };
    row.appendChild(card);
    container.appendChild(row);
  });
  setTimeout(drawPath, 200);
}

function drawPath() {
  const svg = document.getElementById('path-svg');
  if(!svg) return;
  const cards = document.querySelectorAll('.fei-node-card');
  const container = document.getElementById('map-container');
  const cRect = container.getBoundingClientRect();
  let d = "";
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) - cRect.left;
    const y = (rect.top + rect.height / 2) - cRect.top;
    if (i === 0) d += `M ${x} ${y}`; else d += ` L ${x} ${y}`;
  });
  svg.innerHTML = `<path d="${d}" stroke="#000" stroke-width="1" stroke-dasharray="4,4" fill="none" opacity="0.2" />`;
}

function openLevel(data) {
  currentLevelId = data.id;
  document.getElementById('fei-modal').classList.remove('fei-hidden');
  switchTab('study');
  document.getElementById('m-title').innerText = data.title;
  document.getElementById('m-era').innerText = data.era;
  
  const videoBox = document.getElementById('m-video-box');
  if(data.videoUrl) {
    videoBox.innerHTML = `<iframe width="100%" height="100%" src="${data.videoUrl}" frameborder="0" allowfullscreen style="border-radius:8px;"></iframe>`;
    videoBox.style.display = "block";
  } else { videoBox.style.display = "none"; }
  
  document.getElementById('m-lecture-content').innerHTML = data.lecture;
  document.getElementById('m-images').innerHTML = (data.images || []).map(src => `<div class="fei-img-box"><img src="${src}" referrerpolicy="no-referrer"></div>`).join('');
  document.getElementById('m-resources').innerHTML = (data.resources || []).map(r => `<a href="${r.url}" target="_blank" class="fei-resource-link">📚 ${r.name} ➔</a>`).join('');
  document.getElementById('m-critical-text').innerText = data.criticalThinking;
  document.getElementById('m-mission-text').innerText = data.mission;

  const qList = document.getElementById('m-quiz-list');
  qList.innerHTML = ''; document.getElementById('m-feedback').innerText = '';
  data.quiz.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'fei-quiz-item';
    div.innerHTML = `<p>${i + 1}. ${q.q}</p>`;
    q.opts.forEach((opt, oIdx) => {
      const btn = document.createElement('button');
      btn.className = 'fei-quiz-opt';
      btn.innerText = opt;
      btn.onclick = (e) => {
        div.querySelectorAll('.fei-quiz-opt').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
      };
      btn.dataset.idx = oIdx;
      div.appendChild(btn);
    });
    qList.appendChild(div);
  });
}

function switchTab(tabName) {
  document.querySelectorAll('.fei-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.fei-view').forEach(v => v.classList.remove('active'));
  document.querySelector(`.fei-tab[data-tab="${tabName}"]`).classList.add('active');
  document.getElementById(`tab-${tabName}`).classList.add('active');
}

function closeModal() { document.getElementById('fei-modal').classList.add('fei-hidden'); document.getElementById('m-video-box').innerHTML = ""; }

// Initialization
init();
