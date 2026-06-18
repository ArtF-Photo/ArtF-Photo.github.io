const SERIES = [
  {
    id: "distance",
    title: "A Certain Distance",
    subtitle: "Bergger Contest Series · 2024",
    cover: "bergger/02.jpg",
    images: [
      { src: "bergger/01.jpg", caption: "Paris. View from Zamansky tower" },
      { src: "bergger/02.jpg", caption: "Canal Saint-Martin" },
      { src: "bergger/03.jpg", caption: "Cobblestones, night" },
      { src: "bergger/04.jpg", caption: "Mouton-Duvernet metro" },
      { src: "bergger/05.jpg", caption: "Tango" },
      { src: "bergger/06.jpg", caption: "Bir-Hakeim" },
      { src: "bergger/07.jpg", caption: "Versailles, through glass" },
      { src: "bergger/08.jpg", caption: "Seine, Pont Neuf" },
      { src: "bergger/09.jpg", caption: "Versailles in winter" },
      { src: "bergger/10.jpg", caption: "Children in the cathedral" },
      { src: "bergger/11.jpg", caption: "Quitting the frame" },
      { src: "bergger/12.jpg", caption: "Vaulted arcade" },
    ]
  },
  {
    id: "city",
    title: "City",
    subtitle: "Ongoing · 2024–2026",
    cover: "city/2024_02_25_001-1.jpg",
    images: [
      // Aerial / wide establishing shots first
      { src: "city/2024_03_20_018.jpg",        caption: "Eiffel Tower, aerial" },
      { src: "city/2024_02_25_001-1.jpg",       caption: "Notre-Dame, reconstruction" },
      // Night Paris
      { src: "city/2024_02_13_003-1.jpg",       caption: "Seine by night" },
      { src: "city/2024_02_13_004-1.jpg",       caption: "Under the bridge" },
      { src: "city/2024_02_13_009-1.jpg",       caption: "Haussmann, night" },
      // Church domes / rooflines
      { src: "city/IMGP1088-1.jpg",             caption: "Rooftops, domed church" },
      { src: "city/IMGP1089-1.jpg",             caption: "Winter trees, church dome" },
      // Out of Paris
      { src: "city/2024_08_StNazaire2_05-2.jpg", caption: "Saint-Nazaire, château" },
      { src: "city/2024_Landshut_003-2.jpg",    caption: "Landshut, river" },
      { src: "city/2025_07_007.jpg",            caption: "Stone bridge, cathedral" },
      // Lighter note to close
      { src: "city/IMGP1097-1.jpg",             caption: "2CV, village square" },
    ]
  },
  {
    id: "rythmes",
    title: "Rythmes",
    subtitle: "Ongoing · 2024–2026",
    cover: "rythmes/2024_02_15_011-1.jpg",
    images: [
      // Reflections and water
      { src: "rythmes/2024_02_15_011-1.jpg",   caption: "Bilateral symmetry" },
      { src: "rythmes/IMGP1042.jpg",            caption: "Stone bridge reflected" },
      { src: "rythmes/2026_01_20001.jpg",       caption: "Bridge arch, reflection" },
      // Architecture repeating
      { src: "rythmes/2024_02_06_004-2.jpg",   caption: "Colonnade reflected" },
      { src: "rythmes/2024_02_06_010-1.jpg",   caption: "Staircase, glass roof" },
      { src: "rythmes/2025_12_17_006.jpg",      caption: "Scaffolding colonnade, night" },
      { src: "rythmes/2025_05_005.jpg",         caption: "Haussmann reflected" },
      // Shadows and diagonals
      { src: "rythmes/Vienna_007.jpg",          caption: "Shadows, Vienna" },
      // Nature rhythms
      { src: "rythmes/2024_june_007-2.jpg",    caption: "Breakwater posts" },
      { src: "rythmes/2025_06_017.jpg",        caption: "Dead stumps" },
      { src: "rythmes/2025_06_014.jpg",         caption: "Driftwood arch" },
      { src: "rythmes/2025_06_012.jpg",         caption: "Coastal headland" },
      // Solitary organics
      { src: "rythmes/2025_08_032-1.jpg",       caption: "Dead tree, grey sky" },
      { src: "rythmes/2024_april_003-2.jpg",    caption: "Dead tree, stormy sky" },
    ]
  },
  {
    id: "rome",
    title: "Rome",
    subtitle: "2025",
    cover: "rome/Rome_027.jpg",
    images: [
      // Wide city context first
      { src: "rome/Rome_024.jpg",  caption: "Stone pines, cityscape" },
      { src: "rome/Rome_021.jpg",  caption: "Colosseum, street life" },
      { src: "rome/Rome_022.jpg",  caption: "Trajan's Forum" },
      // Human moments
      { src: "rome/Rome_027.jpg",  caption: "Nuns in the basilica" },
      { src: "rome/Rome_034.jpg",  caption: "Graduates on the steps" },
      { src: "rome/Rome_035.jpg",  caption: "Two Romans" },
    ]
  },
  {
    id: "street",
    title: "Street",
    subtitle: "Ongoing · 2024–2026",
    cover: "street/IMGP1005.jpg",
    images: [
      // Animals leading
      { src: "street/IMGP1032.jpg",          caption: "Muzzled shepherd" },
      { src: "street/2025_06_001.jpg",        caption: "Two dogs, fence" },
      { src: "street/2025_06_009.jpg",        caption: "Cocker Spaniel, fence" },
      { src: "street/2024_june_008-1.jpg",   caption: "Boxer, through the wall" },
      { src: "street/2025_08_034-1.jpg",     caption: "Pétanque players" },
      // Figures and urban life
      { src: "street/2024_03_20_025.jpg",    caption: "Figure with dog, Seine" },
      { src: "street/2025_05_007.jpg",        caption: "Old woman and greyhound" },
      { src: "street/2025_05_003-1.jpg",     caption: "Cobblestone square" },
      { src: "street/2025_05_006.jpg",        caption: "Wedding, church facade" },
      { src: "street/2024_june_005-2.jpg",   caption: "Gothic church doorway" },
      // Night and mood
      { src: "street/2024_03_20_019.jpg",    caption: "Social contrast" },
      { src: "street/2025_10006.jpg",         caption: "Seine quai" },
      { src: "street/2025_10012.jpg",         caption: "Solitude" },
      { src: "street/Monmartre_07.jpg",       caption: "Montmartre" },
      // Wit and observation
      { src: "street/2024_02_10_008-1.jpg",  caption: "Mannequin on tractor" },
      { src: "street/IMGP1005.jpg",           caption: "Child mannequins" },
      { src: "street/2024_03_20_015-1.jpg",  caption: "NOIR" },
      { src: "street/IMGP1029.jpg",           caption: "Fleq ,qrket, Paris" },
      { src: "street/IMGP1008.JPG",           caption: "Brutalist block, night" },
      { src: "street/IMGP1128.JPG",           caption: "Munich arcade" },
    ]
  },
  {
    id: "translucent",
    title: "Translucent",
    subtitle: "Ongoing · 2024–2026",
    cover: "translucent/2025_07_001.jpg",
    images: [
      // Architecture dissolved
      { src: "translucent/2025_07_001.jpg",       caption: "Gothic arch, night ghost" },
      // Figures dissolved
      { src: "translucent/2025_09_005.jpg",        caption: "Elusive" },
      { src: "translucent/2025_08_033-1.jpg",     caption: "Phantom rider" },
      { src: "translucent/Decizy_10.jpg",          caption: "Leaping puppy" },
      // Reflections and doubles
      { src: "translucent/2024_09_Paris_10-1.jpg", caption: "Sky reflected" },
      { src: "translucent/Decizy_02.jpg",          caption: "Building reflected" },
      { src: "translucent/2026_01_20010.jpg",      caption: "Fog, winter trees" },
      { src: "translucent/2026_01_20006.jpg",      caption: "Bare tree" },
      // Self portrait double exposure — closing image
      { src: "translucent/2025_08_005-2.jpg",     caption: "Self portrait" }
    ]
  },
  {
    id: "vienna",
    title: "Vienna",
    subtitle: "2024–2025",
    cover: "vienna/Vienna_002.jpg",
    images: [
      // The Fiaker sequence — best image first as anchor
      { src: "vienna/Vienna_002.jpg",   caption: "Stephansdom, Fiaker" },
      { src: "vienna/2025_06_027.jpg",  caption: "Coachman, cobblestones" },
      { src: "vienna/2025_06_028.jpg",  caption: "White Fiaker" },
      { src: "vienna/vienna011.jpg",    caption: "Child and horses" },
      { src: "vienna/vienna012.jpg",    caption: "Two white horses" },
      // Architecture
      { src: "vienna/vienna006.jpg",    caption: "Iron bridge" },
      { src: "vienna/vienna009.jpg",    caption: "Arches, cyclists" },
    ]
  },
];
