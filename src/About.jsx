import { Header, List, Image, Grid, Accordion } from "semantic-ui-react";
import { useStore } from "./store/useStore";
import CloseBtn from "./CloseBtn";

export default function About() {
    const about = useStore((state) => state.about);

    const margin = 50;

    const contStyle = {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        pointerEvents: "none",
        textAlign: "middle",
    };

    const contTextStyle = {
        padding: margin / 2,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        overflow: "scroll",
        paddingTop: margin * 2,
        pointerEvents: "auto",
        textAlign: "middle",
        overflowX: "hidden",
        paddingBottom: margin * 2,
    };

    const paragraph = {
        textIndent: "2em",
    };

    const chapter = {
        fontSize: "3em",
        fontWeight: 400,
    };

    const subChapter = {
        fontWeight: 400,
    };

    const names = {
        fontWeight: 400,
    };
    const activity = {
        color: "rgb(200,200,200)",
    };

    const credits = {
        project: [
            {
                name: "Mathilde Marengo",
                activity: "Ideation, Research, Narrative, Development",
            },
            {
                name: "Iacopo Neri",
                activity: "Ideation, Research, Web, Development",
            },
            {
                name: "Daniela Figueroa Claros",
                activity: "Research, Graphic Design, Audio Production",
            },
            {
                name: "Kriti Bhavesh Nirmal",
                activity: "Research, Narrative Support",
            },
        ],
        voicesEng: [
            {
                name: "Andrea Tivadar - Gaia",
            },
            {
                name: "Edward J. Bentley - Kai",
            },
            {
                name: "Iacopo Neri - Eolos",
            },
            {
                name: "Mathilde Marengo - Echo",
            },
            {
                name: "Valeria Gonzalez Gomez - Ember",
            },
        ],
        voicesCat: [
            {
                name: "Daniel Llavines - Echo",
            },
            {
                name: "Dídac Torrent Martínez - Eolos",
            },
            {
                name: "Guillem Camprodon - Kai",
            },
            {
                name: "Valeria Gonzalez Gomez - Gaia",
            },
            {
                name: "Silvia Brandi - Ember",
            },
        ],
        support: [
            {
                name: "Alice Puleo & Erica Lago",
                activity: "Communication",
            },
            {
                name: "Daniel Llavines",
                activity: "Translation",
            },
            {
                name: "Alex Mademochoritis",
                activity: "Recording",
            },
        ],
        acknowledgements: [
            {
                name: "Areti Markopoulou",
            },
            {
                name: "Silvia Brandi",
            },
            {
                name: "Chiara Farinea",
            },
            {
                name: "Luciana Asinari",
            },
            {
                name: "Niccolò Battilana",
            },
            {
                name: "Sarine Bekarian",
            },
            {
                name: "Sara Bosch Brinques",
            },
        ],
        partners: [
            {
                logo: "./Logos/AAG_tiny.png",
                link: "https://advancedarchitecturegroup.net/",
            },
            {
                logo: "./Logos/IAAC_tiny.png",
                link: "https://iaac.net/",
            },
            {
                logo: "./Logos/AoTF.png",
                link: "https://atlasofthefuture.org/",
            },
            {
                logo: "./Logos/Model Logo_tiny.png",
                link: "https://www.model.barcelona/edicio2023/en",
            },
        ],
        references: {
            chapters: [
                "Barcelona Nature Plan 2021-2030",
                "Fire",
                "Air",
                "Earth",
                "Water",
            ],
            links: [
                [
                    "https://bcnroc.ajuntament.barcelona.cat/jspui/handle/11703/123630",
                ],
                [
                    "https://www.unep.org/news-and-stories/story/fridayfact-every-minute-we-lose-23-hectares-arable-land-worldwide-drought",
                    "https://www.unccd.int/news-stories/press-releases/chronic-land-degradation-un-offers-stark-warnings-and-practical",
                    "https://www.globalforestwatch.org/",
                    "https://www.ccacoalition.org/en/activity/open-agricultural-burning",
                    "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/jgrd.50171",
                    "https://www.ipbes.net/news/Media-Release-Global-Assessment",
                ],
                [
                    "https://www.iea.org/reports/the-future-of-cooling",
                    "https://ourworldindata.org/co2-and-greenhouse-gas-emissions",
                    "https://www.earthday.org/5-terrifying-climate-change-facts-scare-halloween/",
                    "https://climate.nasa.gov/news/3184/a-force-of-nature-hurricanes-in-a-changing-climate/",
                    "https://www.gfdl.noaa.gov/global-warming-and-hurricanes/",
                    "https://www.rff.org/publications/explainers/urban-heat-islands-101/",
                    "https://www.sciencedirect.com/science/article/abs/pii/S0378778814007907",
                    "https://www.worldbank.org/en/topic/urbandevelopment/overview",
                    "https://www.who.int/health-topics/air-pollution#tab=tab_1",
                    "https://www.who.int/publications/i/item/9789240034228",
                ],
                [
                    "https://press.un.org/en/2023/sc15199.doc.htm",
                    "https://www.internal-displacement.org/global-report/grid2022/",
                    "https://bcnroc.ajuntament.barcelona.cat/jspui/handle/11703/123630",
                    "https://www.organicseurope.bio/news/eu-releases-soil-strategy-plans-legal-initiative-in-2023/",
                    "https://environment.ec.europa.eu/publications/proposal-regulation-deforestation-free-products_en",
                    "https://environment.ec.europa.eu/publications/eu-soil-strategy-2030_en",
                    "https://www.nationalgeographic.com/environment/article/geothermal-energy",
                    "https://environment.ec.europa.eu/topics/nature-and-biodiversity/green-infrastructure_en",
                    "https://commission.europa.eu/news/focus-energy-efficiency-buildings-2020-02-17_en",
                    "https://www.eea.europa.eu/publications/building-renovation-where-circular-economy",
                    "https://www.unep.org/news-and-stories/story/were-gobbling-earths-resources-unsustainable-rate",
                    "https://op.europa.eu/en/publication-detail/-/publication/4ebd2586-fc85-11ea-b44f-01aa75ed71a1/",
                    "https://www.ipbes.net/news/Media-Release-Global-Assessment",
                    "https://ourworldindata.org/global-land-for-agriculture",
                    "https://ourworldindata.org/environmental-impacts-of-food",
                    "https://science2017.globalchange.gov/chapter/10/",
                    "https://www.rff.org/publications/explainers/urban-heat-islands-101/",
                    "https://www.iemed.org/publication/desertification-in-the-mediterranean-region/",
                    "http://web.worldbank.org/archive/website00661/WEB/OTHER/DESERTIF.HTM",
                    "https://www.worldbank.org/en/topic/urbandevelopment/overview",
                ],
                [
                    "https://www.theguardian.com/environment/2017/jun/28/a-million-a-minute-worlds-plastic-bottle-binge-as-dangerous-as-climate-change",
                    "https://www.plasticsoupfoundation.org/en/2017/07/the-worlds-population-consumes-1-million-plastic-bottles-every-minute/",
                    "https://www.oecd.org/environment/plastics/",
                    "https://www.worldbank.org/en/news/press-release/2018/09/20/global-waste-to-grow-by-70-percent-by-2050-unless-urgent-action-is-taken-world-bank-report",
                    "https://www.nature.org/en-us/what-we-do/our-insights/perspectives/groundwater-most-valuable-resource/",
                    "https://www.unesco.org/reports/wwdr/2022/en",
                    "https://www.iaea.org/topics/groundwater",
                    "https://www.unesco.org/en/articles/imminent-risk-global-water-crisis-unesco/un-water?hub=68313",
                    "https://www.nationalgeographic.com/environment/article/critical-issues-ocean-acidification",
                    "https://www.epa.gov/ocean-acidification/understanding-science-ocean-and-coastal-acidification",
                    "https://www.unep.org/annualreport/2022/",
                    "https://sdgs.un.org/conferences/water2023",
                    "https://www.nationalgeographic.com/environment/article/sea-level-rise-1",
                    "https://www.epa.gov/cre",
                    "https://www.nationalgeographic.com/environment/article/climate-change-drives-migration-crisis-in-bangladesh-from-dhaka-sundabans",
                    "https://www.worldbank.org/en/topic/urbandevelopment/overview",
                ],
            ],
        },
    };

    return (
        <>
            {about && (
                <div style={contStyle}>
                    <CloseBtn />

                    <div style={contTextStyle}>
                        <Header
                            as="h1"
                            style={chapter}
                        >
                            About
                        </Header>
                        <p style={paragraph}>
                            As we build the future of our cities, the challenges
                            we face continue to evolve in their complexity,
                            nature, scale and impact. More people will be living
                            in cities or urbanised areas and how these will be
                            spatially, materially, environmentally, socially, is
                            yet to be determined. How can we affect these
                            potential futures? What if we could influence them?
                            And who would be there to tell us about how things
                            changed from today until then?
                        </p>
                        <p style={paragraph}>
                            Connected Ecologies is a digital installation that
                            projects us into diverse possible futures for
                            Barcelona. Connecting to a sonar experience,
                            narrated through first person perspectives, we
                            experience the future from the present. As we
                            connect to the future we are invited to reflect on
                            the challenges, risks but also new beauties we might
                            encounter in these futures. The installation aims to
                            bring awareness to some of the possible impacts and
                            effects of climate change within our urban
                            environments, creating radical empathy with beings
                            from the future and facts of the present. Connected
                            Ecologies also aims to socialise the actions the
                            city of Barcelona, within the context of the
                            European Union, is taking, as well as opening users
                            to projects and initiatives being actuated across
                            the globe, collected in the Atlas of the Future, all
                            working towards climate change adaptation.{" "}
                        </p>
                        <p style={paragraph}>
                            Join us by connecting through the sonic portal in
                            the Gran Clariana park. Don't forget your headphones
                            to experience and question what you think the future
                            might hold… What do you see?
                        </p>

                        <Header
                            as="h1"
                            style={chapter}
                        >
                            Credits
                        </Header>
                        <Header
                            as="h1"
                            style={subChapter}
                        >
                            Project
                        </Header>
                        <p style={names}>
                            {credits.project.map((author) => (
                                <>
                                    {author.name}
                                    <br />
                                    <span style={activity}>
                                        ({author.activity})
                                    </span>
                                    <br />
                                </>
                            ))}
                        </p>

                        <Header
                            as="h1"
                            style={subChapter}
                        >
                            Voices
                        </Header>
                        <span style={activity}> English</span>
                        <p style={names}>
                            {credits.voicesEng.map((author) => (
                                <>
                                    {author.name}
                                    <br />
                                </>
                            ))}
                        </p>
                        <span style={activity}> Catalan</span>
                        <p style={names}>
                            {credits.voicesCat.map((author) => (
                                <>
                                    {author.name}
                                    <br />
                                </>
                            ))}
                        </p>
                        <Header
                            as="h1"
                            style={subChapter}
                        >
                            Technical Support
                        </Header>
                        <p style={names}>
                            {credits.support.map((author) => (
                                <>
                                    {author.name}
                                    <br />
                                    <span style={activity}>
                                        ({author.activity})
                                    </span>
                                    <br />
                                </>
                            ))}
                        </p>
                        <Header
                            as="h1"
                            style={subChapter}
                        >
                            Acknowledgements
                        </Header>
                        <p style={names}>
                            {credits.acknowledgements.map((author) => (
                                <>{author.name}, </>
                            ))}
                        </p>

                        <div
                            style={{
                                textAlign: "middle",
                                paddingBottom: "25px",
                            }}
                        >
                            <br />
                            <Grid
                                // container
                                fluid
                                columns={4}
                                verticalAlign="middle"
                            >
                                {credits.partners.map((el) => (
                                    <Grid.Column>
                                        <Image
                                            centered
                                            width={"100%"}
                                            src={el.logo}
                                            href={el.link}
                                            target="_blank"
                                        />
                                        <br />
                                    </Grid.Column>
                                ))}
                            </Grid>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                        <Header
                            as="h1"
                            style={subChapter}
                        >
                            References
                        </Header>
                        {credits.references.chapters.map((key, index) => (
                            <>
                                <span style={activity}> {key}</span>
                                <List
                                    style={{ width: "100%" }}
                                    as="ol"
                                >
                                    {credits.references.links[index].map(
                                        (link, index) => (
                                            <List.Item
                                                as="li"
                                                value="—"
                                                style={{
                                                    fontSize: "0.75em",
                                                }}
                                                onClick={() =>
                                                    window.open(link)
                                                }
                                            >
                                                {link}
                                            </List.Item>
                                        )
                                    )}
                                </List>
                            </>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}
