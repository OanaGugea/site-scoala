// @ts-ignore
import generalInfo from "./generalInfo.md";
import { MarkdownDisplay } from "../../components/markdown-display/MarkdownDisplay";

export const GeneralInformation = () => {
  return <MarkdownDisplay fileName={generalInfo} />;
};
