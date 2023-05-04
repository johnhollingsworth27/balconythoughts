import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { Link } from 'react-router-dom';


const AncientHistory = () => {
    const items = [
        {
            title: 'Early River Vallies (3000 BCE - 1600 BCE)',
            cardTitle: 'Early River Valley Civilizations',

            cardSubtitle: 'Mesopotamia, Ancient Egypt, Indus Valley, Early China',
            cardDetailedText: (
                <div>
                    The Sumerians in Mesopotamia established the first known cities and developed cuneiform writing.<br /><br />
                    Ancient Egypt, along the Nile River, developed a complex society with centralized government and religion.<br /><br />
                    The Indus Valley civilization, in present-day Pakistan and India, featured advanced urban planning and drainage systems.<br /><br />
                    Early Chinese civilization developed along the Yellow River, giving rise to the Xia and Shang Dynasties.<br /><br />
                    These early civilizations relied on agriculture and river systems for their sustenance, growth, and development.<br /><br />
                    The Epic of Gilgamesh, one of the earliest known works of literature, originated in ancient Mesopotamia.<br /><br />
                    The Great Sphinx of Giza, a monumental limestone statue, represents the power and mystery of ancient Egypt.<br /><br />
                    The Indus Valley civilization's seals, featuring various animals and symbols, suggest a complex system of communication.<br /><br />
                    The Chinese Xia Dynasty, although largely legendary, is considered the first Chinese dynasty by some historians.<br /><br />
                    The development of early writing systems, such as cuneiform and hieroglyphs, allowed for the recording of history, laws, and religious texts.<br /><br />
                </div>

            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://assets.sutori.com/user-uploads/image/5914052a-9583-4808-adc9-4c7922954232/3d65386388cd0868a83f71ea9c235286.png',
                },
            },
        },
        {
            title: 'Bronze Age (1600 BCE - 1200 BCE)',
            cardTitle: 'Middle and Late Bronze Age',
            cardSubtitle: 'Hittite Empire, Mycenaean Greece, New Kingdom Egypt, Shang Dynasty',
            cardDetailedText: (
                <div>
                    The Hittite Empire, in present-day Turkey, was a significant military power and innovator of ironworking techniques.<br /><br />
                    Mycenaean Greece, an early Greek civilization, is known for its palatial centers and Linear B script.<br /><br />
                    New Kingdom Egypt saw the expansion of its territory and influence under pharaohs like Amenhotep III, Akhenaten, and Ramesses II.<br /><br />
                    The Late Shang Dynasty in China saw advancements in bronze metallurgy, military technology, and the development of a complex social hierarchy.<br /><br />
                    The interactions between these civilizations led to trade, cultural exchange, and occasional conflicts.<br /><br />
                    The Hittites were known for their expertise in chariot warfare, which gave them a military advantage.<br /><br />
                    Mycenaean Greece was heavily influenced by Minoan civilization, as evidenced by the adoption of Linear A script and architectural elements.<br /><br />
                    The Battle of Kadesh, fought between the Egyptians and Hittites, is one of the earliest well-documented military conflicts.<br /><br />
                    The Shang Dynasty's use of oracle bones for divination represents an early form of Chinese written communication and religious practice.<br /><br />
                    Trade between the civilizations of the Late Bronze Age facilitated the exchange of ideas, goods, and technologies.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://i.pinimg.com/originals/5e/8e/b3/5e8eb3ea89ad2b85c9642b895cd6ab4b.jpg',
                },
            },
        },
        {
            title: 'Iron Age (1200 BCE - 800 BCE)',
            cardTitle: 'Late Bronze Age Collapse and Iron Age',
            cardSubtitle: 'Bronze Age Collapse, Phoenicians, Assyrian Empire, Zhou Dynasty',
            cardDetailedText: (
                <div>
                    The Late Bronze Age Collapse led to the disintegration of major civilizations, such as the Hittites and Mycenaeans, due to various factors, including invasions, climate change, and economic decline.<br /><br />
                    The Phoenicians, a seafaring people, established a network of city-states and colonies, spreading their alphabet and trade throughout the Mediterranean.<br /><br />
                    The Assyrian Empire, in Mesopotamia, became a dominant military power, known for its brutality and extensive conquests.<br /><br />
                    The Zhou Dynasty in China introduced the Mandate of Heaven, which justified the ruling dynasty's authority and established a cyclical view of history.<br /><br />
                    The Iron Age saw technological advancements, including the widespread use of iron, which improved agricultural productivity and military capabilities.<br /><br />
                    The Sea Peoples, a group of mysterious raiders, contributed to the destabilization and collapse of several Bronze Age civilizations.<br /><br />
                    The Phoenicians' alphabet became the basis for many future writing systems, including Greek and Latin.<br /><br />
                    The Assyrian Empire's distinctive art and architecture, such as the lamassu, reflect its cultural achievements and power.<br /><br />
                    The emergence of iron tools and weapons allowed for increased agricultural productivity and more effective warfare.<br /><br />
                    The period after the Late Bronze Age Collapse is sometimes referred to as the "Greek Dark Ages," due to the lack of written records and cultural decline.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638891547/EducationHub/photos/assyrian-empire-getty.jpg',
                },
            },

        },
        {
            title: 'Classical Antiquity (800 BCE - 1 CE)',
            cardTitle: 'Classical Antiquity',
            cardSubtitle: 'Ancient Greece, Persian Empire, Roman Republic, Maurya Empire',
            cardDetailedText: (
                <div>
                    Ancient Greece, a collection of city-states, made significant contributions to philosophy, science, and the arts.<br /><br />
                    The Persian Empire, founded by Cyrus the Great, expanded its territory and influence across the Near East, Anatolia, Egypt, and Central Asia.<br /><br />
                    The Roman Republic developed complex systems of governance and laid the foundation for the later Roman Empire.<br /><br />
                    The Maurya Empire in India, founded by Chandragupta Maurya, promoted political stability, economic growth, and cultural exchange.<br /><br />
                    Classical Antiquity laid the foundations for Western culture, politics, and thought, and greatly influenced the development of other regions.<br /><br />
                    The Athenian democracy, developed during the Classical period of Greece, is considered an early model for modern democratic systems.<br /><br />
                    The Persian Empire's royal road system facilitated communication, trade, and military movement across its vast territories.<br /><br />
                    Julius Caesar, a Roman general and statesman, played a critical role in the transformation of the Roman Republic into the Roman Empire.<br /><br />
                    The Mauryan Emperor Ashoka, after converting to Buddhism, promoted religious tolerance and moral governance throughout his empire.<br /><br />
                    The construction of monumental temples and buildings, such as the Parthenon in Athens, reflects the artistic and architectural achievements of the Classical era.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Akropolis_by_Leo_von_Klenze.jpg/1024px-Akropolis_by_Leo_von_Klenze.jpg',
                },
            },
        },
        {
            title: 'Early Common Era (1 CE - 500 CE)',
            cardTitle: 'Early Common Era',
            cardSubtitle: 'Roman Empire, Han Dynasty, Silk Road, Christianity and Buddhism',
            cardDetailedText: (
                <div>
                    The Roman Empire, beginning with Augustus in 27 BCE, expanded its territory and influence across Europe, Asia, and Africa.<br /><br />
                    The Han Dynasty, a golden age of Chinese civilization, expanded its territory, promoted trade, and made significant advancements in science, technology, and the arts.<br /><br />
                    The Gupta Empire, known as India's Golden Age, saw significant advancements in science, mathematics, art, and literature.<br /><br />
                    The Silk Road, a network of trade routes connecting China to the Mediterranean, facilitated the exchange of goods, ideas, and cultures between East and West.<br /><br />
                    The spread of Christianity and Buddhism greatly influenced the development of religious and philosophical thought in various regions of the world.<br /><br />
                    The Pax Romana, a period of relative peace and stability in the Roman Empire, allowed for significant advancements in art, architecture, and infrastructure.<br /><br />
                    The Han Dynasty's invention of paper revolutionized communication, record-keeping, and the spread of knowledge.<br /><br />
                    The Gupta Empire's contributions to mathematics, including the concept of zero and the decimal system, have had a lasting impact on global mathematical understanding.<br /><br />
                    The Silk Road facilitated not only the exchange of goods but also the spread of religions such as Buddhism, Christianity, and Manichaeism.<br /><br />
                    The Edict of Milan, issued by Emperor Constantine in 313 CE, granted religious freedom within the Roman Empire and allowed for the growth of Christianity.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.vision.org/sites/default/files/img/2016spring_roman-empire-reconsidered_1920x1080.jpg',
                },
            },
        }
    ];
    // ...

    const [backgroundColor, setBackgroundColor] = useState('#415d51');
    const [currentItem, setCurrentItem] = useState(null);

    const changeBackground = (color) => {
        setBackgroundColor(color);
    };

    const itemsWithResizableText = items.map((item, index) => ({
        ...item,
        cardDetailedText: (
            <div
                style={{
                    overflowY: 'scroll',
                    resize: 'vertical',
                    maxHeight: '500px',
                    minHeight: '100px',
                    padding: '1rem',
                    borderTop: '1px solid #ccc',
                }}
            >
                {item.cardDetailedText}
            </div>
        ),
    }));
    const itemsWithFontColorsAndTitleStyles = itemsWithResizableText.map((item, index) => ({
        ...item,
        title: (
            <span
                style={{
                    color: index === currentItem ? '#415d51' : '#203530',
                    fontSize: '1.8rem' // add this line to set the font size
                }}
            //line below currently links title to homepage, eventually link to new history page
            >
                <Link to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>{item.title}</Link>
            </span>
        ),
        cardTitle: <span style={{ color: '#5a5a5a', padding: '0px' }}>{item.cardTitle}</span>,
        cardSubtitle: <span style={{ color: '#7a7a7a', padding: '15px' }}>{item.cardSubtitle}</span>,
    }));

    const customTheme = {
        primary: '#203530',
        secondary: '#f9f9f9',
        titleColor: '#203530',
        cardBgColor: "#FFFFFF",
        cardForeColor: "#FFFFFF",
        activeTimelinePointColor: '#415d51',
    };

    return (
        <>
            <div style={{ backgroundColor: '#D4D0D0', marginTop: '70px', paddingTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1" style={{ color: '#581922', marginBottom: '0' }}>
                        <strong>Ancient History 3000 BCE - 500 CE</strong>
                    </h1>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '150vh', backgroundColor: '#D4D0D0' }}>
                <div style={{ width: '1370px', minHeight: '1000px' }}>
                    <Chrono
                        items={itemsWithFontColorsAndTitleStyles}
                        mode="VERTICAL_ALTERNATING"
                        theme={customTheme}
                        onItemSelected={(item) => setCurrentItem(item)}
                    />
                </div>
            </div>
        </>
    );
};

export default AncientHistory;