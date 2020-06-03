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
      "link": "https://www.gofundme.com/f/george-floyd-bigfloyd"
    },
    {
      "text": "Ahmaud Arbery Fund",
      "link": "https://www.gofundme.com/f/i-run-with-maud"
    },
    {
      "text": "Regis Korchinski Fund",
      "link": "https://www.gofundme.com/f/justice-for-regis"
    },
    {
      "text": "Jamee Johnson Fund",
      "link": "https://www.gofundme.com/f/eumzn-justice-for-jamee?utm_source=twitter&utm_medium=social&utm_campaign=p_cp+share-sheet"
    },
    {
      "text": "Destiny Harrison Funeral Fund",
      "link": "https://www.gofundme.com/f/destiny-harrison-funeral"
    },
    {
      "text": "Eric Rosalia Fund",
      "link": "https://www.gofundme.com/f/eric-rosalia?utm_source=customer&utm_medium=copy_link-tip&utm_campaign=p_cp+share-sheet"
    },
    {
      "text": "Belly Mujinga Fund",
      "link": "https://www.gofundme.com/f/rip-belly-mujinga"
    },
    {
      "text": "Dion Johnson Fund",
      "link": "https://www.gofundme.com/f/justice-for-dion-johnson"
    },
    {
      "text": "Aaron James Fund",
      "link": "https://www.gofundme.com/f/rest-in-peace-aaron-quotajquot-sutton"
    },
    {
      "text": "Tony McDade Fund",
      "link": "https://www.gofundme.com/f/in-memory-of-tony-mcdade"
    },
    {
      "text": "Healing For Darnella",
      "link": "https://www.gofundme.com/f/peace-and-healing-for-darnella"
    },
    {
      "text": "Destiny’s Dream Scholarship",
      "link": "https://secure.qgiv.com/for/desdresch/mobile"
    },
    {
      "text": "James Scurlock Fund",
      "link": "https://www.gofundme.com/f/for-james-scurlocks-family"
    },
    {
      "text": "Support For Leslie Fund",
      "link": "https://www.gofundme.com/f/csgskf-love-and-support-for-leslie"
    },
    {
      "text": "Trever Belle Fund",
      "link": "https://www.gofundme.com/f/trevor-belle"
    },
    {
      "text": "Tampa Bay Community Support",
      "link": "https://www.gofundme.com/f/tampa-bay-community-support-fund"
    },
    {
      "text": "Brad Levi Ayala Fund",
      "link": "https://www.gofundme.com/f/brad-levi-ayala"
    },
    {
      "text": "Alajunaye Davis Fund",
      "link": "https://www.gofundme.com/f/rke75-funeral-arrangements"
    },
    {
      "text": "Said Joquin Fund",
      "link": "https://www.gofundme.com/f/justice-for-said-joquin"
    },
    {
      "text": "David McAtee Fund",
      "link": "https://www.gofundme.com/f/justicefordavidmcatee"
    }
]

const protestorDonations = [
    {
      "text": "Tampa Bay Community Support",
      "link": "https://www.gofundme.com/f/tampa-bay-community-support-fund"
    },
    {
      "text": "Split Donation to 37 Bail Funds",
      "link": "https://secure.actblue.com/donate/bail_funds_george_floyd"
    },
    {
      "text": "National Bail Fund Network",
      "link": "https://www.communityjusticeexchange.org/nbfn-directory"
    },
    {
      "text": "Gas Mask Fund",
      "link": "https://twitter.com/isakdouah/status/1266858141913878528?s=21"
    },
    {
      "text": "Messiah Young and Taniya Pilgrim",
      "link": "https://www.gofundme.com/f/messiah-young-and-taniyah-pilgrim-bail-money"
    },
    {
      "text": "Ezequiel Valderas Baild Fund",
      "link": "https://www.gofundme.com/f/freedom-for-ezequiel-valderas"
    },
    {
      "text": "BLM Frontline Fund",
      "link": "https://www.gofundme.com/f/blm-frontline-fundminneapolis"
    },
    {
      "text": "Fund Protesters In The UK",
      "link": "https://www.justgiving.com/crowdfunding/hajra-khan-2"
    },
    {
      "text": "Supplies For DC Protestors",
      "link": "https://www.gofundme.com/f/rasing-money-for-supplies-for-dc-protesters"
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
      "link": "http://www.blackdisability.org/"
    },
    {
      "text": "The Marshall Project",
      "link": "https://www.themarshallproject.org/donate"
    },
    {
      "text": "ACLU",
      "link": "https://action.aclu.org/give/aclu-response-covid-19"
    },
    {
      "text": "Campaign Zero",
      "link": "https://www.joincampaignzero.org/#vision"
    },
    {
      "text": "Advancement Project",
      "link": "https://advancementproject.org/donate/"
    }
]

const petitions = [
    {
      "text": "Raise The Degree",
      "link": "https://www.change.org/p/minneapolis-district-attorney-raise-the-degree?recruiter=1098599238&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi&recruited_by_id=960efe90-a206-11ea-8907-8fc7af712ec3"
    },
    {
      "text": "George Floyd",
      "link": "https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd?recruiter=895898514&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial&recruited_by_id=6a4669c0-a74d-11e8-a554-dd9015f4e479"
    },
    {
      "text": "George Floyd",
      "link": "https://t.co/ENgYhM2oEC"
    },
    {
      "text": "George Floyd",
      "link": "https://www.thepetitionsite.com/248/031/510/justice-for-george-floyd-another-black-man-needlessly-murdered-by-police/?taf_id=65858665&cid=fb_na"
    },
    {
      "text": "George Floyd",
      "link": "https://www.amnesty.org/en/get-involved/take-action/george-floyd-police-violence-usa/"
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
      "link": "https://www.change.org/p/change-org-the-minneapolis-police-officers-to-be-charged-for-murder-after-killing-innocent-black-man"
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
      "link": "https://www.change.org/p/andy-beshear-justice-for-breonna-taylor"
    },
    {
      "text": "Ahmaud Arbery",
      "link": "https://www.change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill"
    },
    {
      "text": "Ahmaud Arbery",
      "link": "https://www.change.org/p/human-rights-campaign-justice-for-ahmuad-aubrey-2"
    },
    {
      "text": "Ahmaud Arbery",
      "link": "https://www.change.org/p/district-attorney-tom-durden-justice-for-ahmaud-arbery-i-run-with-maud"
    },
    {
      "text": "Pass The Georgia Hate Crime Bill",
      "link": "https://www.change.org/p/governor-brian-kemp-justice-for-ahmaud-arbery"
    },
    {
      "text": "Defund MPD",
      "link": "https://secure.everyaction.com/eR7GA7oz70GL8doBq19LrA2"
    },
    {
      "text": "Life Sentence For Police Brutality",
      "link": "https://www.change.org/p/department-of-justice-mandatory-life-sentence-for-police-brutality"
    },
    {
      "text": "Regis Korchinski",
      "link": "https://t.co/fqxvTJ76gE"
    },
    {
      "text": "Tony McDade",
      "link": "https://www.change.org/p/black-lives-matter-activists-justice-for-tony-mcdade"
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
      "link": "https://www.change.org/p/julius-jones-is-innocent-don-t-let-him-be-executed-by-the-state-of-oklahoma?recruiter=1094475756&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_initial&recruited_by_id=8f486ef0-a078-11ea-8e7f-d5aa545940b3"
    },
    {
      "text": "Belly Mujinga",
      "link": "https://www.change.org/p/govia-thameslink-justice-for-belly-mujinga?recruiter=false&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial&recruited_by_id=ffad40c0-a0c4-11ea-ac15-4118e05249bd"
    },
    {
      "text": "Willie Simmons",
      "link": "https://www.change.org/p/alabama-governor-kay-ivey-willie-simmons-has-served-38-years-for-a-9-robbery?recruiter=962817259&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi&recruited_by_id=bb52c480-7a65-11e9-859f-09a81b26ec6f"
    },
    {
      "text": "Hands Up Act",
      "link": "https://www.change.org/p/us-senate-hands-up-act"
    },
    {
      "text": "National Action Against Police Brutality",
      "link": "https://www.change.org/p/national-action-against-police-brutality-and-murder"
    },
    {
      "text": "Kyjuanzi Harris",
      "link": "https://www.change.org/p/illinois-governor-correcting-a-wrongful-conviction-kyjuanzi-harris"
    },
    {
      "text": "Alejandro Vargas Martinez",
      "link": "https://www.change.org/p/florida-police-department-justice-for-alejandro-vargas-martinez"
    },
    {
      "text": "Censorship Of Police Brutality In France",
      "link": "https://www.change.org/p/gouvernement-fran%C3%A7ais-refus-de-la-loi-visant-%C3%A0-emp%C3%AAcher-la-diffusion-des-images-de-violences-polici%C3%A8res?utm_content=cl_sharecopy_22450892_fr-FR%3Av5&recruiter=792266977&recruited_by_id=86f08ea0-9f58-11e7-961e-cda0813a4e4f&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi"
    },
    {
      "text": "Sean Reed",
      "link": "https://www.change.org/p/white-house-justice-for-sean?recruiter=69572427&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_abi&recruited_by_id=a4411689-1113-4cc7-b38b-2457ccedf381"
    },
    {
      "text": "Sean Reed",
      "link": "https://www.change.org/p/mayor-joe-hogsett-justice-for-sean-reed"
    },
    {
      "text": "Kendrick Johnson",
      "link": "https://www.change.org/p/united-states-supreme-court-justice-for-kendrick-johnson?recruiter=892242914&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_abi&utm_term=psf_combo_share_abi&recruited_by_id=84be3200-9821-11e8-a114-db091f4ac2f9"
    },
    {
      "text": "Tamir Rice",
      "link": "https://t.co/Xn18ESgrLz"
    },
    {
      "text": "Tamir Rice",
      "link": "https://www.change.org/p/justice-for-tamir-rice-appoint-a-special-prosecutor"
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
      "link": "https://www.change.org/p/donald-j-trump-justice-for-darrius-stewart?recruiter=1007505219&utm_source=share_petition&utm_medium=copylink&utm_campaign=tap_basic_share"
    },
    {
      "text": "Darius Stewart",
      "link": "https://sign.moveon.org/petitions/we-want-justice-for-19"
    },
    {
      "text": "Abolish Prison Labor",
      "link": "https://www.change.org/p/federal-bureau-of-prisons-abolish-prison-labour-in-the-usa?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=ecb9f830-ab55-11e7-8f6a-c5345e805526"
    },
    {
      "text": "Free Siyanda",
      "link": "https://www.change.org/p/free-siyanda"
    },
    {
      "text": "Chrystul Kizer",
      "link": "https://www.change.org/p/drop-all-charges-against-incarcerated-trafficking-survivor-chrystul-kizer"
    },
    {
      "text": "Chrystul Kizer",
      "link": "https://www.change.org/p/bryan-steil-wis-teen-face-life-in-prison-for-killing-man-who-allegedly-raped-her-and-sold-her-for-sex-b75d03ab-ceb7-468f-a161-4b6d1ab03767"
    },
    {
      "text": "Andile Mchunu (Bobo)",
      "link": "https://www.change.org/p/bheki-cele-justice-for-andile-mchunu-bobo"
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
    }
]

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
    const { href } = options;

    const container = createResponseContainer("", false);
    container.classList.add('typing');

    return new Promise(async resolve => {
        if (!quick) await wait(2400);
        for (let i = 0; i < message.length; i++) {
            setTimeout(() => {
                container.children[0].textContent += message.charAt(i);
            }, i * (interval || 50));
        };
        await wait(message.length * (interval || 50) + (quick ? 0 : 1000));
        container.classList.remove('typing');

        if (href) {
            const textContent = container.children[0].textContent;
            container.children[0].textContent = "";
            const a = document.createElement('a');
            a.textContent = textContent;
            a.href = href;
            a.target = "_blank";
            container.children[0].appendChild(a);
        }

        resolve();
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