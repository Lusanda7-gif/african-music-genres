
const countries = [
    {
        name: "South Africa",
        genres: [

            // 1. Amapiano
            {
                name: "Amapiano",
                type: "modern",
                originStatus: "strong",

                description: "Amapiano is a South African electronic dance music genre characterised by piano melodies, deep basslines, repetitive rhythms and electronic sounds. It combines influences from house, jazz, Kwaito and Bacardi music.",

                origin: "Amapiano emerged in South African townships around 2012. Its development is strongly associated with Gauteng, particularly Johannesburg and Pretoria. However, its exact place of origin remains debated. Its originality comes from combining different musical influences with South African township culture.",

                classification: "South African-developed modern electronic dance music genre with a documented South African origin.",

                references: [
                    {
                        text: "Oloruntoba, A.O. (2024). Understanding amapiano and the South African city through the music videos of Big Flexa and Bhebha. Social Dynamics, 50(3), 416–432.",
                        url: "https://doi.org/10.1080/02533952.2024.2526251"
                    },
                    {
                        text: "Eaby-Lomas, D.M. (2023). Kwaito as history: Complicating contemporary historiographies. African Music, 12(1), 21–36.",
                        url: "https://doi.org/10.21504/amj.v12i1.2529"
                    },
                    {
                        text: "Eaby-Lomas, D.M. (2024). Amapiano to the World: A Movement in Afrodiasporic Space.",
                        url: "https://www.athensjournals.gr/humanities/2024-5113-AJHA-HUM-Eaby-Lomas-07.pdf"
                    }
                ]
            },

            // 2. Cape Jazz
            {
                name: "Cape Jazz",
                type: "traditional",
                originStatus: "debated",

                description: "Cape Jazz is a South African regional jazz style associated with Cape Town and the Western Cape. Its musical characteristics include jazz improvisation, goema rhythms, Cape carnival music, traditional local melodies and influences from other jazz and popular music styles.",

                origin: "Cape Jazz developed through the musical and cultural experiences of Cape Town communities, particularly historically marginalised Coloured communities during apartheid. Its originality comes from combining jazz with traditional Cape musical influences, especially goema rhythms and carnival music. However, the term Cape Jazz does not always describe one clearly defined musical style. Musicians and researchers may interpret its characteristics and boundaries differently.",

                classification: "South African regional jazz style and musical identity. It is included because of its historical and cultural significance.",

                references: [
                    {
                        text: "Martin, D-C. (2013). Sounding the Cape: Music, Identity and Politics in South Africa. African Minds.",
                        url: ""
                    },
                    {
                        text: "Runner, G.E. (2024). Written History and Lived Legacy of Cape Town Jazz.",
                        url: ""
                    },
                    {
                        text: "Layne, V. (2019). Goema's Refrain: Sonic Anticipation and the Musicking Cape. PhD thesis, University of the Western Cape.",
                        url: ""
                    }
                ]
            },

            // PART 2 WILL CONTINUE HERE

            // 3. Gqom
            {
                name: "Gqom",
                type: "modern",
                originStatus: "strong",

                description: "Gqom is a South African electronic dance music genre characterised by heavy bass, repetitive beats, minimal melodies and dark electronic sounds. It is known for its strong rhythms and energetic dance style.",

                origin: "Gqom emerged in Durban, KwaZulu-Natal, around 2008–2010. It developed in local townships where young music producers experimented with electronic music production using computers and digital music software. Its originality comes from its heavy bass, repetitive rhythms, minimal musical arrangements and connection to Durban's dance culture. Although Gqom has influences from Kwaito and house music, it developed its own unique sound and identity.",

                classification: "South African-developed electronic dance music genre with a documented Durban origin.",

                references: [
                    {
                        text: "Eaby-Lomas, D.M. (2022). Historicising Gqom as a Post-Kwaito Phenomenon. Journal of the Musical Arts in Africa, 18(1), 101–116.",
                        url: "https://doi.org/10.2989/18121004.2021.2020964"
                    },
                    {
                        text: "Zungu, E.B. (2020). Modernizing Traditional Game Songs through Gqom Music: A Case Study of Babes Wodumo. Mankind Quarterly, 61(1), 90–110.",
                        url: ""
                    },
                    {
                        text: "Van der Merwe, S.D. (2026). New Currents, Old Boundaries: Exploring the Relationship between Streaming Platforms and Afrikaans Music. Africa, 96(1), 14–34.",
                        url: "https://doi.org/10.1017/S0001972026101764"
                    }
                ]
            },

            // 4. Isicathamiya
            {
                name: "Isicathamiya",
                type: "traditional",
                originStatus: "strong",

                description: "Isicathamiya is a traditional South African Zulu vocal music style characterised by male a cappella singing, meaning singing without instrumental accompaniment. It is known for its beautiful vocal harmonies, carefully arranged choir parts and gentle, coordinated dance movements.",

                origin: "Isicathamiya developed among Zulu-speaking migrant workers during the early twentieth century, particularly in Natal and later Johannesburg. It emerged because of the growth of migrant labour and urbanisation in South Africa. The music combined traditional Zulu singing styles with influences from Christian hymns and missionary music. Its originality comes from its unique vocal harmonies, group performances, gentle movements and connection to Zulu cultural identity.",

                classification: "South African traditional vocal music style with documented Zulu cultural origins and historical development.",

                references: [
                    {
                        text: "Yende, S.J. and Ngema, V. (2022). Examining the Autonomy of Zulu Ingoma from the 1930s to Present: Image or Authentic Experience? HTS Teologiese Studies / Theological Studies, 78(3), a7610.",
                        url: "https://doi.org/10.4102/hts.v78i3.7610"
                    },
                    {
                        text: "Erlmann, V. (1990). Migration and Performance: Zulu Migrant Workers' Isicathamiya Performance in South Africa, 1890–1950. Ethnomusicology, 34(2), 199–220.",
                        url: ""
                    },
                    {
                        text: "Erlmann, V. (1992). The Past Is Far and the Future Is Far: Power and Performance among Zulu Migrant Workers. American Ethnologist, 19(4), 688–709.",
                        url: "https://doi.org/10.1525/ae.1992.19.4.02a00040"
                    }
                ]
            },

            // 5. Kwaito
            {
                name: "Kwaito",
                type: "modern",
                originStatus: "strong",

                description: "Kwaito is a South African urban popular-music genre that developed during the 1990s. It is characterised by slower house-inspired electronic beats, heavy basslines, synthesised sounds and rhythmic vocals. Its lyrics often reflect township life, youth experiences and South African culture.",

                origin: "Kwaito emerged in South Africa during the early 1990s, particularly in Johannesburg's township music scene. It developed by adapting international house music and combining it with local African musical influences, hip-hop, township languages and dance traditions. Its originality comes from creating a unique South African urban sound that represents youth identity, township culture and the social changes that followed apartheid.",

                classification: "South African-developed urban electronic popular-music genre with a documented South African origin.",

                references: [
                    {
                        text: "Mhlambi, T. (2004). 'Kwaitofabulous': The Study of a South African Urban Genre. Journal of the Musical Arts in Africa, 1(1), 116–127.",
                        url: "https://doi.org/10.2989/18121000409486692"
                    },
                    {
                        text: "Steingo, G. (2008). Historicizing Kwaito. African Music: Journal of the International Library of African Music, 8(2), 76–91.",
                        url: "https://doi.org/10.21504/amj.v8i2.1782"
                    },
                    {
                        text: "Allen, L. (2004). Kwaito versus Crossed-Over: Music and Identity during South Africa's Rainbow Years, 1994–99. Social Dynamics, 30(2), 82–111.",
                        url: "https://doi.org/10.1080/02533950408628686"
                    }
                ]
            },

            // PART 3 WILL CONTINUE HERE

            
            // 6. Kwela
            {
                name: "Kwela",
                type: "traditional",
                originStatus: "strong",

                description: "Kwela is a South African popular music style characterised by lively dance rhythms, catchy melodies and the use of the pennywhistle as its main instrument. Other instruments such as guitars, bass, drums and saxophones may also be used.",

                origin: "Kwela developed in South African urban townships, particularly Johannesburg and areas such as Alexandra and Sophiatown, during the 1940s and 1950s. It was influenced by local musical styles such as Marabi and African jazz, as well as American swing music. Its originality comes from the use of the pennywhistle to create a distinctive township sound that became popular through street performances and dancing.",

                classification: "South African-developed urban popular-music style with a documented historical origin.",

                references: [
                    {
                        text: "Allen, L.V. (1993). Pennywhistle Kwela: A Musical, Historical and Socio-Political Analysis. Master's thesis, University of Natal.",
                        url: "https://researchspace.ukzn.ac.za/items/3641da70-180d-43ee-9aee-0d39b88af6b3"
                    },
                    {
                        text: "Allen, L. (1996). Drumbeats, Pennywhistles and All That Jazz: The Relationship between Urban South African Musical Styles and Musical Meaning. African Music, 7(3), 52–59.",
                        url: "https://doi.org/10.21504/amj.v7i3.1963"
                    },
                    {
                        text: "Allen, L. (2008). Kwela's White Audiences: The Politics of Pleasure and Identification in the Early Apartheid Period.",
                        url: ""
                    }
                ]
            },

            // 7. Marabi
            {
                name: "Marabi",
                type: "traditional",
                originStatus: "strong",

                description: "Marabi is an early South African urban music and dance style characterised by repetitive piano and pedal-organ melodies, catchy rhythms and repeating chord patterns. It was mainly played to accompany social dancing and entertainment.",

                origin: "Marabi developed in Johannesburg's urban African communities during the early twentieth century, particularly in the 1920s and 1930s. It became popular in slumyard communities, shebeens and working-class social gatherings. Its originality comes from combining traditional African musical influences with urban popular music, creating a distinctive South African keyboard-based sound. Marabi also influenced later South African music styles, including Kwela, African Jazz and Mbaqanga.",

                classification: "South African urban music and dance tradition with a documented historical origin.",

                references: [
                    {
                        text: "South African History Online. (2011). Music and Culture as Forms of Resistance.",
                        url: "https://sahistory.org.za/article/music-and-culture-forms-resistance"
                    },
                    {
                        text: "Ballantine, C. (1993). Concert and Dance: The Foundations of Black Jazz in South Africa between the Twenties and the Early Forties. Popular Music.",
                        url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/AA1C1C66A963D4E672908F6FFF1B151B/S0261143000004475a.pdf/concert-and-dance-the-foundations-of-black-jazz-in-south-africa-between-the-twenties-and-the-early-forties.pdf"
                    },
                    {
                        text: "Ballantine, C. (2001). Marabi. Grove Music Online.",
                        url: "https://doi.org/10.1093/gmo/9781561592630.article.51496"
                    }
                ]
            },

            // 8. Maskandi
            {
                name: "Maskandi",
                type: "traditional",
                originStatus: "strong",

                description: "Maskandi, also known as Maskanda, is a South African Zulu folk and popular music style characterised by acoustic guitar playing, distinctive guitar rhythms, concertina and storytelling. It often includes call-and-response singing, where a lead singer is answered by other singers. Its lyrics commonly discuss personal experiences, relationships, cultural identity and everyday life.",

                origin: "Maskandi developed within Zulu-speaking communities in South Africa, particularly in KwaZulu-Natal. It is closely connected to rural life, migration and the experiences of workers who travelled between rural areas and cities for employment. Its originality comes from its distinctive Zulu storytelling, guitar-playing techniques and traditional performance styles. Although it includes modern instruments and outside musical influences, it has maintained a recognisable South African musical identity.",

                classification: "South African Zulu folk and popular music tradition with a documented regional and cultural origin.",

                references: [
                    {
                        text: "De Jong, N. and Diko, K.M. (2020). Maskanda, Umkhosi wokukhahlela and the Articulation of Identity in South Africa. Journal of the Royal Musical Association, 145(1), 167–190.",
                        url: "https://doi.org/10.1017/rma.2020.8"
                    },
                    {
                        text: "Ntombela, S.A. (2017). Maskandi: A Critical General Inductive Analysis of Zulu Maskandi Songs. Southern African Journal for Folklore Studies, 27(1), 42–52.",
                        url: "https://doi.org/10.25159/1016-8427/1465"
                    },
                    {
                        text: "Pewa, E.S. (2005). The Philosophical, Behavioural and Academic Merit of uMaskandi Music. University of Zululand.",
                        url: "https://uzspace.unizulu.ac.za/handle/10530/277"
                    }
                ]
            },

            // PART 4 WILL CONTINUE HERE


            // 9. Mbaqanga
            {
                name: "Mbaqanga",
                type: "modern",
                originStatus: "strong",

                description: "Mbaqanga is a South African popular-music style characterised by strong basslines, electric guitars, repeated melodies, lively dance rhythms and call-and-response singing. It combines traditional African musical influences with modern instruments and sounds.",

                origin: "Mbaqanga developed in South Africa, particularly within urban African communities, during the 1950s and early 1960s. Its development was influenced by earlier musical styles such as Marabi, Kwela and African jazz, as well as international music. Its originality comes from combining these influences with traditional African rhythms, electric guitar arrangements and distinctive vocal styles to create a recognisable South African sound.",

                classification: "South African-developed urban popular-music genre with a documented historical development and distinctive local identity.",

                references: [
                    {
                        text: "Zeleza, P.T. (2010). Dancing to the Beat of the Diaspora: Musical Exchanges between Africa and its Diasporas. African and Black Diaspora, 3(2), 211–236.",
                        url: "https://doi.org/10.1080/17528631.2010.481976"
                    },
                    {
                        text: "Allen, L. (2001). Mbaqanga. Grove Music Online.",
                        url: "https://doi.org/10.1093/gmo/9781561592630.article.51740"
                    },
                    {
                        text: "Ntaka, G.M. (2007). Music as Culture, Music in Culture: An Analytical Study of the History and Cultural Context of Mbaqanga Music in South Africa. PhD thesis, University of Zululand.",
                        url: ""
                    }
                ]
            },

            // 10. Shangaan Electro
            {
                name: "Shangaan Electro",
                type: "modern",
                originStatus: "strong",

                description: "Shangaan Electro, also known as Tsonga Electro, is a South African electronic dance music style characterised by very fast beats, synthesised melodies, electronic percussion and high-pitched vocal samples. It also incorporates traditional Tsonga musical sounds and energetic dance rhythms.",

                origin: "Shangaan Electro developed in South Africa's Limpopo region around 2005. It is associated with Tsonga and Shangaan musical communities and became popular through the work of local producers, particularly Nozinja. The style developed by combining traditional Tsonga music and dance with modern electronic production. Its originality comes from its exceptionally fast tempo, unique electronic sounds and connection to local dance traditions.",

                classification: "South African-developed electronic dance music style with a documented Limpopo origin and Tsonga/Shangaan cultural connection.",

                references: [
                    {
                        text: "Mociun, J. (2023). The Frantic Rise of Shangaan Electro. Pan African Music.",
                        url: "https://pan-african-music.com/en/shangaan-electro/"
                    },
                    {
                        text: "Welsh, A.C. (2015). How Nozinja Invented Shangaan Electro and Took It to the World. The FADER.",
                        url: "https://www.thefader.com/2015/06/01/how-nozinja-invented-shangaan-electro"
                    },
                    {
                        text: "Swash, R. (2010). Scene and Heard: Shangaan Electro. The Guardian.",
                        url: "https://www.theguardian.com/music/musicblog/2010/aug/03/scene-heard-shangaan"
                    }
                ]
            }

        ]
    },

    // OTHER AFRICAN COUNTRIES

    {
        name: "Algeria",
        genres: []
    },

    {
        name: "Angola",
        genres: []
    },

    {
        name: "Botswana",
        genres: []
    },

    {
        name: "Zimbabwe",
        genres: []
    },

    {
        name: "Zambia",
        genres: []
    }

];
