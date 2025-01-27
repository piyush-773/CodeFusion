import React, { useState, useEffect } from "react";
import Split from "react-split";
import CodeEditor from "../components/CodeEditor";
import SettingsPanel from "../components/SettingsPannel";

const Home = () => {
    const [language, setLanguage] = useState("javascript");
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState("Fira Code");
    const [userInput, setUserInput] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        const storedTheme = localStorage.getItem("theme");
        const storedFontSize = localStorage.getItem("fontSize");
        const storedFontFamily = localStorage.getItem("fontFamily");

        if (storedLanguage) setLanguage(storedLanguage);
        if (storedTheme) setTheme(storedTheme);
        if (storedFontSize) setFontSize(Number(storedFontSize));
        if (storedFontFamily) setFontFamily(storedFontFamily);
    }, []);

    useEffect(() => {
        localStorage.setItem("language", language);
        localStorage.setItem("theme", theme);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("fontFamily", fontFamily);
    }, [language, theme, fontSize, fontFamily]);

    const runCode = () => {
        setOutput(`Output for input: "${userInput}"`);
    };

    return (
        <>
            <SettingsPanel
                language={language}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
                fontSize={fontSize}
                setFontSize={setFontSize}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
            />
            <Split
                sizes={[70, 30]} // Left: Editor, Right: Output/Input
                minSize={300}
                gutterSize={10}
                gutterAlign="center"
                className="flex"
                gutter={(index, direction) => {
                    const gutter = document.createElement("div");
                    gutter.className = `gutter gutter-${direction}`;
                    return gutter;
                }}
            >
                {/* Left Pane: Code Editor */}
                <div className="border p-2">
                    <CodeEditor
                        language={language}
                        theme={theme}
                        fontSize={fontSize}
                        fontFamily={fontFamily}
                    />
                </div>

                <div className="border p-4 flex flex-col space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            User Input
                        </h3>
                        <textarea
                            className="w-full p-2 border rounded"
                            rows="4"
                            placeholder="Enter your input here..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        ></textarea>
                        <button
                            className="mt-2 px-4 py-2 rounded"
                            onClick={runCode}
                        >
                            Run Code
                        </button>
                    </div>

                    {/* Program Output Box */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Output</h3>
                        <div className="w-full p-2 border rounded min-h-[100px]">
                            {output || "The output will appear here..."}
                        </div>
                    </div>
                </div>
            </Split>
        </>
    );
};

export default Home;
