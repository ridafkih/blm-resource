document.addEventListener("DOMContentLoaded", init);

async function init() {
    await respond("Report issues to @rida.rf on Instagram. Feel free to share resources without credit, and report content you feel doesn't belong here.", 15, true);
    await respond("It's important to note these resources were not individually vetted, and were pulled using online scraping scripts.", 15, true);
    await respond("This is simply an aggregation of resources found online, and any content on any of the resources provided do not reflect any personal political opinions. Thank you.", 15, true);

    initiailizeResponses();
}

const victimDonations = [
    {
      "text": "George Floyd Memorial Fund",
      "link": "https://t.co/mUNLnEoOEc"
    },
    {
      "text": "George Floyd’s Sister’s Fund",
      "link": "https://gofundme.com/f/george-floyd-bigfloyd"
    },
    {
      "text": "Ahmaud Arbery Fund",
      "link": "https://gofundme.com/f/i-run-with-maud"
    },
    {
      "text": "Regis Korchinski Fund",
      "link": "https://gofundme.com/f/justice-for-regis"
    },
    {
      "text": "Jamee Johnson Fund",
      "link": "https://gofundme.com/f/eumzn-justice-for-jamee?utm_source=twitter&utm_medium=social&utm_campaign=p_cp+share-sheet"
    },
    {
      "text": "Destiny Harrison Funeral Fund",
      "link": "https://gofundme.com/f/destiny-harrison-funeral"
    },
    {
      "text": "Eric Rosalia Fund",
      "link": "https://gofundme.com/f/eric-rosalia?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet"
    },
    {
      "text": "Belly Mujinga Fund",
      "link": "https://gofundme.com/f/rip-belly-mujinga"
    },
    {
      "text": "Dion Johnson Fund",
      "link": "https://gofundme.com/f/justice-for-dion-johnson"
    },
    {
      "text": "Aaron James Fund",
      "link": "https://gofundme.com/f/rest-in-peace-aaron-quotajquot-sutton"
    },
    {
      "text": "Tony McDade Fund",
      "link": "https://gofundme.com/f/in-memory-of-tony-mcdade"
    },
    {
      "text": "Healing For Darnella",
      "link": "https://gofundme.com/f/peace-and-healing-for-darnella"
    },
    {
      "text": "Destiny’s Dream Scholarship",
      "link": "https://secure.qgiv.com/for/desdresch/mobile"
    },
    {
      "text": "James Scurlock Fund",
      "link": "https://gofundme.com/f/for-james-scurlocks-family"
    },
    {
      "text": "Support For Leslie Fund",
      "link": "https://gofundme.com/f/csgskf-love-and-support-for-leslie"
    },
    {
      "text": "Trever Belle Fund",
      "link": "https://gofundme.com/f/trevor-belle"
    },
    {
      "text": "Tampa Bay Community Support",
      "link": "https://gofundme.com/f/tampa-bay-community-support-fund"
    },
    {
      "text": "Brad Levi Ayala Fund",
      "link": "https://gofundme.com/f/brad-levi-ayala"
    },
    {
      "text": "Alajunaye Davis Fund",
      "link": "https://gofundme.com/f/rke75-funeral-arrangements"
    },
    {
      "text": "Said Joquin Fund",
      "link": "https://gofundme.com/f/justice-for-said-joquin"
    },
    {
      "text": "David McAtee Fund",
      "link": "https://gofundme.com/f/justicefordavidmcatee"
    }
]

const protestorDonations = [
    {
      "text": "Tampa Bay Community Support",
      "link": "https://gofundme.com/f/tampa-bay-community-support-fund"
    },
    {
      "text": "Split Donation to 37 Bail Funds",
      "link": "https://secure.actblue.com/donate/bail_funds_george_floyd"
    },
    {
      "text": "National Bail Fund Network",
      "link": "https://communityjusticeexchange.org/nbfn-directory"
    },
    {
      "text": "Gas Mask Fund",
      "link": "https://twitter.com/isakdouah/status/1266858141913878528?s=21"
    },
    {
      "text": "Messiah Young and Taniya Pilgrim",
      "link": "https://gofundme.com/f/messiah-young-and-taniyah-pilgrim-bail-money"
    },
    {
      "text": "Ezequiel Valderas Baild Fund",
      "link": "https://gofundme.com/f/freedom-for-ezequiel-valderas"
    },
    {
      "text": "BLM Frontline Fund",
      "link": "https://gofundme.com/f/blm-frontline-fundminneapolis"
    },
    {
      "text": "Fund Protesters In The UK",
      "link": "https://justgiving.com/crowdfunding/hajra-khan-2"
    },
    {
      "text": "Supplies For DC Protestors",
      "link": "https://gofundme.com/f/rasing-money-for-supplies-for-dc-protesters"
    },
    {
      "text": "Venmo: Femme Empowerment Project",
      "link": "https://venmo.com/femmeempowermentproject"
    }
]

const organizationDonations = [
    {
      "text": "Reclaim The Block",
      "link": "https://secure.everyaction.com/zae4prEeKESHBy0MKXTIcQ2"
    },
    {
      "text": "North Star Health Collective",
      "link": "http://northstarhealthcollective.org/donate"
    },
    {
      "text": "NAACP Legal Defense Fund",
      "link": "https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.35717155.2063942164.1590824273-1161863773.1590824273"
    },
    {
      "text": "Black Visions Collective",
      "link": "https://secure.everyaction.com/4omQDAR0oUiUagTu0EG-Ig2"
    },
    {
      "text": "Black Disability Coalition",
      "link": "http://blackdisability.org/"
    },
    {
      "text": "The Marshall Project",
      "link": "https://themarshallproject.org/donate"
    },
    {
      "text": "ACLU",
      "link": "https://action.aclu.org/give/aclu-response-covid-19"
    },
    {
      "text": "Campaign Zero",
      "link": "https://joincampaignzero.org/#vision"
    },
    {
      "text": "Advancement Project",
      "link": "https://advancementproject.org/donate/"
    }
]

const petitions = [
    {
      "text": "Raise The Degree",
      "link": "https://change.org/p/minneapolis-district-attorney-raise-the-degree?recruiter=1098599238&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi&recruited_by_id=960efe90-a206-11ea-8907-8fc7af712ec3"
    },
    {
      "text": "George Floyd",
      "link": "https://change.org/p/mayor-jacob-frey-justice-for-george-floyd?recruiter=895898514&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial&recruited_by_id=6a4669c0-a74d-11e8-a554-dd9015f4e479"
    },
    {
      "text": "George Floyd",
      "link": "https://t.co/ENgYhM2oEC"
    },
    {
      "text": "George Floyd",
      "link": "https://thepetitionsite.com/248/031/510/justice-for-george-floyd-another-black-man-needlessly-murdered-by-police/?taf_id=65858665&cid=fb_na"
    },
    {
      "text": "George Floyd",
      "link": "https://amnesty.org/en/get-involved/take-action/george-floyd-police-violence-usa/"
    },
    {
      "text": "George Floyd",
      "link": "https://act.colorofchange.org/sign/justiceforfloyd_george_floyd_minneapolis/?source=dm_sms_optin_5-26-20"
    },
    {
      "text": "Get The Officers Charged",
      "link": "https://t.co/lPsRQq6GqD"
    },
    {
      "text": "Charge All Four Officers",
      "link": "https://change.org/p/change-org-the-minneapolis-police-officers-to-be-charged-for-murder-after-killing-innocent-black-man"
    },
    {
      "text": "Breonna Taylor",
      "link": "https://sign.moveon.org/petitions/justiceforbre-police-officers-who-killed-breonna-taylor-must-be-fired?bucket=&source=twitter-share-button&utm_campaign=&utm_source=twitter&share=e57b02c1-bd0f-497f-8365-f51d6114576f"
    },
    {
      "text": "Breonna Taylor",
      "link": "https://act.colorofchange.org/sign/justiceforbre-breonna-taylor-officers-fired?source=coc_main_website"
    },
    {
      "text": "Breonna Taylor",
      "link": "https://action.justiceforbreonna.org/sign/BreonnaWasEssential/"
    },
    {
      "text": "Breonna Taylor",
      "link": "https://change.org/p/andy-beshear-justice-for-breonna-taylor"
    },
    {
      "text": "Ahmaud Arbery",
      "link": "https://change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill"
    },
    {
      "text": "Ahmaud Arbery",
      "link": "https://change.org/p/human-rights-campaign-justice-for-ahmuad-aubrey-2"
    },
    {
      "text": "Ahmaud Arbery",
      "link": "https://change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud"
    },
    {
      "text": "Pass The Georgia Hate Crime Bill",
      "link": "https://change.org/p/governor-brian-kemp-justice-for-ahmaud-arbery"
    },
    {
      "text": "Defund MPD",
      "link": "https://secure.everyaction.com/eR7GA7oz70GL8doBq19LrA2"
    },
    {
      "text": "Life Sentence For Police Brutality",
      "link": "https://change.org/p/department-of-justice-mandatory-life-sentence-for-police-brutality"
    },
    {
      "text": "Regis Korchinski",
      "link": "https://t.co/fqxvTJ76gE"
    },
    {
      "text": "Tony McDade",
      "link": "https://change.org/p/black-lives-matter-activists-justice-for-tony-mcdade"
    },
    {
      "text": "Tony McDade",
      "link": "https://actionnetwork.org/letters/demand-justice-for-tony-mcdade?source=direct_link&"
    },
    {
      "text": "Joao Pedro",
      "link": "http://chng.it/FjJ7ZD4q5p"
    },
    {
      "text": "Julius Jones",
      "link": "https://change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma?recruiter=1094475756&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_initial&recruited_by_id=8f486ef0-a078-11ea-8e7f-d5aa545940b3"
    },
    {
      "text": "Belly Mujinga",
      "link": "https://change.org/p/govia-thameslink-justice-for-belly-mujinga?recruiter=false&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial&recruited_by_id=ffad40c0-a0c4-11ea-ac15-4118e05249bd"
    },
    {
      "text": "Willie Simmons",
      "link": "https://change.org/p/alabama-governor-kay-ivey-willie-simmons-has-served-38-years-for-a-9-robbery?recruiter=962817259&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi&recruited_by_id=bb52c480-7a65-11e9-859f-09a81b26ec6f"
    },
    {
      "text": "Hands Up Act",
      "link": "https://change.org/p/us-senate-hands-up-act"
    },
    {
      "text": "National Action Against Police Brutality",
      "link": "https://change.org/p/national-action-against-police-brutality-and-murder"
    },
    {
      "text": "Kyjuanzi Harris",
      "link": "https://change.org/p/illinois-governor-correcting-a-wrongful-conviction-kyjuanzi-harris"
    },
    {
      "text": "Alejandro Vargas Martinez",
      "link": "https://change.org/p/florida-police-department-justice-for-alejandro-vargas-martinez"
    },
    {
      "text": "Censorship Of Police Brutality In France",
      "link": "https://change.org/p/gouvernement-fran%C3%A7ais-refus-de-la-loi-visant-%C3%A0-emp%C3%AAcher-la-diffusion-des-images-de-violences-polici%C3%A8res?utm_content=cl_sharecopy_22450892_fr-FR%3Av5&recruiter=792266977&recruited_by_id=86f08ea0-9f58-11e7-961e-cda0813a4e4f&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi"
    },
    {
      "text": "Sean Reed",
      "link": "https://change.org/p/white-house-justice-for-sean?recruiter=69572427&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi&recruited_by_id=a4411689-1113-4cc7-b38b-2457ccedf381"
    },
    {
      "text": "Sean Reed",
      "link": "https://change.org/p/mayor-joe-hogsett-justice-for-sean-reed"
    },
    {
      "text": "Kendrick Johnson",
      "link": "https://change.org/p/united-states-supreme-court-justice-for-kendrick-johnson?recruiter=892242914&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi&recruited_by_id=84be3200-9821-11e8-a114-db091f4ac2f9"
    },
    {
      "text": "Tamir Rice",
      "link": "https://t.co/Xn18ESgrLz"
    },
    {
      "text": "Tamir Rice",
      "link": "https://change.org/p/justice-for-tamir-rice-appoint-a-special-prosecutor"
    },
    {
      "text": "Fire Racist Criminal From The NYPD",
      "link": "https://t.co/Fhd6jxbEoE"
    },
    {
      "text": "Jamee Johnson",
      "link": "https://campaigns.organizefor.org/petitions/justice-for-jamee-johnson"
    },
    {
      "text": "Darius Stewart",
      "link": "https://change.org/p/donald-j-trump-justice-for-darrius-stewart?recruiter=1007505219&utm_source=share_petition&utm_medium=copylink&utm_campaign=tap_basic_share"
    },
    {
      "text": "Darius Stewart",
      "link": "https://sign.moveon.org/petitions/we-want-justice-for-19"
    },
    {
      "text": "Abolish Prison Labor",
      "link": "https://change.org/p/federal-bureau-of-prisons-abolish-prison-labour-in-the-usa?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=ecb9f830-ab55-11e7-8f6a-c5345e805526"
    },
    {
      "text": "Free Siyanda",
      "link": "https://change.org/p/free-siyanda"
    },
    {
      "text": "Chrystul Kizer",
      "link": "https://change.org/p/drop-all-charges-against-incarcerated-trafficking-survivor-chrystul-kizer"
    },
    {
      "text": "Chrystul Kizer",
      "link": "https://change.org/p/bryan-steil-wis-teen-face-life-in-prison-for-killing-man-who-allegedly-raped-her-and-sold-her-for-sex-b75d03ab-ceb7-468f-a161-4b6d1ab03767"
    },
    {
      "text": "Andile Mchunu (Bobo)",
      "link": "https://change.org/p/bheki-cele-justice-for-andile-mchunu-bobo"
    }
]

const victimList = [
    "George Floyd",
    "Breonna Taylor",
    "Ahmaud Arbery",
    "Tamir Rice",
    "Trayvon Martin",
    "Oscar Grant",
    "Eric Garner",
    "Philano Castile",
    "Samuel Dubose",
    "Sandra Bland",
    "Walter Scott",
    "Terrence Crutcher",
    "Michael Lorenzo Dean",
    "Eric Reason",
    "Christopher McCorvey",
    "Christopher Whitefield",
    "Atatiana Jefferson",
    "Maurice Holly",
    "Jordan Michael Griffin",
    "Nicholas Walker",
    "Bennie Branch",
    "Byron Williams",
    "Mahlon Edward Summerour",
    "Charles D. Roundtree Jr.",
    "Chinedu Valentine Okobi",
    "Antone G. Black Jr.",
    "Darell Richards",
    "Botham Shem Jean",
    "James Leatherwood",
    "Joshua Wayne Harvey",
    "Christopher Alexander Okamoto",
    "Cynthia Fields",
    "Rashaun Washington",
    "Anthony \"Punch\" Marcell Green",
    "Antwon Michael Rose II",
    "Robert Lawrence White",
    "Marcus-David L. Peters",
    "Juan Markee Jones",
    "Danny Ray Thomas",
    "Stephen Clark",
    "Corey Mobley",
    "Arther McAfee Jr.",
    "Geraldine Townsend",
    "Warren Ragudo",
    "Trey Ta'Quan Pringle Sr.",
    "Antonio Garcia Jr.",
    "Brian Easley",
    "Euree Lee Martin",
    "DeJuan Guillory",
    "Aaron Bailey",
    "Marc Brandon Davis",
    "Adam Tramell",
    "Jimmie Montel Sanders",
    "DeRicco Devante Holden",
    "Mark Roshawn Adkins",
    "Tashii S. Brown",
    "Nana Adomako",
    "Roderick Ronal Taylor",
    "Kenneth Johnson",
    "Christopher Wade",
    "Alteria Woods",
    "Sherido Davis",
    "Lorenzo Antoine Cruz",
    "Chance David Baker",
    "Raynard Burton",
    "Quanice Derrick Hayes",
    "Ollie Lee Brooks",
    "Michael Eugene Wilson Jr.",
    "Vernell Bing Jr.",
    "Jessica Williams",
    "Arthur R. Williams Jr.",
    "Lionel Gibson",
    "Charlin Charles",
    "Kevin Hicks",
    "Dominique \"Nonny\" Silva",
    "RObert Dentmond",
    "India M. Beaty",
    "Torrey Lamar Robinson",
    "Petter William Gaines",
    "Arteair Porter",
    "Dalvin Hollins",
    "Alfred Olango",
    "Antwun Shumpert",
    "Wendell Celestine Jr.",
    "Antronie Scott",
    "Peter John",
    "Keith Childress",
    "Bettie Jones",
    "Dominic Hutchinson",
    "Junior Prosper",
    "Balantine Mbegbu",
    "Wayne Wheeler",
    "Lavante Biggs",
    "Indian Kager",
    "James Carney III",
    "Sherman Evans",
    "Delrawn Small",
    "Paterson Brown Jr.",
    "Kevin Higgenbotham",
    "D'Angelo Reyes Stallworth",
    "Anthony Ashford",
    "Spender McCain",
    "Michael Noel",
    "Christian Taylor",
    "Asshams Manley",
    "Brian Day",
    "Samuel Dubose",
    "Darrius Stewart",
    "Alberta Davis",
    "Keith Harrison McLeod",
    "Andre Larone Murphy Sr.",
    "Brian Pickett",
    "Jerame C. Reid",
    "David Andre Scott",
    "Denis Grisgby",
    "Rumain Brisbon",
    "Eric Ricks",
    "Tamir E. Rice",
    "Akai Gurley",
    "Keara Crowder",
    "Tanisha N. Anderson",
    "Raphael Thomas",
    "John T. Wilson III",
    "Kaldrick Donald",
    "Michael Ricardo Minor",
    "Adam Ardett Madison",
    "Iretha Lilly",
    "Balantine Mbegbu",
    "Lashano J. Gilbert",
    "Marlon S. Woodstock",
    "Anesson Joseph",
    "Jordan Baker",
    "Jeffrey Ragland",
    "Kendall Alexander",
    "Cimarron Lamar Lamb",
    "Ervin Edwards",
    "Willie James Williams",
    "Abul Kamal",
    "William Alfred Harvey III",
    "Tracy Clyde",
    "William Taylor",
    "Reginald Williams Jr.",
    "Elijah Glay",
    "Alexander James \"A.J.\" Marion",
    "Jonathan A. Ferrell",
    "Marlon Horton",
    "Ronnie Ledesma Jr.",
    "Montrell Moss",
    "Jeffery B. Lilly Jr.",
    "Jermaine McBean",
    "Juan May",
    "Emanuel Jean-Baptiste",
    "Mark Anthony Blocker",
    "Montez Dewayne Hambric",
    "Tommy J. Yancy Jr.",
    "Howard Wallace Bowe Jr.",
    "Dominique Franklin Jr.",
    "Justin Griffin",
    "Tyrone Davis",
    "Gregory Lewis Towns Jr.",
    "DeAndrew Lloyd Starks",
    "Willie Neall Harden",
    "Hallis Kinsey",
    "Treon \"Tree\" Johnson",
    "Deion Fludd",
    "Clifton Armstrong",
    "Fred Bradford Jr.",
    "Craig Demps",
    "Dason Peters",
    "Dylan Samuel-Peters",
    "Cedrich Chatman",
    "Darrell Banks",
    "Xavier Tyrell Johnson",
    "Sean Reed",
    "Anthony Dwayne Harris",
    "Brandon Jones",
    "Willie James Sams",
    "Victo Larosa III",
    "Trevor Tyreke Chambers",
    

]

const mediaList = [
  {
    "name": "Law Enforcement Shove Women, then Trampled",
    "location": "Alabama",
    "links": [
      "https://twitter.com/ETfonehome97/status/1267657232411435008"
    ]
  },
  {
    "name": "Law Enforcement Launches Tear Gas at Protestors",
    "location": "Arkansas",
    "links": [
        "https://twitter.com/courtenay_roche/status/1267653137969623040",
        "https://twitter.com/yagirlbrookie09/status/1267647898365427714"
    ]
  },
  {
    "name": "Police Beat Man on Ground",
    "location": "California",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gvdl01/they_secluded_him_behind_a_wall_and_looked_around/"
    ]
  },
  {
    "name": "Law Enforcement Arrest Walkers, Call for More Arrests",
    "location": "California",
    "links": [
      "https://twitter.com/AdoreDelano/status/1267688320735166465"
    ]
  },
  {
    "name": "Police Shoot Woman in Face",
    "location": "California",
    "links": [
      "https://mobile.twitter.com/MarajYikes/status/1267030131563827200",
      "https://mobile.twitter.com/chadloder/status/1267290221562871809/photo/1"
    ]
  },
  {
    "name": "Reporter Shot in Neck by Rubber Bullet",
    "location": "California",
    "links": [
      "https://laist.com/2020/05/31/reporters_injured_protests_police.php"
    ]
  },
  {
    "name": "Police Intimidate Man Filming them Shooting at Apartment Building",
    "location": "California",
    "links": [
      "https://mobile.twitter.com/Sarah_Mojarad/status/1266633046591078400?s=09"
    ]
  },
  {
    "name": "Police Open Fire with Rubber/Pepper Bullets at Protestors",
    "location": "California",
    "links": [
      "https://twitter.com/MatthewSantoro/status/1266916709304201216"
    ]
  },
  {
    "name": "Police Officer Puts Knee on Protestor's Neck",
    "location": "California",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gturig/cop_has_his_knee_on_a_womans_neck_even_though/"
    ]
  },
  {
    "name": "Police Strikes Protestors with Batons",
    "location": "California",
    "links": [
      "https://streamable.com/ja2fw6",
      "https://reddit.com/r/PublicFreakout/comments/gv8vaw/lapd_beating_and_shooting_peaceful_protesters_for/"
    ]
  },
  {
    "name": "LAPD SUV Drives into Protestors and Speeds Away",
    "location": "California",
    "links": [
      "https://twitter.com/greg_doucette/status/1267277826354556928",
      "https://twitter.com/SophiaLeeHyun/status/1267216604388978689",
      "https://twitter.com/chadloder/status/1267314138428014594",
      "https://v.redd.it/9aiytt50g6251/DASH_1080#mp4",
      "https://old.reddit.com/r/PublicFreakout/comments/gu8mqp/police_drives_into_protestors_in_los_angeles/",
    ]
  },
  {
    "name": "Police Shoot Rubber Pullets at Two Protestors",
    "location": "California",
    "links": [
      "https://twitter.com/liveinochi/status/1267504585926557696"
    ]
  },
  {
    "name": "Officer Runs Down Protestors with Police Cruiser",
    "location": "California",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gttdkj/cop_driving_into_crowds_of_protestors/"
    ]
  },
  {
    "name": "Police Shoot Protestor in Head",
    "location": "California",
    "links": [
      "https://twitter.com/xotrevonantonio/status/1266994330054479874",
      "https://youtu.be/pRmBO34aXME"
    ]
  },
  {
    "name": "Police Shoot Projectile at Protestor",
    "location": "California",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gtksgq/cop_decides_to_shoot_at_protestor_who_hurt_his/",
      "https://reddit.com/r/PublicFreakout/comments/gtg2cb/cop_waits_in_excitement_like_its_a_game/"
    ]
  },
  {
    "name": "Police Open Fire on Protestors",
    "location": "California",
    "links": [
      "https://twitter.com/YourAnonCentral/status/1266991237355069442"
    ]
  },
  {
    "name": "Police Fire Pepper Bullets into Apartment",
    "location": "California",
    "links": [
      "https://twitter.com/GIFsZP/status/1267241803750813703"
    ]
  },
  {
    "name": "Police Throw Reporter into Fire",
    "location": "Colorado",
    "links": [
      "https://twitter.com/tessrmalle/status/1266945413258653696",
      "https://reddit.com/r/2020PoliceBrutality/comments/gunfut/denver_officer_pushed_a_photographer_into_a_fire/",
      "https://youtube.com/watch?v=zhIWohJsRyM&feature=youtu.be&t=4225"
    ]
  },
  {
    "name": "Police Tear Gas and Shoot Protestors",
    "location": "Colorado",
    "links": [
      "https://twitter.com/moneyroe99/status/1266956171409346566"
    ]
  },
  {
    "name": "Police Fire Pepper Balls at Car with Pregnant Woman Inside",
    "location": "Colorado",
    "links": [
      "https://reddit.com/r/2020PoliceBrutality/comments/gumff6/denver_police_fire_pepper_balls_at_a_car_with_a/"
    ]
  },
  {
    "name": "Reporter Shot with Multiple Pepper Balls",
    "location": "Colorado",
    "links": [
      "https://denverpost.com/2020/05/29/denver-post-photographer-pepper-balls-george-floyd-protest/"
    ]
  },
  {
    "name": "Police Fire at Protestor Driving Away",
    "location": "Colorado",
    "links": [
      "https://twitter.com/heyydnae/status/1267139396278661121?s=21"
    ]
  },
  {
    "name": "Police Pepperspray People Trying to Record",
    "location": "Colorado",
    "links": [
      "https://twitter.com/greg_doucette/status/1266758227930333188"
    ]
  },
  {
    "name": "Police Shove Woman to her Knees, Hit her on Head",
    "location": "Florida",
    "links": [
      "https://twitter.com/thickliljawn/status/1267239498083110913"
    ]
  },
  {
    "name": "Officer Shoves a Woman with Bike",
    "location": "Georgia",
    "links": [
      "https://twitter.com/ava/status/1266797973834395648?s=20"
    ]
  },
  {
    "name": "Cops Pull People out of Car, Taze Them",
    "location": "Georgia",
    "links": [
      "https://twitter.com/danielvankirk/status/1266947767840063489",
      "https://instagram.com/p/CA27quMhqJA/",
      "https://twitter.com/SarahBaska/status/1267308455225774080?s=20"
    ]
  },
  {
    "name": "Man Tased in Back for Speaking Up, Punched in Face",
    "location": "Georgia",
    "links": [
      "https://twitter.com/ftn_shark/status/1266854056506667009?s=19",
      "https://twitter.com/throneofmorac/status/1266870493858185217?s=09"
    ]
  },
  {
    "name": "Police Harass and Assault John Cusack",
    "location": "Illinois",
    "links": [
      "https://twitter.com/johncusack/status/1266938983575101441"
    ]
  },
  {
    "name": "Police Throw Men out of their Car",
    "location": "Illinois",
    "links": [
      "https://twitter.com/cruzzzyc/status/1267185423333199874"
    ]
  },
  {
    "name": "Police Pepperspray Reporter for Recording",
    "location": "Illinois",
    "links": [
      "https://twitter.com/JCB_Journo/status/1266897672545480706"
    ]
  },
  {
    "name": "Police Tear Gas Protestors",
    "location": "Indiana",
    "links": [
      "https://twitter.com/blazedyukhei/status/1266533569029177346"
    ]
  },
  {
    "name": "Protestor Hit in Face with Gas Cannister",
    "location": "Indiana",
    "links": [
      "https://i.redd.it/4qzvp2gd54251.jpg",
      "https://twitter.com/notbalin/status/1266972999296704513"
    ]
  },
  {
    "name": "Toddler Teargassed by Police",
    "location": "Indiana",
    "links": [
      "https://wpta21.com/2020/05/31/toddler-tear-gassed-photo-goes-viral/#.XtUVqwf8OnF.facebook"
    ]
  },
  {
    "name": "Police Pepperspray Protestors Attempting to Record Them",
    "location": "Indiana",
    "links": [
      "https://twitter.com/greg_doucette/status/1266745200656990208"
    ]
  },
  {
    "name": "Police Confiscate Medical Supplies from Medical Station",
    "location": "Indiana",
    "links": [
      "https://facebook.com/AlexandraIndy/videos/10219444419838711"
    ]
  },
  {
    "name": "Police Beating, Shoving, and Shooting Two Women",
    "location": "Indiana",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/guffju/indianapolis_police_on_women_rights/"
    ]
  },
  {
    "name": "Police Throw and Smash Water Bottles",
    "location": "Kentucky",
    "links": [
      "https://twitter.com/WFPLNews/status/1266923468102262784",
      "https://twitter.com/WFPLNews/status/1266923468102262784"
    ]
  },
  {
    "name": "Police Shoot Rubber Balls at Reporter",
    "location": "Kentucky",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gt69qe/police_start_shooting_press_with_some_kinda/",
      "https://twitter.com/greg_doucette/status/1266557059606163456"
    ]
  },
  {
    "name": "Police Shoot 7 Protestors",
    "location": "Kentucky",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gsp9yq/police_shoot_7_protesters_in_louisville_kentucky/"
    ]
  },
  {
    "name": "Police Swarm and Beat Man Screaming on Ground",
    "location": "Kentucky",
    "links": [
      "https://old.reddit.com/r/PublicFreakout/comments/gutezm/multiple_kentucky_state_police_troopers_tackled/"
    ]
  },
  {
    "name": "Restaurant Owner Shot and Killed",
    "location": "Kentucky",
    "links": [
      "https://youtu.be/wDg9fev67lw",
      "https://mobile.twitter.com/chadloder/status/1267555717751296000"
    ]
  },
  {
    "name": "Young Woman Shot in Head by Rubber Bullet",
    "location": "Kentucky",
    "links": [
      "https://twitter.com/shannynsharyse/status/1267015577266249728",
      "https://twitter.com/shannynsharyse/status/1266631722239766528?s=21"
    ]
  },
  {
    "name": "Police Shove and Scream at Men Walking",
    "location": "Michigan",
    "links": [
      "https://twitter.com/AkramG03/status/1266876680142049282"
    ]
  },
  {
    "name": "Police Pepperspray Reporter",
    "location": "Michigan",
    "links": [
      "https://twitter.com/DetroitReporter/status/1266957225114861568"
    ]
  },
  {
    "name": "Police Shoot Rubber Bullets at Reporters",
    "location": "Michigan",
    "links": [
      "https://twitter.com/reporterdavidj/status/1266966021077962752"
    ]
  },
  {
    "name": "Officer Charges to Attack Fleeing Protestor",
    "location": "Michigan",
    "links": [
      "https://twitter.com/joeguillen/status/1266563974658744321"
    ]
  },
  {
    "name": "Police Attack Unarmed Man, and Fire Teargas Canister at Face",
    "location": "Michigan",
    "links": [
      "https://old.reddit.com/r/Bad_Cop_No_Donut/comments/gub8fx/police_shoot_protestor_point_blank_in_the_face/",
      "https://reddit.com/r/2020PoliceBrutality/comments/gv3xuu/police_in_grand_rapids_michigan_spray_a_man/"
    ]
  },
  {
    "name": "Police Fire Tear Gas at Prone Protestors",
    "location": "Michigan",
    "links": [
      "https://twitter.com/i/status/1267677463850745858"
    ]
  },
  {
    "name": "Police Storm Gas Station Attacking Reporters",
    "location": "Minnesota",
    "links": [
      "https://twitter.com/MichaelAdams317/status/1266945268567678976",
      "https://twitter.com/rsdaza/status/1267200011659554824",
      "https://twitter.com/MichaelAdams317/status/1267203751913422849"
    ]
  },
  {
    "name": "Police Shoot at Woman on Her Porch",
    "location": "Minnesota",
    "links": [
      "https://twitter.com/tkerssen/status/1266921821653385225"
    ]
  },
  {
    "name": "Police Drive by Spraying",
    "location": "Minnesota",
    "links": [
      "https://youtube.com/watch?v=O3qj4cfsd7g",
      "https://twitter.com/stribrooks/status/1266186985041022976"
    ]
  },
  {
    "name": "CNN Reporter Arrested",
    "location": "Minnesota",
    "links": [
      "https://youtube.com/watch?v=aNuzzVpDZTY"
    ]
  },
  {
    "name": "WCCO Photojournalist Arrested",
    "location": "Minnesota",
    "links": [
      "https://youtube.com/watch?v=wmpic2NU1RM&feature=youtu.be"
    ]
  },
  {
    "name": "Police Slash Tires",
    "location": "Minnesota",
    "links": [
      "https://twitter.com/val_ebertz/status/1266975058230235137",
      "https://twitter.com/andrewkimmel/status/1266987126467461120?s=20",
      "https://twitter.com/andrewkimmel/status/1267012840197586946?s=20"
    ]
  },
  {
    "name": "CBS News Shot with Rubber Bullets",
    "location": "Minnesota",
    "links": [
      "https://mobile.twitter.com/chadloder/status/1266971884001693696",
      "https://twitter.com/MikeGeorgeCBS/status/1266916104951214080"
    ]
  },
  {
    "name": "Police Throw Flashbangs at Reporters",
    "location": "Minnesota",
    "links": [
      "https://twitter.com/atrupar/status/1266910910137995264"
    ]
  },
  {
    "name": "Police Fire Rubber Bullet into Reporter's Eye",
    "location": "Minnesota",
    "links": [
      "https://mobile.twitter.com/KillerMartinis/status/1266618525600399361?s=19"
    ]
  },
  {
    "name": "Police Shoot at, and Threaten to Arrest Reporter",
    "location": "Minnesota",
    "links": [
      "https://youtube.com/watch?v=NN8ISwuiX68"
    ]
  },
  {
    "name": "Police Shoot Flashbang Grenades into Crowd",
    "location": "Minnesota",
    "links": [
      "https://facebook.com/1462345700/posts/10220863688809651"
    ]
  },
  {
    "name": "Police Shoot Rubber Bullets and Teargas at Reporter",
    "location": "Minnesota",
    "links": [
      "https://twitter.com/greg_doucette/status/1267118696960528386"
    ]
  },
  {
    "name": "Police Stop SUV to Driveby Pepperpray Protestors through Window",
    "location": "Minnesota",
    "links": [
      "https://twitter.com/greg_doucette/status/1267283198163255297"
    ]
  },
  {
    "name": "Police Tear Gas Park",
    "location": "Missouri",
    "links": [
      "https://twitter.com/imunoz03/status/1266908372881768448"
    ]
  },
  {
    "name": "Police Attempt to Arrest Protest Leader, Spray Crowd",
    "location": "Missouri",
    "links": [
      "https://old.reddit.com/r/PublicFreakout/comments/guswxo/he_wasnt_even_addressing_the_police/"
    ]
  },
  {
    "name": "Police Arrest Man for Speaking, Teargas Nearby Protestors",
    "location": "Missouri",
    "links": [
      "https://twitter.com/weslyinfinity/status/1267321172309544960"
    ]
  },
  {
    "name": "Police Mace, and Shoot Pepper Bullets at Sitting Protestors",
    "location": "Nebraska",
    "links": [
      "https://twitter.com/XruthxNthr/status/1266903223220097024"
    ]
  },
  {
    "name": "Peaceful Protestors Arrested for Breaking Curfew",
    "location": "Nebraska",
    "links": [
      "https://twitter.com/reecereports/status/1267629669093978117"
    ]
  },
  {
    "name": "Police Shove Man, Drag him Through Street",
    "location": "Nevada",
    "links": [
      "https://twitter.com/LasVegasLocally/status/12672108415956049920",
      "https://instagram.com/p/CA14rooHIC6/?utm_source=ig_web_copy_link"
    ]
  },
  {
    "name": "Police Charge into Peaceful Crowd Shouting \"Grab Anybody\"",
    "location": "Nevada",
    "links": [
      "https://mobile.twitter.com/chadloder/status/1267168204863926274"
    ]
  },
  {
    "name": "Police Shoot at Filming People",
    "location": "New York",
    "links": [
      "https://twitter.com/bleeezyy_/status/1266894195865931778"
    ]
  },
  {
    "name": "Police Pull of Protestors Mask to Pepper Spray him",
    "location": "New York",
    "links": [
      "https://twitter.com/_doreenpt/status/1266994439039455232"
    ]
  },
  {
    "name": "NYPD Beat People with Batons",
    "location": "New York",
    "links": [
      "https://twitter.com/j0ncampbell/status/1266514356071735296"
    ]
  },
  {
    "name": "Cop Shoves a Guy into a Metal Fence",
    "location": "New York",
    "links": [
      "https://twitter.com/ZachReports/status/1266557305107202049",
      "https://twitter.com/BTSsavedmylife9/status/1266754310161006594"
    ]
  },
  {
    "name": "Cop Shoving a Person to the Ground Towards Metal Trash Bins",
    "location": "New York",
    "links": [
      "https://twitter.com/crankberries/status/1266584559245803522",
      "https://twitter.com/mkultranews/status/1266893237450498048"
    ]
  },
  {
    "name": "NYPD Rams Protestors",
    "location": "New York",
    "links": [
      "https://twitter.com/pgarapon/status/1266885414016688134",
      "https://twitter.com/mkultranews/status/1266893237450498048"
    ]
  },
  {
    "name": "Police Assault Protestors",
    "location": "New York",
    "links": [
      "https://twitter.com/theactivistTati/status/1266889419858075649"
    ]
  },
  {
    "name": "Police Shove Woman to Ground, Inducing Seizure",
    "location": "New York",
    "links": [
      "https://twitter.com/whitney_hu/status/1266540710188195843",
      "https://twitter.com/JasonLemon/status/1266529475757510656",
      "https://twitter.com/zayer_dounya/status/1266581597760831489"
    ]
  },
  {
    "name": "Police Drive by Man, Hitting with Car Door",
    "location": "New York",
    "links": [
      "https://twitter.com/DriveWendys/status/1266555286678048770"
    ]
  },
  {
    "name": "State Senator Pepper Sprayed in Eyes",
    "location": "New York",
    "links": [
      "https://twitter.com/zellnor4ny/status/1266802303807500288"
    ]
  },
  {
    "name": "Protestors with Hands Up Assaulted by Police",
    "location": "New York",
    "links": [
      "https://reddit.com/r/2020PoliceBrutality/comments/gu2u28/more_documented_aggression_in_flatbush_brooklyn/"
    ]
  },
  {
    "name": "Huffpost Reporter Arrested by NYPD",
    "location": "New York",
    "links": [
      "https://twitter.com/HuffPost/status/1266936484692725766",
      "https://huffpost.com/entry/huffpost-reporter-chris-mathias-arrested_n_5ed320d9c5b640cb8341c921"
    ]
  },
  {
    "name": "Member of the New York State Assemply Peppersprayed",
    "location": "New York",
    "links": [
      "https://twitter.com/GwynneFitz/status/1266522692326428672"
    ]
  },
  {
    "name": "Officer Threatens Protestors with Handgun",
    "location": "New York",
    "links": [
      "https://mobile.twitter.com/jangelooff/status/1267308341660979200"
    ]
  },
  {
    "name": "Law Enforcement Pinch-Formation Protestors with Pepper Bullets, Tear Gas, and Flashbangs",
    "location": "North Carolina",
    "links": [
      "https://instagram.com/tv/CA9UOKAj7MC/"
    ]
  },
  {
    "name": "Police Surround Approved Medical Station and Destroy Supplies",
    "location": "North Carolina",
    "links": [
      "https://twitter.com/AngelaMWilhelm/status/1268056986102444033/",
      "https://twitter.com/AngelaMWilhelm/status/1267974081577717762",
      "https://twitter.com/daveth89/status/1267974555332685824"
    ]
  },
  {
    "name": "Police Disperse Peaceful Protest with Tear Gas, Flash Bangs, and Paper Bullets",
    "location": "Ohio",
    "links": [
      "https://twitter.com/kodyfishertv/status/1266901735198638082"
    ]
  },
  {
    "name": "Officer Swings Baton at Protestors, Beats One",
    "location": "Ohio",
    "links": [
      "https://twitter.com/greg_doucette/status/1267114065819770880"
    ]
  },
  {
    "name": "Congresswoman Joyce Beatty Reportedly Sprayed",
    "location": "Ohio",
    "links": [
      "https://twitter.com/politico/status/1266866982919516160",
      "https://twitter.com/TimWCBD/status/1266787064735043591",
      "https://twitter.com/KRobPhoto/status/1266796191469252610"
    ]
  },
  {
    "name": "Police Peppersprays Medic",
    "location": "Ohio",
    "links": [
      "https://twitter.com/Katy38105157/status/1266816739444166656",
      "https://twitter.com/SAColumbus/status/1266867613872857094"
    ]
  },
  {
    "name": "Police Mace Innocent Woman",
    "location": "Ohio",
    "links": [
      "https://twitter.com/lalaitskelcey2/status/1266821476122058752",
      "https://twitter.com/MarioLeUgly/status/1266933807929798656"
    ]
  },
  {
    "name": "Police Intimidating Protestors with Car",
    "location": "Ohio",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gtq7i4/columbus_police_officer_trying_to_use_his_car_to/"
    ]
  },
  {
    "name": "Police Pepper Spray Kneeling Protestors",
    "location": "Ohio",
    "links": [
      "https://twitter.com/DabinDhillo/status/1266892095702392832",
      "https://twitter.com/taesvangogh/status/1266907922308558848"
    ]
  },
  {
    "name": "Police Push and Pepper Spray Reporters",
    "location": "Ohio",
    "links": [
      "https://twitter.com/TheLantern/status/1267644471317090305",
      "https://twitter.com/maevewalsh27/status/1267646128289447939"
    ]
  },
  {
    "name": "Police Pepper Spray Photographer",
    "location": "Ohio",
    "links": [
      "https://i.redd.it/4ix8f3j6dy151.jpg",
      "https://old.reddit.com/r/Columbus/comments/gtk192/photographer_being_pepper_sprayed_by_police/",
      "https://instagram.com/p/CA03DsTByLn/"
    ]
  },
  {
    "name": "Woman Holding Sign Shot with Rubber Bullets",
    "location": "Ohio",
    "links": [
      "https://mobile.twitter.com/chadloder/status/1267113315613806592",
      "https://twitter.com/greg_doucette/status/1267122343454953472"
    ]
  },
  {
    "name": "Police Break up Peaceful Protest",
    "location": "Oregon",
    "links": [
      "https://twitter.com/IwriteOK/status/1266907719635632129",
      "https://twitter.com/MrOlmos/status/1266916861267996673"
    ]
  },
  {
    "name": "Police Tear-Gas Homeless Camp",
    "location": "Oregon",
    "links": [
      "https://twitter.com/AstuteAF/status/1268125169890938882"
    ]
  },
  {
    "name": "Police Officer Maves Woman and Kicks Head",
    "location": "Pennsylvania",
    "links": [
      "https://twitter.com/ItsKadynC/status/1266967646345613317",
      "https://twitter.com/the7goonies/status/1266989439160590336"
    ]
  },
  {
    "name": "Police Pepperspray Protestors Helping Someone Stand",
    "location": "Pennsylvania",
    "links": [
      "https://twitter.com/greg_doucette/status/1266862623041167362"
    ]
  },
  {
    "name": "Police Beat Man",
    "location": "Pennsylvania",
    "links": [
      "https://twitter.com/UR_Ninja/status/1266913490301792257"
    ]
  },
  {
    "name": "Police Drag, and Beat Cooperating Man",
    "location": "Pennsylvania",
    "links": [
      "https://youtu.be/QDcCFN_LQPA"
    ]
  },
  {
    "name": "Cop Beats Man, and Forces Finger onto Baton",
    "location": "Pennsylvania",
    "links": [
      "https://twitter.com/mkultranews/status/1267305587206807553"
    ]
  },
  {
    "name": "Police Trap Protestors on Highway, Tear Gas Them",
    "location": "Pennsylvania",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/guve5f/philadelphia_police_traps_protesters_on_highway/",
      "https://twitter.com/bbcease/status/1267582823428501508"
    ]
  },
  {
    "name": "Police Pepperspray Three Kneeling Individuals",
    "location": "Pennsylvania",
    "links": [
      "https://twitter.com/d0wnrrrrr/status/1267691766188310528"
    ]
  },
  {
    "name": "Police Individually Target Peaceful Protestor, Arrest Him",
    "location": "South Carolina",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/guxm5o/police_arresting_a_peaceful_protestor_for_simply/?utm_source=share&utm_medium=ios_app&utm_name=iossmf",
      "https://reddit.com/r/iamatotalpieceofshit/comments/gugrfa/man_reaches_out_with_love_to_the_cops_and_they/"
    ]
  },
  {
    "name": "Police Swarm Woman with Provocation",
    "location": "Tennessee",
    "links": [
      "https://twitter.com/Desi_Stennett/status/1266996885824380929"
    ]
  },
  {
    "name": "Police Assault Protestors",
    "location": "Texas",
    "links": [
      "https://gfycat.com/tautimaginativedore"
    ]
  },
  {
    "name": "Police Shoot Non-Violent Protestor in Head",
    "location": "Texas",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/guwc4y/austin_tx_nonviolent_protestor_shot_in_the_head/",
      "https://instagram.com/p/CA6TCIGnuWm/",
      "https://youtube.com/watch?v=-BGyTi-KdKc",
      "https://streamable.com/o1uqgy"
    ]
  },
  {
    "name": "Police use Tear Gas & Rubber Bullets on Protestors",
    "location": "Texas",
    "links": [
      "https://twitter.com/highsettler/status/1266876480929349633",
      "https://imgur.com/gallery/VKuIIvu",
      "https://gfycat.com/weirdthankfulgnatcatcher"
    ]
  },
  {
    "name": "Police Open Fire on Crowd with Rubber Bullets",
    "location": "Texas",
    "links": [
      "https://twitter.com/ironfront7/status/1267133400156196870"
    ]
  },
  {
    "name": "Police Spray Man in Face",
    "location": "Texas",
    "links": [
      "https://old.reddit.com/r/Bad_Cop_No_Donut/comments/guhgfq/please_let_others_see_this_this_guy_did_not/"
    ]
  },
  {
    "name": "Police Trample Protestor with Horse",
    "location": "Texas",
    "links": [
      "https://twitter.com/vikthewild/status/1266538354939756544"
    ]
  },
  {
    "name": "Officer Shoves Woman to Pavement",
    "location": "Texas",
    "links": [
      "https://twitter.com/AbkTrauma/status/1266511972524269569"
    ]
  },
  {
    "name": "Police Shoot Unarmed Woman in Face",
    "location": "Texas",
    "links": [
      "https://twitter.com/KevinRKrause/status/1266898396339675137",
      "https://i.redd.it/ns0uj557x0251.jpg",
      "https://twitter.com/greg_doucette/status/1267109272342736896"
    ]
  },
  {
    "name": "Police user Flashbangs and Tear Gas on Protestors",
    "location": "Texas",
    "links": [
      "https://twitter.com/xtranai/status/1266898175568338945"
    ]
  },
  {
    "name": "Police Shoot Man with Alleged Rubber Bullets",
    "location": "Texas",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/gu3s6j/police_shoots_protestor_for_no_reason/"
    ]
  },
  {
    "name": "Police Shove Man with Cane to Ground",
    "location": "Utah",
    "links": [
      "https://twitter.com/bubbaprog/status/1266908354821206016"
    ]
  },
  {
    "name": "Police Shoot Man with Beanbang at Pointblank Range",
    "location": "Utah",
    "links": [
      "https://reddit.com/r/nextfuckinglevel/comments/gtv4co/downtown_salt_lake_city_may_30th_2020_unarmed/"
    ]
  },
  {
    "name": "Officer Sprays man Watching from Balcony",
    "location": "Virginia",
    "links": [
      "https://reddit.com/r/rva/comments/gtwdzi/someone_got_pepper_sprayed_from_his_second_floor/",
      "https://twitter.com/ADeliciousBear/status/1268048506247405568",
      "https://m.facebook.com/story.php?story_fbid=1123349158037544&id=100010874104187"
    ]
  },
  {
    "name": "Tear Gas Fired at Peaceful Protest",
    "location": "Virginia",
    "links": [
      "https://twitter.com/i/status/1267650345947271176",
      "https://twitter.com/i/status/1267613150112858116",
      "https://twitter.com/i/status/1267601158534815745",
      "https://youtube.com/watch?v=LG_HMghyQZc"
    ]
  },
  {
    "name": "Officer Spits on Detained Protestor",
    "location": "Virginia",
    "links": [
      "https://reddit.com/r/PublicFreakout/comments/guzgf9/police_officer_in_richmond_va_spits_on_and_near_a/"
    ]
  },
  {
    "name": "Police Beat Unarmed Man on Ground",
    "location": "Seattle",
    "links": [
      "https://twitter.com/gunduzbaba1905/status/1266937500607614982"
    ]
  },
  {
    "name": "Police Spray Peaceful Protestors",
    "location": "Seattle",
    "links": [
      "https://reddit.com/r/Bad_Cop_No_Donut/comments/gtt3w8/i_caught_the_moment_seattle_police_pepper_sprayed/"
    ]
  },
  {
    "name": "Police Pepper Spray Young Child",
    "location": "Seattle",
    "links": [
      "https://fox10phoenix.com/news/video-shows-milk-poured-over-face-of-child-pepper-sprayed-in-seattle-protest"
    ]
  },
  {
    "name": "Police Initiate Violence",
    "location": "Seattle",
    "links": [
      "https://reddit.com/r/Seattle/comments/gv0ru3/this_is_the_moment_it_all_happened/",
      "https://reddit.com/r/PublicFreakout/comments/gv1spo/the_moment_seattle_police_instigate_a_riot_over_a/"
    ]
  },
  {
    "name": "Officer Pins Protestor by Pushing Knee into his Neck",
    "location": "Seattle",
    "links": [
      "https://mobile.twitter.com/chadloder/status/1267011092045115392"
    ]
  },
  {
    "name": "Officer Sprays Protestor Walking Backwards with Arms Raised",
    "location": "Wisconsin",
    "links": [
      "https://twitter.com/NeonMarionette/status/1266962885957292032?s=20"
    ]
  },
  {
    "name": "Incident Compilation",
    "location": "Unknown Location",
    "links": [
      "https://twitter.com/perfectlyg0lden/status/1267014293628870656"
    ]
  },
  {
    "name": "Police Kick and Beat Surrendered Man",
    "location": "Unknown Location",
    "links": [
      "https://twitter.com/BenjaminPDixon/status/1266577416950079494"
    ]
  },
  {
    "name": "Officer Grabs Bystander by the Neck",
    "location": "Unknown Location",
    "links": [
      "https://twitter.com/EDDIFUL/status/1267338642617364481"
    ]
  }
]

const map = [
    {
        name: "I want to donate.",
        func: async () => {
            clearButtons();
            await respond("Who would you like to donate to?");
            createButtons(
                [
                    {
                        name: "Victims.",
                        func: async () => {
                            clearButtons();
                            await respond(`There are currently ${victimDonations.length} relevant funds relating to VICTIMS. Come back later as this list will be updated over time.`);
                            for (donations of victimDonations) {
                                await respond(donations.text, 20, true, { href: donations.link });
                            }
                            map[0].func();
                        }
                    },
                    {
                        name: "Protestors.",
                        func: async () => {
                            clearButtons();
                            await respond(`There are currently ${protestorDonations.length} relevant funds relating to PROTESTORS. Come back later as this list will be updated over time.`);
                            for (donations of protestorDonations) {
                                await respond(donations.text, 20, true, { href: donations.link });
                            }
                            map[0].func();
                        }
                    },
                    {
                        name: "Organizations.",
                        func: async () => {
                            clearButtons();
                            await respond(`There are currently ${organizationDonations.length} relevant funds relating to ORGANIZATIONS. Come back later as this list will be updated over time.`);
                            for (donations of organizationDonations) {
                                await respond(donations.text, 20, true, { href: donations.link });
                            }
                            map[0].func();
                        }
                    },
                    {
                        name: "Return to Main Menu.",
                        func: () => {
                            clearButtons();
                            initiailizeResponses();
                        }
                    }
                ]
            )
        }
    },
    {
        name: "I want to sign petitions.",
        func: async () => {
            clearButtons();
            await respond(`There are currently ${petitions.length} relevant PETITIONS. Come back later as this list will be updated over time.`);
            for (petition of petitions) {
                await respond(petition.text, 12.5, true, { href: petition.link });
            }
            await respond("ATTENTION: International users including Canadians can use the following ZIP Codes to sign petitions.", 40);
            await respond("90015 - Los Angeles, California", 30, true);
            await respond("10001 - New York City, New York", 30, true);
            await respond("75001 - Dallas, Texas", 30, true);
            initiailizeResponses();
        }
    },
    {
      name: "I want to see brutality reports.",
      func: async () => {
        clearButtons();
        await respond("All content is reportedly from protests resulting from the death of George Floyd and can be found by user pb-files on GitHub.", 25);
        await respond("Content may contain violence, and is not deemed suitable for all viewers. Do you wish to proceed?");
        createButtons(
          [
            {
              name: "Yes.",
              func: async () => {
                clearButtons();
                await respond(`There are currently ${mediaList.length} reported instances of police brutality in ${[...new Set(mediaList.map(x => x.location))].length} different states.`);
                for (instance of mediaList) {
                  await respond(instance.name, 1, true, { href: instance.links[0] });
                }
                initiailizeResponses();
              }
            },
            {
              name: "No.",
              func: async() => {
                clearButtons();
                initiailizeResponses();
              }
            }
          ]
        )
      }
    },
    {
        name: "I want to see a list of victims.",
        func: async () => {
            clearButtons();
            await respond(`There are currently ${victimList.length} recent victims, the list is incomplete and should not be taken as whole.`, 20);
            await respond("Click the victim's name to view a relevant Google search, most victims will display relevant results, but not all victims got media attention.", 20);
            for (victim of victimList) {
                await respond(victim, 1, true, { href: `https://google.com/search?q=${victim}` });
            }
            await respond("Scroll up to view the complete list of victims.");
            initiailizeResponses();
        }
    }
]

function extractHostname(url) {
  let hostname;
  if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
  } else {
      hostname = url.split('/')[0];
  };

  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];
  return hostname;
};

async function initiailizeResponses() {
    await respond("What would you like to do?", false);
    createButtons(map)
}

function clearButtons() {
    document.querySelector('#buttons').innerHTML = "";
}

function send(button) {
    const response = button.textContent;
    userResponse(button, true);

    // if (response == "I want to donate.")
}

async function respond(message, interval, quick, options = {}) {
    let { href, parent, openEnded } = options;

    if (!parent) parent = createResponseContainer("", false);
    parent.classList.add('typing');

    return new Promise(async resolve => {
        if (!quick) await wait(2400);
        for (let i = 0; i < message.length; i++) {
            setTimeout(() => {
                parent.children[0].textContent += message.charAt(i);
            }, i * (interval || 50));
        };
        await wait(message.length * (interval || 50) + (quick ? 0 : 1000));

        parent.classList.remove('typing');

        if (href) {
          const textContent = parent.children[0].textContent;
          parent.children[0].textContent = "";
          const a = document.createElement('a');
          a.textContent = textContent;
          a.href = href;
          a.target = "_blank";
  
          parent.children[0].appendChild(a);
        }

        resolve(parent);
    });
}

function bottomOutTerminal() {
    const terminal = document.querySelector('#terminal');
    terminal.scrollTop = terminal.scrollHeight;
}

async function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function userResponse(name) {
    const response = createResponseContainer(name, true);
}

function createResponseContainer(textContent, user) {
    const container = createElement('div', `response-container ${user == true ? 'user' : ''}`);
    const response = createElement('div', 'response');

    response.textContent = textContent;
    container.appendChild(response);
    document.querySelector('#terminal').appendChild(container);
    bottomOutTerminal();
    return container;
}

function createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.setAttribute('class', className);
    return element;
}

function createButtons(buttonArray) {

    buttonArray.forEach((data, index) => {
        const button = createElement('button');
        button.textContent = data.name;
        console.log(data);
        button.addEventListener('click', () => {
            userResponse(data.name);
            data.func();
        });
        document.querySelector('#buttons').appendChild(button);
    });

    bottomOutTerminal();
}