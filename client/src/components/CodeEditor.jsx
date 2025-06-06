
import React, { useEffect, useState } from "react";
import Monaco from "@monaco-editor/react";
import * as monaco from "monaco-editor";

const CodeEditor = ({ code, setCode, language, theme, fontSize, fontFamily }) => {
    useEffect( ()=> {
      const monacoTheme = theme.replace("theme-", "");
      monaco.editor.setTheme(monacoTheme);
    }, [theme])

    return (
        <Monaco
            height="80vh"
            language={language}
            theme={theme}
            value={code}
            options={{
                fontSize,
                fontFamily,
                automaticLayout: true,
            }}
            onChange={(value) => setCode(value || "")}
        />
    );
};

export default CodeEditor;
