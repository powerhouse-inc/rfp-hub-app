import { useSetPHAppConfig } from "@powerhousedao/reactor-browser";
import type { EditorProps } from "document-model";
import { ApplicantDashboard } from "./components/ApplicantDashboard.js";
import { editorConfig } from "./config.js";
import "../design-tokens.css";

export default function Editor(props: EditorProps) {
  useSetPHAppConfig(editorConfig);
  return (
    <div className="rfp-scope" style={{ height: "100%" }}>
      <ApplicantDashboard {...props} />
    </div>
  );
}
