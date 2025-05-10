import React, { useState, useEffect } from "react";
import Split from "react-split";
import CodeEditor from "../components/CodeEditor";
import SettingsPanel from "../components/SettingsPannel";
import dummyCode from "../assets/dummyCode"

const Home = () => {
    const [language, setLanguage] = useState("cpp");
    const [languageId, setLanguageId] = useState(54);
    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState(16);
    const [fontFamily, setFontFamily] = useState("Fira Code");
    const [userInput, setUserInput] = useState("");
    const [code, setCode] = useState("");
    const [output, setOutput] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    // Load saved settings from localStorage
    useEffect(() => {
        const storedSettings = {
            language: localStorage.getItem("language"),
            theme: localStorage.getItem("theme"),
            fontSize: localStorage.getItem("fontSize"),
            fontFamily: localStorage.getItem("fontFamily"),
        };

        if (storedSettings.language) setLanguage(storedSettings.language);
        if (storedSettings.theme) setTheme(storedSettings.theme);
        if (storedSettings.fontSize)
            setFontSize(Number(storedSettings.fontSize));
        if (storedSettings.fontFamily) setFontFamily(storedSettings.fontFamily);
    }, []);

    // Save settings to localStorage
    useEffect(() => {
        localStorage.setItem("language", language);
        localStorage.setItem("theme", theme);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("fontFamily", fontFamily);
    }, [language, theme, fontSize, fontFamily]);

    useEffect(() => {
        setCode(dummyCode[language]);
    }, [language]);

    // Handle code execution
    const handleRun = async () => {
        setIsRunning(true); // Set loading state
        setOutput(""); // Clear previous output

        try {
            const response = await fetch("http://localhost:5000/compile", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code, languageId, input: userInput }),
            });

            const data = await response.json();

            if (data.output || data.error || data.compileOutput) {
                const combinedOutput = [
                    data.output,
                    data.error,
                    data.compileOutput,
                ]
                    .filter(Boolean)
                    .join("\n");

                setOutput(combinedOutput);
            } else {
                setOutput("No output");
            }
        } catch (error) {
            console.error("Error:", error);
            setOutput("Error: Failed to compile code");
        } finally {
            setIsRunning(false);
        }
    };

    return (
        <>
            <SettingsPanel
                language={language}
                languageId={languageId}
                setLanguageId={setLanguageId}
                setLanguage={setLanguage}
                theme={theme}
                setTheme={setTheme}
                fontSize={fontSize}
                setFontSize={setFontSize}
                fontFamily={fontFamily}
                setFontFamily={setFontFamily}
            />
            <Split
                sizes={[70, 30]}
                minSize={300}
                gutterSize={10}
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
                        code={code}
                        setCode={setCode}
                        language={language}
                        theme={theme}
                        fontSize={fontSize}
                        fontFamily={fontFamily}
                    />
                </div>

                {/* Right Pane: Input and Output */}
                <div className="border p-4 flex flex-col space-y-4">
                    {/* User Input Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">
                            User Input
                        </h3>
                        <textarea
                            className="w-full p-2 border rounded resize-none"
                            rows="4"
                            placeholder="Enter your input here..."
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                        ></textarea>
                        <button
                            className={`mt-2 px-4 py-2 rounded ${
                                isRunning ? "bg-gray-500" : "bg-blue-500"
                            } text-white`}
                            disabled={isRunning}
                            onClick={handleRun}
                        >
                            {isRunning ? "Running..." : "Run Code"}
                        </button>
                    </div>

                    {/* Program Output Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Output</h3>
                        <div
                            className="w-full p-2 border rounded min-h-[100px] max-h-[300px] overflow-auto"
                            style={{ whiteSpace: "pre-wrap" }}
                        >
                            {output || "The output will appear here..."}
                        </div>
                    </div>
                </div>
            </Split>
        </>
    );
};

export default Home;
