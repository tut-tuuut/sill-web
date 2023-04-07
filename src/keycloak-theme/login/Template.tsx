// Copy pasted from: https://github.com/InseeFrLab/keycloakify/blob/main/src/lib/components/shared/Template.tsx

// You can replace all relative imports by cherry picking files from the keycloakify module.
// For example, the following import:
// import { assert } from "./tools/assert";
// becomes:
import { clsx } from "keycloakify/tools/clsx";
import type { TemplateProps } from "keycloakify/login/TemplateProps";
import { usePrepareTemplate } from "keycloakify/lib/usePrepareTemplate";
import type { KcContext } from "./kcContext";
import type { I18n } from "./i18n";
import { makeStyles } from "@codegouvfr/react-dsfr/tss";
import { useGetClassName } from "keycloakify/login/lib/useGetClassName";
import Header from "@codegouvfr/react-dsfr/Header";
import { fr } from "@codegouvfr/react-dsfr";
import { appLocationOrigin } from "keycloak-theme/login/valuesTransferredOverUrl";

export default function Template(props: TemplateProps<KcContext, I18n>) {
    const {
        displayInfo = false,
        displayMessage = true,
        displayRequiredFields = false,
        displayWide = false,
        showAnotherWayIfPresent = true,
        headerNode,
        showUsernameNode = null,
        children,
        infoNode = null,
        kcContext,
        i18n,
        doUseDefaultCss,
        classes: classes_props
    } = props;

    const { msg, msgStr } = i18n;

    const { getClassName } = useGetClassName({
        doUseDefaultCss,
        "classes": classes_props
    });

    const { auth, url, message, isAppInitiatedAction } = kcContext;

    const { isReady } = usePrepareTemplate({
        "doFetchDefaultThemeResources": doUseDefaultCss,
        url,
        "stylesCommon": ["lib/zocial/zocial.css"],
        "styles": ["css/login.css"],
        "htmlClassName": getClassName("kcHtmlClass"),
        "bodyClassName": undefined
    });

    const { classes, cx } = useStyles();

    if (!isReady) {
        return null;
    }

    return (
        <div>
            {(() => {
                const serviceTitle = "Socle interministériel de logiciels libres";

                return (
                    <Header
                        brandTop={
                            <>
                                République
                                <br />
                                Française
                            </>
                        }
                        serviceTitle={serviceTitle}
                        homeLinkProps={{
                            "href": appLocationOrigin,
                            "title": `${msgStr("home")} - ${serviceTitle}`
                        }}
                    />
                );
            })()}
            <div className={cx(fr.cx("fr-container"), classes.container)}>
                <div
                    className={cx(
                        classes.centerCol,
                        displayWide && getClassName("kcFormCardAccountClass")
                    )}
                >
                    <header className={getClassName("kcFormHeaderClass")}>
                        {!(
                            auth !== undefined &&
                            auth.showUsername &&
                            !auth.showResetCredentials
                        ) ? (
                            displayRequiredFields ? (
                                <div className={getClassName("kcContentWrapperClass")}>
                                    <div
                                        className={clsx(
                                            getClassName("kcLabelWrapperClass"),
                                            "subtitle"
                                        )}
                                    >
                                        <span className="subtitle">
                                            <span className="required">*</span>
                                            {msg("requiredFields")}
                                        </span>
                                    </div>
                                    <div className="col-md-10">
                                        <h1 id="kc-page-title">{headerNode}</h1>
                                    </div>
                                </div>
                            ) : (
                                <h2 id="kc-page-title">{headerNode}</h2>
                            )
                        ) : displayRequiredFields ? (
                            <div className={getClassName("kcContentWrapperClass")}>
                                <div
                                    className={cx(
                                        getClassName("kcLabelWrapperClass"),
                                        "subtitle"
                                    )}
                                >
                                    <span className="subtitle">
                                        <span className="required">*</span>{" "}
                                        {msg("requiredFields")}
                                    </span>
                                </div>
                                <div className="col-md-10">
                                    {showUsernameNode}
                                    <div className={getClassName("kcFormGroupClass")}>
                                        <div id="kc-username">
                                            <label id="kc-attempted-username">
                                                {auth?.attemptedUsername}
                                            </label>
                                            <a
                                                id="reset-login"
                                                href={url.loginRestartFlowUrl}
                                            >
                                                <div className="kc-login-tooltip">
                                                    <i
                                                        className={getClassName(
                                                            "kcResetFlowIcon"
                                                        )}
                                                    />
                                                    <span className="kc-tooltip-text">
                                                        {msg("restartLoginTooltip")}
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {showUsernameNode}
                                <div className={getClassName("kcFormGroupClass")}>
                                    <div id="kc-username">
                                        <label id="kc-attempted-username">
                                            {auth?.attemptedUsername}
                                        </label>
                                        <a
                                            id="reset-login"
                                            href={url.loginRestartFlowUrl}
                                        >
                                            <div className="kc-login-tooltip">
                                                <i
                                                    className={getClassName(
                                                        "kcResetFlowIcon"
                                                    )}
                                                />
                                                <span className="kc-tooltip-text">
                                                    {msg("restartLoginTooltip")}
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>
                        )}
                    </header>
                    <div id="kc-content">
                        <div id="kc-content-wrapper">
                            {/* App-initiated actions should not see warning messages about the need to complete the action during login. */}
                            {displayMessage &&
                                message !== undefined &&
                                (message.type !== "warning" || !isAppInitiatedAction) && (
                                    <div
                                        className={clsx("alert", `alert-${message.type}`)}
                                    >
                                        {message.type === "success" && (
                                            <span
                                                className={getClassName(
                                                    "kcFeedbackSuccessIcon"
                                                )}
                                            />
                                        )}
                                        {message.type === "warning" && (
                                            <span
                                                className={getClassName(
                                                    "kcFeedbackWarningIcon"
                                                )}
                                            />
                                        )}
                                        {message.type === "error" && (
                                            <span
                                                className={getClassName(
                                                    "kcFeedbackErrorIcon"
                                                )}
                                            />
                                        )}
                                        {message.type === "info" && (
                                            <span
                                                className={getClassName(
                                                    "kcFeedbackInfoIcon"
                                                )}
                                            />
                                        )}
                                        <p
                                            className={cx(
                                                classes.feedback,
                                                "kc-feedback-text"
                                            )}
                                            dangerouslySetInnerHTML={{
                                                "__html": message.summary
                                            }}
                                        />
                                    </div>
                                )}
                            <div>{children}</div>
                            {auth !== undefined &&
                                auth.showTryAnotherWayLink &&
                                showAnotherWayIfPresent && (
                                    <form
                                        id="kc-select-try-another-way-form"
                                        action={url.loginAction}
                                        method="post"
                                        className={cx(
                                            displayWide &&
                                                getClassName("kcContentWrapperClass")
                                        )}
                                    >
                                        <div
                                            className={cx(
                                                displayWide && [
                                                    getClassName(
                                                        "kcFormSocialAccountContentClass"
                                                    ),
                                                    getClassName(
                                                        "kcFormSocialAccountClass"
                                                    )
                                                ]
                                            )}
                                        >
                                            <div
                                                className={getClassName(
                                                    "kcFormGroupClass"
                                                )}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="tryAnotherWay"
                                                    value="on"
                                                />
                                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                                <a
                                                    href="#"
                                                    id="try-another-way"
                                                    onClick={() => {
                                                        document.forms[
                                                            "kc-select-try-another-way-form" as never
                                                        ].submit();
                                                        return false;
                                                    }}
                                                >
                                                    {msg("doTryAnotherWay")}
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            {displayInfo && (
                                <div
                                    id="kc-info"
                                    className={getClassName("kcSignUpClass")}
                                >
                                    <div
                                        id="kc-info-wrapper"
                                        className={getClassName("kcInfoAreaWrapperClass")}
                                    >
                                        {infoNode}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const useStyles = makeStyles({
    "name": { Template }
})(() => ({
    "container": {
        "marginTop": fr.spacing("10v")
    },
    "centerCol": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center"
    },
    "feedback": {
        "textAlign": "center"
    }
}));
