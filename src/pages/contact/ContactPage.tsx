// @ts-ignore
import contactInfo from "../../files/contactInfo.md";
import { MarkdownDisplay } from "../../components/markdown-display/MarkdownDisplay";

export const ContactPage = () => {
  return <MarkdownDisplay fileName={contactInfo} />;
};
