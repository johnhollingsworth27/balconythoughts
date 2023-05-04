import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { Link } from 'react-router-dom';

const Prehistory = () => {
    const items = [
        {
            title: 'Early Hominid Evolution (7 - 4 million BCE)',
            cardTitle: 'Early Hominid Evolution',
            cardSubtitle: 'Hominid origins, bipedalism, Ardipithecus, Australopithecus',
            cardDetailedText: (
                <div>
                    Hominids, the early ancestors of humans, began to evolve in Africa.<br /><br />
                    Bipedalism, or walking on two legs, emerged as a defining characteristic of early hominids.<br /><br />
                    Ardipithecus, an early hominid genus, is characterized by its small brain size and large canine teeth.<br /><br />
                    Australopithecus, another early hominid genus, showed more advanced bipedalism and reduced canine teeth.<br /><br />
                    Sahelanthropus tchadensis, one of the earliest known hominids, dates back to around 7 million years ago.<br /><br />
                    Orrorin tugenensis, another early hominid, exhibited characteristics of both bipedalism and tree-dwelling.<br /><br />
                    The Laetoli footprints in Tanzania provide evidence of early bipedalism in Australopithecus afarensis.<br /><br />
                    Early hominids experienced increased brain size relative to body size, known as encephalization.<br /><br />
                    Climate change and environmental pressures likely contributed to the evolution of bipedalism.<br /><br />
                    Sexual dimorphism, differences in physical traits between males and females, gradually reduced in early hominids.<br /><br />
                </div>

            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://dr282zn36sxxg.cloudfront.net/datastreams/f-d%3A5df80f39543c9caa761e7dcfe7fce9d404f70c8f3850a08fce443dde%2BIMAGE_THUMB_POSTCARD_TINY%2BIMAGE_THUMB_POSTCARD_TINY.1',
                },
            },
        },
        {
            title: 'Early Stone Age (2.6 million - 300,000 BCE)',
            cardTitle: 'Early Stone Age',
            cardSubtitle: 'Homo habilis, Oldowan tools, early Homo erectus, scavenging and hunting',
            cardDetailedText: (
                <div>
                    Homo habilis, an early human ancestor, developed more advanced stone tools, known as the Oldowan tool industry.<br /><br />
                    Oldowan tools marked a significant advancement in hominid capabilities, including cutting, crushing, and processing food.<br /><br />
                    Early Homo erectus, a later human ancestor, emerged around 1.9 million years ago.<br /><br />
                    Scavenging and hunting became essential strategies for early hominids to acquire food and resources.<br /><br />
                    Homo habilis' brain size was larger than that of its predecessors, indicating an increased capacity for problem-solving and tool use.<br /><br />
                    The Oldowan tool industry is named after the Olduvai Gorge in Tanzania, where some of the first examples were discovered.<br /><br />
                    Early Homo erectus used more diverse and specialized tools, such as handaxes and cleavers.<br /><br />
                    Homo erectus was the first hominid species to leave Africa, migrating to Asia and Europe.<br /><br />
                    The controlled use of fire by Homo erectus facilitated cooking, protection, and social bonding.<br /><br />
                    The development of more sophisticated hunting strategies led to increased success in acquiring food and resources.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://qph.cf2.quoracdn.net/main-qimg-60609cdca405976b643b08614a3b6bc5-lq',
                },
            },
        },
        {
            title: 'Middle Stone Age (300,000 - 50,000 BCE)',
            cardTitle: 'Middle Stone Age',
            cardSubtitle: 'Emergence of Homo sapiens, Levallois technique, symbolic behavior',
            cardDetailedText: (
                <div>
                    Homo sapiens, modern humans, evolved around 300,000 years ago, showing increased brain capacity and complex behavior.<br /><br />
                    The Levallois technique, a more advanced method of stone tool production, was developed during this period.<br /><br />
                    Symbolic behavior, such as the use of pigments and the creation of art, emerged, indicating cognitive advancements.<br /><br />
                    Homo sapiens' increased brain capacity facilitated the development of language, social structures, and cultural practices.<br /><br />
                    The Levallois technique allowed for the creation of more sophisticated, symmetrical, and sharper tools.<br /><br />
                    Early Homo sapiens began to create more complex and diverse tools, such as points, scrapers, and awls.<br /><br />
                    Personal ornaments, like beads and pendants, indicated a growing sense of individual and group identity.<br /><br />
                    Homo sapiens engaged in long-distance trade, exchanging resources and ideas between groups.<br /><br />
                    Burial practices and rituals emerged, reflecting early religious beliefs and a developing understanding of mortality.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://d3i71xaburhd42.cloudfront.net/093cf73e488719081e8a23fc5efb02ad446b3a7f/3-Figure2-1.png',
                },
            },

        },
        {
            title: 'Upper Paleolithic (50,000 - 12,000 BCE)',
            cardTitle: 'Upper Paleolithic',
            cardSubtitle: 'Cave art, advanced tools, human migration, extinction of Neanderthals',
            cardDetailedText: (
                <div>
                    The Upper Paleolithic saw the development of complex tools like blades, burins, and harpoons, improving hunting and food processing capabilities.<br /><br />
                    Cave art and other forms of artistic expression flourished, reflecting the development of human culture and social structure.<br /><br />
                    Homo sapiens migrated out of Africa and into Europe, Asia, and Australia, encountering and ultimately outcompeting other hominid species.<br /><br />
                    Neanderthals, a closely related hominid species, went extinct around 40,000 years ago, possibly due to competition with Homo sapiens.<br /><br />
                    The development of projectile weapons, like the atlatl and bow, revolutionized hunting strategies and increased efficiency.<br /><br />
                    The creation of bone, antler, and ivory tools diversified the range of possible tasks and crafts.<br /><br />
                    The Venus figurines, small statuettes depicting women, suggest a shared cultural understanding of fertility and femininity.<br /><br />
                    The invention of sewing and the production of clothing allowed humans to adapt to a wider range of environments.<br /><br />
                    The extinction of other hominid species, such as the Denisovans, may also be linked to competition with Homo sapiens.<br /><br />
                    The Last Glacial Maximum, a period of extreme cold, prompted human populations to adapt to new challenges and environments.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.thoughtco.com/thmb/p5s0jrd8tWN1qScRKsKkxPmQpas=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/panel-of-the-unicorn--panel-of-the-black-bear--at-lascaux--artist--art-of-the-upper-paleolithic-520724733-5b2eced143a1030036b44b9b.jpg',
                },
            },
        },
        {
            title: 'Neolithic Revolution (12,000 - 3000 BCE)',
            cardTitle: 'Neolithic Revolution',
            cardSubtitle: 'Agriculture, domestication of animals, pottery, settled communities',
            cardDetailedText: (
                <div>
                    The Neolithic Revolution marked the transition from hunting and gathering to agriculture and settled communities.<br /><br />
                    Humans began to domesticate plants and animals, enabling the development of more complex societies and food surpluses.<br /><br />
                    The invention of pottery allowed for better food storage and cooking, contributing to societal advancements.<br /><br />
                    Settled communities grew into larger villages and eventually early cities, with increasingly complex social structures and specialization of labor.<br /><br />
                    The development of agriculture is associated with the domestication of plants like wheat, barley, and rice.<br /><br />
                    Domestication of animals, such as sheep, goats, pigs, and cattle, provided a stable source of food and materials.<br /><br />
                    The formation of permanent settlements led to a division of labor and the emergence of specialized crafts and professions.<br /><br />
                    The construction of megalithic structures, such as Göbekli Tepe and Stonehenge, reflects the development of complex religious practices and social organization.<br /><br />
                    The invention of the wheel revolutionized transportation and facilitated trade between communities.<br /><br />
                </div>
            ),
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://www.ancient-origins.net/sites/default/files/field/image/Neolithic-revolution-ancient-farmers.jpg',
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
                        <strong>Prehistory 7 million - 3000 BCE</strong>
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

export default Prehistory;