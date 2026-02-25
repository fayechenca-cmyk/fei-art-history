// curriculum.js
window.FEI_ART_HISTORY_TRACKS = {
  western: {
    label: "Western Art History",
    desc: "From Prehistoric to Contemporary (global influence track)",
    lessons: [
      /* ===========================
         20 sessions content (as you provided)
         =========================== */
      {
        id: 1, title: "The Dawn of Art (Prehistoric)", era: "30,000 BCE - 2,000 BCE",
        videoUrl: "https://www.youtube.com/embed/ZjejoT1gFOc",
        lecture: "<h3>Art for Survival, Not Decoration</h3><p>Before writing, before cities, and before agriculture, early humans created astonishingly sophisticated art deep inside pitch-black cave systems like <strong>Lascaux</strong> and <strong>Chauvet</strong> in modern-day France.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Materials:</strong> Artists used earth pigments (red and yellow ochre, charcoal) mixed with animal fat or spit. They applied paint using their fingers, animal hair brushes, or by blowing pigment through hollow bones.</li><li><strong>Subject Matter:</strong> They almost exclusively painted large animals (horses, bison, deer). Humans are rarely depicted, and when they are, they are usually simple stick figures.</li><li><strong>Three-Dimensionality:</strong> They purposefully painted over the natural bulges of the cave walls to give the animals 3D volume in the flickering torchlight.</li><li><strong>Portable Art:</strong> They also created small sculptures, like the <em>Venus of Willendorf</em>, which exaggerated the female form to emphasize fertility and survival.</li></ul><p>These artworks were not meant to be seen by the general public. They were likely part of sacred shamanistic rituals to ensure successful hunts or to honor animal spirits.</p>",
        criticalThinking: "Imagine you are an early human living a harsh life where survival is a daily struggle. Why would you spend immense time, energy, and resources crawling into a dangerous, dark cave just to paint a bison on the ceiling?",
        mission: "<strong>The Cave Wall Texture Study:</strong> Find a brown paper bag and crumple it up tightly into a ball. Flatten it back out so it has deep wrinkles and a rocky texture. Using charcoal or a soft, dark pencil, draw a running animal. Notice how the texture of the paper forces your drawing to change, just like the bumpy cave walls.",
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
        id: 2, title: "Mesopotamia: Order from Chaos", era: "3500 BCE - 539 BCE",
        videoUrl: "https://www.youtube.com/embed/6ZYnYBGLqyU",
        lecture: "<h3>The Cradle of Civilization</h3><p>As humans settled in the fertile land between the Tigris and Euphrates rivers, the first cities and empires rose. Art was no longer just for survival or secret rituals; it became a powerful tool for <strong>political propaganda</strong> and civic order.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Cuneiform:</strong> The Sumerians invented the first known writing system. They used wedge-shaped styluses to press marks into wet clay tablets, keeping records of trade, laws, and epic stories (like the <em>Epic of Gilgamesh</em>).</li><li><strong>Ziggurats:</strong> Because the landscape was flat, they built massive, stepped pyramid temples called Ziggurats. These were literal 'stairways to heaven' designed to bridge the gap between the human and divine realms.</li><li><strong>Art as Power:</strong> Artifacts like the <em>Standard of Ur</em> (showing War and Peace) and the <em>Stele of Hammurabi</em> (the first written legal code) were created to prove to the public that the King's power was granted directly by the gods.</li><li><strong>The Ishtar Gate:</strong> Constructed by Nebuchadnezzar II in Babylon, this massive entrance was covered in brilliant blue glazed bricks and adorned with golden lions and dragons to awe and intimidate visitors.</li></ul>",
        criticalThinking: "Look at the Stele of Hammurabi. King Hammurabi carved his strict laws into a giant stone monument for the whole city to see. However, 99% of his citizens could not read. Why would a king display a massive written document to a society that couldn't read it?",
        mission: "<strong>The Cuneiform Study:</strong> You do not need a pen to write like a Sumerian. Flatten out a piece of clay, play-dough, or even thick dough. Take a chopstick, a flat screwdriver, or the edge of a ruler. Instead of 'drawing' lines, practice pressing the flat edge into the surface to leave wedge-shaped marks. Try to create a repeating geometric pattern or your own secret alphabet.",
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
    videoUrl: "https://www.youtube.com/embed/xVf5kZA0HtQ", 
    lecture: "<h3>Creating the Eternal</h3><p>Egyptian art was not created to be hung in a gallery or admired by the public. Most of the greatest Egyptian masterpieces were sealed away in dark tombs. Art was a practical, magical tool designed to ensure the survival of the soul (the <em>Ka</em>) in the afterlife.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Composite View (Twisted Perspective):</strong> Egyptian artists didn't draw what they <em>saw</em>; they drew what they <em>knew</em>. To show the most recognizable parts of a human body, they combined different viewpoints: the face, hips, and legs are shown from the side (profile), but the eye and shoulders are shown from the front.</li><li><strong>Hieratic Scale:</strong> Size equals importance. The Pharaoh is always drawn significantly larger than his wife, servants, or defeated enemies.</li><li><strong>Permanence over Realism:</strong> Because statues served as backup bodies for the soul in case the mummy was destroyed, they had to be flawless and eternal. Pharaohs were carved from incredibly hard stone (like diorite) in rigid, block-like poses with no fragile, breakable parts extending outward.</li><li><strong>Three Millennia of Consistency:</strong> While modern art changes every decade, Egyptian art style remained almost entirely unchanged for 3,000 years to maintain <em>Ma'at</em> (cosmic order and balance).</li></ul>",
    criticalThinking: "Modern artists are constantly trying to invent new styles, break the rules, and 'think outside the box.' In contrast, Egyptian artists strictly followed the exact same visual rules for 3,000 years. Why did the Ancient Egyptians view changing the artistic rules as a terrible, dangerous thing?",
    mission: "<strong>The Composite View Study:</strong> Try to draw a self-portrait using the strict rules of Egyptian twisted perspective. Draw your head facing completely to the side (profile). Now, draw your eye looking straight at the viewer. Draw your shoulders facing front, but your hips and feet pointing sideways. It will feel very awkward to draw, but notice how clearly identifiable every part of your body is!",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Narmer_Palette.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tutanchamun_Maske.jpg"
    ],
    resources: [
      { name: "Smarthistory: Ancient Egypt", url: "https://smarthistory.org/ancient-egypt-intro/" }
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
    videoUrl: "https://www.youtube.com/embed/o5gGeZ--TGo", 
    lecture: "<h3>Man is the Measure of All Things</h3><p>Unlike the Egyptians who focused on the afterlife and gods, the Ancient Greeks focused on humanity. They believed that studying human beings and the natural world was the path to understanding the divine. This philosophy is called <strong>Humanism</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Mathematical Beauty:</strong> The Greeks believed that beauty was not subjective; it was based on strict mathematical ratios and proportions (like the Golden Ratio). This is visible in both their perfect statues and the architecture of temples like the <em>Parthenon</em>.</li><li><strong>The Invention of Contrapposto:</strong> In the Classical period, artists figured out how to make statues look truly alive. Instead of standing stiff and straight, statues were carved with their weight shifted onto one leg. This creates a relaxed, natural 'S-curve' in the spine and hips called <em>Contrapposto</em> (counter-pose).</li><li><strong>Evolution of Style:</strong> Greek art evolved rapidly. It started stiff and geometric (Archaic period), moved to perfect and calm ideal beauty (Classical period), and ended with highly emotional, dramatic, and realistic action (Hellenistic period).</li><li><strong>Pottery as Canvas:</strong> Because most Greek wall paintings were destroyed over time, we study their painting techniques through their pottery, specifically the intricate 'Black-Figure' and 'Red-Figure' vases.</li></ul>",
    criticalThinking: "For centuries, people believed Greek statues were made of pure, elegant white marble, and modern museums display them that way. However, scientists have recently proven that the Greeks actually painted their statues in bright, loud, almost cartoonish colors—the paint just wore off over 2,000 years. How does knowing this change your perception of 'classical elegance'?",
    mission: "<strong>The Contrapposto Line Study:</strong> Stand in front of a mirror with your feet together and your weight perfectly balanced. Notice how straight your spine is. Now, shift all your weight onto your right leg and let your left knee bend. Look at what happens to your shoulders and hips—they tilt! On a piece of paper, draw two stick figures: one standing stiff, and one showing the tilted shoulders and 'S' curve spine of the Contrapposto pose.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/1c/Parthenon_from_west.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Doryphoros_MAN_Napoli_Inv6011-2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Amphora_Heracles_Geryon_Staatliche_Antikensammlungen_137.jpg"
    ],
    resources: [
      { name: "Smarthistory: Introduction to Greek Art", url: "https://smarthistory.org/greek-art-intro/" }
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
    videoUrl: "https://www.youtube.com/watch?v=BbcJh3uvax0", 
    lecture: "<h3>Practical Power</h3><p>While the Greeks were philosophers and poets seeking perfect beauty, the Romans were engineers, soldiers, and politicians. They conquered the known world, and their art and architecture were designed to organize, control, and display that massive power.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Arch and Concrete:</strong> The Greeks used a 'post-and-lintel' system (straight columns holding up a flat roof). The Romans perfected the <strong>rounded arch</strong> and invented <strong>concrete</strong>. This allowed them to build massive, open interior spaces like the <em>Pantheon</em> and enormous public arenas like the <em>Colosseum</em>.</li><li><strong>Verism (Hyper-Realism):</strong> In the Roman Republic, politicians wanted to look wise, experienced, and hard-working. Roman sculptors used a style called <strong>Verism</strong>—they emphasized every wrinkle, bald spot, and wart to show that the person had worked a long, hard life for the Republic.</li><li><strong>Art as Propaganda:</strong> Emperors like Augustus used art as mass media. Statues of Augustus were sent to every corner of the empire to show him as a forever-young, god-like leader, reminding citizens who was in charge.</li><li><strong>Public Works:</strong> Roman art wasn't just for temples; it was highly practical. They built sprawling aqueducts to carry fresh water, public bathhouses, and paved roads that connected the empire.</li></ul>",
    criticalThinking: "Look at a 'Veristic' portrait of a Roman Senator and compare it to a modern political campaign poster. Why did Roman politicians want to look old and exhausted, while modern politicians use Photoshop to look young and flawless?",
    mission: "<strong>The Arch Architecture Challenge:</strong> Find a set of rectangular building blocks (or use thick hardcover books). Try to stack the blocks in a curved arch shape. Notice how the pieces push against each other, locking together to hold the weight. This is the secret to Roman engineering.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Rome_Pantheon_interior.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Portrait_bust_of_an_old_man_-_Palazzo_Nuovo_-_Musei_Capitolini_-_Rome_2016.jpg"
    ],
    resources: [
      { name: "Smarthistory: Introduction to Ancient Roman Art", url: "https://smarthistory.org/roman-art-intro/" }
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
    videoUrl: "https://www.youtube.com/watch?v=0leET9HyUjI", 
    lecture: "<h3>The Spiritual Realm</h3><p>When the Roman Empire split, the eastern half headquartered in Constantinople survived for another thousand years. Here, artists completely abandoned the realism of the Greeks and Romans. Art was about the spiritual, eternal world of Heaven.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Rejection of Realism:</strong> Byzantine figures don't look like real people. They are intentionally drawn as flat, elongated, and stiff, with tiny feet that point downward so they appear to be floating.</li><li><strong>The Gold Background:</strong> Instead of painting landscapes, artists placed figures against solid gold backgrounds. This removed the figures from earthly time and space, placing them in a timeless, divine realm.</li><li><strong>Mosaics as Light:</strong> The primary medium was the <strong>Mosaic</strong>. Artists used millions of tiny glass and gold tiles (called <em>tesserae</em>). When placed on the curved walls of churches, the uneven glass caught the candlelight, making the entire wall sparkle.</li><li><strong>Icons and Iconoclasm:</strong> Small painted wood panels of holy figures (Icons) were used for personal prayer. This led to a period of 'Iconoclasm' where thousands of artworks were destroyed because people feared they were being worshipped as idols.</li></ul>",
    criticalThinking: "Look closely at the mosaic of Emperor Justinian. He is the ruler of the empire, but he is depicted with a halo (like a saint) and standing in a blank, golden void. What does this image tell you about the Emperor's authority compared to God's authority?",
    mission: "<strong>The Tesserae Mosaic Study:</strong> Tear colored paper into small, relatively equal squares (your tesserae). Sketch a simple shape (like a star) on a blank page. Now, glue your paper squares down to fill the shape. Leave a tiny gap between each square so the background peeks through.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/37/Hagia_Sophia_Mars_2013.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Justinien_521.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/bf/Virgin_and_Child_Icon_from_Saint_Catherine%27s_Monastery.jpg"
    ],
    resources: [
      { name: "Smarthistory: A Beginner's Guide to Byzantine Art", url: "https://smarthistory.org/a-beginners-guide-to-byzantine-art/" }
    ],
    quiz: [
      { q: "Why did Byzantine artists stop carving hyper-realistic statues and painting realistic bodies like the Romans did?", opts: ["They forgot how to do it", "They wanted to focus on the spiritual, heavenly realm", "They only had access to cheap materials"], ans: 1 },
      { q: "What is a mosaic?", opts: ["An image created by tiny glass or stone tiles", "A type of very thick oil paint", "A wall painting done directly onto wet plaster"], ans: 0 },
      { q: "What does the solid gold background in a Byzantine artwork usually represent?", opts: ["The wealth of the patron", "A beautiful sunset", "A timeless, heavenly realm"], ans: 2 },
      { q: "How are human figures typically drawn in Byzantine art?", opts: ["Muscular and heavy", "Flat, stiff, and elongated", "In extreme action poses"], ans: 1 },
      { q: "What is an 'Icon' in Byzantine history?", opts: ["A small, sacred painting used as a focus for prayer", "The main dome of a church", "A coin used to pay the artists"], ans: 0 }
    ]
  },
  {
    id: 7, 
    title: "Islamic Art: The Infinite Pattern", 
    era: "7th Century CE - 17th Century CE",
    videoUrl: "https://www.youtube.com/watch?v=hVdaXZTFiII", 
    lecture: "<h3>Geometry, Plants, and the Word</h3><p>Islamic art developed a totally unique visual language driven by religious philosophy.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Aniconism (No Figures):</strong> To prevent the worship of idols, religious Islamic art generally avoids drawing human or animal figures. Instead, artists focused on abstract and non-representational art.</li><li><strong>Calligraphy as the Highest Art:</strong> Because the Quran is considered the literal word of God, writing it beautifully became the most sacred of all art forms.</li><li><strong>Complex Geometry:</strong> Islamic artists created incredibly complex, infinitely repeating geometric patterns. These symbolize the infinite, orderly, and unified nature of God and the universe.</li><li><strong>The Arabesque:</strong> Alongside hard geometry, artists used flowing, intertwining, leafy plant motifs called 'Arabesques.' These represent the abundance of nature and paradise.</li></ul>",
    criticalThinking: "In Islamic art, the highest form is Calligraphy. How does focusing on the written word rather than the human body change how a person experiences a religious space?",
    mission: "<strong>The Sacred Geometry Study:</strong> Using a compass (or tracing a cup), draw a circle. Now, draw six more circles of the same size around it, placing the edge of each new circle in the center of the first. Notice how the overlapping curves create flower petals.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e6/Great_Mosque_of_Kairouan_prayer_hall.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Folio_from_a_Qur%27an_Manuscript.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Alhambra_Patio_de_los_Leones.jpg"
    ],
    resources: [
      { name: "Smarthistory: Arts of the Islamic World", url: "https://smarthistory.org/islamic-art-intro/" }
    ],
    quiz: [
      { q: "Why are human figures usually avoided in religious Islamic art?", opts: ["Loss of technique", "To prevent worship of idols", "Geometry was easier"], ans: 1 },
      { q: "What is considered the highest form of visual art in the Islamic world?", opts: ["Calligraphy", "Portrait sculptures", "Stained glass"], ans: 0 },
      { q: "What do repeating geometric patterns in mosques symbolize?", opts: ["Wealth of the Sultan", "Infinite, unified nature of God", "No meaning"], ans: 1 },
      { q: "What is an 'Arabesque' in art?", opts: ["Pointed archway", "Shade of blue", "Flowing, plant-like decorative motifs"], ans: 2 },
      { q: "Instead of painting pictures of religious stories, what did Islamic architects often use to decorate?", opts: ["Blank walls", "Intricate tilework containing geometry and script", "Large oil paintings"], ans: 1 }
    ]
  },
  {
    id: 8, 
    title: "Romanesque: The Fortress of God", 
    era: "1000 CE - 1150 CE",
    videoUrl: "https://www.youtube.com/watch?v=6_UvBLmdBMU", 
    lecture: "<h3>Pilgrimages and Heavy Stone</h3><p>As Europe stabilized around the year 1000, architects built huge new stone churches to accommodate massive crowds visiting sacred relics.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Roman-like Architecture:</strong> This style uses the Roman <strong>rounded arch</strong> and heavy stone masonry.</li><li><strong>The Fortress Look:</strong> To support heavy stone roofs, walls were massive and thick. Windows were tiny so the walls wouldn't collapse, making interiors dark.</li><li><strong>The Tympanum:</strong> Above the main doors was a semi-circular space called a tympanum. Artists carved terrifying relief sculptures here—usually the 'Last Judgment'—to remind the illiterate to behave.</li><li><strong>Reliquaries:</strong> Sacred relics were kept in ornate, jewel-encrusted gold containers called reliquaries.</li></ul>",
    criticalThinking: "Imagine you are a medieval farmer who cannot read. You stand before a massive stone church with a carving of demons eating sinners right above the door. How does this control your beliefs?",
    mission: "<strong>The Heavy Architecture Sketch:</strong> Sketch a church using thick, solid lines. Make the walls look wide, the windows tiny, and use rounded arches at the top.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/Toulouse_Basilique_Saint-Sernin_Chevet.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Autun_tympan_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Reliquaire_de_Sainte_Foy.jpg"
    ],
    resources: [
      { name: "Smarthistory: Romanesque Architecture", url: "https://smarthistory.org/a-beginners-guide-to-romanesque-architecture/" }
    ],
    quiz: [
      { q: "What caused the church building boom?", opts: ["Steel invention", "Religious pilgrimages", "Art museums"], ans: 1 },
      { q: "Which feature defines Romanesque style?", opts: ["Pointed arch", "Rounded arch", "Flat roof"], ans: 1 },
      { q: "Why were walls thick and windows tiny?", opts: ["Support stone roofs", "Hide secrets", "No glass"], ans: 0 },
      { q: "What is a 'Tympanum'?", opts: ["Instrument", "Sculpted space above doors", "Relic box"], ans: 1 },
      { q: "What is a 'Relic'?", opts: ["Painting", "Sacred object like a saint's bone", "Stone column"], ans: 1 }
    ]
  },
  {
    id: 9, 
    title: "Gothic: Height and Light", 
    era: "1150 CE - 1450 CE",
    videoUrl: "https://www.youtube.com/watch?v=5UT889YeCuo", 
    lecture: "<h3>Reaching for the Heavens</h3><p>Gothic was about stretching stone as high as possible and flooding the interior with divine light (<em>Lux Nova</em>).</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Pointed Arch:</strong> Pushes weight more directly downwards, allowing for taller ceilings.</li><li><strong>The Flying Buttress:</strong> Stone arms that stand outside the building and push back against the walls to hold them up.</li><li><strong>Skeletal Structure:</strong> Walls no longer needed to be thick stone; the building became a lightweight 'skeleton' of stone ribs.</li><li><strong>Stained Glass:</strong> Architects replaced solid stone with massive walls of stained glass, turning the church into a glowing jewel box.</li></ul>",
    criticalThinking: "If you were a medieval person stepping into the dazzling light of a Gothic cathedral for the first time, how would the architecture itself serve as a religious experience?",
    mission: "<strong>The Stained Glass Symmetry Study:</strong> Draw a large circle. Divide it into 8 equal slices. Draw a shape in one slice and mirror it perfectly into the other 7 to create a 'Rose Window.'",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Notre-Dame_de_Paris_2013-07-24.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f8/Sainte_Chapelle_-_Upper_level_1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/7/74/Notre-Dame_de_Paris_South_Rose_Window.jpg"
    ],
    resources: [
      { name: "Smarthistory: Gothic Architecture", url: "https://smarthistory.org/gothic-architecture-an-introduction/" }
    ],
    quiz: [
      { q: "Visual characteristic of the Gothic arch?", opts: ["Rounded", "Pointed", "Flat"], ans: 1 },
      { q: "Invention that held up walls from the outside?", opts: ["Pillars", "Flying Buttresses", "Beams"], ans: 1 },
      { q: "What replaced stone walls?", opts: ["Stained glass", "Wood", "Gold"], ans: 0 },
      { q: "Philosophical goal?", opts: ["Darkness", "Divine light", "Fortress"], ans: 1 },
      { q: "What is a 'Rose Window'?", opts: ["Flower painting", "Circular stained glass window", "Garden window"], ans: 1 }
    ]
  },
  {
    id: 10, 
    title: "Proto-Renaissance: The Awakening", 
    era: "1200 CE - 1400 CE",
    videoUrl: "https://www.youtube.com/watch?v=Iirq69IBfCQ", 
    lecture: "<h3>Weight, Emotion, and Blue Skies</h3><p>Giotto di Bondone brought art back down to earth, planting the seeds for the Renaissance.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>End of Gold:</strong> Giotto painted a rich <strong>blue sky</strong>, moving stories into the real world.</li><li><strong>Gravity:</strong> Figures have heavy, bulky bodies modeled using early <strong>chiaroscuro</strong> (light and shadow).</li><li><strong>Human Emotion:</strong> Giotto painted angels screaming in agony and faces twisted in genuine, raw human grief.</li><li><strong>Fresco:</strong> Paintings done directly onto wet plaster walls so they literally become part of the wall.</li></ul>",
    criticalThinking: "How would seeing holy figures experiencing real human pain change how an average person connected with religion?",
    mission: "<strong>The Raw Emotion Study:</strong> Draw three simple faces. Try to make the first look mildly sad, the second heartbroken, and the third completely devastated just by the tilt of eyebrows and mouth.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Giotto_-_Scrovegni_-_-36-_-_Lamentation_%28The_Mourning_of_Christ%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Giotto_di_Bondone_-_Maest%C3%A0_%28Ognissanti_Madonna%29_-_Uffizi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cappella_degli_Scrovegni.jpg"
    ],
    resources: [
      { name: "Smarthistory: 14th-Century Italy", url: "https://smarthistory.org/a-beginners-guide-to-the-late-gothic-14th-century/" }
    ],
    quiz: [
      { q: "Artist who sparked the Proto-Renaissance?", opts: ["Da Vinci", "Giotto", "Michelangelo"], ans: 1 },
      { q: "Background change?", opts: ["Blue skies", "Black drama", "Blank plaster"], ans: 0 },
      { q: "How to make figures 3D?", opts: ["Fabric", "Chiaroscuro", "Stone carving"], ans: 1 },
      { q: "Powerful new element?", opts: ["Calm stares", "Intense human grief", "Exaggeration"], ans: 1 },
      { q: "What is a 'fresco'?", opts: ["Painting on wet plaster", "Oil paint", "Gold frame"], ans: 0 }
    ]
  },
  {
    id: 11, 
    title: "Early Renaissance: Discovery of Space", 
    era: "1400 CE - 1490 CE",
    videoUrl: "https://www.youtube.com/watch?v=IDCIXr17d-E", 
    lecture: "<h3>The Rebirth in Florence</h3><p>Renaissance means rebirth. This era brought back <strong>Humanism</strong>—the belief that the human experience is worth studying.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Linear Perspective:</strong> Mathematical system to create the illusion of 3D depth on a flat surface using a vanishing point.</li><li><strong>Masaccio:</strong> First to perfectly use linear perspective in a fresco.</li><li><strong>Donatello:</strong> Sculpted the first life-sized, free-standing nude statue (David) since Roman times.</li><li><strong>Brunelleschi:</strong> Engineered a revolutionary double-shell brick dome for the Florence Cathedral.</li></ul>",
    criticalThinking: "How does linear perspective silently make the human being the absolute center of the universe?",
    mission: "<strong>The 1-Point Perspective Room:</strong> Draw a vanishing point in the center of your page and use a ruler to draw a perfect 3D hallway.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Masaccio_trinity.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Donatello_-_David_-_Floren%C3%A7a.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Santa_Maria_del_Fiore_-_Florence_-_Italy_2015.jpg"
    ],
    resources: [
      { name: "Smarthistory: Early Renaissance", url: "https://smarthistory.org/early-renaissance-in-florence/" }
    ],
    quiz: [
      { q: "What does Renaissance mean?", opts: ["Rebirth", "Dark Ages", "Invention"], ans: 0 },
      { q: "City where it began?", opts: ["Rome", "Venice", "Florence"], ans: 2 },
      { q: "3D depth system?", opts: ["Chiaroscuro", "Linear Perspective", "Hieratic Scale"], ans: 1 },
      { q: "Who sculpted the first nude David?", opts: ["Da Vinci", "Masaccio", "Donatello"], ans: 2 },
      { q: "What is the 'vanishing point'?", opts: ["Where parallel lines meet", "Darkest shadow", "Halo"], ans: 0 }
    ]
  },
  {
    id: 12, 
    title: "High Renaissance: The Masters", 
    era: "1490 CE - 1527 CE",
    videoUrl: "https://www.youtube.com/watch?v=2oSpTXgPkQc", 
    lecture: "<h3>The Golden Age of Genius</h3><p>This era is defined by the 'holy trinity' of Leonardo, Michelangelo, and Raphael.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Universal Genius:</strong> Leonardo elevated art to a science, dissecting corpses to understand musculature.</li><li><strong>Pyramid Composition:</strong> Grouping subjects into a triangle shape for balance.</li><li><strong>Sfumato:</strong> Smoky, hazy transitions between light and shadow invented by Leonardo.</li><li><strong>Michelangelo's David:</strong> Perfectly combined Greek proportion with intense human psychology.</li></ul>",
    criticalThinking: "In the High Renaissance, artists were treated like celebrities. What does this tell us about how society's values changed?",
    mission: "<strong>The Sfumato Shading Study:</strong> Use your finger to smudge graphite to make a smooth, smoky transition on a drawing.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Michelangelo%27s_David_-_Right_View_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg"
    ],
    resources: [
      { name: "Smarthistory: High Renaissance", url: "https://smarthistory.org/high-renaissance-in-italy-intro/" }
    ],
    quiz: [
      { q: "Three masters?", opts: ["Donatello/Masaccio", "Leonardo/Michelangelo/Raphael", "Picasso/Dali"], ans: 1 },
      { q: "Artist status?", opts: ["Laborers", "Monks", "Celebrated geniuses"], ans: 2 },
      { q: "Composition shape?", opts: ["Circle", "Triangle/Pyramid", "Zig-zag"], ans: 1 },
      { q: "What is Sfumato?", opts: ["Smoky technique", "Plaster type", "Word for Rebirth"], ans: 0 },
      { q: "Psychological David?", opts: ["Mona Lisa", "Michelangelo's David", "Ishtar Gate"], ans: 1 }
    ]
  },
  {
    id: 13, 
    title: "Northern Renaissance: Oil and Detail", 
    era: "1400 CE - 1600 CE",
    videoUrl: "https://www.youtube.com/watch?v=EuzAbE-kPkM", 
    lecture: "<h3>The Magic of Oil Paint</h3><p>Northern artists were obsessed with microscopic detail and incredible textures, made possible by <strong>Oil Paint</strong>.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Translucent Glazes:</strong> Oil allowed artists to paint in dozens of see-through layers, creating colors that glowed.</li><li><strong>Detail vs. Proportion:</strong> Northern artists wanted to paint every single hair and every wrinkle exactly as it looked.</li><li><strong>Disguised Symbolism:</strong> Hiding religious messages inside everyday objects, like a dog symbolizing loyalty.</li><li><strong>Printmaking:</strong> Albrecht Dürer used woodblocks to make art affordable for the middle class.</li></ul>",
    criticalThinking: "How does the private setting of Northern art (homes) change how an artist paints compared to public churches?",
    mission: "<strong>The Texture Study:</strong> Draw just the 'highlight' of three different objects (metal, fabric, wood) to see how light reflects differently.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Jan_van_Eyck_-_The_Arnolfini_Portrait_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Albrecht_D%C3%BCrer_-_Self-Portrait_-_WGA7356.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/The_Garden_of_Earthly_Delights_by_Bosch_High_Resolution.jpg"
    ],
    resources: [
      { name: "Smarthistory: Northern Renaissance", url: "https://smarthistory.org/northern-renaissance-15th-century/" }
    ],
    quiz: [
      { q: "Medium?", opts: ["Fresco", "Oil", "Watercolors"], ans: 1 },
      { q: "Northern focus?", opts: ["Speed", "Detail/Texture", "Geometry"], ans: 1 },
      { q: "Disguised Symbolism?", opts: ["Latin codes", "Hidden religious meanings", "Tiny figures"], ans: 1 },
      { q: "Celebrity printmaker?", opts: ["Da Vinci", "Bosch", "Dürer"], ans: 2 },
      { q: "Why use oil?", opts: ["Gold dust", "Slow drying layers", "Oven baked"], ans: 1 }
    ]
  },
  {
    id: 14, 
    title: "Mannerism: Breaking the Rules", 
    era: "1520 CE - 1600 CE",
    videoUrl: "https://www.youtube.com/watch?v=BOKXbOyTYCk", 
    lecture: "<h3>The Art of Artifice</h3><p>Mannerists decided to be intentionally weird, elegant, and unnatural.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Artificiality:</strong> Mannerist art was meant to look highly constructed and artificial.</li><li><strong>Distorted Proportion:</strong> Necks and fingers were strangely long, twisted into <strong>figura serpentinata</strong>.</li><li><strong>Compressed Space:</strong> Chaotic, flattened spaces where figures are stacked on top of each other.</li><li><strong>Acidic Colors:</strong> Use of jarring, 'sour' colors like icy blues and neon pinks to create tension.</li></ul>",
    criticalThinking: "If the public already considers High Renaissance work 'perfect,' why might breaking the rules be a smart career move for a young artist?",
    mission: "<strong>The Spoon Distortion Study:</strong> Look at your reflection in a shiny spoon and sketch the distorted 'Mannerist' version of your face.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/Parmigianino_-_Madonna_dal_collo_lungo_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/41/Pontormo_-_The_Entombment_of_Christ_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Agnolo_Bronzino_-_Venus%2C_Cupid%2C_Folly_and_Time_-_National_Gallery%2C_London.jpg"
    ],
    resources: [
      { name: "Smarthistory: Mannerism", url: "https://smarthistory.org/mannerism-an-introduction/" }
    ],
    quiz: [
      { q: "Mannerism reacted against?", opts: ["Romanesque", "High Renaissance", "Northern"], ans: 1 },
      { q: "Goal?", opts: ["Artificial/Rule-breaking", "Scientific", "Peasant art"], ans: 0 },
      { q: "Treatment of body?", opts: ["Athletic", "Stretched/Twisted", "Hidden"], ans: 1 },
      { q: "Figura serpentinata?", opts: ["Oil layer", "Snake-like pose", "Mythical creature"], ans: 1 },
      { q: "Mannerist colors?", opts: ["Pastels", "Primary", "Acidic/Sour"], ans: 2 }
    ]
  },
  {
    id: 15, 
    title: "Baroque: The Theater of Light", 
    era: "1600 CE - 1750 CE",
    videoUrl: "https://www.youtube.com/watch?v=EFHPAbHaoqk&t=383s", 
    lecture: "<h3>Cinematic Drama</h3><p>The Baroque period was like an action movie, designed by the Catholic Church to emotionally overwhelm viewers.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Tenebrism:</strong> Pitch black backgrounds illuminated by a single, harsh spotlight.</li><li><strong>Dynamic Diagonals:</strong> Sharp diagonal lines used to create a feeling of violent motion.</li><li><strong>Frozen Action:</strong> Statues and paintings capture the exact split-second of intense action.</li><li><strong>Viewer Involved:</strong> Action seems to spill out of the canvas into your personal space.</li></ul>",
    criticalThinking: "Which strategy is more effective to convince a crowd: a written book or a massive, dramatic painting?",
    mission: "<strong>The Tenebrism Studio Study:</strong> Use a flashlight in a dark room to create deep shadows on your face and sketch the dramatic result.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Caravaggio_-_La_vocazione_di_San_Matteo.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1e/Estasi_di_Santa_Teresa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/28/The_Nightwatch_by_Rembrandt.jpg"
    ],
    resources: [
      { name: "Smarthistory: Baroque Art", url: "https://smarthistory.org/baroque-art-in-europe-an-introduction/" }
    ],
    quiz: [
      { q: "Event behind Baroque?", opts: ["French Revolution", "Counter-Reformation", "New World"], ans: 1 },
      { q: "Tenebrism?", opts: ["Pastels", "Harsh spotlight on black", "Wood carving"], ans: 1 },
      { q: "Composition?", opts: ["Pyramids", "Random", "Dynamic diagonals"], ans: 2 },
      { q: "Bernini vs Michelangelo David?", opts: ["Bernini is in action", "Bernini is bronze", "Bernini is old"], ans: 0 },
      { q: "Artist using dirty-footed models?", opts: ["Raphael", "Caravaggio", "Da Vinci"], ans: 1 }
    ]
  },
  {
    id: 16, 
    title: "Rococo: Pastel Play", 
    era: "1715 CE - 1789 CE",
    videoUrl: "https://www.youtube.com/watch?v=GTmQEYCJrjY", 
    lecture: "<h3>The Bubble of Luxury</h3><p>Rococo was the light, carefree style of the French aristocracy right before the revolution.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Pastels:</strong> Soft pinks, baby blues, and mint greens with gold leaf.</li><li><strong>Fête Galante:</strong> Paintings of outdoor parties where aristocrats flirted in lush gardens.</li><li><strong>Frivolity:</strong> Art designed purely for pleasure, not moral lessons.</li><li><strong>The Brewing Storm:</strong> This carefree art existed while common people were starving, leading to the revolution.</li></ul>",
    criticalThinking: "Do you see parallels between Rococo 'fête galante' and how influencers curate their lives today?",
    mission: "<strong>The Pastel Atmosphere Study:</strong> Draw a garden using soft, scribbly motions instead of hard lines to create fluffy foliage.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/d/d1/The_Swing_%28Fragonard%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/0/07/Salon_de_la_princesse_de_Soubise.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Marie-Antoinette_de_Lorraine-Habsbourg%2C_queen_of_France%2C_and_her_children_-_Elisabeth_Louise_Vig%C3%A9e-Lebrun_-_Google_Cultural_Institute.jpg"
    ],
    resources: [
      { name: "Smarthistory: Rococo Art", url: "https://smarthistory.org/rococo-intro/" }
    ],
    quiz: [
      { q: "Target audience?", opts: ["Church", "Peasants", "Wealthy Aristocracy"], ans: 2 },
      { q: "Color palette?", opts: ["Moody/Black", "Soft Pastels", "Acidic"], ans: 1 },
      { q: "Fête galante?", opts: ["Battle", "Outdoor party", "Martyrdom"], ans: 1 },
      { q: "What ended Rococo?", opts: ["Rome fall", "Printing press", "French Revolution"], ans: 2 },
      { q: "What is missing?", opts: ["Paint", "Serious moral lesson", "People"], ans: 1 }
    ]
  },
  {
    id: 17, 
    title: "Neoclassicism: Reason", 
    era: "1750 CE - 1850 CE",
    videoUrl: "https://www.youtube.com/watch?v=0_7BDc6vSHM", 
    lecture: "<h3>Duty to the State</h3><p>Neoclassicism brought a return to the strict logic of Ancient Rome and Greece to inspire citizens for the revolution.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Civic Duty:</strong> Art taught moral lessons about sacrificing personal life for the state.</li><li><strong>Invisible Brushstrokes:</strong> Perfectly smooth, razor-sharp outlines representing pure reason.</li><li><strong>Stage Sets:</strong> Staging paintings like Roman plays with severe architectural backgrounds.</li><li><strong>Architecture of Democracy:</strong> Linking new nations (like the US) to democratic ideals of the past.</li></ul>",
    criticalThinking: "Why would a political artist try to make a modern politician look like a religious martyr?",
    mission: "<strong>The Geometric Pose Study:</strong> Draw a human figure using only perfectly straight lines and sharp angles. No curves allowed.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Jacques-Louis_David_-_Marat_assassinated_-_Google_Art_Project_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Pantheon_Paris_1.jpg"
    ],
    resources: [
      { name: "Smarthistory: Neoclassicism", url: "https://smarthistory.org/neoclassicism-an-introduction/" }
    ],
    quiz: [
      { q: "Movement?", opts: ["Counter-Reformation", "Enlightenment", "Industrial Revolution"], ans: 1 },
      { q: "Rejected style?", opts: ["Renaissance", "Romanesque", "Rococo"], ans: 2 },
      { q: "Brushstrokes?", opts: ["Impasto", "Smooth/Invisible", "Tiny dots"], ans: 1 },
      { q: "Moral message?", opts: ["Personal happiness", "Duty and Sacrifice", "Nature"], ans: 1 },
      { q: "US Architecture choice?", opts: ["Cheap", "Connect to Greece/Rome", "French architects"], ans: 1 }
    ]
  },
  {
    id: 18, 
    title: "Romanticism: The Sublime", 
    era: "1780 CE - 1850 CE",
    videoUrl: "https://www.youtube.com/watch?v=pBiGVlTLO6Q", 
    lecture: "<h3>Feeling Over Logic</h3><p>Romanticism celebrated raw emotion and the overwhelming, terrifying power of nature.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>The Sublime:</strong> The feeling of awe mixed with terror when facing something larger than yourself (storms, oceans).</li><li><strong>Reaction to Industry:</strong> A longing for the untamed natural world away from dirty factories.</li><li><strong>Injustice:</strong> Painting the horrific, bloody realities of modern war and execution.</li><li><strong>Expressive Brushstrokes:</strong> Thick, swirling explosions of paint used to convey emotion.</li></ul>",
    criticalThinking: "Do you see similarities between Romantic fears of factory machines and modern fears of AI?",
    mission: "<strong>The Scale Study:</strong> Draw a massive ocean wave and a tiny stick-figure human to create a feeling of awe.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Francisco_de_Goya%2C_El_tres_de_mayo_de_1808_en_Madrid.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/30/The_Slave_Ship_-_Joseph_Mallord_William_Turner.jpg"
    ],
    resources: [
      { name: "Smarthistory: Romanticism", url: "https://smarthistory.org/romanticism-intro/" }
    ],
    quiz: [
      { q: "Rebellion against?", opts: ["Renaissance", "Neoclassicism", "Rococo"], ans: 1 },
      { q: "The Sublime?", opts: ["Awe mixed with terror", "Smooth strokes", "Peaceful party"], ans: 0 },
      { q: "Feared event?", opts: ["Rome fall", "Paint discovery", "Industrial Revolution"], ans: 2 },
      { q: "Paint handling?", opts: ["Expressive/Visible", "Flat", "Black/White only"], ans: 0 },
      { q: "Goya war view?", opts: ["Heroic", "Brutal slaughter", "Peaceful"], ans: 1 }
    ]
  },
  {
    id: 19, 
    title: "Realism: Truth", 
    era: "1840 CE - 1880 CE",
    videoUrl: "https://www.youtube.com/watch?v=Os6i6fneV-E", 
    lecture: "<h3>Show Me an Angel</h3><p>Realists wanted to paint the brutal, honest, everyday reality of modern life.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Visible Truth:</strong> If an artist cannot see it (like an angel), they won't paint it.</li><li><strong>Working Class Heroes:</strong> Painting dirty, anonymous peasants on massive canvases reserved for kings.</li><li><strong>Political Danger:</strong> Elevating the poor in art was a threat to the wealthy elite.</li><li><strong>Earthy Palette:</strong> Muddy browns and dull greens reflecting the dirt and grit of reality.</li></ul>",
    criticalThinking: "Why would a wealthy Parisian find a massive painting of a poor laborer threatening?",
    mission: "<strong>The Unflattering Truth:</strong> Draw the ugliest, most worn-out object in your house exactly as it is without making it look 'nice.'",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Honor%C3%A9_Daumier_-_The_Third-Class_Carriage_-_Google_Art_Project.jpg"
    ],
    resources: [
      { name: "Smarthistory: Realism", url: "https://smarthistory.org/a-beginners-guide-to-realism/" }
    ],
    quiz: [
      { q: "Philosophy?", opts: ["Emotion", "Paint what you see", "Perfect math"], ans: 1 },
      { q: "Who said 'Show me an angel'?", opts: ["Da Vinci", "David", "Courbet"], ans: 2 },
      { q: "Scandal?", opts: ["Massive poor canvases", "Neon colors", "No perspective"], ans: 0 },
      { q: "Palette?", opts: ["Pastel", "Earthy/Muddy", "Gold"], ans: 1 },
      { q: "Subject?", opts: ["Hercules", "Men breaking rocks", "Pirate ship"], ans: 1 }
    ]
  },
  {
    id: 20, 
    title: "Modern Era: Shattered", 
    era: "1870 CE - Present",
    videoUrl: "https://www.youtube.com/embed/jKxXwW_6G_8", 
    lecture: "<h3>The Camera</h3><p>The invention of the camera freed artists from reality, leading to the birth of Modern Art.</p><p><strong>Key Concepts:</strong></p><ul><li><strong>Impressionism:</strong> Quick, messy dabs of paint to capture a fleeting impression of light.</li><li><strong>Post-Impressionism:</strong> Using thick paint (impasto) and breaking nature into geometry.</li><li><strong>Cubism:</strong> Shattering the world like a broken mirror to see all angles at once.</li><li><strong>Contemporary:</strong> Art becomes about the 'Idea' rather than the physical object.</li></ul>",
    criticalThinking: "How will human artists adapt and evolve to survive the age of AI?",
    mission: "<strong>The Cubist Portrait:</strong> Cut a face into geometric shards and glue them back together in a messed-up, abstract order.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg"
    ],
    resources: [
      { name: "Smarthistory: Impressionism", url: "https://smarthistory.org/a-beginners-guide-to-impressionism/" }
    ],
    quiz: [
      { q: "Invention?", opts: ["Press", "Camera", "Telescope"], ans: 1 },
      { q: "En plein air?", opts: ["Outdoors", "Black/White", "Ceiling"], ans: 0 },
      { q: "Brushstrokes?", opts: ["Smooth", "Splatter", "Quick dabs"], ans: 2 },
      { q: "Cubism?", opts: ["Ideal", "Realist", "Shattered geometry"], ans: 2 },
      { q: "What is important?", opts: ["Idea/Concept", "Price", "Politics"], ans: 0 }
    ]
  }，
      china: {
    label: "Chinese Art History",
    desc: "From Prehistoric ritual to Contemporary ink & concept",
    lessons: [
      // ✅ 先放 1–5 节也行，后面再加到 20+
      // { id: 1, title: "...", ... },
    ]
  }    
};

// ✅ 关键：你当前的 app.js 只认这个数组
window.FEI_ART_HISTORY_CURRICULUM = window.FEI_ART_HISTORY_TRACKS.western.lessons;
