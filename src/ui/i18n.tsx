import { createI18nApi, declareComponentKeys } from "i18nifty";
import { languages, type Language } from "@codegouvfr/sill";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import { statefulObservableToStatefulEvt } from "powerhooks/tools/StatefulObservable/statefulObservableToStatefulEvt";
import { z } from "zod";
import { createUnionSchema } from "ui/tools/zod/createUnionSchema";

export { declareComponentKeys };
export { languages };
export type { Language };

export const fallbackLanguage = "en";

export type LocalizedString = Parameters<typeof resolveLocalizedString>[0];

const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    $lang,
    useResolveLocalizedString
} = createI18nApi<
    | typeof import("ui/App").i18n
    | typeof import("ui/pages/softwareCatalog/SoftwareCatalogControlled").i18n
    | typeof import("ui/pages/softwareCatalog/SoftwareCatalogCard").i18n
    | typeof import("ui/pages/softwareCatalog/SoftwareCatalogSearch").i18n
    | typeof import("ui/pages/softwareDetails/SoftwareDetails").i18n
    | typeof import("ui/pages/softwareDetails/HeaderDetailCard").i18n
    | typeof import("ui/pages/softwareDetails/PreviewTab").i18n
    | typeof import("ui/pages/softwareDetails/ReferencedInstancesTab").i18n
    | typeof import("ui/pages/softwareDetails/AlikeSoftwareTab").i18n
    | typeof import("ui/pages/softwareUserAndReferent/SoftwareUserAndReferent").i18n
    | typeof import("ui/pages/declarationForm/DeclarationForm").i18n
    | typeof import("ui/pages/declarationForm/Step1").i18n
    | typeof import("ui/pages/declarationForm/Step2User").i18n
    | typeof import("ui/pages/declarationForm/Step2Referent").i18n
    | typeof import("ui/pages/homepage/Homepage").i18n
    | typeof import("ui/pages/addSoftwareLanding/AddSoftwareLanding").i18n
    | typeof import("ui/pages/softwareForm/SoftwareForm").i18n
    | typeof import("ui/pages/softwareForm/Step1").i18n
    | typeof import("ui/pages/softwareForm/Step2").i18n
    | typeof import("ui/pages/softwareForm/Step3").i18n
    | typeof import("ui/pages/softwareForm/Step4").i18n
    | typeof import("ui/pages/instanceForm/InstanceForm").i18n
    | typeof import("ui/pages/instanceForm/Step1").i18n
    | typeof import("ui/pages/instanceForm/Step2").i18n
    | typeof import("ui/pages/account/Account").i18n
    | typeof import("ui/shared/DetailUsersAndReferents").i18n
    | typeof import("ui/shared/Header").i18n
>()(
    { languages, fallbackLanguage },
    {
        "en": {
            "App": {
                "yes": "Yes",
                "no": "No",
                "previous": "Previous",
                "next": "Next",
                "add software": "Add software",
                "update software": "Update software",
                "add software or service": "Add software or service",
                "add instance": "Add instance",
                "required": "This field is required",
                "invalid url": 'Invalid url. It must start with "http"',
                "invalid version": "The value must be numeric (Eg: 2.0.1)",
                "all": "All",
                "allFeminine": "All",
                "loading": "Loading...",
                "no result": "No result",
                "search": "Search",
                "validate": "Validate",
                "not provided": "Not provided"
            },
            "Homepage": {
                "title": ({ accentColor }) => (
                    <>
                        <span style={{ "color": accentColor }}>
                            The free software catalog{" "}
                        </span>
                        recommended by the State for the whole administration.
                    </>
                ),
                "software selection": "Some software selection",
                "last added": "Last added",
                "most used": "The most used",
                "essential": "To have on your desktop",
                "recently updated": "Last updated",
                "waiting for referent": "Waiting for a referent",
                "in support market": "Is present in support market",
                "SILL numbers": "The SILL in figures",
                "softwareCount": "referenced software",
                "registeredUserCount": "site user",
                "agentReferentCount": "software referent",
                "organizationCount": "organization",
                "help us": "Help us to enrich the catalog",
                "the sill in a few words": "The SILL in a few words",
                "the sill in a few words paragraph": ({ accentColor }) => (
                    <>
                        The{" "}
                        <span style={{ "color": accentColor }}>
                            Interministerial Foundation of Free Software (SILL)
                        </span>{" "}
                        is a{" "}
                        <span style={{ "color": accentColor }}>reference catalog</span> of
                        free software recommended by the State for the{" "}
                        <span style={{ "color": accentColor }}>
                            French administration
                        </span>
                        .<br />
                        <br />
                        It is used to help administrations navigate and select the{" "}
                        <span style={{ "color": accentColor }}>free software</span> to
                        use, in accordance with{" "}
                        <span style={{ "color": accentColor }}>
                            Article 16 of the Digital Republic Act
                        </span>
                        .<br />
                        <br />
                        The <span style={{ "color": accentColor }}>
                            entry criteria
                        </span>{" "}
                        for software in the SILL include the publication of its source
                        code under an{" "}
                        <span style={{ "color": accentColor }}>
                            accepted free license
                        </span>{" "}
                        and its deployment by a public institution or installation by a
                        public agent.
                        <br />
                        <br />
                        The <span style={{ "color": accentColor }}>
                            SILL referents
                        </span>{" "}
                        are public agents who volunteer to manage and update information
                        on the software included in the catalog.
                        <br />
                        <br />
                    </>
                ),
                "illustration image": "Illustration image",
                "declare referent title": "Declare yourself as a referent",
                "edit software title": "Edit a software entry",
                "add software or service title": "Add a software or service",
                "declare referent desc":
                    "Become a volunteer public agent to manage and update information on SILL software",
                "edit software desc":
                    "Modify the information of an existing software in the SILL catalog",
                "add software or service desc":
                    "Propose a new software or service for inclusion in the SILL catalog",
                "declare referent button label": "Access the form",
                "edit software button label": "Search for a software",
                "add software or service button label": "Fill out the addition form"
            },
            "AddSoftwareLanding": {
                "title": (
                    <>
                        <span>Help us enrich the catalog</span> by adding software or
                        software deployments in your organization !
                    </>
                ),
                "subtitle":
                    "Participate in the creation of a reference platform for public service software equipment and share useful information with agents and CIOs of the administration",
                "who can add software": "Who can add software or a service and how?",
                "discover as agent label": "Discover as agent",
                "discover as agent description": `As a public agent, using the SILL (Interministerial Base of Free Software) offers several benefits. 
                Firstly, it simplifies the process of searching for and selecting free software recommended by the State, 
                ensuring the quality, security, and compliance of tools used within the administration. Moreover, the SILL 
                encourages collaboration between public agents from different public functions (State, Hospital, and Territorial), 
                fostering the exchange of experiences and best practices. By using software referenced in the SILL, 
                public agents contribute to the control, sustainability, and independence of their administration's information systems, 
                in accordance with Article 16 of the Digital Republic Act. Lastly, by becoming a SILL referent for a free software, 
                a public agent can not only share their expertise and knowledge but also benefit from the support and advice of the SILL 
                referent community and Etalab's free software division.`,
                "discover as DSI label": "Discover as CIO",
                "discover as DSI description": `As a Chief Information Officer (CIO), using the SILL offers numerous 
                advantages for managing and evolving your administration's information systems. The SILL streamlines the assessment 
                and selection of free software recommended by the State, thus ensuring compliance, quality, and security of the implemented 
                solutions. Moreover, using software referenced in the SILL contributes to strengthening the independence, control, and 
                sustainability of information systems, in line with the Digital Republic Act. The SILL also allows benefiting from the shared 
                experiences and best practices of the SILL referent community and Etalab's free software division, fostering inter-administrative 
                cooperation. Furthermore, adopting free software can generate savings on licensing and maintenance costs while encouraging 
                innovation and interoperability. Ultimately, as a CIO, the SILL can help optimize the management of IT resources 
                and promote a culture of openness and collaboration within the administration.`,
                "contribute as agent label": "Contribute as agent",
                "contribute as agent description": `As a public official, contributing to the SILL allows you to add value to the 
                community by sharing your knowledge and facilitating the adoption of open-source software within the administration. 
                Contributing mainly involves adding software and becoming a point of reference for them. By adding open-source software 
                to the SILL, you help other public servants discover reliable and high-performing solutions that meet their needs. 
                Becoming a point of reference for a software allows you to attest to its use within your administration, contribute 
                to updating relevant information about the software (minimum recommended version, fact sheet, etc.), and agree to be 
                contacted by other public servants to discuss the software in question. As a SILL point of reference, you can also 
                subscribe to the SILL maintainers' discussion list and participate in maintainers' meetings, thereby strengthening 
                cooperation and experience sharing within the community of points of reference. In short, contributing to the SILL 
                as a public servant provides you with the opportunity to develop your expertise, help your colleagues, and promote 
                the use of open-source software within the administration.`,
                "contribute as DSI label": "Contribute as CIO",
                "contribute as DSI description": `As a Director of Information Systems (CIO), contributing to the SILL allows you 
                to improve and support the free software ecosystem within the administration, while sharing 
                your expertise and promoting innovation. Contributing mainly involves adding software and becoming 
                a reference for them. By adding a free software to the SILL, you help other administrations identify 
                proven and effective solutions that meet their needs, while strengthening interoperability and 
                inter-administrative collaboration. Becoming a reference for a software allows you to attest to its deployment 
                within your administration, contribute to updating relevant information about the software 
                (recommended minimum version, datasheet, etc.), and agree to be contacted by other public agents to 
                discuss the software in question. As a SILL reference, you can also sign up for the 
                SILL maintainers' discussion list and participate in maintainers' meetings, thus strengthening 
                cooperation and experience sharing within the community of references. In short, contributing to the SILL as a 
                CIO offers you the opportunity to promote the use of free software, develop your expertise, and encourage 
                a culture of openness and collaboration within the administration.`
            },
            "SoftwareForm": {
                "title software update form": "Update logiciel",
                "stepper title": ({ currentStepIndex }) => {
                    switch (currentStepIndex) {
                        case 1:
                            return "What kind of software do you want to add ?";
                        case 2:
                            return "About the software";
                        case 3:
                            return "Some prerequisites";
                        case 4:
                            return "Proprietary similar and equivalent software";
                        default:
                            return "";
                    }
                },
                "submit": "Add software"
            },
            "SoftwareFormStep1": {
                "software desktop": "Desktop installable software",
                "software cloud": "Application software solution hosted in the cloud",
                "software cloud hint": "Public cloud or your organization's cloud",
                "module": "Brick or technical modules",
                "module hint": "For example proxies, HTTP servers or plugins",
                "checkbox legend":
                    "Operating system on which the software can be installed"
            },
            "SoftwareFormStep2": {
                "wikidata id": "Wikidata ID",
                "wikidata id hint": (
                    <>
                        Associate the software with an existing{" "}
                        <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page">
                            Wikidata
                        </a>{" "}
                        file
                    </>
                ),
                "wikidata id information":
                    "This information will automatically populate other fields",
                "comptoir du libre id": "Comptoir du Libre identifier",
                "comptoir du libre id hint": "Page URL or numeric ID",
                "software name": "Software name",
                "software feature": "Software function",
                "software feature hint":
                    "Describe in a few words the features of the software",
                "license": "Software license",
                "license hint": "(GNU, GPL, BSD, etc.)",
                "minimal version": "Minimum version",
                "minimal version hint":
                    "Earliest version still acceptable to have in production",
                "url or numeric id": "This field must be a URL or an ID number",
                "autofill notice":
                    "This information will automatically populate other fields"
            },
            "SoftwareFormStep3": {
                "is present in support market":
                    "Is the software present in the support market?",
                "is from french public service":
                    "Is the software developed by the French public service?"
            },
            "SoftwareFormStep4": {
                "similar software": "This software is an alternative to ...",
                "similar software hint":
                    "Associate the software with similar software, proprietary or not"
            },
            "InstanceForm": {
                "breadcrumb add instance": "Add instance",
                "breadcrumb update instance": "Update instance",
                "title add instance form": "Add software instance",
                "title update instance form": "Update software instance",
                "stepper title": ({ currentStepIndex }) => {
                    switch (currentStepIndex) {
                        case 1:
                            return "About the instantiated software";
                        case 2:
                            return "About the instance";
                        default:
                            return "";
                    }
                },
                "submit": "Add instance"
            },
            "InstanceFormStep1": {
                "software instance":
                    "What is the primary software used and deployed by your instance?",
                "other software": "Are there other software mobilized by your instance?"
            },
            "InstanceFormStep2": {
                "is in public access label": "Is your instance publicly accessible?*",
                "is in public access hint": "*Within the public service",
                "instance url label": "If so, what is the URL of the instance ?",
                "instance url hint":
                    "In order to offer quick access to the service offered",
                "organization label": "Which organization is involved?",
                "organization hint":
                    "What is the state organization that maintains this instance?",
                "targeted public label": "Who is the target audience?",
                "targeted public hint":
                    "Describe in a few words to whom the service offer is proposed"
            },
            "SoftwareCatalogControlled": {
                "search results": ({ count }) =>
                    `${count} free software${count === 1 ? "" : "s"}`,
                "sort by": "Sort by",
                "added_time": "Last added",
                "update_time": "Last updated",
                "referent_count": "Referent count",
                "referent_count_ASC": "Referent count ASC",
                "user_count": "User count",
                "user_count_ASC": "User count ASC",
                "latest_version_publication_date": "Last published version",
                "no software found": "No software found",
                "best_match": "Best match"
            },
            "SoftwareCatalogCard": {
                "latest version": ({ fromNowText }) => `Latest version ${fromNowText}`,
                "declare oneself referent": "Declare yourself referent / user",
                "isDesktop": "This software can be installed on desktop",
                "isFromFrenchPublicService":
                    "This software is from French public service",
                "isPresentInSupportMarket": "This software is present in support market"
            },
            "SoftwareCatalogSearch": {
                "placeholder": "Search a software, a word, a reference...",
                "filtersButton": "Filters",
                "organizationLabel": "Organization",
                "categoriesLabel": "Categories",
                "environnement label": "Usage environnement ",
                "prerogativesLabel": "Prerogatives",
                "filters": "Filters",
                "isInstallableOnUserTerminal": "Can be installed on user terminal",
                "isFromFrenchPublicServices": "Is from French public services",
                "doRespectRgaa": "Is compliant with RGAA rules",
                "isPresentInSupportContract": "Is present in support contract",
                "isTestable": "Is testable",
                "organization filter hint":
                    "Only show software that have at least one referent from a given organization",
                "linux": "GNU/Linux",
                "mac": "MacOS",
                "windows": "Windows",
                "browser": "Web browser",
                "stack": "Library, Framework and other technical building blocks",
                "number of prerogatives selected": ({ count }) =>
                    count === 0 ? "None" : `${count} selected`
            },
            "SoftwareDetails": {
                "catalog breadcrumb": "Software catalog",
                "tab title overview": "Overview",
                "tab title instance": ({ instanceCount }) =>
                    `Referenced instance (${instanceCount})`,
                "tab title alike software": ({ alikeSoftwareCount }) =>
                    `Alike or equivalent proprietary software (${alikeSoftwareCount})`,
                "about": "About",
                "use full links": "Use full links",
                "prerogatives": "Prerogatives",
                "last version": "Last version",
                "last version date": ({ date }) => `in ${date}`,
                "register": "Date de l'ajout : ",
                "register date": ({ date }) => `${date}`,
                "minimal version": "Minimal required version: ",
                "license": "License : ",
                "declare oneself referent": "Declare yourself referent / user",
                "isDesktop": "Installable on agent desktop",
                "isPresentInSupportMarket": "Present in support market",
                "isFromFrenchPublicService": "From French public service",
                "isRGAACompliant": "Is compliant with RGAA rules",
                "service provider": "See service providers",
                "comptoire du libre sheet": "Open Comptoir du libre sheet",
                "wikiData sheet": "Open Wikidata sheet",
                "share software": "Share the software",
                "declare referent": "Declare yourself referent / user",
                "edit software": "Edit software"
            },
            "HeaderDetailCard": {
                "authors": "Authors : ",
                "website": "Official website",
                "repository": "Source code repository"
            },
            "PreviewTab": {
                "about": "About",
                "use full links": "Use full links",
                "prerogatives": "Prerogatives",
                "last version": "Last version",
                "last version date": ({ date }) => `in ${date}`,
                "register": "Date de l'ajout : ",
                "register date": ({ date }) => `${date}`,
                "minimal version": "Minimal required version: ",
                "license": "License : ",
                "isDesktop": "Installable on agent desktop",
                "isPresentInSupportMarket": "Present in support market",
                "isFromFrenchPublicService": "From French public service",
                "isRGAACompliant": "Is compliant with RGAA rules",
                "service provider": "See service providers",
                "comptoire du libre sheet": "Open Comptoir du libre sheet",
                "wikiData sheet": "Open Wikidata sheet"
            },
            "ReferencedInstancesTab": {
                "instanceCount": ({ instanceCount, publicOrganizationCount }) =>
                    `${instanceCount} maintained instance by ${publicOrganizationCount} public organisation`,
                "concerned public": "Concerned public : ",
                "go to instance": "Open the instance"
            },
            "AlikeSoftwareTab": {
                "alike software sill": "Alike software in SILL",
                "alike software internal": "Alike proprietary software"
            },
            "DetailUsersAndReferents": {
                "userAndReferentCount": ({ userCount, referentCount, referentColor }) => (
                    <>
                        {userCount !== 0 && <>{userCount} users and </>}
                        <span style={{ "color": referentColor }}>
                            {referentCount} referents
                        </span>
                    </>
                )
            },
            "SoftwareUserAndReferent": {
                "catalog breadcrumb": "Software catalog",
                "user and referent breadcrumb": "Users and referents",
                "title": "Users and referents",
                "tab user title": "Users",
                "tab referent title": "Referents",
                "category": "Category",
                "softwareDetails": "See the software sheet",
                "declare user": "Declare yourself as a user",
                "declare referent": "Declare yourself as a referent",
                "is technical expert": "Technical expert",
                "organization": "Organization",
                "is user of": "Is user of",
                "is referent of": "Is referent of",
                "use case": "Use case"
            },
            "DeclarationForm": {
                "catalog breadcrumb": "Software catalog",
                "declare yourself user or referent breadcrumb":
                    "Declare yourself user or referent of the software",
                "send": "Send my statement",
                "title step 1": "How would you like to declare ?",
                "title step 2 user": "About your usage",
                "title step 2 referent": "About your referencing"
            },
            "DeclarationFormStep1": {
                "user type label": "I'm a user of this software",
                "user type hint": "Inside my organization",
                "referent type label": "I would like to be referent of this software",
                "referent type hint":
                    "As a guarantor and reference of the use of this software inside my organization"
            },
            "DeclarationFormStep2User": {
                "useCase": "Describe in a few words your use case",
                "environment": "In which environment do you use your software ?",
                "version": "Which version of the software do you use ? (Optionnel)",
                "service": "More precisely, which service of the software do you use ?"
            },
            "DeclarationFormStep2Referent": {
                "legend title": "Are you a technical expert of this software ?",
                "legend hint": "You are able to answer to questions of agents and of CIO",
                "useCase": "Describe in a few words the use case of your administration",
                "service":
                    "More precisely, which service of the software do you declare yourself referent"
            },
            "Account": {
                "title": "My account",
                "mail": "Email address",
                "organization": "Name of the affiliated organization",
                "change password": "Change your password",
                "no organization": "No organization"
            },
            "Header": {
                "home title": "Home - Socle interministériel de logiciels libres",
                "title": "Socle interministériel de logiciels libres",
                "navigation welcome": "Welcome to the SILL",
                "navigation catalog": "Software catalog",
                "navigation add software": "Add software or instance",
                "navigation support request": "Support request",
                "navigation about": "About the site",
                "quick access test": "Immediate test",
                "quick access login": "Sign in",
                "quick access logout": "Sign out",
                "quick access account": "My account",
                "select language": "Select language"
            }
        },
        "fr": {
            /* spell-checker: disable */
            "App": {
                "yes": "Oui",
                "no": "Non",
                "previous": "Précedent",
                "next": "Suivant",
                "add software": "Ajouter un logiciel",
                "update software": "Mettre à jour un logiciel",
                "add software or service": "Ajouter un logiciel ou un service",
                "add instance": "Ajouter une instance",
                "required": "Ce champs est requis",
                "invalid url": 'URL invalide. Elle doit commencer par "http"',
                "invalid version": "La valeur doit être numérique (Exemple : 2.0.1)",
                "all": "Tous",
                "allFeminine": "Toutes",
                "loading": "Chargement...",
                "no result": "Aucun résultat",
                "search": "Rechercher",
                "validate": "Valider",
                "not provided": "Pas renseigné"
            },
            "Homepage": {
                "title": ({ accentColor }) => (
                    <>
                        <span style={{ "color": accentColor }}>
                            Le catalogue de logiciels libres de référence
                        </span>{" "}
                        recommandé par l'État pour toute l'administration.
                    </>
                ),
                "software selection": "Quelques sélections de logiciels",
                "last added": "Derniers ajouts",
                "most used": "Les plus utilisés",
                "essential": "À avoir sur son poste",
                "recently updated": "Dernière version récente",
                "waiting for referent": "En attente de référent",
                "in support market": "Dans le marché de support",
                "SILL numbers": "Le SILL en plusieurs chiffres",
                "softwareCount": "logiciels référencés",
                "registeredUserCount": "utilisateurs du site",
                "agentReferentCount": "référents de logiciels",
                "organizationCount": "organismes présent",
                "help us": "Aidez-nous à enrichir le catalogue",
                "declare referent title":
                    "Se déclarer utilisateur ou référent d'un logiciel",
                "edit software title": "Éditer une fiche logiciel",
                "the sill in a few words": "Le SILL en quelques mots",
                "the sill in a few words paragraph": ({ accentColor }) => (
                    <>
                        Le{" "}
                        <span style={{ "color": accentColor }}>
                            Socle interministériel des Logiciels Libres (SILL)
                        </span>{" "}
                        est un{" "}
                        <span style={{ "color": accentColor }}>
                            catalogue de référence
                        </span>{" "}
                        des logiciels libres recommandés par l'État pour l'
                        <span style={{ "color": accentColor }}>
                            administration française
                        </span>
                        .<br />
                        <br />
                        Il est utilisé pour aider les administrations à naviguer et
                        sélectionner les{" "}
                        <span style={{ "color": accentColor }}>logiciels libres</span> à
                        utiliser, conformément à l'
                        <span style={{ "color": accentColor }}>
                            article 16 de la loi pour une République numérique
                        </span>
                        .<br />
                        <br />
                        Les{" "}
                        <span style={{ "color": accentColor }}>
                            critères d'entrée
                        </span>{" "}
                        d'un logiciel dans le SILL comprennent la publication de son code
                        source sous une{" "}
                        <span style={{ "color": accentColor }}>
                            licence libre acceptée
                        </span>{" "}
                        et son déploiement par un établissement public ou son installation
                        par un agent public.
                        <br />
                        <br />
                        Les <span style={{ "color": accentColor }}>
                            référents SILL
                        </span>{" "}
                        sont des agents publics qui sont volontaires pour gérer et mettre
                        à jour les informations sur les logiciels inclus dans le
                        catalogue.
                        <br />
                        <br />
                    </>
                ),
                "illustration image": "Image d'illustration",
                "add software or service title": "Ajouter un logiciel ou un service",
                "declare referent desc":
                    "Devenir un agent public volontaire pour gérer et mettre à jour les informations sur les logiciels du SILL",
                "edit software desc":
                    "Modifier les informations d'un logiciel existant dans le catalogue SILL",
                "add software or service desc":
                    "Proposer un nouveau logiciel ou service pour l'inclusion dans le catalogue SILL",
                "declare referent button label": "Accéder au formulaire",
                "edit software button label": "Rechercher un logiciel",
                "add software or service button label": "Remplir le formulaire d'ajout"
            },
            "AddSoftwareLanding": {
                "title": (
                    <>
                        <span>Aidez nous à enrichir le catalogue</span> en ajoutant des
                        logiciels ou des déploiement de logiciels dans votre organisation
                        !
                    </>
                ),
                "subtitle":
                    "Participez à la création d'une plateforme de référence pour l'équipement logiciel du service public et partagez des informations utiles aux agents et DSI de l'administration",
                "who can add software":
                    "Qui peut ajouter un logiciel ou un service et comment ?",
                "discover as agent label": "Découvrir en tant qu'agent",
                "discover as agent description": `En tant qu'agent public, utiliser le SILL (Socle Interministériel de Logiciels Libres) présente plusieurs avantages. 
                Premièrement, il facilite la recherche et la sélection de logiciels libres recommandés par l'État, 
                ce qui permet de s'assurer de la qualité, la sécurité et la conformité des outils utilisés dans 
                l'administration. De plus, le SILL encourage la collaboration entre agents publics de différentes 
                fonctions publiques (État, hospitalière et territoriale), favorisant ainsi l'échange d'expériences 
                et de bonnes pratiques. En utilisant des logiciels référencés dans le SILL, les agents publics contribuent à 
                la maîtrise, la pérennité et l'indépendance des systèmes d'information de leur administration, 
                conformément à l'article 16 de la loi pour une République numérique. Enfin, en devenant référent SILL pour un logiciel libre, 
                un agent public peut non seulement partager son expertise et ses connaissances, mais également bénéficier du soutien et des 
                conseils de la communauté des référents SILL et du pôle logiciels libres d'Etalab.`,
                "discover as DSI label": "Découvrir en tant que DSI",
                "discover as DSI description": `En tant que Directeur des Systèmes d'Information (DSI), utiliser le SILL 
                offre de nombreux avantages pour la gestion et l'évolution des systèmes 
                informatiques de votre administration. Le SILL facilite l'évaluation et la sélection des logiciels libres recommandés par l'État, garantissant 
                ainsi la conformité, la qualité et la sécurité des solutions mises en œuvre. De plus, le recours aux logiciels référencés dans le SILL contribue 
                à renforcer l'indépendance, la maîtrise et la pérennité des systèmes d'information, en accord avec la loi pour une République numérique. 
                Le SILL permet également de bénéficier du retour d'expérience et des bonnes pratiques partagées par la communauté des référents SILL et 
                le pôle logiciels libres d'Etalab, favorisant ainsi la coopération inter-administrative. En outre, l'adoption de logiciels libres peut 
                engendrer des économies sur les coûts de licence et de maintenance, tout en encourageant l'innovation et l'interopérabilité. 
                Finalement, en tant que DSI, le SILL peut aider à optimiser la gestion des ressources informatiques et à promouvoir une culture de l'ouverture 
                et de la collaboration au sein de l'administration.`,
                "contribute as agent label": "Contribuer en tant qu'agent",
                "contribute as agent description": `En tant qu'agent public, contribuer au SILL vous permet d'apporter une valeur ajoutée à la 
                communauté en partageant vos connaissances et en facilitant l'adoption de logiciels libres au sein de l'administration. 
                Contribuer consiste principalement à ajouter des logiciels et à devenir référent pour ces derniers. En ajoutant un logiciel 
                libre au SILL, vous aidez d'autres agents à découvrir des solutions fiables et performantes qui répondent à leurs besoins. 
                Devenir référent pour un logiciel vous permet d'attester de son usage au sein de votre administration, de contribuer à la mise 
                à jour des informations pertinentes sur ce logiciel (version minimale recommandée, fiche, etc.), et d'accepter d'être 
                contacté par d'autres agents publics pour échanger sur le logiciel en question. En tant que référent SILL, vous pouvez 
                également vous inscrire à la liste de discussion des mainteneurs du SILL et participer aux réunions des mainteneurs, 
                renforçant ainsi la coopération et le partage d'expérience au sein de la communauté des référents. En somme, contribuer 
                au SILL en tant qu'agent public vous offre l'opportunité de développer votre expertise, d'aider vos collègues et de promouvoir 
                l'utilisation de logiciels libres dans l'administration.`,
                "contribute as DSI label": "Contribuer en tant que DSI",
                "contribute as DSI description": `En tant que Directeur des Systèmes d'Information (DSI), contribuer au SILL vous 
                permet d'améliorer et de soutenir l'écosystème des logiciels libres au sein de l'administration, tout en partageant 
                votre expertise et en favorisant l'innovation. Contribuer consiste principalement à ajouter des logiciels et à devenir 
                référent pour ces derniers. En ajoutant un logiciel libre au SILL, vous aidez d'autres administrations à identifier 
                des solutions éprouvées et efficaces qui correspondent à leurs besoins, tout en renforçant l'interopérabilité et 
                la collaboration inter-administrative. Devenir référent pour un logiciel vous permet d'attester de son déploiement 
                au sein de votre administration, de contribuer à la mise à jour des informations pertinentes sur ce logiciel 
                (version minimale recommandée, fiche, etc.), et d'accepter d'être contacté par d'autres agents publics pour 
                échanger sur le logiciel en question. En tant que référent SILL, vous pouvez également vous inscrire à la 
                liste de discussion des mainteneurs du SILL et participer aux réunions des mainteneurs, renforçant ainsi la 
                coopération et le partage d'expérience au sein de la communauté des référents. En somme, contribuer au SILL en tant que 
                DSI vous offre l'opportunité de promouvoir l'utilisation des logiciels libres, de développer votre expertise et d'encourager 
                une culture d'ouverture et de collaboration au sein de l'administration.`
            },
            "SoftwareForm": {
                "title software update form": "Mettre à jour un logiciel",
                "stepper title": ({ currentStepIndex }) => {
                    switch (currentStepIndex) {
                        case 1:
                            return "Quel type de logiciel souhaitez-vous ajouter ?";
                        case 2:
                            return "À propos du logiciel";
                        case 3:
                            return "Quelques pré-requis ?";
                        case 4:
                            return "Logiciels similaires et équivalents propriétaires";
                        default:
                            return "";
                    }
                },
                "submit": "Ajouter le logiciel"
            },
            "SoftwareFormStep1": {
                "software desktop": "Logiciel installable sur poste de travail",
                "software cloud":
                    "Solution logicielle applicative hébergée dans le cloud",
                "software cloud hint": "Cloud public ou cloud de votre organisation",
                "module": "Brique ou modules techniques",
                "module hint": "Par exemple des proxy, serveurs HTTP ou plugins",
                "checkbox legend":
                    "Système d'exploitation sur lequel le logiciel peut être installé"
            },
            "SoftwareFormStep2": {
                "wikidata id": "Identifiant Wikidata",
                "wikidata id hint": (
                    <>
                        Associer le logiciel à une fiche{" "}
                        <a href="https://www.wikidata.org/wiki/Wikidata:Main_Page">
                            Wikidata
                        </a>{" "}
                        déjà existante
                    </>
                ),
                "wikidata id information":
                    "Cette information remplira automatiquement d'autres champs",
                "comptoir du libre id": "Identifiant Comptoire du Libre",
                "comptoir du libre id hint": "URL de la page ou identifiant numérique",
                "software name": "Nom du logiciel",
                "software feature": "Fonction du logiciel",
                "software feature hint":
                    "Décrivez en quelques mots les fonctionnalités du logiciel",
                "license": "License du logiciel",
                "license hint": "(GNU, GPL, BSD, etc.)",
                "minimal version": "Version minimale",
                "minimal version hint":
                    "Version la plus ancienne encore acceptable d'avoir en production",
                "url or numeric id":
                    "Ce champs doit être une url ou un numéro d'identifiant",
                "autofill notice":
                    "Cette information remplira automatiquement d'autres champs"
            },
            "SoftwareFormStep3": {
                "is present in support market":
                    "Le logiciel est-il présent sur le marché de support ?",
                "is from french public service":
                    "Le logiciel est-il développé par le service public français ?"
            },
            "SoftwareFormStep4": {
                "similar software": "Ce logiciel est une alternative à ...",
                "similar software hint":
                    "Associez le logiciel à des logiciel similaire, propriétaire ou non"
            },
            "InstanceForm": {
                "breadcrumb add instance": "Ajouter une instance",
                "breadcrumb update instance": "Mettre à jour une instance",
                "title add instance form": "Ajouter une instance de logiciel",
                "title update instance form": "Mettre à jour une instance de logiciel",
                "stepper title": ({ currentStepIndex }) => {
                    switch (currentStepIndex) {
                        case 1:
                            return "À propos du logiciel instancié";
                        case 2:
                            return "À propos de l'instance";
                        default:
                            return "";
                    }
                },
                "submit": "Add instance"
            },
            "InstanceFormStep1": {
                "software instance":
                    "Quel est le logiciel principal utilisé et déployé par votre instance ?",
                "other software":
                    "Y a-t-il d'autres logiciels mobilisés par votre instance ?"
            },
            "InstanceFormStep2": {
                "is in public access label":
                    "Votre instance est-elle accessible publiquement ?",
                "is in public access hint": "*Au sein du service public",
                "instance url label": "Si oui, quel est l'URL de l'instance ?",
                "instance url hint":
                    "Afin de proposer un accès rapide au service proposé",
                "organization label": "Quelle est l'organisation concernée ?",
                "organization hint":
                    "Quelle est l'organization étatique qui maintient cette instance ?",
                "targeted public label": "Quel est le public concerné ?",
                "targeted public hint":
                    "Décrivez en quelques mots à qui l'offre de service est proposée"
            },
            "SoftwareCatalogCard": {
                "latest version": ({ fromNowText }) => `Dernière version ${fromNowText}`,
                "declare oneself referent": "Se déclarer référent / utilisateur",
                "isDesktop": "Ce logiciel s'installe sur ordinateur",
                "isFromFrenchPublicService":
                    "Ce logiciel est originaire du service public français",
                "isPresentInSupportMarket":
                    "Ce logiciel est présent dans le marcher de support"
            },
            "SoftwareCatalogControlled": {
                "search results": ({ count }) =>
                    `${count} logiciel libre${count === 1 ? "" : "s"}`,
                "sort by": "Trier par",
                "added_time": "Dernier ajouté",
                "update_time": "Dernier mis à jour",
                "referent_count": "Nombre de référent",
                "referent_count_ASC": "Nombre de référent croissant",
                "user_count": "Nombre d'utilisateur",
                "user_count_ASC": "Nombre d'utilisateur croissant",
                "latest_version_publication_date": "Dernière version publiée",
                "no software found": "Aucun logiciel trouvé",
                "best_match": "Résultats les plus pertinents"
            },
            "SoftwareCatalogSearch": {
                "placeholder": "Rechercher un logiciel, un mot, une référence",
                "filtersButton": "Filtres",
                "organizationLabel": "Organization",
                "categoriesLabel": "Catégories",
                "environnement label": "Environement d'utilisation",
                "prerogativesLabel": "Prérogatives",
                "filters": "Filtres",
                "isInstallableOnUserTerminal": "Installable sur un poste agent",
                "isFromFrenchPublicServices": "Développé par le service public",
                "doRespectRgaa": "Respecte les normes RGAA",
                "isPresentInSupportContract": "Présent dans le marché de support",
                "isTestable": "Est essayable",
                "organization filter hint":
                    "Afficher uniquement les logiciels aillant au mois référent dans une organisation donnée",
                "linux": undefined,
                "mac": undefined,
                "windows": undefined,
                "browser": "Navigateur internet (Ex: Jupiter Notebook)",
                "stack":
                    "Biblothèques, frameworks et autre briques techniques (Ex: Angular, Ngnix, etc.)",
                "number of prerogatives selected": ({ count }) =>
                    count === 0
                        ? "Aucune"
                        : `${count} sélectionnée${count === 1 ? "" : "s"}`
            },
            "SoftwareDetails": {
                "catalog breadcrumb": "Le catalogue de logiciel",
                "tab title overview": "Aperçu",
                "tab title instance": ({ instanceCount }) =>
                    `Instances référencées (${instanceCount})`,
                "tab title alike software": ({ alikeSoftwareCount }) =>
                    `Logiciel similaires ou équivalents propriétaires (${alikeSoftwareCount})`,
                "about": "À propos",
                "use full links": "Liens utiles",
                "prerogatives": "Prérogatives",
                "last version": "Dernière version : ",
                "last version date": ({ date }) => `en ${date}`,
                "register": "Date de l'ajout : ",
                "register date": ({ date }) => `${date}`,
                "minimal version": "Version minimale requise : ",
                "license": "License : ",
                "declare oneself referent": "Se déclarer référent / utilisateur",
                "isDesktop": "Installable sur poste agent",
                "isPresentInSupportMarket": "Présent dans le marché de support",
                "isFromFrenchPublicService": "Développé par le service public",
                "isRGAACompliant": "Respecte les normes RGAA",
                "service provider": "Voir les prestataires de services",
                "comptoire du libre sheet": "Consulter la fiche du Comptoire du Libre",
                "wikiData sheet": "Consulter la fiche de Wikidata",
                "share software": "Partager la fiche",
                "declare referent": "Se déclarer référent / utilisateur",
                "edit software": "Éditer la fiche logiciel"
            },
            "HeaderDetailCard": {
                "authors": "Auteurs : ",
                "website": "Site web officiel",
                "repository": "Dépôt du code source"
            },
            "PreviewTab": {
                "about": "À propos",
                "use full links": "Liens utiles",
                "prerogatives": "Prérogatives",
                "last version": "Dernière version : ",
                "last version date": ({ date }) => `en ${date}`,
                "register": "Date de l'ajout : ",
                "register date": ({ date }) => `${date}`,
                "minimal version": "Version minimale requise : ",
                "license": "License : ",
                "isDesktop": "Installable sur poste agent",
                "isPresentInSupportMarket": "Présent dans le marché de support",
                "isFromFrenchPublicService": "Développé par le service public",
                "isRGAACompliant": "Respecte les normes RGAA",
                "service provider": "Voir les prestataires de services",
                "comptoire du libre sheet": "Consulter la fiche du Comptoire du Libre",
                "wikiData sheet": "Consulter la fiche de Wikidata"
            },
            "ReferencedInstancesTab": {
                "instanceCount": ({ instanceCount, publicOrganizationCount }) =>
                    `${instanceCount} instances maintenues par ${publicOrganizationCount} organisations publiques`,
                "concerned public": "Public concerné : ",
                "go to instance": "Accéder à l'instance"
            },
            "AlikeSoftwareTab": {
                "alike software sill": "Logiciels similaires sur le SILL",
                "alike software internal": "Logiciels équivalents propriétaires"
            },
            "DetailUsersAndReferents": {
                "userAndReferentCount": ({ userCount, referentCount, referentColor }) => (
                    <>
                        {userCount !== 0 && <>{userCount} utilisateurs et </>}
                        <span style={{ "color": referentColor }}>
                            {referentCount} referents
                        </span>
                    </>
                )
            },
            "SoftwareUserAndReferent": {
                "catalog breadcrumb": "Software catalog",
                "user and referent breadcrumb": "Utilisateurs et référents",
                "title": "Utilisateurs et référents",
                "tab user title": "Utilisateurs",
                "tab referent title": "Référents",
                "category": "Catégorie",
                "softwareDetails": "Voir la fiche logiciel",
                "declare user": "Se déclarer utilisateur",
                "declare referent": "Se déclarer référent",
                "is technical expert": "Expert technique",
                "organization": "Organisation",
                "is user of": "Est utilisateur de",
                "is referent of": "Est référent de",
                "use case": "Cas d'usage"
            },
            "DeclarationForm": {
                "catalog breadcrumb": "Le catalogue de logiciel",
                "declare yourself user or referent breadcrumb":
                    "Se déclarer utilisateur ou référent du logiciel",
                "send": "Envoyer ma déclaration",
                "title step 1": "Comment souhaitez-vous déclarer ?",
                "title step 2 user": "À propos de votre usage",
                "title step 2 referent": "À propos de votre référencement"
            },
            "DeclarationFormStep1": {
                "user type label": "Je suis un utilisateur de ce logiciel",
                "user type hint": "Au sein de mon établissement",
                "referent type label": "Je souhaite devenir référent de ce logiciel",
                "referent type hint":
                    "Comme garant et référence de l'utilisation du logiciel au sein de mon établissement"
            },
            "DeclarationFormStep2User": {
                "useCase": "Décrivez en quelques mots votre cas d'usage",
                "environment": "Dans quel environnement utilisez-vous ce logiciel ?",
                "version": "Quelle version du logiciel utilisez vous ? (Optionnel)",
                "service": "Plus précisément, quel service du logiciel utilisez-vous ?"
            },
            "DeclarationFormStep2Referent": {
                "legend title": "Êtes-vous un expert technique concernant ce logiciel ?",
                "legend hint":
                    "Vous pouvez répondre aux questions techniques d'agents et de DSI",
                "useCase":
                    "Décrivez en quelques mots le cas d'usage de votre administration",
                "service":
                    "Plus précisément, pour quel service du logiciel vous déclarez-vous référent ?"
            },
            "Account": {
                "title": "Mon compte",
                "mail": "Adresse de courriel",
                "organization": "Nom de l'établissement de rattachement",
                "change password": "Changez votre mot de passe",
                "no organization": "Aucune organisation"
            },
            "Header": {
                "home title": "Accueil - Socle interministériel de logiciels libres",
                "title": "Socle interministériel de logiciels libres",
                "navigation welcome": "Bienvenue sur le SILL",
                "navigation catalog": "Catalogue de logiciel",
                "navigation add software": "Ajouter un logiciel ou une instance",
                "navigation support request": "Demande d'accompagement",
                "navigation about": "À propos du site",
                "quick access test": "Test immédiat",
                "quick access login": "Se connecter",
                "quick access logout": "Se déconnecter",
                "quick access account": "Mon compte",
                "select language": "Sélectionner une langue"
            }
            /* spell-checker: enable */
        }
    }
);

export { useTranslation, resolveLocalizedString, useLang, useResolveLocalizedString };

export const evtLang = statefulObservableToStatefulEvt({
    "statefulObservable": $lang
});

export const zLocalizedString = z.union([
    z.string(),
    z.record(createUnionSchema(languages), z.string())
]);

{
    type Got = ReturnType<(typeof zLocalizedString)["parse"]>;
    type Expected = LocalizedString;

    assert<Equals<Got, Expected>>();
}

export const softwareCategoriesFrBySoftwareCategoryEn: Record<string, string> = {
    /* spell-checker: disable */
    "Operating Systems": "Systèmes d'exploitation",
    "Web Servers": "Serveurs Web",
    "Databases": "Bases de données",
    "Programming Languages": "Langages de programmation",
    "Web Frameworks": "Frameworks Web",
    "Testing & CI/CD": "Tests & CI/CD",
    "Version Control": "Gestion de versions",
    "Virtualization & Containers": "Virtualisation & Conteneurs",
    "IDEs & Text Editors": "IDEs & Éditeurs de texte",
    "Project Management & Collaboration": "Gestion de projets & Collaboration",
    "Content Management Systems": "Systèmes de gestion de contenu",
    "E-Learning & Education": "E-Learning & Éducation",
    "Desktop Applications": "Applications de bureau",
    "Web Applications": "Applications Web",
    "Office & Productivity": "Bureautique & Productivité",
    "Security & Privacy": "Sécurité & Confidentialité",
    "Web Browsers & Extensions": "Navigateurs Web & Extensions",
    "Email Clients & Servers": "Clients de messagerie & Serveurs",
    "API Management & Networking": "Gestion d'API & Réseautage",
    "GeoSpatial": "GéoSpatial",
    "Other Development Tools": "Autres outils de développement",
    "Miscellaneous": "Divers"
    /* spell-checker: enable */
};
