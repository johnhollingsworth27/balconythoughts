import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { Link } from 'react-router-dom';
import GriffithPlayer from './griffithvideo';




const History = () => {
    const items = [
        {
            title: 'Prehistory (7 million - 3000 BCE)',
            cardTitle: 'Prehistory',
            route: '/prehistory',
            linkText: 'Prehistory',
            cardSubtitle: 'Human evolution, early human societies, Neolithic Revolution',
            cardDetailedText: (
                <div>
                    Human evolution, beginning with the emergence of the first hominids in Africa. <br /><br />
                    Development of early human societies and the use of stone tools. <br /><br />
                    Neolithic Revolution, which marked the transition from hunter-gatherer societies to settled agriculture. <br /><br />
                    Domestication of animals, contributing to the development of pastoral societies. <br /><br />
                    Formation of the first complex social structures and belief systems. <br /><br />
                    Development of pottery and other crafts for daily life and trade. <br /><br />
                    Spread of languages and the emergence of linguistic families. <br /><br />
                    Early art forms, including cave paintings and carvings, reflecting early human experiences and beliefs.<br /><br />
                    The development of fire control, enabling early humans to protect themselves, cook food, and adapt to new environments. <br /><br />
                    The emergence of symbolic thought, leading to the creation of early forms of communication and ritual. <br /><br />
                    The spread of early humans out of Africa and their adaptation to various environments across the globe. <br /><br />
                    The extinction of other hominid species, such as Neanderthals, as Homo sapiens became the dominant human species. <br /><br />
                    The invention of the wheel, a crucial technological innovation for transportation and later mechanical applications. <br /><br />
                    The development of early forms of textiles and clothing, providing protection and facilitating cultural expression. <br /><br />
                    The emergence of social stratification and the establishment of leadership roles within early human communities. <br /><br />
                    The creation of monumental structures, such as Stonehenge and Göbekli Tepe, reflecting early religious and social practices. <br /><br />
                    Advances in tool-making, including the transition from stone to metal tools during the Copper Age. <br /><br />
                    The domestication of animals, such as dogs, sheep, and goats, providing early human societies with resources, labor, and companionship. <br /><br />
                    The emergence of pottery and ceramics, enabling the storage and transport of food, as well as the development of artistic expression. <br /><br />
                    The development of complex funerary practices, such as burial mounds and tombs, reflecting early beliefs about the afterlife. <br /><br />
                    Early forms of music and dance, which played important roles in ritual, communication, and social cohesion. <br /><br />
                    The appearance of cave paintings and petroglyphs, offering insights into the lives and beliefs of prehistoric humans. <br /><br />
                    The formation of trade networks, which allowed early human societies to exchange goods, ideas, and technologies over long distances. <br /><br />
                    The growth of complex societies, marked by increasing population density, specialization of labor, and the development of political and religious institutions. <br /><br />
                    The emergence of early metallurgy, which enabled the production of more advanced tools, weapons, and decorative items. <br /><br />
                    The use of astronomical observations for the development of calendars and timekeeping, as well as for religious and agricultural purposes. <br /><br />
                    The cultivation of early crops, such as wheat, barley, and millet, providing the foundation for stable food sources and population growth.
                </div>

            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://assets.editorial.aetnd.com/uploads/2020/03/human-evolution-gettyimages-122223741.jpg',
                },
            },
        },
        {
            title: 'Ancient History (3000 BCE - 500 CE)',
            route: '/ancienthistory',
            linkText: 'AncientHistory',
            cardTitle: 'Title: Ancient History: The Foundation of Human Civilization',
            cardSubtitle: 'Sumerians, Egyptians, Indus Valley Civilization, Bronze Age',
            cardDetailedText: (
                <div>
                    Sumerians, Egyptians, and Indus Valley Civilization as early cradles of human civilization. <br /><br />
                    The Bronze Age, which saw the development of writing, urbanization, and empires (Akkadians, Babylonians, Hittites, and Mycenaeans). <br /><br />
                    Classical Antiquity, with the rise of the Greek, Persian, and Roman empires, as well as major philosophers, mathematicians, and scientists (Socrates, Plato, Aristotle, Archimedes, Euclid). <br /><br />
                    Major religious figures, such as the Buddha, Confucius, and Jesus Christ, who shaped the spiritual beliefs of large segments of humanity. <br /><br />
                    Development of law and governance, including the Code of Hammurabi and Roman legal principles. <br /><br />
                    Construction of monumental architecture, such as the Pyramids of Giza, the Parthenon, and the Colosseum. <br /><br />
                    Spread and evolution of artistic styles, including Egyptian, Greek, and Roman art. <br /><br />
                    Advances in military technology and tactics, exemplified by the Persian Immortals, the Roman Legion, and the Greek phalanx. <br /><br />
                    The development of early monetary systems and trade networks, facilitating economic exchange and interaction between civilizations. <br /><br />
                    The construction of the Great Wall of China, a monumental feat of engineering and a symbol of imperial power. <br /><br />
                    The emergence of legal systems and codifications, such as the Twelve Tables in Rome and the Laws of Manu in India. <br /><br />
                    The spread of alphabetic writing systems, including Phoenician, Greek, and Latin, which enabled more efficient communication and record-keeping. <br /><br />
                    The rise and fall of the Maurya and Gupta empires in India, known for their contributions to art, science, and culture. <br /><br />
                    The development of advanced agricultural techniques and the spread of staple crops, such as rice, wheat, and maize, supporting growing populations. <br /><br />
                    The flourishing of the Silk Road, a network of trade routes connecting China, India, Persia, and the Mediterranean, fostering cultural exchange and economic growth. <br /><br />
                    The conquests of Alexander the Great, which expanded Greek influence across the known world and laid the foundation for the Hellenistic period. <br /><br />
                    Advances in medicine and public health, including the works of Hippocrates, Galen, and ancient Indian and Chinese medical practitioners.<br /><br />
                    The development of early maritime technologies, enabling seafaring civilizations to explore, trade, and establish colonies along coastlines and islands. <br /><br />
                    The rise of the Phoenician city-states and their establishment of colonies and trade networks throughout the Mediterranean. <br /><br />
                    The emergence of complex legal and administrative systems, such as the Code of Hammurabi in Babylon and the Egyptian bureaucracy. <br /><br />
                    The construction of monumental architectural achievements, such as the Egyptian pyramids, the Parthenon in Athens, and the Colosseum in Rome. <br /><br />
                    The growth of the Olmec civilization in Mesoamerica, known for its monumental sculptures, sophisticated art, and early forms of writing and calendrical systems. <br /><br />
                    The spread and interaction of religious beliefs, such as the syncretism of Greek and Roman pantheons, and the incorporation of local deities into imperial cults. <br /><br />
                    The development of advanced irrigation and water management systems, enabling the expansion of agriculture and urbanization in arid regions. <br /><br />
                    The establishment of long-distance trade networks and caravan routes, such as the Incense and Amber routes, facilitating the exchange of valuable goods and resources. <br /><br />
                    The growth of the Celtic culture in Europe, known for its art, metalwork, and influence on the development of later European societies. <br /><br />
                    The emergence of early empires and political systems in sub-Saharan Africa, such as the Nok culture in Nigeria and the Kingdom of Kush in Sudan.
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.metalocus.es/sites/default/files/styles/mopis_fullslider_desktop/public/lead-images/metalocus_01_the-parthenon_final_09.jpg?itok=H4UTK1Ou',
                },
            },
        },
        {
            title: 'Postclassical History (500 CE - 1500 CE)',
            cardTitle: 'Postclassical History',
            cardSubtitle: 'Byzantine & Islamic empires, Middle Ages, Mongol Empire, Renaissance',
            cardDetailedText: (
                <div>
                    The emergence of the Byzantine and Islamic empires, which preserved and expanded upon classical knowledge and culture. <br /><br />
                    The Middle Ages in Europe, characterized by feudalism, the Catholic Church, and the rise of the first European nation-states. <br /><br />
                    The Mongol Empire, which, under Genghis Khan and his successors, conquered much of Asia and influenced global trade. <br /><br />
                    The Renaissance, a period of cultural and intellectual rebirth, with influential artists and thinkers such as Leonardo da Vinci, Michelangelo, and Niccolò Machiavelli. <br /><br />
                    Development and spread of new religions and sects, including Islam, and the Great Schism between the Catholic and Orthodox Churches. <br /><br />
                    The emergence of powerful regional empires, such as the Song Dynasty in China, the Gupta Empire in India, and the Mali Empire in West Africa. <br /><br />
                    The Viking Age, characterized by Norse exploration, trade, and settlement in Europe and the North Atlantic. <br /><br />
                    The Crusades, a series of religious wars between Christians and Muslims, which had lasting effects on European and Middle Eastern politics and culture.<br /><br />
                    The development of the feudal system in Europe and the establishment of the manorial economy. <br /><br />
                    The spread of Christianity throughout Europe, leading to the establishment of monasteries and the conversion of various European tribes. <br /><br />
                    The rise of the Islamic Golden Age, with major advancements in science, mathematics, philosophy, and art. <br /><br />
                    The Norman Conquest of England in 1066, which transformed the political, social, and linguistic landscape of the country. <br /><br />
                    The emergence of Gothic architecture, characterized by pointed arches, ribbed vaults, and flying buttresses, exemplified in the construction of cathedrals throughout Europe. <br /><br />
                    The establishment of universities and the growth of scholasticism, promoting intellectual inquiry and the preservation of knowledge. <br /><br />
                    The development of new maritime technologies, such as the compass and astrolabe, which paved the way for future explorations. <br /><br />
                    The spread of the Black Death in the 14th century, a devastating pandemic that killed millions and led to significant social and economic changes. <br /><br />
                    The growth of powerful city-states and the rise of commerce in Europe, particularly in Italy and the Low Countries, setting the stage for the Renaissance. <br /><br />
                    The spread of Islam in Africa, leading to the establishment of powerful Islamic states, such as the Mali Empire and the Sultanate of Kilwa. <br /><br />
                    The rise of the Inca Empire in South America, known for its complex administrative system, monumental architecture, and vast road network. <br /><br />
                    The development of new agricultural techniques and the spread of the three-field system in Europe, improving crop yields and supporting population growth. <br /><br />
                    The emergence of the Crusades, a series of religious and military campaigns aimed at reclaiming the Holy Land and shaping the relations between Christians and Muslims. <br /><br />
                    The establishment of powerful maritime city-states, such as Venice and Genoa, which dominated trade in the Mediterranean and pioneered new financial and commercial practices. <br /><br />
                    The spread of the Cyrillic alphabet and Orthodox Christianity throughout Eastern Europe, following the conversion of Slavic peoples by Saints Cyril and Methodius. <br /><br />
                    The growth of the Aztec Empire in Mesoamerica, known for its complex social and political structure, advanced agricultural systems, and monumental architecture. <br /><br />
                    The establishment of the Hanseatic League, a powerful alliance of Northern European cities that dominated trade in the Baltic and North Sea regions. <br /><br />
                    The rise of the Khmer Empire in Southeast Asia, known for its architectural achievements, such as the temple complex of Angkor Wat. <br /><br />
                    The spread of papermaking technology from China to the Islamic world and Europe, revolutionizing the production and dissemination of written materials.
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.artyfactory.com/art_appreciation/art_movements/italian-renaissance/italian-renaissance/school-of-athens.jpg',
                },
            },

        },
        {
            title: 'Early Modern Period (1500 CE - 1800 CE)',
            cardTitle: 'Early Modern Period',
            cardSubtitle: 'Age of Exploration, Scientific Revolution, Enlightenment, major conflicts',
            cardDetailedText: (
                <div>
                    The Age of Exploration, with European voyages leading to the discovery and colonization of new lands (Columbus, Vasco da Gama, Magellan). <br /><br />
                    The Scientific Revolution, which saw significant advancements in math, physics, astronomy, and chemistry (Galileo, Kepler, Newton, Lavoisier). <br /><br />
                    The Enlightenment, a philosophical movement that emphasized reason, liberty, and secularism, and influenced the formation of modern nation-states (Hobbes, Locke, Voltaire, Rousseau). <br /><br />
                    Major conflicts, such as the Thirty Years' War and the American and French Revolutions, which shaped the political landscape of the time. <br /><br />
                    Global trade and cultural exchange, facilitated by European empires establishing colonies in the Americas, Africa, and Asia, and the rise of powerful trading companies. <br /><br />
                    The transatlantic slave trade, which led to the forced migration of millions of Africans to the Americas and had profound consequences on the world's social, economic, and political systems. <br /><br />
                    The spread of new artistic and literary movements, such as Baroque, Rococo, and Neoclassicism, which reflected the changing cultural values and tastes of the time. <br /><br />
                    The Agricultural Revolution, characterized by innovations in farming techniques, crop rotation, and livestock management, which increased productivity and laid the groundwork for the Industrial Revolution.<br /><br />
                    The development of the printing press, which revolutionized the dissemination of information and contributed to the growth of literacy. <br /><br />
                    The Protestant Reformation, a religious and political movement that challenged the authority of the Catholic Church and led to the emergence of various Protestant denominations. <br /><br />
                    The rise of the Ottoman Empire, which conquered Constantinople in 1453 and expanded its territory throughout the Middle East, North Africa, and southeastern Europe. <br /><br />
                    The establishment of the Mughal Empire in India, known for its cultural achievements and architectural marvels, such as the Taj Mahal. <br /><br />
                    The growth of the transoceanic slave trade, which connected the Americas, Europe, and Africa in a global system of forced labor and exploitation. <br /><br />
                    The rise of the absolutist state in Europe, with powerful monarchs like Louis XIV of France and Peter the Great of Russia centralizing authority and expanding their realms. <br /><br />
                    The evolution of military technology and tactics, including the widespread adoption of firearms and the development of professional standing armies. <br /><br />
                    The emergence of new forms of artistic expression, such as the Dutch Golden Age of painting and the rise of the novel as a literary form. <br /><br />
                    The spread of global trade networks and the rise of mercantilism, an economic theory promoting the accumulation of wealth through international trade. <br /><br />
                    The emergence of the Counter-Reformation, a movement within the Catholic Church aimed at addressing the challenges posed by the Protestant Reformation and revitalizing Catholicism. <br /><br />
                    The rise of powerful monarchies and centralized states in East Asia, such as the Ming and Qing dynasties in China and the Tokugawa shogunate in Japan. <br /><br />
                    The development of the Atlantic slave trade, which forcibly transported millions of Africans to the Americas and had lasting consequences for the global economy and African societies. <br /><br />
                    The growth of the plantation economy in the Americas, which relied on the labor of enslaved people and produced valuable cash crops, such as sugar, tobacco, and cotton. <br /><br />
                    The spread of the Baroque and Rococo styles in art, architecture, and music, reflecting the grandeur and opulence of the time. <br /><br />
                    The emergence of new social and political ideas, such as the concept of the "divine right of kings" and the beginnings of modern political philosophy. <br /><br />
                    The rise of powerful empires in West Africa, such as the Oyo, Benin, and Ashanti, which were known for their artistic achievements and extensive trade networks. <br /><br />
                    The development of new financial and commercial institutions, such as the joint-stock company and the modern banking system, facilitating the growth of international trade and investment. <br /><br />
                    The widespread adoption of the Gregorian calendar, which replaced the Julian calendar and became the internationally accepted civil calendar. <br /><br />
                    The colonization and settlement of new territories, such as Australia and New Zealand, by European powers, leading to significant cultural, social, and ecological transformations.
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://web.colby.edu/continuingrevolutions/files/2016/06/Screen-Shot-2016-08-17-at-12.00.48-PM.png',
                },
            },
        },
        {
            title: 'Modern History (1800 CE - present)',
            cardTitle: 'Modern History',
            cardSubtitle: 'Industrial Revolution, political ideologies, World Wars, Cold War, digital age',
            cardDetailedText: (
                <div>
                    The Industrial Revolution, which transformed societies and economies through technological advancements and urbanization. <br /><br />
                    Major political ideologies and movements, such as socialism, nationalism, and feminism, which influenced global politics and social structures. <br /><br />
                    Two World Wars and the Cold War, which defined much of the 20th century and led to significant changes in geopolitics, technology, and society. <br /><br />
                    The rise of the digital age and rapid advancements in science, technology, and communication, which have brought about a new era of globalization and interconnectivity. <br /><br />
                    Decolonization and the emergence of newly independent nations, leading to a shift in the global balance of power and the formation of international organizations such as the United Nations. <br /><br />
                    Civil rights movements, such as the fight for racial equality in the United States and the struggle against apartheid in South Africa, which challenged discrimination and promoted social justice. <br /><br />
                    Population growth, urbanization, and migration, which have reshaped demographics and contributed to increasing global interdependence. <br /><br />
                    Environmental concerns, including climate change, deforestation, and pollution, which have spurred international efforts to address these challenges and promote sustainable development. <br /><br />
                    The emergence of the United States and the Soviet Union as global superpowers following World War II, shaping the political, economic, and cultural dynamics of the world. <br /><br />
                    The development of modern transportation systems, including railroads, automobiles, and air travel, which revolutionized the movement of people and goods. <br /><br />
                    The women's suffrage movement, which sought and achieved the right to vote for women in many countries throughout the 19th and 20th centuries. <br /><br />
                    The formation of international organizations, such as the World Health Organization, the International Monetary Fund, and the World Trade Organization, which promote global cooperation and address various challenges. <br /><br />
                    The rise of popular culture and mass media, including film, radio, television, and the Internet, which have shaped societal values and global communication. <br /><br />
                    The development of nuclear weapons and the ongoing challenges posed by nuclear proliferation and the potential for nuclear conflict. <br /><br />
                    The struggle for LGBTQ+ rights, leading to greater recognition and acceptance of diverse sexual orientations and gender identities in many parts of the world. <br /><br />
                    The rise of China and India as global economic powerhouses, contributing to the shift in the global balance of power and the emergence of a multipolar world order. <br /><br />
                    The ongoing challenges of income inequality, access to education and healthcare, and the need for sustainable development in the face of a growing global population. <br /><br />
                    The development of photography, cinema, and other visual arts, which have shaped the way people perceive and document the world around them. <br /><br />
                    The emergence of powerful nationalist movements, such as the unification of Italy and Germany, which led to the formation of modern nation-states and redefined the political map of Europe. <br /><br />
                    The growth of labor movements and the establishment of workers' rights, including minimum wage laws, workplace safety regulations, and the right to unionize. <br /><br />
                    The development of modern psychology and the study of the human mind, with influential thinkers such as Sigmund Freud, Carl Jung, and Jean Piaget. <br /><br />
                    The emergence of environmentalism and the growing awareness of human impacts on the natural world, leading to efforts to conserve resources and protect the environment. <br /><br />
                    The decolonization movement and the emergence of newly independent nations in Africa, Asia, and the Caribbean, reshaping global politics and international relations. <br /><br />
                    The rise of international terrorism and the ongoing challenges posed by extremist groups, leading to significant changes in global security and counterterrorism efforts. <br /><br />
                    The growth of the internet and the World Wide Web, which have revolutionized communication, commerce, and access to information, connecting people around the world. <br /><br />
                    The ongoing fight for gender equality and the rights of women, which has led to significant advancements in women's rights. <br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
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
                        <strong>History of the World</strong>
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

export default History;