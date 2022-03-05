// @ts-ignore
import professorHelper from "./professor-helper.md";
import { MarkdownDisplay } from "../../components/markdown-display/MarkdownDisplay";

export const ProfessorsPage = () => {
    return <MarkdownDisplay fileName={professorHelper} />;
};
