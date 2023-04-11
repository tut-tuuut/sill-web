import { useEffect } from "react";
import { routes } from "ui/routes";
import { type PageRoute } from "./route";
import { id } from "tsafe/id";
import { LoadingFallback } from "ui/shared/LoadingFallback";
import { useStyles } from "@codegouvfr/react-dsfr/tss";
import { typeGuard } from "tsafe/typeGuard";
import { type Language, languages, evtLang } from "ui/i18n";
import { useCoreState, selectors } from "core";
import { assert } from "tsafe/assert";

type Props = {
    className?: string;
    route: PageRoute;
};

export default function SoftwareCatalog(props: Props) {
    const { className, route } = props;

    const { cx, css } = useStyles();

    const { softwareNameBySillId } = useCoreState(
        selectors.redirect.softwareNameBySillId
    );

    useEffect(() => {
        switch (route.name) {
            case "ogSill":
                {
                    {
                        const { lang } = route.params;

                        if (
                            typeGuard<Language>(
                                lang,
                                id<readonly string[]>(languages).includes(lang)
                            )
                        ) {
                            evtLang.state = lang;
                        }
                    }
                    const { id: softwareId } = route.params;

                    if (softwareId === undefined) {
                        routes.softwareCatalog().replace();
                        return;
                    }

                    const softwareName = softwareNameBySillId[softwareId];

                    assert(softwareName !== undefined);

                    if (softwareName === undefined) {
                        routes.page404().replace();
                        return;
                    }

                    routes.softwareDetails({ "name": softwareName }).replace();
                }
                break;
            case "onyxiaUiSillCatalog":
                {
                    const { q } = route.params;

                    const { search } = parseQuery(q);

                    routes.softwareCatalog({ "search": search || undefined }).replace();
                }
                break;
            case "onyxiaUiSillCard":
                {
                    const { name } = route.params;

                    if (Object.values(softwareNameBySillId).indexOf(name) === -1) {
                        routes.page404().replace();
                        return;
                    }

                    routes.softwareDetails({ name }).replace();
                }
                break;
        }
    }, []);

    return <LoadingFallback className={cx(css({ "height": "100%" }), className)} />;
}

type Query = {
    search: string;
    tags: string[];
};

function parseQuery(queryString: string): Query {
    if (!queryString.startsWith("{")) {
        return {
            "search": queryString,
            "tags": []
        };
    }

    return JSON.parse(queryString);
}
