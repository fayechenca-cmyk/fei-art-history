// --- CONFIGURATION ---
const KEY = 'fei_art_history_v3';

// --- THE COMPLETE 20-CLASS CURRICULUM ---
const CURRICULUM = [
  {
    id: 1, title: "The Dawn (Prehistoric)", era: "30,000 BCE",
    videoUrl: "https://www.youtube.com/embed/ZjejoT1gFOc",
    lecture: "<h3>Art for Survival</h3><p>Art began deep in caves. Artists used <strong>Earth Pigments</strong> (Ochre, Charcoal) mixed with animal fat. They used the rock's natural shape to give animals 3D volume in the flickering torchlight.</p>",
    criticalThinking: "Why do you think early humans painted deep inside pitch-black caves rather than out in the daylight where they lived?",
    mission: "Find a crumpled paper bag. Use charcoal to draw a bison, using the wrinkles to shape the muscles.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lascaux_painting.jpg/640px-Lascaux_painting.jpg"],
    resources: [{ name: "Smarthistory: Paleolithic Art", url: "https://smarthistory.org/paleolithic-art/" }],
    quiz: [{q:"Why paint in caves?", opts:["Decor","Ritual Magic","Hide"], ans:1}, {q:"Paint used?", opts:["Oil","Pigment/Fat","Acrylic"], ans:1}, {q:"Venus of Willendorf?", opts:["Queen","Fertility","Doll"], ans:1}, {q:"Main subject?", opts:["Trees","Animals","Houses"], ans:1}, {q:"Tool?", opts:["Spray Can","Hollow Bone","Brush"], ans:1}]
  },
  {
    id: 2, title: "Mesopotamia", era: "3500 BCE",
    videoUrl: "https://www.youtube.com/embed/aMIhaNGcDgQ",
    lecture: "<h3>Order from Chaos</h3><p>The first cities built <strong>Ziggurats</strong> to reach the gods and invented <strong>Cuneiform</strong> writing. The <strong>Ishtar Gate</strong> was a marvel of blue glazed brick.</p>",
    criticalThinking: "Mesopotamian art often shows kings defeating wild lions. What message was the king sending to the public?",
    mission: "Create a geometric border pattern using only Blue and Gold markers.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ishtar_Gate_at_Berlin_Museum.jpg/640px-Ishtar_Gate_at_Berlin_Museum.jpg"],
    resources: [{ name: "Met Museum: Ancient Near East", url: "https://www.metmuseum.org/toah/hd/meso/hd_meso.htm" }],
    quiz: [{q:"Ziggurat?", opts:["Temple","House","Tomb"], ans:0}, {q:"Writing?", opts:["English","Cuneiform","Hieroglyphs"], ans:1}, {q:"Gate Color?", opts:["Red","Blue","Green"], ans:1}, {q:"Focus?", opts:["Kings/Power","Nature","Fun"], ans:0}, {q:"Material?", opts:["Wood","Glazed Brick","Iron"], ans:1}]
  },
  {
    id: 3, title: "Ancient Egypt", era: "3000 BCE",
    videoUrl: "https://www.youtube.com/embed/xVf5kZA0HtQ",
    lecture: "<h3>The Afterlife</h3><p>Art ensured the soul survived. Figures were drawn in <strong>Composite View</strong> (Face side, Eye front) to show the most complete version of a person.</p>",
    criticalThinking: "Egyptian art style didn't change for 3,000 years. Why did they value strict rules over individual creativity?",
    mission: "Draw a self-portrait using Composite View rules.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Tutanchamun_Maske.jpg/300px-Tutanchamun_Maske.jpg"],
    resources: [{ name: "Smarthistory: Ancient Egypt", url: "https://smarthistory.org/ancient-egypt-intro/" }],
    quiz: [{q:"Purpose?", opts:["Decor","Afterlife","Fun"], ans:1}, {q:"Pharaoh Size?", opts:["Small","Huge","Normal"], ans:1}, {q:"View?", opts:["Front","Side","Composite"], ans:2}, {q:"Tombs?", opts:["Gifts for dead","Trash","Empty"], ans:0}, {q:"Shape?", opts:["Triangle","Square","Circle"], ans:0}]
  },
  {
    id: 4, title: "Ancient Greece", era: "500 BCE",
    videoUrl: "https://www.youtube.com/embed/gt-hQkE2Tus",
    lecture: "<h3>Perfection & Humanism</h3><p>Greeks valued mathematical proportion. They invented <strong>Contrapposto</strong> (weight shift) to make statues look relaxed and alive.</p>",
    criticalThinking: "Why did the Greeks believe that studying mathematics and studying beauty were the exact same thing?",
    mission: "Stand in a mirror and pose in Contrapposto (S-Curve). Sketch the line of your spine.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Parthenon_from_west.jpg/320px-Parthenon_from_west.jpg"],
    resources: [{ name: "The Met: Greek Art", url: "https://www.metmuseum.org/toah/hd/grgp/hd_grgp.htm" }],
    quiz: [{q:"Goal?", opts:["Chaos","Ideal Beauty","Fear"], ans:1}, {q:"Contrapposto?", opts:["Column","Relaxed Pose","Tool"], ans:1}, {q:"Pottery?", opts:["Red/Black","Blue/Gold","Pink"], ans:0}, {q:"Parthenon?", opts:["Temple","House","Market"], ans:0}, {q:"Statues were?", opts:["White","Painted","Black"], ans:1}]
  },
  {
    id: 5, title: "Ancient Rome", era: "100 CE",
    videoUrl: "https://www.youtube.com/embed/JUoE4GIO2M0",
    lecture: "<h3>Engineering the Empire</h3><p>Romans invented <strong>Concrete</strong> and the <strong>Arch</strong>. Their portraits were realistic (Verism), showing warts, baldness, and age as signs of wisdom.</p>",
    criticalThinking: "While Greeks made statues look like perfect gods, Romans made statues look like tired, wrinkled old men. Why?",
    mission: "Build a functioning arch using only books or building blocks.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Colosseo_2020.jpg/320px-Colosseo_2020.jpg"],
    resources: [{ name: "Smarthistory: Roman Art", url: "https://smarthistory.org/roman-art-intro/" }],
    quiz: [{q:"Invention?", opts:["Concrete","Plastic","Steel"], ans:0}, {q:"Shape?", opts:["Triangle","Arch","Square"], ans:1}, {q:"Portraits?", opts:["Realistic","Idealized","Abstract"], ans:0}, {q:"Pantheon has a?", opts:["Dome","Spire","Pyramid"], ans:0}, {q:"Art was for?", opts:["Power/Public","Religion","Fun"], ans:0}]
  },
  {
    id: 6, title: "Byzantine", era: "500 CE",
    videoUrl: "https://www.youtube.com/embed/KRPp3jzv1Tw",
    lecture: "<h3>Heaven on Earth</h3><p>Art moved away from realism. <strong>Gold backgrounds</strong> symbolized the spiritual realm. Mosaics made of tiny glass tiles reflected light in churches.</p>",
    criticalThinking: "Byzantine figures look flat and seem to float. How does making art look 'less real' actually make it feel 'more holy'?",
    mission: "Create a mosaic by tearing colored paper into tiny squares and gluing them down.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hagia_Sophia_Mars_2013.jpg/320px-Hagia_Sophia_Mars_2013.jpg"],
    resources: [{ name: "The Met: Byzantine Art", url: "https://www.metmuseum.org/toah/hd/byza/hd_byza.htm" }],
    quiz: [{q:"Background?", opts:["Blue","Gold","Red"], ans:1}, {q:"Medium?", opts:["Mosaic","Oil","Watercolor"], ans:0}, {q:"Figures?", opts:["Flat/Floating","Muscular","Real"], ans:0}, {q:"Found in?", opts:["Churches","Homes","Caves"], ans:0}, {q:"Symbolism?", opts:["Spirit","Nature","War"], ans:0}]
  },
  {
    id: 7, title: "Islamic Art", era: "700 CE",
    videoUrl: "https://www.youtube.com/embed/Q0P3K7P-BfU",
    lecture: "<h3>Geometry & Words</h3><p>Because creating figures could be seen as competing with God, artists mastered infinite <strong>Geometric Patterns</strong> and beautiful <strong>Calligraphy</strong>.</p>",
    criticalThinking: "How can an infinitely repeating geometric pattern represent the idea of the universe?",
    mission: "Draw a radial, repeating geometric star pattern.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Great_Mosque_of_Kairouan_prayer_hall.jpg/320px-Great_Mosque_of_Kairouan_prayer_hall.jpg"],
    resources: [{ name: "Smarthistory: Islamic Art", url: "https://smarthistory.org/introduction-to-islamic-art/" }],
    quiz: [{q:"Avoided?", opts:["Figures","Colors","Words"], ans:0}, {q:"Key Element?", opts:["Calligraphy","Portraits","Statues"], ans:0}, {q:"Patterns?", opts:["Geometric","Chaotic","Simple"], ans:0}, {q:"Purpose?", opts:["Order/Infinite","Story","Politics"], ans:0}, {q:"Material?", opts:["Tiles/Stucco","Canvas","Plastic"], ans:0}]
  },
  {
    id: 8, title: "Romanesque", era: "1000 CE",
    videoUrl: "https://www.youtube.com/embed/A8M5hIqO8S0",
    lecture: "<h3>Fortresses of God</h3><p>Churches were built on pilgrimage routes. They looked heavy like castles: thick stone walls, small windows, and rounded arches.</p>",
    criticalThinking: "If you were a medieval peasant who lived in a wooden hut, how would walking into a massive stone Romanesque church make you feel?",
    mission: "Sketch a building that looks incredibly heavy and grounded.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Toulouse_Basilique_Saint-Sernin_Chevet.jpg/320px-Toulouse_Basilique_Saint-Sernin_Chevet.jpg"],
    resources: [{ name: "Smarthistory: Romanesque", url: "https://smarthistory.org/a-beginners-guide-to-romanesque-architecture/" }],
    quiz: [{q:"Walls?", opts:["Thick/Heavy","Thin","Glass"], ans:0}, {q:"Arch?", opts:["Round","Pointed","Flat"], ans:0}, {q:"Mood?", opts:["Dark","Bright","Open"], ans:0}, {q:"Purpose?", opts:["Pilgrimage","Housing","Trade"], ans:0}, {q:"Windows?", opts:["Small","Huge","None"], ans:0}]
  },
  {
    id: 9, title: "Gothic", era: "1150 CE",
    videoUrl: "https://www.youtube.com/embed/nKSSBvB-eXg",
    lecture: "<h3>Reaching the Sky</h3><p>Architects invented the <strong>Pointed Arch</strong> and <strong>Flying Buttress</strong> to support taller walls. This allowed them to open up the stone to install massive Stained Glass windows.</p>",
    criticalThinking: "Why was bringing colorful light into the church so important to Gothic architects?",
    mission: "Design a symmetrical stained glass window pattern.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Notre-Dame_de_Paris_2013-07-24.jpg/320px-Notre-Dame_de_Paris_2013-07-24.jpg"],
    resources: [{ name: "Met Museum: Gothic Art", url: "https://www.metmuseum.org/toah/hd/mgot/hd_mgot.htm" }],
    quiz: [{q:"Arch?", opts:["Pointed","Round","Square"], ans:0}, {q:"Innovation?", opts:["Flying Buttress","Concrete","Dome"], ans:0}, {q:"Windows?", opts:["Stained Glass","Clear","None"], ans:0}, {q:"Goal?", opts:["Height/Light","Safety","Warmth"], ans:0}, {q:"Feeling?", opts:["Awe/Vertical","Fear","Boredom"], ans:0}]
  },
  {
    id: 10, title: "Early Renaissance", era: "1400 CE",
    videoUrl: "https://www.youtube.com/embed/VwZgXmD2vYg",
    lecture: "<h3>The Rebirth</h3><p>In Florence, art changed forever. Brunelleschi mapped out <strong>Linear Perspective</strong>, allowing artists to create perfect 3D depth on a flat 2D surface.</p>",
    criticalThinking: "How did the invention of Linear Perspective change the relationship between the viewer and the painting?",
    mission: "Draw a simple hallway using a single vanishing point.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Masaccio_trinity.jpg/250px-Masaccio_trinity.jpg"],
    resources: [{ name: "Smarthistory: Early Renaissance", url: "https://smarthistory.org/early-renaissance-in-florence/" }],
    quiz: [{q:"Discovery?", opts:["Linear Perspective","Oil","Camera"], ans:0}, {q:"City?", opts:["Florence","Rome","Paris"], ans:0}, {q:"Meaning of Renaissance?", opts:["Rebirth","Death","Light"], ans:0}, {q:"Sculpture?", opts:["Donatello's David","Thinker","Zeus"], ans:0}, {q:"Focus?", opts:["Math/Realism","Dreams","Color"], ans:0}]
  },
  {
    id: 11, title: "High Renaissance", era: "1500 CE",
    videoUrl: "https://www.youtube.com/embed/3bT2G_LpX0k",
    lecture: "<h3>The Giants</h3><p>Leonardo, Michelangelo, and Raphael achieved perfect harmony. They used <strong>Pyramid Composition</strong> for stability and <strong>Sfumato</strong> (smoky blending) to make skin look real.</p>",
    criticalThinking: "Da Vinci spent years dissecting corpses. Why did a painter need to understand biology?",
    mission: "Shade a sphere using Sfumato—make the shadow completely smooth with no harsh lines.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/250px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"],
    resources: [{ name: "Google Arts: High Renaissance", url: "https://artsandculture.google.com/entity/high-renaissance/m019_58" }],
    quiz: [{q:"Master?", opts:["Leonardo","Van Gogh","Banksy"], ans:0}, {q:"Technique?", opts:["Sfumato","Splatter","Collage"], ans:0}, {q:"Composition?", opts:["Pyramid","Circle","Random"], ans:0}, {q:"Work?", opts:["Mona Lisa","Scream","Sunflowers"], ans:0}, {q:"Goal?", opts:["Harmony/Balance","Shock","Speed"], ans:0}]
  },
  {
    id: 12, title: "Northern Renaissance", era: "1500 CE",
    videoUrl: "https://www.youtube.com/embed/1_f-Bf0GDBs",
    lecture: "<h3>Oil and Detail</h3><p>While Italy focused on proportion, the North perfected <strong>Oil Paint</strong>. This allowed for hyper-realistic textures: glowing jewels, fur, and hidden symbols.</p>",
    criticalThinking: "If an artist paints a tiny, perfect mirror in the background, what are they trying to prove to the viewer?",
    mission: "Find a shiny object (like a spoon) and try to draw exactly where the white highlight hits it.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jan_van_Eyck_-_The_Arnolfini_Portrait_-_Google_Art_Project.jpg/300px-Jan_van_Eyck_-_The_Arnolfini_Portrait_-_Google_Art_Project.jpg"],
    resources: [{ name: "Smarthistory: Northern Renaissance", url: "https://smarthistory.org/northern-renaissance-15th-century/" }],
    quiz: [{q:"Invention perfected?", opts:["Oil Paint","Perspective","Concrete"], ans:0}, {q:"Focus?", opts:["Extreme Detail","Math","Blank spaces"], ans:0}, {q:"Symbolism?", opts:["Hidden in objects","Written out","None"], ans:0}, {q:"Artist?", opts:["Van Eyck","Michelangelo","Giotto"], ans:0}, {q:"Texture?", opts:["Highly realistic","Flat","Blurry"], ans:0}]
  },
  {
    id: 13, title: "Baroque", era: "1600 CE",
    videoUrl: "https://www.youtube.com/embed/N-B-Hk5yY18",
    lecture: "<h3>Drama in the Dark</h3><p>Art became theater. <strong>Chiaroscuro</strong> (extreme light and dark) was used to spotlight action. Figures were frozen mid-movement with intense emotion.</p>",
    criticalThinking: "How does removing the background (making it pitch black) change how you view the people in the painting?",
    mission: "Turn off the lights. Use one flashlight to light an object from the side. Sketch the extreme shadows.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg/320px-The_Calling_of_Saint_Matthew-Caravaggio_%281599-1600%29.jpg"],
    resources: [{ name: "The Met: Baroque Art", url: "https://www.metmuseum.org/toah/hd/baro/hd_baro.htm" }],
    quiz: [{q:"Light style?", opts:["Chiaroscuro","Flat","Bright"], ans:0}, {q:"Mood?", opts:["Dramatic","Boring","Quiet"], ans:0}, {q:"Artist?", opts:["Caravaggio","Monet","Klimt"], ans:0}, {q:"Action?", opts:["Frozen mid-action","Still","Sleeping"], ans:0}, {q:"Lines?", opts:["Diagonal/Dynamic","Straight","None"], ans:0}]
  },
  {
    id: 14, title: "Rococo", era: "1700 CE",
    videoUrl: "https://www.youtube.com/embed/3Rbb_H098q8",
    lecture: "<h3>Playful Excess</h3><p>Art for the French aristocracy. It was light, fluffy, pastel-colored, and focused entirely on love, leisure, and luxury.</p>",
    criticalThinking: "Looking at Rococo art, why do you think the lower classes eventually started the French Revolution?",
    mission: "Use pastel colors (pink, light blue) to draw a decorative, swirling garden scene.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/The_Swing_%28Fragonard%29.jpg/250px-The_Swing_%28Fragonard%29.jpg"],
    resources: [{ name: "Smarthistory: Rococo", url: "https://smarthistory.org/rococo/" }],
    quiz: [{q:"Colors?", opts:["Pastel","Dark","Neon"], ans:0}, {q:"Subject?", opts:["Aristocrats playing","War","Religion"], ans:0}, {q:"Mood?", opts:["Light/Fluffy","Heavy","Sad"], ans:0}, {q:"Location?", opts:["France","China","Egypt"], ans:0}, {q:"Ended by?", opts:["Revolution","Plague","Nothing"], ans:0}]
  },
  {
    id: 15, title: "Neoclassicism", era: "1750 CE",
    videoUrl: "https://www.youtube.com/embed/vO-lU65wO70",
    lecture: "<h3>Return to Logic</h3><p>A reaction against Rococo fluff. Artists looked back to Rome and Greece for seriousness, patriotism, duty, and clean, invisible brushstrokes.</p>",
    criticalThinking: "Why does political revolution often bring back ancient Roman aesthetics (like columns and togas)?",
    mission: "Draw a hero taking an oath. Use completely straight, rigid lines.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/320px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg"],
    resources: [{ name: "The Met: Neoclassicism", url: "https://www.metmuseum.org/toah/hd/neoc_1/hd_neoc_1.htm" }],
    quiz: [{q:"Inspiration?", opts:["Rome/Greece","Fantasy","Nature"], ans:0}, {q:"Values?", opts:["Duty/Patriotism","Fun","Money"], ans:0}, {q:"Lines?", opts:["Clean/Sharp","Blurry","Messy"], ans:0}, {q:"Artist?", opts:["David","Pollock","Miro"], ans:0}, {q:"Context?", opts:["Revolution/Age of Reason","Peace","Party"], ans:0}]
  },
  {
    id: 16, title: "Romanticism", era: "1800 CE",
    videoUrl: "https://www.youtube.com/embed/0X7eQyAty6E",
    lecture: "<h3>The Sublime & The Scary</h3><p>Logic is not enough. Romantics focused on intense emotion, nightmares, and the overwhelming, terrifying power of nature.</p>",
    criticalThinking: "The Industrial Revolution was building dirty cities. How is Romantic art a reaction against machines?",
    mission: "Draw a tiny person standing in front of a massive, terrifying storm.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Caspar_David_Friedrich_032.jpg/320px-Caspar_David_Friedrich_032.jpg"],
    resources: [{ name: "Smarthistory: Romanticism", url: "https://smarthistory.org/romanticism-intro/" }],
    quiz: [{q:"Focus?", opts:["Emotion/Nature","Logic","Math"], ans:0}, {q:"Nature is?", opts:["Powerful/Scary","Tamed","Small"], ans:0}, {q:"Subject?", opts:["Nightmares/Storms","Picnics","Fruit"], ans:0}, {q:"Artist?", opts:["Goya/Friedrich","Raphael","Warhol"], ans:0}, {q:"Reaction to?", opts:["Industrial Revolution","Farming","Nothing"], ans:0}]
  },
  {
    id: 17, title: "Realism", era: "1850 CE",
    videoUrl: "https://www.youtube.com/embed/Z0oD_xUj-aY",
    lecture: "<h3>Show Me an Angel</h3><p>'Show me an angel and I will paint one.' Realists rejected myths and painted everyday laborers and peasants with dignity and truth.</p>",
    criticalThinking: "Why was it highly controversial to paint a poor stone-breaker on a canvas size usually reserved for kings?",
    mission: "Draw an everyday, boring object (like an old shoe) exactly as it is, without making it look 'prettier'.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Courbet_-_Le_D%C3%A9sespoir_%281843-1845%29.jpg/320px-Gustave_Courbet_-_Le_D%C3%A9sespoir_%281843-1845%29.jpg"],
    resources: [{ name: "The Met: Realism", url: "https://www.metmuseum.org/toah/hd/rlsm/hd_rlsm.htm" }],
    quiz: [{q:"Subject?", opts:["Working class/Truth","Myths","Kings"], ans:0}, {q:"Rule?", opts:["Only what is seen","Make it pretty","Add angels"], ans:0}, {q:"Artist?", opts:["Courbet/Millet","Dali","Michelangelo"], ans:0}, {q:"Colors?", opts:["Earthy","Neon","Gold"], ans:0}, {q:"Politics?", opts:["Socialist/Common Man","Royalist","None"], ans:0}]
  },
  {
    id: 18, title: "Impressionism", era: "1870 CE",
    videoUrl: "https://www.youtube.com/embed/jKxXwW_6G_8",
    lecture: "<h3>Catching the Light</h3><p>The camera was invented, so painting reality was useless. Artists went outside (En plein air) to paint optical effects and fleeting light using quick dabs.</p>",
    criticalThinking: "If a camera can take a perfect picture in 1 second, what is the purpose of painting?",
    mission: "Paint a landscape using only dots and dabs of color—no outlines allowed.",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/320px-Monet_-_Impression%2C_Sunrise.jpg"],
    resources: [{ name: "Google Arts: Impressionism", url: "https://artsandculture.google.com/entity/impressionism/m03xjs" }],
    quiz: [{q:"Location?", opts:["Outdoors","Studio","Church"], ans:0}, {q:"Technique?", opts:["Quick dabs","Smooth blending","Outlines"], ans:0}, {q:"Artist?", opts:["Monet/Renoir","Da Vinci","Goya"], ans:0}, {q:"Focus?", opts:["Light/Color","War","Death"], ans:0}, {q:"Critics thought?", opts:["Looked unfinished","Looked perfect","Too dark"], ans:0}]
  },
  {
    id: 19, title: "Post-Impressionism", era: "1890 CE",
    videoUrl: "https://www.youtube.com/embed/Q4X-3vBv5C0",
    lecture: "<h3>Color as Emotion</h3><p>Artists kept the bright colors but added structure (Seurat) or intense psychological emotion (Van Gogh). Paint became thick and sculptural (Impasto).</p>",
    criticalThinking: "Why did Van Gogh paint the sky swirling in 'Starry Night' instead of just a flat blue?",
    mission: "Draw a room, but change the colors to match your mood (e.g., a sad room might be all blue).",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/320px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"],
    resources: [{ name: "MoMA: Post-Impressionism", url: "https://www.moma.org/collection/terms/post-impressionism" }],
    quiz: [{q:"Focus?", opts:["Emotion/Structure","Copying light","Myths"], ans:0}, {q:"Technique?", opts:["Impasto (Thick)","Thin washes","Spray"], ans:0}, {q:"Artist?", opts:["Van Gogh/Cezanne","Monet","Picasso"], ans:0}, {q:"Color was used for?", opts:["Expression","Realism","Boredom"], ans:0}, {q:"Cezanne focused on?", opts:["Geometric shapes","Swirls","Dots"], ans:0}]
  },
  {
    id: 20, title: "Modern & Contemporary", era: "1900-Present",
    videoUrl: "https://www.youtube.com/embed/ZzM8lV2D-O0",
    lecture: "<h3>Shattering the Canvas</h3><p><strong>Cubism</strong> broke reality into shards. <strong>Abstract</strong> art removed objects entirely. Today, Contemporary Art asks: <em>Is the idea more important than the object?</em></p>",
    criticalThinking: "If an artist programs an AI to generate a masterpiece, who is the real artist: the human, or the machine?",
    mission: "Take a magazine photo of a face, cut it into 10 geometric shapes, and glue it back together incorrectly (Cubism).",
    images: ["https://upload.wikimedia.org/wikipedia/en/7/74/Picasso_Guernica.jpg"],
    resources: [{ name: "MoMA: What is Modern Art?", url: "https://www.moma.org/learn/moma_learning/themes/what-is-modern-art/" }],
    quiz: [{q:"Cubism?", opts:["Shattered perspective","Realistic photos","Soft focus"], ans:0}, {q:"Surrealism explores?", opts:["Dreams/Subconscious","History","Math"], ans:0}, {q:"Artist?", opts:["Picasso/Dali","Monet","Giotto"], ans:0}, {q:"Conceptual art focuses on?", opts:["The Idea","The Paint","Selling"], ans:0}, {q:"Abstract art?", opts:["Has no recognizable objects","Paints fruit","Paints kings"], ans:0}]
  }
];

// --- APP LOGIC ---
let state = { name: "", unlocked: 1, completed: [] };
let currentLevelId = null;

function init() {
  const saved = localStorage.getItem(KEY);
  if (saved) {
    state = JSON.parse(saved);
    if (state.name) showMap();
  }
  
  const startBtn = document.getElementById('btn-start');
  const resetBtn = document.getElementById('btn-reset');
  const closeBtn = document.getElementById('btn-close');
  
  if(startBtn) startBtn.onclick = startApp;
  if(resetBtn) resetBtn.onclick = resetApp;
  if(closeBtn) closeBtn.onclick = closeModal;
  
  document.querySelectorAll('.fei-tab').forEach(btn => btn.onclick = () => switchTab(btn.dataset.tab));

  renderMap();
}

function startApp() {
  const name = document.getElementById('reg-name').value;
  if (!name) return alert("Please enter your name.");
  state.name = name;
  saveState();
  showMap();
}

function showMap() {
  const cover = document.getElementById('fei-cover');
  const map = document.getElementById('fei-map-view');
  const nameDisplay = document.getElementById('display-name');
  
  if(cover) cover.classList.add('fei-hidden');
  if(map) map.classList.remove('fei-hidden');
  if(nameDisplay) nameDisplay.innerText = state.name;
  renderMap();
}

function saveState() { localStorage.setItem(KEY, JSON.stringify(state)); }
function resetApp() { if (confirm("Reset your entire journey?")) { localStorage.removeItem(KEY); location.reload(); } }

function renderMap() {
  const container = document.getElementById('map-container');
  if(!container) return;
  Array.from(container.querySelectorAll('.fei-node-row')).forEach(r => r.remove());
  
  const progDisplay = document.getElementById('progress-display');
  if(progDisplay) progDisplay.innerText = `${state.completed.length}/20 Credits`;

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
    videoBox.innerHTML = `<iframe width="100%" height="100%" src="${data.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border-radius:8px;"></iframe>`;
    videoBox.style.display = "block";
  } else {
    videoBox.style.display = "none";
  }
  document.getElementById('m-lecture-content').innerHTML = data.lecture;

  const gallery = document.getElementById('m-images');
  gallery.innerHTML = (data.images || []).map(src => `<div class="fei-img-box"><img src="${src}" referrerpolicy="no-referrer"></div>`).join('');
  
  const resContainer = document.getElementById('m-resources');
  if(data.resources && data.resources.length > 0) {
      resContainer.innerHTML = data.resources.map(r => `<a href="${r.url}" target="_blank" class="fei-resource-link">📚 ${r.name} ➔</a>`).join('');
  } else {
      resContainer.innerHTML = "";
  }

  document.getElementById('m-critical-text').innerText = data.criticalThinking;
  document.getElementById('m-mission-text').innerText = data.mission;

  const qList = document.getElementById('m-quiz-list');
  qList.innerHTML = '';
  document.getElementById('m-feedback').innerText = '';

  data.quiz.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'fei-quiz-item';
    div.innerHTML = `<p>${i + 1}. ${q.q}</p>`;
    q.opts.forEach((opt, oIdx) => {
      const btn = document.createElement('button');
      btn.className = 'fei-quiz-opt';
      btn.innerText = opt;
      btn.dataset.idx = oIdx;
      btn.onclick = (e) => {
        div.querySelectorAll('.fei-quiz-opt').forEach(b => b.classList.remove('selected'));
        e.target.classList.add('selected');
      };
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

function closeModal() { 
    document.getElementById('fei-modal').classList.add('fei-hidden'); 
    const videoBox = document.getElementById('m-video-box');
    if(videoBox) videoBox.innerHTML = ""; 
}

setTimeout(() => {
    const submitBtn = document.getElementById('btn-submit');
    if(submitBtn) {
        submitBtn.onclick = () => {
          const data = CURRICULUM.find(l => l.id === currentLevelId);
          const items = document.querySelectorAll('.fei-quiz-item');
          let correct = 0, answered = 0;

          items.forEach((item, i) => {
            const selected = item.querySelector('.selected');
            if (selected) {
              answered++;
              if (parseInt(selected.dataset.idx) === data.quiz[i].ans) {
                correct++; selected.classList.add('correct');
              } else { selected.classList.add('wrong'); }
            }
          });

          if (answered < data.quiz.length) return alert("Please answer all questions.");
          const fb = document.getElementById('m-feedback');

          if (correct >= 4) {
            fb.innerHTML = `<div style="background:#E8F8F5; color:#27AE60; padding:15px; border-radius:6px; margin-top:20px; font-weight:bold;">Passed! Credit Earned.</div>`;
            if (!state.completed.includes(currentLevelId)) {
              state.completed.push(currentLevelId);
              if (state.unlocked === currentLevelId && state.unlocked < 20) state.unlocked++;
              saveState(); renderMap(); setTimeout(closeModal, 2500);
            }
          } else {
            fb.innerHTML = `<div style="background:#FDEDEC; color:#C0392B; padding:15px; border-radius:6px; margin-top:20px; font-weight:bold;">Score: ${correct}/${data.quiz.length}. Try again.</div>`;
          }
        };
    }
}, 500);

// Initialize
init();
