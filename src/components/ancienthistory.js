import React, { useState } from 'react';
import { Chrono } from 'react-chrono';
import { Link } from 'react-router-dom';





const AncientHistory = () => {
    const items = [
        {
            title: 'Prehistory (7 million - 3000 BCE)',

            cardSubtitle: 'Human evolution, early human societies, Neolithic Revolution',
            cardDetailedText: (
                <div>
                    Humation of early crops, such as wheat, barley, and millet, providing the foundation for stable food sources and population growth.
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
            cardTitle: 'Title: Ancient History: The Foundation of Human Civilization',
            cardSubtitle: 'Sumerians, Egyptians, Indus Valley Civilization, Bronze Age',
            cardDetailedText: (
                <div>
                    Smergence of early empires and political systems in sub-Saharan Africa, such as the Nok culture in Nigeria and the Kingdom of Kush in Sudan.
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
                    velopead of papermaking technology from China to the Islamic world and Europe, revolutionizing the production and dissemination of written materials.
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
                    colonization and settlement of new territories, such as Australia and New Zealand, by European powers, leading to significant cultural, social, and ecological transformations.
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
                    ongoing fight for gender equality and the rights of women, which has led to significant advancements in women's rights. <br /><br />
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
    const itemsWithFontColorsAndTitleStyles = itemsWithResizableText.map((item) => ({
        ...item,
        title: (
            <span
                style={{
                    color: item === currentItem ? '#415d51' : '#203530',
                    fontSize: '1.8rem' // add this line to set the font size
                }}
            //line below currently links title to homepage, eventually link to new history page
            >
                <Link to={item.route} style={{ textDecoration: 'none', color: 'inherit' }}>{item.title.split(' ')[0]}</Link>
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