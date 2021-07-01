let provinces = [
      {
        "id": 3,
        "bbox": [
          83.9187728578849,
          26.9191431698797,
          86.5727626547517,
          28.3862845807188
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            85.47056392270287,
            27.67865196906648
          ]
        },
        "title": "Bagmati",
        "title_en": "Bagmati",
        "title_ne": "बाग्मती",
        "code": "bagmati",
        "order": 1
      },
      {
        "id": 1,
        "bbox": [
          86.1559244137852,
          26.3478370706644,
          88.2016677742523,
          28.1130612812249
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            87.27197088279,
            27.21052319087246
          ]
        },
        "title": "Province 1",
        "title_en": "Province 1",
        "title_ne": "प्रदेश नं .१",
        "code": "p1",
        "order": 2
      },
      {
        "id": 2,
        "bbox": [
          84.4838899645418,
          26.4223835197793,
          87.0145939355117,
          27.4631790982775
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            85.68968070300077,
            26.930519228980092
          ]
        },
        "title": "Province 2",
        "title_en": "Province 2",
        "title_ne": "प्रदेश नं .२",
        "code": "p2",
        "order": 3
      },
      {
        "id": 4,
        "bbox": [
          82.8773532738891,
          27.4378229151552,
          85.1980163344162,
          29.3313585169325
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            84.04977237130528,
            28.40906158952393
          ]
        },
        "title": "Gandaki",
        "title_en": "Gandaki",
        "title_ne": "गण्डकी",
        "code": "gandaki",
        "order": 4
      },
      {
        "id": 5,
        "bbox": [
          81.0592010293138,
          27.3302256530826,
          84.0285404645032,
          28.8692280187363
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            82.68667353277905,
            28.051445416166732
          ]
        },
        "title": "Lumbini",
        "title_en": "Lumbini",
        "title_ne": "लुम्बिनी",
        "code": "lumbini",
        "order": 5
      },
      {
        "id": 6,
        "bbox": [
          80.981051199357,
          28.1511099599141,
          83.6804351913103,
          30.4472763312289
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            82.28232937335169,
            29.253508516077503
          ]
        },
        "title": "Karnali",
        "title_en": "Karnali",
        "title_ne": "कर्णाली",
        "code": "karnali",
        "order": 6
      },
      {
        "id": 7,
        "bbox": [
          80.0585843010467,
          28.3945109653181,
          81.8082221152366,
          30.246722785497
        ],
        "centroid": {
          "type": "Point",
          "coordinates": [
            80.94032627817676,
            29.324895476256362
          ]
        },
        "title": "Sudurpashchim",
        "title_en": "Sudurpashchim",
        "title_ne": "सुदुरपश्चिम",
        "code": "sudurpaschim",
        "order": 7
      }
    ];
let districts=[
    {
      "id": 2,
      "bbox": [
        87.4925678500812,
        26.8598967052017,
        88.0802293074398,
        27.4383535384553
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.77579807095165,
          27.114999613984395
        ]
      },
      "title": "Panchthar",
      "title_en": "Panchthar",
      "title_ne": "पाँचथर",
      "code": "panchthar",
      "order": 1,
      "province": 1
    },
    {
      "id": 3,
      "bbox": [
        87.5996112849745,
        26.6646425321116,
        88.1848559296623,
        27.106266902088
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.90156852180152,
          26.88116091466986
        ]
      },
      "title": "Ilam",
      "title_en": "Ilam",
      "title_ne": "इलाम",
      "code": "ilam",
      "order": 2,
      "province": 1
    },
    {
      "id": 4,
      "bbox": [
        87.6357086476981,
        26.361181055769,
        88.1879838343223,
        26.8059702129077
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.91323301163462,
          26.584542707538894
        ]
      },
      "title": "Jhapa",
      "title_en": "Jhapa",
      "title_ne": "झापा",
      "code": "jhapa",
      "order": 3,
      "province": 1
    },
    {
      "id": 5,
      "bbox": [
        87.2385904349898,
        26.3478370706644,
        87.690911755772,
        26.8735377500299
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.47019221726813,
          26.61748610045546
        ]
      },
      "title": "Morang",
      "title_en": "Morang",
      "title_ne": "मोरङ्ग",
      "code": "morang",
      "order": 4,
      "province": 1
    },
    {
      "id": 6,
      "bbox": [
        86.9040286054561,
        26.4032716353354,
        87.3539389370868,
        26.8787980957452
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.170042959904,
          26.65061352129045
        ]
      },
      "title": "Sunsari",
      "title_en": "Sunsari",
      "title_ne": "सुनसरी",
      "code": "sunsari",
      "order": 5,
      "province": 1
    },
    {
      "id": 8,
      "bbox": [
        87.3920347289736,
        26.9680170257492,
        87.7516512538617,
        27.297087751069
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.5489515139999,
          27.154388251573035
        ]
      },
      "title": "Terhathum",
      "title_en": "Terhathum",
      "title_ne": "तेह्रथुम",
      "code": "tehrathum",
      "order": 6,
      "province": 1
    },
    {
      "id": 9,
      "bbox": [
        86.8947934750327,
        26.8864128838298,
        87.2756170049848,
        27.4636563609318
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.06789158534278,
          27.181814756262924
        ]
      },
      "title": "Bhojpur",
      "title_en": "Bhojpur",
      "title_ne": "भोजपुर",
      "code": "bhojpur",
      "order": 7,
      "province": 1
    },
    {
      "id": 10,
      "bbox": [
        86.9401653085001,
        27.1363973633528,
        87.6773699048781,
        27.9577394232686
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.27821232065018,
          27.58212973365446
        ]
      },
      "title": "Sankhuwasabha",
      "title_en": "Sankhuwasabha",
      "title_ne": "संखुवासभा",
      "code": "sankhuwasabha",
      "order": 8,
      "province": 1
    },
    {
      "id": 11,
      "bbox": [
        86.3556032033236,
        27.3380704252687,
        87.0101569872844,
        28.1130612812249
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.72051571046595,
          27.71052185331256
        ]
      },
      "title": "Solukhumbu",
      "title_en": "Solukhumbu",
      "title_ne": "सोलुखुम्बु",
      "code": "solukhumbu",
      "order": 9,
      "province": 1
    },
    {
      "id": 12,
      "bbox": [
        86.4262692810582,
        26.8722588968174,
        86.9853374337749,
        27.440240496601
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.78703712216247,
          27.168102280514958
        ]
      },
      "title": "Khotang",
      "title_en": "Khotang",
      "title_ne": "खोटाङ्ग",
      "code": "khotang",
      "order": 10,
      "province": 1
    },
    {
      "id": 13,
      "bbox": [
        86.2035805162799,
        27.1467921940535,
        86.6861505655633,
        27.526269463197
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.41865849345893,
          27.32950204426721
        ]
      },
      "title": "Okhaldhunga",
      "title_en": "Okhaldhunga",
      "title_ne": "ओखलढुङ्गा",
      "code": "okhaldhunga",
      "order": 11,
      "province": 1
    },
    {
      "id": 14,
      "bbox": [
        86.1559244137852,
        26.6863030996858,
        87.1686513226172,
        27.179939736486
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.68134767726373,
          26.90308014899322
        ]
      },
      "title": "Udayapur",
      "title_en": "Udayapur",
      "title_ne": "उदयपुर",
      "code": "udayapur",
      "order": 12,
      "province": 1
    },
    {
      "id": 16,
      "bbox": [
        86.4859360957934,
        26.4223835197793,
        87.0145939355117,
        26.7910909406142
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.74613765632571,
          26.598120783222697
        ]
      },
      "title": "Saptari",
      "title_en": "Saptari",
      "title_ne": "सप्तरी",
      "code": "saptari",
      "order": 13,
      "province": 2
    },
    {
      "id": 20,
      "bbox": [
        85.4181620595719,
        26.9191431698797,
        86.3898626849262,
        27.4510307886248
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.94376814650762,
          27.201466891627046
        ]
      },
      "title": "Sindhuli",
      "title_en": "Sindhuli",
      "title_ne": "सिन्धुली",
      "code": "sindhuli",
      "order": 14,
      "province": 3
    },
    {
      "id": 22,
      "bbox": [
        85.8844006958683,
        27.4741115644615,
        86.5547160234924,
        28.1741755664199
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.19861865752415,
          27.78572113706842
        ]
      },
      "title": "Dolakha",
      "title_en": "Dolakha",
      "title_ne": "दोलखा",
      "code": "dolakha",
      "order": 15,
      "province": 3
    },
    {
      "id": 23,
      "bbox": [
        85.1224534837077,
        27.9651514336129,
        85.8002225601112,
        28.3862845807188
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.41594692791568,
          28.183248202537015
        ]
      },
      "title": "Rasuwa",
      "title_en": "Rasuwa",
      "title_ne": "रसुवा",
      "code": "rasuwa",
      "order": 16,
      "province": 3
    },
    {
      "id": 25,
      "bbox": [
        84.9884617801036,
        27.7606794016816,
        85.4971313817009,
        28.0912541638791
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.23538711779088,
          27.915073265545022
        ]
      },
      "title": "Nuwakot",
      "title_en": "Nuwakot",
      "title_ne": "नुवाकोट",
      "code": "nuwakot",
      "order": 17,
      "province": 3
    },
    {
      "id": 28,
      "bbox": [
        85.2315660348368,
        27.4030400813167,
        85.443446866148,
        27.6935269543638
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.34268866827021,
          27.53968576100482
        ]
      },
      "title": "Lalitpur",
      "title_en": "Lalitpur",
      "title_ne": "ललितपुर",
      "code": "lalitpur",
      "order": 18,
      "province": 3
    },
    {
      "id": 31,
      "bbox": [
        84.6647853747108,
        27.1618534883703,
        85.5103992291986,
        27.7122669872731
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.07919101599765,
          27.46996511067159
        ]
      },
      "title": "Makwanpur",
      "title_en": "Makwanpur",
      "title_ne": "मकवानपुर",
      "code": "makwanpur",
      "order": 19,
      "province": 3
    },
    {
      "id": 33,
      "bbox": [
        84.8662164832999,
        26.8492226691911,
        85.2710108296192,
        27.3657434347207
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.07064142997248,
          27.10795953654191
        ]
      },
      "title": "Bara",
      "title_en": "Bara",
      "title_ne": "बारा",
      "code": "bara",
      "order": 20,
      "province": 2
    },
    {
      "id": 34,
      "bbox": [
        84.4838899645418,
        26.9838128528466,
        84.973193197776,
        27.4631790982775
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.7801630348537,
          27.23968735545858
        ]
      },
      "title": "Parsa",
      "title_en": "Parsa",
      "title_ne": "पर्सा",
      "code": "parsa",
      "order": 21,
      "province": 2
    },
    {
      "id": 38,
      "bbox": [
        82.6961070274038,
        27.4179289259864,
        83.2330549453394,
        27.8206868107314
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.9814859011405,
          27.627803742491572
        ]
      },
      "title": "Kapilbastu",
      "title_en": "Kapilbastu",
      "title_ne": "कपिलवस्तु",
      "code": "kapilvastu",
      "order": 22,
      "province": 5
    },
    {
      "id": 40,
      "bbox": [
        82.748381877681,
        27.7504094860032,
        83.3305163895699,
        28.1140032798367
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.07931919696374,
          27.908546382344674
        ]
      },
      "title": "Arghakhanchi",
      "title_en": "Arghakhanchi",
      "title_ne": "अर्घाखाॉची",
      "code": "arghakhanchi",
      "order": 23,
      "province": 5
    },
    {
      "id": 42,
      "bbox": [
        83.4398801153903,
        27.8682281020166,
        84.0319503810438,
        28.2216899245922
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.80321443774628,
          28.021106723604202
        ]
      },
      "title": "Syangja",
      "title_en": "Syangja",
      "title_ne": "स्याङ्गजा",
      "code": "syangja",
      "order": 24,
      "province": 4
    },
    {
      "id": 44,
      "bbox": [
        84.4188530093874,
        27.7956057344879,
        85.1980163344162,
        28.7522144268435
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.79017695666025,
          28.318827196979154
        ]
      },
      "title": "Gorkha",
      "title_en": "Gorkha",
      "title_ne": "गोरखा",
      "code": "gorkha",
      "order": 25,
      "province": 4
    },
    {
      "id": 46,
      "bbox": [
        83.7006203912419,
        28.0777409922213,
        84.2787029959058,
        28.6134385595746
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.9973481375455,
          28.35494649649246
        ]
      },
      "title": "Kaski",
      "title_en": "Kaski",
      "title_ne": "कास्की",
      "code": "kaski",
      "order": 26,
      "province": 4
    },
    {
      "id": 47,
      "bbox": [
        83.7892648291775,
        28.4450199535588,
        84.5705552315087,
        28.9004527054085
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.22451544738435,
          28.672919154212916
        ]
      },
      "title": "Manang",
      "title_en": "Manang",
      "title_ne": "मनाङ्ग",
      "code": "manang",
      "order": 27,
      "province": 4
    },
    {
      "id": 50,
      "bbox": [
        82.8773532738891,
        28.0774610576811,
        83.6745986424982,
        28.6352696484877
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.25046309844505,
          28.347502509289278
        ]
      },
      "title": "Baglung",
      "title_en": "Baglung",
      "title_ne": "बागलुङ",
      "code": "baglung",
      "order": 28,
      "province": 4
    },
    {
      "id": 52,
      "bbox": [
        82.0076140303995,
        27.6764800846721,
        82.8101889369688,
        28.2590506436062
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.41038219013222,
          27.9641441834616
        ]
      },
      "title": "Dang",
      "title_en": "Dang",
      "title_ne": "दाङ",
      "code": "dang",
      "order": 29,
      "province": 5
    },
    {
      "id": 54,
      "bbox": [
        82.350364119718,
        28.0927494955129,
        82.9567349124855,
        28.5584528116746
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.62805588402239,
          28.344166349140597
        ]
      },
      "title": "Rolpa",
      "title_en": "Rolpa",
      "title_ne": "रोल्पा",
      "code": "rolpa",
      "order": 30,
      "province": 5
    },
    {
      "id": 58,
      "bbox": [
        81.7624921154755,
        29.3853742461004,
        82.8290028003621,
        29.9713112863597
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.37059299567565,
          29.61807481164375
        ]
      },
      "title": "Mugu",
      "title_en": "Mugu",
      "title_ne": "मुगु",
      "code": "mugu",
      "order": 31,
      "province": 6
    },
    {
      "id": 60,
      "bbox": [
        81.8462894835764,
        28.9693947688857,
        82.5912815197688,
        29.508096108292
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.21726673306101,
          29.2717137976417
        ]
      },
      "title": "Jumla",
      "title_en": "Jumla",
      "title_ne": "जुम्ला",
      "code": "jumla",
      "order": 32,
      "province": 6
    },
    {
      "id": 63,
      "bbox": [
        81.4101466550087,
        28.6333975284307,
        81.9268688142136,
        29.1359645831277
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.67887551495463,
          28.881388856821495
        ]
      },
      "title": "Dailekh",
      "title_en": "Dailekh",
      "title_ne": "दैलेख",
      "code": "dailekh",
      "order": 33,
      "province": 6
    },
    {
      "id": 64,
      "bbox": [
        80.981051199357,
        28.3373067411845,
        82.0405256488662,
        28.9783465174888
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.5864078212924,
          28.641183310260914
        ]
      },
      "title": "Surkhet",
      "title_en": "Surkhet",
      "title_ne": "सुर्खेत",
      "code": "surkhet",
      "order": 34,
      "province": 6
    },
    {
      "id": 66,
      "bbox": [
        81.4986517828393,
        27.8537284929633,
        82.1941803441071,
        28.3378916985291
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.82228931219758,
          28.087169830604655
        ]
      },
      "title": "Banke",
      "title_en": "Banke",
      "title_ne": "बाँके",
      "code": "banke",
      "order": 35,
      "province": 5
    },
    {
      "id": 68,
      "bbox": [
        80.5262508557195,
        28.9307061774071,
        81.1869770996199,
        29.4457275681141
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          80.89456957808088,
          29.169642090029008
        ]
      },
      "title": "Doti",
      "title_en": "Doti",
      "title_ne": "डोटी",
      "code": "doti",
      "order": 36,
      "province": 7
    },
    {
      "id": 70,
      "bbox": [
        81.1700054888713,
        29.2719043341708,
        81.8082221152366,
        29.9492815105896
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.56316251291287,
          29.561322426006946
        ]
      },
      "title": "Bajura",
      "title_en": "Bajura",
      "title_ne": "बाजुरा",
      "code": "bajura",
      "order": 37,
      "province": 7
    },
    {
      "id": 73,
      "bbox": [
        80.2416892509416,
        29.308440376833,
        80.9082720527775,
        29.7079833485134
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          80.5715166401557,
          29.50754103122814
        ]
      },
      "title": "Baitadi",
      "title_en": "Baitadi",
      "title_ne": "बैतडी",
      "code": "baitadi",
      "order": 38,
      "province": 7
    },
    {
      "id": 75,
      "bbox": [
        80.0585843010467,
        28.5518152175869,
        80.5595317568524,
        29.1373132272885
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          80.32179602711126,
          28.861823786795433
        ]
      },
      "title": "Kanchanpur",
      "title_en": "Kanchanpur",
      "title_ne": "कन्चनपुर",
      "code": "kanchanpur",
      "order": 39,
      "province": 7
    },
    {
      "id": 541,
      "bbox": [
        82.4858145784962,
        28.4754764468673,
        83.15256230292,
        28.8692280187363
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.81088475092417,
          28.673989710571888
        ]
      },
      "title": "Rukum East",
      "title_en": "Rukum East",
      "title_ne": "रुकुम पूर्व",
      "code": "rukumeast",
      "order": 40,
      "province": 5
    },
    {
      "id": 1,
      "bbox": [
        87.4444437654354,
        27.2681844402189,
        88.2016677742523,
        27.9529233658092
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.82179927135704,
          27.58212356597509
        ]
      },
      "title": "Taplejung",
      "title_en": "Taplejung",
      "title_ne": "ताप्लेजुङ्ग",
      "code": "taplejung",
      "order": 41,
      "province": 1
    },
    {
      "id": 7,
      "bbox": [
        87.148296970323,
        26.8456632940371,
        87.5801119477008,
        27.1909121163734
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          87.33094988258416,
          26.990930640958236
        ]
      },
      "title": "Dhankuta",
      "title_en": "Dhankuta",
      "title_ne": "धनकुटा",
      "code": "dhankuta",
      "order": 42,
      "province": 1
    },
    {
      "id": 15,
      "bbox": [
        86.1310334614359,
        26.5498603791049,
        86.5546336197216,
        26.935361514285
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.34242043781617,
          26.74645805665663
        ]
      },
      "title": "Siraha",
      "title_en": "Siraha",
      "title_ne": "सिराहा",
      "code": "siraha",
      "order": 43,
      "province": 2
    },
    {
      "id": 17,
      "bbox": [
        85.8483333269641,
        26.5685098263259,
        86.2597372483212,
        27.1338516592766
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.03388019638834,
          26.82874155006638
        ]
      },
      "title": "Dhanusa",
      "title_en": "Dhanusa",
      "title_ne": "धनुषा",
      "code": "dhanusha",
      "order": 44,
      "province": 2
    },
    {
      "id": 18,
      "bbox": [
        85.6761975731952,
        26.6016636312785,
        85.9453064577024,
        27.1684330791329
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.81991252749117,
          26.879132990566962
        ]
      },
      "title": "Mahottari",
      "title_en": "Mahottari",
      "title_ne": "महोत्तरी",
      "code": "mahottari",
      "order": 45,
      "province": 2
    },
    {
      "id": 19,
      "bbox": [
        85.3218442465365,
        26.7415329940964,
        85.815862124065,
        27.1952429034541
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.56531220869543,
          26.986159229293165
        ]
      },
      "title": "Sarlahi",
      "title_en": "Sarlahi",
      "title_ne": "सर्लाही",
      "code": "sarlahi",
      "order": 46,
      "province": 2
    },
    {
      "id": 21,
      "bbox": [
        85.7975166437744,
        27.2421758144519,
        86.5727626547517,
        27.8325265867772
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          86.17737024301982,
          27.51361408075647
        ]
      },
      "title": "Ramechhap",
      "title_en": "Ramechhap",
      "title_ne": "रामेछाप",
      "code": "ramechhap",
      "order": 47,
      "province": 3
    },
    {
      "id": 24,
      "bbox": [
        85.4417439951479,
        27.6104947746969,
        86.0650467984744,
        28.2034609768878
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.73962867740835,
          27.914972455286772
        ]
      },
      "title": "Sindhupalchok",
      "title_en": "Sindhupalchok",
      "title_ne": "सिन्धुपाल्चोक",
      "code": "sindhupalchowk",
      "order": 48,
      "province": 3
    },
    {
      "id": 26,
      "bbox": [
        84.6183184597268,
        27.6687815164541,
        85.2702420433839,
        28.3466039777072
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.96016032720414,
          27.954707468396766
        ]
      },
      "title": "Dhading",
      "title_en": "Dhading",
      "title_ne": "धादिङ्ग",
      "code": "dhading",
      "order": 49,
      "province": 3
    },
    {
      "id": 27,
      "bbox": [
        85.1886443524253,
        27.5704485249992,
        85.565843891757,
        27.8176526673154
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.34735132692755,
          27.728201081500877
        ]
      },
      "title": "Kathmandu",
      "title_en": "Kathmandu",
      "title_ne": "काठमाण्डौ",
      "code": "ktm",
      "order": 50,
      "province": 3
    },
    {
      "id": 29,
      "bbox": [
        85.3520337755066,
        27.6199270001063,
        85.5251388497183,
        27.7287084571463
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.44078719752078,
          27.67769038360649
        ]
      },
      "title": "Bhaktapur",
      "title_en": "Bhaktapur",
      "title_ne": "भक्तपुर",
      "code": "bhaktapur",
      "order": 51,
      "province": 3
    },
    {
      "id": 30,
      "bbox": [
        85.3869205693487,
        27.3335668299429,
        85.8809912596494,
        27.7569359178896
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.61948290583136,
          27.535356393143648
        ]
      },
      "title": "Kavrepalanchok",
      "title_en": "Kavrepalanchok",
      "title_ne": "काभ्रेपलाञ्चोक",
      "code": "kavre",
      "order": 52,
      "province": 3
    },
    {
      "id": 32,
      "bbox": [
        85.1632082762139,
        26.7446892105735,
        85.5039577116868,
        27.2329257106965
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          85.30233086363795,
          27.001574082293832
        ]
      },
      "title": "Rautahat",
      "title_en": "Rautahat",
      "title_ne": "रौतहट",
      "code": "rautahat",
      "order": 53,
      "province": 2
    },
    {
      "id": 35,
      "bbox": [
        83.9187728578849,
        27.3550428764341,
        84.796671674135,
        27.8805438877059
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.43453047394195,
          27.584942259802776
        ]
      },
      "title": "Chitwan",
      "title_en": "Chitwan",
      "title_ne": "चितवन",
      "code": "chitwan",
      "order": 54,
      "province": 3
    },
    {
      "id": 37,
      "bbox": [
        83.2042964654492,
        27.3302256530826,
        83.6338932563401,
        27.7682177421593
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.38955026950569,
          27.576678115670248
        ]
      },
      "title": "Rupandehi",
      "title_en": "Rupandehi",
      "title_ne": "रुपन्देही",
      "code": "rupandehi",
      "order": 55,
      "province": 5
    },
    {
      "id": 39,
      "bbox": [
        83.2310402280013,
        27.6621718084475,
        84.0285404645032,
        27.9589208307725
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.62365185219313,
          27.817372432844827
        ]
      },
      "title": "Palpa",
      "title_en": "Palpa",
      "title_ne": "पाल्पा",
      "code": "palpa",
      "order": 56,
      "province": 5
    },
    {
      "id": 41,
      "bbox": [
        83.0218985820951,
        27.9208327326544,
        83.6052722008959,
        28.2708500441404
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.30702478352003,
          28.0938944697723
        ]
      },
      "title": "Gulmi",
      "title_en": "Gulmi",
      "title_ne": "गुल्मी",
      "code": "gulmi",
      "order": 57,
      "province": 5
    },
    {
      "id": 43,
      "bbox": [
        83.9365798922003,
        27.741222131644,
        84.5588588839746,
        28.1298089031161
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.251194633256,
          27.955370177536444
        ]
      },
      "title": "Tanahu",
      "title_en": "Tanahu",
      "title_ne": "तनहुँ",
      "code": "tanahun",
      "order": 58,
      "province": 4
    },
    {
      "id": 45,
      "bbox": [
        84.1868070906258,
        28.0555751155968,
        84.6948324360448,
        28.5102678481381
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.43005349109238,
          28.289315668818336
        ]
      },
      "title": "Lamjung",
      "title_en": "Lamjung",
      "title_ne": "लमजुङ्ग",
      "code": "lamjung",
      "order": 59,
      "province": 4
    },
    {
      "id": 48,
      "bbox": [
        83.4796630121963,
        28.5647247801273,
        84.2478663632242,
        29.3313585169325
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.85787282576845,
          28.98131449146188
        ]
      },
      "title": "Mustang",
      "title_en": "Mustang",
      "title_ne": "मुस्ताङ्ग",
      "code": "mustang",
      "order": 60,
      "province": 4
    },
    {
      "id": 49,
      "bbox": [
        83.0999436148076,
        28.2981731321423,
        83.8715882807727,
        28.7937625791441
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.45999324326222,
          28.553146704365126
        ]
      },
      "title": "Myagdi",
      "title_en": "Myagdi",
      "title_ne": "म्याग्दी",
      "code": "myagdi",
      "order": 61,
      "province": 4
    },
    {
      "id": 51,
      "bbox": [
        83.5591660623768,
        28.0054975471629,
        83.8228476564755,
        28.3997598734657
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.67889009696687,
          28.211300319870627
        ]
      },
      "title": "Parbat",
      "title_en": "Parbat",
      "title_ne": "पर्वत",
      "code": "parbat",
      "order": 62,
      "province": 4
    },
    {
      "id": 53,
      "bbox": [
        82.5882575185223,
        27.8777802867276,
        83.0974939704633,
        28.3625947506327
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.86502527526966,
          28.115453861229355
        ]
      },
      "title": "Pyuthan",
      "title_en": "Pyuthan",
      "title_ne": "प्युठान",
      "code": "pyuthan",
      "order": 63,
      "province": 5
    },
    {
      "id": 55,
      "bbox": [
        81.7434288919351,
        28.1511099599141,
        82.4373257800095,
        28.6446827980379
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.13874784335462,
          28.39649855398913
        ]
      },
      "title": "Salyan",
      "title_en": "Salyan",
      "title_ne": "सल्यान",
      "code": "salyan",
      "order": 64,
      "province": 6
    },
    {
      "id": 57,
      "bbox": [
        82.3921901398994,
        28.7219839799619,
        83.6804351913103,
        29.7064485543897
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.05217011480939,
          29.170655636885265
        ]
      },
      "title": "Dolpa",
      "title_en": "Dolpa",
      "title_ne": "डोल्पा",
      "code": "dolpa",
      "order": 65,
      "province": 6
    },
    {
      "id": 59,
      "bbox": [
        81.2562642323406,
        29.6049248741076,
        82.4976345656177,
        30.4472763312289
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.8798655626356,
          30.03232237658345
        ]
      },
      "title": "Humla",
      "title_en": "Humla",
      "title_ne": "हुम्ला",
      "code": "humla",
      "order": 66,
      "province": 6
    },
    {
      "id": 61,
      "bbox": [
        81.4680665866001,
        28.9710119079125,
        82.0194323935586,
        29.461659138163
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.75203278875941,
          29.19511546221388
        ]
      },
      "title": "Kalikot",
      "title_en": "Kalikot",
      "title_ne": "कालिकोट",
      "code": "kalikot",
      "order": 67,
      "province": 6
    },
    {
      "id": 62,
      "bbox": [
        81.8200630318582,
        28.6113336255645,
        82.58018690224,
        29.1275217484269
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.16787118974288,
          28.865380352837356
        ]
      },
      "title": "Jajarkot",
      "title_en": "Jajarkot",
      "title_ne": "जाजरकोट",
      "code": "jajarkot",
      "order": 68,
      "province": 6
    },
    {
      "id": 65,
      "bbox": [
        81.0592010293138,
        28.0689307446884,
        81.7667110031986,
        28.6747516937025
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.40151534237341,
          28.383668908446907
        ]
      },
      "title": "Bardiya",
      "title_en": "Bardiya",
      "title_ne": "बर्दिया",
      "code": "bardiya",
      "order": 69,
      "province": 5
    },
    {
      "id": 67,
      "bbox": [
        80.4681980457778,
        28.3945109653181,
        81.2880294020196,
        29.0681596767632
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          80.8792246054029,
          28.741641922944602
        ]
      },
      "title": "Kailali",
      "title_en": "Kailali",
      "title_ne": "कैलाली",
      "code": "kailali",
      "order": 70,
      "province": 7
    },
    {
      "id": 69,
      "bbox": [
        81.026595105407,
        28.7482784093156,
        81.5820373826944,
        29.3866712403906
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.29711239175032,
          29.11256817441899
        ]
      },
      "title": "Achham",
      "title_en": "Achham",
      "title_ne": "अछाम",
      "code": "achham",
      "order": 71,
      "province": 7
    },
    {
      "id": 71,
      "bbox": [
        80.746080800933,
        29.3909403159995,
        81.5650144434031,
        30.0543162975233
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          81.17871770328547,
          29.708245162950185
        ]
      },
      "title": "Bajhang",
      "title_en": "Bajhang",
      "title_ne": "बझाङ्ग",
      "code": "bajhang",
      "order": 72,
      "province": 7
    },
    {
      "id": 72,
      "bbox": [
        80.3642144516166,
        29.6050155964933,
        81.1087482447345,
        30.246722785497
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          80.7918926088294,
          29.89194957501019
        ]
      },
      "title": "Darchula",
      "title_en": "Darchula",
      "title_ne": "दार्चुला",
      "code": "darchula",
      "order": 73,
      "province": 7
    },
    {
      "id": 74,
      "bbox": [
        80.1844656606324,
        28.9932800862584,
        80.7858680455084,
        29.4251642317388
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          80.48906942024193,
          29.223121930278023
        ]
      },
      "title": "Dadeldhura",
      "title_en": "Dadeldhura",
      "title_ne": "डडेल्धुरा",
      "code": "dadeldhura",
      "order": 74,
      "province": 7
    },
    {
      "id": 481,
      "bbox": [
        83.6770736271777,
        27.4378229151552,
        84.431360294216,
        27.8698765972561
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          84.06217377809207,
          27.687392178263668
        ]
      },
      "title": "Nawalparasi East",
      "title_en": "Nawalparasi East",
      "title_ne": "नवलपरासी (बर्दघाट सुस्ता पूर्व)",
      "code": "nawalparasieast",
      "order": 75,
      "province": 4
    },
    {
      "id": 482,
      "bbox": [
        83.5717699047103,
        27.3467212103096,
        83.9063794167129,
        27.6933376341297
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          83.73871051466158,
          27.52825076350813
        ]
      },
      "title": "Nawalparasi West",
      "title_en": "Nawalparasi West",
      "title_ne": "नवलपरासी (बर्दघाट सुस्ता पश्चिम)",
      "code": "nawalparasiwest",
      "order": 76,
      "province": 5
    },
    {
      "id": 542,
      "bbox": [
        82.1847362122291,
        28.5209865769975,
        82.7003018920112,
        28.9920640172299
      ],
      "centroid": {
        "type": "Point",
        "coordinates": [
          82.46045156349273,
          28.738837863481795
        ]
      },
      "title": "Rukum West",
      "title_en": "Rukum West",
      "title_ne": "रुकुम पश्चिम",
      "code": "rukumwest",
      "order": 77,
      "province": 6
    }
  ];
let municipalities = [
  {
    "id": 1005,
    "bbox": [
      87.6501351349468,
      27.4059813235384,
      88.2016677742523,
      27.9529233658092
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.89713038573582,
        27.703009327937185
      ]
    },
    "title": "Phaktanglung",
    "title_en": "Phaktanglung",
    "title_ne": "फक्ताङलुङ",
    "type": "Rural Municipality",
    "code": "phaktanglungmun",
    "order": 1,
    "district": 1
  },
  {
    "id": 1008,
    "bbox": [
      87.77471745301,
      27.2923328214121,
      88.1547806944035,
      27.7020365869892
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.94650703496033,
        27.476015174396345
      ]
    },
    "title": "Sirijangha",
    "title_en": "Sirijangha",
    "title_ne": "सिरीजङ्घा",
    "type": "Rural Municipality",
    "code": "sirijanghamun",
    "order": 2,
    "district": 1
  },
  {
    "id": 3004,
    "bbox": [
      87.8412146034835,
      26.8164192891186,
      88.0113167428024,
      27.0629174366599
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.90870574329286,
        26.931357173383528
      ]
    },
    "title": "Illam",
    "title_en": "Illam",
    "title_ne": "ईलाम",
    "type": "Municipality",
    "code": "ilammun",
    "order": 3,
    "district": 3
  },
  {
    "id": 3005,
    "bbox": [
      87.7549546416994,
      26.6717200001313,
      87.9627195316877,
      26.864736195464
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.86804388704392,
        26.766798245675115
      ]
    },
    "title": "Mai",
    "title_en": "Mai",
    "title_ne": "माई",
    "type": "Municipality",
    "code": "maimun",
    "order": 4,
    "district": 3
  },
  {
    "id": 3008,
    "bbox": [
      87.9629463772302,
      26.7453124256956,
      88.1848559296623,
      26.8653143253276
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.0707327899741,
        26.80308777471678
      ]
    },
    "title": "Rong",
    "title_en": "Rong",
    "title_ne": "रोङ",
    "type": "Rural Municipality",
    "code": "rongmun",
    "order": 5,
    "district": 3
  },
  {
    "id": 3010,
    "bbox": [
      87.9303283215371,
      26.7882964767319,
      88.1747548115774,
      27.0082148491041
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.0686217757398,
        26.890694665529892
      ]
    },
    "title": "Suryodaya",
    "title_en": "Suryodaya",
    "title_ne": "सूर्योदय",
    "type": "Municipality",
    "code": "suryodayamun",
    "order": 6,
    "district": 3
  },
  {
    "id": 5016,
    "bbox": [
      87.4978231863829,
      26.3937283206551,
      87.6056682076945,
      26.5762864649287
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.55469341209228,
        26.481412882492084
      ]
    },
    "title": "Sunwarshi",
    "title_en": "Sunwarshi",
    "title_ne": "सुनवर्षी",
    "type": "Municipality",
    "code": "sunawarshimun",
    "order": 7,
    "district": 5
  },
  {
    "id": 6003,
    "bbox": [
      87.0702582955737,
      26.5216423804476,
      87.1338200033134,
      26.6629311428637
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.09770973743994,
        26.591838228645884
      ]
    },
    "title": "Bhokraha",
    "title_en": "Bhokraha",
    "title_ne": "भोक्राहा नरसिंह",
    "type": "Rural Municipality",
    "code": "bhokrahamun",
    "order": 8,
    "district": 6
  },
  {
    "id": 6007,
    "bbox": [
      87.1465750798637,
      26.4988293755846,
      87.2601267745384,
      26.6308370091294
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.19672353999539,
        26.5606788171683
      ]
    },
    "title": "Gadhi",
    "title_en": "Gadhi",
    "title_ne": "गढी",
    "type": "Rural Municipality",
    "code": "gadhimun",
    "order": 9,
    "district": 6
  },
  {
    "id": 8001,
    "bbox": [
      87.5529362498398,
      27.1294452218081,
      87.7516512538617,
      27.2870518093696
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.66114957776894,
        27.214303273468204
      ]
    },
    "title": "Aathrai",
    "title_en": "Aathrai",
    "title_ne": "आठराई",
    "type": "Rural Municipality",
    "code": "aathraimun",
    "order": 10,
    "district": 8
  },
  {
    "id": 8003,
    "bbox": [
      87.3920347289736,
      27.0762496987362,
      87.5140839722625,
      27.183963779139
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.44813012883617,
        27.127991575912933
      ]
    },
    "title": "Laligurans",
    "title_en": "Laligurans",
    "title_ne": "लालीगुराँस",
    "type": "Municipality",
    "code": "laliguransmun",
    "order": 11,
    "district": 8
  },
  {
    "id": 8006,
    "bbox": [
      87.5325618039725,
      27.110495117467,
      87.6457216340135,
      27.2860466989257
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.58461191530255,
        27.180399835801907
      ]
    },
    "title": "Phedap",
    "title_en": "Phedap",
    "title_ne": "फेदाप",
    "type": "Rural Municipality",
    "code": "phedapmun",
    "order": 12,
    "district": 8
  },
  {
    "id": 10009,
    "bbox": [
      86.8947934750327,
      27.0972780438901,
      87.0497408811924,
      27.3135075335286
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.9660271026273,
        27.21050590138104
      ]
    },
    "title": "Tyamkemaiyung",
    "title_en": "Tyamkemaiyung",
    "title_ne": "टेम्केमैयुङ",
    "type": "Rural Municipality",
    "code": "tyamkemaiyummun",
    "order": 13,
    "district": 9
  },
  {
    "id": 9002,
    "bbox": [
      87.1971299802243,
      27.2112913935072,
      87.516684416056,
      27.4062342772096
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.36131881692963,
        27.30525862583703
      ]
    },
    "title": "Chainpur",
    "title_en": "Chainpur",
    "title_ne": "चैनपुर",
    "type": "Municipality",
    "code": "chainpurmun",
    "order": 14,
    "district": 10
  },
  {
    "id": 9005,
    "bbox": [
      87.1239002824035,
      27.2708155872428,
      87.2575388321251,
      27.4624694039929
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.1930043938588,
        27.3990443882452
      ]
    },
    "title": "Khandbari",
    "title_en": "Khandbari",
    "title_ne": "खाँदवारी",
    "type": "Municipality",
    "code": "khandbarimun",
    "order": 15,
    "district": 10
  },
  {
    "id": 9007,
    "bbox": [
      86.9670625803904,
      27.500313723731,
      87.5450643793333,
      27.9577394232686
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.22505230303466,
        27.684773989831267
      ]
    },
    "title": "Makalu",
    "title_en": "Makalu",
    "title_ne": "मकालु",
    "type": "Rural Municipality",
    "code": "makalumun",
    "order": 16,
    "district": 10
  },
  {
    "id": 9009,
    "bbox": [
      87.2345977431406,
      27.3630547303409,
      87.4717088980398,
      27.5124723893912
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.36165481801436,
        27.447498405680093
      ]
    },
    "title": "Sabhapokhari",
    "title_en": "Sabhapokhari",
    "title_ne": "सभापोखरी",
    "type": "Rural Municipality",
    "code": "savapokharimun",
    "order": 17,
    "district": 10
  },
  {
    "id": 55003,
    "bbox": [
      82.1814366951328,
      28.2856865890888,
      82.3836070002581,
      28.4301570762569
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.29126452658606,
        28.355544775330255
      ]
    },
    "title": "Chhatreshwori",
    "title_en": "Chhatreshwori",
    "title_ne": "छत्रेश्वरी",
    "type": "Rural Municipality",
    "code": "chhatreshworimun",
    "order": 18,
    "district": 55
  },
  {
    "id": 55004,
    "bbox": [
      82.2545349892425,
      28.5025036578871,
      82.3820775180387,
      28.5976388396738
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.31179347315286,
        28.553140109867492
      ]
    },
    "title": "Darma",
    "title_en": "Darma",
    "title_ne": "दार्मा",
    "type": "Rural Municipality",
    "code": "darmamun",
    "order": 19,
    "district": 55
  },
  {
    "id": 55007,
    "bbox": [
      82.2840996590753,
      28.1689239313962,
      82.4373257800095,
      28.3301344428854
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.35997443650115,
        28.253556799065496
      ]
    },
    "title": "Kapurkot",
    "title_en": "Kapurkot",
    "title_ne": "कपुरकोट",
    "type": "Rural Municipality",
    "code": "kapurkotmun",
    "order": 20,
    "district": 55
  },
  {
    "id": 55010,
    "bbox": [
      82.1287013014996,
      28.2371527943718,
      82.3355438706913,
      28.335515929003
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.23118227729711,
        28.281814013663848
      ]
    },
    "title": "Tribeni",
    "title_en": "Tribeni",
    "title_ne": "त्रिवेणी",
    "type": "Rural Municipality",
    "code": "trivenimunsalyan",
    "order": 21,
    "district": 55
  },
  {
    "id": 65001,
    "bbox": [
      81.9969901977941,
      29.4061575533536,
      82.3170048740229,
      29.6648628162513
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.16815043496268,
        29.532968771415895
      ]
    },
    "title": "Chhayanath Rara",
    "title_en": "Chhayanath Rara",
    "title_ne": "छायाँनाथ रारा",
    "type": "Municipality",
    "code": "chhayanathraramun",
    "order": 22,
    "district": 58
  },
  {
    "id": 65004,
    "bbox": [
      81.7834510994439,
      29.5230273861197,
      82.1137954766002,
      29.7510004747107
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.98372368139718,
        29.62832089814473
      ]
    },
    "title": "Soru",
    "title_en": "Soru",
    "title_ne": "सोरु",
    "type": "Rural Municipality",
    "code": "sorumun",
    "order": 23,
    "district": 58
  },
  {
    "id": 60002,
    "bbox": [
      81.7281095390562,
      28.718759562355,
      81.9123986049288,
      28.882432100266
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.83052043584166,
        28.79277579814216
      ]
    },
    "title": "Bhagawatimai",
    "title_en": "Bhagawatimai",
    "title_ne": "भगवतीमाई",
    "type": "Rural Municipality",
    "code": "bhagawatimaimun",
    "order": 24,
    "district": 63
  },
  {
    "id": 60005,
    "bbox": [
      81.5227321297876,
      28.7599477110659,
      81.6887262328202,
      28.9060931160732
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.60660024347546,
        28.83181703584307
      ]
    },
    "title": "Dullu",
    "title_en": "Dullu",
    "title_ne": "दुल्लु",
    "type": "Municipality",
    "code": "dullumun",
    "order": 25,
    "district": 63
  },
  {
    "id": 60006,
    "bbox": [
      81.6469715761334,
      28.6978708538889,
      81.7939796584813,
      28.8099003217935
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.71925600320976,
        28.748570748157857
      ]
    },
    "title": "Dungeshwor",
    "title_en": "Dungeshwor",
    "title_ne": "डुङ्गेश्वर",
    "type": "Rural Municipality",
    "code": "dungeshwormun",
    "order": 26,
    "district": 63
  },
  {
    "id": 60009,
    "bbox": [
      81.675635473778,
      28.8012771698715,
      81.8208817579115,
      28.9538093077284
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.73906844567964,
        28.86193746187715
      ]
    },
    "title": "Narayan",
    "title_en": "Narayan",
    "title_ne": "नारायण",
    "type": "Municipality",
    "code": "narayanmun",
    "order": 27,
    "district": 63
  },
  {
    "id": 57002,
    "bbox": [
      81.6268369028358,
      27.9417601757066,
      81.7647881408399,
      28.1275320153302
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.70467030779403,
        28.030638196860764
      ]
    },
    "title": "Duduwa",
    "title_en": "Duduwa",
    "title_ne": "डुडुवा",
    "type": "Rural Municipality",
    "code": "duduwamun",
    "order": 28,
    "district": 66
  },
  {
    "id": 57005,
    "bbox": [
      81.6236663170349,
      28.1203910894306,
      81.8289504940225,
      28.3151556471077
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.71918844147186,
        28.215860962190593
      ]
    },
    "title": "Kohalpur",
    "title_en": "Kohalpur",
    "title_ne": "कोहलपुर",
    "type": "Municipality",
    "code": "kohalpurmun",
    "order": 29,
    "district": 66
  },
  {
    "id": 70002,
    "bbox": [
      80.7356009558787,
      28.9307061774071,
      81.0035425939675,
      29.1282402293181
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.88069804429878,
        29.02162187498181
      ]
    },
    "title": "Badikedar",
    "title_en": "Badikedar",
    "title_ne": "बडीकेदार",
    "type": "Rural Municipality",
    "code": "badikedarmun",
    "order": 30,
    "district": 68
  },
  {
    "id": 70005,
    "bbox": [
      80.5262508557195,
      29.0072220287494,
      80.8697750214002,
      29.1949288745518
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.69907928251466,
        29.107878335774444
      ]
    },
    "title": "Jorayal",
    "title_en": "Jorayal",
    "title_ne": "जोरायल",
    "type": "Rural Municipality",
    "code": "jorayalmun",
    "order": 31,
    "district": 68
  },
  {
    "id": 70008,
    "bbox": [
      80.8786348117015,
      29.2904819649608,
      81.0528743816553,
      29.4457275681141
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.9728742964488,
        29.373857120871193
      ]
    },
    "title": "Sayal",
    "title_en": "Sayal",
    "title_ne": "सायल",
    "type": "Rural Municipality",
    "code": "sayalmun",
    "order": 32,
    "district": 68
  },
  {
    "id": 70009,
    "bbox": [
      80.7019364483939,
      29.1254021109941,
      80.9333764381181,
      29.3637354775561
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.81920394204319,
        29.235258490942172
      ]
    },
    "title": "Shikhar",
    "title_en": "Shikhar",
    "title_ne": "शिखर",
    "type": "Municipality",
    "code": "shikharmun",
    "order": 33,
    "district": 68
  },
  {
    "id": 77001,
    "bbox": [
      82.5290567769977,
      28.4754764468673,
      82.9121155672679,
      28.6578009961802
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.70006551220379,
        28.546291910106245
      ]
    },
    "title": "Bhume",
    "title_en": "Bhume",
    "title_ne": "भूमे",
    "type": "Rural Municipality",
    "code": "bhumemun",
    "order": 34,
    "district": 541
  },
  {
    "id": 77003,
    "bbox": [
      82.4858145784962,
      28.5598146307963,
      82.7658349997629,
      28.8692280187363
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.63797606308438,
        28.730358241949325
      ]
    },
    "title": "Sisne",
    "title_en": "Sisne",
    "title_ne": "सिस्ने",
    "type": "Rural Municipality",
    "code": "sisnemun",
    "order": 35,
    "district": 541
  },
  {
    "id": 54006,
    "bbox": [
      82.3524351887109,
      28.5209865769975,
      82.4951035634025,
      28.614859705797
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.42017398666547,
        28.564590930103954
      ]
    },
    "title": "Tribeni",
    "title_en": "Tribeni",
    "title_ne": "त्रिवेणी",
    "type": "Rural Municipality",
    "code": "trivenimunrukum",
    "order": 36,
    "district": 542
  },
  {
    "id": 6010,
    "bbox": [
      87.2024342793337,
      26.6101541847,
      87.3283095852866,
      26.7375328470884
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.265018064324,
        26.67276416968107
      ]
    },
    "title": "Itahari",
    "title_en": "Itahari",
    "title_ne": "ईटहरी",
    "type": "Submetropolitan City",
    "code": "itaharimun",
    "order": 37,
    "district": 6
  },
  {
    "id": 9004,
    "bbox": [
      87.2383140499765,
      27.1363973633528,
      87.4701138218385,
      27.2667695449863
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.34616806993282,
        27.20794091242241
      ]
    },
    "title": "Dharmadevi",
    "title_en": "Dharmadevi",
    "title_ne": "धर्मदेवी",
    "type": "Municipality",
    "code": "dharmadevimun",
    "order": 38,
    "district": 10
  },
  {
    "id": 9010,
    "bbox": [
      86.9401653085001,
      27.4360715560868,
      87.1947474205776,
      27.7289205244614
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.05397297003313,
        27.560620226796082
      ]
    },
    "title": "Silichong",
    "title_en": "Silichong",
    "title_ne": "सिलीचोङ",
    "type": "Rural Municipality",
    "code": "silichongmun",
    "order": 39,
    "district": 10
  },
  {
    "id": 11002,
    "bbox": [
      86.6062628156874,
      27.4581029125405,
      86.7884176986116,
      27.6166824471153
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.69294558070239,
        27.53331720285439
      ]
    },
    "title": "Mapya Dudhkoshi",
    "title_en": "Mapya Dudhkoshi",
    "title_ne": "माप्य दुधकोशी",
    "type": "Rural Municipality",
    "code": "dudhkoshimun",
    "order": 40,
    "district": 11
  },
  {
    "id": 11003,
    "bbox": [
      86.5121662201531,
      27.5721879213833,
      86.9832893235542,
      28.1130612812249
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.72677003185396,
        27.877545472383176
      ]
    },
    "title": "Khumbupasanglahmu",
    "title_en": "Khumbupasanglahmu",
    "title_ne": "खुम्वु पासाङल्हामु",
    "type": "Rural Municipality",
    "code": "khumbupasanglhamumun",
    "order": 41,
    "district": 11
  },
  {
    "id": 11004,
    "bbox": [
      86.3556032033236,
      27.4846974179629,
      86.5108499021735,
      27.6172451366377
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.43720083825713,
        27.556936265481234
      ]
    },
    "title": "Likhupike",
    "title_en": "Likhupike",
    "title_ne": "लिखु पिके",
    "type": "Rural Municipality",
    "code": "likhupikemun",
    "order": 42,
    "district": 11
  },
  {
    "id": 11007,
    "bbox": [
      86.434905304355,
      27.3886305382646,
      86.7052150341531,
      27.7568891524875
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.57187533201979,
        27.574676493385372
      ]
    },
    "title": "Solududhakunda",
    "title_en": "Solududhakunda",
    "title_ne": "सोलुदुधकुण्ड",
    "type": "Municipality",
    "code": "solududhkundamun",
    "order": 43,
    "district": 11
  },
  {
    "id": 14001,
    "bbox": [
      86.9246837491508,
      26.709392537757,
      87.1686513226172,
      26.9275609654804
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.05011531102178,
        26.82457849703604
      ]
    },
    "title": "Belaka",
    "title_en": "Belaka",
    "title_ne": "वेलका",
    "type": "Municipality",
    "code": "belakamun",
    "order": 44,
    "district": 14
  },
  {
    "id": 14003,
    "bbox": [
      86.1559244137852,
      26.8638475866323,
      86.4921730856765,
      27.179939736486
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.3842242810029,
        26.998960662974827
      ]
    },
    "title": "Katari",
    "title_en": "Katari",
    "title_ne": "कटारी",
    "type": "Municipality",
    "code": "katarimun",
    "order": 45,
    "district": 14
  },
  {
    "id": 14004,
    "bbox": [
      86.58476182243,
      26.8837652850009,
      86.7645117276333,
      27.066403888423
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.67121482321997,
        26.98209199825647
      ]
    },
    "title": "Rautamai",
    "title_en": "Rautamai",
    "title_ne": "रौतामाई",
    "type": "Rural Municipality",
    "code": "rautamaimun",
    "order": 46,
    "district": 14
  },
  {
    "id": 25001,
    "bbox": [
      85.2315660348368,
      27.4079633372649,
      85.4012779915116,
      27.5624736342884
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.30411283850194,
        27.484318805517212
      ]
    },
    "title": "Bagmati",
    "title_en": "Bagmati",
    "title_ne": "वाग्मती",
    "type": "Rural Municipality",
    "code": "bagmatimunlalitpur",
    "order": 47,
    "district": 28
  },
  {
    "id": 25002,
    "bbox": [
      85.2501859041422,
      27.528292975838,
      85.4135943674898,
      27.6341665520257
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.3355822285523,
        27.58456089361849
      ]
    },
    "title": "Godawari_Lalitpur",
    "title_en": "Godawari_Lalitpur",
    "title_ne": "गोदावरी",
    "type": "Municipality",
    "code": "godawarimunlalitpur",
    "order": 48,
    "district": 28
  },
  {
    "id": 25003,
    "bbox": [
      85.3055698300236,
      27.476840457041,
      85.4036455397929,
      27.5637285029005
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.35024096331719,
        27.530474358076816
      ]
    },
    "title": "Konjyosom",
    "title_en": "Konjyosom",
    "title_ne": "कोन्ज्योसोम",
    "type": "Rural Municipality",
    "code": "konjyosommun",
    "order": 49,
    "district": 28
  },
  {
    "id": 26002,
    "bbox": [
      85.3961331845119,
      27.6560689705366,
      85.5251388497183,
      27.7287084571463
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.46272783458566,
        27.69626840747317
      ]
    },
    "title": "Changunarayan",
    "title_en": "Changunarayan",
    "title_ne": "चाँगुनारायण",
    "type": "Municipality",
    "code": "changunarayanmun",
    "order": 50,
    "district": 29
  },
  {
    "id": 26004,
    "bbox": [
      85.3607443184723,
      27.6199270001063,
      85.493741060677,
      27.6741352639229
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.42546525142679,
        27.649272759427884
      ]
    },
    "title": "Suryabinayak",
    "title_en": "Suryabinayak",
    "title_ne": "सूर्यविनायक",
    "type": "Municipality",
    "code": "suryabinayakmun",
    "order": 51,
    "district": 29
  },
  {
    "id": 1003,
    "bbox": [
      87.4644057179343,
      27.3624737341283,
      87.627871702926,
      27.5990512475344
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.54501893096187,
        27.465464117361883
      ]
    },
    "title": "Meringden",
    "title_en": "Meringden",
    "title_ne": "मेरिङदेन",
    "type": "Rural Municipality",
    "code": "meringdenmun",
    "order": 52,
    "district": 1
  },
  {
    "id": 2007,
    "bbox": [
      87.4925678500812,
      26.9269423142772,
      87.6574518067144,
      27.0405830077133
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.57900274268704,
        26.98185939957695
      ]
    },
    "title": "Tumbewa",
    "title_en": "Tumbewa",
    "title_ne": "तुम्वेवा",
    "type": "Rural Municipality",
    "code": "tumwewamun",
    "order": 53,
    "district": 2
  },
  {
    "id": 3003,
    "bbox": [
      87.6772094709677,
      26.9104308902521,
      87.8174945034265,
      27.0213861637039
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.74928144178088,
        26.965670423793263
      ]
    },
    "title": "Fakphokthum",
    "title_en": "Fakphokthum",
    "title_ne": "फाकफोकथुम",
    "type": "Rural Municipality",
    "code": "phakphokthummun",
    "order": 54,
    "district": 3
  },
  {
    "id": 3007,
    "bbox": [
      87.6461307052029,
      26.7289128333209,
      87.7887982074678,
      26.9266984436774
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.72810573026729,
        26.831955411523925
      ]
    },
    "title": "Mangsebung",
    "title_en": "Mangsebung",
    "title_ne": "माङसेबुङ्ग",
    "type": "Rural Municipality",
    "code": "mansebungmun",
    "order": 55,
    "district": 3
  },
  {
    "id": 4004,
    "bbox": [
      87.940262031672,
      26.5538421626632,
      88.0497312060366,
      26.6555907702867
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.9940353520019,
        26.608792065194063
      ]
    },
    "title": "Birtamod",
    "title_en": "Birtamod",
    "title_ne": "विर्तामोड",
    "type": "Municipality",
    "code": "birtamodmun",
    "order": 56,
    "district": 4
  },
  {
    "id": 4012,
    "bbox": [
      87.639046582775,
      26.5186901329005,
      87.7927624185021,
      26.6972855160799
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.73517714325648,
        26.615250653570076
      ]
    },
    "title": "Kamal",
    "title_en": "Kamal",
    "title_ne": "कमल",
    "type": "Rural Municipality",
    "code": "kamalmun",
    "order": 57,
    "district": 4
  },
  {
    "id": 5001,
    "bbox": [
      87.3841376875626,
      26.5419176526812,
      87.493531817185,
      26.7186747894029
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.43951603810595,
        26.62969614600504
      ]
    },
    "title": "Belbari",
    "title_en": "Belbari",
    "title_ne": "बेलवारी",
    "type": "Municipality",
    "code": "belbarimun",
    "order": 58,
    "district": 5
  },
  {
    "id": 5008,
    "bbox": [
      87.2887681261613,
      26.4384445629211,
      87.4112414059829,
      26.5383077832316
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.34337033274159,
        26.48718144655229
      ]
    },
    "title": "Katahari",
    "title_en": "Katahari",
    "title_ne": "कटहरी",
    "type": "Rural Municipality",
    "code": "kataharimun",
    "order": 59,
    "district": 5
  },
  {
    "id": 10003,
    "bbox": [
      86.9840731534874,
      27.0957608328685,
      87.1380048980559,
      27.2807420526179
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.05811373206156,
        27.201995335619014
      ]
    },
    "title": "Bhojpur",
    "title_en": "Bhojpur",
    "title_ne": "भोजपुर",
    "type": "Municipality",
    "code": "bhojpurmun",
    "order": 60,
    "district": 9
  },
  {
    "id": 14007,
    "bbox": [
      86.5503015121729,
      26.6863030996858,
      86.8417902987454,
      26.9450629644382
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.69094015335082,
        26.806982643944444
      ]
    },
    "title": "Triyuga",
    "title_en": "Triyuga",
    "title_ne": "त्रियुगा",
    "type": "Municipality",
    "code": "triyugamun",
    "order": 61,
    "district": 14
  },
  {
    "id": 31002,
    "bbox": [
      85.1178592719137,
      27.2074314610315,
      85.4002996576936,
      27.4750890948385
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.25281615973402,
        27.33247487326434
      ]
    },
    "title": "Bakaiya",
    "title_en": "Bakaiya",
    "title_ne": "बकैया",
    "type": "Rural Municipality",
    "code": "bakaiyamun",
    "order": 62,
    "district": 31
  },
  {
    "id": 31005,
    "bbox": [
      85.1308086187102,
      27.5371789892792,
      85.2630614446251,
      27.6663496175758
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.19595348496914,
        27.593619845247307
      ]
    },
    "title": "Indrasarowar",
    "title_en": "Indrasarowar",
    "title_ne": "र्इन्द्रसरोवर",
    "type": "Rural Municipality",
    "code": "indrasarowarmun",
    "order": 63,
    "district": 31
  },
  {
    "id": 31008,
    "bbox": [
      84.7132432434625,
      27.3602428756717,
      84.9575545664729,
      27.6095905989003
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.85137628636005,
        27.472569561210566
      ]
    },
    "title": "Manahari",
    "title_en": "Manahari",
    "title_ne": "मनहरी",
    "type": "Rural Municipality",
    "code": "manaharimun",
    "order": 64,
    "district": 31
  },
  {
    "id": 31010,
    "bbox": [
      84.967656065429,
      27.5788096837999,
      85.2052760101534,
      27.7122669872731
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.08608485978316,
        27.65156287440363
      ]
    },
    "title": "Thaha",
    "title_en": "Thaha",
    "title_ne": "थाहा",
    "type": "Municipality",
    "code": "thahamun",
    "order": 65,
    "district": 31
  },
  {
    "id": 34001,
    "bbox": [
      84.7881589432925,
      27.0362950535115,
      84.8564104036554,
      27.1227331766279
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.82733941197658,
        27.082925129786883
      ]
    },
    "title": "Bahudaramai",
    "title_en": "Bahudaramai",
    "title_ne": "बहुदरमाई",
    "type": "Municipality",
    "code": "bahudarmaimun",
    "order": 66,
    "district": 34
  },
  {
    "id": 35003,
    "bbox": [
      84.4754893412624,
      27.6554736436682,
      84.6933773610808,
      27.77385214616
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.58622193016683,
        27.70977363945519
      ]
    },
    "title": "Kalika",
    "title_en": "Kalika",
    "title_ne": "कालिका",
    "type": "Municipality",
    "code": "kalikamunchitwan",
    "order": 67,
    "district": 35
  },
  {
    "id": 35006,
    "bbox": [
      84.5878367963975,
      27.5637150424427,
      84.796671674135,
      27.7358293924437
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.68966018042083,
        27.64940632745406
      ]
    },
    "title": "Rapti",
    "title_en": "Rapti",
    "title_ne": "राप्ती",
    "type": "Municipality",
    "code": "raptimunchitwan",
    "order": 68,
    "district": 35
  },
  {
    "id": 50001,
    "bbox": [
      83.0673308248311,
      27.5836464582125,
      83.2317063621263,
      27.7830224077129
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.15771517614942,
        27.685052979684823
      ]
    },
    "title": "Banganga",
    "title_en": "Banganga",
    "title_ne": "बाणगंगा",
    "type": "Municipality",
    "code": "bangangamun",
    "order": 69,
    "district": 38
  },
  {
    "id": 50004,
    "bbox": [
      82.9843565602152,
      27.4843826271305,
      83.1410151411498,
      27.6496445900537
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.07232831041544,
        27.563991098134498
      ]
    },
    "title": "Kapilbastu",
    "title_en": "Kapilbastu",
    "title_ne": "कपिलवस्तु",
    "type": "Municipality",
    "code": "kapilvastumun",
    "order": 70,
    "district": 38
  },
  {
    "id": 38001,
    "bbox": [
      84.402279665016,
      27.8154964025252,
      84.5588588839746,
      27.9437672733302
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.4857388972591,
        27.875561905890038
      ]
    },
    "title": "Anbukhaireni",
    "title_en": "Anbukhaireni",
    "title_ne": "आँबुखैरेनी",
    "type": "Rural Municipality",
    "code": "aanbookhairenimun",
    "order": 71,
    "district": 43
  },
  {
    "id": 38002,
    "bbox": [
      84.3417651814952,
      27.8425171158702,
      84.4579820725234,
      27.9945563840594
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.3940133228222,
        27.918930174124664
      ]
    },
    "title": "Bandipur",
    "title_en": "Bandipur",
    "title_ne": "बन्दिपुर",
    "type": "Rural Municipality",
    "code": "bandipurmun",
    "order": 72,
    "district": 43
  },
  {
    "id": 38008,
    "bbox": [
      84.0815322649975,
      27.9514133055303,
      84.247359972171,
      28.06351951212
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.16593856380071,
        28.00044800355965
      ]
    },
    "title": "Myagde",
    "title_en": "Myagde",
    "title_ne": "म्याग्दे",
    "type": "Rural Municipality",
    "code": "myagdemun",
    "order": 73,
    "district": 43
  },
  {
    "id": 42002,
    "bbox": [
      83.6150003747647,
      28.8391188456979,
      84.2478663632242,
      29.2455049348456
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.94338172740534,
        29.03508159267509
      ]
    },
    "title": "Loghekar Damodarkunda",
    "title_en": "Loghekar Damodarkunda",
    "title_ne": "लो-घेकर दामोदरकुण्ड",
    "type": "Rural Municipality",
    "code": "dalomemun",
    "order": 74,
    "district": 48
  },
  {
    "id": 42005,
    "bbox": [
      83.5048295814002,
      28.5647247801273,
      83.7369021305333,
      28.8140255694353
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.61472160161286,
        28.681011561183364
      ]
    },
    "title": "Thasang",
    "title_en": "Thasang",
    "title_ne": "थासाङ",
    "type": "Rural Municipality",
    "code": "thasangmun",
    "order": 75,
    "district": 48
  },
  {
    "id": 45001,
    "bbox": [
      83.0935709299089,
      28.1875671962162,
      83.3372312692763,
      28.3490687813869
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.24131413581009,
        28.271476228623843
      ]
    },
    "title": "Badigad",
    "title_en": "Badigad",
    "title_ne": "वडिगाड",
    "type": "Rural Municipality",
    "code": "badigadmun",
    "order": 76,
    "district": 50
  },
  {
    "id": 45004,
    "bbox": [
      83.0047121572248,
      28.2997262848303,
      83.3039616685762,
      28.4809932312684
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.14016954177023,
        28.3943415234668
      ]
    },
    "title": "Dhorpatan",
    "title_en": "Dhorpatan",
    "title_ne": "ढोरपाटन",
    "type": "Municipality",
    "code": "dhorpatanmun",
    "order": 77,
    "district": 50
  },
  {
    "id": 45005,
    "bbox": [
      83.2818754599743,
      28.1637966084297,
      83.5138037124732,
      28.3388978017059
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.38978410352414,
        28.23304692100717
      ]
    },
    "title": "Galkot",
    "title_en": "Galkot",
    "title_ne": "गल्कोट",
    "type": "Municipality",
    "code": "galkotmun",
    "order": 78,
    "district": 50
  },
  {
    "id": 56001,
    "bbox": [
      82.0076140303995,
      28.0770612975933,
      82.1701157532768,
      28.2590506436062
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.0850512723486,
        28.173208333164148
      ]
    },
    "title": "Babai",
    "title_en": "Babai",
    "title_ne": "बबई",
    "type": "Rural Municipality",
    "code": "babaimun",
    "order": 79,
    "district": 52
  },
  {
    "id": 56005,
    "bbox": [
      82.3332465680778,
      27.8967421145844,
      82.6221661902074,
      28.1540780704584
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.47694378177152,
        28.023339790452198
      ]
    },
    "title": "Ghorahi",
    "title_en": "Ghorahi",
    "title_ne": "घोराही",
    "type": "Submetropolitan City",
    "code": "ghorahimun",
    "order": 80,
    "district": 52
  },
  {
    "id": 56006,
    "bbox": [
      82.1859583104697,
      27.8331301816211,
      82.6299204733595,
      28.0286106573148
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.41676475510079,
        27.913289219010718
      ]
    },
    "title": "Lamahi",
    "title_en": "Lamahi",
    "title_ne": "लमही",
    "type": "Municipality",
    "code": "lamahimun",
    "order": 81,
    "district": 52
  },
  {
    "id": 56009,
    "bbox": [
      82.1148802970574,
      28.104254717925,
      82.2534987659485,
      28.2516558207703
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.1914823476665,
        28.183007867728257
      ]
    },
    "title": "Shantinagar",
    "title_en": "Shantinagar",
    "title_ne": "शान्तिनगर",
    "type": "Rural Municipality",
    "code": "shantinagarmun",
    "order": 82,
    "district": 52
  },
  {
    "id": 62002,
    "bbox": [
      83.0449810654992,
      29.004816488851,
      83.5228602261837,
      29.5696128805579
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.26514294972503,
        29.274144924087864
      ]
    },
    "title": "Dolpo Buddha",
    "title_en": "Dolpo Buddha",
    "title_ne": "डोल्पो बुद्ध",
    "type": "Rural Municipality",
    "code": "dolpobuddhamun",
    "order": 83,
    "district": 57
  },
  {
    "id": 62004,
    "bbox": [
      82.9350466570015,
      28.7432227674351,
      83.1690918679986,
      29.1006009296593
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.99006619181348,
        28.921986373190364
      ]
    },
    "title": "Kaike",
    "title_en": "Kaike",
    "title_ne": "काईके",
    "type": "Rural Municipality",
    "code": "kaikemun",
    "order": 84,
    "district": 57
  },
  {
    "id": 58003,
    "bbox": [
      81.2902824581022,
      28.2204802166605,
      81.4884978072765,
      28.4247247855239
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.3824230586322,
        28.323055455703557
      ]
    },
    "title": "Barbardiya",
    "title_en": "Barbardiya",
    "title_ne": "बारबर्दिया",
    "type": "Municipality",
    "code": "barbardiyamun",
    "order": 85,
    "district": 65
  },
  {
    "id": 58006,
    "bbox": [
      81.1932159529902,
      28.2348542210064,
      81.3118467629047,
      28.4384532385153
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.25871128664053,
        28.340282637829638
      ]
    },
    "title": "Madhuwan",
    "title_en": "Madhuwan",
    "title_ne": "मधुवन",
    "type": "Municipality",
    "code": "madhuwanmun",
    "order": 86,
    "district": 65
  },
  {
    "id": 31099,
    "bbox": [
      84.6647853747108,
      27.4290844852293,
      84.740635905383,
      27.5654808841617
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.70624757629025,
        27.492619536520866
      ]
    },
    "title": "Chitwan National Park",
    "title_en": "Chitwan National Park",
    "title_ne": "चितवन राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 87,
    "district": 31
  },
  {
    "id": 1001,
    "bbox": [
      87.5421948601386,
      27.2681844402189,
      87.6962478762788,
      27.3712687945708
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.61937731907706,
        27.309575032224497
      ]
    },
    "title": "Aathrai Tribeni",
    "title_en": "Aathrai Tribeni",
    "title_ne": "आठराई त्रिवेणी",
    "type": "Rural Municipality",
    "code": "aathraitribenimun",
    "order": 88,
    "district": 1
  },
  {
    "id": 19012,
    "bbox": [
      85.6543639714979,
      26.8710154773874,
      85.723703950567,
      26.9555130297722
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.68691408598332,
        26.914715700470374
      ]
    },
    "title": "Haripurwa",
    "title_en": "Haripurwa",
    "title_ne": "हरिपुर्वा",
    "type": "Municipality",
    "code": "haripurmun",
    "order": 89,
    "district": 19
  },
  {
    "id": 21002,
    "bbox": [
      86.1226394354194,
      27.4495393477272,
      86.4204315844708,
      27.7190400165897
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.2642794743292,
        27.576397684842508
      ]
    },
    "title": "Gokulganga",
    "title_en": "Gokulganga",
    "title_ne": "गोकुलगङ्गा",
    "type": "Rural Municipality",
    "code": "gokulgangamun",
    "order": 90,
    "district": 21
  },
  {
    "id": 21004,
    "bbox": [
      86.0866778621653,
      27.3831350885877,
      86.2629445741639,
      27.5155878826257
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.1832746336586,
        27.439344178233807
      ]
    },
    "title": "Likhu Tamakoshi",
    "title_en": "Likhu Tamakoshi",
    "title_ne": "लिखु तामाकोशी",
    "type": "Rural Municipality",
    "code": "likhutamakoshimun",
    "order": 91,
    "district": 21
  },
  {
    "id": 34005,
    "bbox": [
      84.669872116382,
      27.0592063170247,
      84.721809509204,
      27.1351476383776
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.69399535309248,
        27.097077973182785
      ]
    },
    "title": "Dhobini",
    "title_en": "Dhobini",
    "title_ne": "धोबीनी",
    "type": "Rural Municipality",
    "code": "dhobinimun",
    "order": 92,
    "district": 34
  },
  {
    "id": 34007,
    "bbox": [
      84.6792374881445,
      27.1540505583545,
      84.7776479213788,
      27.2487772258634
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.73228463864707,
        27.200251254196875
      ]
    },
    "title": "Jirabhawani",
    "title_en": "Jirabhawani",
    "title_ne": "जिराभवानी",
    "type": "Rural Municipality",
    "code": "jirabhawanimun",
    "order": 93,
    "district": 34
  },
  {
    "id": 34008,
    "bbox": [
      84.695594850347,
      27.0345753711112,
      84.7558673497195,
      27.1169725163457
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.72645619164246,
        27.066016729294077
      ]
    },
    "title": "Kalikamai",
    "title_en": "Kalikamai",
    "title_ne": "कालिकामाई",
    "type": "Rural Municipality",
    "code": "kalikamaimun",
    "order": 94,
    "district": 34
  },
  {
    "id": 34010,
    "bbox": [
      84.8288044969811,
      27.0973603851522,
      84.9505092369974,
      27.2359362616494
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.88952411259923,
        27.171023471765793
      ]
    },
    "title": "Parsagadhi",
    "title_en": "Parsagadhi",
    "title_ne": "पर्सागढी",
    "type": "Municipality",
    "code": "parsagadhimun",
    "order": 95,
    "district": 34
  },
  {
    "id": 34011,
    "bbox": [
      84.7396564833025,
      27.1260708095008,
      84.8378807976794,
      27.2462527249943
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.79020994347383,
        27.19324310047889
      ]
    },
    "title": "Paterwasugauli",
    "title_en": "Paterwasugauli",
    "title_ne": "पटेर्वा सुगौली",
    "type": "Rural Municipality",
    "code": "paterwasugaulimun",
    "order": 96,
    "district": 34
  },
  {
    "id": 34012,
    "bbox": [
      84.7228026967661,
      27.0384134385459,
      84.7956003112797,
      27.1176637202231
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.76368675151903,
        27.0771690475682
      ]
    },
    "title": "Pokhariya",
    "title_en": "Pokhariya",
    "title_ne": "पोखरिया",
    "type": "Municipality",
    "code": "pokhariyamun",
    "order": 97,
    "district": 34
  },
  {
    "id": 34013,
    "bbox": [
      84.7729814107184,
      27.084870318962,
      84.8938705488783,
      27.2409141943069
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.82559021222231,
        27.166728457631205
      ]
    },
    "title": "SakhuwaPrasauni",
    "title_en": "SakhuwaPrasauni",
    "title_ne": "सखुवा प्रसौनी",
    "type": "Rural Municipality",
    "code": "sakhuwaprasaunimun",
    "order": 98,
    "district": 34
  },
  {
    "id": 19004,
    "bbox": [
      85.3861360538653,
      26.8978037003188,
      85.4977321801557,
      26.9543169846008
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.43937465129652,
        26.926056095427768
      ]
    },
    "title": "Basbariya",
    "title_en": "Basbariya",
    "title_ne": "बसबरीया",
    "type": "Rural Municipality",
    "code": "basbariyamun",
    "order": 99,
    "district": 19
  },
  {
    "id": 21005,
    "bbox": [
      85.9794479877778,
      27.3155169521808,
      86.1622979646249,
      27.5029656061389
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.06437291002327,
        27.408812631443332
      ]
    },
    "title": "Manthali",
    "title_en": "Manthali",
    "title_ne": "मन्थली",
    "type": "Municipality",
    "code": "manthalimun",
    "order": 100,
    "district": 21
  },
  {
    "id": 21006,
    "bbox": [
      86.0208680151008,
      27.2421758144519,
      86.2406417761329,
      27.4028941844206
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.14646934984684,
        27.3161591924008
      ]
    },
    "title": "Ramechhap",
    "title_en": "Ramechhap",
    "title_ne": "रामेछाप",
    "type": "Municipality",
    "code": "ramechhapmun",
    "order": 101,
    "district": 21
  },
  {
    "id": 21007,
    "bbox": [
      85.7975166437744,
      27.443883661844,
      85.9174770436757,
      27.5702601255626
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.85587234263254,
        27.49575838971833
      ]
    },
    "title": "Sunapati",
    "title_en": "Sunapati",
    "title_ne": "सुनापती",
    "type": "Rural Municipality",
    "code": "sunapatimun",
    "order": 102,
    "district": 21
  },
  {
    "id": 21008,
    "bbox": [
      86.2128349337767,
      27.4551082148105,
      86.5727626547517,
      27.8325265867772
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.42243288691164,
        27.660969895587712
      ]
    },
    "title": "Umakunda",
    "title_en": "Umakunda",
    "title_ne": "उमाकुण्ड",
    "type": "Rural Municipality",
    "code": "umakundamun",
    "order": 103,
    "district": 21
  },
  {
    "id": 53001,
    "bbox": [
      82.4632919027918,
      28.4037009043008,
      82.6594012351865,
      28.5584528116746
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.54995622661524,
        28.480856362945083
      ]
    },
    "title": "Paribartan",
    "title_en": "Paribartan",
    "title_ne": "परिवर्तन",
    "type": "Rural Municipality",
    "code": "duikholimun",
    "order": 104,
    "district": 54
  },
  {
    "id": 53002,
    "bbox": [
      82.7320956059896,
      28.1864321430003,
      82.9041179896524,
      28.3484004920743
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.81682129426652,
        28.2734003782563
      ]
    },
    "title": "Lungri",
    "title_en": "Lungri",
    "title_ne": "लुङग्री",
    "type": "Rural Municipality",
    "code": "lungrimun",
    "order": 105,
    "district": 54
  },
  {
    "id": 53007,
    "bbox": [
      82.7022787642664,
      28.2843342038514,
      82.9567349124855,
      28.4787727160269
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.82395167391907,
        28.37595186247912
      ]
    },
    "title": "Sunchhahari",
    "title_en": "Sunchhahari",
    "title_ne": "सुनछहरी",
    "type": "Rural Municipality",
    "code": "sunchhaharimun",
    "order": 106,
    "district": 54
  },
  {
    "id": 6006,
    "bbox": [
      87.2045470401386,
      26.4843096717737,
      87.2957635242479,
      26.6205538506463
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.2464965242467,
        26.554563592502788
      ]
    },
    "title": "Duhabi",
    "title_en": "Duhabi",
    "title_ne": "दुहवी",
    "type": "Municipality",
    "code": "duhabimun",
    "order": 107,
    "district": 6
  },
  {
    "id": 26001,
    "bbox": [
      85.4000073129946,
      27.6639255537192,
      85.4489199612113,
      27.6916034837955
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.42961727474352,
        27.675017765984723
      ]
    },
    "title": "Bhaktapur",
    "title_en": "Bhaktapur",
    "title_ne": "भक्तपुर",
    "type": "Municipality",
    "code": "bhaktapurmun",
    "order": 108,
    "district": 29
  },
  {
    "id": 49010,
    "bbox": [
      83.4637051955135,
      27.4696329340372,
      83.6146842593379,
      27.5331330191761
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.54801534009631,
        27.49621584825281
      ]
    },
    "title": "Rohini",
    "title_en": "Rohini",
    "title_ne": "रोहिणी",
    "type": "Rural Municipality",
    "code": "rohinimun",
    "order": 109,
    "district": 37
  },
  {
    "id": 49011,
    "bbox": [
      83.210831809134,
      27.6452739987668,
      83.3933400552,
      27.7682177421593
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.30568662721225,
        27.7119194960863
      ]
    },
    "title": "Sainamaina",
    "title_en": "Sainamaina",
    "title_ne": "सैनामैना",
    "type": "Municipality",
    "code": "sainamainamun",
    "order": 110,
    "district": 37
  },
  {
    "id": 49013,
    "bbox": [
      83.3917651872405,
      27.4756012015743,
      83.4933862563667,
      27.5390155928273
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.44238140984191,
        27.50134777330929
      ]
    },
    "title": "Siddharthanagar",
    "title_en": "Siddharthanagar",
    "title_ne": "सिद्धार्थनगर",
    "type": "Municipality",
    "code": "siddharthanagarmun",
    "order": 111,
    "district": 37
  },
  {
    "id": 49014,
    "bbox": [
      83.3347366276424,
      27.515760400277,
      83.4623448522511,
      27.6246734154178
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.39602388140969,
        27.56693704359335
      ]
    },
    "title": "Siyari",
    "title_en": "Siyari",
    "title_ne": "सियारी",
    "type": "Rural Municipality",
    "code": "siyarimun",
    "order": 112,
    "district": 37
  },
  {
    "id": 49015,
    "bbox": [
      83.3237333719507,
      27.5687288085286,
      83.4321368418947,
      27.6599275122213
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.36876858941736,
        27.62237619568379
      ]
    },
    "title": "Sudhdhodhan",
    "title_en": "Sudhdhodhan",
    "title_ne": "सुद्धोधन",
    "type": "Rural Municipality",
    "code": "shuddhodhanmunrupandehi",
    "order": 113,
    "district": 37
  },
  {
    "id": 49016,
    "bbox": [
      83.4138358761351,
      27.5504211453281,
      83.5519152327845,
      27.6731494629589
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.48636973551233,
        27.60837197610051
      ]
    },
    "title": "Tillotama",
    "title_en": "Tillotama",
    "title_ne": "तिलोत्तमा",
    "type": "Municipality",
    "code": "tilottamamun",
    "order": 114,
    "district": 37
  },
  {
    "id": 53004,
    "bbox": [
      82.5216249931916,
      28.2237603486258,
      82.7254125309166,
      28.4353659104371
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.62619035911098,
        28.337235766238894
      ]
    },
    "title": "Rolpa",
    "title_en": "Rolpa",
    "title_ne": "रोल्पा",
    "type": "Municipality",
    "code": "rolpamun",
    "order": 115,
    "district": 54
  },
  {
    "id": 53005,
    "bbox": [
      82.3968232121585,
      28.0927494955129,
      82.6313592262156,
      28.2618258075156
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.51992337019121,
        28.187103338403606
      ]
    },
    "title": "Runtigadi",
    "title_en": "Runtigadi",
    "title_ne": "रुन्टीगढी",
    "type": "Rural Municipality",
    "code": "runtigadhimun",
    "order": 116,
    "district": 54
  },
  {
    "id": 53008,
    "bbox": [
      82.6150198441813,
      28.1776626143555,
      82.799329149108,
      28.3770321172185
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.70702144018422,
        28.247416518198275
      ]
    },
    "title": "Sunil Smriti",
    "title_en": "Sunil Smriti",
    "title_ne": "सुनिलस्मृति",
    "type": "Rural Municipality",
    "code": "suwarnawatimun",
    "order": 117,
    "district": 54
  },
  {
    "id": 53009,
    "bbox": [
      82.6138903269769,
      28.3923611836122,
      82.869254847224,
      28.5266094713674
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.74180048306881,
        28.463725350094272
      ]
    },
    "title": "Thawang",
    "title_en": "Thawang",
    "title_ne": "थबाङ",
    "type": "Rural Municipality",
    "code": "thabangmun",
    "order": 118,
    "district": 54
  },
  {
    "id": 6004,
    "bbox": [
      87.1081544636975,
      26.4034144433289,
      87.1890465915535,
      26.518726793475
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.15065358595963,
        26.452518566299865
      ]
    },
    "title": "Dewanganj",
    "title_en": "Dewanganj",
    "title_ne": "देवानगञ्ज",
    "type": "Rural Municipality",
    "code": "dewanganjmun",
    "order": 119,
    "district": 6
  },
  {
    "id": 16009,
    "bbox": [
      86.1310334614359,
      26.8119413668769,
      86.247041467058,
      26.935361514285
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.17953757079016,
        26.868246610892204
      ]
    },
    "title": "Karjanha",
    "title_en": "Karjanha",
    "title_ne": "कर्जन्हा",
    "type": "Municipality",
    "code": "karjanhamun",
    "order": 120,
    "district": 15
  },
  {
    "id": 19001,
    "bbox": [
      85.4024111367677,
      27.0077386851303,
      85.5336140258811,
      27.1546134058969
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.4772433946535,
        27.0777370936382
      ]
    },
    "title": "Bagmati",
    "title_en": "Bagmati",
    "title_ne": "बागमती",
    "type": "Municipality",
    "code": "bagmatimunsarlahi",
    "order": 121,
    "district": 19
  },
  {
    "id": 19003,
    "bbox": [
      85.3859700562103,
      26.9247529386975,
      85.5338564951537,
      27.0395231694503
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.45380207593347,
        26.98179614623015
      ]
    },
    "title": "Barahathawa",
    "title_en": "Barahathawa",
    "title_ne": "बरहथवा",
    "type": "Municipality",
    "code": "barhathwamun",
    "order": 122,
    "district": 19
  },
  {
    "id": 19005,
    "bbox": [
      85.4353069300825,
      26.7813480153334,
      85.5044853081719,
      26.8584107945372
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.47269397659275,
        26.815449212002406
      ]
    },
    "title": "Bishnu",
    "title_en": "Bishnu",
    "title_ne": "विष्णु",
    "type": "Rural Municipality",
    "code": "bishnumun",
    "order": 123,
    "district": 19
  },
  {
    "id": 19006,
    "bbox": [
      85.5732771585585,
      26.8472496773036,
      85.6596553187368,
      26.930482649734
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.60990547152375,
        26.89026772692814
      ]
    },
    "title": "Bramhapuri",
    "title_en": "Bramhapuri",
    "title_ne": "ब्रह्मपुरी",
    "type": "Rural Municipality",
    "code": "brahmapurimun",
    "order": 124,
    "district": 19
  },
  {
    "id": 19008,
    "bbox": [
      85.5610593106803,
      26.8952464653678,
      85.640917003248,
      26.9759157547228
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.60054713959347,
        26.93754702452161
      ]
    },
    "title": "Chandranagar",
    "title_en": "Chandranagar",
    "title_ne": "चन्द्रनगर",
    "type": "Rural Municipality",
    "code": "chandranagarmun",
    "order": 125,
    "district": 19
  },
  {
    "id": 19010,
    "bbox": [
      85.3959393084622,
      26.7859724405477,
      85.4841842451224,
      26.9063494655874
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.4456702422499,
        26.844414821921706
      ]
    },
    "title": "Godaita",
    "title_en": "Godaita",
    "title_ne": "गोडैटा",
    "type": "Municipality",
    "code": "godaitamun",
    "order": 126,
    "district": 19
  },
  {
    "id": 19013,
    "bbox": [
      85.5147359685,
      27.037116709873,
      85.6468343104505,
      27.1488594916154
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.57424481640062,
        27.100641500116613
      ]
    },
    "title": "Hariwan",
    "title_en": "Hariwan",
    "title_ne": "हरिवन",
    "type": "Municipality",
    "code": "haripurwamun",
    "order": 127,
    "district": 19
  },
  {
    "id": 19014,
    "bbox": [
      85.5864003624299,
      26.9192270917059,
      85.815862124065,
      27.1621081827283
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.6939443609147,
        27.00935086989303
      ]
    },
    "title": "Ishworpur",
    "title_en": "Ishworpur",
    "title_ne": "ईश्वरपुर",
    "type": "Municipality",
    "code": "ishworpurmun",
    "order": 128,
    "district": 19
  },
  {
    "id": 19015,
    "bbox": [
      85.4990325858612,
      26.8903266043584,
      85.5787069062493,
      26.9900997419383
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.53686748258716,
        26.941122897057863
      ]
    },
    "title": "Kabilasi",
    "title_en": "Kabilasi",
    "title_ne": "कविलासी",
    "type": "Municipality",
    "code": "kawilasimun",
    "order": 129,
    "district": 19
  },
  {
    "id": 19016,
    "bbox": [
      85.4733139281855,
      26.8135281124908,
      85.5418978461292,
      26.8874098604134
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.50729032309769,
        26.85878883022808
      ]
    },
    "title": "Kaudena",
    "title_en": "Kaudena",
    "title_ne": "कौडेना",
    "type": "Rural Municipality",
    "code": "kaudenamun",
    "order": 130,
    "district": 19
  },
  {
    "id": 19017,
    "bbox": [
      85.5635978753905,
      27.0026270416424,
      85.8121982463825,
      27.1952429034541
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.68904014419991,
        27.10290856225777
      ]
    },
    "title": "Lalbandi",
    "title_en": "Lalbandi",
    "title_ne": "लालबन्दी",
    "type": "Municipality",
    "code": "lalbandimun",
    "order": 131,
    "district": 19
  },
  {
    "id": 20002,
    "bbox": [
      85.6837716226133,
      27.2787887146433,
      85.9051625807959,
      27.4120378963585
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.78627721774886,
        27.343391643593908
      ]
    },
    "title": "Ghanglekh",
    "title_en": "Ghanglekh",
    "title_ne": "घ्याङलेख",
    "type": "Rural Municipality",
    "code": "ghyanglekhmun",
    "order": 132,
    "district": 20
  },
  {
    "id": 1002,
    "bbox": [
      87.4444437654354,
      27.2911162113461,
      87.6061168926153,
      27.4807625603016
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.51328914944986,
        27.37365024617376
      ]
    },
    "title": "Maiwakhola",
    "title_en": "Maiwakhola",
    "title_ne": "मैवाखोला",
    "type": "Rural Municipality",
    "code": "maiwakholamun",
    "order": 133,
    "district": 1
  },
  {
    "id": 6009,
    "bbox": [
      87.1090523277655,
      26.5380486097706,
      87.2350858407707,
      26.66194624626
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.16242541190489,
        26.607115889285442
      ]
    },
    "title": "Inaruwa",
    "title_en": "Inaruwa",
    "title_ne": "इनरुवा",
    "type": "Municipality",
    "code": "inaruwamun",
    "order": 134,
    "district": 6
  },
  {
    "id": 20003,
    "bbox": [
      85.9544848990881,
      27.18507259398,
      86.204825869649,
      27.3382553380441
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.0675968034201,
        27.252220688887245
      ]
    },
    "title": "Golanjor",
    "title_en": "Golanjor",
    "title_ne": "गोलन्जोर",
    "type": "Rural Municipality",
    "code": "golanjormun",
    "order": 135,
    "district": 20
  },
  {
    "id": 50007,
    "bbox": [
      83.0685121738518,
      27.4516319267707,
      83.1836649646056,
      27.603317946838
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.13083936798985,
        27.509088270261394
      ]
    },
    "title": "Mayadevi",
    "title_en": "Mayadevi",
    "title_ne": "मायादेवी",
    "type": "Rural Municipality",
    "code": "mayadevimunkapilvastu",
    "order": 136,
    "district": 38
  },
  {
    "id": 50008,
    "bbox": [
      82.7313244296747,
      27.5683664270419,
      82.9354464584599,
      27.7957859805142
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.8525062152889,
        27.693678497007408
      ]
    },
    "title": "Shivaraj",
    "title_en": "Shivaraj",
    "title_ne": "शिवराज",
    "type": "Municipality",
    "code": "shivrajmun",
    "order": 137,
    "district": 38
  },
  {
    "id": 6011,
    "bbox": [
      86.9040286054561,
      26.4883523143362,
      87.0777393512,
      26.6366192590647
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.0072000954264,
        26.56714343172699
      ]
    },
    "title": "Koshi",
    "title_en": "Koshi",
    "title_ne": "कोशी",
    "type": "Rural Municipality",
    "code": "koshimun",
    "order": 138,
    "district": 6
  },
  {
    "id": 6012,
    "bbox": [
      87.1085931901024,
      26.6350076844855,
      87.2542990804555,
      26.7501686564132
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.18064139435654,
        26.68763432925855
      ]
    },
    "title": "Ramdhuni",
    "title_en": "Ramdhuni",
    "title_ne": "रामधुनी",
    "type": "Municipality",
    "code": "ramdhunimun",
    "order": 139,
    "district": 6
  },
  {
    "id": 20006,
    "bbox": [
      85.5966171281509,
      27.1431824917804,
      85.8043634184124,
      27.3536241604134
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.697326851862,
        27.255397992808593
      ]
    },
    "title": "Marin",
    "title_en": "Marin",
    "title_ne": "मरिण",
    "type": "Rural Municipality",
    "code": "marinmun",
    "order": 140,
    "district": 20
  },
  {
    "id": 20007,
    "bbox": [
      86.1807597515219,
      27.1088989908454,
      86.3898626849262,
      27.2611327532301
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.28613998527243,
        27.186980967452516
      ]
    },
    "title": "Phikkal",
    "title_en": "Phikkal",
    "title_ne": "फिक्कल",
    "type": "Rural Municipality",
    "code": "phikkalmun",
    "order": 141,
    "district": 20
  },
  {
    "id": 20008,
    "bbox": [
      85.7734942384301,
      27.3097143980872,
      85.9832003612649,
      27.4510307886248
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.88149960861405,
        27.379676087632102
      ]
    },
    "title": "Sunkoshi",
    "title_en": "Sunkoshi",
    "title_ne": "सुनकोशी",
    "type": "Rural Municipality",
    "code": "sunkoshimunsindhuli",
    "order": 142,
    "district": 20
  },
  {
    "id": 23003,
    "bbox": [
      85.8299372315866,
      27.8128831973301,
      86.0650467984744,
      28.0534534656021
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.93622448197604,
        27.918085332007227
      ]
    },
    "title": "Bhotekoshi",
    "title_en": "Bhotekoshi",
    "title_ne": "भोटेकोशी",
    "type": "Rural Municipality",
    "code": "bhotekoshimun",
    "order": 143,
    "district": 24
  },
  {
    "id": 30001,
    "bbox": [
      84.6183184597268,
      27.6687815164541,
      84.9020627290959,
      27.8253076541712
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.7664759045785,
        27.756397930739553
      ]
    },
    "title": "Benighat Rorang",
    "title_en": "Benighat Rorang",
    "title_ne": "बेनीघाट रोराङ्ग",
    "type": "Rural Municipality",
    "code": "benighatrorangmun",
    "order": 144,
    "district": 26
  },
  {
    "id": 30002,
    "bbox": [
      85.1169330680887,
      27.6696023081166,
      85.2702420433839,
      27.7765068593663
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.17982428298072,
        27.729715266762902
      ]
    },
    "title": "Dhunibesi",
    "title_en": "Dhunibesi",
    "title_ne": "धुनीबेंशी",
    "type": "Municipality",
    "code": "dhunibeshimun",
    "order": 145,
    "district": 26
  },
  {
    "id": 30003,
    "bbox": [
      84.8225918714037,
      27.6834893903306,
      84.9891381373156,
      27.8171097062989
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.9032110284607,
        27.749569176437365
      ]
    },
    "title": "Gajuri",
    "title_en": "Gajuri",
    "title_ne": "गजुरी",
    "type": "Rural Municipality",
    "code": "gajurimun",
    "order": 146,
    "district": 26
  },
  {
    "id": 30005,
    "bbox": [
      84.8224079235372,
      28.0169418330056,
      85.0107784579179,
      28.1652025449906
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.92984285935881,
        28.08644437839277
      ]
    },
    "title": "Gangajamuna",
    "title_en": "Gangajamuna",
    "title_ne": "गङ्गाजमुना",
    "type": "Rural Municipality",
    "code": "gangajamunamun",
    "order": 147,
    "district": 26
  },
  {
    "id": 30006,
    "bbox": [
      84.7320102938523,
      27.8573218994223,
      84.8541736451429,
      27.9814628027389
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.79193693728693,
        27.923403459078898
      ]
    },
    "title": "Jwalamukhi",
    "title_en": "Jwalamukhi",
    "title_ne": "ज्वालामूखी",
    "type": "Rural Municipality",
    "code": "jwalamukhimun",
    "order": 148,
    "district": 26
  },
  {
    "id": 30008,
    "bbox": [
      84.9062218136467,
      27.9466907781118,
      85.0316902204286,
      28.0311133147666
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.97160241247028,
        27.986687650336115
      ]
    },
    "title": "Netrawati Dabjong",
    "title_en": "Netrawati Dabjong",
    "title_ne": "नेत्रावती डबजोङ",
    "type": "Rural Municipality",
    "code": "netrawatidabjongmun",
    "order": 149,
    "district": 26
  },
  {
    "id": 30009,
    "bbox": [
      84.8132142948197,
      27.8414222664047,
      85.0164385828599,
      27.9969122597516
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.91955331595442,
        27.918863100056626
      ]
    },
    "title": "Neelakantha",
    "title_en": "Neelakantha",
    "title_ne": "नीलकण्ठ",
    "type": "Municipality",
    "code": "neelakanthamun",
    "order": 150,
    "district": 26
  },
  {
    "id": 30011,
    "bbox": [
      84.7651484505787,
      27.797410988044,
      84.9438100603066,
      27.896278048244
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.84535325343445,
        27.84255862641079
      ]
    },
    "title": "Siddhalek",
    "title_en": "Siddhalek",
    "title_ne": "सिद्धलेक",
    "type": "Rural Municipality",
    "code": "siddhalekmun",
    "order": 151,
    "district": 26
  },
  {
    "id": 24011,
    "bbox": [
      85.5570160038714,
      27.5790609123967,
      85.7311833559263,
      27.7046554244516
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.63862387506121,
        27.63698150863706
      ]
    },
    "title": "Panchkhal",
    "title_en": "Panchkhal",
    "title_ne": "पाँचखाल",
    "type": "Municipality",
    "code": "panchkhalmun",
    "order": 152,
    "district": 30
  },
  {
    "id": 31007,
    "bbox": [
      85.0414823550958,
      27.3613961165447,
      85.2168984610343,
      27.5118342896445
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.13690832892603,
        27.44525260355668
      ]
    },
    "title": "Makawanpurgadhi",
    "title_en": "Makawanpurgadhi",
    "title_ne": "मकवानपुरगढी",
    "type": "Rural Municipality",
    "code": "makawanpurgadhimun",
    "order": 153,
    "district": 31
  },
  {
    "id": 32004,
    "bbox": [
      85.228160516018,
      26.8741085320046,
      85.2900197002347,
      26.9739253342317
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.25920682200018,
        26.932042003238458
      ]
    },
    "title": "Dewahhi Gonahi",
    "title_en": "Dewahhi Gonahi",
    "title_ne": "देवाही गोनाही",
    "type": "Municipality",
    "code": "dewahigonahimun",
    "order": 154,
    "district": 32
  },
  {
    "id": 50010,
    "bbox": [
      82.9553516046207,
      27.4489390534638,
      83.0906579512014,
      27.5203999846047
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.02630972917713,
        27.482624803022663
      ]
    },
    "title": "Yashodhara",
    "title_en": "Yashodhara",
    "title_ne": "यसोधरा",
    "type": "Rural Municipality",
    "code": "yasodharamun",
    "order": 155,
    "district": 38
  },
  {
    "id": 56002,
    "bbox": [
      82.5214839006588,
      27.895590105417,
      82.7757170207628,
      28.0939166042153
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.66046100708165,
        27.989760480503335
      ]
    },
    "title": "Banglachuli",
    "title_en": "Banglachuli",
    "title_ne": "बंगलाचुली",
    "type": "Rural Municipality",
    "code": "bangalachulimun",
    "order": 156,
    "district": 52
  },
  {
    "id": 54001,
    "bbox": [
      82.2758836155579,
      28.7003740012934,
      82.7003018920112,
      28.9920640172299
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.51382495992675,
        28.84256435990417
      ]
    },
    "title": "Aathbiskot",
    "title_en": "Aathbiskot",
    "title_ne": "आठबिसकोट",
    "type": "Municipality",
    "code": "aathbiskotmun",
    "order": 157,
    "district": 542
  },
  {
    "id": 54002,
    "bbox": [
      82.3993533001129,
      28.6423880057051,
      82.6159490302482,
      28.7800417505418
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.50283669965492,
        28.704116443611763
      ]
    },
    "title": "Banfikot",
    "title_en": "Banfikot",
    "title_ne": "बाँफिकोट",
    "type": "Rural Municipality",
    "code": "banphikotmun",
    "order": 158,
    "district": 542
  },
  {
    "id": 54004,
    "bbox": [
      82.3674407923812,
      28.5512495855877,
      82.5812046957132,
      28.6736877887195
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.47860816304615,
        28.611271035833017
      ]
    },
    "title": "Musikot",
    "title_en": "Musikot",
    "title_ne": "मुसिकोट",
    "type": "Municipality",
    "code": "musikotmunrukum",
    "order": 159,
    "district": 542
  },
  {
    "id": 54005,
    "bbox": [
      82.2306820556331,
      28.6056679717042,
      82.4211052904956,
      28.7331518967735
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.34238944750439,
        28.676670200575288
      ]
    },
    "title": "Sani Bheri",
    "title_en": "Sani Bheri",
    "title_ne": "सानी भेरी",
    "type": "Rural Municipality",
    "code": "sanibherimun",
    "order": 160,
    "district": 542
  },
  {
    "id": 6099,
    "bbox": [
      86.9788398913201,
      26.5676621105124,
      87.0755077794581,
      26.7221194971454
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.02319900129521,
        26.652565340380974
      ]
    },
    "title": "Koshi Tappu Wildlife Reserve",
    "title_en": "Koshi Tappu Wildlife Reserve",
    "title_ne": "कोशी टापु वन्यजन्तु आरक्ष",
    "type": "Wildlife Reserve",
    "code": null,
    "order": 161,
    "district": 6
  },
  {
    "id": 45099,
    "bbox": [
      82.8773532738891,
      28.4635270845028,
      83.1615298138039,
      28.6352696484877
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.02328127385293,
        28.538918096238323
      ]
    },
    "title": "Dhorpatan Hunting Reserve",
    "title_en": "Dhorpatan Hunting Reserve",
    "title_ne": "ढोरपाटन शिकार आरक्ष",
    "type": "Hunting Reserve",
    "code": null,
    "order": 162,
    "district": 50
  },
  {
    "id": 58099,
    "bbox": [
      81.1978740449911,
      28.2861868614208,
      81.7140297347984,
      28.6747516937025
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.45439335400884,
        28.456909077691027
      ]
    },
    "title": "Bardiya National Park",
    "title_en": "Bardiya National Park",
    "title_ne": "बर्दिया राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 163,
    "district": 65
  },
  {
    "id": 76099,
    "bbox": [
      83.8756504367517,
      27.4585134575295,
      84.3240436191677,
      27.6899705700904
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.12170840215512,
        27.57433746304974
      ]
    },
    "title": "Chitwan National Park",
    "title_en": "Chitwan National Park",
    "title_ne": "चितवन राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 164,
    "district": 481
  },
  {
    "id": 17001,
    "bbox": [
      85.9815982942299,
      26.6821711987654,
      86.0525281388658,
      26.7348037802284
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.01576181979226,
        26.711849205026642
      ]
    },
    "title": "Aaurahi",
    "title_en": "Aaurahi",
    "title_ne": "औरही",
    "type": "Rural Municipality",
    "code": "aurahimundhanusha",
    "order": 165,
    "district": 17
  },
  {
    "id": 17003,
    "bbox": [
      85.9876769215703,
      26.6433105188137,
      86.1034803179174,
      26.716976809095
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.0604391990308,
        26.67901328023909
      ]
    },
    "title": "Bideha",
    "title_en": "Bideha",
    "title_ne": "विदेह",
    "type": "Municipality",
    "code": "bidehamun",
    "order": 166,
    "district": 17
  },
  {
    "id": 17004,
    "bbox": [
      85.925339865883,
      26.7874875896385,
      86.0092491459108,
      26.9075534248244
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.9734279186781,
        26.846579970459832
      ]
    },
    "title": "Chhireshwornath",
    "title_en": "Chhireshwornath",
    "title_ne": "क्षिरेश्वरनाथ",
    "type": "Municipality",
    "code": "kshireshwornathmun",
    "order": 167,
    "district": 17
  },
  {
    "id": 23004,
    "bbox": [
      85.669553785206,
      27.6417122659179,
      85.7798791643237,
      27.8609017321831
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.71978147602815,
        27.757954074006705
      ]
    },
    "title": "Chautara SangachokGadhi",
    "title_en": "Chautara SangachokGadhi",
    "title_ne": "चौतारा साँगाचोकगढी",
    "type": "Municipality",
    "code": "chautarasangachowkgadhimun",
    "order": 168,
    "district": 24
  },
  {
    "id": 23005,
    "bbox": [
      85.4417439951479,
      27.8554336649473,
      85.615354735809,
      28.1574081610422
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.52816926885505,
        28.000493050365606
      ]
    },
    "title": "Helambu",
    "title_en": "Helambu",
    "title_ne": "हेलम्बु",
    "type": "Rural Municipality",
    "code": "helambumun",
    "order": 169,
    "district": 24
  },
  {
    "id": 23006,
    "bbox": [
      85.5736559383574,
      27.705411103802,
      85.6910073548051,
      27.8673655001802
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.6389946720484,
        27.78396064697998
      ]
    },
    "title": "Indrawati",
    "title_en": "Indrawati",
    "title_ne": "र्इन्द्रावती",
    "type": "Rural Municipality",
    "code": "indrawatimun",
    "order": 170,
    "district": 24
  },
  {
    "id": 23007,
    "bbox": [
      85.6820945477877,
      27.8034641032318,
      85.9033118606699,
      28.2034609768878
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.79108507481781,
        28.015490220644214
      ]
    },
    "title": "Jugal",
    "title_en": "Jugal",
    "title_ne": "जुगल",
    "type": "Rural Municipality",
    "code": "jugalmun",
    "order": 171,
    "district": 24
  },
  {
    "id": 30010,
    "bbox": [
      84.9613613952713,
      28.1067715958379,
      85.2043904299381,
      28.3466039777072
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.09120210788845,
        28.22213747013595
      ]
    },
    "title": "Rubi Valley",
    "title_en": "Rubi Valley",
    "title_ne": "रुवी भ्याली",
    "type": "Rural Municipality",
    "code": "rubivalleymun",
    "order": 172,
    "district": 26
  },
  {
    "id": 30012,
    "bbox": [
      84.9979440796285,
      27.6902126133198,
      85.1381038188882,
      27.7838821869265
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.06455044886556,
        27.738305507518557
      ]
    },
    "title": "Thakre",
    "title_en": "Thakre",
    "title_ne": "थाक्रे",
    "type": "Rural Municipality",
    "code": "thakremun",
    "order": 173,
    "district": 26
  },
  {
    "id": 30013,
    "bbox": [
      84.7697297581201,
      27.9674514609533,
      84.9445294579696,
      28.0700566425416
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.85804032065998,
        28.021805855261583
      ]
    },
    "title": "Tripura Sundari",
    "title_en": "Tripura Sundari",
    "title_ne": "त्रिपुरासुन्दरी",
    "type": "Rural Municipality",
    "code": "tripurasundarimundhading",
    "order": 174,
    "district": 26
  },
  {
    "id": 36002,
    "bbox": [
      84.6078210099099,
      28.1088646239827,
      84.7366466473026,
      28.3609908566409
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.68152675954471,
        28.237075992881007
      ]
    },
    "title": "Ajirkot",
    "title_en": "Ajirkot",
    "title_ne": "अजिरकोट",
    "type": "Rural Municipality",
    "code": "ajirkotmun",
    "order": 175,
    "district": 44
  },
  {
    "id": 62005,
    "bbox": [
      82.3921901398994,
      28.975441600975,
      82.6640763311291,
      29.1392491739009
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.51085973075486,
        29.050509098748112
      ]
    },
    "title": "Mudkechula",
    "title_en": "Mudkechula",
    "title_ne": "मुड्केचुला",
    "type": "Rural Municipality",
    "code": "mudkechulamun",
    "order": 176,
    "district": 57
  },
  {
    "id": 62007,
    "bbox": [
      82.6909489070024,
      28.8086054276528,
      83.0308498536248,
      29.1041486197673
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.86690690085206,
        28.93203612527027
      ]
    },
    "title": "Thuli Bheri",
    "title_en": "Thuli Bheri",
    "title_ne": "ठुली भेरी",
    "type": "Municipality",
    "code": "thulibherimun",
    "order": 177,
    "district": 57
  },
  {
    "id": 62008,
    "bbox": [
      82.6142262707843,
      28.8968913131056,
      82.907079314699,
      29.13810781922
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.74979811324205,
        29.022392752891356
      ]
    },
    "title": "Tripurasundari",
    "title_en": "Tripurasundari",
    "title_ne": "त्रिपुरासुन्दरी",
    "type": "Municipality",
    "code": "tripurasundarimundolpa",
    "order": 178,
    "district": 57
  },
  {
    "id": 31088,
    "bbox": [
      84.7149942386423,
      27.4349933782761,
      84.8259595108172,
      27.5656937612954
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.77130508143522,
        27.495228785832303
      ]
    },
    "title": "Parsa Wildlife Reserve",
    "title_en": "Parsa Wildlife Reserve",
    "title_ne": "पर्सा वन्यजन्तु आरक्ष",
    "type": "Wildlife Reserve",
    "code": null,
    "order": 179,
    "district": 31
  },
  {
    "id": 1009,
    "bbox": [
      87.6786403016483,
      27.2727444677144,
      87.8332523705864,
      27.3777991858271
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.75250994225728,
        27.315315852286332
      ]
    },
    "title": "Pathibhara Yangwarak",
    "title_en": "Pathibhara Yangwarak",
    "title_ne": "पाथीभरा याङ्वरक",
    "type": "Rural Municipality",
    "code": "yangwarakmuntaplejung",
    "order": 180,
    "district": 1
  },
  {
    "id": 10002,
    "bbox": [
      87.1134510253126,
      27.1062394534176,
      87.2756170049848,
      27.2662209338656
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.19654449661081,
        27.18981901873179
      ]
    },
    "title": "Arun",
    "title_en": "Arun",
    "title_ne": "अरुण",
    "type": "Rural Municipality",
    "code": "arunmun",
    "order": 181,
    "district": 9
  },
  {
    "id": 10004,
    "bbox": [
      87.0582187422294,
      26.9156546272936,
      87.19847584753,
      27.0749562544319
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.1291087059342,
        27.00416728135024
      ]
    },
    "title": "Hatuwagadhi",
    "title_en": "Hatuwagadhi",
    "title_ne": "हतुवागढी",
    "type": "Rural Municipality",
    "code": "hatuwagadhimun",
    "order": 182,
    "district": 9
  },
  {
    "id": 10006,
    "bbox": [
      86.9169710541779,
      27.0137272253344,
      87.1244993395816,
      27.1489728055913
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.0213624607,
        27.085257313917044
      ]
    },
    "title": "Ramprasad Rai",
    "title_en": "Ramprasad Rai",
    "title_ne": "रामप्रसाद राई",
    "type": "Rural Municipality",
    "code": "ramprasadraimun",
    "order": 183,
    "district": 9
  },
  {
    "id": 42003,
    "bbox": [
      83.5788626036619,
      28.6687595095453,
      83.8915274543692,
      28.8685302067647
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.72619451149362,
        28.761662515979303
      ]
    },
    "title": "Gharapjhong",
    "title_en": "Gharapjhong",
    "title_ne": "घरपझोङ",
    "type": "Rural Municipality",
    "code": "gharapjhongmun",
    "order": 184,
    "district": 48
  },
  {
    "id": 63007,
    "bbox": [
      82.0113121199629,
      28.9693947688857,
      82.278186627188,
      29.2959656631537
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.12025733539197,
        29.136023172432115
      ]
    },
    "title": "Tatopani",
    "title_en": "Tatopani",
    "title_ne": "तातोपानी",
    "type": "Rural Municipality",
    "code": "tatopanimun",
    "order": 185,
    "district": 60
  },
  {
    "id": 75005,
    "bbox": [
      80.3962442217557,
      29.7505854938588,
      80.6473609570256,
      29.8646988153125
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.54124417958461,
        29.804356762855907
      ]
    },
    "title": "Mahakali_Darchula",
    "title_en": "Mahakali_Darchula",
    "title_ne": "महाकाली",
    "type": "Municipality",
    "code": "mahakalimundarchula",
    "order": 186,
    "district": 72
  },
  {
    "id": 28004,
    "bbox": [
      85.1639358195902,
      27.7662997137213,
      85.289984790219,
      27.8782029011257
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.23120013969152,
        27.818482597860555
      ]
    },
    "title": "Kakani",
    "title_en": "Kakani",
    "title_ne": "ककनी",
    "type": "Rural Municipality",
    "code": "kakanimun",
    "order": 187,
    "district": 25
  },
  {
    "id": 28005,
    "bbox": [
      85.0584838426693,
      27.9782514507721,
      85.1874304603224,
      28.0912541638791
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.12538762878715,
        28.0316603759925
      ]
    },
    "title": "Kispang",
    "title_en": "Kispang",
    "title_ne": "किस्पाङ",
    "type": "Rural Municipality",
    "code": "kispangmun",
    "order": 188,
    "district": 25
  },
  {
    "id": 49005,
    "bbox": [
      83.2938450565339,
      27.4030189271799,
      83.4026439045582,
      27.4896940983168
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.3503730934998,
        27.447124073728435
      ]
    },
    "title": "Kotahimai",
    "title_en": "Kotahimai",
    "title_ne": "कोटहीमार्इ",
    "type": "Rural Municipality",
    "code": "kotahimaimun",
    "order": 189,
    "district": 37
  },
  {
    "id": 47003,
    "bbox": [
      83.7614204581077,
      27.7095365562523,
      84.0285404645032,
      27.8619567787975
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.89915861929494,
        27.77465583100217
      ]
    },
    "title": "Nisdi",
    "title_en": "Nisdi",
    "title_ne": "निस्दी",
    "type": "Rural Municipality",
    "code": "nisdimun",
    "order": 190,
    "district": 39
  },
  {
    "id": 47010,
    "bbox": [
      83.3401925832212,
      27.7050273718893,
      83.5979836275719,
      27.8294804234198
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.47299150171244,
        27.7689134426937
      ]
    },
    "title": "Tinau",
    "title_en": "Tinau",
    "title_ne": "तिनाउ",
    "type": "Rural Municipality",
    "code": "tinaumun",
    "order": 191,
    "district": 39
  },
  {
    "id": 44007,
    "bbox": [
      83.6090819106626,
      28.0997726907909,
      83.7660471214929,
      28.2028569378741
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.6861667653192,
        28.156156718316097
      ]
    },
    "title": "Phalebas",
    "title_en": "Phalebas",
    "title_ne": "फलेवास",
    "type": "Municipality",
    "code": "phalewasmun",
    "order": 192,
    "district": 51
  },
  {
    "id": 48005,
    "bbox": [
      83.6995405082386,
      27.4093439684594,
      83.7699497874601,
      27.6090270792601
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.73122834097383,
        27.506068700125372
      ]
    },
    "title": "Sarawal",
    "title_en": "Sarawal",
    "title_ne": "सरावल",
    "type": "Rural Municipality",
    "code": "sarawalmun",
    "order": 193,
    "district": 482
  },
  {
    "id": 18001,
    "bbox": [
      85.7537873724469,
      26.8195846032132,
      85.8427162673899,
      26.9094939513883
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.80074409187928,
        26.865964865246152
      ]
    },
    "title": "Aurahi",
    "title_en": "Aurahi",
    "title_ne": "औरही",
    "type": "Municipality",
    "code": "aurahimunmahottari",
    "order": 194,
    "district": 18
  },
  {
    "id": 18002,
    "bbox": [
      85.781753817521,
      26.7134908348351,
      85.8463588313645,
      26.8312584357037
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.81948110662921,
        26.76853719726402
      ]
    },
    "title": "Balwa",
    "title_en": "Balwa",
    "title_ne": "बलवा",
    "type": "Municipality",
    "code": "balwamun",
    "order": 195,
    "district": 18
  },
  {
    "id": 18006,
    "bbox": [
      85.7051934470115,
      26.867664975446,
      85.8583674845106,
      27.0128229207593
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.78159434842708,
        26.94954410934569
      ]
    },
    "title": "Gaushala",
    "title_en": "Gaushala",
    "title_ne": "गौशाला",
    "type": "Municipality",
    "code": "gaushalamun",
    "order": 196,
    "district": 18
  },
  {
    "id": 18008,
    "bbox": [
      85.8289169662331,
      26.7082861670821,
      85.9107612777109,
      26.8185549339258
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.86511745025382,
        26.7695948365122
      ]
    },
    "title": "Loharpatti",
    "title_en": "Loharpatti",
    "title_ne": "लोहरपट्टी",
    "type": "Municipality",
    "code": "loharpattimun",
    "order": 197,
    "district": 18
  },
  {
    "id": 14099,
    "bbox": [
      86.9836572377503,
      26.6982248751003,
      87.0141572460853,
      26.7291583685662
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.99861606423813,
        26.71503018028365
      ]
    },
    "title": "Koshi Tappu Wildlife Reserve",
    "title_en": "Koshi Tappu Wildlife Reserve",
    "title_ne": "कोशी टापु वन्यजन्तु आरक्ष",
    "type": "Wildlife Reserve",
    "code": null,
    "order": 198,
    "district": 14
  },
  {
    "id": 43099,
    "bbox": [
      83.0999436148076,
      28.4932856192294,
      83.2211247697797,
      28.7479169160608
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.12970843497877,
        28.620551293643874
      ]
    },
    "title": "Dhorpatan Hunting Reserve",
    "title_en": "Dhorpatan Hunting Reserve",
    "title_ne": "ढोरपाटन शिकार आरक्ष",
    "type": "Hunting Reserve",
    "code": null,
    "order": 199,
    "district": 49
  },
  {
    "id": 52003,
    "bbox": [
      82.906457494254,
      28.0991380224086,
      83.0591239901728,
      28.1978497608085
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.98234064450723,
        28.144402976528678
      ]
    },
    "title": "Jhimruk",
    "title_en": "Jhimruk",
    "title_ne": "झिमरुक",
    "type": "Rural Municipality",
    "code": "jhimrukmun",
    "order": 200,
    "district": 53
  },
  {
    "id": 52006,
    "bbox": [
      82.8142256426059,
      28.1478950715043,
      83.00339696026,
      28.3625947506327
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.91622406820518,
        28.25256103177374
      ]
    },
    "title": "Naubahini",
    "title_en": "Naubahini",
    "title_ne": "नौबहिनी",
    "type": "Rural Municipality",
    "code": "naubahinimun",
    "order": 201,
    "district": 53
  },
  {
    "id": 33099,
    "bbox": [
      84.9576064744169,
      27.2502780955513,
      84.976051305415,
      27.3099280353302
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.96763347956872,
        27.280093126414016
      ]
    },
    "title": "Parsa Wildlife Reserve",
    "title_en": "Parsa Wildlife Reserve",
    "title_ne": "पर्सा वन्यजन्तु आरक्ष",
    "type": "Wildlife Reserve",
    "code": null,
    "order": 202,
    "district": 33
  },
  {
    "id": 67099,
    "bbox": [
      81.1700054888713,
      29.3717582392886,
      81.2271056926203,
      29.4117652393993
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.1965411568319,
        29.391972290799227
      ]
    },
    "title": "Khaptad National Park",
    "title_en": "Khaptad National Park",
    "title_ne": "खप्तड राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 203,
    "district": 70
  },
  {
    "id": 19018,
    "bbox": [
      85.5088813510028,
      26.8144717221916,
      85.5841747149236,
      26.8967011289118
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.54787157618654,
        26.858809996380455
      ]
    },
    "title": "Malangawa",
    "title_en": "Malangawa",
    "title_ne": "मलंगवा",
    "type": "Municipality",
    "code": "malangwamun",
    "order": 204,
    "district": 19
  },
  {
    "id": 19020,
    "bbox": [
      85.3335963420284,
      26.8173804538195,
      85.426289983145,
      26.860537021356
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.38160664033704,
        26.838188597244187
      ]
    },
    "title": "Ramnagar",
    "title_en": "Ramnagar",
    "title_ne": "रामनगर",
    "type": "Rural Municipality",
    "code": "ramnagarmun",
    "order": 205,
    "district": 19
  },
  {
    "id": 20004,
    "bbox": [
      85.4181620595719,
      27.1370745959925,
      85.6504116831762,
      27.3764747720568
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.54107741288541,
        27.251675803972546
      ]
    },
    "title": "Hariharpurgadhi",
    "title_en": "Hariharpurgadhi",
    "title_ne": "हरिहरपुरगढी",
    "type": "Rural Municipality",
    "code": "hariharpurgadhimun",
    "order": 206,
    "district": 20
  },
  {
    "id": 21003,
    "bbox": [
      85.8090113610403,
      27.3515075269983,
      86.03002331845,
      27.5019469793335
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.94304798746461,
        27.438212221309726
      ]
    },
    "title": "Khadadevi",
    "title_en": "Khadadevi",
    "title_ne": "खाँडादेवी",
    "type": "Rural Municipality",
    "code": "khandadevimun",
    "order": 207,
    "district": 21
  },
  {
    "id": 22001,
    "bbox": [
      86.0749534547637,
      27.5781739042852,
      86.1839305457977,
      27.6922826822216
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.12823121938186,
        27.63436273732908
      ]
    },
    "title": "Baiteshwor",
    "title_en": "Baiteshwor",
    "title_ne": "वैतेश्वर",
    "type": "Rural Municipality",
    "code": "baiteshwormun",
    "order": 208,
    "district": 22
  },
  {
    "id": 23001,
    "bbox": [
      85.761945958104,
      27.7336613215481,
      85.8772071498087,
      27.8395758509675
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.80359914731353,
        27.781233340374094
      ]
    },
    "title": "Balefi",
    "title_en": "Balefi",
    "title_ne": "बलेफी",
    "type": "Rural Municipality",
    "code": "balephimun",
    "order": 209,
    "district": 24
  },
  {
    "id": 23002,
    "bbox": [
      85.820425810065,
      27.7610776690361,
      86.0261266325697,
      27.9182603482126
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.90010912899756,
        27.821772478807212
      ]
    },
    "title": "Barhabise",
    "title_en": "Barhabise",
    "title_ne": "वाह्रविसे",
    "type": "Municipality",
    "code": "bahrabisemun",
    "order": 210,
    "district": 24
  },
  {
    "id": 27001,
    "bbox": [
      85.333306231313,
      27.7221160106476,
      85.3887040415784,
      27.8140432552434
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.36228522220024,
        27.772306087206783
      ]
    },
    "title": "Budhanilakantha",
    "title_en": "Budhanilakantha",
    "title_ne": "बुढानिलकण्ठ",
    "type": "Municipality",
    "code": "budhanilkanthamun",
    "order": 211,
    "district": 27
  },
  {
    "id": 27009,
    "bbox": [
      85.4281820853735,
      27.7157573184055,
      85.565843891757,
      27.7921067722564
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.49904538543808,
        27.753562013067544
      ]
    },
    "title": "Shankharapur",
    "title_en": "Shankharapur",
    "title_ne": "शङ्खरापुर",
    "type": "Municipality",
    "code": "shankharapurmun",
    "order": 212,
    "district": 27
  },
  {
    "id": 27010,
    "bbox": [
      85.2514155185239,
      27.7388552364819,
      85.3287009121784,
      27.8148677631641
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.29706174530592,
        27.777744577266326
      ]
    },
    "title": "Tarakeshwor",
    "title_en": "Tarakeshwor",
    "title_ne": "तारकेश्वर",
    "type": "Municipality",
    "code": "tarakeshwormunkathmandu",
    "order": 213,
    "district": 27
  },
  {
    "id": 27011,
    "bbox": [
      85.3072353735723,
      27.734692693338,
      85.3500015229078,
      27.8151898588545
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.33021381623813,
        27.77539895918779
      ]
    },
    "title": "Tokha",
    "title_en": "Tokha",
    "title_ne": "टोखा",
    "type": "Municipality",
    "code": "tokhamun",
    "order": 214,
    "district": 27
  },
  {
    "id": 25005,
    "bbox": [
      85.3336173378804,
      27.5927394795209,
      85.435694430374,
      27.6717448112186
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.38023575843818,
        27.63508697870795
      ]
    },
    "title": "Mahalaxmi",
    "title_en": "Mahalaxmi",
    "title_ne": "महालक्ष्मी",
    "type": "Municipality",
    "code": "mahalaxmimunlalitpur",
    "order": 215,
    "district": 28
  },
  {
    "id": 26003,
    "bbox": [
      85.3520337755066,
      27.6678357398938,
      85.4060557806169,
      27.7030622825272
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.38153689216587,
        27.682508396081907
      ]
    },
    "title": "Madhyapur Thimi",
    "title_en": "Madhyapur Thimi",
    "title_ne": "मध्यपुर थिमी",
    "type": "Municipality",
    "code": "madhyapurthimimun",
    "order": 216,
    "district": 29
  },
  {
    "id": 31001,
    "bbox": [
      85.2784259877504,
      27.1618534883703,
      85.5103992291986,
      27.4290230132863
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.39789874073219,
        27.30481100599331
      ]
    },
    "title": "Bagmati",
    "title_en": "Bagmati",
    "title_ne": "वाग्मती",
    "type": "Rural Municipality",
    "code": "bagmatimunmakawanpur",
    "order": 217,
    "district": 31
  },
  {
    "id": 32006,
    "bbox": [
      85.3303290991917,
      26.8956206689319,
      85.401736268289,
      26.9991706451658
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.36778059346496,
        26.942310342032133
      ]
    },
    "title": "Gadhimai",
    "title_en": "Gadhimai",
    "title_ne": "गढीमाई",
    "type": "Municipality",
    "code": "gadhimaimun",
    "order": 218,
    "district": 32
  },
  {
    "id": 32016,
    "bbox": [
      85.2838505979647,
      26.7446892105735,
      85.3513582554367,
      26.8178922548803
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.31520973368352,
        26.77783527250645
      ]
    },
    "title": "Rajdevi",
    "title_en": "Rajdevi",
    "title_ne": "राजदेवी",
    "type": "Municipality",
    "code": "rajdevimun",
    "order": 219,
    "district": 32
  },
  {
    "id": 34009,
    "bbox": [
      84.6970183237348,
      27.0028980288077,
      84.7663658512617,
      27.0485265153326
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.7355100477778,
        27.028195243403562
      ]
    },
    "title": "Pakahamainpur",
    "title_en": "Pakahamainpur",
    "title_ne": "पकाहा मैनपुर",
    "type": "Rural Municipality",
    "code": "pakahamainpurmun",
    "order": 220,
    "district": 34
  },
  {
    "id": 35002,
    "bbox": [
      84.4942901686833,
      27.7276171696719,
      84.6814883365912,
      27.8805438877059
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.59124784526335,
        27.802665197948055
      ]
    },
    "title": "Ichchhyakamana",
    "title_en": "Ichchhyakamana",
    "title_ne": "इच्छाकामना",
    "type": "Rural Municipality",
    "code": "ichchhakamanamun",
    "order": 221,
    "district": 35
  },
  {
    "id": 49012,
    "bbox": [
      83.2571858010085,
      27.335075572903,
      83.3597579377078,
      27.4329222021368
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.30437337086548,
        27.38967133232997
      ]
    },
    "title": "Sammarimai",
    "title_en": "Sammarimai",
    "title_ne": "सम्मरीमार्इ",
    "type": "Rural Municipality",
    "code": "sammarimaimun",
    "order": 222,
    "district": 37
  },
  {
    "id": 51001,
    "bbox": [
      82.9523959424122,
      27.9062123548799,
      83.1289731524093,
      28.0896963110316
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.0366426152433,
        27.986625722173578
      ]
    },
    "title": "Bhumekasthan",
    "title_en": "Bhumekasthan",
    "title_ne": "भुमिकास्थान",
    "type": "Municipality",
    "code": "bhumikasthanmun",
    "order": 223,
    "district": 40
  },
  {
    "id": 51003,
    "bbox": [
      82.9930191545266,
      28.0199944075158,
      83.1988421188596,
      28.1140032798367
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.09118254274478,
        28.06509503483338
      ]
    },
    "title": "Malarani",
    "title_en": "Malarani",
    "title_ne": "मालारानी",
    "type": "Rural Municipality",
    "code": "malaranimun",
    "order": 224,
    "district": 40
  },
  {
    "id": 46001,
    "bbox": [
      83.3285218922536,
      28.0467424314611,
      83.5090857584291,
      28.1675449677603
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.4057416629156,
        28.10821153271512
      ]
    },
    "title": "Chandrakot",
    "title_en": "Chandrakot",
    "title_ne": "चन्द्रकोट",
    "type": "Rural Municipality",
    "code": "chandrakotmun",
    "order": 225,
    "district": 41
  },
  {
    "id": 46002,
    "bbox": [
      83.2785460909974,
      27.9208327326544,
      83.4119640539325,
      28.0519465023248
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.34719507399834,
        27.98410297231186
      ]
    },
    "title": "Chatrakot",
    "title_en": "Chatrakot",
    "title_ne": "छत्रकोट",
    "type": "Rural Municipality",
    "code": "chhatrakotmun",
    "order": 226,
    "district": 41
  },
  {
    "id": 45008,
    "bbox": [
      82.8786712274014,
      28.2721124098899,
      83.1726945193089,
      28.4796797570129
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.0205847669249,
        28.38268821039894
      ]
    },
    "title": "Nisikhola",
    "title_en": "Nisikhola",
    "title_ne": "निसीखोला",
    "type": "Rural Municipality",
    "code": "nisikholamun",
    "order": 227,
    "district": 50
  },
  {
    "id": 64001,
    "bbox": [
      81.5618151363399,
      29.0335062897227,
      81.6957593755754,
      29.1268991340747
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.62839926778459,
        29.079835806223837
      ]
    },
    "title": "Subha Kalika",
    "title_en": "Subha Kalika",
    "title_ne": "शुभ कालीका",
    "type": "Rural Municipality",
    "code": "kalikamunkalikot",
    "order": 228,
    "district": 61
  },
  {
    "id": 64007,
    "bbox": [
      81.6013519874306,
      29.2157827859809,
      81.6836033106065,
      29.3337757878913
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.64421544865303,
        29.272783753506374
      ]
    },
    "title": "Raskot",
    "title_en": "Raskot",
    "title_ne": "रास्कोट",
    "type": "Municipality",
    "code": "raskotmun",
    "order": 229,
    "district": 61
  },
  {
    "id": 59008,
    "bbox": [
      81.2559815822037,
      28.6631520476477,
      81.5232269700163,
      28.9142108726301
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.38277405821077,
        28.789700667328212
      ]
    },
    "title": "Panchpuri",
    "title_en": "Panchpuri",
    "title_ne": "पञ्चपुरी",
    "type": "Municipality",
    "code": "panchapurimun",
    "order": 230,
    "district": 64
  },
  {
    "id": 57008,
    "bbox": [
      81.7118801485507,
      27.9217752509791,
      82.1941803441071,
      28.2758675869601
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.92309215590663,
        28.073119402632518
      ]
    },
    "title": "Rapti Sonari",
    "title_en": "Rapti Sonari",
    "title_ne": "राप्तीसोनारी",
    "type": "Rural Municipality",
    "code": "raptisonarimun",
    "order": 231,
    "district": 66
  },
  {
    "id": 69002,
    "bbox": [
      81.026595105407,
      29.099383289319,
      81.2165348135517,
      29.3048849134057
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.12736782497454,
        29.181881557713268
      ]
    },
    "title": "Chaurpati",
    "title_en": "Chaurpati",
    "title_ne": "चौरपाटी",
    "type": "Rural Municipality",
    "code": "chaurpatimun",
    "order": 232,
    "district": 69
  },
  {
    "id": 68009,
    "bbox": [
      81.2053352649804,
      29.4795976598413,
      81.3664442324808,
      29.6069352159382
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.28984323094352,
        29.545260885092436
      ]
    },
    "title": "Masta",
    "title_en": "Masta",
    "title_ne": "मष्टा",
    "type": "Rural Municipality",
    "code": "mastamun",
    "order": 233,
    "district": 71
  },
  {
    "id": 73004,
    "bbox": [
      80.2906874735091,
      29.2027073578138,
      80.5566784600196,
      29.3607098734071
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.40491911349822,
        29.28121010809307
      ]
    },
    "title": "Bhageshwar",
    "title_en": "Bhageshwar",
    "title_ne": "भागेश्वर",
    "type": "Rural Municipality",
    "code": "bhageshwormun",
    "order": 234,
    "district": 74
  },
  {
    "id": 72007,
    "bbox": [
      80.0585843010467,
      28.8244109258942,
      80.1084983418268,
      28.9864987140808
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.08461829122696,
        28.896102745350912
      ]
    },
    "title": "Mahakali_Kanchanpur",
    "title_en": "Mahakali_Kanchanpur",
    "title_ne": "माहाकाली",
    "type": "Municipality",
    "code": "mahakalimunkanchanpur",
    "order": 235,
    "district": 75
  },
  {
    "id": 9003,
    "bbox": [
      87.1445524178624,
      27.4375345020036,
      87.2971990251511,
      27.5281230136915
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.231940647282,
        27.480048587349337
      ]
    },
    "title": "Chichila",
    "title_en": "Chichila",
    "title_ne": "चिचिला",
    "type": "Rural Municipality",
    "code": "chichilamun",
    "order": 236,
    "district": 10
  },
  {
    "id": 65002,
    "bbox": [
      81.7624921154755,
      29.4373758737738,
      82.0445642419479,
      29.6225821646118
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.89315345537688,
        29.514241734291346
      ]
    },
    "title": "Khatyad",
    "title_en": "Khatyad",
    "title_ne": "खत्याड",
    "type": "Rural Municipality",
    "code": "khatyadmun",
    "order": 237,
    "district": 58
  },
  {
    "id": 65003,
    "bbox": [
      82.2210098222815,
      29.3853742461004,
      82.8290028003621,
      29.9713112863597
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.5474203245054,
        29.649513961809383
      ]
    },
    "title": "Mugum Karmarong",
    "title_en": "Mugum Karmarong",
    "title_ne": "मुगुम कार्मारोंग",
    "type": "Rural Municipality",
    "code": "mugumkarmarongmun",
    "order": 238,
    "district": 58
  },
  {
    "id": 66003,
    "bbox": [
      81.7799720043326,
      29.8104549214604,
      82.2378680733944,
      30.3496792121144
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.04150537508797,
        30.02328887988271
      ]
    },
    "title": "Kharpunath",
    "title_en": "Kharpunath",
    "title_ne": "खार्पुनाथ",
    "type": "Rural Municipality",
    "code": "kharpunathmun",
    "order": 239,
    "district": 59
  },
  {
    "id": 66006,
    "bbox": [
      81.6843416817719,
      29.9073039754034,
      82.0979654681148,
      30.365169549034
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.92202617828724,
        30.12989550783916
      ]
    },
    "title": "Simkot",
    "title_en": "Simkot",
    "title_ne": "सिमकोट",
    "type": "Rural Municipality",
    "code": "simkotmun",
    "order": 240,
    "district": 59
  },
  {
    "id": 64009,
    "bbox": [
      81.7402307062683,
      29.0536528578558,
      81.9754336336775,
      29.2415501188094
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.85572231027298,
        29.145936853535844
      ]
    },
    "title": "Tilagufa",
    "title_en": "Tilagufa",
    "title_ne": "तिलागुफा",
    "type": "Municipality",
    "code": "tilagufamun",
    "order": 241,
    "district": 61
  },
  {
    "id": 70004,
    "bbox": [
      80.8470286488822,
      29.1814507628749,
      81.0531848679261,
      29.3353336529403
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.96827943615303,
        29.263652003454787
      ]
    },
    "title": "Dipayal Silgadi",
    "title_en": "Dipayal Silgadi",
    "title_ne": "दिपायल सिलगढ़ी",
    "type": "Municipality",
    "code": "dipayalsilgadhimun",
    "order": 242,
    "district": 68
  },
  {
    "id": 70007,
    "bbox": [
      80.9998198890228,
      29.1953058311252,
      81.1356816198428,
      29.3429836994164
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.0644088064792,
        29.274847980923266
      ]
    },
    "title": "Purbichauki",
    "title_en": "Purbichauki",
    "title_ne": "पूर्वीचौकी",
    "type": "Rural Municipality",
    "code": "purbichaukimun",
    "order": 243,
    "district": 68
  },
  {
    "id": 77002,
    "bbox": [
      82.6535569166519,
      28.5144624958512,
      82.985804274126,
      28.8043489316296
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.82145885546105,
        28.645546971539734
      ]
    },
    "title": "Putha Uttarganga",
    "title_en": "Putha Uttarganga",
    "title_ne": "पुथा उत्तरगंगा",
    "type": "Rural Municipality",
    "code": "puthauttargangamun",
    "order": 244,
    "district": 541
  },
  {
    "id": 19019,
    "bbox": [
      85.6192748385552,
      26.8433113669644,
      85.6836469514652,
      26.9028696119383
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.65388242731113,
        26.873714300739902
      ]
    },
    "title": "Parsa",
    "title_en": "Parsa",
    "title_ne": "पर्सा",
    "type": "Rural Municipality",
    "code": "parsamun",
    "order": 245,
    "district": 19
  },
  {
    "id": 75006,
    "bbox": [
      80.3642144516166,
      29.6781570804083,
      80.5278134562112,
      29.7816191818711
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.4350683296019,
        29.733377985254837
      ]
    },
    "title": "Malikaarjun",
    "title_en": "Malikaarjun",
    "title_ne": "मालिकार्जुन",
    "type": "Rural Municipality",
    "code": "malikarjunmun",
    "order": 246,
    "district": 72
  },
  {
    "id": 73002,
    "bbox": [
      80.4255253134685,
      28.9932800862584,
      80.6197308200772,
      29.2366186515369
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.51081172156893,
        29.135217630861433
      ]
    },
    "title": "Alital",
    "title_en": "Alital",
    "title_ne": "आलिताल",
    "type": "Rural Municipality",
    "code": "aalitalmun",
    "order": 247,
    "district": 74
  },
  {
    "id": 73005,
    "bbox": [
      80.6014009753061,
      29.1763914185964,
      80.7568957800215,
      29.3188765536016
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.67739800367374,
        29.245920611358
      ]
    },
    "title": "Ganayapdhura",
    "title_en": "Ganayapdhura",
    "title_ne": "गन्यापधुरा",
    "type": "Rural Municipality",
    "code": "ganyapadhuramun",
    "order": 248,
    "district": 74
  },
  {
    "id": 76002,
    "bbox": [
      84.1019423879345,
      27.7530552872263,
      84.3057405489217,
      27.8602530321193
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.19504305818644,
        27.808596217383325
      ]
    },
    "title": "Bulingtar",
    "title_en": "Bulingtar",
    "title_ne": "बुलिङटार",
    "type": "Rural Municipality",
    "code": "bulingtarmun",
    "order": 249,
    "district": 481
  },
  {
    "id": 76006,
    "bbox": [
      83.9242626807454,
      27.6219719792448,
      84.1585245467911,
      27.7807091461239
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.05424554952441,
        27.717170668563362
      ]
    },
    "title": "Hupsekot",
    "title_en": "Hupsekot",
    "title_ne": "हुप्सेकोट",
    "type": "Rural Municipality",
    "code": "hupsekotmun",
    "order": 250,
    "district": 481
  },
  {
    "id": 77099,
    "bbox": [
      82.7651310479397,
      28.6201269673915,
      83.15256230292,
      28.8342644516182
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.96612094477237,
        28.73609907853103
      ]
    },
    "title": "Dhorpatan Hunting Reserve",
    "title_en": "Dhorpatan Hunting Reserve",
    "title_ne": "ढोरपाटन शिकार आरक्ष",
    "type": "Hunting Reserve",
    "code": null,
    "order": 251,
    "district": 541
  },
  {
    "id": 1004,
    "bbox": [
      87.5085290370809,
      27.3769124980398,
      87.7366032035666,
      27.7375111962681
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.62781585795067,
        27.583550272727734
      ]
    },
    "title": "Mikwakhola",
    "title_en": "Mikwakhola",
    "title_ne": "मिक्वाखोला",
    "type": "Rural Municipality",
    "code": "mikwakholamun",
    "order": 252,
    "district": 1
  },
  {
    "id": 1006,
    "bbox": [
      87.6209766262058,
      27.3099905100592,
      87.8059522401442,
      27.4568310174517
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.71205398100277,
        27.380970092547596
      ]
    },
    "title": "Phungling",
    "title_en": "Phungling",
    "title_ne": "फुङलिङ",
    "type": "Municipality",
    "code": "phunglingmun",
    "order": 253,
    "district": 1
  },
  {
    "id": 8002,
    "bbox": [
      87.3964348998407,
      26.9680170257492,
      87.5630477328016,
      27.1013795953447
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.47911392461637,
        27.040390654488494
      ]
    },
    "title": "Chhathar",
    "title_en": "Chhathar",
    "title_ne": "छथर",
    "type": "Rural Municipality",
    "code": "chhatharmun",
    "order": 254,
    "district": 8
  },
  {
    "id": 8005,
    "bbox": [
      87.4540867173593,
      27.0624210369145,
      87.6107553356373,
      27.2205458866632
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.52608810939242,
        27.138794066443342
      ]
    },
    "title": "Myanglung",
    "title_en": "Myanglung",
    "title_ne": "म्याङलुङ",
    "type": "Municipality",
    "code": "myanglungmun",
    "order": 255,
    "district": 8
  },
  {
    "id": 9008,
    "bbox": [
      87.2013864171538,
      27.2941441481158,
      87.4429012295635,
      27.4109450402321
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.30719023806691,
        27.35501514487333
      ]
    },
    "title": "Panchakhapan",
    "title_en": "Panchakhapan",
    "title_ne": "पाँचखपन",
    "type": "Municipality",
    "code": "panchkhapanmun",
    "order": 256,
    "district": 10
  },
  {
    "id": 22008,
    "bbox": [
      85.8844006958683,
      27.5565284098189,
      86.0786126300327,
      27.6729708366054
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.97946165224272,
        27.618111457589702
      ]
    },
    "title": "Sailung",
    "title_en": "Sailung",
    "title_ne": "शैलुङ",
    "type": "Rural Municipality",
    "code": "shailungmun",
    "order": 257,
    "district": 22
  },
  {
    "id": 11001,
    "bbox": [
      86.6095876870617,
      27.364439653742,
      86.8145101216104,
      27.4909002913072
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.6988161198216,
        27.429909574107157
      ]
    },
    "title": "Thulung Dudhkoshi",
    "title_en": "Thulung Dudhkoshi",
    "title_ne": "थुलुङ दुधकोशी",
    "type": "Rural Municipality",
    "code": "thulungdudhkoshimun",
    "order": 258,
    "district": 11
  },
  {
    "id": 22007,
    "bbox": [
      85.9810246981126,
      27.4965594812822,
      86.0935274776974,
      27.6092989263663
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.0434232128298,
        27.54425291450458
      ]
    },
    "title": "Melung",
    "title_en": "Melung",
    "title_ne": "मेलुङ",
    "type": "Rural Municipality",
    "code": "melungmun",
    "order": 259,
    "district": 22
  },
  {
    "id": 5011,
    "bbox": [
      87.5455357393373,
      26.6995933762763,
      87.690911755772,
      26.8635287446721
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.61238085917248,
        26.780951681115752
      ]
    },
    "title": "Miklajung",
    "title_en": "Miklajung",
    "title_ne": "मिक्लाजुङ",
    "type": "Rural Municipality",
    "code": "miklajungmunmorang",
    "order": 260,
    "district": 5
  },
  {
    "id": 6001,
    "bbox": [
      87.0138073980974,
      26.6286119662795,
      87.2323764247229,
      26.8782294707311
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.13359914271828,
        26.754771265843505
      ]
    },
    "title": "Barah",
    "title_en": "Barah",
    "title_ne": "बराहक्षेत्र",
    "type": "Municipality",
    "code": "barahamun",
    "order": 261,
    "district": 6
  },
  {
    "id": 7002,
    "bbox": [
      87.309887140589,
      26.9445957185862,
      87.4420295180091,
      27.1004518345374
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.38795098869879,
        27.02675855885569
      ]
    },
    "title": "Chhathar Jorpati",
    "title_en": "Chhathar Jorpati",
    "title_ne": "छथर जोरपाटी",
    "type": "Rural Municipality",
    "code": "chhatharjorpatimun",
    "order": 262,
    "district": 7
  },
  {
    "id": 11006,
    "bbox": [
      86.5355222203962,
      27.3380704252687,
      86.6799791833653,
      27.4479822468994
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.60182810939035,
        27.384983114425598
      ]
    },
    "title": "Nechasalyan",
    "title_en": "Nechasalyan",
    "title_ne": "नेचासल्यान",
    "type": "Rural Municipality",
    "code": "nechasalyanmun",
    "order": 263,
    "district": 11
  },
  {
    "id": 25004,
    "bbox": [
      85.2823585969568,
      27.6063903144886,
      85.3531035442796,
      27.6935269543638
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.31574657270446,
        27.65059945505367
      ]
    },
    "title": "Lalitpur",
    "title_en": "Lalitpur",
    "title_ne": "ललितपुर",
    "type": "Metropolitan City",
    "code": "lalitpurmun",
    "order": 264,
    "district": 28
  },
  {
    "id": 25006,
    "bbox": [
      85.3427159059225,
      27.4030400813167,
      85.443446866148,
      27.548400021132
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.39884140581788,
        27.487752342222144
      ]
    },
    "title": "Mahankal",
    "title_en": "Mahankal",
    "title_ne": "महाङ्काल",
    "type": "Rural Municipality",
    "code": "mahankalmun",
    "order": 265,
    "district": 28
  },
  {
    "id": 2002,
    "bbox": [
      87.6684570337829,
      26.9923136750652,
      87.8448252528175,
      27.1047423789855
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.73921838583883,
        27.04965293808352
      ]
    },
    "title": "Falgunanda",
    "title_en": "Falgunanda",
    "title_ne": "फाल्गुनन्द",
    "type": "Rural Municipality",
    "code": "phalgunandamun",
    "order": 266,
    "district": 2
  },
  {
    "id": 5004,
    "bbox": [
      87.3553379444615,
      26.4071129015092,
      87.466414599796,
      26.5178899835694
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.40267522643678,
        26.45679550754605
      ]
    },
    "title": "Dhanpalthan",
    "title_en": "Dhanpalthan",
    "title_ne": "धनपालथान",
    "type": "Rural Municipality",
    "code": "dhanapalthanmun",
    "order": 267,
    "district": 5
  },
  {
    "id": 31003,
    "bbox": [
      84.9855646351398,
      27.4533084191566,
      85.2615575761409,
      27.6122534708083
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.10444284405938,
        27.527813825189902
      ]
    },
    "title": "Bhimphedi",
    "title_en": "Bhimphedi",
    "title_ne": "भिमफेदी",
    "type": "Rural Municipality",
    "code": "bhimphedimun",
    "order": 268,
    "district": 31
  },
  {
    "id": 31006,
    "bbox": [
      84.8757929221,
      27.5193478100396,
      85.0350575636608,
      27.6986503943244
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.94931669136135,
        27.609524587039335
      ]
    },
    "title": "Kailash",
    "title_en": "Kailash",
    "title_ne": "कैलाश",
    "type": "Rural Municipality",
    "code": "kailashmun",
    "order": 269,
    "district": 31
  },
  {
    "id": 31009,
    "bbox": [
      84.7173124620251,
      27.4891636629367,
      84.9649344740175,
      27.692486584656
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.83791405148568,
        27.59867346821332
      ]
    },
    "title": "Raksirang",
    "title_en": "Raksirang",
    "title_ne": "राक्सिराङ्ग",
    "type": "Rural Municipality",
    "code": "raksirangmun",
    "order": 270,
    "district": 31
  },
  {
    "id": 35001,
    "bbox": [
      84.1606080930308,
      27.5513840762544,
      84.5259365715435,
      27.8244220808486
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.38414657735042,
        27.65290489670769
      ]
    },
    "title": "Bharatpur",
    "title_en": "Bharatpur",
    "title_ne": "भरतपुर",
    "type": "Metropolitan City",
    "code": "bharatpurmun",
    "order": 271,
    "district": 35
  },
  {
    "id": 35005,
    "bbox": [
      84.2539482254019,
      27.3550428764341,
      84.5397542506675,
      27.5138595128475
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.37118224522679,
        27.420634592022132
      ]
    },
    "title": "Madi",
    "title_en": "Madi",
    "title_ne": "माडी",
    "type": "Municipality",
    "code": "madimunchitwan",
    "order": 272,
    "district": 35
  },
  {
    "id": 11008,
    "bbox": [
      86.723109879832,
      27.4306653648436,
      86.8481932536437,
      27.6036071594282
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.78686617595446,
        27.49699440906683
      ]
    },
    "title": "Sotang",
    "title_en": "Sotang",
    "title_ne": "सोताङ",
    "type": "Rural Municipality",
    "code": "sotangmun",
    "order": 273,
    "district": 11
  },
  {
    "id": 35007,
    "bbox": [
      84.4655766529013,
      27.5488495368228,
      84.5618032266611,
      27.6813334045862
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.51393887409917,
        27.619152424687197
      ]
    },
    "title": "Ratnanagar",
    "title_en": "Ratnanagar",
    "title_ne": "रत्ननगर",
    "type": "Municipality",
    "code": "ratnanagarmun",
    "order": 274,
    "district": 35
  },
  {
    "id": 50003,
    "bbox": [
      82.9045981623205,
      27.5472027536931,
      83.1180839586179,
      27.8206868107314
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.99772773893987,
        27.685727454184875
      ]
    },
    "title": "Buddhabhumi",
    "title_en": "Buddhabhumi",
    "title_ne": "बुद्धभुमी",
    "type": "Municipality",
    "code": "buddhabhumimun",
    "order": 275,
    "district": 38
  },
  {
    "id": 50005,
    "bbox": [
      82.7350442725526,
      27.4965860790281,
      82.897795025571,
      27.5725994537915
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.81551770287975,
        27.529731801189833
      ]
    },
    "title": "Krishnanagar",
    "title_en": "Krishnanagar",
    "title_ne": "कृष्णनगर",
    "type": "Municipality",
    "code": "krishnanagarmun",
    "order": 276,
    "district": 38
  },
  {
    "id": 3002,
    "bbox": [
      87.767568870346,
      26.8169679646647,
      87.9115681130851,
      27.0488100179228
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.82997625512026,
        26.921258205339935
      ]
    },
    "title": "Deumai",
    "title_en": "Deumai",
    "title_ne": "देउमाई",
    "type": "Municipality",
    "code": "deumaimun",
    "order": 277,
    "district": 3
  },
  {
    "id": 19007,
    "bbox": [
      85.4781728064283,
      26.8729754325033,
      85.5439358172258,
      26.9313315715686
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.50982774228562,
        26.89999312009228
      ]
    },
    "title": "Chakraghatta",
    "title_en": "Chakraghatta",
    "title_ne": "चक्रघट्टा",
    "type": "Rural Municipality",
    "code": "chakraghattamun",
    "order": 278,
    "district": 19
  },
  {
    "id": 38005,
    "bbox": [
      84.1736755513312,
      27.8776060177374,
      84.3686770075585,
      28.1241655194433
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.28534820531407,
        28.013235445505668
      ]
    },
    "title": "Vyas",
    "title_en": "Vyas",
    "title_ne": "व्यास",
    "type": "Municipality",
    "code": "vyasmun",
    "order": 279,
    "district": 43
  },
  {
    "id": 38009,
    "bbox": [
      84.120410556106,
      27.8324654775984,
      84.3346912561239,
      27.9691350514266
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.21990368842532,
        27.898181939002143
      ]
    },
    "title": "Rhishing",
    "title_en": "Rhishing",
    "title_ne": "ऋषिङ्ग",
    "type": "Rural Municipality",
    "code": "rishingmun",
    "order": 280,
    "district": 43
  },
  {
    "id": 19009,
    "bbox": [
      85.342252384364,
      26.847104352668,
      85.4602769278764,
      26.9181649003937
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.40925418324723,
        26.8830777854521
      ]
    },
    "title": "Dhankaul",
    "title_en": "Dhankaul",
    "title_ne": "धनकौल",
    "type": "Rural Municipality",
    "code": "dhankaulmun",
    "order": 281,
    "district": 19
  },
  {
    "id": 34004,
    "bbox": [
      84.6427286818004,
      27.0270703980491,
      84.7019697229371,
      27.100706259969
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.67141233160659,
        27.058674750956023
      ]
    },
    "title": "Chhipaharmai",
    "title_en": "Chhipaharmai",
    "title_ne": "छिपहरमाई",
    "type": "Rural Municipality",
    "code": "chhipaharmaimun",
    "order": 282,
    "district": 34
  },
  {
    "id": 50002,
    "bbox": [
      82.6961070274038,
      27.5497568458292,
      82.8339170889515,
      27.7743851376128
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.76536920089892,
        27.65569656408148
      ]
    },
    "title": "Bijayanagar",
    "title_en": "Bijayanagar",
    "title_ne": "विजयनगर",
    "type": "Rural Municipality",
    "code": "bijaynagarmun",
    "order": 283,
    "district": 38
  },
  {
    "id": 50006,
    "bbox": [
      82.8597553311588,
      27.466070481081,
      82.994915853448,
      27.6069676863113
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.93588362430968,
        27.544012119271756
      ]
    },
    "title": "Maharajgunj",
    "title_en": "Maharajgunj",
    "title_ne": "महाराजगंज",
    "type": "Municipality",
    "code": "maharajgunjmun",
    "order": 284,
    "district": 38
  },
  {
    "id": 50009,
    "bbox": [
      83.1521849817,
      27.4179289259864,
      83.2330549453394,
      27.5988512700849
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.19323954887804,
        27.515386858933198
      ]
    },
    "title": "Suddhodhan",
    "title_en": "Suddhodhan",
    "title_ne": "शुद्धोधन",
    "type": "Rural Municipality",
    "code": "shuddhodhanmunkapilvastu",
    "order": 285,
    "district": 38
  },
  {
    "id": 13001,
    "bbox": [
      86.6782665925893,
      27.3077640647193,
      86.85024668023,
      27.440240496601
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.76130212782937,
        27.37198712781233
      ]
    },
    "title": "Ainselukhark",
    "title_en": "Ainselukhark",
    "title_ne": "ऐसेलुखर्क",
    "type": "Rural Municipality",
    "code": "aiselukharkamun",
    "order": 286,
    "district": 12
  },
  {
    "id": 15002,
    "bbox": [
      86.4859360957934,
      26.5350675333285,
      86.5508796946849,
      26.6151463147923
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.51967240639122,
        26.57158368003845
      ]
    },
    "title": "Balan Bihul",
    "title_en": "Balan Bihul",
    "title_ne": "बलान-विहुल",
    "type": "Rural Municipality",
    "code": "balanbihulmun",
    "order": 287,
    "district": 16
  },
  {
    "id": 34003,
    "bbox": [
      84.8097951765678,
      26.9838128528466,
      84.9645911642942,
      27.2326751937134
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.89386668949518,
        27.08274739398115
      ]
    },
    "title": "Birgunj",
    "title_en": "Birgunj",
    "title_ne": "बिरगंज",
    "type": "Metropolitan City",
    "code": "birgunjmun",
    "order": 288,
    "district": 34
  },
  {
    "id": 42001,
    "bbox": [
      83.4796630121963,
      28.7512518658021,
      84.0518207420648,
      29.0438366239393
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.74894252250691,
        28.889749473433046
      ]
    },
    "title": "Baragung Muktikhsetra",
    "title_en": "Baragung Muktikhsetra",
    "title_ne": "वारागुङ मुक्तिक्षेत्र",
    "type": "Rural Municipality",
    "code": "bahragaumuktichhetramun",
    "order": 289,
    "district": 48
  },
  {
    "id": 42004,
    "bbox": [
      83.7470633656493,
      29.0724145007165,
      84.2029459146064,
      29.3313585169325
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.98601794036598,
        29.20832661468862
      ]
    },
    "title": "Lomanthang",
    "title_en": "Lomanthang",
    "title_ne": "लोमन्थाङ",
    "type": "Rural Municipality",
    "code": "lomanthangmun",
    "order": 290,
    "district": 48
  },
  {
    "id": 45002,
    "bbox": [
      83.5352271938544,
      28.1840095946632,
      83.6745986424982,
      28.3171122665612
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.59602774099011,
        28.246348018150652
      ]
    },
    "title": "Baglung",
    "title_en": "Baglung",
    "title_ne": "बागलुङ",
    "type": "Municipality",
    "code": "baglungmun",
    "order": 291,
    "district": 50
  },
  {
    "id": 45006,
    "bbox": [
      83.5088354256647,
      28.0774610576811,
      83.6474865401396,
      28.2210843050255
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.58124149438758,
        28.15763731201562
      ]
    },
    "title": "Jaimini",
    "title_en": "Jaimini",
    "title_ne": "जैमिनी",
    "type": "Municipality",
    "code": "jaiminimun",
    "order": 292,
    "district": 50
  },
  {
    "id": 56003,
    "bbox": [
      82.0873645941379,
      28.013731373611,
      82.2538812006544,
      28.1584444353478
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.17528175574263,
        28.084838251110906
      ]
    },
    "title": "Dangisharan",
    "title_en": "Dangisharan",
    "title_ne": "दंगीशरण",
    "type": "Rural Municipality",
    "code": "dangisharanmun",
    "order": 293,
    "district": 52
  },
  {
    "id": 56007,
    "bbox": [
      82.0638533280976,
      27.6770858824149,
      82.4979803502916,
      27.9761489304807
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.31088740611214,
        27.838762640984523
      ]
    },
    "title": "Rajpur",
    "title_en": "Rajpur",
    "title_ne": "राजपुर",
    "type": "Rural Municipality",
    "code": "rajpurmundang",
    "order": 294,
    "district": 52
  },
  {
    "id": 70099,
    "bbox": [
      81.0232500237864,
      29.3075898176081,
      81.1869770996199,
      29.4116295910709
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.10080498075732,
        29.365850397873455
      ]
    },
    "title": "Khaptad National Park",
    "title_en": "Khaptad National Park",
    "title_ne": "खप्तड राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 295,
    "district": 68
  },
  {
    "id": 56010,
    "bbox": [
      82.2020372039787,
      27.9640979280828,
      82.4307856506484,
      28.2485881542061
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.30641317568079,
        28.111611462374217
      ]
    },
    "title": "Tulsipur",
    "title_en": "Tulsipur",
    "title_ne": "तुल्सीपुर",
    "type": "Submetropolitan City",
    "code": "tulsipurmun",
    "order": 296,
    "district": 52
  },
  {
    "id": 58002,
    "bbox": [
      81.4125001530988,
      28.2095719532475,
      81.7667110031986,
      28.404612609449
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.56351543172609,
        28.277929818020006
      ]
    },
    "title": "Bansagadhi",
    "title_en": "Bansagadhi",
    "title_ne": "बाँसगढी",
    "type": "Municipality",
    "code": "bansgadhimun",
    "order": 297,
    "district": 65
  },
  {
    "id": 58005,
    "bbox": [
      81.2805161441155,
      28.1336207287292,
      81.4136017358061,
      28.2868776652896
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.34569465152305,
        28.210927128836925
      ]
    },
    "title": "Gulariya",
    "title_en": "Gulariya",
    "title_ne": "गुलरिया",
    "type": "Municipality",
    "code": "gulariyamun",
    "order": 298,
    "district": 65
  },
  {
    "id": 58007,
    "bbox": [
      81.0592010293138,
      28.3639861141578,
      81.2145400783104,
      28.4979876629011
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.1375832636602,
        28.421326829076246
      ]
    },
    "title": "Rajapur",
    "title_en": "Rajapur",
    "title_ne": "राजापुर",
    "type": "Municipality",
    "code": "rajapurmun",
    "order": 299,
    "district": 65
  },
  {
    "id": 71003,
    "bbox": [
      80.5175755705773,
      28.786230286838,
      80.8624943715352,
      29.0681596767632
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.70236342570587,
        28.931655415798275
      ]
    },
    "title": "Chure",
    "title_en": "Chure",
    "title_ne": "चुरे",
    "type": "Rural Municipality",
    "code": "churemun",
    "order": 300,
    "district": 67
  },
  {
    "id": 70003,
    "bbox": [
      80.8850279796286,
      28.9387822920514,
      81.1501576722392,
      29.1621653784229
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.03830514702092,
        29.05479122396354
      ]
    },
    "title": "Bogtan",
    "title_en": "Bogtan",
    "title_ne": "बोगटान",
    "type": "Rural Municipality",
    "code": "bogatanmun",
    "order": 301,
    "district": 68
  },
  {
    "id": 70006,
    "bbox": [
      80.8789656336873,
      29.1168441234956,
      81.0544677106398,
      29.240751159092
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.96354802952013,
        29.171030053966724
      ]
    },
    "title": "K I Singh",
    "title_en": "K I Singh",
    "title_ne": "के.आई.सिं",
    "type": "Rural Municipality",
    "code": "kisinghmun",
    "order": 302,
    "district": 68
  },
  {
    "id": 69001,
    "bbox": [
      81.2414007871359,
      29.1607657208226,
      81.3633565943967,
      29.2260359031772
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.29846017425724,
        29.1892355071553
      ]
    },
    "title": "Bannigadhi Jayagadh",
    "title_en": "Bannigadhi Jayagadh",
    "title_ne": "बान्नीगढ़ी जयगढ़",
    "type": "Rural Municipality",
    "code": "bannigadhijaygadhmun",
    "order": 303,
    "district": 69
  },
  {
    "id": 69005,
    "bbox": [
      81.105609261207,
      29.0231762930291,
      81.3529219483894,
      29.1680604666422
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.22509017209063,
        29.101692002616954
      ]
    },
    "title": "Mangalsen",
    "title_en": "Mangalsen",
    "title_ne": "मंगलसेन",
    "type": "Municipality",
    "code": "mangalsenmun",
    "order": 304,
    "district": 69
  },
  {
    "id": 69009,
    "bbox": [
      81.1234230605046,
      29.1574782182761,
      81.2692218885394,
      29.3608616416112
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.20587670459027,
        29.268507107722968
      ]
    },
    "title": "Sanphebagar",
    "title_en": "Sanphebagar",
    "title_ne": "साँफेबगर",
    "type": "Municipality",
    "code": "sanfebagarmun",
    "order": 305,
    "district": 69
  },
  {
    "id": 13008,
    "bbox": [
      86.6218533696263,
      27.2246647299754,
      86.7871935079199,
      27.3459882108271
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.71022871633872,
        27.278822848636693
      ]
    },
    "title": "Rawa Besi",
    "title_en": "Rawa Besi",
    "title_ne": "रावा बेसी",
    "type": "Rural Municipality",
    "code": "lamidandamun",
    "order": 306,
    "district": 12
  },
  {
    "id": 12002,
    "bbox": [
      86.5372005095784,
      27.2503220236141,
      86.6861505655633,
      27.3870327870127
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.61450252094302,
        27.307383247182376
      ]
    },
    "title": "Chisankhugadhi",
    "title_en": "Chisankhugadhi",
    "title_ne": "चिशंखुगढी",
    "type": "Rural Municipality",
    "code": "chishankhugadhimun",
    "order": 307,
    "district": 13
  },
  {
    "id": 12003,
    "bbox": [
      86.2565225484189,
      27.3694709956111,
      86.45451657157,
      27.526269463197
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.36239112074584,
        27.45358816786619
      ]
    },
    "title": "Khijidemba",
    "title_en": "Khijidemba",
    "title_ne": "खिजीदेम्वा",
    "type": "Rural Municipality",
    "code": "khijidembamun",
    "order": 308,
    "district": 13
  },
  {
    "id": 12004,
    "bbox": [
      86.2156615476329,
      27.3030091072605,
      86.3434919051026,
      27.4431047986466
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.26662373175324,
        27.38093483802931
      ]
    },
    "title": "Likhu",
    "title_en": "Likhu",
    "title_ne": "लिखु",
    "type": "Rural Municipality",
    "code": "likhumunokhaldhunga",
    "order": 309,
    "district": 13
  },
  {
    "id": 16001,
    "bbox": [
      86.2601732240417,
      26.6356732824286,
      86.3215122247362,
      26.7462946545632
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.2883595555365,
        26.696204711797368
      ]
    },
    "title": "Arnama",
    "title_en": "Arnama",
    "title_ne": "अर्नमा",
    "type": "Rural Municipality",
    "code": "anarmamun",
    "order": 310,
    "district": 15
  },
  {
    "id": 16004,
    "bbox": [
      86.4302382336999,
      26.5498603791049,
      86.5054657229051,
      26.6212876128241
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.47196899763739,
        26.5861661151765
      ]
    },
    "title": "Bhagawanpur",
    "title_en": "Bhagawanpur",
    "title_ne": "भगवानपुर",
    "type": "Rural Municipality",
    "code": "bhagwanpurmun",
    "order": 311,
    "district": 15
  },
  {
    "id": 4002,
    "bbox": [
      87.8871528543451,
      26.4467869554508,
      87.9722502328813,
      26.609670113195
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.92856764427333,
        26.534546990297105
      ]
    },
    "title": "Barhadashi",
    "title_en": "Barhadashi",
    "title_ne": "बाह्रदशी",
    "type": "Rural Municipality",
    "code": "bahradashimun",
    "order": 312,
    "district": 4
  },
  {
    "id": 4005,
    "bbox": [
      87.9926863095554,
      26.6794331694778,
      88.1234703694727,
      26.8015686856101
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.06602360176852,
        26.732533505158624
      ]
    },
    "title": "Buddhashanti",
    "title_en": "Buddhashanti",
    "title_ne": "बुद्धशान्ति",
    "type": "Rural Municipality",
    "code": "buddhashantimun",
    "order": 313,
    "district": 4
  },
  {
    "id": 4009,
    "bbox": [
      87.9362830918614,
      26.4489532547214,
      88.0604070034013,
      26.5837362700177
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.0015497424395,
        26.51569460529323
      ]
    },
    "title": "Haldibari",
    "title_en": "Haldibari",
    "title_ne": "हल्दीबारी",
    "type": "Rural Municipality",
    "code": "haldibarimun",
    "order": 314,
    "district": 4
  },
  {
    "id": 16012,
    "bbox": [
      86.1762813637039,
      26.7778916230685,
      86.3419879580845,
      26.8867061232198
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.25760605181807,
        26.83535987391481
      ]
    },
    "title": "Mirchaiya",
    "title_en": "Mirchaiya",
    "title_ne": "मिर्चैयाँ",
    "type": "Municipality",
    "code": "mirchaiyamun",
    "order": 315,
    "district": 15
  },
  {
    "id": 16016,
    "bbox": [
      86.1465449299711,
      26.5884924698299,
      86.2716380243,
      26.7149742832977
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.21959564538852,
        26.64748706849009
      ]
    },
    "title": "Siraha",
    "title_en": "Siraha",
    "title_ne": "सिरहा",
    "type": "Municipality",
    "code": "sirahamun",
    "order": 316,
    "district": 15
  },
  {
    "id": 15011,
    "bbox": [
      86.7820010520082,
      26.5197752028883,
      86.8533646523261,
      26.5864744315632
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.81575513380396,
        26.55070661455616
      ]
    },
    "title": "Mahadeva",
    "title_en": "Mahadeva",
    "title_ne": "महादेवा",
    "type": "Rural Municipality",
    "code": "mahadevamun",
    "order": 317,
    "district": 16
  },
  {
    "id": 15016,
    "bbox": [
      86.4984013311234,
      26.5949806159213,
      86.5909888727914,
      26.7910909406142
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.53968997473496,
        26.69945782173254
      ]
    },
    "title": "Surunga",
    "title_en": "Surunga",
    "title_ne": "सुरुङ्‍गा",
    "type": "Municipality",
    "code": "surungamun",
    "order": 318,
    "district": 16
  },
  {
    "id": 15017,
    "bbox": [
      86.7570674724392,
      26.4547492102967,
      86.8518764945968,
      26.5275562743005
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.80615090955841,
        26.48956299257675
      ]
    },
    "title": "Tilathi Koiladi",
    "title_en": "Tilathi Koiladi",
    "title_ne": "तिलाठी कोईलाडी",
    "type": "Rural Municipality",
    "code": "tilathikoiladimun",
    "order": 319,
    "district": 16
  },
  {
    "id": 15018,
    "bbox": [
      86.8178892521075,
      26.5520456947911,
      86.9026673332724,
      26.6332722142631
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.85344792151645,
        26.593352839755696
      ]
    },
    "title": "Tirahut",
    "title_en": "Tirahut",
    "title_ne": "तिरहुत",
    "type": "Rural Municipality",
    "code": "tirahutmun",
    "order": 320,
    "district": 16
  },
  {
    "id": 17005,
    "bbox": [
      85.9406157170266,
      26.6505974680173,
      86.024515869995,
      26.6996420238089
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.98328316879575,
        26.67733456223857
      ]
    },
    "title": "Dhanauji",
    "title_en": "Dhanauji",
    "title_ne": "धनौजी",
    "type": "Rural Municipality",
    "code": "dhanaujimun",
    "order": 321,
    "district": 17
  },
  {
    "id": 17011,
    "bbox": [
      86.0977606409054,
      26.6558866755229,
      86.2001778907719,
      26.7632624241388
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.15597305217408,
        26.69960853218928
      ]
    },
    "title": "Kamala",
    "title_en": "Kamala",
    "title_ne": "कमला",
    "type": "Municipality",
    "code": "kamalamun",
    "order": 322,
    "district": 17
  },
  {
    "id": 17014,
    "bbox": [
      85.9565991048795,
      26.7504658982564,
      86.0428112301895,
      26.8432776951224
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.00114273892832,
        26.797513836673712
      ]
    },
    "title": "Mithila Bihari",
    "title_en": "Mithila Bihari",
    "title_ne": "मिथिला बिहारी",
    "type": "Municipality",
    "code": "mithilabiharimun",
    "order": 323,
    "district": 17
  },
  {
    "id": 17015,
    "bbox": [
      85.8483333269641,
      26.5685098263259,
      85.9290784200168,
      26.637260536206
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.87857354526905,
        26.604291922569857
      ]
    },
    "title": "Mukhiyapatti Musaharmiya",
    "title_en": "Mukhiyapatti Musaharmiya",
    "title_ne": "मुखियापट्टी मुसहरमिया",
    "type": "Rural Municipality",
    "code": "mukhiyapattimusaharmiyamun",
    "order": 324,
    "district": 17
  },
  {
    "id": 57001,
    "bbox": [
      81.5181051658046,
      28.1439808102434,
      81.7365913051807,
      28.3378916985291
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.63863193387837,
        28.238709255749644
      ]
    },
    "title": "Baijanath",
    "title_en": "Baijanath",
    "title_ne": "बैजनाथ",
    "type": "Rural Municipality",
    "code": "baijanathmun",
    "order": 325,
    "district": 66
  },
  {
    "id": 57004,
    "bbox": [
      81.4986517828393,
      28.0536227599035,
      81.6419654142993,
      28.1904254526466
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.557583431943,
        28.12660820724425
      ]
    },
    "title": "Khajura",
    "title_en": "Khajura",
    "title_ne": "खजुरा",
    "type": "Rural Municipality",
    "code": "khajuramun",
    "order": 326,
    "district": 66
  },
  {
    "id": 3001,
    "bbox": [
      87.5996112849745,
      26.6646425321116,
      87.818086088145,
      26.8673307988909
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.68270593585665,
        26.765846773919
      ]
    },
    "title": "Chulachuli",
    "title_en": "Chulachuli",
    "title_ne": "चुलाचुली",
    "type": "Rural Municipality",
    "code": "chulachulimun",
    "order": 327,
    "district": 3
  },
  {
    "id": 4001,
    "bbox": [
      87.9265695456408,
      26.6406673938739,
      88.042897448837,
      26.7899456821694
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.98432673450942,
        26.704597483302187
      ]
    },
    "title": "Arjundhara",
    "title_en": "Arjundhara",
    "title_ne": "अर्जुनधारा",
    "type": "Municipality",
    "code": "arjundharamun",
    "order": 328,
    "district": 4
  },
  {
    "id": 4008,
    "bbox": [
      87.6570608343968,
      26.4078653712788,
      87.8305042424111,
      26.52941768552
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.74838144161187,
        26.4645426884609
      ]
    },
    "title": "Gauriganj",
    "title_en": "Gauriganj",
    "title_ne": "गौरिगंज",
    "type": "Rural Municipality",
    "code": "gaurigunjmun",
    "order": 329,
    "district": 4
  },
  {
    "id": 14006,
    "bbox": [
      86.4707027786807,
      27.0215088856031,
      86.6058152905702,
      27.1485503811049
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.54298826295934,
        27.078455139688096
      ]
    },
    "title": "Tapli",
    "title_en": "Tapli",
    "title_ne": "ताप्ली",
    "type": "Rural Municipality",
    "code": "taplimun",
    "order": 330,
    "district": 14
  },
  {
    "id": 14008,
    "bbox": [
      86.4474004839165,
      26.7818786020669,
      86.6155832647523,
      27.047519619675
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.53654259711058,
        26.937788398416306
      ]
    },
    "title": "Udayapurgadhi",
    "title_en": "Udayapurgadhi",
    "title_ne": "उदयपुरगढी",
    "type": "Rural Municipality",
    "code": "udayapurgadhimun",
    "order": 331,
    "district": 14
  },
  {
    "id": 20001,
    "bbox": [
      86.0466052791872,
      26.9191431698797,
      86.3826227057173,
      27.1306618530274
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.23876082265126,
        27.032628508348964
      ]
    },
    "title": "Dudhouli",
    "title_en": "Dudhouli",
    "title_ne": "दुधौली",
    "type": "Municipality",
    "code": "dudhaulimun",
    "order": 332,
    "district": 20
  },
  {
    "id": 4015,
    "bbox": [
      87.7652306541908,
      26.5232762786587,
      87.883884058662,
      26.6940940107303
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.8207531419584,
        26.612160675735968
      ]
    },
    "title": "Shivasataxi",
    "title_en": "Shivasataxi",
    "title_ne": "शिवसताक्षी",
    "type": "Municipality",
    "code": "shivasatakshimun",
    "order": 333,
    "district": 4
  },
  {
    "id": 71002,
    "bbox": [
      80.8910918646262,
      28.4344146710495,
      81.0472849124871,
      28.6060605401567
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.96392506195048,
        28.517425217189405
      ]
    },
    "title": "Bhajani",
    "title_en": "Bhajani",
    "title_ne": "भजनी",
    "type": "Municipality",
    "code": "bhajanimun",
    "order": 334,
    "district": 67
  },
  {
    "id": 71005,
    "bbox": [
      80.6360479789883,
      28.6345434391002,
      80.8971446451001,
      28.8656787934367
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.78149882461535,
        28.75305980071857
      ]
    },
    "title": "Gauriganga",
    "title_en": "Gauriganga",
    "title_ne": "गौरीगंगा",
    "type": "Municipality",
    "code": "gaurigangamun",
    "order": 335,
    "district": 67
  },
  {
    "id": 71009,
    "bbox": [
      80.9840761586013,
      28.5140378073047,
      81.0666163238005,
      28.6241418795273
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.02512492100429,
        28.575069054660847
      ]
    },
    "title": "Joshipur",
    "title_en": "Joshipur",
    "title_ne": "जोशीपुर",
    "type": "Rural Municipality",
    "code": "joshipurmun",
    "order": 336,
    "district": 67
  },
  {
    "id": 71012,
    "bbox": [
      80.7954813764861,
      28.649179972618,
      81.2880294020196,
      28.977660281348
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.04924572024447,
        28.81708873547946
      ]
    },
    "title": "Mohanyal",
    "title_en": "Mohanyal",
    "title_ne": "मोहन्याल",
    "type": "Rural Municipality",
    "code": "mohanyalmun",
    "order": 337,
    "district": 67
  },
  {
    "id": 5005,
    "bbox": [
      87.297280357689,
      26.5017656309869,
      87.4062934180141,
      26.6090060122944
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.35548587801783,
        26.5539272841811
      ]
    },
    "title": "Gramthan",
    "title_en": "Gramthan",
    "title_ne": "ग्रामथान",
    "type": "Rural Municipality",
    "code": "gramthanmun",
    "order": 338,
    "district": 5
  },
  {
    "id": 5009,
    "bbox": [
      87.3232701364201,
      26.6781961180935,
      87.511069138252,
      26.8735377500299
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.40422262558842,
        26.785917204833545
      ]
    },
    "title": "Kerabari",
    "title_en": "Kerabari",
    "title_ne": "केराबारी",
    "type": "Rural Municipality",
    "code": "kerabarimun",
    "order": 339,
    "district": 5
  },
  {
    "id": 23008,
    "bbox": [
      85.812590182185,
      27.6104947746969,
      85.9393371619583,
      27.743938474225
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.87576875946762,
        27.673695009151615
      ]
    },
    "title": "Lisangkhu Pakhar",
    "title_en": "Lisangkhu Pakhar",
    "title_ne": "लिसंखु पाखर",
    "type": "Rural Municipality",
    "code": "lisankhupakharmun",
    "order": 340,
    "district": 24
  },
  {
    "id": 23012,
    "bbox": [
      85.860772131876,
      27.7046768368557,
      86.0340933912131,
      27.7922753719231
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.94529426367791,
        27.752879260420332
      ]
    },
    "title": "Tripurasundari",
    "title_en": "Tripurasundari",
    "title_ne": "त्रिपुरासुन्दरी",
    "type": "Rural Municipality",
    "code": "tripurasundarimunsindhupalchowk",
    "order": 341,
    "district": 24
  },
  {
    "id": 33003,
    "bbox": [
      84.8662164832999,
      26.9639279460042,
      84.9460583184038,
      27.0224903835906
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.9079339907388,
        26.987535594429783
      ]
    },
    "title": "Bishrampur",
    "title_en": "Bishrampur",
    "title_ne": "विश्रामपुर",
    "type": "Rural Municipality",
    "code": "bishrampurmun",
    "order": 342,
    "district": 33
  },
  {
    "id": 33007,
    "bbox": [
      85.0490078014108,
      26.9670854794362,
      85.1349298286606,
      27.0812772675603
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.09638463563167,
        27.036951003185113
      ]
    },
    "title": "Karaiyamai",
    "title_en": "Karaiyamai",
    "title_ne": "करैयामाई",
    "type": "Rural Municipality",
    "code": "karaiyamaimun",
    "order": 343,
    "district": 33
  },
  {
    "id": 17009,
    "bbox": [
      86.0876670278998,
      26.605095592653,
      86.1835640223982,
      26.6680889681498
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.13379707085669,
        26.644672930191017
      ]
    },
    "title": "Janaknandani",
    "title_en": "Janaknandani",
    "title_ne": "जनकनन्दिनी",
    "type": "Rural Municipality",
    "code": "janaknandinimun",
    "order": 344,
    "district": 17
  },
  {
    "id": 17013,
    "bbox": [
      85.9008363720848,
      26.8643744980326,
      86.03409094454,
      27.1338516592766
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.96482730052138,
        26.979098581489502
      ]
    },
    "title": "Mithila",
    "title_en": "Mithila",
    "title_ne": "मिथिला",
    "type": "Municipality",
    "code": "mithilamun",
    "order": 345,
    "district": 17
  },
  {
    "id": 17017,
    "bbox": [
      86.0483529908756,
      26.7445689963665,
      86.154939312774,
      26.8426445156353
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.10230028019448,
        26.798799160657733
      ]
    },
    "title": "Sabaila",
    "title_en": "Sabaila",
    "title_ne": "सबैला",
    "type": "Municipality",
    "code": "sabailamun",
    "order": 346,
    "district": 17
  },
  {
    "id": 33010,
    "bbox": [
      85.0276586512254,
      27.1171864038681,
      85.2710108296192,
      27.3656840883185
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.13738520119352,
        27.23433573634956
      ]
    },
    "title": "Nijgadh",
    "title_en": "Nijgadh",
    "title_ne": "निजगढ",
    "type": "Municipality",
    "code": "nijgadhmun",
    "order": 347,
    "district": 33
  },
  {
    "id": 33013,
    "bbox": [
      84.9113595324635,
      26.9740609434185,
      84.9767955704914,
      27.0305836415235
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.94337373140884,
        27.00026540023672
      ]
    },
    "title": "Pheta",
    "title_en": "Pheta",
    "title_ne": "फेटा",
    "type": "Rural Municipality",
    "code": "phetamun",
    "order": 348,
    "district": 33
  },
  {
    "id": 36010,
    "bbox": [
      84.51133708373,
      28.0124852405443,
      84.6664437720396,
      28.1587609186487
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.60115892182881,
        28.09125645837181
      ]
    },
    "title": "Siranchok",
    "title_en": "Siranchok",
    "title_ne": "सिरानचोक",
    "type": "Rural Municipality",
    "code": "siranchowkmun",
    "order": 349,
    "district": 44
  },
  {
    "id": 46004,
    "bbox": [
      83.2625745259804,
      27.9641547634501,
      83.3668831295141,
      28.1159018294836
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.30940695214089,
        28.034672330942445
      ]
    },
    "title": "Gulmidarbar",
    "title_en": "Gulmidarbar",
    "title_ne": "गुल्मी दरबार",
    "type": "Rural Municipality",
    "code": "gulmidarbarmun",
    "order": 350,
    "district": 41
  },
  {
    "id": 72002,
    "bbox": [
      80.2562995530679,
      28.6283835181028,
      80.4281458318131,
      28.7726847684304
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.35260549868593,
        28.700357495979205
      ]
    },
    "title": "Belauri",
    "title_en": "Belauri",
    "title_ne": "बेलौरी",
    "type": "Municipality",
    "code": "belaurimun",
    "order": 351,
    "district": 75
  },
  {
    "id": 18004,
    "bbox": [
      85.8159962466322,
      26.7947097169344,
      85.9198268064867,
      26.9090638655737
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.87213489952481,
        26.849428532804986
      ]
    },
    "title": "Bhangaha",
    "title_en": "Bhangaha",
    "title_ne": "भँगाहा",
    "type": "Municipality",
    "code": "bhagahamun",
    "order": 352,
    "district": 18
  },
  {
    "id": 18011,
    "bbox": [
      85.8210459490285,
      26.6043039446302,
      85.9059471828618,
      26.6775378707492
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.85989304534175,
        26.642829418224004
      ]
    },
    "title": "Matihani",
    "title_en": "Matihani",
    "title_ne": "मटिहानी",
    "type": "Municipality",
    "code": "matihanimun",
    "order": 353,
    "district": 18
  },
  {
    "id": 18013,
    "bbox": [
      85.7408653457902,
      26.768072132926,
      85.8255702678389,
      26.8534276889819
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.7836161110084,
        26.810063452806748
      ]
    },
    "title": "Ramgopalpur",
    "title_en": "Ramgopalpur",
    "title_ne": "रामगोपालपुर",
    "type": "Municipality",
    "code": "ramgopalpurmun",
    "order": 354,
    "district": 18
  },
  {
    "id": 24003,
    "bbox": [
      85.6533554155204,
      27.5735426354835,
      85.821875304258,
      27.6803401949126
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.74575178047539,
        27.636322074492174
      ]
    },
    "title": "Bhumlu",
    "title_en": "Bhumlu",
    "title_ne": "भुम्लु",
    "type": "Rural Municipality",
    "code": "bhumlumun",
    "order": 355,
    "district": 30
  },
  {
    "id": 24005,
    "bbox": [
      85.5308465917341,
      27.5539524526158,
      85.6277278973256,
      27.6818235286691
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.57227898142388,
        27.617968031784084
      ]
    },
    "title": "Dhulikhel",
    "title_en": "Dhulikhel",
    "title_ne": "धुलिखेल",
    "type": "Municipality",
    "code": "dhulikhelmun",
    "order": 356,
    "district": 30
  },
  {
    "id": 24008,
    "bbox": [
      85.5194837445175,
      27.6595416835674,
      85.6945566697981,
      27.7569359178896
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.59866845489208,
        27.7102219051168
      ]
    },
    "title": "Mandandeupur",
    "title_en": "Mandandeupur",
    "title_ne": "मण्डनदेउपुर",
    "type": "Municipality",
    "code": "mandandeupurmun",
    "order": 357,
    "district": 30
  },
  {
    "id": 24012,
    "bbox": [
      85.5467907879429,
      27.398217205752,
      85.7909799373823,
      27.5391629012353
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.67118523045609,
        27.470431564901865
      ]
    },
    "title": "Roshi",
    "title_en": "Roshi",
    "title_ne": "रोशी",
    "type": "Rural Municipality",
    "code": "roshimun",
    "order": 358,
    "district": 30
  },
  {
    "id": 47001,
    "bbox": [
      83.5276877301773,
      27.8206181396495,
      83.6454984863811,
      27.9430634115384
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.59117189570789,
        27.886342457280424
      ]
    },
    "title": "Bagnaskali",
    "title_en": "Bagnaskali",
    "title_ne": "बगनासकाली",
    "type": "Rural Municipality",
    "code": "baganaskalimun",
    "order": 359,
    "district": 39
  },
  {
    "id": 47005,
    "bbox": [
      83.2310402280013,
      27.7562061604899,
      83.4200199866654,
      27.9589208307725
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.33230197616481,
        27.85151584357938
      ]
    },
    "title": "Rainadevi Chhahara",
    "title_en": "Rainadevi Chhahara",
    "title_ne": "रैनादेवी छहरा",
    "type": "Rural Municipality",
    "code": "rainadevichhaharamun",
    "order": 360,
    "district": 39
  },
  {
    "id": 47008,
    "bbox": [
      83.3455669378712,
      27.7904117423218,
      83.493270911375,
      27.9435626718122
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.42985035877342,
        27.857593276257692
      ]
    },
    "title": "Ribdikot",
    "title_en": "Ribdikot",
    "title_ne": "रिब्दीकोट",
    "type": "Rural Municipality",
    "code": "ribdikotmun",
    "order": 361,
    "district": 39
  },
  {
    "id": 39003,
    "bbox": [
      83.6936843850875,
      27.9984285183145,
      83.8686196198863,
      28.0861057377957
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.77257323158817,
        28.03976384161088
      ]
    },
    "title": "Bhirkot",
    "title_en": "Bhirkot",
    "title_ne": "भीरकोट",
    "type": "Municipality",
    "code": "bheerkotmun",
    "order": 362,
    "district": 42
  },
  {
    "id": 39005,
    "bbox": [
      83.7502953214779,
      27.8682281020166,
      83.9616305276503,
      27.9793219341431
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.8566248195196,
        27.912301319147563
      ]
    },
    "title": "Chapakot",
    "title_en": "Chapakot",
    "title_ne": "चापाकोट",
    "type": "Municipality",
    "code": "chapakotmun",
    "order": 363,
    "district": 42
  },
  {
    "id": 39008,
    "bbox": [
      83.4398801153903,
      27.9227366115594,
      83.6201712673048,
      27.9820940378851
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.5342533551679,
        27.95077390517981
      ]
    },
    "title": "Kaligandagi",
    "title_en": "Kaligandagi",
    "title_ne": "कालीगण्डकी",
    "type": "Rural Municipality",
    "code": "kaligandakimunsyangja",
    "order": 364,
    "district": 42
  },
  {
    "id": 72005,
    "bbox": [
      80.390211187728,
      28.7114849939006,
      80.5595317568524,
      29.037534440144
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.46910113434649,
        28.861210786820678
      ]
    },
    "title": "Krishnapur",
    "title_en": "Krishnapur",
    "title_ne": "कृष्णपुर",
    "type": "Municipality",
    "code": "krishnapurmun",
    "order": 365,
    "district": 75
  },
  {
    "id": 38003,
    "bbox": [
      84.3104773184404,
      27.9521886156047,
      84.4776264523517,
      28.1298089031161
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.3968129579755,
        28.05408557231068
      ]
    },
    "title": "Bhanu",
    "title_en": "Bhanu",
    "title_ne": "भानु",
    "type": "Municipality",
    "code": "bhanumun",
    "order": 366,
    "district": 43
  },
  {
    "id": 38010,
    "bbox": [
      83.9396493819085,
      28.0064848464328,
      84.1947416937467,
      28.1160022737369
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.06665512757468,
        28.064842221710954
      ]
    },
    "title": "Shuklagandaki",
    "title_en": "Shuklagandaki",
    "title_ne": "शुक्लागण्डकी",
    "type": "Municipality",
    "code": "shuklagandakimun",
    "order": 367,
    "district": 43
  },
  {
    "id": 56004,
    "bbox": [
      82.4646733289916,
      27.6764800846721,
      82.8058577128081,
      27.8437828598444
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.60512060014376,
        27.767244232661014
      ]
    },
    "title": "Gadhawa",
    "title_en": "Gadhawa",
    "title_ne": "गढवा",
    "type": "Rural Municipality",
    "code": "gadhawamun",
    "order": 368,
    "district": 52
  },
  {
    "id": 61003,
    "bbox": [
      81.8802326050962,
      28.6303116597292,
      82.1601332237079,
      28.8728985778654
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.02663268081942,
        28.74843739868492
      ]
    },
    "title": "Chhedagad",
    "title_en": "Chhedagad",
    "title_ne": "छेडागाड",
    "type": "Municipality",
    "code": "chhedagadmun",
    "order": 369,
    "district": 62
  },
  {
    "id": 60007,
    "bbox": [
      81.5465029727313,
      28.6333975284307,
      81.8146346725104,
      28.7864658747487
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.68336139879314,
        28.70635088357038
      ]
    },
    "title": "Gurans",
    "title_en": "Gurans",
    "title_ne": "गुराँस",
    "type": "Rural Municipality",
    "code": "guransmun",
    "order": 370,
    "district": 63
  },
  {
    "id": 73003,
    "bbox": [
      80.4793932991068,
      29.222579256483,
      80.6705555952283,
      29.3899334548793
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.58311333450968,
        29.282648636805128
      ]
    },
    "title": "Amargadhi",
    "title_en": "Amargadhi",
    "title_ne": "अमरगढी",
    "type": "Municipality",
    "code": "amargadhimun",
    "order": 371,
    "district": 74
  },
  {
    "id": 73006,
    "bbox": [
      80.6187480910964,
      29.3015018094557,
      80.7858680455084,
      29.4251642317388
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.7003240413055,
        29.358143788812608
      ]
    },
    "title": "Nawadurga",
    "title_en": "Nawadurga",
    "title_ne": "नवदुर्गा",
    "type": "Rural Municipality",
    "code": "navadurgamun",
    "order": 372,
    "district": 74
  },
  {
    "id": 72006,
    "bbox": [
      80.3384547786654,
      28.6661762749245,
      80.5121957382964,
      28.8474831690665
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.427871424983,
        28.761871266694182
      ]
    },
    "title": "Laljhadi",
    "title_en": "Laljhadi",
    "title_ne": "लालझाडी",
    "type": "Rural Municipality",
    "code": "laljhadimun",
    "order": 373,
    "district": 75
  },
  {
    "id": 36003,
    "bbox": [
      84.6480252160561,
      27.9408738730788,
      84.8135694549372,
      28.0624870813003
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.74040105095874,
        28.0117456561523
      ]
    },
    "title": "BhimsenThapa",
    "title_en": "BhimsenThapa",
    "title_ne": "भिमसेनथापा",
    "type": "Rural Municipality",
    "code": "bhimsenmun",
    "order": 374,
    "district": 44
  },
  {
    "id": 36004,
    "bbox": [
      84.4818603294558,
      28.330264461836,
      85.1980163344162,
      28.7522144268435
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.83063861392927,
        28.533755160191856
      ]
    },
    "title": "Chum Nubri",
    "title_en": "Chum Nubri",
    "title_ne": "चुमनुव्री",
    "type": "Rural Municipality",
    "code": "chumanuwrimun",
    "order": 375,
    "district": 44
  },
  {
    "id": 36007,
    "bbox": [
      84.4731651747516,
      27.9049041371274,
      84.7032672452571,
      28.0500992232463
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.59934835764359,
        27.98293339450737
      ]
    },
    "title": "Gorkha",
    "title_en": "Gorkha",
    "title_ne": "गोरखा",
    "type": "Municipality",
    "code": "gorkhamun",
    "order": 376,
    "district": 44
  },
  {
    "id": 66001,
    "bbox": [
      81.7700987129566,
      29.6194071486225,
      81.9440250822136,
      29.7820279940011
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.8464236751316,
        29.70538756427917
      ]
    },
    "title": "Adanchuli",
    "title_en": "Adanchuli",
    "title_ne": "अदानचुली",
    "type": "Rural Municipality",
    "code": "adanchulimun",
    "order": 377,
    "district": 59
  },
  {
    "id": 35099,
    "bbox": [
      83.9187728578849,
      27.3940068013925,
      84.7132432434625,
      27.689651929192
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.3411870062625,
        27.511549422691367
      ]
    },
    "title": "Chitwan National Park",
    "title_en": "Chitwan National Park",
    "title_ne": "चितवन राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 378,
    "district": 35
  },
  {
    "id": 12006,
    "bbox": [
      86.3385392778315,
      27.2958094623101,
      86.5084278917647,
      27.4360430309864
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.42803829335674,
        27.365482874738984
      ]
    },
    "title": "Molung",
    "title_en": "Molung",
    "title_ne": "मोलुङ",
    "type": "Rural Municipality",
    "code": "molungmun",
    "order": 379,
    "district": 13
  },
  {
    "id": 12008,
    "bbox": [
      86.2809686862573,
      27.1925280260592,
      86.4509440641354,
      27.3563418135052
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.37243059931141,
        27.269797537167726
      ]
    },
    "title": "Sunkoshi",
    "title_en": "Sunkoshi",
    "title_ne": "सुनकोशी",
    "type": "Rural Municipality",
    "code": "sunkoshimunokhaldhunga",
    "order": 380,
    "district": 13
  },
  {
    "id": 16002,
    "bbox": [
      86.2606019957069,
      26.6133192241332,
      86.3486411690483,
      26.6847980613751
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.30663832851587,
        26.642293064843216
      ]
    },
    "title": "Aurahi",
    "title_en": "Aurahi",
    "title_ne": "औरही",
    "type": "Rural Municipality",
    "code": "aurahimunsiraha",
    "order": 381,
    "district": 15
  },
  {
    "id": 16006,
    "bbox": [
      86.3383172750464,
      26.7095491585382,
      86.4943359080532,
      26.9098166528101
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.41376322446955,
        26.810763494109608
      ]
    },
    "title": "Dhangadhimai",
    "title_en": "Dhangadhimai",
    "title_ne": "धनगढीमाई",
    "type": "Municipality",
    "code": "dhangadhimaimun",
    "order": 382,
    "district": 15
  },
  {
    "id": 16010,
    "bbox": [
      86.4184522328108,
      26.6543856526176,
      86.5546336197216,
      26.8601254822992
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.48123664927408,
        26.756802051539818
      ]
    },
    "title": "Lahan",
    "title_en": "Lahan",
    "title_ne": "लहान",
    "type": "Municipality",
    "code": "lahanmun",
    "order": 383,
    "district": 15
  },
  {
    "id": 16013,
    "bbox": [
      86.2465368233128,
      26.7432060742232,
      86.3116014415973,
      26.8155560108747
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.2798669698264,
        26.775199976536985
      ]
    },
    "title": "Naraha",
    "title_en": "Naraha",
    "title_ne": "नरहा",
    "type": "Rural Municipality",
    "code": "narahamun",
    "order": 384,
    "district": 15
  },
  {
    "id": 15004,
    "bbox": [
      86.6834860872805,
      26.48089308857,
      86.7626012752773,
      26.5618535611904
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.70065006239028,
        26.521393978074258
      ]
    },
    "title": "Bishnupur",
    "title_en": "Bishnupur",
    "title_ne": "बिष्णुपुर",
    "type": "Rural Municipality",
    "code": "bishnupurmunsaptari",
    "order": 385,
    "district": 16
  },
  {
    "id": 15005,
    "bbox": [
      86.5369623460119,
      26.4945742041106,
      86.608240541125,
      26.6147030025619
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.57145726514554,
        26.56450917201016
      ]
    },
    "title": "Bode Barsain",
    "title_en": "Bode Barsain",
    "title_ne": "बोदेबरसाईन",
    "type": "Municipality",
    "code": "bodebarsainmun",
    "order": 386,
    "district": 16
  },
  {
    "id": 15009,
    "bbox": [
      86.8235748470894,
      26.5486789916271,
      86.9881390084924,
      26.7127211269546
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.89828509900062,
        26.636182471660888
      ]
    },
    "title": "Kanchanrup",
    "title_en": "Kanchanrup",
    "title_ne": "कञ्चनरुप",
    "type": "Municipality",
    "code": "kanchanrupmun",
    "order": 387,
    "district": 16
  },
  {
    "id": 15012,
    "bbox": [
      86.7143960524719,
      26.4821428431542,
      86.807934601662,
      26.5889897620126
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.76546160884469,
        26.535569552487722
      ]
    },
    "title": "Rajbiraj",
    "title_en": "Rajbiraj",
    "title_ne": "राजविराज",
    "type": "Municipality",
    "code": "rajbirajmun",
    "order": 388,
    "district": 16
  },
  {
    "id": 15014,
    "bbox": [
      86.8702635116679,
      26.668120183727,
      86.9841582018201,
      26.7665777587634
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.92736714266123,
        26.710714954657945
      ]
    },
    "title": "Saptakoshi",
    "title_en": "Saptakoshi",
    "title_ne": "सप्तकोशी",
    "type": "Municipality",
    "code": "saptakoshimun",
    "order": 389,
    "district": 16
  },
  {
    "id": 17012,
    "bbox": [
      85.907457338563,
      26.7616792628221,
      85.973413725655,
      26.834946855117
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.93424287605525,
        26.798226525206523
      ]
    },
    "title": "Lakshminiya",
    "title_en": "Lakshminiya",
    "title_ne": "लक्ष्मीनिया",
    "type": "Rural Municipality",
    "code": "laxminiyamun",
    "order": 390,
    "district": 17
  },
  {
    "id": 18007,
    "bbox": [
      85.7489987752943,
      26.6016636312785,
      85.8421328709692,
      26.6830892914394
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.79962664818788,
        26.646709917800415
      ]
    },
    "title": "Jaleswor",
    "title_en": "Jaleswor",
    "title_ne": "जलेश्वर",
    "type": "Municipality",
    "code": "jaleshwormun",
    "order": 391,
    "district": 18
  },
  {
    "id": 18015,
    "bbox": [
      85.6761975731952,
      26.8203294951715,
      85.7668694446926,
      26.9125842350686
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.72299789757014,
        26.86700354688775
      ]
    },
    "title": "Sonama",
    "title_en": "Sonama",
    "title_ne": "सोनमा",
    "type": "Rural Municipality",
    "code": "sonmamun",
    "order": 392,
    "district": 18
  },
  {
    "id": 22005,
    "bbox": [
      86.1513211508418,
      27.5621827496763,
      86.4275695087849,
      27.7735968047183
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.28309064186847,
        27.663564401173115
      ]
    },
    "title": "Jiri",
    "title_en": "Jiri",
    "title_ne": "जिरी",
    "type": "Municipality",
    "code": "jirimun",
    "order": 393,
    "district": 22
  },
  {
    "id": 29001,
    "bbox": [
      85.228015807203,
      28.0368854826769,
      85.8002225601112,
      28.3862845807188
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.50734351475305,
        28.21228552400856
      ]
    },
    "title": "Gosaikunda",
    "title_en": "Gosaikunda",
    "title_ne": "गोसाईकुण्ड",
    "type": "Rural Municipality",
    "code": "gosaikundamun",
    "order": 394,
    "district": 23
  },
  {
    "id": 28001,
    "bbox": [
      85.0120318225585,
      27.7606794016816,
      85.2048996631901,
      27.8910891731244
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.12286518943999,
        27.824968691249367
      ]
    },
    "title": "Belkotgadhi",
    "title_en": "Belkotgadhi",
    "title_ne": "बेलकोटगढी",
    "type": "Municipality",
    "code": "belkotgadhimun",
    "order": 395,
    "district": 25
  },
  {
    "id": 28003,
    "bbox": [
      85.3631923370623,
      27.8767354991326,
      85.4875773756626,
      28.0188812430838
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.42628610763575,
        27.93802595185437
      ]
    },
    "title": "Dupcheshwar",
    "title_en": "Dupcheshwar",
    "title_ne": "दुप्चेश्वर",
    "type": "Rural Municipality",
    "code": "dupcheshwormun",
    "order": 396,
    "district": 25
  },
  {
    "id": 28010,
    "bbox": [
      85.2011415517114,
      27.9051632232051,
      85.3115268401916,
      27.9877139420162
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.2525988832193,
        27.945382680835394
      ]
    },
    "title": "Suryagadhi",
    "title_en": "Suryagadhi",
    "title_ne": "सुर्यगढी",
    "type": "Rural Municipality",
    "code": "suryagadhimun",
    "order": 397,
    "district": 25
  },
  {
    "id": 32002,
    "bbox": [
      85.2788409555365,
      26.9716441507737,
      85.4508178035352,
      27.1173319620412
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.3957383757168,
        27.04443482848959
      ]
    },
    "title": "Brindaban",
    "title_en": "Brindaban",
    "title_ne": "बृन्दावन",
    "type": "Municipality",
    "code": "brindawanmun",
    "order": 398,
    "district": 32
  },
  {
    "id": 32005,
    "bbox": [
      85.2928785936023,
      26.8007152014298,
      85.3531107839556,
      26.866437726733
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.32252185003927,
        26.83836669850486
      ]
    },
    "title": "Durga Bhagwati",
    "title_en": "Durga Bhagwati",
    "title_ne": "दुर्गा भगवती",
    "type": "Rural Municipality",
    "code": "durgabhagawatimun",
    "order": 399,
    "district": 32
  },
  {
    "id": 32009,
    "bbox": [
      85.2062541451839,
      26.9965123658412,
      85.3258153963047,
      27.2329257106965
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.26957759976507,
        27.104939430760655
      ]
    },
    "title": "Gujara",
    "title_en": "Gujara",
    "title_ne": "गुजरा",
    "type": "Municipality",
    "code": "gujaramun",
    "order": 400,
    "district": 32
  },
  {
    "id": 32011,
    "bbox": [
      85.2179474898292,
      26.9472391773342,
      85.289002599086,
      27.0523396955285
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.25017991849543,
        26.995648061545417
      ]
    },
    "title": "Katahariya",
    "title_en": "Katahariya",
    "title_ne": "कटहरिया",
    "type": "Municipality",
    "code": "katahariyamun",
    "order": 401,
    "district": 32
  },
  {
    "id": 32014,
    "bbox": [
      85.1847243188812,
      26.8172761173924,
      85.2921014376522,
      26.8843368560473
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.23482328298343,
        26.854800541832468
      ]
    },
    "title": "Paroha",
    "title_en": "Paroha",
    "title_ne": "परोहा",
    "type": "Municipality",
    "code": "parohamun",
    "order": 402,
    "district": 32
  },
  {
    "id": 32015,
    "bbox": [
      85.1635849513693,
      26.9454399133862,
      85.2386251587819,
      27.1171864038681
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.20344867322662,
        27.020381339250857
      ]
    },
    "title": "Phatuwa Bijayapur",
    "title_en": "Phatuwa Bijayapur",
    "title_ne": "फतुवाबिजयपुर",
    "type": "Municipality",
    "code": "phatuwabijaypurmun",
    "order": 403,
    "district": 32
  },
  {
    "id": 33009,
    "bbox": [
      85.0095916880023,
      26.931374057581,
      85.0966013757457,
      27.032522226406
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.05782452141665,
        26.98251040432878
      ]
    },
    "title": "Mahagadhimai",
    "title_en": "Mahagadhimai",
    "title_ne": "महागढीमाई",
    "type": "Municipality",
    "code": "mahagadimaimun",
    "order": 404,
    "district": 33
  },
  {
    "id": 34006,
    "bbox": [
      84.6752754222771,
      27.0949129453934,
      84.7802703029994,
      27.1924886009746
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.72304465928313,
        27.13934797588044
      ]
    },
    "title": "Jagarnathpur",
    "title_en": "Jagarnathpur",
    "title_ne": "जगरनाथपुर",
    "type": "Rural Municipality",
    "code": "jagarnathpurmun",
    "order": 405,
    "district": 34
  },
  {
    "id": 39002,
    "bbox": [
      83.7036301817695,
      28.0592371692899,
      83.8185586238284,
      28.1490842766289
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.75730580113289,
        28.10231875888239
      ]
    },
    "title": "Arjunchaupari",
    "title_en": "Arjunchaupari",
    "title_ne": "अर्जुनचौपारी",
    "type": "Rural Municipality",
    "code": "arjunchauparimun",
    "order": 406,
    "district": 42
  },
  {
    "id": 39011,
    "bbox": [
      83.6637937606068,
      27.9194912072008,
      83.8669359841188,
      28.0507450418283
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.76688708060111,
        27.984367175281704
      ]
    },
    "title": "Waling",
    "title_en": "Waling",
    "title_ne": "वालिङ",
    "type": "Municipality",
    "code": "walingmun",
    "order": 407,
    "district": 42
  },
  {
    "id": 38007,
    "bbox": [
      83.9365798922003,
      27.8489163276144,
      84.1451708292531,
      27.9488747093206
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.05206569872,
        27.893198124498504
      ]
    },
    "title": "Ghiring",
    "title_en": "Ghiring",
    "title_ne": "घिरिङ",
    "type": "Rural Municipality",
    "code": "ghiringmun",
    "order": 408,
    "district": 43
  },
  {
    "id": 36006,
    "bbox": [
      84.6328370246592,
      27.7956057344879,
      84.7823916582415,
      27.9282509956538
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.70753666738524,
        27.859321625576822
      ]
    },
    "title": "Gandaki",
    "title_en": "Gandaki",
    "title_ne": "गण्डकी",
    "type": "Rural Municipality",
    "code": "gandakimun",
    "order": 409,
    "district": 44
  },
  {
    "id": 37002,
    "bbox": [
      84.3925820775848,
      28.1355614044535,
      84.6948324360448,
      28.449542591556
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.54612060054393,
        28.29273798086481
      ]
    },
    "title": "Dordi",
    "title_en": "Dordi",
    "title_ne": "दोर्दी",
    "type": "Rural Municipality",
    "code": "dordimun",
    "order": 410,
    "district": 45
  },
  {
    "id": 40005,
    "bbox": [
      84.109722535906,
      28.0944587382237,
      84.2294578893571,
      28.1950162581034
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.17315806724388,
        28.142385237196226
      ]
    },
    "title": "Rupa",
    "title_en": "Rupa",
    "title_ne": "रूपा",
    "type": "Rural Municipality",
    "code": "rupamun",
    "order": 411,
    "district": 46
  },
  {
    "id": 68011,
    "bbox": [
      81.1241643544257,
      29.5441553780091,
      81.4672916696453,
      29.8255543877923
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.29455908992882,
        29.66048138017094
      ]
    },
    "title": "Talkot",
    "title_en": "Talkot",
    "title_ne": "तलकोट",
    "type": "Rural Municipality",
    "code": "talkotmun",
    "order": 412,
    "district": 71
  },
  {
    "id": 48002,
    "bbox": [
      83.6101437947449,
      27.4263012184475,
      83.7260473598122,
      27.5022286884011
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.67109355043368,
        27.46504010380373
      ]
    },
    "title": "Palhi Nandan",
    "title_en": "Palhi Nandan",
    "title_ne": "पाल्हीनन्दन",
    "type": "Rural Municipality",
    "code": "palhinandanmun",
    "order": 413,
    "district": 482
  },
  {
    "id": 48003,
    "bbox": [
      83.7453477462495,
      27.3786054669917,
      83.8391818502196,
      27.4934821034386
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.79069839638838,
        27.437712828585322
      ]
    },
    "title": "Pratappur",
    "title_en": "Pratappur",
    "title_ne": "प्रतापपुर",
    "type": "Rural Municipality",
    "code": "pratappurmun",
    "order": 414,
    "district": 482
  },
  {
    "id": 48004,
    "bbox": [
      83.5866825318672,
      27.4700936033112,
      83.7177367377684,
      27.584379825933
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.64899333567668,
        27.52687566196347
      ]
    },
    "title": "Ramgram",
    "title_en": "Ramgram",
    "title_ne": "रामग्राम",
    "type": "Municipality",
    "code": "ramgrammun",
    "order": 415,
    "district": 482
  },
  {
    "id": 48006,
    "bbox": [
      83.5717699047103,
      27.5403766312063,
      83.7483977931717,
      27.6933376341297
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.66561857432018,
        27.617973394215145
      ]
    },
    "title": "Sunwal",
    "title_en": "Sunwal",
    "title_ne": "सुनवल",
    "type": "Municipality",
    "code": "sunwalmun",
    "order": 416,
    "district": 482
  },
  {
    "id": 48007,
    "bbox": [
      83.8120242700298,
      27.3467212103096,
      83.9063794167129,
      27.5106589214579
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.85717689231613,
        27.42275137140536
      ]
    },
    "title": "Susta",
    "title_en": "Susta",
    "title_ne": "सुस्ता",
    "type": "Rural Municipality",
    "code": "sustamun",
    "order": 417,
    "district": 482
  },
  {
    "id": 8004,
    "bbox": [
      87.4686472523333,
      27.1862436301119,
      87.566612605789,
      27.297087751069
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.52090063998794,
        27.244228830682538
      ]
    },
    "title": "Menchayam",
    "title_en": "Menchayam",
    "title_ne": "मेन्छयायेम",
    "type": "Rural Municipality",
    "code": "menchhayayemmun",
    "order": 418,
    "district": 8
  },
  {
    "id": 10001,
    "bbox": [
      86.9446888358735,
      26.8864128838298,
      87.1165187288242,
      27.0580827591981
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.02139644209544,
        26.964873266704167
      ]
    },
    "title": "Aamchowk",
    "title_en": "Aamchowk",
    "title_ne": "आमचोक",
    "type": "Rural Municipality",
    "code": "aamchowkmun",
    "order": 419,
    "district": 9
  },
  {
    "id": 10005,
    "bbox": [
      87.0907964742787,
      27.0436059826701,
      87.2170658930753,
      27.2026030340774
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.14504183513664,
        27.125404106807583
      ]
    },
    "title": "Pauwadungma",
    "title_en": "Pauwadungma",
    "title_ne": "पौवादुङमा",
    "type": "Rural Municipality",
    "code": "pauwadungmamun",
    "order": 420,
    "district": 9
  },
  {
    "id": 6008,
    "bbox": [
      87.0798247838477,
      26.4372047244255,
      87.1543462282901,
      26.5484346504997
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.11346389956697,
        26.498813546984085
      ]
    },
    "title": "Harinagara",
    "title_en": "Harinagara",
    "title_ne": "हरिनगर",
    "type": "Rural Municipality",
    "code": "harinagaramun",
    "order": 421,
    "district": 6
  },
  {
    "id": 13005,
    "bbox": [
      86.8372677787148,
      26.8971046539541,
      86.9729982108118,
      27.0437987494298
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.91389619722133,
        26.97348859401397
      ]
    },
    "title": "Jantedhunga",
    "title_en": "Jantedhunga",
    "title_ne": "जन्तेढुङ्गा",
    "type": "Rural Municipality",
    "code": "jantedhungamun",
    "order": 422,
    "district": 12
  },
  {
    "id": 51002,
    "bbox": [
      83.1701173252572,
      27.9323004086273,
      83.3027536016738,
      28.0877122746593
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.22558135407107,
        27.995286017356417
      ]
    },
    "title": "Chhatradev",
    "title_en": "Chhatradev",
    "title_ne": "छत्रदेव",
    "type": "Rural Municipality",
    "code": "chhatradevmun",
    "order": 423,
    "district": 40
  },
  {
    "id": 51004,
    "bbox": [
      83.1615541318532,
      27.8134015387784,
      83.3305163895699,
      27.9567568104071
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.24466342526405,
        27.887154113986757
      ]
    },
    "title": "Panini",
    "title_en": "Panini",
    "title_ne": "पाणिनी",
    "type": "Rural Municipality",
    "code": "paninimun",
    "order": 424,
    "district": 40
  },
  {
    "id": 51005,
    "bbox": [
      83.055158629686,
      27.8902475496037,
      83.2183524950944,
      28.0405184582944
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.13776985429357,
        27.973809725978985
      ]
    },
    "title": "Sandhikharka",
    "title_en": "Sandhikharka",
    "title_ne": "सन्धिखर्क",
    "type": "Municipality",
    "code": "sandhikharkamun",
    "order": 425,
    "district": 40
  },
  {
    "id": 51006,
    "bbox": [
      82.748381877681,
      27.7504094860032,
      83.2586028423206,
      27.9326164204714
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.0140163460953,
        27.841177747180197
      ]
    },
    "title": "Sitganga",
    "title_en": "Sitganga",
    "title_ne": "शितगंगा",
    "type": "Municipality",
    "code": "shitagangamun",
    "order": 426,
    "district": 40
  },
  {
    "id": 44005,
    "bbox": [
      83.6577065227584,
      28.2220259335894,
      83.8228476564755,
      28.3997598734657
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.72506688670636,
        28.2997317772644
      ]
    },
    "title": "Modi",
    "title_en": "Modi",
    "title_ne": "मोदी",
    "type": "Rural Municipality",
    "code": "modimun",
    "order": 427,
    "district": 51
  },
  {
    "id": 44006,
    "bbox": [
      83.6146116192703,
      28.0054975471629,
      83.7127082828267,
      28.090321144979
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.66591478924346,
        28.044527124974575
      ]
    },
    "title": "Painyu",
    "title_en": "Painyu",
    "title_ne": "पैयूं",
    "type": "Rural Municipality",
    "code": "paiyunmun",
    "order": 428,
    "district": 51
  },
  {
    "id": 52001,
    "bbox": [
      82.8061726151515,
      27.9199406886385,
      83.0177900176874,
      28.056455087083
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.92232717885261,
        27.992108491302393
      ]
    },
    "title": "Airawati",
    "title_en": "Airawati",
    "title_ne": "ऐरावती",
    "type": "Rural Municipality",
    "code": "airawatimun",
    "order": 429,
    "district": 53
  },
  {
    "id": 52002,
    "bbox": [
      82.9384968962745,
      28.1706789917741,
      83.0974939704633,
      28.3337412452926
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.0198926490865,
        28.254048311016874
      ]
    },
    "title": "Gaumukhi",
    "title_en": "Gaumukhi",
    "title_ne": "गौमुखी",
    "type": "Rural Municipality",
    "code": "gaumukhimun",
    "order": 430,
    "district": 53
  },
  {
    "id": 52005,
    "bbox": [
      82.6837088233078,
      27.9906050755716,
      82.8347039189062,
      28.1036825116799
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.75933657162325,
        28.044788388236572
      ]
    },
    "title": "Mandavi",
    "title_en": "Mandavi",
    "title_ne": "माण्डवी",
    "type": "Rural Municipality",
    "code": "mandavimun",
    "order": 431,
    "district": 53
  },
  {
    "id": 52007,
    "bbox": [
      82.7765836065499,
      28.0666025225922,
      82.9591042890426,
      28.1886940450089
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.85113015234762,
        28.125594990749523
      ]
    },
    "title": "Pyuthan",
    "title_en": "Pyuthan",
    "title_ne": "प्यूठान",
    "type": "Municipality",
    "code": "pyuthanmun",
    "order": 432,
    "district": 53
  },
  {
    "id": 52009,
    "bbox": [
      82.5882575185223,
      28.0522543304278,
      82.7995134179959,
      28.2115734388399
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.69405436077257,
        28.134056419187065
      ]
    },
    "title": "Sworgadwary",
    "title_en": "Sworgadwary",
    "title_ne": "स्वर्गद्वारी",
    "type": "Municipality",
    "code": "swargadwarimun",
    "order": 433,
    "district": 53
  },
  {
    "id": 53006,
    "bbox": [
      82.350364119718,
      28.3625893006967,
      82.4793939614106,
      28.5287756760085
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.42120567976879,
        28.445147151182724
      ]
    },
    "title": "Sukidaha",
    "title_en": "Sukidaha",
    "title_ne": "गंगादेव",
    "type": "Rural Municipality",
    "code": "sukidahamun",
    "order": 434,
    "district": 54
  },
  {
    "id": 53010,
    "bbox": [
      82.3629839113531,
      28.2099927121791,
      82.587224910847,
      28.3743858253477
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.46665594208942,
        28.29651673998284
      ]
    },
    "title": "Tribeni",
    "title_en": "Tribeni",
    "title_ne": "त्रिवेणी",
    "type": "Rural Municipality",
    "code": "trivenimunrolpa",
    "order": 435,
    "district": 54
  },
  {
    "id": 55001,
    "bbox": [
      82.2346582598236,
      28.4036175085313,
      82.4183015750511,
      28.5409754071743
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.32716595549898,
        28.475660467854606
      ]
    },
    "title": "Bagchaur",
    "title_en": "Bagchaur",
    "title_ne": "बागचौर",
    "type": "Municipality",
    "code": "bagchaurmun",
    "order": 436,
    "district": 55
  },
  {
    "id": 55008,
    "bbox": [
      82.1051139562624,
      28.4810457467658,
      82.2810918096131,
      28.6265945821464
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.19461907523221,
        28.558890838561677
      ]
    },
    "title": "Kumakh",
    "title_en": "Kumakh",
    "title_ne": "कुमाख",
    "type": "Rural Municipality",
    "code": "kumakhmalikamun",
    "order": 437,
    "district": 55
  },
  {
    "id": 69006,
    "bbox": [
      81.2295986880834,
      29.2088762185201,
      81.4142904393609,
      29.3251430104805
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.31928884089795,
        29.262579055343007
      ]
    },
    "title": "Mellekh",
    "title_en": "Mellekh",
    "title_ne": "मेल्लेख",
    "type": "Rural Municipality",
    "code": "mellekhmun",
    "order": 438,
    "district": 69
  },
  {
    "id": 69007,
    "bbox": [
      81.366077946334,
      29.0258980577579,
      81.5655587918989,
      29.1730174683122
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.45232078404835,
        29.108208666621827
      ]
    },
    "title": "Panchadewal Binayak",
    "title_en": "Panchadewal Binayak",
    "title_ne": "पंचदेवल विनायक",
    "type": "Municipality",
    "code": "panchadewalbinayakmun",
    "order": 439,
    "district": 69
  },
  {
    "id": 69008,
    "bbox": [
      81.3377468312031,
      29.1170916938785,
      81.4996279088198,
      29.2874389854582
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.41978810095519,
        29.20366646728735
      ]
    },
    "title": "Ramaroshan",
    "title_en": "Ramaroshan",
    "title_ne": "रामारोशन",
    "type": "Rural Municipality",
    "code": "ramaroshanmun",
    "order": 440,
    "district": 69
  },
  {
    "id": 67001,
    "bbox": [
      81.3829292240286,
      29.3461568310747,
      81.5925213008428,
      29.5339621461177
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.49578703828587,
        29.43265504641257
      ]
    },
    "title": "Badimalika",
    "title_en": "Badimalika",
    "title_ne": "बडिमालिका",
    "type": "Municipality",
    "code": "badimalikamun",
    "order": 441,
    "district": 70
  },
  {
    "id": 67002,
    "bbox": [
      81.2530936871659,
      29.3016655584316,
      81.3939316800388,
      29.4197259254004
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.31853956294665,
        29.362396725463366
      ]
    },
    "title": "Budhiganga",
    "title_en": "Budhiganga",
    "title_ne": "बुढीगंगा",
    "type": "Municipality",
    "code": "budhigangamunbajura",
    "order": 442,
    "district": 70
  },
  {
    "id": 67003,
    "bbox": [
      81.536531494649,
      29.4137702020101,
      81.7170402711429,
      29.6616042797291
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.61743269642464,
        29.529497974592786
      ]
    },
    "title": "Budhinanda",
    "title_en": "Budhinanda",
    "title_ne": "बुढीनन्दा",
    "type": "Municipality",
    "code": "budhinandamun",
    "order": 443,
    "district": 70
  },
  {
    "id": 67004,
    "bbox": [
      81.1903311908946,
      29.3370913671379,
      81.4172193671395,
      29.4599320250012
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.29745175556378,
        29.406985468461183
      ]
    },
    "title": "Khaptad Chhededaha",
    "title_en": "Khaptad Chhededaha",
    "title_ne": "खप्तड छेडेदह",
    "type": "Rural Municipality",
    "code": "chhededahamun",
    "order": 444,
    "district": 70
  },
  {
    "id": 67005,
    "bbox": [
      81.2909061480859,
      29.444550996054,
      81.5727660916667,
      29.6924710051713
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.4493928382104,
        29.559241892448945
      ]
    },
    "title": "Gaumul",
    "title_en": "Gaumul",
    "title_ne": "गौमुल",
    "type": "Rural Municipality",
    "code": "gaumulmun",
    "order": 445,
    "district": 70
  },
  {
    "id": 67006,
    "bbox": [
      81.5056010841917,
      29.4742458473275,
      81.7995318224877,
      29.9492815105896
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.65827073378287,
        29.75170398267015
      ]
    },
    "title": "Himali",
    "title_en": "Himali",
    "title_ne": "हिमाली",
    "type": "Rural Municipality",
    "code": "himalimun",
    "order": 446,
    "district": 70
  },
  {
    "id": 67007,
    "bbox": [
      81.5584065848257,
      29.3169128670396,
      81.7463970718955,
      29.4820658744289
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.66066143078449,
        29.39188168075594
      ]
    },
    "title": "Jagannath",
    "title_en": "Jagannath",
    "title_ne": "जगन्नाथ",
    "type": "Rural Municipality",
    "code": "pandavgufamun",
    "order": 447,
    "district": 70
  },
  {
    "id": 67009,
    "bbox": [
      81.3030147627845,
      29.2719043341708,
      81.5593226865686,
      29.3985860710003
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.41978160826767,
        29.32930745689695
      ]
    },
    "title": "Tribeni",
    "title_en": "Tribeni",
    "title_ne": "त्रिवेणी",
    "type": "Municipality",
    "code": "trivenimunbajura",
    "order": 448,
    "district": 70
  },
  {
    "id": 68012,
    "bbox": [
      80.9114745040886,
      29.3975548893251,
      81.1335090565087,
      29.5046777093753
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.00678012822682,
        29.44970202108958
      ]
    },
    "title": "Thalara",
    "title_en": "Thalara",
    "title_ne": "थलारा",
    "type": "Rural Municipality",
    "code": "thalaramun",
    "order": 449,
    "district": 71
  },
  {
    "id": 74001,
    "bbox": [
      80.341449188886,
      29.4672990869137,
      80.510216587737,
      29.6202471867386
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.43063209577963,
        29.53481811101822
      ]
    },
    "title": "Dasharathchanda",
    "title_en": "Dasharathchanda",
    "title_ne": "दशरथचन्द",
    "type": "Municipality",
    "code": "dasharathchandmun",
    "order": 450,
    "district": 73
  },
  {
    "id": 74002,
    "bbox": [
      80.5051775991427,
      29.613171724863,
      80.7960200912006,
      29.7079833485134
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.64773398441238,
        29.665263414244613
      ]
    },
    "title": "Dilasaini",
    "title_en": "Dilasaini",
    "title_ne": "डीलासैनी",
    "type": "Rural Municipality",
    "code": "dilasainimun",
    "order": 451,
    "district": 73
  },
  {
    "id": 74003,
    "bbox": [
      80.4231140733333,
      29.5426148467434,
      80.617603181877,
      29.6409345290568
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.52834607439273,
        29.596928884448918
      ]
    },
    "title": "Dogadakedar",
    "title_en": "Dogadakedar",
    "title_ne": "दोगडाकेदार",
    "type": "Rural Municipality",
    "code": "dogdakedarmun",
    "order": 452,
    "district": 73
  },
  {
    "id": 74004,
    "bbox": [
      80.3450132935904,
      29.3473674547902,
      80.493735966142,
      29.4922095374086
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.41998037637953,
        29.429231634205827
      ]
    },
    "title": "Melauli",
    "title_en": "Melauli",
    "title_ne": "मेलौली",
    "type": "Municipality",
    "code": "melaulimun",
    "order": 453,
    "district": 73
  },
  {
    "id": 74005,
    "bbox": [
      80.2416892509416,
      29.3694519049801,
      80.4175186720894,
      29.5235503047301
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.31898377237322,
        29.4474520191734
      ]
    },
    "title": "Pancheshwar",
    "title_en": "Pancheshwar",
    "title_ne": "पन्चेश्वर",
    "type": "Rural Municipality",
    "code": "pancheshwormun",
    "order": 454,
    "district": 73
  },
  {
    "id": 74006,
    "bbox": [
      80.4578952639364,
      29.3825659881256,
      80.718628890737,
      29.5186144581644
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.57832986119419,
        29.445220951481744
      ]
    },
    "title": "Patan",
    "title_en": "Patan",
    "title_ne": "पाटन",
    "type": "Municipality",
    "code": "patanmun",
    "order": 455,
    "district": 73
  },
  {
    "id": 54003,
    "bbox": [
      82.1847362122291,
      28.579365443861,
      82.3563705030908,
      28.6915710563672
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.26230680692623,
        28.635827967729146
      ]
    },
    "title": "Chaurjahari",
    "title_en": "Chaurjahari",
    "title_ne": "चौरजहारी",
    "type": "Municipality",
    "code": "chaurjaharimun",
    "order": 456,
    "district": 542
  },
  {
    "id": 32008,
    "bbox": [
      85.2468759760459,
      26.7533364671791,
      85.3102369374063,
      26.8033257857193
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.27477021857963,
        26.778214138064726
      ]
    },
    "title": "Gaur",
    "title_en": "Gaur",
    "title_ne": "गौर",
    "type": "Municipality",
    "code": "gaurmun",
    "order": 457,
    "district": 32
  },
  {
    "id": 68001,
    "bbox": [
      80.746080800933,
      29.4414619879652,
      80.9106571486773,
      29.5680953057417
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.83345344493387,
        29.516592175719737
      ]
    },
    "title": "Bithadchir",
    "title_en": "Bithadchir",
    "title_ne": "वित्थडचिर",
    "type": "Rural Municipality",
    "code": "bitthadchirmun",
    "order": 458,
    "district": 71
  },
  {
    "id": 68002,
    "bbox": [
      80.7619835067837,
      29.5433676605602,
      81.1037090453882,
      29.8352748903766
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.92967711108544,
        29.660222457752813
      ]
    },
    "title": "Bungal",
    "title_en": "Bungal",
    "title_ne": "बुंगल",
    "type": "Municipality",
    "code": "bungalmun",
    "order": 459,
    "district": 71
  },
  {
    "id": 68003,
    "bbox": [
      80.9863622115441,
      29.4887564724755,
      81.1315451039194,
      29.6316665179281
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.0570445682574,
        29.559358034927676
      ]
    },
    "title": "Chabispathivera",
    "title_en": "Chabispathivera",
    "title_ne": "छबिसपाथिभेरा",
    "type": "Rural Municipality",
    "code": "chhabispathiveramun",
    "order": 460,
    "district": 71
  },
  {
    "id": 68004,
    "bbox": [
      80.9531559158735,
      29.4779578416768,
      81.0554984753978,
      29.5948815224537
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.00439472995686,
        29.52829999914593
      ]
    },
    "title": "Durgathali",
    "title_en": "Durgathali",
    "title_ne": "दुर्गाथली",
    "type": "Rural Municipality",
    "code": "durgathalimun",
    "order": 461,
    "district": 71
  },
  {
    "id": 68005,
    "bbox": [
      81.1128978828724,
      29.467916557313,
      81.311271206438,
      29.6350331392818
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.19183535622963,
        29.540211169162763
      ]
    },
    "title": "JayaPrithivi",
    "title_en": "JayaPrithivi",
    "title_ne": "जयपृथ्वी",
    "type": "Municipality",
    "code": "jayaprithvimun",
    "order": 462,
    "district": 71
  },
  {
    "id": 68006,
    "bbox": [
      81.0006150412615,
      29.6588126492588,
      81.5650144434031,
      30.0543162975233
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.29848812050446,
        29.867530163770486
      ]
    },
    "title": "Saipal",
    "title_en": "Saipal",
    "title_ne": "साइपाल",
    "type": "Rural Municipality",
    "code": "kandamun",
    "order": 463,
    "district": 71
  },
  {
    "id": 68007,
    "bbox": [
      80.8587932253466,
      29.4449057566981,
      81.0135694348254,
      29.5782911655761
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.93244328623229,
        29.513318424808507
      ]
    },
    "title": "Kedarseu",
    "title_en": "Kedarseu",
    "title_ne": "केदारस्युँ",
    "type": "Rural Municipality",
    "code": "kedarasyumun",
    "order": 464,
    "district": 71
  },
  {
    "id": 68008,
    "bbox": [
      81.0877406535241,
      29.4106312060149,
      81.3077457749218,
      29.505705723926
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.19597357910072,
        29.454879987687942
      ]
    },
    "title": "Khaptadchhanna",
    "title_en": "Khaptadchhanna",
    "title_ne": "खप्तडछान्ना",
    "type": "Rural Municipality",
    "code": "khaptadchhannamun",
    "order": 465,
    "district": 71
  },
  {
    "id": 68010,
    "bbox": [
      81.02235326218,
      29.5662957989906,
      81.2229144987075,
      29.8228749221146
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.1251549881934,
        29.678363811148138
      ]
    },
    "title": "Surma",
    "title_en": "Surma",
    "title_ne": "सूर्मा",
    "type": "Rural Municipality",
    "code": "surmamun",
    "order": 466,
    "district": 71
  },
  {
    "id": 7001,
    "bbox": [
      87.4016841666851,
      26.8570022779879,
      87.5801119477008,
      26.9856142769351
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.47508009884316,
        26.9142195069321
      ]
    },
    "title": "Chaubise",
    "title_en": "Chaubise",
    "title_ne": "चौबिसे",
    "type": "Rural Municipality",
    "code": "choubisemun",
    "order": 467,
    "district": 7
  },
  {
    "id": 7003,
    "bbox": [
      87.2715357716471,
      26.9172949347087,
      87.3826107733178,
      27.049318097441
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.32841461756054,
        26.983257910629447
      ]
    },
    "title": "Dhankuta",
    "title_en": "Dhankuta",
    "title_ne": "धनकुटा",
    "type": "Municipality",
    "code": "dhankutamun",
    "order": 468,
    "district": 7
  },
  {
    "id": 7004,
    "bbox": [
      87.148296970323,
      26.9060020979325,
      87.2813835663817,
      27.0127546203059
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.21631757165184,
        26.954917053979578
      ]
    },
    "title": "Shahidbhumi",
    "title_en": "Shahidbhumi",
    "title_ne": "सहिदभूमि",
    "type": "Rural Municipality",
    "code": "khalsachhintangshahidbhumimun",
    "order": 469,
    "district": 7
  },
  {
    "id": 7005,
    "bbox": [
      87.2466891167527,
      27.0780723877644,
      87.4067503736783,
      27.1909121163734
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.33013836063165,
        27.137050785092086
      ]
    },
    "title": "Mahalaxmi",
    "title_en": "Mahalaxmi",
    "title_ne": "महालक्ष्मी",
    "type": "Municipality",
    "code": "mahalaxmimundhankuta",
    "order": 470,
    "district": 7
  },
  {
    "id": 7006,
    "bbox": [
      87.178759106535,
      26.9814001014036,
      87.3243208580872,
      27.128206670531
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.25188476036243,
        27.052543538010294
      ]
    },
    "title": "Pakhribas",
    "title_en": "Pakhribas",
    "title_ne": "पाख्रिवास",
    "type": "Municipality",
    "code": "pakhribasmun",
    "order": 471,
    "district": 7
  },
  {
    "id": 13002,
    "bbox": [
      86.7549317296969,
      26.8722588968174,
      86.9168150675101,
      27.0089198812835
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.82316882733001,
        26.93509009604331
      ]
    },
    "title": "Barahapokhari",
    "title_en": "Barahapokhari",
    "title_ne": "बराहपोखरी",
    "type": "Rural Municipality",
    "code": "barahapokharimun",
    "order": 472,
    "district": 12
  },
  {
    "id": 13003,
    "bbox": [
      86.6984714822436,
      27.0380042054442,
      86.8900283629696,
      27.1607850272597
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.78878926677284,
        27.103880249408988
      ]
    },
    "title": "Diprung Chuichumma",
    "title_en": "Diprung Chuichumma",
    "title_ne": "दिप्रुङ चुइचुम्मा",
    "type": "Rural Municipality",
    "code": "diprungmun",
    "order": 473,
    "district": 12
  },
  {
    "id": 13004,
    "bbox": [
      86.4262692810582,
      27.0883668983966,
      86.7511685133222,
      27.2466121122206
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.60399330209121,
        27.166726658661233
      ]
    },
    "title": "Halesi Tuwachung",
    "title_en": "Halesi Tuwachung",
    "title_ne": "हलेसी तुवाचुङ",
    "type": "Municipality",
    "code": "halesituwachungmun",
    "order": 474,
    "district": 12
  },
  {
    "id": 13006,
    "bbox": [
      86.7647440145126,
      27.2655789793672,
      86.9853374337749,
      27.4355250368429
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.88405525252742,
        27.344864048931345
      ]
    },
    "title": "Kepilasagadhi",
    "title_en": "Kepilasagadhi",
    "title_ne": "केपिलासगढी",
    "type": "Rural Municipality",
    "code": "kepilasgadhimun",
    "order": 475,
    "district": 12
  },
  {
    "id": 13007,
    "bbox": [
      86.7267305726472,
      26.9744046864458,
      86.9646390498774,
      27.1149647802194
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.85059681079355,
        27.04823271667467
      ]
    },
    "title": "Khotehang",
    "title_en": "Khotehang",
    "title_ne": "खोटेहाङ",
    "type": "Rural Municipality",
    "code": "khotehangmun",
    "order": 476,
    "district": 12
  },
  {
    "id": 13009,
    "bbox": [
      86.6905248881476,
      27.1447309721092,
      86.9134755973592,
      27.3228122192389
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.80263753312457,
        27.233125265668175
      ]
    },
    "title": "Diktel Rupakot Majhuwagadhi",
    "title_en": "Diktel Rupakot Majhuwagadhi",
    "title_ne": "दिक्तेल रुपाकोट मझुवागढी",
    "type": "Municipality",
    "code": "rupakotmajhuwagadhimun",
    "order": 477,
    "district": 12
  },
  {
    "id": 13010,
    "bbox": [
      86.8006287069777,
      27.1103057051018,
      86.929688377748,
      27.2503155387033
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.88093322594116,
        27.172400529922946
      ]
    },
    "title": "Sakela",
    "title_en": "Sakela",
    "title_ne": "साकेला",
    "type": "Rural Municipality",
    "code": "sakelamun",
    "order": 478,
    "district": 12
  },
  {
    "id": 22002,
    "bbox": [
      85.9342029578664,
      27.6131055775158,
      86.1061613721105,
      27.745257695182
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.01806083627322,
        27.687083548013796
      ]
    },
    "title": "Bhimeshwor",
    "title_en": "Bhimeshwor",
    "title_ne": "भीमेश्वर",
    "type": "Municipality",
    "code": "bhimeshwormun",
    "order": 479,
    "district": 22
  },
  {
    "id": 45009,
    "bbox": [
      83.1514414559767,
      28.363673819414,
      83.3004731645419,
      28.5138562302625
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.22315146578276,
        28.4368987387185
      ]
    },
    "title": "Taman Khola",
    "title_en": "Taman Khola",
    "title_ne": "तमानखोला",
    "type": "Rural Municipality",
    "code": "tamankholamun",
    "order": 480,
    "district": 50
  },
  {
    "id": 56008,
    "bbox": [
      82.6004559971574,
      27.8182254800336,
      82.8101889369688,
      27.9204158894211
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.69947824084782,
        27.867598573798634
      ]
    },
    "title": "Rapti",
    "title_en": "Rapti",
    "title_ne": "राप्ती",
    "type": "Rural Municipality",
    "code": "raptimundang",
    "order": 481,
    "district": 52
  },
  {
    "id": 55005,
    "bbox": [
      82.1015147867129,
      28.417686083286,
      82.2778425107042,
      28.5284766405817
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.17933504593464,
        28.46708617710596
      ]
    },
    "title": "Siddha Kumakh",
    "title_en": "Siddha Kumakh",
    "title_ne": "सिद्ध कुमाख",
    "type": "Rural Municipality",
    "code": "dhorchaurmun",
    "order": 482,
    "district": 55
  },
  {
    "id": 66005,
    "bbox": [
      81.7736575991612,
      29.6741292778458,
      82.043777327604,
      29.9058674929645
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.93085095131867,
        29.79246141018428
      ]
    },
    "title": "Sarkegad",
    "title_en": "Sarkegad",
    "title_ne": "सर्केगाड",
    "type": "Rural Municipality",
    "code": "sarkegadmun",
    "order": 483,
    "district": 59
  },
  {
    "id": 66007,
    "bbox": [
      81.6970668011999,
      29.6049248741076,
      81.8383671620051,
      29.8018296638178
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.75771970163477,
        29.6847204420491
      ]
    },
    "title": "Tanjakot",
    "title_en": "Tanjakot",
    "title_ne": "ताँजाकोट",
    "type": "Rural Municipality",
    "code": "tajakotmun",
    "order": 484,
    "district": 59
  },
  {
    "id": 57003,
    "bbox": [
      81.537763257624,
      28.0246599943307,
      81.6724200247614,
      28.1478921464724
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.60289218506502,
        28.090803903651217
      ]
    },
    "title": "Janki",
    "title_en": "Janki",
    "title_ne": "जानकी",
    "type": "Rural Municipality",
    "code": "janakimunbanke",
    "order": 485,
    "district": 66
  },
  {
    "id": 57006,
    "bbox": [
      81.7511024046336,
      27.8537284929633,
      81.9617879750461,
      27.9975522900271
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.86168825182365,
        27.927947233788128
      ]
    },
    "title": "Narainapur",
    "title_en": "Narainapur",
    "title_ne": "नरैनापुर",
    "type": "Rural Municipality",
    "code": "narainapurmun",
    "order": 486,
    "district": 66
  },
  {
    "id": 75007,
    "bbox": [
      80.6654979054833,
      29.6840902595723,
      80.9881498717056,
      29.7981540567914
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.81988256658141,
        29.73936475446494
      ]
    },
    "title": "Marma",
    "title_en": "Marma",
    "title_ne": "मार्मा",
    "type": "Rural Municipality",
    "code": "marmamun",
    "order": 487,
    "district": 72
  },
  {
    "id": 75008,
    "bbox": [
      80.5592236795366,
      29.7210573382739,
      80.7498810205942,
      29.8754123633183
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.66511219704977,
        29.794071281268913
      ]
    },
    "title": "Naugad",
    "title_en": "Naugad",
    "title_ne": "नौगाड",
    "type": "Rural Municipality",
    "code": "naugadmun",
    "order": 488,
    "district": 72
  },
  {
    "id": 68099,
    "bbox": [
      81.024744003798,
      29.3909403159995,
      81.2271100558758,
      29.4659667081932
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.11291151151501,
        29.424076840051214
      ]
    },
    "title": "Khaptad National Park",
    "title_en": "Khaptad National Park",
    "title_ne": "खप्तड राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 489,
    "district": 71
  },
  {
    "id": 75009,
    "bbox": [
      80.4593296034022,
      29.6529362828677,
      80.6826597340051,
      29.7596920172642
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.56971923210172,
        29.709222715383625
      ]
    },
    "title": "Shailyashikhar",
    "title_en": "Shailyashikhar",
    "title_ne": "शैल्यशिखर",
    "type": "Municipality",
    "code": "shailyashikharmun",
    "order": 490,
    "district": 72
  },
  {
    "id": 74007,
    "bbox": [
      80.5855362162512,
      29.5299767057964,
      80.7908818252363,
      29.6796404039794
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.69975760984654,
        29.59945880203419
      ]
    },
    "title": "Purchaudi",
    "title_en": "Purchaudi",
    "title_ne": "पुर्चौडी",
    "type": "Municipality",
    "code": "purchaudimun",
    "order": 491,
    "district": 73
  },
  {
    "id": 14002,
    "bbox": [
      86.7689162891061,
      26.690586869902,
      86.9925369663533,
      26.907733909225
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.88031113166447,
        26.80880549413736
      ]
    },
    "title": "Chaudandigadhi",
    "title_en": "Chaudandigadhi",
    "title_ne": "चौदण्डीगढी",
    "type": "Municipality",
    "code": "chaudandigadhimun",
    "order": 492,
    "district": 14
  },
  {
    "id": 14005,
    "bbox": [
      86.5727477035857,
      27.0264482468521,
      86.7112961955053,
      27.1524548688327
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.64094398104162,
        27.087218376455002
      ]
    },
    "title": "Limchunbung",
    "title_en": "Limchunbung",
    "title_ne": "लिम्चुङबुङ",
    "type": "Rural Municipality",
    "code": "sunkoshimunudayapur",
    "order": 493,
    "district": 14
  },
  {
    "id": 58004,
    "bbox": [
      81.1455134204319,
      28.4049794410694,
      81.2516517553202,
      28.593953478811
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.20066714535022,
        28.50161202759476
      ]
    },
    "title": "Geruwa",
    "title_en": "Geruwa",
    "title_ne": "गेरुवा",
    "type": "Rural Municipality",
    "code": "geruwamun",
    "order": 494,
    "district": 65
  },
  {
    "id": 58008,
    "bbox": [
      81.2216959788063,
      28.365013675466,
      81.3514235559157,
      28.5221262450165
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.29606266304471,
        28.442349431379807
      ]
    },
    "title": "Thakurbaba",
    "title_en": "Thakurbaba",
    "title_ne": "ठाकुरबाबा",
    "type": "Municipality",
    "code": "thakurbabamun",
    "order": 495,
    "district": 65
  },
  {
    "id": 67008,
    "bbox": [
      81.7059204846346,
      29.3421947768347,
      81.8082221152366,
      29.5053715743192
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.75609207047718,
        29.437027474313382
      ]
    },
    "title": "Swami Kartik",
    "title_en": "Swami Kartik",
    "title_ne": "स्वामीकार्तिक खापर",
    "type": "Rural Municipality",
    "code": "swamikartikmun",
    "order": 496,
    "district": 70
  },
  {
    "id": 75001,
    "bbox": [
      80.7215006755301,
      29.7406120611551,
      81.0710328168821,
      29.9930824991108
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.90550517451166,
        29.860613821957692
      ]
    },
    "title": "Apihimal",
    "title_en": "Apihimal",
    "title_ne": "अपिहिमाल",
    "type": "Rural Municipality",
    "code": "apihimalmun",
    "order": 497,
    "district": 72
  },
  {
    "id": 75002,
    "bbox": [
      80.5697800742316,
      29.8686698632144,
      81.1087482447345,
      30.246722785497
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.89020737231554,
        30.055699405889698
      ]
    },
    "title": "Byas",
    "title_en": "Byas",
    "title_ne": "व्याँस",
    "type": "Rural Municipality",
    "code": "vyansmun",
    "order": 498,
    "district": 72
  },
  {
    "id": 75003,
    "bbox": [
      80.5567907566158,
      29.8477305984394,
      80.6788732901516,
      29.9354141103381
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.6158000706363,
        29.885689885172855
      ]
    },
    "title": "Dunhu",
    "title_en": "Dunhu",
    "title_ne": "दुहुँ",
    "type": "Rural Municipality",
    "code": "duhunmun",
    "order": 499,
    "district": 72
  },
  {
    "id": 75004,
    "bbox": [
      80.3834010411912,
      29.6050155964933,
      80.5281012651592,
      29.7096492098996
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.45701560453405,
        29.659712278467353
      ]
    },
    "title": "Lekam",
    "title_en": "Lekam",
    "title_ne": "लेकम",
    "type": "Rural Municipality",
    "code": "lekammun",
    "order": 500,
    "district": 72
  },
  {
    "id": 74008,
    "bbox": [
      80.271208938036,
      29.308440376833,
      80.3913538408541,
      29.4597622517693
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.33537956372898,
        29.371096072609507
      ]
    },
    "title": "Shivanath",
    "title_en": "Shivanath",
    "title_ne": "शिवनाथ",
    "type": "Rural Municipality",
    "code": "shivanathmun",
    "order": 501,
    "district": 73
  },
  {
    "id": 74009,
    "bbox": [
      80.6652551907484,
      29.3647809496912,
      80.9082720527775,
      29.53471267319
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.78128022039581,
        29.45055202956798
      ]
    },
    "title": "Sigas",
    "title_en": "Sigas",
    "title_ne": "सिगास",
    "type": "Rural Municipality",
    "code": "sigasmun",
    "order": 502,
    "district": 73
  },
  {
    "id": 74010,
    "bbox": [
      80.4778681453082,
      29.4834093306755,
      80.7224128969987,
      29.5752274181017
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.60550196859548,
        29.526032296333547
      ]
    },
    "title": "Surnaya",
    "title_en": "Surnaya",
    "title_ne": "सुर्नया",
    "type": "Rural Municipality",
    "code": "sunaryamun",
    "order": 503,
    "district": 73
  },
  {
    "id": 17002,
    "bbox": [
      85.8950942285336,
      26.8316439405628,
      85.9453473642747,
      26.9346693264288
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.92281162194968,
        26.885122227120526
      ]
    },
    "title": "Bateshwor",
    "title_en": "Bateshwor",
    "title_ne": "बटेश्वर",
    "type": "Rural Municipality",
    "code": "bateshwormun",
    "order": 504,
    "district": 17
  },
  {
    "id": 22009,
    "bbox": [
      86.0751736944805,
      27.4741115644615,
      86.1863509021768,
      27.6131055775158
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.1217480788235,
        27.545613180149857
      ]
    },
    "title": "Tamakoshi",
    "title_en": "Tamakoshi",
    "title_ne": "तामाकोशी",
    "type": "Rural Municipality",
    "code": "tamakoshimun",
    "order": 505,
    "district": 22
  },
  {
    "id": 29002,
    "bbox": [
      85.1929513745751,
      27.9728303953919,
      85.2543721569028,
      28.085944428342
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.22204152175705,
        28.027185965961134
      ]
    },
    "title": "Kalika",
    "title_en": "Kalika",
    "title_ne": "कालिका",
    "type": "Rural Municipality",
    "code": "kalikamunrasuwa",
    "order": 506,
    "district": 23
  },
  {
    "id": 29004,
    "bbox": [
      85.1598424732793,
      28.0920454519973,
      85.3509359264007,
      28.3406694445902
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.25092238127546,
        28.215507461727967
      ]
    },
    "title": "Aamachhodingmo",
    "title_en": "Aamachhodingmo",
    "title_ne": "आमाछोदिङमो",
    "type": "Rural Municipality",
    "code": "aamachhodingmomun",
    "order": 507,
    "district": 23
  },
  {
    "id": 34014,
    "bbox": [
      84.4838899645418,
      27.2057466023924,
      84.7457455665393,
      27.3940068013925
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.63474713474181,
        27.32080806097562
      ]
    },
    "title": "Thori",
    "title_en": "Thori",
    "title_ne": "ठोरी",
    "type": "Rural Municipality",
    "code": "thorimun",
    "order": 508,
    "district": 34
  },
  {
    "id": 63001,
    "bbox": [
      82.0894171375636,
      29.242392813086,
      82.2171450389971,
      29.363377745821
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.15224639306527,
        29.295114545285717
      ]
    },
    "title": "Chandannath",
    "title_en": "Chandannath",
    "title_ne": "चन्दननाथ",
    "type": "Municipality",
    "code": "chandannathmun",
    "order": 509,
    "district": 60
  },
  {
    "id": 63002,
    "bbox": [
      82.1881263416886,
      29.0955813436133,
      82.5822186251317,
      29.2990651606958
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.36710242092033,
        29.19715725565085
      ]
    },
    "title": "Guthichaur",
    "title_en": "Guthichaur",
    "title_ne": "गुठिचौर",
    "type": "Rural Municipality",
    "code": "guthichaurmun",
    "order": 510,
    "district": 60
  },
  {
    "id": 63004,
    "bbox": [
      81.9274298013505,
      29.3411254073184,
      82.1794375982808,
      29.484154482805
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.05879934043816,
        29.418490599288656
      ]
    },
    "title": "Kanakasundari",
    "title_en": "Kanakasundari",
    "title_ne": "कनकासुन्दरी",
    "type": "Rural Municipality",
    "code": "kankasundarimun",
    "order": 511,
    "district": 60
  },
  {
    "id": 63005,
    "bbox": [
      82.1634185564765,
      29.227964605751,
      82.5912815197688,
      29.508096108292
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.38518215582408,
        29.35900601885904
      ]
    },
    "title": "Patrasi",
    "title_en": "Patrasi",
    "title_ne": "पातारासी",
    "type": "Rural Municipality",
    "code": "patarasimun",
    "order": 512,
    "district": 60
  },
  {
    "id": 63006,
    "bbox": [
      81.9243892888315,
      29.2785825371073,
      82.1303864993623,
      29.4049091753074
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.02764108509652,
        29.343294566449597
      ]
    },
    "title": "Sinja",
    "title_en": "Sinja",
    "title_ne": "सिंजा",
    "type": "Rural Municipality",
    "code": "sinjamun",
    "order": 513,
    "district": 60
  },
  {
    "id": 63008,
    "bbox": [
      81.8946726591361,
      29.0947730985174,
      82.064549128012,
      29.2781876163856
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.98463873126737,
        29.18660209480613
      ]
    },
    "title": "Tila",
    "title_en": "Tila",
    "title_ne": "तिला",
    "type": "Rural Municipality",
    "code": "tilamun",
    "order": 514,
    "district": 60
  },
  {
    "id": 64002,
    "bbox": [
      81.5792308852863,
      29.1032325222178,
      81.7672904347461,
      29.2120588502079
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.67407033781478,
        29.150267951246732
      ]
    },
    "title": "Khandachakra",
    "title_en": "Khandachakra",
    "title_ne": "खाँडाचक्र",
    "type": "Municipality",
    "code": "khandachakramun",
    "order": 515,
    "district": 61
  },
  {
    "id": 6002,
    "bbox": [
      87.1568443028807,
      26.4032716353354,
      87.2481567476263,
      26.5182992933189
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.20604446433148,
        26.459603829932117
      ]
    },
    "title": "Barju",
    "title_en": "Barju",
    "title_ne": "बर्जु",
    "type": "Rural Municipality",
    "code": "barjumun",
    "order": 516,
    "district": 6
  },
  {
    "id": 7007,
    "bbox": [
      87.1623320708842,
      26.8456632940371,
      87.4207276509251,
      26.9560771647763
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.30747366232052,
        26.89613828659958
      ]
    },
    "title": "Sangurigadhi",
    "title_en": "Sangurigadhi",
    "title_ne": "साँगुरीगढी",
    "type": "Rural Municipality",
    "code": "sangurigadhimun",
    "order": 517,
    "district": 7
  },
  {
    "id": 16011,
    "bbox": [
      86.3714621082948,
      26.6223648826532,
      86.4567837926441,
      26.716544369659
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.4124549820856,
        26.668880386037756
      ]
    },
    "title": "Laxmipur Patari",
    "title_en": "Laxmipur Patari",
    "title_ne": "लक्ष्मीपुर पतारी",
    "type": "Rural Municipality",
    "code": "laxmipurpatarimun",
    "order": 518,
    "district": 15
  },
  {
    "id": 16015,
    "bbox": [
      86.4147462106067,
      26.5931947797436,
      86.5129417537007,
      26.6631334755205
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.46929958693592,
        26.636869124846335
      ]
    },
    "title": "Sakhuwanankarkatti",
    "title_en": "Sakhuwanankarkatti",
    "title_ne": "सखुवानान्कारकट्टी",
    "type": "Rural Municipality",
    "code": "sakhuwanankarkattimun",
    "order": 519,
    "district": 15
  },
  {
    "id": 29005,
    "bbox": [
      85.1224534837077,
      27.9729735418896,
      85.2432773951413,
      28.1688540269128
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.18393600848678,
        28.087388375259387
      ]
    },
    "title": "Uttargaya",
    "title_en": "Uttargaya",
    "title_ne": "उत्तरगया",
    "type": "Rural Municipality",
    "code": "uttargayamun",
    "order": 520,
    "district": 23
  },
  {
    "id": 31004,
    "bbox": [
      84.8886458615682,
      27.3165075192717,
      85.1877104797606,
      27.5262541133672
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.02721872268827,
        27.41592885305367
      ]
    },
    "title": "Hetauda",
    "title_en": "Hetauda",
    "title_ne": "हेटौँडा",
    "type": "Submetropolitan City",
    "code": "hetaudamun",
    "order": 521,
    "district": 31
  },
  {
    "id": 12001,
    "bbox": [
      86.2035805162799,
      27.2373972380474,
      86.369495878158,
      27.3797238982525
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.29147668419918,
        27.310325607733425
      ]
    },
    "title": "Champadevi",
    "title_en": "Champadevi",
    "title_ne": "चम्पादेवी",
    "type": "Rural Municipality",
    "code": "champadevimun",
    "order": 522,
    "district": 13
  },
  {
    "id": 17007,
    "bbox": [
      86.0232797158446,
      26.8292706864356,
      86.2597372483212,
      27.0214022251174
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.12338368355594,
        26.939341388838073
      ]
    },
    "title": "Ganeshman Charnath",
    "title_en": "Ganeshman Charnath",
    "title_ne": "गणेशमान चारनाथ",
    "type": "Municipality",
    "code": "ganeshmancharnathmun",
    "order": 523,
    "district": 17
  },
  {
    "id": 20005,
    "bbox": [
      85.7908661541969,
      27.0186910694863,
      86.0780713696336,
      27.3284626025624
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.93063021082966,
        27.187845631465844
      ]
    },
    "title": "Kamalamai",
    "title_en": "Kamalamai",
    "title_ne": "कमलामार्इ",
    "type": "Municipality",
    "code": "kamalamaimun",
    "order": 524,
    "district": 20
  },
  {
    "id": 20009,
    "bbox": [
      85.9983536576712,
      27.0470247676032,
      86.2564009086981,
      27.2183779219914
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.13218735375307,
        27.13388527514039
      ]
    },
    "title": "Tinpatan",
    "title_en": "Tinpatan",
    "title_ne": "तीनपाटन",
    "type": "Rural Municipality",
    "code": "tinpatanmun",
    "order": 525,
    "district": 20
  },
  {
    "id": 21001,
    "bbox": [
      85.8243791446945,
      27.4782198861439,
      86.025076846081,
      27.6146564077138
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.92120411974706,
        27.54942028003473
      ]
    },
    "title": "Doramba",
    "title_en": "Doramba",
    "title_ne": "दोरम्बा",
    "type": "Rural Municipality",
    "code": "dorambamun",
    "order": 526,
    "district": 21
  },
  {
    "id": 23010,
    "bbox": [
      85.5268392373681,
      27.8474284508645,
      85.7369559361708,
      28.1685911209555
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.64347922706821,
        28.013604885888867
      ]
    },
    "title": "Panchpokhari Thangpal",
    "title_en": "Panchpokhari Thangpal",
    "title_ne": "पाँचपोखरी थाङपाल",
    "type": "Rural Municipality",
    "code": "panchpokharithangpalmun",
    "order": 527,
    "district": 24
  },
  {
    "id": 27008,
    "bbox": [
      85.2134452453288,
      27.6898484545351,
      85.301833649498,
      27.7583840841538
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.26139008787344,
        27.727294129231296
      ]
    },
    "title": "Nagarjun",
    "title_en": "Nagarjun",
    "title_ne": "नागार्जुन",
    "type": "Municipality",
    "code": "nagarjunmun",
    "order": 528,
    "district": 27
  },
  {
    "id": 24002,
    "bbox": [
      85.406698193,
      27.4435334102324,
      85.5866374637892,
      27.5671108862539
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.49598878463004,
        27.50703449528289
      ]
    },
    "title": "Bethanchowk",
    "title_en": "Bethanchowk",
    "title_ne": "बेथानचोक",
    "type": "Rural Municipality",
    "code": "bethanchowkmun",
    "order": 529,
    "district": 30
  },
  {
    "id": 24007,
    "bbox": [
      85.5031860630277,
      27.3335668299429,
      85.7158014447268,
      27.4622497373278
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.62166937795615,
        27.392395845032592
      ]
    },
    "title": "Mahabharat",
    "title_en": "Mahabharat",
    "title_ne": "महाभारत",
    "type": "Rural Municipality",
    "code": "mahabharatmun",
    "order": 530,
    "district": 30
  },
  {
    "id": 47009,
    "bbox": [
      83.4193652832642,
      27.7938679310033,
      83.5836217511026,
      27.9408201391703
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.52043791771162,
        27.8666468015172
      ]
    },
    "title": "Tansen",
    "title_en": "Tansen",
    "title_ne": "तानसेन",
    "type": "Municipality",
    "code": "tansenmun",
    "order": 531,
    "district": 39
  },
  {
    "id": 46008,
    "bbox": [
      83.0778482166504,
      28.1557423926749,
      83.2034300894244,
      28.2708500441404
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.1465885340103,
        28.215702256464887
      ]
    },
    "title": "Malika",
    "title_en": "Malika",
    "title_ne": "मालिका",
    "type": "Rural Municipality",
    "code": "malikamungulmi",
    "order": 532,
    "district": 41
  },
  {
    "id": 46010,
    "bbox": [
      83.2008066838382,
      27.9860285708923,
      83.3267670199254,
      28.1205328706851
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.25831702064265,
        28.067792759925105
      ]
    },
    "title": "Resunga",
    "title_en": "Resunga",
    "title_ne": "रेसुङ्गा",
    "type": "Municipality",
    "code": "resungamun",
    "order": 533,
    "district": 41
  },
  {
    "id": 37001,
    "bbox": [
      84.2789318701726,
      28.151829004043,
      84.45863596237,
      28.2863531552202
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.38038913637065,
        28.21745407360888
      ]
    },
    "title": "Besishahar",
    "title_en": "Besishahar",
    "title_ne": "बेसीशहर",
    "type": "Municipality",
    "code": "besishaharmun",
    "order": 534,
    "district": 45
  },
  {
    "id": 37003,
    "bbox": [
      84.4760649934898,
      28.1206354459065,
      84.6600059145084,
      28.3258913286075
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.58626952454401,
        28.21609215802466
      ]
    },
    "title": "Dudhpokhari",
    "title_en": "Dudhpokhari",
    "title_ne": "दूधपोखरी",
    "type": "Rural Municipality",
    "code": "dudhpokharimun",
    "order": 535,
    "district": 45
  },
  {
    "id": 37004,
    "bbox": [
      84.1868070906258,
      28.2025470967683,
      84.335815420305,
      28.419312170294
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.25147355056177,
        28.29155815938348
      ]
    },
    "title": "Kwholasothar",
    "title_en": "Kwholasothar",
    "title_ne": "क्व्होलासोथार",
    "type": "Rural Municipality",
    "code": "kwholasotharmun",
    "order": 536,
    "district": 45
  },
  {
    "id": 37005,
    "bbox": [
      84.1906643918612,
      28.0787393960428,
      84.3257771891805,
      28.2162333406516
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.26195116517972,
        28.149598479171026
      ]
    },
    "title": "MadhyaNepal",
    "title_en": "MadhyaNepal",
    "title_ne": "मध्यनेपाल",
    "type": "Municipality",
    "code": "madhyanepalmun",
    "order": 537,
    "district": 45
  },
  {
    "id": 37007,
    "bbox": [
      84.4312774336665,
      28.0555751155968,
      84.5544997258599,
      28.1611863253531
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.4956304710359,
        28.116657296432702
      ]
    },
    "title": "Rainas",
    "title_en": "Rainas",
    "title_ne": "रार्इनास",
    "type": "Municipality",
    "code": "rainasmun",
    "order": 538,
    "district": 45
  },
  {
    "id": 53003,
    "bbox": [
      82.4161693173138,
      28.3378920984831,
      82.5875714809996,
      28.4663624650699
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.49815074300075,
        28.392673164753923
      ]
    },
    "title": "Madi",
    "title_en": "Madi",
    "title_ne": "माडी",
    "type": "Rural Municipality",
    "code": "madimunrolpa",
    "order": 539,
    "district": 54
  },
  {
    "id": 59001,
    "bbox": [
      81.3102417378096,
      28.509660711819,
      81.6162801866173,
      28.7986125030443
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.47401488676924,
        28.66241588762549
      ]
    },
    "title": "Barahtal",
    "title_en": "Barahtal",
    "title_ne": "बराहताल",
    "type": "Rural Municipality",
    "code": "barahatalmun",
    "order": 540,
    "district": 64
  },
  {
    "id": 71007,
    "bbox": [
      80.4681980457778,
      28.7262777118134,
      80.6758645249684,
      28.9993000566972
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.57616401946466,
        28.869818074863026
      ]
    },
    "title": "Godawari_Kailali",
    "title_en": "Godawari_Kailali",
    "title_ne": "गोदावरी",
    "type": "Municipality",
    "code": "godawarimunkailali",
    "order": 541,
    "district": 67
  },
  {
    "id": 71011,
    "bbox": [
      81.0535109353709,
      28.5843346655608,
      81.2877430835262,
      28.7309158834652
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.15441751060149,
        28.651287584131143
      ]
    },
    "title": "Lamkichuha",
    "title_en": "Lamkichuha",
    "title_ne": "लम्किचुहा",
    "type": "Municipality",
    "code": "lamkichuhamun",
    "order": 542,
    "district": 67
  },
  {
    "id": 72004,
    "bbox": [
      80.1036333078374,
      28.8952361197835,
      80.2423355166181,
      29.1373132272885
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.16800489387411,
        29.006766584473784
      ]
    },
    "title": "Bhimdatta",
    "title_en": "Bhimdatta",
    "title_ne": "भीमदत्त",
    "type": "Municipality",
    "code": "bheemdattamun",
    "order": 543,
    "district": 75
  },
  {
    "id": 76001,
    "bbox": [
      83.6770736271777,
      27.4378229151552,
      83.944602930632,
      27.7359268057106
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.84248518526968,
        27.636629948104723
      ]
    },
    "title": "Binayee Tribeni",
    "title_en": "Binayee Tribeni",
    "title_ne": "विनयी-त्रिवेणी",
    "type": "Rural Municipality",
    "code": "binayitribenimun",
    "order": 544,
    "district": 481
  },
  {
    "id": 37008,
    "bbox": [
      84.2804367731442,
      28.1110488566578,
      84.4450960318954,
      28.200028941465
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.36945041475506,
        28.153165080405532
      ]
    },
    "title": "Sundarbazar",
    "title_en": "Sundarbazar",
    "title_ne": "सुन्दरबजार",
    "type": "Municipality",
    "code": "sundarbazarmun",
    "order": 545,
    "district": 45
  },
  {
    "id": 41001,
    "bbox": [
      84.1866679156462,
      28.4708528205736,
      84.3144299578138,
      28.5757749731976
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.25330359915887,
        28.51784924292056
      ]
    },
    "title": "Chame",
    "title_en": "Chame",
    "title_ne": "चामे",
    "type": "Rural Municipality",
    "code": "chamemun",
    "order": 546,
    "district": 47
  },
  {
    "id": 41003,
    "bbox": [
      84.2407861247856,
      28.4450199535588,
      84.5705552315087,
      28.7717678605782
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.41231333452045,
        28.589123245434955
      ]
    },
    "title": "Nashong",
    "title_en": "Nashong",
    "title_ne": "नासोँ",
    "type": "Rural Municipality",
    "code": "nashongmun",
    "order": 547,
    "district": 47
  },
  {
    "id": 41004,
    "bbox": [
      83.7892648291775,
      28.5028964554166,
      84.2396276614686,
      28.8351989723296
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.02222379167337,
        28.659513034447276
      ]
    },
    "title": "Manang Ngisyang",
    "title_en": "Manang Ngisyang",
    "title_ne": "मनाङ ङिस्याङ",
    "type": "Rural Municipality",
    "code": "nesyangmun",
    "order": 548,
    "district": 47
  },
  {
    "id": 43002,
    "bbox": [
      83.4794879261925,
      28.2981731321423,
      83.6016039506978,
      28.4127781336869
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.53367982087929,
        28.352806162918732
      ]
    },
    "title": "Beni",
    "title_en": "Beni",
    "title_ne": "बेनी",
    "type": "Municipality",
    "code": "benimun",
    "order": 549,
    "district": 49
  },
  {
    "id": 43003,
    "bbox": [
      83.145174612022,
      28.4336112065825,
      83.5587020196633,
      28.7937625791441
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.34858840270462,
        28.62341121339088
      ]
    },
    "title": "Dhaulagiri",
    "title_en": "Dhaulagiri",
    "title_ne": "धवलागिरी",
    "type": "Rural Municipality",
    "code": "dhawalagirimun",
    "order": 550,
    "district": 49
  },
  {
    "id": 43004,
    "bbox": [
      83.2726433842412,
      28.3546115146824,
      83.4463883149964,
      28.4879592373828
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.35342150052003,
        28.419401029283268
      ]
    },
    "title": "Malika",
    "title_en": "Malika",
    "title_ne": "मालिका",
    "type": "Rural Municipality",
    "code": "malikamunmyagdi",
    "order": 551,
    "district": 49
  },
  {
    "id": 43005,
    "bbox": [
      83.3846577220392,
      28.3201167775582,
      83.5138716318504,
      28.4401704124619
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.45080724090424,
        28.37833536179629
      ]
    },
    "title": "Mangala",
    "title_en": "Mangala",
    "title_ne": "मंगला",
    "type": "Rural Municipality",
    "code": "mangalamun",
    "order": 552,
    "district": 49
  },
  {
    "id": 44001,
    "bbox": [
      83.5591660623768,
      28.0101792092874,
      83.6338608541353,
      28.1122775520573
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.59944586060169,
        28.056872102758415
      ]
    },
    "title": "Bihadi",
    "title_en": "Bihadi",
    "title_ne": "विहादी",
    "type": "Rural Municipality",
    "code": "bihadimun",
    "order": 553,
    "district": 51
  },
  {
    "id": 44002,
    "bbox": [
      83.5653943130502,
      28.2669064535081,
      83.6631260658293,
      28.3918143088006
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.61758562602304,
        28.331413263516755
      ]
    },
    "title": "Jaljala",
    "title_en": "Jaljala",
    "title_ne": "जलजला",
    "type": "Rural Municipality",
    "code": "jaljalamun",
    "order": 554,
    "district": 51
  },
  {
    "id": 44003,
    "bbox": [
      83.6090335877809,
      28.1815611389903,
      83.8093034542983,
      28.2862965248339
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.70427517630449,
        28.231637104462237
      ]
    },
    "title": "Kushma",
    "title_en": "Kushma",
    "title_ne": "कुश्मा",
    "type": "Municipality",
    "code": "kushmamun",
    "order": 555,
    "district": 51
  },
  {
    "id": 61001,
    "bbox": [
      82.1174794766963,
      28.8446481705575,
      82.4118295602775,
      29.1275217484269
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.28484327050617,
        28.994706825843057
      ]
    },
    "title": "Barekot",
    "title_en": "Barekot",
    "title_ne": "बारेकोट",
    "type": "Rural Municipality",
    "code": "barekotmun",
    "order": 556,
    "district": 62
  },
  {
    "id": 61002,
    "bbox": [
      82.0681142383734,
      28.6113336255645,
      82.2843545007013,
      28.8079246572585
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.16303703461979,
        28.697428393192027
      ]
    },
    "title": "Bheri",
    "title_en": "Bheri",
    "title_ne": "भेरी",
    "type": "Municipality",
    "code": "bherimun",
    "order": 557,
    "district": 62
  },
  {
    "id": 61004,
    "bbox": [
      81.8783736601019,
      28.7741425950591,
      82.0841666765312,
      29.0306955375459
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.97917367620556,
        28.896325733634427
      ]
    },
    "title": "Junichande",
    "title_en": "Junichande",
    "title_ne": "जुनीचाँदे",
    "type": "Rural Municipality",
    "code": "junichaandemun",
    "order": 558,
    "district": 62
  },
  {
    "id": 61005,
    "bbox": [
      82.0551449445751,
      28.7657851730485,
      82.2346558166772,
      28.9955811417643
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.13684231527462,
        28.878165059073346
      ]
    },
    "title": "Kuse",
    "title_en": "Kuse",
    "title_ne": "कुसे",
    "type": "Rural Municipality",
    "code": "kushemun",
    "order": 559,
    "district": 62
  },
  {
    "id": 9006,
    "bbox": [
      87.3260552027296,
      27.2016459648227,
      87.494155163552,
      27.3020147414715
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.41563739802825,
        27.257208817763633
      ]
    },
    "title": "Madi",
    "title_en": "Madi",
    "title_ne": "मादी",
    "type": "Municipality",
    "code": "madimunsankhuwasabha",
    "order": 560,
    "district": 10
  },
  {
    "id": 29003,
    "bbox": [
      85.226982578648,
      27.9651514336129,
      85.396861242245,
      28.0732287138147
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.30467460992074,
        28.02513634922499
      ]
    },
    "title": "Naukunda",
    "title_en": "Naukunda",
    "title_ne": "नौकुण्ड",
    "type": "Rural Municipality",
    "code": "naukundamun",
    "order": 561,
    "district": 23
  },
  {
    "id": 28008,
    "bbox": [
      85.2608127085319,
      27.8589629824467,
      85.3749715301334,
      27.9239412517897
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.31475530658984,
        27.8940805253854
      ]
    },
    "title": "Panchakanya",
    "title_en": "Panchakanya",
    "title_ne": "पञ्चकन्या",
    "type": "Rural Municipality",
    "code": "panchakanyamun",
    "order": 562,
    "district": 25
  },
  {
    "id": 28012,
    "bbox": [
      84.9888453385913,
      27.8323298704928,
      85.0971127782564,
      27.932610903981
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.03926495957882,
        27.88966680048774
      ]
    },
    "title": "Tarkeshwar",
    "title_en": "Tarkeshwar",
    "title_ne": "तारकेश्वर",
    "type": "Rural Municipality",
    "code": "tarakeshwormunnuwakot",
    "order": 563,
    "district": 25
  },
  {
    "id": 30004,
    "bbox": [
      84.9052893808566,
      27.7062623349412,
      85.0967847498254,
      27.8520714280077
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.98763539769303,
        27.79296733422836
      ]
    },
    "title": "Galchi",
    "title_en": "Galchi",
    "title_ne": "गल्छी",
    "type": "Rural Municipality",
    "code": "galchhimun",
    "order": 564,
    "district": 26
  },
  {
    "id": 30007,
    "bbox": [
      84.9654970807528,
      28.0249994134447,
      85.126715429149,
      28.1405600158039
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.04256547911571,
        28.082336060918678
      ]
    },
    "title": "Khaniyabash",
    "title_en": "Khaniyabash",
    "title_ne": "खनियाबास",
    "type": "Rural Municipality",
    "code": "khaniyabasmun",
    "order": 565,
    "district": 26
  },
  {
    "id": 33002,
    "bbox": [
      85.090655181001,
      26.9507928525785,
      85.1874204420848,
      27.0294566803483
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.13617465973701,
        26.996558480122996
      ]
    },
    "title": "Baragadhi",
    "title_en": "Baragadhi",
    "title_ne": "बारागढी",
    "type": "Rural Municipality",
    "code": "baragadhimun",
    "order": 566,
    "district": 33
  },
  {
    "id": 33005,
    "bbox": [
      84.9242220391017,
      27.0631974543114,
      85.0944159847346,
      27.3657434347207
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.00847428449086,
        27.200594590838868
      ]
    },
    "title": "Jitpur Simara",
    "title_en": "Jitpur Simara",
    "title_ne": "जीतपुर सिमरा",
    "type": "Submetropolitan City",
    "code": "jeetpursimaramun",
    "order": 567,
    "district": 33
  },
  {
    "id": 33011,
    "bbox": [
      85.0220252308467,
      26.8492226691911,
      85.1199613508691,
      26.9695287103565
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.07525326112739,
        26.89596298193746
      ]
    },
    "title": "Pacharauta",
    "title_en": "Pacharauta",
    "title_ne": "पचरौता",
    "type": "Municipality",
    "code": "pachrautamun",
    "order": 568,
    "district": 33
  },
  {
    "id": 33016,
    "bbox": [
      84.9927243344471,
      26.8891071829814,
      85.0870396995728,
      26.9641006395601
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.03935265968995,
        26.918500332772748
      ]
    },
    "title": "Suwarna",
    "title_en": "Suwarna",
    "title_ne": "सुवर्ण",
    "type": "Rural Municipality",
    "code": "suwarnamun",
    "order": 569,
    "district": 33
  },
  {
    "id": 52004,
    "bbox": [
      82.8148128461035,
      28.0366038822166,
      83.0025926516434,
      28.1105594665144
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.91173022677499,
        28.07197470222291
      ]
    },
    "title": "Mallarani",
    "title_en": "Mallarani",
    "title_ne": "मल्लरानी",
    "type": "Rural Municipality",
    "code": "mallaranimun",
    "order": 570,
    "district": 53
  },
  {
    "id": 52008,
    "bbox": [
      82.7405557197445,
      27.8777802867276,
      82.9427560505263,
      28.0107969581917
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.82948669776255,
        27.948078147939054
      ]
    },
    "title": "Sarumarani",
    "title_en": "Sarumarani",
    "title_ne": "सरुमारानी",
    "type": "Rural Municipality",
    "code": "sarumaranimun",
    "order": 571,
    "district": 53
  },
  {
    "id": 64003,
    "bbox": [
      81.6905154152503,
      28.9710119079125,
      82.0194323935586,
      29.111209905663
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.85416828972656,
        29.04472062882326
      ]
    },
    "title": "Mahawai",
    "title_en": "Mahawai",
    "title_ne": "महावै",
    "type": "Rural Municipality",
    "code": "mahawaimun",
    "order": 572,
    "district": 61
  },
  {
    "id": 64004,
    "bbox": [
      81.4680665866001,
      29.126165442659,
      81.5902115646402,
      29.3156323153646
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.53225209806696,
        29.215329538023337
      ]
    },
    "title": "Naraharinath",
    "title_en": "Naraharinath",
    "title_ne": "नरहरिनाथ",
    "type": "Rural Municipality",
    "code": "narharinathmun",
    "order": 573,
    "district": 61
  },
  {
    "id": 64005,
    "bbox": [
      81.6267184136991,
      29.1772799178454,
      81.8079806265348,
      29.3421947768347
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.71988461456014,
        29.24984851786518
      ]
    },
    "title": "Pachaljharana",
    "title_en": "Pachaljharana",
    "title_ne": "पचालझरना",
    "type": "Rural Municipality",
    "code": "pachaljharanamun",
    "order": 574,
    "district": 61
  },
  {
    "id": 64006,
    "bbox": [
      81.7463970718955,
      29.2182646395496,
      81.9309643562269,
      29.461659138163
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.8397036923177,
        29.350272492906477
      ]
    },
    "title": "Palata",
    "title_en": "Palata",
    "title_ne": "पलाता",
    "type": "Rural Municipality",
    "code": "palatamun",
    "order": 575,
    "district": 61
  },
  {
    "id": 61007,
    "bbox": [
      82.1978976760807,
      28.7144899435168,
      82.58018690224,
      29.0166062824828
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.3741200024564,
        28.87867255623824
      ]
    },
    "title": "Nalgaad",
    "title_en": "Nalgaad",
    "title_ne": "नलगाड",
    "type": "Municipality",
    "code": "tribeninalgaadmun",
    "order": 576,
    "district": 62
  },
  {
    "id": 59004,
    "bbox": [
      80.981051199357,
      28.7405834506685,
      81.3525740559497,
      28.9783465174888
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.19264894735072,
        28.875527831976942
      ]
    },
    "title": "Chaukune",
    "title_en": "Chaukune",
    "title_ne": "चौकुने",
    "type": "Rural Municipality",
    "code": "chaukunemun",
    "order": 577,
    "district": 64
  },
  {
    "id": 59007,
    "bbox": [
      81.6672775531365,
      28.4508494324415,
      81.8489393095527,
      28.6208149122478
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.7515795515729,
        28.539924714828786
      ]
    },
    "title": "Lekbeshi",
    "title_en": "Lekbeshi",
    "title_ne": "लेकबेशी",
    "type": "Municipality",
    "code": "lekbeshimun",
    "order": 578,
    "district": 64
  },
  {
    "id": 59009,
    "bbox": [
      81.866568779519,
      28.4449795928373,
      82.0405256488662,
      28.6452726578597
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.95330484217241,
        28.55225249824509
      ]
    },
    "title": "Simta",
    "title_en": "Simta",
    "title_ne": "सिम्ता",
    "type": "Rural Municipality",
    "code": "simtamun",
    "order": 579,
    "district": 64
  },
  {
    "id": 58001,
    "bbox": [
      81.386424387911,
      28.0689307446884,
      81.5620860764803,
      28.2346455103325
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.47906862802539,
        28.171166107410148
      ]
    },
    "title": "Badhaiyatal",
    "title_en": "Badhaiyatal",
    "title_ne": "बढैयाताल",
    "type": "Rural Municipality",
    "code": "badhaiyatalmun",
    "order": 580,
    "district": 65
  },
  {
    "id": 34099,
    "bbox": [
      84.5324371178092,
      27.2318393469614,
      84.973193197776,
      27.4631790982775
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.77983287255043,
        27.34318301043589
      ]
    },
    "title": "Chitwan National Park",
    "title_en": "Chitwan National Park",
    "title_ne": "चितवन राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 581,
    "district": 34
  },
  {
    "id": 49099,
    "bbox": [
      83.2676161321544,
      27.4623852740249,
      83.284783340495,
      27.5061161113104
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.27615818571245,
        27.48427831614044
      ]
    },
    "title": "Lumbini Sanskritik Development Area",
    "title_en": "Lumbini Sanskritik Development Area",
    "title_ne": "लुम्बिनी  सांस्कृतिक विकास क्षेत्र",
    "type": "Development Area",
    "code": null,
    "order": 582,
    "district": 37
  },
  {
    "id": 34002,
    "bbox": [
      84.7589478951012,
      26.9958609092528,
      84.8192028018561,
      27.0777215394539
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.79419459262314,
        27.035710720738418
      ]
    },
    "title": "Bindabasini",
    "title_en": "Bindabasini",
    "title_ne": "बिन्दबासिनी",
    "type": "Rural Municipality",
    "code": "bindabasinimun",
    "order": 583,
    "district": 34
  },
  {
    "id": 55002,
    "bbox": [
      81.960408910868,
      28.3409772415578,
      82.144758716413,
      28.6446827980379
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.05380977447638,
        28.489467041617946
      ]
    },
    "title": "Bangad Kupinde",
    "title_en": "Bangad Kupinde",
    "title_ne": "बनगाड कुपिण्डे",
    "type": "Municipality",
    "code": "bangadkupindemun",
    "order": 584,
    "district": 55
  },
  {
    "id": 55006,
    "bbox": [
      81.7434288919351,
      28.1511099599141,
      82.1510509264596,
      28.3923340250257
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.94944383795304,
        28.291399960611454
      ]
    },
    "title": "Kalimati",
    "title_en": "Kalimati",
    "title_ne": "कालिमाटी",
    "type": "Rural Municipality",
    "code": "kalimatimun",
    "order": 585,
    "district": 55
  },
  {
    "id": 55009,
    "bbox": [
      82.0418337037299,
      28.3143903391076,
      82.2759534500619,
      28.4620442519217
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.16229156666303,
        28.38177259399403
      ]
    },
    "title": "Sharada",
    "title_en": "Sharada",
    "title_ne": "शारदा",
    "type": "Municipality",
    "code": "shaaradamun",
    "order": 586,
    "district": 55
  },
  {
    "id": 64008,
    "bbox": [
      81.5238855360965,
      29.1584850615145,
      81.644092132086,
      29.3708004389717
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.58951436451686,
        29.284455526145486
      ]
    },
    "title": "Sanni Tribeni",
    "title_en": "Sanni Tribeni",
    "title_ne": "सान्नी त्रिवेणी",
    "type": "Rural Municipality",
    "code": "sannitrivenimun",
    "order": 587,
    "district": 61
  },
  {
    "id": 60001,
    "bbox": [
      81.4101466550087,
      28.9119750929845,
      81.5821953117118,
      29.1359645831277
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.49079216051904,
        29.02360175229125
      ]
    },
    "title": "Aathabis",
    "title_en": "Aathabis",
    "title_ne": "आठबीस",
    "type": "Municipality",
    "code": "aathabismun",
    "order": 588,
    "district": 63
  },
  {
    "id": 60004,
    "bbox": [
      81.477992041985,
      28.8683524692012,
      81.6265547605651,
      29.0023262675195
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.55863273924727,
        28.93471733189155
      ]
    },
    "title": "Chamunda Bindrasaini",
    "title_en": "Chamunda Bindrasaini",
    "title_ne": "चामुण्डा बिन्द्रासैनी",
    "type": "Municipality",
    "code": "chamundabindrasainimun",
    "order": 589,
    "district": 63
  },
  {
    "id": 60008,
    "bbox": [
      81.6490800202096,
      28.8529457351998,
      81.7447456814154,
      29.0316785963809
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.69338309162248,
        28.948345263202302
      ]
    },
    "title": "Mahabu",
    "title_en": "Mahabu",
    "title_ne": "महाबु",
    "type": "Rural Municipality",
    "code": "mahabumun",
    "order": 590,
    "district": 63
  },
  {
    "id": 60010,
    "bbox": [
      81.720505988373,
      28.8316240882796,
      81.9268688142136,
      29.0193340363186
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.82282203199688,
        28.931216482983743
      ]
    },
    "title": "Naumule",
    "title_en": "Naumule",
    "title_ne": "नौमुले",
    "type": "Rural Municipality",
    "code": "naumulemun",
    "order": 591,
    "district": 63
  },
  {
    "id": 57007,
    "bbox": [
      81.5843160734843,
      27.9969114305457,
      81.7015325782452,
      28.1338114096629
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.64600785713083,
        28.060412185364857
      ]
    },
    "title": "Nepalgunj",
    "title_en": "Nepalgunj",
    "title_ne": "नेपालगंज",
    "type": "Submetropolitan City",
    "code": "nepalgunjmun",
    "order": 592,
    "district": 66
  },
  {
    "id": 70001,
    "bbox": [
      80.763450524333,
      29.2837219748061,
      80.963513676121,
      29.4168626773379
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.87525062895591,
        29.344277784287872
      ]
    },
    "title": "Aadarsha",
    "title_en": "Aadarsha",
    "title_ne": "आदर्श",
    "type": "Rural Municipality",
    "code": "aadarshamun",
    "order": 593,
    "district": 68
  },
  {
    "id": 76007,
    "bbox": [
      84.0615890979567,
      27.5549911602052,
      84.1904987275165,
      27.748374696698
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.12166984330729,
        27.641770934214062
      ]
    },
    "title": "Kawasoti",
    "title_en": "Kawasoti",
    "title_ne": "कावासोती",
    "type": "Municipality",
    "code": "kawasotimun",
    "order": 594,
    "district": 481
  },
  {
    "id": 1007,
    "bbox": [
      87.8312648919377,
      27.2790917258435,
      88.0679768858699,
      27.4424608108406
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.94176573145141,
        27.352289932649747
      ]
    },
    "title": "Sidingba",
    "title_en": "Sidingba",
    "title_ne": "सिदिङ्वा",
    "type": "Rural Municipality",
    "code": "sidingbamun",
    "order": 595,
    "district": 1
  },
  {
    "id": 3006,
    "bbox": [
      87.9452138684252,
      26.8877155164741,
      88.0899264714318,
      27.035659356969
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.01253938293334,
        26.96236513996339
      ]
    },
    "title": "Maijogmai",
    "title_en": "Maijogmai",
    "title_ne": "माईजोगमाई",
    "type": "Rural Municipality",
    "code": "maijogmaimun",
    "order": 596,
    "district": 3
  },
  {
    "id": 9001,
    "bbox": [
      87.1728176784121,
      27.6308758073253,
      87.6773699048781,
      27.8670901940957
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.44875778039611,
        27.7590348859669
      ]
    },
    "title": "Bhotkhola",
    "title_en": "Bhotkhola",
    "title_ne": "भोटखोला",
    "type": "Rural Municipality",
    "code": "bhotkholamun",
    "order": 597,
    "district": 10
  },
  {
    "id": 10007,
    "bbox": [
      86.9060184652517,
      27.3055967535255,
      87.1403333611856,
      27.4636563609318
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.00329400226921,
        27.39884950088281
      ]
    },
    "title": "Salpasilichho",
    "title_en": "Salpasilichho",
    "title_ne": "साल्पासिलिछो",
    "type": "Rural Municipality",
    "code": "salpasilichhomun",
    "order": 598,
    "district": 9
  },
  {
    "id": 10008,
    "bbox": [
      87.0116083161088,
      27.2535408315986,
      87.2097988780482,
      27.4205124363208
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.10887059726187,
        27.33004759024964
      ]
    },
    "title": "Shadananda",
    "title_en": "Shadananda",
    "title_ne": "षडानन्द",
    "type": "Municipality",
    "code": "shadanandamun",
    "order": 599,
    "district": 9
  },
  {
    "id": 4003,
    "bbox": [
      88.031092097583,
      26.4343651797816,
      88.1115164538016,
      26.6170578546719
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.07430940811537,
        26.524355147152793
      ]
    },
    "title": "Bhadrapur",
    "title_en": "Bhadrapur",
    "title_ne": "भद्रपुर",
    "type": "Municipality",
    "code": "bhadrapurmun",
    "order": 600,
    "district": 4
  },
  {
    "id": 4006,
    "bbox": [
      87.638184562181,
      26.5896250211195,
      87.7168264925694,
      26.7500475264932
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.67667845467332,
        26.6730055120543
      ]
    },
    "title": "Damak",
    "title_en": "Damak",
    "title_ne": "दमक",
    "type": "Municipality",
    "code": "damakmun",
    "order": 601,
    "district": 4
  },
  {
    "id": 4010,
    "bbox": [
      87.8114553980956,
      26.4365731151423,
      87.9153690283913,
      26.5903039762412
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.86500353182763,
        26.51094327149473
      ]
    },
    "title": "Jhapa",
    "title_en": "Jhapa",
    "title_ne": "झापा",
    "type": "Rural Municipality",
    "code": "jhapamun",
    "order": 602,
    "district": 4
  },
  {
    "id": 4013,
    "bbox": [
      87.8554186962465,
      26.5769990721994,
      87.9560190119116,
      26.6975386181799
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.9055978966974,
        26.640525388698045
      ]
    },
    "title": "Kankai",
    "title_en": "Kankai",
    "title_ne": "कन्काई",
    "type": "Municipality",
    "code": "kankaimun",
    "order": 603,
    "district": 4
  },
  {
    "id": 4014,
    "bbox": [
      88.0307650816629,
      26.5569916981751,
      88.1879838343223,
      26.8059702129077
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        88.11578830246106,
        26.67536292246431
      ]
    },
    "title": "Mechinagar",
    "title_en": "Mechinagar",
    "title_ne": "मेचीनगर",
    "type": "Municipality",
    "code": "mechinagarmun",
    "order": 604,
    "district": 4
  },
  {
    "id": 5003,
    "bbox": [
      87.2459134065596,
      26.4997578480289,
      87.3536325414073,
      26.6249416336953
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.29822465294326,
        26.561410718204325
      ]
    },
    "title": "Budhiganga",
    "title_en": "Budhiganga",
    "title_ne": "बुढीगंगा",
    "type": "Rural Municipality",
    "code": "budhigangamunmorang",
    "order": 605,
    "district": 5
  },
  {
    "id": 5006,
    "bbox": [
      87.2896525632817,
      26.3478370706644,
      87.3689297634782,
      26.4713451039966
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.33291315270898,
        26.405799648999988
      ]
    },
    "title": "Jahada",
    "title_en": "Jahada",
    "title_ne": "जहदा",
    "type": "Rural Municipality",
    "code": "jahadamun",
    "order": 606,
    "district": 5
  },
  {
    "id": 5007,
    "bbox": [
      87.4504779142603,
      26.526980563707,
      87.540179091641,
      26.675450559968
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.500473453422,
        26.596509516214656
      ]
    },
    "title": "Kanepokhari",
    "title_en": "Kanepokhari",
    "title_ne": "कानेपोखरी",
    "type": "Rural Municipality",
    "code": "kanepokharimun",
    "order": 607,
    "district": 5
  },
  {
    "id": 5010,
    "bbox": [
      87.4407875877787,
      26.6667084617843,
      87.6140708789281,
      26.8634086134767
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.51668509700212,
        26.755488253640067
      ]
    },
    "title": "Letang",
    "title_en": "Letang",
    "title_ne": "लेटाङ",
    "type": "Municipality",
    "code": "letangmun",
    "order": 608,
    "district": 5
  },
  {
    "id": 5013,
    "bbox": [
      87.4032030352181,
      26.4211283066294,
      87.5434043034463,
      26.5578343739835
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.47026358126041,
        26.494624622515214
      ]
    },
    "title": "Rangeli",
    "title_en": "Rangeli",
    "title_ne": "रंगेली",
    "type": "Municipality",
    "code": "rangelimun",
    "order": 609,
    "district": 5
  },
  {
    "id": 5014,
    "bbox": [
      87.5742489471409,
      26.3808796824926,
      87.6792321396658,
      26.5899146670794
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.62006462241544,
        26.479227872585287
      ]
    },
    "title": "Ratuwamai",
    "title_en": "Ratuwamai",
    "title_ne": "रतुवामाई",
    "type": "Municipality",
    "code": "ratuwamaimun",
    "order": 610,
    "district": 5
  },
  {
    "id": 5017,
    "bbox": [
      87.5678168246271,
      26.5582923399008,
      87.6554361370794,
      26.7222347450762
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.62177174492501,
        26.649324502561935
      ]
    },
    "title": "Uralabari",
    "title_en": "Uralabari",
    "title_ne": "उर्लाबारी",
    "type": "Municipality",
    "code": "urlabarimun",
    "order": 611,
    "district": 5
  },
  {
    "id": 17006,
    "bbox": [
      85.999461148442,
      26.8011664086657,
      86.0957991377226,
      26.9632761547583
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.0431403278209,
        26.874248948336934
      ]
    },
    "title": "Dhanusadham",
    "title_en": "Dhanusadham",
    "title_ne": "धनुषाधाम",
    "type": "Municipality",
    "code": "dhanushadhammun",
    "order": 612,
    "district": 17
  },
  {
    "id": 17008,
    "bbox": [
      85.980567127427,
      26.7188688496756,
      86.0702901308596,
      26.8078881009456
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.02759786790438,
        26.758069640027465
      ]
    },
    "title": "Hansapur",
    "title_en": "Hansapur",
    "title_ne": "हंसपुर",
    "type": "Municipality",
    "code": "hansapurmun",
    "order": 613,
    "district": 17
  },
  {
    "id": 17010,
    "bbox": [
      85.8793688806887,
      26.6706327840922,
      85.9941170808416,
      26.7848666277969
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.93437545503625,
        26.72577239446485
      ]
    },
    "title": "Janakpur",
    "title_en": "Janakpur",
    "title_ne": "जनकपुर",
    "type": "Submetropolitan City",
    "code": "janakpurmun",
    "order": 614,
    "district": 17
  },
  {
    "id": 17016,
    "bbox": [
      85.8801033800044,
      26.6128369478407,
      85.9666494304325,
      26.6822025754512
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.9246225645809,
        26.644425261683914
      ]
    },
    "title": "Nagarain",
    "title_en": "Nagarain",
    "title_ne": "नगराइन",
    "type": "Municipality",
    "code": "nagrainmun",
    "order": 615,
    "district": 17
  },
  {
    "id": 17018,
    "bbox": [
      86.0513327706014,
      26.6799556464405,
      86.1544120028351,
      26.7880165312628
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.10684081502022,
        26.73507874839535
      ]
    },
    "title": "Sahidnagar",
    "title_en": "Sahidnagar",
    "title_ne": "शहीदनगर",
    "type": "Municipality",
    "code": "shahidnagarmun",
    "order": 616,
    "district": 17
  },
  {
    "id": 23009,
    "bbox": [
      85.4481141139425,
      27.7441646916482,
      85.6490641107731,
      27.8968550228434
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.54086094511635,
        27.82649673699201
      ]
    },
    "title": "Melamchi",
    "title_en": "Melamchi",
    "title_ne": "मेलम्ची",
    "type": "Municipality",
    "code": "melamchimun",
    "order": 617,
    "district": 24
  },
  {
    "id": 23011,
    "bbox": [
      85.7303944435679,
      27.6650087385409,
      85.8705946611971,
      27.7564536939524
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.806929454414,
        27.709526448706875
      ]
    },
    "title": "Sunkoshi",
    "title_en": "Sunkoshi",
    "title_ne": "सुनकोशी",
    "type": "Rural Municipality",
    "code": "sunkoshimunsindhupalchowk",
    "order": 618,
    "district": 24
  },
  {
    "id": 33001,
    "bbox": [
      85.0895117509094,
      26.902988979026,
      85.1793516862875,
      26.9896361368917
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.14195400616735,
        26.944877000569974
      ]
    },
    "title": "Adarshkotwal",
    "title_en": "Adarshkotwal",
    "title_ne": "आदर्श कोटवाल",
    "type": "Rural Municipality",
    "code": "aadarshakotwalmun",
    "order": 619,
    "district": 33
  },
  {
    "id": 33004,
    "bbox": [
      84.9676225706227,
      26.9123758322059,
      85.0376441033102,
      26.9826994797694
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.0047410072561,
        26.943759791359607
      ]
    },
    "title": "Devtal",
    "title_en": "Devtal",
    "title_ne": "देवताल",
    "type": "Rural Municipality",
    "code": "devtalmun",
    "order": 620,
    "district": 33
  },
  {
    "id": 33006,
    "bbox": [
      84.943500751679,
      26.9370737404422,
      85.073309107482,
      27.1154633814398
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.00937157269544,
        27.028954330448887
      ]
    },
    "title": "Kalaiya",
    "title_en": "Kalaiya",
    "title_ne": "कलैया",
    "type": "Submetropolitan City",
    "code": "kalaiyamun",
    "order": 621,
    "district": 33
  },
  {
    "id": 33008,
    "bbox": [
      85.0717921428199,
      27.0030418665907,
      85.2062541451839,
      27.1802588484422
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.14550122388373,
        27.104202763090978
      ]
    },
    "title": "Kolhabi",
    "title_en": "Kolhabi",
    "title_ne": "कोल्हवी",
    "type": "Municipality",
    "code": "kolhabimun",
    "order": 622,
    "district": 33
  },
  {
    "id": 33012,
    "bbox": [
      84.8988790959332,
      27.0322842039795,
      84.9629355853644,
      27.0786859640939
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.93122380258693,
        27.056377058704076
      ]
    },
    "title": "Parwanipur",
    "title_en": "Parwanipur",
    "title_ne": "परवानीपुर",
    "type": "Rural Municipality",
    "code": "parwanipurmun",
    "order": 623,
    "district": 33
  },
  {
    "id": 33015,
    "bbox": [
      85.0886982190703,
      26.8671138064428,
      85.1770503620533,
      26.9334925097196
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.13553367542377,
        26.89608856471896
      ]
    },
    "title": "Simraungadh",
    "title_en": "Simraungadh",
    "title_ne": "सिम्रौनगढ",
    "type": "Municipality",
    "code": "simraungadhmun",
    "order": 624,
    "district": 33
  },
  {
    "id": 36005,
    "bbox": [
      84.7487681111815,
      28.1534978698197,
      85.1266470742467,
      28.4721213762501
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.92502022637201,
        28.304694470044502
      ]
    },
    "title": "Dharche",
    "title_en": "Dharche",
    "title_ne": "धार्चे",
    "type": "Rural Municipality",
    "code": "dharchemun",
    "order": 625,
    "district": 44
  },
  {
    "id": 36008,
    "bbox": [
      84.4188530093874,
      27.9367502538876,
      84.5858266988335,
      28.0894333818512
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.50616792102097,
        28.01032753247788
      ]
    },
    "title": "Palungtar",
    "title_en": "Palungtar",
    "title_ne": "पालुङटार",
    "type": "Municipality",
    "code": "palungtarmun",
    "order": 626,
    "district": 44
  },
  {
    "id": 36011,
    "bbox": [
      84.6496155814476,
      28.0425042898935,
      84.7997707639627,
      28.3704938560155
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.73354606016471,
        28.162620397342355
      ]
    },
    "title": "Gangadev",
    "title_en": "Gangadev",
    "title_ne": "बारपाक सुलिकोट",
    "type": "Rural Municipality",
    "code": "sulikotmun",
    "order": 627,
    "district": 44
  },
  {
    "id": 66002,
    "bbox": [
      81.9926861720903,
      29.6348299274019,
      82.4976345656177,
      30.0754133388875
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.25132486762983,
        29.848199124715585
      ]
    },
    "title": "Chankheli",
    "title_en": "Chankheli",
    "title_ne": "चंखेली",
    "type": "Rural Municipality",
    "code": "chankhelimun",
    "order": 628,
    "district": 59
  },
  {
    "id": 66004,
    "bbox": [
      81.2562642323406,
      29.8871711716897,
      81.9266852863104,
      30.4472763312289
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.61043561976847,
        30.17667942348516
      ]
    },
    "title": "Namkha",
    "title_en": "Namkha",
    "title_ne": "नाम्खा",
    "type": "Rural Municipality",
    "code": "namkhamun",
    "order": 629,
    "district": 59
  },
  {
    "id": 71001,
    "bbox": [
      80.994010597347,
      28.6129746831706,
      81.0797972547392,
      28.7624579174149
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.04096969932742,
        28.680341531785864
      ]
    },
    "title": "Bardagoriya",
    "title_en": "Bardagoriya",
    "title_ne": "बर्दगोरिया",
    "type": "Rural Municipality",
    "code": "bardgoriyamun",
    "order": 630,
    "district": 67
  },
  {
    "id": 71004,
    "bbox": [
      80.538172061523,
      28.5659213768272,
      80.7565030582423,
      28.7845848225489
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.6547442950228,
        28.693149812305652
      ]
    },
    "title": "Dhangadhi",
    "title_en": "Dhangadhi",
    "title_ne": "धनगढी",
    "type": "Submetropolitan City",
    "code": "dhangadhimun",
    "order": 631,
    "district": 67
  },
  {
    "id": 71006,
    "bbox": [
      80.8315401977246,
      28.5874263168924,
      81.0310447201496,
      28.8354631206836
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.94001677537169,
        28.705532441021706
      ]
    },
    "title": "Ghodaghodi",
    "title_en": "Ghodaghodi",
    "title_ne": "घोडाघोडी",
    "type": "Municipality",
    "code": "ghodaghodimun",
    "order": 632,
    "district": 67
  },
  {
    "id": 71008,
    "bbox": [
      81.0403964375687,
      28.5217794314129,
      81.2605883499553,
      28.6146621546338
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.14224739015131,
        28.569511163999884
      ]
    },
    "title": "Janaki",
    "title_en": "Janaki",
    "title_ne": "जानकी",
    "type": "Rural Municipality",
    "code": "janakimunkailali",
    "order": 633,
    "district": 67
  },
  {
    "id": 71010,
    "bbox": [
      80.715757099788,
      28.4896265216723,
      80.9118940791773,
      28.7073176728001
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.80977380740158,
        28.595770081946718
      ]
    },
    "title": "Kailari",
    "title_en": "Kailari",
    "title_ne": "कैलारी",
    "type": "Rural Municipality",
    "code": "kailarimun",
    "order": 634,
    "district": 67
  },
  {
    "id": 71013,
    "bbox": [
      81.013049690163,
      28.3945109653181,
      81.1679840253952,
      28.5540764029076
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.08659888293285,
        28.485190958758647
      ]
    },
    "title": "Tikapur",
    "title_en": "Tikapur",
    "title_ne": "टिकापुर",
    "type": "Municipality",
    "code": "tikapurmun",
    "order": 635,
    "district": 67
  },
  {
    "id": 2001,
    "bbox": [
      87.8300543313339,
      27.0935081156928,
      88.0193626014004,
      27.2445320160917
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.9266055572498,
        27.17326283212461
      ]
    },
    "title": "Falelung",
    "title_en": "Falelung",
    "title_ne": "फालेलुङ",
    "type": "Rural Municipality",
    "code": "phalelungmun",
    "order": 636,
    "district": 2
  },
  {
    "id": 18005,
    "bbox": [
      85.7377143345881,
      26.65560036779,
      85.7973662769969,
      26.7121914416474
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.76502706389886,
        26.68746312369754
      ]
    },
    "title": "Ekdara",
    "title_en": "Ekdara",
    "title_ne": "एकडारा",
    "type": "Rural Municipality",
    "code": "ekdaramun",
    "order": 637,
    "district": 18
  },
  {
    "id": 18009,
    "bbox": [
      85.7831292686511,
      26.6685854190042,
      85.8486036607907,
      26.7444084504932
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.81176561310458,
        26.703494549398297
      ]
    },
    "title": "Mahottari",
    "title_en": "Mahottari",
    "title_ne": "महोत्तरी",
    "type": "Rural Municipality",
    "code": "mahottarimun",
    "order": 638,
    "district": 18
  },
  {
    "id": 18012,
    "bbox": [
      85.8331131039761,
      26.6473437705384,
      85.9064954363533,
      26.7582703124555
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.8684581320866,
        26.694454186467343
      ]
    },
    "title": "Pipra",
    "title_en": "Pipra",
    "title_ne": "पिपरा",
    "type": "Rural Municipality",
    "code": "pipramun",
    "order": 639,
    "district": 18
  },
  {
    "id": 18014,
    "bbox": [
      85.7210004066526,
      26.7694386967792,
      85.7775318452795,
      26.8564341538597
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.73526972372909,
        26.81279514120898
      ]
    },
    "title": "Samsi",
    "title_en": "Samsi",
    "title_ne": "साम्सी",
    "type": "Rural Municipality",
    "code": "samsimun",
    "order": 640,
    "district": 18
  },
  {
    "id": 19011,
    "bbox": [
      85.4899216196376,
      26.9637313553552,
      85.5998766526089,
      27.064883971179
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.54846832162976,
        27.011273406090712
      ]
    },
    "title": "Haripur",
    "title_en": "Haripur",
    "title_ne": "हरिपुर",
    "type": "Municipality",
    "code": "harionmun",
    "order": 641,
    "district": 19
  },
  {
    "id": 24001,
    "bbox": [
      85.4602521879963,
      27.6010887473675,
      85.5638319539678,
      27.6943191265912
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.51361593544274,
        27.648341425370454
      ]
    },
    "title": "Banepa",
    "title_en": "Banepa",
    "title_ne": "बनेपा",
    "type": "Municipality",
    "code": "banepamun",
    "order": 642,
    "district": 30
  },
  {
    "id": 24004,
    "bbox": [
      85.7335343496782,
      27.5003213698191,
      85.8809912596494,
      27.6432075921086
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.80512721916637,
        27.5808108842169
      ]
    },
    "title": "Chaurideurali",
    "title_en": "Chaurideurali",
    "title_ne": "चौंरीदेउराली",
    "type": "Rural Municipality",
    "code": "chaurideuralimun",
    "order": 643,
    "district": 30
  },
  {
    "id": 24006,
    "bbox": [
      85.4094103226013,
      27.3685933408002,
      85.5757106898093,
      27.488204583206
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.4967538646029,
        27.428756877472154
      ]
    },
    "title": "Khanikhola",
    "title_en": "Khanikhola",
    "title_ne": "खानीखोला",
    "type": "Rural Municipality",
    "code": "khanikholamun",
    "order": 644,
    "district": 30
  },
  {
    "id": 24009,
    "bbox": [
      85.5558277420222,
      27.5092811983466,
      85.7187001314436,
      27.6036749044386
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.63978934638348,
        27.55322511571306
      ]
    },
    "title": "Namobuddha",
    "title_en": "Namobuddha",
    "title_ne": "नमोबुद्ध",
    "type": "Municipality",
    "code": "namobuddhamun",
    "order": 645,
    "district": 30
  },
  {
    "id": 24010,
    "bbox": [
      85.3869205693487,
      27.52862368597,
      85.5658231128143,
      27.6371195299458
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.47827187752432,
        27.577256663808953
      ]
    },
    "title": "Panauti",
    "title_en": "Panauti",
    "title_ne": "पनौती",
    "type": "Municipality",
    "code": "panautimun",
    "order": 646,
    "district": 30
  },
  {
    "id": 24013,
    "bbox": [
      85.6913416981543,
      27.4386118280677,
      85.821516639153,
      27.5847175339282
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.75713436610586,
        27.509665616819987
      ]
    },
    "title": "Temal",
    "title_en": "Temal",
    "title_ne": "तेमाल",
    "type": "Rural Municipality",
    "code": "temalmun",
    "order": 647,
    "district": 30
  },
  {
    "id": 47002,
    "bbox": [
      83.5645247702138,
      27.6621718084475,
      83.7776546241391,
      27.8719962214839
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.65638081088001,
        27.756703727018355
      ]
    },
    "title": "Mathagadhi",
    "title_en": "Mathagadhi",
    "title_ne": "माथागढी",
    "type": "Rural Municipality",
    "code": "mathagadhimun",
    "order": 648,
    "district": 39
  },
  {
    "id": 47004,
    "bbox": [
      83.6791008939346,
      27.7558378238166,
      83.893149351776,
      27.8920945524172
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.773721329215,
        27.814127503772408
      ]
    },
    "title": "Purbakhola",
    "title_en": "Purbakhola",
    "title_ne": "पुर्वखोला",
    "type": "Rural Municipality",
    "code": "purbakholamun",
    "order": 649,
    "district": 39
  },
  {
    "id": 47006,
    "bbox": [
      83.6321151251559,
      27.809119658531,
      83.7571859293751,
      27.9275249304866
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.69258572722536,
        27.869106710563262
      ]
    },
    "title": "Rambha",
    "title_en": "Rambha",
    "title_ne": "रम्भा",
    "type": "Rural Municipality",
    "code": "rambhamun",
    "order": 650,
    "district": 39
  },
  {
    "id": 46005,
    "bbox": [
      83.1464370034757,
      28.0952575070006,
      83.2604463219999,
      28.2337353790749
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.21193159075965,
        28.15700460904304
      ]
    },
    "title": "Isma",
    "title_en": "Isma",
    "title_ne": "इस्मा",
    "type": "Rural Municipality",
    "code": "ismamun",
    "order": 651,
    "district": 41
  },
  {
    "id": 39001,
    "bbox": [
      83.7406069540814,
      28.1125393522264,
      83.857699897086,
      28.2216899245922
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.79796196308014,
        28.15657980811486
      ]
    },
    "title": "Aandhikhola",
    "title_en": "Aandhikhola",
    "title_ne": "आँधिखोला",
    "type": "Rural Municipality",
    "code": "aandhikholamun",
    "order": 652,
    "district": 42
  },
  {
    "id": 39004,
    "bbox": [
      83.8473105124583,
      27.9113950637241,
      83.9463493902629,
      28.0752036309265
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.89736468751676,
        28.00955596504518
      ]
    },
    "title": "Biruwa",
    "title_en": "Biruwa",
    "title_ne": "बिरुवा",
    "type": "Rural Municipality",
    "code": "biruwamun",
    "order": 653,
    "district": 42
  },
  {
    "id": 39006,
    "bbox": [
      83.5839913004992,
      27.8985676069717,
      83.7795415624285,
      28.0183001748348
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.67226401037678,
        27.95491650384722
      ]
    },
    "title": "Galyang",
    "title_en": "Galyang",
    "title_ne": "गल्याङ",
    "type": "Municipality",
    "code": "galyangmun",
    "order": 654,
    "district": 42
  },
  {
    "id": 39009,
    "bbox": [
      83.809163760909,
      28.1353475398377,
      83.9271743993993,
      28.2143808366683
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.86806302184235,
        28.171954032191834
      ]
    },
    "title": "Phedikhola",
    "title_en": "Phedikhola",
    "title_ne": "फेदीखोला",
    "type": "Rural Municipality",
    "code": "phedikholamun",
    "order": 655,
    "district": 42
  },
  {
    "id": 39010,
    "bbox": [
      83.7913783041089,
      28.0313403661271,
      84.004813390473,
      28.1516117326023
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.89295219003844,
        28.098462029131877
      ]
    },
    "title": "Putalibazar",
    "title_en": "Putalibazar",
    "title_ne": "पुतलीबजार",
    "type": "Municipality",
    "code": "putalibazarmun",
    "order": 656,
    "district": 42
  },
  {
    "id": 38004,
    "bbox": [
      83.9670177184302,
      27.9025923444572,
      84.1633913494846,
      28.0234824438502
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.0429145607285,
        27.96557781419413
      ]
    },
    "title": "Bhimad",
    "title_en": "Bhimad",
    "title_ne": "भिमाद",
    "type": "Municipality",
    "code": "bhimadmun",
    "order": 657,
    "district": 43
  },
  {
    "id": 62003,
    "bbox": [
      82.4331049394411,
      29.0527255893955,
      82.7964954870978,
      29.428669031051
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.64656422214891,
        29.24042004571128
      ]
    },
    "title": "Jagadulla",
    "title_en": "Jagadulla",
    "title_ne": "जगदुल्ला",
    "type": "Rural Municipality",
    "code": "jagdullamun",
    "order": 658,
    "district": 57
  },
  {
    "id": 61006,
    "bbox": [
      81.8200630318582,
      28.636169184829,
      82.0406521865749,
      28.7470532492747
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.9247193482125,
        28.685481808587717
      ]
    },
    "title": "Shiwalaya",
    "title_en": "Shiwalaya",
    "title_ne": "शिवालय",
    "type": "Rural Municipality",
    "code": "shibalayamun",
    "order": 659,
    "district": 62
  },
  {
    "id": 60003,
    "bbox": [
      81.5809995714643,
      28.8399176855758,
      81.7036942354109,
      29.0499160617595
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.64286521249824,
        28.95247870968115
      ]
    },
    "title": "Bhairabi",
    "title_en": "Bhairabi",
    "title_ne": "भैरवी",
    "type": "Rural Municipality",
    "code": "bhairabimun",
    "order": 660,
    "district": 63
  },
  {
    "id": 60011,
    "bbox": [
      81.4815790489365,
      28.9324394942251,
      81.6212341815058,
      29.0536782506133
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.55090785974389,
        29.00208420037362
      ]
    },
    "title": "Thantikandh",
    "title_en": "Thantikandh",
    "title_ne": "ठाँटीकाँध",
    "type": "Rural Municipality",
    "code": "thantikandhmun",
    "order": 661,
    "district": 63
  },
  {
    "id": 59002,
    "bbox": [
      81.5293439838601,
      28.3699802418794,
      81.836024119797,
      28.5692362820359
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.69194677922198,
        28.457611425333294
      ]
    },
    "title": "Bheriganga",
    "title_en": "Bheriganga",
    "title_ne": "भेरीगंगा",
    "type": "Municipality",
    "code": "bherigangamun",
    "order": 662,
    "district": 64
  },
  {
    "id": 69003,
    "bbox": [
      81.1019992000941,
      28.9023612696169,
      81.3376929977049,
      29.0505986469958
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.22811321425894,
        28.975813494728804
      ]
    },
    "title": "Dhakari",
    "title_en": "Dhakari",
    "title_ne": "ढकारी",
    "type": "Rural Municipality",
    "code": "dhakarimun",
    "order": 663,
    "district": 69
  },
  {
    "id": 69004,
    "bbox": [
      81.2493303724185,
      29.0060439179646,
      81.4275461732203,
      29.1246885101138
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.33821150113513,
        29.059941415464433
      ]
    },
    "title": "Kamalbazar",
    "title_en": "Kamalbazar",
    "title_ne": "कमलबजार",
    "type": "Municipality",
    "code": "kamalbazarmun",
    "order": 664,
    "district": 69
  },
  {
    "id": 73001,
    "bbox": [
      80.4028694229099,
      29.3092647704266,
      80.6232704975184,
      29.4185610097319
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.51776184712067,
        29.361323096908947
      ]
    },
    "title": "Ajaymeru",
    "title_en": "Ajaymeru",
    "title_ne": "अजयमेरु",
    "type": "Rural Municipality",
    "code": "ajayamerumun",
    "order": 665,
    "district": 74
  },
  {
    "id": 73007,
    "bbox": [
      80.1844656606324,
      29.0062478686618,
      80.492003264422,
      29.2531999545224
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.34474709352618,
        29.128756185138347
      ]
    },
    "title": "Parashuram",
    "title_en": "Parashuram",
    "title_ne": "परशुराम",
    "type": "Municipality",
    "code": "parshurammun",
    "order": 666,
    "district": 74
  },
  {
    "id": 72001,
    "bbox": [
      80.200773802462,
      28.9096986129122,
      80.3453345175694,
      29.0585502562716
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.27064037664194,
        28.99368719386942
      ]
    },
    "title": "Bedkot",
    "title_en": "Bedkot",
    "title_ne": "बेदकोट",
    "type": "Municipality",
    "code": "bedkotmun",
    "order": 667,
    "district": 75
  },
  {
    "id": 72003,
    "bbox": [
      80.2185374127273,
      28.743909386172,
      80.31478647912,
      28.8034382781106
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.26346723550158,
        28.773515853950297
      ]
    },
    "title": "Beldandi",
    "title_en": "Beldandi",
    "title_ne": "बेलडाँडी",
    "type": "Rural Municipality",
    "code": "beldandimun",
    "order": 668,
    "district": 75
  },
  {
    "id": 72008,
    "bbox": [
      80.3972420700048,
      28.5518152175869,
      80.5542620943766,
      28.7268488860942
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.47703781148488,
        28.64771880292701
      ]
    },
    "title": "Punarbas",
    "title_en": "Punarbas",
    "title_ne": "पुनर्वास",
    "type": "Municipality",
    "code": "punarbasmun",
    "order": 669,
    "district": 75
  },
  {
    "id": 72009,
    "bbox": [
      80.3147244087962,
      28.8036099198922,
      80.4594520773208,
      29.04771358781
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.37817844227132,
        28.928749217622947
      ]
    },
    "title": "Shuklaphanta",
    "title_en": "Shuklaphanta",
    "title_ne": "शुक्लाफाँटा",
    "type": "Municipality",
    "code": "shuklaphantamun",
    "order": 670,
    "district": 75
  },
  {
    "id": 72099,
    "bbox": [
      80.0974760750919,
      28.7330879765296,
      80.3847450157336,
      29.0542542204702
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        80.24078320523755,
        28.866867820746602
      ]
    },
    "title": "Shuklaphanta National Park",
    "title_en": "Shuklaphanta National Park",
    "title_ne": "शुक्लाफाँटा राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 671,
    "district": 75
  },
  {
    "id": 2003,
    "bbox": [
      87.6798530954303,
      27.1504533677661,
      87.8419791649027,
      27.2913977797678
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.76269112941165,
        27.22140280382932
      ]
    },
    "title": "Hilihang",
    "title_en": "Hilihang",
    "title_ne": "हिलिहाङ",
    "type": "Rural Municipality",
    "code": "hilihangmun",
    "order": 672,
    "district": 2
  },
  {
    "id": 16003,
    "bbox": [
      86.3269438398155,
      26.5931109781737,
      86.416135987894,
      26.6699606337756
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.36712916330454,
        26.630308631047967
      ]
    },
    "title": "Bariyarpatti",
    "title_en": "Bariyarpatti",
    "title_ne": "बरियारपट्टी",
    "type": "Rural Municipality",
    "code": "bariyapattimun",
    "order": 673,
    "district": 15
  },
  {
    "id": 16005,
    "bbox": [
      86.2101306955005,
      26.7022115022956,
      86.2944519665582,
      26.7501806856785
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.2513247778174,
        26.728932158991228
      ]
    },
    "title": "Bishnupur",
    "title_en": "Bishnupur",
    "title_ne": "विष्णुपुर",
    "type": "Rural Municipality",
    "code": "bishnupurmunsiraha",
    "order": 674,
    "district": 15
  },
  {
    "id": 16007,
    "bbox": [
      86.271266666514,
      26.7142701338242,
      86.4071448608363,
      26.8920653817225
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.34391730300196,
        26.81478158475833
      ]
    },
    "title": "Golbazar",
    "title_en": "Golbazar",
    "title_ne": "गोलबजार",
    "type": "Municipality",
    "code": "golbazarmun",
    "order": 675,
    "district": 15
  },
  {
    "id": 16008,
    "bbox": [
      86.1445221152452,
      26.6954626685829,
      86.2602548473123,
      26.8140658610207
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.19971542472838,
        26.76055524344578
      ]
    },
    "title": "Kalyanpur",
    "title_en": "Kalyanpur",
    "title_ne": "कल्याणपुर",
    "type": "Municipality",
    "code": "kalyanpurmun",
    "order": 676,
    "district": 15
  },
  {
    "id": 15003,
    "bbox": [
      86.6260679598884,
      26.4491088899437,
      86.708818043821,
      26.5642431106864
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.67319214494067,
        26.49547978093762
      ]
    },
    "title": "Rajgadh",
    "title_en": "Rajgadh",
    "title_ne": "राजगढ़",
    "type": "Rural Municipality",
    "code": "belhichapenamun",
    "order": 677,
    "district": 16
  },
  {
    "id": 15006,
    "bbox": [
      86.6950845043532,
      26.4223835197793,
      86.7652460339658,
      26.5083612683008
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.73166956040788,
        26.46207957288851
      ]
    },
    "title": "Chhinnamasta",
    "title_en": "Chhinnamasta",
    "title_ne": "छिन्नमस्ता",
    "type": "Rural Municipality",
    "code": "chhinnamastamun",
    "order": 678,
    "district": 16
  },
  {
    "id": 15007,
    "bbox": [
      86.5729897970314,
      26.4753771031361,
      86.6904235616156,
      26.5863796003381
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.63048483273616,
        26.530241948646243
      ]
    },
    "title": "Dakneshwori",
    "title_en": "Dakneshwori",
    "title_ne": "डाक्नेश्वरी",
    "type": "Municipality",
    "code": "dakneshworimun",
    "order": 679,
    "district": 16
  },
  {
    "id": 15008,
    "bbox": [
      86.7801806207038,
      26.4390855423734,
      86.9730134186986,
      26.5848472657384
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.87630741271239,
        26.51255225078719
      ]
    },
    "title": "Hanumannagar Kankalini",
    "title_en": "Hanumannagar Kankalini",
    "title_ne": "हनुमाननगर कङ्‌कालिनी",
    "type": "Municipality",
    "code": "hanumannagarkankalinimun",
    "order": 680,
    "district": 16
  },
  {
    "id": 15010,
    "bbox": [
      86.5423469895145,
      26.5629720915309,
      86.6568075833125,
      26.6999204017786
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.60466497765023,
        26.640823601992686
      ]
    },
    "title": "Khadak",
    "title_en": "Khadak",
    "title_ne": "खडक",
    "type": "Municipality",
    "code": "khadakmun",
    "order": 681,
    "district": 16
  },
  {
    "id": 15013,
    "bbox": [
      86.6838566211457,
      26.5573598897189,
      86.7606598339166,
      26.7123332943031
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.72973278492537,
        26.61272133910749
      ]
    },
    "title": "Rupani",
    "title_en": "Rupani",
    "title_ne": "रुपनी",
    "type": "Rural Municipality",
    "code": "rupanimun",
    "order": 682,
    "district": 16
  },
  {
    "id": 15015,
    "bbox": [
      86.6260448368504,
      26.5443340635926,
      86.7449509056406,
      26.7098138230881
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.682106733291,
        26.638243351178527
      ]
    },
    "title": "Shambhunath",
    "title_en": "Shambhunath",
    "title_ne": "शम्भुनाथ",
    "type": "Municipality",
    "code": "shambhunathmun",
    "order": 683,
    "district": 16
  },
  {
    "id": 28002,
    "bbox": [
      85.0619021253954,
      27.8528106391921,
      85.2288282618899,
      27.9860851734275
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.13607411896302,
        27.925868921501536
      ]
    },
    "title": "Bidur",
    "title_en": "Bidur",
    "title_ne": "विदुर",
    "type": "Municipality",
    "code": "bidurmun",
    "order": 684,
    "district": 25
  },
  {
    "id": 33014,
    "bbox": [
      84.9100571614389,
      27.0189083747742,
      84.9999154245805,
      27.076932571491
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.95287987355024,
        27.047362163522866
      ]
    },
    "title": "Prasauni",
    "title_en": "Prasauni",
    "title_ne": "प्रसौनी",
    "type": "Rural Municipality",
    "code": "prasaunimun",
    "order": 685,
    "district": 33
  },
  {
    "id": 35004,
    "bbox": [
      84.5135516413279,
      27.5476112270892,
      84.6432410711885,
      27.6849983866753
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.57118542209622,
        27.60575823863787
      ]
    },
    "title": "Khairahani",
    "title_en": "Khairahani",
    "title_ne": "खैरहनी",
    "type": "Municipality",
    "code": "khairahanimun",
    "order": 686,
    "district": 35
  },
  {
    "id": 46007,
    "bbox": [
      83.0218985820951,
      28.1067659055868,
      83.124802944809,
      28.2436812892899
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.07301488250032,
        28.176078278115536
      ]
    },
    "title": "Madane",
    "title_en": "Madane",
    "title_ne": "मदाने",
    "type": "Rural Municipality",
    "code": "madanemun",
    "order": 687,
    "district": 41
  },
  {
    "id": 46009,
    "bbox": [
      83.1767232737216,
      28.101560281081,
      83.3844109585871,
      28.2679997489799
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.29174995508033,
        28.167044667727946
      ]
    },
    "title": "Musikot",
    "title_en": "Musikot",
    "title_ne": "मुसिकोट",
    "type": "Municipality",
    "code": "musikotmungulmi",
    "order": 688,
    "district": 41
  },
  {
    "id": 46012,
    "bbox": [
      83.3838307572865,
      27.963939850782,
      83.5499747875797,
      28.0964280478044
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.4682289594357,
        28.03146112520002
      ]
    },
    "title": "Satyawati",
    "title_en": "Satyawati",
    "title_ne": "सत्यवती",
    "type": "Rural Municipality",
    "code": "satyawatimun",
    "order": 689,
    "district": 41
  },
  {
    "id": 38006,
    "bbox": [
      84.2924675315599,
      27.741222131644,
      84.4719991513594,
      27.8802356663396
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.3721487261601,
        27.81043167633434
      ]
    },
    "title": "Devghat",
    "title_en": "Devghat",
    "title_ne": "देवघाट",
    "type": "Rural Municipality",
    "code": "devghatmun",
    "order": 690,
    "district": 43
  },
  {
    "id": 36001,
    "bbox": [
      84.7417637067664,
      28.0393763315445,
      84.9722830253257,
      28.1993080934081
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.85017647061328,
        28.12067396642453
      ]
    },
    "title": "Aarughat",
    "title_en": "Aarughat",
    "title_ne": "आरूघाट",
    "type": "Rural Municipality",
    "code": "aarughatmun",
    "order": 691,
    "district": 44
  },
  {
    "id": 36009,
    "bbox": [
      84.5403150867176,
      27.8579329743785,
      84.739767798701,
      27.9980124001417
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.63339570419012,
        27.92621498963495
      ]
    },
    "title": "Sahid Lakhan",
    "title_en": "Sahid Lakhan",
    "title_ne": "शहिद लखन",
    "type": "Rural Municipality",
    "code": "shahidlakhanmun",
    "order": 692,
    "district": 44
  },
  {
    "id": 37006,
    "bbox": [
      84.2357438985953,
      28.2509846524292,
      84.6166905708937,
      28.5102678481381
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.41625579030271,
        28.384473773011077
      ]
    },
    "title": "Marsyangdi",
    "title_en": "Marsyangdi",
    "title_ne": "मर्स्याङदी",
    "type": "Rural Municipality",
    "code": "marsyangdimun",
    "order": 693,
    "district": 45
  },
  {
    "id": 41002,
    "bbox": [
      84.021887264812,
      28.5672147108943,
      84.4460002404745,
      28.9004527054085
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.23058194098726,
        28.769464700530698
      ]
    },
    "title": "Narpa Bhoomi",
    "title_en": "Narpa Bhoomi",
    "title_ne": "नार्पा भूमि",
    "type": "Rural Municipality",
    "code": "narpabhumimun",
    "order": 694,
    "district": 47
  },
  {
    "id": 43001,
    "bbox": [
      83.5727270011335,
      28.3481355440701,
      83.8715882807727,
      28.6932570673026
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.70910792653943,
        28.52984764116861
      ]
    },
    "title": "Annapurna",
    "title_en": "Annapurna",
    "title_ne": "अन्नपूर्ण",
    "type": "Rural Municipality",
    "code": "annapurnamunmyagdi",
    "order": 695,
    "district": 49
  },
  {
    "id": 43006,
    "bbox": [
      83.4205501527431,
      28.3745014343387,
      83.6174695325064,
      28.6974552141291
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.51773981153627,
        28.532936172778825
      ]
    },
    "title": "Raghuganga",
    "title_en": "Raghuganga",
    "title_ne": "रघुगंगा",
    "type": "Rural Municipality",
    "code": "raghugangamun",
    "order": 696,
    "district": 49
  },
  {
    "id": 62006,
    "bbox": [
      82.7019867591092,
      29.0398412423005,
      83.2677136270041,
      29.7064485543897
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        82.9652710125383,
        29.382115203985585
      ]
    },
    "title": "Shey Phoksundo",
    "title_en": "Shey Phoksundo",
    "title_ne": "शे फोक्सुण्डो",
    "type": "Rural Municipality",
    "code": "shephoksundomun",
    "order": 697,
    "district": 57
  },
  {
    "id": 59003,
    "bbox": [
      81.5331658922107,
      28.5056718599904,
      81.776374947732,
      28.6922484552722
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.63452469761843,
        28.602326178263894
      ]
    },
    "title": "Birendranagar",
    "title_en": "Birendranagar",
    "title_ne": "बीरेन्द्रनगर",
    "type": "Municipality",
    "code": "birendranagarmun",
    "order": 698,
    "district": 64
  },
  {
    "id": 59005,
    "bbox": [
      81.745728087833,
      28.5307604269429,
      81.9187681965774,
      28.7241090760363
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.8316199822898,
        28.620713720766265
      ]
    },
    "title": "Chingad",
    "title_en": "Chingad",
    "title_ne": "चिङ्गाड",
    "type": "Rural Municipality",
    "code": "chingadmun",
    "order": 699,
    "district": 64
  },
  {
    "id": 69010,
    "bbox": [
      81.2953064749751,
      28.7482784093156,
      81.5820373826944,
      29.0247231130107
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.48808058523721,
        28.886534347281234
      ]
    },
    "title": "Turmakhad",
    "title_en": "Turmakhad",
    "title_ne": "तुर्माखाँद",
    "type": "Rural Municipality",
    "code": "turmakhadmun",
    "order": 700,
    "district": 69
  },
  {
    "id": 76003,
    "bbox": [
      83.9980717370632,
      27.7639416585248,
      84.1210808086726,
      27.8698765972561
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.06367526466408,
        27.812295452539573
      ]
    },
    "title": "Baudikali",
    "title_en": "Baudikali",
    "title_ne": "बौदीकाली",
    "type": "Rural Municipality",
    "code": "baudikalimun",
    "order": 701,
    "district": 481
  },
  {
    "id": 76004,
    "bbox": [
      84.1478579870304,
      27.6509299568565,
      84.2617760975888,
      27.7771276807812
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.20559282053597,
        27.715609778225268
      ]
    },
    "title": "Devchuli",
    "title_en": "Devchuli",
    "title_ne": "देवचुली",
    "type": "Municipality",
    "code": "devchulimun",
    "order": 702,
    "district": 481
  },
  {
    "id": 76005,
    "bbox": [
      84.2462849719675,
      27.6672480924743,
      84.431360294216,
      27.7982960435142
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.32936214846724,
        27.72983901063315
      ]
    },
    "title": "Gaidakot",
    "title_en": "Gaidakot",
    "title_ne": "गैंडाकोट",
    "type": "Municipality",
    "code": "gaindakotmun",
    "order": 703,
    "district": 481
  },
  {
    "id": 76008,
    "bbox": [
      83.895718322501,
      27.5407353043532,
      84.079134328016,
      27.729629191759
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.9802300344439,
        27.628160962843758
      ]
    },
    "title": "Madhyabindu",
    "title_en": "Madhyabindu",
    "title_ne": "मध्यविन्दु",
    "type": "Municipality",
    "code": "madhyabindumun",
    "order": 704,
    "district": 481
  },
  {
    "id": 69099,
    "bbox": [
      81.1349238359414,
      29.2946754914751,
      81.2253566092031,
      29.3866712403906
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.16876962279888,
        29.34403394346729
      ]
    },
    "title": "Khaptad National Park",
    "title_en": "Khaptad National Park",
    "title_ne": "खप्तड राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 705,
    "district": 69
  },
  {
    "id": 15099,
    "bbox": [
      86.9187365618188,
      26.5688647777308,
      87.0145939355117,
      26.7108865394866
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.97074962884541,
        26.642044585629264
      ]
    },
    "title": "Koshi Tappu Wildlife Reserve",
    "title_en": "Koshi Tappu Wildlife Reserve",
    "title_ne": "कोशी टापु वन्यजन्तु आरक्ष",
    "type": "Wieldlife Reserve",
    "code": null,
    "order": 706,
    "district": 16
  },
  {
    "id": 2006,
    "bbox": [
      87.6846819170782,
      27.0546345106468,
      87.9173149488361,
      27.1853567230559
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.7993810728232,
        27.116915423950594
      ]
    },
    "title": "Phidim",
    "title_en": "Phidim",
    "title_ne": "फिदिम",
    "type": "Municipality",
    "code": "phidimmun",
    "order": 707,
    "district": 2
  },
  {
    "id": 3009,
    "bbox": [
      87.8603148882065,
      26.988003234979,
      88.0498123664753,
      27.106266902088
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.95464518877814,
        27.0505043564854
      ]
    },
    "title": "Sandakpur",
    "title_en": "Sandakpur",
    "title_ne": "सन्दकपुर",
    "type": "Rural Municipality",
    "code": "sandakpurmun",
    "order": 708,
    "district": 3
  },
  {
    "id": 4007,
    "bbox": [
      87.6357086476981,
      26.4692356936353,
      87.7926931993217,
      26.6285305077414
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.70501686898355,
        26.53256484209302
      ]
    },
    "title": "Gauradhaha",
    "title_en": "Gauradhaha",
    "title_ne": "गौरादह",
    "type": "Municipality",
    "code": "gauradahamun",
    "order": 709,
    "district": 4
  },
  {
    "id": 4011,
    "bbox": [
      87.8986887590738,
      26.361181055769,
      88.0885705766755,
      26.469539160458
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.99957004873077,
        26.42371684631273
      ]
    },
    "title": "Kachankawal",
    "title_en": "Kachankawal",
    "title_ne": "कचनकवल",
    "type": "Rural Municipality",
    "code": "kachankawalmun",
    "order": 710,
    "district": 4
  },
  {
    "id": 5002,
    "bbox": [
      87.2385904349898,
      26.3726989701931,
      87.3243979825532,
      26.5122005805835
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.27721567619342,
        26.449432670637346
      ]
    },
    "title": "Biratnagar",
    "title_en": "Biratnagar",
    "title_ne": "विराटनगर",
    "type": "Metropolitan City",
    "code": "biratnagarmun",
    "order": 711,
    "district": 5
  },
  {
    "id": 5012,
    "bbox": [
      87.5214380773513,
      26.5513167533432,
      87.6061391685967,
      26.6692809213449
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.56521745680702,
        26.611889669378684
      ]
    },
    "title": "Patahrishanishchare",
    "title_en": "Patahrishanishchare",
    "title_ne": "पथरी शनिश्चरे",
    "type": "Municipality",
    "code": "patharishanishcharemun",
    "order": 712,
    "district": 5
  },
  {
    "id": 5015,
    "bbox": [
      87.284937959998,
      26.601623051257,
      87.4082235884278,
      26.7167345625206
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.34990784401506,
        26.657539273460287
      ]
    },
    "title": "Sundarharaicha",
    "title_en": "Sundarharaicha",
    "title_ne": "सुन्दरहरैंचा",
    "type": "Municipality",
    "code": "sundarharaichamun",
    "order": 713,
    "district": 5
  },
  {
    "id": 6005,
    "bbox": [
      87.1987212299966,
      26.7119184880148,
      87.3539389370868,
      26.8787980957452
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.27450419194452,
        26.80092439263363
      ]
    },
    "title": "Dharan",
    "title_en": "Dharan",
    "title_ne": "धरान",
    "type": "Submetropolitan City",
    "code": "dharan",
    "order": 714,
    "district": 6
  },
  {
    "id": 11005,
    "bbox": [
      86.7883588298694,
      27.4282371156868,
      87.0101569872844,
      27.878516168146
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.9020906833416,
        27.64476684781446
      ]
    },
    "title": "Mahakulung",
    "title_en": "Mahakulung",
    "title_ne": "माहाकुलुङ",
    "type": "Rural Municipality",
    "code": "mahakulungmun",
    "order": 715,
    "district": 11
  },
  {
    "id": 27002,
    "bbox": [
      85.1886443524253,
      27.6453570974925,
      85.2778127089963,
      27.7268575477248
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.2295513743239,
        27.68688537933637
      ]
    },
    "title": "Chandragiri",
    "title_en": "Chandragiri",
    "title_ne": "चन्द्रागिरी",
    "type": "Municipality",
    "code": "chandragirimun",
    "order": 716,
    "district": 27
  },
  {
    "id": 27003,
    "bbox": [
      85.2218858992065,
      27.5704485249992,
      85.2952023643882,
      27.6576823995931
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.26113870286386,
        27.61621686685688
      ]
    },
    "title": "Dakshinkali",
    "title_en": "Dakshinkali",
    "title_ne": "दक्षिणकाली",
    "type": "Municipality",
    "code": "dakshinkalimun",
    "order": 717,
    "district": 27
  },
  {
    "id": 27004,
    "bbox": [
      85.3644371922437,
      27.710750744751,
      85.4715323812764,
      27.8176526673154
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.41397020346483,
        27.77394252939076
      ]
    },
    "title": "Gokarneshwor",
    "title_en": "Gokarneshwor",
    "title_ne": "गोकर्णेश्वर",
    "type": "Municipality",
    "code": "gokarneshwormun",
    "order": 718,
    "district": 27
  },
  {
    "id": 27005,
    "bbox": [
      85.3645913081335,
      27.6891926122383,
      85.4695694943635,
      27.7760773414374
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.41926836976558,
        27.735163344778055
      ]
    },
    "title": "Kageshwori Manahora",
    "title_en": "Kageshwori Manahora",
    "title_ne": "कागेश्वरी मनोहरा",
    "type": "Municipality",
    "code": "kageshworimanoharamun",
    "order": 719,
    "district": 27
  },
  {
    "id": 27006,
    "bbox": [
      85.2772633204619,
      27.6679770979624,
      85.3725647018861,
      27.7500760561369
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.32727724898942,
        27.709023432456895
      ]
    },
    "title": "Kathmandu",
    "title_en": "Kathmandu",
    "title_ne": "काठमाण्डौं",
    "type": "Metropolitan City",
    "code": "kathmandu",
    "order": 720,
    "district": 27
  },
  {
    "id": 27007,
    "bbox": [
      85.2485818397523,
      27.6443198434467,
      85.2993912492226,
      27.6917672554306
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.27515324366072,
        27.666789956963008
      ]
    },
    "title": "Kirtipur",
    "title_en": "Kirtipur",
    "title_ne": "कीर्तिपुर",
    "type": "Municipality",
    "code": "kirtipurmun",
    "order": 721,
    "district": 27
  },
  {
    "id": 46003,
    "bbox": [
      83.0661994693237,
      28.0597827319664,
      83.2114875368731,
      28.1768288936489
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.14308262414119,
        28.111625393620244
      ]
    },
    "title": "Dhurkot",
    "title_en": "Dhurkot",
    "title_ne": "धुर्कोट",
    "type": "Rural Municipality",
    "code": "dhurkotmun",
    "order": 722,
    "district": 41
  },
  {
    "id": 46006,
    "bbox": [
      83.4779001984371,
      27.9737136947359,
      83.6052722008959,
      28.1270199360211
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.542339408106,
        28.05136773215909
      ]
    },
    "title": "Kaligandaki",
    "title_en": "Kaligandaki",
    "title_ne": "कालीगण्डकी",
    "type": "Rural Municipality",
    "code": "kaligandakimungulmi",
    "order": 723,
    "district": 41
  },
  {
    "id": 46011,
    "bbox": [
      83.3732108189758,
      27.9306677470748,
      83.4738910342239,
      28.0340509170546
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.42153557024334,
        27.980681895237144
      ]
    },
    "title": "Ruru",
    "title_en": "Ruru",
    "title_ne": "रुरु",
    "type": "Rural Municipality",
    "code": "rurumun",
    "order": 724,
    "district": 41
  },
  {
    "id": 40001,
    "bbox": [
      83.7006203912419,
      28.2548380085179,
      83.9491558541235,
      28.6134385595746
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.82525921459843,
        28.442434212933108
      ]
    },
    "title": "Annapurna",
    "title_en": "Annapurna",
    "title_ne": "अन्नपूर्ण",
    "type": "Rural Municipality",
    "code": "annapurnamunkaski",
    "order": 725,
    "district": 46
  },
  {
    "id": 45003,
    "bbox": [
      83.3899337121695,
      28.1133179548979,
      83.5558880392001,
      28.1819557252097
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.47174985679794,
        28.15026365650011
      ]
    },
    "title": "Bareng",
    "title_en": "Bareng",
    "title_ne": "वरेङ",
    "type": "Rural Municipality",
    "code": "barengmun",
    "order": 726,
    "district": 50
  },
  {
    "id": 45007,
    "bbox": [
      83.4649177671183,
      28.2024701792014,
      83.5638400031388,
      28.3244033326798
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.51216846993104,
        28.26193054335655
      ]
    },
    "title": "Kanthekhola",
    "title_en": "Kanthekhola",
    "title_ne": "काठेखोला",
    "type": "Rural Municipality",
    "code": "kathekholamun",
    "order": 727,
    "district": 50
  },
  {
    "id": 45010,
    "bbox": [
      83.3021668054118,
      28.2439470955701,
      83.4838263273693,
      28.3715372149429
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.40177828774152,
        28.311922830425864
      ]
    },
    "title": "Tara Khola",
    "title_en": "Tara Khola",
    "title_ne": "ताराखोला",
    "type": "Rural Municipality",
    "code": "tarakholamun",
    "order": 728,
    "district": 50
  },
  {
    "id": 2004,
    "bbox": [
      87.5348295716066,
      27.0052418675862,
      87.6945250295633,
      27.1441673150573
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.63028160266983,
        27.068006549656765
      ]
    },
    "title": "Kummayak",
    "title_en": "Kummayak",
    "title_ne": "कुम्मायक",
    "type": "Rural Municipality",
    "code": "kummayakmun",
    "order": 729,
    "district": 2
  },
  {
    "id": 2005,
    "bbox": [
      87.5209019252199,
      26.8598967052017,
      87.7121317330431,
      27.0168944763711
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.6255517253226,
        26.924281619532266
      ]
    },
    "title": "Miklajung",
    "title_en": "Miklajung",
    "title_ne": "मिक्लाजुङ",
    "type": "Rural Municipality",
    "code": "miklajungmunpanchthar",
    "order": 730,
    "district": 2
  },
  {
    "id": 2008,
    "bbox": [
      87.7676872970226,
      27.2159291766734,
      88.0802293074398,
      27.4383535384553
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        87.9514629425803,
        27.282295487329957
      ]
    },
    "title": "Yangwarak",
    "title_en": "Yangwarak",
    "title_ne": "याङवरक",
    "type": "Rural Municipality",
    "code": "yangwarakmunpanchthar",
    "order": 731,
    "district": 2
  },
  {
    "id": 12005,
    "bbox": [
      86.376678609951,
      27.1467921940535,
      86.5624206370139,
      27.2775668127263
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.4686303123159,
        27.217207801719212
      ]
    },
    "title": "Manebhanjyang",
    "title_en": "Manebhanjyang",
    "title_ne": "मानेभञ्ज्याङ",
    "type": "Rural Municipality",
    "code": "manebhanjyangmun",
    "order": 732,
    "district": 13
  },
  {
    "id": 12007,
    "bbox": [
      86.4328354132834,
      27.2233075077643,
      86.6321778781142,
      27.45450773099
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.51408042365414,
        27.323665136508005
      ]
    },
    "title": "Siddhicharan",
    "title_en": "Siddhicharan",
    "title_ne": "सिद्धिचरण",
    "type": "Municipality",
    "code": "siddhicharanmun",
    "order": 733,
    "district": 13
  },
  {
    "id": 16014,
    "bbox": [
      86.3905960440191,
      26.5730604154557,
      86.4859726139894,
      26.644956461357
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.43276639307177,
        26.607965128394817
      ]
    },
    "title": "Nawarajpur",
    "title_en": "Nawarajpur",
    "title_ne": "नवराजपुर",
    "type": "Rural Municipality",
    "code": "nawarajpurmun",
    "order": 734,
    "district": 15
  },
  {
    "id": 16017,
    "bbox": [
      86.2958874480165,
      26.6559343560517,
      86.4071608783072,
      26.7387501519952
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.3503038025811,
        26.696697231061314
      ]
    },
    "title": "Sukhipur",
    "title_en": "Sukhipur",
    "title_ne": "सुखीपुर",
    "type": "Municipality",
    "code": "sukhipurmun",
    "order": 735,
    "district": 15
  },
  {
    "id": 15001,
    "bbox": [
      86.7412739394179,
      26.5761185951775,
      86.8430803133027,
      26.7143407893639
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.79455389607581,
        26.64716812133527
      ]
    },
    "title": "Agnisair Krishna Savaran",
    "title_en": "Agnisair Krishna Savaran",
    "title_ne": "अग्निसाइर कृष्णासवरन",
    "type": "Rural Municipality",
    "code": "agnisairkrishnasawaranmun",
    "order": 736,
    "district": 16
  },
  {
    "id": 18003,
    "bbox": [
      85.7405748996359,
      26.8754826752732,
      85.9453064577024,
      27.1684330791329
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.85534241754173,
        27.036061768186634
      ]
    },
    "title": "Bardibas",
    "title_en": "Bardibas",
    "title_ne": "बर्दिबास",
    "type": "Municipality",
    "code": "bardibasmun",
    "order": 737,
    "district": 18
  },
  {
    "id": 18010,
    "bbox": [
      85.723354578977,
      26.6379093165763,
      85.791900655561,
      26.7728218271984
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.75339161829204,
        26.72476998714949
      ]
    },
    "title": "Manra Siswa",
    "title_en": "Manra Siswa",
    "title_ne": "मनरा शिसवा",
    "type": "Municipality",
    "code": "manarashiswamun",
    "order": 738,
    "district": 18
  },
  {
    "id": 19002,
    "bbox": [
      85.3218442465365,
      26.7415329940964,
      85.4257628828341,
      26.8332988300259
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.36873145897607,
        26.795306907529877
      ]
    },
    "title": "Balara",
    "title_en": "Balara",
    "title_ne": "बलरा",
    "type": "Municipality",
    "code": "balramun",
    "order": 739,
    "district": 19
  },
  {
    "id": 22003,
    "bbox": [
      86.0025132861397,
      27.7356180922629,
      86.2999820554539,
      28.1741755664199
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.15871758298346,
        27.935636983590022
      ]
    },
    "title": "Bigu",
    "title_en": "Bigu",
    "title_ne": "विगु",
    "type": "Rural Municipality",
    "code": "bigumun",
    "order": 740,
    "district": 22
  },
  {
    "id": 22004,
    "bbox": [
      86.1229313888245,
      27.6551402256152,
      86.5547160234924,
      27.9650943557104
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.34343328736811,
        27.823557633026464
      ]
    },
    "title": "Gaurishankar",
    "title_en": "Gaurishankar",
    "title_ne": "गौरिशंकर",
    "type": "Rural Municipality",
    "code": "gaurishankarmun",
    "order": 741,
    "district": 22
  },
  {
    "id": 22006,
    "bbox": [
      86.0197899982196,
      27.6793698014351,
      86.1652595123103,
      27.8188141139379
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        86.08848701020824,
        27.74975003615778
      ]
    },
    "title": "Kalinchok",
    "title_en": "Kalinchok",
    "title_ne": "कालिन्चोक",
    "type": "Rural Municipality",
    "code": "kalinchowkmun",
    "order": 742,
    "district": 22
  },
  {
    "id": 28006,
    "bbox": [
      85.168561779418,
      27.8403404796905,
      85.2856474380807,
      27.9342691957562
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.22425562197355,
        27.89298755172183
      ]
    },
    "title": "Likhu",
    "title_en": "Likhu",
    "title_ne": "लिखु",
    "type": "Rural Municipality",
    "code": "likhumunnuwakot",
    "order": 743,
    "district": 25
  },
  {
    "id": 28007,
    "bbox": [
      84.9884617801036,
      27.9239071917825,
      85.1261074836126,
      28.0676718385469
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.05630066640735,
        27.98860546737456
      ]
    },
    "title": "Meghang",
    "title_en": "Meghang",
    "title_ne": "म्यागङ",
    "type": "Rural Municipality",
    "code": "meghangmun",
    "order": 744,
    "district": 25
  },
  {
    "id": 28009,
    "bbox": [
      85.2787059667005,
      27.8161124123851,
      85.4702567302952,
      27.891822416042
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.37499568682557,
        27.852648212593035
      ]
    },
    "title": "Shivapuri",
    "title_en": "Shivapuri",
    "title_ne": "शिवपुरी",
    "type": "Rural Municipality",
    "code": "shivapurimun",
    "order": 745,
    "district": 25
  },
  {
    "id": 28011,
    "bbox": [
      85.2629663976084,
      27.9125292671899,
      85.3745223625446,
      28.0188135579181
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.32970153147488,
        27.956218095131817
      ]
    },
    "title": "Tadi",
    "title_en": "Tadi",
    "title_ne": "तादी",
    "type": "Rural Municipality",
    "code": "tadimun",
    "order": 746,
    "district": 25
  },
  {
    "id": 32001,
    "bbox": [
      85.1632082762139,
      26.8633140664272,
      85.2726061465251,
      26.9220569963815
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.21873090695203,
        26.89057183373849
      ]
    },
    "title": "Baudhimai",
    "title_en": "Baudhimai",
    "title_ne": "बौधीमाई",
    "type": "Municipality",
    "code": "baudhimaimun",
    "order": 747,
    "district": 32
  },
  {
    "id": 32003,
    "bbox": [
      85.2843326750526,
      27.0227526624329,
      85.5039577116868,
      27.2318640294496
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.36820118272279,
        27.13891853923039
      ]
    },
    "title": "Chandrapur",
    "title_en": "Chandrapur",
    "title_ne": "चन्द्रपुर",
    "type": "Municipality",
    "code": "chandrapurmun",
    "order": 748,
    "district": 32
  },
  {
    "id": 32007,
    "bbox": [
      85.2764688599118,
      26.9011433364815,
      85.3682049884968,
      26.9972640991414
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.31650789448865,
        26.953842477621272
      ]
    },
    "title": "Garuda",
    "title_en": "Garuda",
    "title_ne": "गरुडा",
    "type": "Municipality",
    "code": "garudamun",
    "order": 749,
    "district": 32
  },
  {
    "id": 32010,
    "bbox": [
      85.1767597939088,
      26.7564303399532,
      85.2583282103529,
      26.8415059626186
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.21340813502667,
        26.79345675123308
      ]
    },
    "title": "Ishanath",
    "title_en": "Ishanath",
    "title_ne": "ईशनाथ",
    "type": "Municipality",
    "code": "ishnathmun",
    "order": 750,
    "district": 32
  },
  {
    "id": 32012,
    "bbox": [
      85.2704823717403,
      26.8544079573377,
      85.3955237221433,
      26.9243857920699
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.3294362729296,
        26.890934278151402
      ]
    },
    "title": "Madhav Narayan",
    "title_en": "Madhav Narayan",
    "title_ne": "माधव नारायण",
    "type": "Municipality",
    "code": "madhavnarayanmun",
    "order": 751,
    "district": 32
  },
  {
    "id": 32013,
    "bbox": [
      85.1636299688847,
      26.884368629333,
      85.2408579232409,
      26.9747917259822
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.20124313373863,
        26.929775648896275
      ]
    },
    "title": "Maulapur",
    "title_en": "Maulapur",
    "title_ne": "मौलापुर",
    "type": "Municipality",
    "code": "maulapurmun",
    "order": 752,
    "district": 32
  },
  {
    "id": 49002,
    "bbox": [
      83.4886386987633,
      27.5366643555293,
      83.6338932563401,
      27.7295507133509
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.5596955761821,
        27.651234252927583
      ]
    },
    "title": "Devdaha",
    "title_en": "Devdaha",
    "title_ne": "देवदह",
    "type": "Municipality",
    "code": "devdahamun",
    "order": 753,
    "district": 37
  },
  {
    "id": 49009,
    "bbox": [
      83.4398555783494,
      27.4956376408658,
      83.5964438153737,
      27.5677449956504
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.51027462767128,
        27.534630588649428
      ]
    },
    "title": "Omsatiya",
    "title_en": "Omsatiya",
    "title_ne": "ओमसतिया",
    "type": "Rural Municipality",
    "code": "omsatiyamun",
    "order": 754,
    "district": 37
  },
  {
    "id": 47007,
    "bbox": [
      83.7533486589693,
      27.8029627079733,
      84.0003010224992,
      27.9101112332012
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.88358060987838,
        27.853791898920957
      ]
    },
    "title": "Rampur",
    "title_en": "Rampur",
    "title_ne": "रामपुर",
    "type": "Municipality",
    "code": "rampurmun",
    "order": 755,
    "district": 39
  },
  {
    "id": 39007,
    "bbox": [
      83.8970927459171,
      27.8992566227748,
      84.0319503810438,
      28.0539797824067
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.95779671075238,
        27.983330294871358
      ]
    },
    "title": "Harinas",
    "title_en": "Harinas",
    "title_ne": "हरिनास",
    "type": "Rural Municipality",
    "code": "harinasmun",
    "order": 756,
    "district": 42
  },
  {
    "id": 44004,
    "bbox": [
      83.6162402830102,
      28.0522797871873,
      83.7300471891558,
      28.1335329763139
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.66934909513178,
        28.09448442420275
      ]
    },
    "title": "Mahashila",
    "title_en": "Mahashila",
    "title_ne": "महाशिला",
    "type": "Rural Municipality",
    "code": "mahashilamun",
    "order": 757,
    "district": 51
  },
  {
    "id": 62001,
    "bbox": [
      83.0302293048766,
      28.7219839799619,
      83.6804351913103,
      29.237475198066
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.36755822962262,
        28.97924163982484
      ]
    },
    "title": "Chharka Tangsong",
    "title_en": "Chharka Tangsong",
    "title_ne": "छार्का ताङसोङ",
    "type": "Rural Municipality",
    "code": "chharkatangsongmun",
    "order": 758,
    "district": 57
  },
  {
    "id": 63003,
    "bbox": [
      81.8462894835764,
      29.201401418132,
      82.0395768001853,
      29.3408297867033
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.93307318703094,
        29.274222836624517
      ]
    },
    "title": "Hima",
    "title_en": "Hima",
    "title_ne": "हिमा",
    "type": "Rural Municipality",
    "code": "himamun",
    "order": 759,
    "district": 60
  },
  {
    "id": 59006,
    "bbox": [
      81.8089331870635,
      28.3373067411845,
      81.9898554267914,
      28.5370836233805
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        81.8918573611054,
        28.429024780825596
      ]
    },
    "title": "Gurbhakot",
    "title_en": "Gurbhakot",
    "title_ne": "गुर्भाकोट",
    "type": "Municipality",
    "code": "gurbhakotmun",
    "order": 760,
    "district": 64
  },
  {
    "id": 48001,
    "bbox": [
      83.7347744127123,
      27.4724538527898,
      83.8827896838079,
      27.6674696299462
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.79579566158955,
        27.55649857880949
      ]
    },
    "title": "Bardaghat",
    "title_en": "Bardaghat",
    "title_ne": "बर्दघाट",
    "type": "Municipality",
    "code": "bardghatmun",
    "order": 761,
    "district": 482
  },
  {
    "id": 28088,
    "bbox": [
      85.2733903355253,
      27.7934254452564,
      85.4492976398579,
      27.8375719463045
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.36537795890914,
        27.81862015015047
      ]
    },
    "title": "Shivapuri Watershed and Wildlife Reserve",
    "title_en": "Shivapuri Watershed and Wildlife Reserve",
    "title_ne": "शिवपुरी जलाधार तथा वन्यजन्तु आरक्ष",
    "type": "Watershed and Wildlife Reserve",
    "code": null,
    "order": 762,
    "district": 25
  },
  {
    "id": 28099,
    "bbox": [
      85.3692201730723,
      27.9640319430414,
      85.4971313817009,
      28.0826066435536
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.4386688802344,
        28.023477424576424
      ]
    },
    "title": "Langtang National Park",
    "title_en": "Langtang National Park",
    "title_ne": "लाङ्टाङ राष्ट्रिय निकुन्ज",
    "type": "National Park",
    "code": null,
    "order": 763,
    "district": 25
  },
  {
    "id": 32017,
    "bbox": [
      85.2139377911145,
      26.7762608817259,
      85.290448919947,
      26.848508454674
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.25587224921553,
        26.816948141269588
      ]
    },
    "title": "Rajpur",
    "title_en": "Rajpur",
    "title_ne": "राजपुर",
    "type": "Municipality",
    "code": "rajpurmunrautahat",
    "order": 764,
    "district": 32
  },
  {
    "id": 32018,
    "bbox": [
      85.2701767551429,
      26.8078192813092,
      85.3205499368482,
      26.8776181827944
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        85.29683626939115,
        26.84556582621088
      ]
    },
    "title": "Yemunamai",
    "title_en": "Yemunamai",
    "title_ne": "यमुनामाई",
    "type": "Rural Municipality",
    "code": "yamunamaimun",
    "order": 765,
    "district": 32
  },
  {
    "id": 49001,
    "bbox": [
      83.3614345561347,
      27.6156393893059,
      83.5042159105933,
      27.7488997935905
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.4331080182878,
        27.68911130212745
      ]
    },
    "title": "Butwal",
    "title_en": "Butwal",
    "title_ne": "बुटवल",
    "type": "Submetropolitan City",
    "code": "butwalmun",
    "order": 766,
    "district": 37
  },
  {
    "id": 49003,
    "bbox": [
      83.2042964654492,
      27.5224269235009,
      83.3372617767479,
      27.652140239137
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.27563771116046,
        27.57994118934622
      ]
    },
    "title": "Gaidahawa",
    "title_en": "Gaidahawa",
    "title_ne": "गैडहवा",
    "type": "Rural Municipality",
    "code": "gaidahawamun",
    "order": 767,
    "district": 37
  },
  {
    "id": 49004,
    "bbox": [
      83.220642127068,
      27.5798160275195,
      83.3135840664929,
      27.6977371492814
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.26055986232119,
        27.64277229126149
      ]
    },
    "title": "Kanchan",
    "title_en": "Kanchan",
    "title_ne": "कन्चन",
    "type": "Rural Municipality",
    "code": "kanchanmun",
    "order": 768,
    "district": 37
  },
  {
    "id": 49006,
    "bbox": [
      83.216880713359,
      27.3939421708063,
      83.3300312734841,
      27.5442835090316
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.26661533597417,
        27.472870146250756
      ]
    },
    "title": "Lumbini Sanskritik",
    "title_en": "Lumbini Sanskritik",
    "title_ne": "लुम्बिनी सांस्कृतिक",
    "type": "Municipality",
    "code": "lumbinisanskritikmun",
    "order": 769,
    "district": 37
  },
  {
    "id": 49007,
    "bbox": [
      83.2916222027567,
      27.3302256530826,
      83.4097455395396,
      27.4225884776862
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.35124155812832,
        27.37340798516459
      ]
    },
    "title": "Marchawari",
    "title_en": "Marchawari",
    "title_ne": "मर्चवारी",
    "type": "Rural Municipality",
    "code": "marchawarimun",
    "order": 770,
    "district": 37
  },
  {
    "id": 49008,
    "bbox": [
      83.3072770096925,
      27.4580986338059,
      83.4563880930094,
      27.5713732860513
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.36248008909028,
        27.514932086238375
      ]
    },
    "title": "Mayadevi",
    "title_en": "Mayadevi",
    "title_ne": "मायादेवी",
    "type": "Rural Municipality",
    "code": "mayadevimunrupandehi",
    "order": 771,
    "district": 37
  },
  {
    "id": 40002,
    "bbox": [
      83.8278362081584,
      28.285661077471,
      84.085346016188,
      28.6053080648794
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.96112181892148,
        28.436111682180442
      ]
    },
    "title": "Machhapuchchhre",
    "title_en": "Machhapuchchhre",
    "title_ne": "माछापुच्छ्रे",
    "type": "Rural Municipality",
    "code": "machhapuchhremun",
    "order": 772,
    "district": 46
  },
  {
    "id": 40003,
    "bbox": [
      84.01869523199,
      28.1891793401727,
      84.2787029959058,
      28.539462024227
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        84.13723188635564,
        28.366072157529164
      ]
    },
    "title": "Madi",
    "title_en": "Madi",
    "title_ne": "मादी",
    "type": "Rural Municipality",
    "code": "madimunkaski",
    "order": 773,
    "district": 46
  },
  {
    "id": 40004,
    "bbox": [
      83.7983874378407,
      28.0777409922212,
      84.1477963284796,
      28.3412273281795
    ],
    "centroid": {
      "type": "Point",
      "coordinates": [
        83.98934377472725,
        28.210516049698754
      ]
    },
    "title": "Pokhara Lekhnath",
    "title_en": "Pokhara Lekhnath",
    "title_ne": "पोखरा लेखनाथ",
    "type": "Metropolitan City",
    "code": "pokharamun",
    "order": 774,
    "district": 46
  }
];

  export {districts,provinces,municipalities};
